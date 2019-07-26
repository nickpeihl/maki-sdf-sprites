import { spritesheet } from '@elastic/maki';
import sprites from '@elastic/maki/dist/sprite@1.png';
import { RGBAImage } from './utils/image';
import { randomPoint } from '@turf/random';
import { propEach } from '@turf/meta';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'https://tiles.maps.elastic.co/styles/dark-matter/style.json',
});

const spriteData = spritesheet['1'];
const icons = Object.keys(spriteData).filter(sprite => {
  return sprite.endsWith('-15');
});
const points = randomPoint(2000);
propEach(points, (cur, i) => {
  cur.icon = icons[Math.floor(Math.random() * (icons.length-1))];
  cur.color =
    '#' +
    Math.random()
      .toString(16)
      .substr(-6);
  cur.orientation = Math.random() * (360 - 0) + 0;
  cur.size = Math.random() * (2.5 - 0.5) + 0.5;
});

map.on('load', function() {
  const image = new Image();
  image.onload = (el) => {
    const imageData = getImageData(el.currentTarget);
    for (const id in spriteData) {
      const { width, height, x, y, sdf, pixelRatio } = spriteData[id];
      const data = new RGBAImage({ width, height });
      RGBAImage.copy(imageData, data, { x, y }, { x: 0, y: 0 }, { width, height });
      // result[id] = { data, pixelRatio, sdf };
      map.addImage(id, data,  { pixelRatio, sdf });
    }
  };
  image.src = sprites;

  map.addLayer({
    id: 'points',
    type: 'symbol',
    source: {
      type: 'geojson',
      data: points,
    },
    layout: {
      'icon-image': ['get', 'icon'],
      'icon-size': ['get', 'size'],
      'icon-rotate': ['get', 'orientation'],
      'icon-allow-overlap': true
    },
    paint: {
      'icon-color': ['get', 'color'],
    },
  });
});

function getImageData(img) {
  const canvas = window.document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('failed to create canvas 2d context');
  }
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0, img.width, img.height);
  return context.getImageData(0, 0, img.width, img.height);
}
