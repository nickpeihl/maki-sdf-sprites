const { pathToSDF } = require('fontnik');
const SvgPath = require('svgpath');
const { randomPoint } = require('@turf/random');
const { propEach } = require('@turf/meta');
const { PNG } = require('pngjs');

var map = new mapboxgl.Map({
  container: 'map',
  style: 'https://tiles.maps.elastic.co/styles/dark-matter/style.json',
});

const d = "M15,6.8182L15,8.5l-6.5-1l-0.3182,4.7727L11,14v1l-3.5-0.6818L4,15v-1l2.8182-1.7273L6.5,7.5L0,8.5V6.8182L6.5,4.5v-3c0,0,0-1.5,1-1.5s1,1.5,1,1.5v2.8182L15,6.8182z"
var svgPath = new SvgPath(d).abs().unshort().unarc();

var commands = svgPath.segments.map(function(segment) {
  switch (segment[0]) {
    case 'H':
      return { type: segment[0], x: segment[1] };
    case 'V':
      return { type: segment[0], y: segment[1] };
    case 'M':
    case 'L':
      return { type: segment[0], x: segment[1], y: segment[2] };
    case 'Q':
      return {
        type: segment[0],
        x1: segment[1],
        y1: segment[2],
        x: segment[3],
        y: segment[4]
      };
    case 'C':
      return {
        type: segment[0],
        x1: segment[1],
        y1: segment[2],
        x2: segment[3],
        y2: segment[4],
        x: segment[5],
        y: segment[6]
      };
    case 'Z':
      return { type: segment[0] };
    default:
      throw new Error('Unknown command: ' + segment[0]);
  }
});

const w = 15;
const h = 15;
const wb = w + 2 * 3;
const hb = h + 2 * 3;
const buffer = 3;
const cutoff = 2 / 8;

const img = pathToSDF(commands, w, h, buffer, cutoff);
var png = new PNG({ width: wb, height: hb });

for (var j = 0; j < wb * hb; j++) {
  png.data[j * 4] = 0;
  png.data[j * 4 + 1] = 0;
  png.data[j * 4 + 2] = 0;
  png.data[j * 4 + 3] = img[j];
}

const points = randomPoint(100);
propEach(points, (cur, i) => {
  cur.icon = 'elastic-maki-airplane';
  cur.color = '#'+Math.random().toString(16).substr(-6);
  cur.orientation = Math.random() * (360 - 0) + 0;
  cur.size = Math.random() * (2.5 - 0.5) + 0.5;
});

map.on('load', function() {
  map.addImage('elastic-maki-airplane', {
    width: wb,
    height: hb,
    data: png.data
  }, {
    sdf: true
  });

  map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
          "type": "geojson",
          "data": points
        },
        "layout": {
              "icon-image":
                ["get", "icon"],
              "icon-size":
                ["get", "size"],
              "icon-rotate":
                ["get", "orientation"]
          },
          "paint": {
            "icon-color": ["get", "color"]
          }
  });
});
