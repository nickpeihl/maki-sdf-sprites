/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@elastic/maki/dist/sprite@1.json":
/*!*******************************************************!*\
  !*** ./node_modules/@elastic/maki/dist/sprite@1.json ***!
  \*******************************************************/
/*! exports provided: aerialway-15, airfield-15, airport-15, alcohol-shop-15, american-football-15, amusement-park-15, aquarium-15, arrow-es-15, art-gallery-15, attraction-15, bakery-15, bank-15, bar-15, barrier-15, baseball-15, basketball-15, bbq-15, beach-15, beer-15, bicycle-15, bicycle-share-15, blood-bank-15, boat-es-15, bowling-alley-15, bridge-15, building-15, building-alt1-15, bus-15, cafe-15, campsite-15, car-15, car-rental-15, car-repair-15, car-top-es-15, casino-15, castle-15, cemetery-15, charging-station-15, cinema-15, circle-15, circle-stroked-15, city-15, clothing-store-15, college-15, commercial-15, communications-tower-15, confectionery-15, convenience-15, cricket-15, cross-15, dam-15, danger-15, defibrillator-15, dentist-15, doctor-15, dog-park-15, drinking-water-15, embassy-15, emergency-phone-15, entrance-15, entrance-alt1-15, farm-15, fast-food-15, fence-15, ferry-15, fire-station-15, fitness-centre-15, florist-15, fuel-15, furniture-15, gaming-15, garden-15, garden-centre-15, gift-15, globe-15, golf-15, grocery-15, hairdresser-15, harbor-15, hardware-15, heart-15, heliport-15, home-15, horse-riding-15, hospital-15, ice-cream-15, industry-15, information-15, jewelry-store-15, karaoke-15, landmark-15, landuse-15, laundry-15, library-15, lighthouse-15, lodging-15, logging-15, marker-15, marker-stroked-15, mobile-phone-15, monument-15, mountain-15, museum-15, music-15, natural-15, optician-15, paint-15, park-15, park-alt1-15, parking-15, parking-garage-15, pharmacy-15, picnic-site-15, pitch-15, place-of-worship-15, playground-15, police-15, post-15, prison-15, rail-15, rail-light-15, rail-metro-15, ranger-station-15, recycling-15, religious-buddhist-15, religious-christian-15, religious-jewish-15, religious-muslim-15, residential-community-15, restaurant-15, restaurant-noodle-15, restaurant-pizza-15, restaurant-seafood-15, roadblock-15, rocket-15, school-15, scooter-15, shelter-15, shoe-15, shop-15, skateboard-15, skiing-15, slaughterhouse-15, slipway-15, snowmobile-15, soccer-15, square-15, square-stroked-15, stadium-15, star-15, star-stroked-15, suitcase-15, sushi-15, swimming-15, table-tennis-15, teahouse-15, telephone-15, tennis-15, theatre-15, toilet-15, town-15, town-hall-15, triangle-15, triangle-stroked-15, veterinary-15, viewpoint-15, village-15, volcano-15, volleyball-15, warehouse-15, waste-basket-15, watch-15, water-15, waterfall-15, watermill-15, wetland-15, wheelchair-15, windmill-15, zoo-15, aerialway-11, airfield-11, airport-11, alcohol-shop-11, american-football-11, amusement-park-11, aquarium-11, arrow-es-11, art-gallery-11, attraction-11, bakery-11, bank-11, bar-11, barrier-11, baseball-11, basketball-11, bbq-11, beach-11, beer-11, bicycle-11, bicycle-share-11, blood-bank-11, boat-es-11, bowling-alley-11, bridge-11, building-11, building-alt1-11, bus-11, cafe-11, campsite-11, car-11, car-rental-11, car-repair-11, car-top-es-11, casino-11, castle-11, cemetery-11, charging-station-11, cinema-11, circle-11, circle-stroked-11, city-11, clothing-store-11, college-11, commercial-11, communications-tower-11, confectionery-11, convenience-11, cricket-11, cross-11, dam-11, danger-11, defibrillator-11, dentist-11, doctor-11, dog-park-11, drinking-water-11, embassy-11, emergency-phone-11, entrance-11, entrance-alt1-11, farm-11, fast-food-11, fence-11, ferry-11, fire-station-11, fitness-centre-11, florist-11, fuel-11, furniture-11, gaming-11, garden-11, garden-centre-11, gift-11, globe-11, golf-11, grocery-11, hairdresser-11, harbor-11, hardware-11, heart-11, heliport-11, home-11, horse-riding-11, hospital-11, ice-cream-11, industry-11, information-11, jewelry-store-11, karaoke-11, landmark-11, landuse-11, laundry-11, library-11, lighthouse-11, lodging-11, logging-11, marker-11, marker-stroked-11, mobile-phone-11, monument-11, mountain-11, museum-11, music-11, natural-11, optician-11, paint-11, park-11, park-alt1-11, parking-11, parking-garage-11, pharmacy-11, picnic-site-11, pitch-11, place-of-worship-11, playground-11, police-11, post-11, prison-11, rail-11, rail-light-11, rail-metro-11, ranger-station-11, recycling-11, religious-buddhist-11, religious-christian-11, religious-jewish-11, religious-muslim-11, residential-community-11, restaurant-11, restaurant-noodle-11, restaurant-pizza-11, restaurant-seafood-11, roadblock-11, rocket-11, school-11, scooter-11, shelter-11, shoe-11, shop-11, skateboard-11, skiing-11, slaughterhouse-11, slipway-11, snowmobile-11, soccer-11, square-11, square-stroked-11, stadium-11, star-11, star-stroked-11, suitcase-11, sushi-11, swimming-11, table-tennis-11, teahouse-11, telephone-11, tennis-11, theatre-11, toilet-11, town-11, town-hall-11, triangle-11, triangle-stroked-11, veterinary-11, viewpoint-11, village-11, volcano-11, volleyball-11, warehouse-11, waste-basket-11, watch-11, water-11, waterfall-11, watermill-11, wetland-11, wheelchair-11, windmill-11, zoo-11, default */
/***/ (function(module) {

module.exports = {"aerialway-15":{"width":21,"height":21,"x":0,"y":0,"pixelRatio":1,"sdf":true},"airfield-15":{"width":21,"height":21,"x":21,"y":0,"pixelRatio":1,"sdf":true},"airport-15":{"width":21,"height":21,"x":0,"y":21,"pixelRatio":1,"sdf":true},"alcohol-shop-15":{"width":21,"height":21,"x":21,"y":21,"pixelRatio":1,"sdf":true},"american-football-15":{"width":21,"height":21,"x":42,"y":0,"pixelRatio":1,"sdf":true},"amusement-park-15":{"width":21,"height":21,"x":63,"y":0,"pixelRatio":1,"sdf":true},"aquarium-15":{"width":21,"height":21,"x":42,"y":21,"pixelRatio":1,"sdf":true},"arrow-es-15":{"width":21,"height":21,"x":63,"y":21,"pixelRatio":1,"sdf":true},"art-gallery-15":{"width":21,"height":21,"x":0,"y":42,"pixelRatio":1,"sdf":true},"attraction-15":{"width":21,"height":21,"x":21,"y":42,"pixelRatio":1,"sdf":true},"bakery-15":{"width":21,"height":21,"x":42,"y":42,"pixelRatio":1,"sdf":true},"bank-15":{"width":21,"height":21,"x":63,"y":42,"pixelRatio":1,"sdf":true},"bar-15":{"width":21,"height":21,"x":0,"y":63,"pixelRatio":1,"sdf":true},"barrier-15":{"width":21,"height":21,"x":21,"y":63,"pixelRatio":1,"sdf":true},"baseball-15":{"width":21,"height":21,"x":42,"y":63,"pixelRatio":1,"sdf":true},"basketball-15":{"width":21,"height":21,"x":63,"y":63,"pixelRatio":1,"sdf":true},"bbq-15":{"width":21,"height":21,"x":84,"y":0,"pixelRatio":1,"sdf":true},"beach-15":{"width":21,"height":21,"x":105,"y":0,"pixelRatio":1,"sdf":true},"beer-15":{"width":21,"height":21,"x":126,"y":0,"pixelRatio":1,"sdf":true},"bicycle-15":{"width":21,"height":21,"x":147,"y":0,"pixelRatio":1,"sdf":true},"bicycle-share-15":{"width":21,"height":21,"x":84,"y":21,"pixelRatio":1,"sdf":true},"blood-bank-15":{"width":21,"height":21,"x":105,"y":21,"pixelRatio":1,"sdf":true},"boat-es-15":{"width":21,"height":21,"x":126,"y":21,"pixelRatio":1,"sdf":true},"bowling-alley-15":{"width":21,"height":21,"x":147,"y":21,"pixelRatio":1,"sdf":true},"bridge-15":{"width":21,"height":21,"x":84,"y":42,"pixelRatio":1,"sdf":true},"building-15":{"width":21,"height":21,"x":105,"y":42,"pixelRatio":1,"sdf":true},"building-alt1-15":{"width":21,"height":21,"x":126,"y":42,"pixelRatio":1,"sdf":true},"bus-15":{"width":21,"height":21,"x":147,"y":42,"pixelRatio":1,"sdf":true},"cafe-15":{"width":21,"height":21,"x":84,"y":63,"pixelRatio":1,"sdf":true},"campsite-15":{"width":21,"height":21,"x":105,"y":63,"pixelRatio":1,"sdf":true},"car-15":{"width":21,"height":21,"x":126,"y":63,"pixelRatio":1,"sdf":true},"car-rental-15":{"width":21,"height":21,"x":147,"y":63,"pixelRatio":1,"sdf":true},"car-repair-15":{"width":21,"height":21,"x":0,"y":84,"pixelRatio":1,"sdf":true},"car-top-es-15":{"width":21,"height":21,"x":21,"y":84,"pixelRatio":1,"sdf":true},"casino-15":{"width":21,"height":21,"x":42,"y":84,"pixelRatio":1,"sdf":true},"castle-15":{"width":21,"height":21,"x":63,"y":84,"pixelRatio":1,"sdf":true},"cemetery-15":{"width":21,"height":21,"x":84,"y":84,"pixelRatio":1,"sdf":true},"charging-station-15":{"width":21,"height":21,"x":105,"y":84,"pixelRatio":1,"sdf":true},"cinema-15":{"width":21,"height":21,"x":126,"y":84,"pixelRatio":1,"sdf":true},"circle-15":{"width":21,"height":21,"x":147,"y":84,"pixelRatio":1,"sdf":true},"circle-stroked-15":{"width":21,"height":21,"x":0,"y":105,"pixelRatio":1,"sdf":true},"city-15":{"width":21,"height":21,"x":21,"y":105,"pixelRatio":1,"sdf":true},"clothing-store-15":{"width":21,"height":21,"x":42,"y":105,"pixelRatio":1,"sdf":true},"college-15":{"width":21,"height":21,"x":63,"y":105,"pixelRatio":1,"sdf":true},"commercial-15":{"width":21,"height":21,"x":84,"y":105,"pixelRatio":1,"sdf":true},"communications-tower-15":{"width":21,"height":21,"x":105,"y":105,"pixelRatio":1,"sdf":true},"confectionery-15":{"width":21,"height":21,"x":126,"y":105,"pixelRatio":1,"sdf":true},"convenience-15":{"width":21,"height":21,"x":147,"y":105,"pixelRatio":1,"sdf":true},"cricket-15":{"width":21,"height":21,"x":0,"y":126,"pixelRatio":1,"sdf":true},"cross-15":{"width":21,"height":21,"x":21,"y":126,"pixelRatio":1,"sdf":true},"dam-15":{"width":21,"height":21,"x":42,"y":126,"pixelRatio":1,"sdf":true},"danger-15":{"width":21,"height":21,"x":63,"y":126,"pixelRatio":1,"sdf":true},"defibrillator-15":{"width":21,"height":21,"x":84,"y":126,"pixelRatio":1,"sdf":true},"dentist-15":{"width":21,"height":21,"x":105,"y":126,"pixelRatio":1,"sdf":true},"doctor-15":{"width":21,"height":21,"x":126,"y":126,"pixelRatio":1,"sdf":true},"dog-park-15":{"width":21,"height":21,"x":147,"y":126,"pixelRatio":1,"sdf":true},"drinking-water-15":{"width":21,"height":21,"x":0,"y":147,"pixelRatio":1,"sdf":true},"embassy-15":{"width":21,"height":21,"x":21,"y":147,"pixelRatio":1,"sdf":true},"emergency-phone-15":{"width":21,"height":21,"x":42,"y":147,"pixelRatio":1,"sdf":true},"entrance-15":{"width":21,"height":21,"x":63,"y":147,"pixelRatio":1,"sdf":true},"entrance-alt1-15":{"width":21,"height":21,"x":84,"y":147,"pixelRatio":1,"sdf":true},"farm-15":{"width":21,"height":21,"x":105,"y":147,"pixelRatio":1,"sdf":true},"fast-food-15":{"width":21,"height":21,"x":126,"y":147,"pixelRatio":1,"sdf":true},"fence-15":{"width":21,"height":21,"x":147,"y":147,"pixelRatio":1,"sdf":true},"ferry-15":{"width":21,"height":21,"x":168,"y":0,"pixelRatio":1,"sdf":true},"fire-station-15":{"width":21,"height":21,"x":189,"y":0,"pixelRatio":1,"sdf":true},"fitness-centre-15":{"width":21,"height":21,"x":210,"y":0,"pixelRatio":1,"sdf":true},"florist-15":{"width":21,"height":21,"x":231,"y":0,"pixelRatio":1,"sdf":true},"fuel-15":{"width":21,"height":21,"x":252,"y":0,"pixelRatio":1,"sdf":true},"furniture-15":{"width":21,"height":21,"x":273,"y":0,"pixelRatio":1,"sdf":true},"gaming-15":{"width":21,"height":21,"x":294,"y":0,"pixelRatio":1,"sdf":true},"garden-15":{"width":21,"height":21,"x":315,"y":0,"pixelRatio":1,"sdf":true},"garden-centre-15":{"width":21,"height":21,"x":168,"y":21,"pixelRatio":1,"sdf":true},"gift-15":{"width":21,"height":21,"x":189,"y":21,"pixelRatio":1,"sdf":true},"globe-15":{"width":21,"height":21,"x":210,"y":21,"pixelRatio":1,"sdf":true},"golf-15":{"width":21,"height":21,"x":231,"y":21,"pixelRatio":1,"sdf":true},"grocery-15":{"width":21,"height":21,"x":252,"y":21,"pixelRatio":1,"sdf":true},"hairdresser-15":{"width":21,"height":21,"x":273,"y":21,"pixelRatio":1,"sdf":true},"harbor-15":{"width":21,"height":21,"x":294,"y":21,"pixelRatio":1,"sdf":true},"hardware-15":{"width":21,"height":21,"x":315,"y":21,"pixelRatio":1,"sdf":true},"heart-15":{"width":21,"height":21,"x":168,"y":42,"pixelRatio":1,"sdf":true},"heliport-15":{"width":21,"height":21,"x":189,"y":42,"pixelRatio":1,"sdf":true},"home-15":{"width":21,"height":21,"x":210,"y":42,"pixelRatio":1,"sdf":true},"horse-riding-15":{"width":21,"height":21,"x":231,"y":42,"pixelRatio":1,"sdf":true},"hospital-15":{"width":21,"height":21,"x":252,"y":42,"pixelRatio":1,"sdf":true},"ice-cream-15":{"width":21,"height":21,"x":273,"y":42,"pixelRatio":1,"sdf":true},"industry-15":{"width":21,"height":21,"x":294,"y":42,"pixelRatio":1,"sdf":true},"information-15":{"width":21,"height":21,"x":315,"y":42,"pixelRatio":1,"sdf":true},"jewelry-store-15":{"width":21,"height":21,"x":168,"y":63,"pixelRatio":1,"sdf":true},"karaoke-15":{"width":21,"height":21,"x":189,"y":63,"pixelRatio":1,"sdf":true},"landmark-15":{"width":21,"height":21,"x":210,"y":63,"pixelRatio":1,"sdf":true},"landuse-15":{"width":21,"height":21,"x":231,"y":63,"pixelRatio":1,"sdf":true},"laundry-15":{"width":21,"height":21,"x":252,"y":63,"pixelRatio":1,"sdf":true},"library-15":{"width":21,"height":21,"x":273,"y":63,"pixelRatio":1,"sdf":true},"lighthouse-15":{"width":21,"height":21,"x":294,"y":63,"pixelRatio":1,"sdf":true},"lodging-15":{"width":21,"height":21,"x":315,"y":63,"pixelRatio":1,"sdf":true},"logging-15":{"width":21,"height":21,"x":168,"y":84,"pixelRatio":1,"sdf":true},"marker-15":{"width":21,"height":21,"x":189,"y":84,"pixelRatio":1,"sdf":true},"marker-stroked-15":{"width":21,"height":21,"x":210,"y":84,"pixelRatio":1,"sdf":true},"mobile-phone-15":{"width":21,"height":21,"x":231,"y":84,"pixelRatio":1,"sdf":true},"monument-15":{"width":21,"height":21,"x":252,"y":84,"pixelRatio":1,"sdf":true},"mountain-15":{"width":21,"height":21,"x":273,"y":84,"pixelRatio":1,"sdf":true},"museum-15":{"width":21,"height":21,"x":294,"y":84,"pixelRatio":1,"sdf":true},"music-15":{"width":21,"height":21,"x":315,"y":84,"pixelRatio":1,"sdf":true},"natural-15":{"width":21,"height":21,"x":168,"y":105,"pixelRatio":1,"sdf":true},"optician-15":{"width":21,"height":21,"x":189,"y":105,"pixelRatio":1,"sdf":true},"paint-15":{"width":21,"height":21,"x":210,"y":105,"pixelRatio":1,"sdf":true},"park-15":{"width":21,"height":21,"x":231,"y":105,"pixelRatio":1,"sdf":true},"park-alt1-15":{"width":21,"height":21,"x":252,"y":105,"pixelRatio":1,"sdf":true},"parking-15":{"width":21,"height":21,"x":273,"y":105,"pixelRatio":1,"sdf":true},"parking-garage-15":{"width":21,"height":21,"x":294,"y":105,"pixelRatio":1,"sdf":true},"pharmacy-15":{"width":21,"height":21,"x":315,"y":105,"pixelRatio":1,"sdf":true},"picnic-site-15":{"width":21,"height":21,"x":168,"y":126,"pixelRatio":1,"sdf":true},"pitch-15":{"width":21,"height":21,"x":189,"y":126,"pixelRatio":1,"sdf":true},"place-of-worship-15":{"width":21,"height":21,"x":210,"y":126,"pixelRatio":1,"sdf":true},"playground-15":{"width":21,"height":21,"x":231,"y":126,"pixelRatio":1,"sdf":true},"police-15":{"width":21,"height":21,"x":252,"y":126,"pixelRatio":1,"sdf":true},"post-15":{"width":21,"height":21,"x":273,"y":126,"pixelRatio":1,"sdf":true},"prison-15":{"width":21,"height":21,"x":294,"y":126,"pixelRatio":1,"sdf":true},"rail-15":{"width":21,"height":21,"x":315,"y":126,"pixelRatio":1,"sdf":true},"rail-light-15":{"width":21,"height":21,"x":168,"y":147,"pixelRatio":1,"sdf":true},"rail-metro-15":{"width":21,"height":21,"x":189,"y":147,"pixelRatio":1,"sdf":true},"ranger-station-15":{"width":21,"height":21,"x":210,"y":147,"pixelRatio":1,"sdf":true},"recycling-15":{"width":21,"height":21,"x":231,"y":147,"pixelRatio":1,"sdf":true},"religious-buddhist-15":{"width":21,"height":21,"x":252,"y":147,"pixelRatio":1,"sdf":true},"religious-christian-15":{"width":21,"height":21,"x":273,"y":147,"pixelRatio":1,"sdf":true},"religious-jewish-15":{"width":21,"height":21,"x":294,"y":147,"pixelRatio":1,"sdf":true},"religious-muslim-15":{"width":21,"height":21,"x":315,"y":147,"pixelRatio":1,"sdf":true},"residential-community-15":{"width":21,"height":21,"x":0,"y":168,"pixelRatio":1,"sdf":true},"restaurant-15":{"width":21,"height":21,"x":21,"y":168,"pixelRatio":1,"sdf":true},"restaurant-noodle-15":{"width":21,"height":21,"x":42,"y":168,"pixelRatio":1,"sdf":true},"restaurant-pizza-15":{"width":21,"height":21,"x":63,"y":168,"pixelRatio":1,"sdf":true},"restaurant-seafood-15":{"width":21,"height":21,"x":84,"y":168,"pixelRatio":1,"sdf":true},"roadblock-15":{"width":21,"height":21,"x":105,"y":168,"pixelRatio":1,"sdf":true},"rocket-15":{"width":21,"height":21,"x":126,"y":168,"pixelRatio":1,"sdf":true},"school-15":{"width":21,"height":21,"x":147,"y":168,"pixelRatio":1,"sdf":true},"scooter-15":{"width":21,"height":21,"x":168,"y":168,"pixelRatio":1,"sdf":true},"shelter-15":{"width":21,"height":21,"x":189,"y":168,"pixelRatio":1,"sdf":true},"shoe-15":{"width":21,"height":21,"x":210,"y":168,"pixelRatio":1,"sdf":true},"shop-15":{"width":21,"height":21,"x":231,"y":168,"pixelRatio":1,"sdf":true},"skateboard-15":{"width":21,"height":21,"x":252,"y":168,"pixelRatio":1,"sdf":true},"skiing-15":{"width":21,"height":21,"x":273,"y":168,"pixelRatio":1,"sdf":true},"slaughterhouse-15":{"width":21,"height":21,"x":294,"y":168,"pixelRatio":1,"sdf":true},"slipway-15":{"width":21,"height":21,"x":315,"y":168,"pixelRatio":1,"sdf":true},"snowmobile-15":{"width":21,"height":21,"x":0,"y":189,"pixelRatio":1,"sdf":true},"soccer-15":{"width":21,"height":21,"x":21,"y":189,"pixelRatio":1,"sdf":true},"square-15":{"width":21,"height":21,"x":42,"y":189,"pixelRatio":1,"sdf":true},"square-stroked-15":{"width":21,"height":21,"x":63,"y":189,"pixelRatio":1,"sdf":true},"stadium-15":{"width":21,"height":21,"x":84,"y":189,"pixelRatio":1,"sdf":true},"star-15":{"width":21,"height":21,"x":105,"y":189,"pixelRatio":1,"sdf":true},"star-stroked-15":{"width":21,"height":21,"x":126,"y":189,"pixelRatio":1,"sdf":true},"suitcase-15":{"width":21,"height":21,"x":147,"y":189,"pixelRatio":1,"sdf":true},"sushi-15":{"width":21,"height":21,"x":168,"y":189,"pixelRatio":1,"sdf":true},"swimming-15":{"width":21,"height":21,"x":189,"y":189,"pixelRatio":1,"sdf":true},"table-tennis-15":{"width":21,"height":21,"x":210,"y":189,"pixelRatio":1,"sdf":true},"teahouse-15":{"width":21,"height":21,"x":231,"y":189,"pixelRatio":1,"sdf":true},"telephone-15":{"width":21,"height":21,"x":252,"y":189,"pixelRatio":1,"sdf":true},"tennis-15":{"width":21,"height":21,"x":273,"y":189,"pixelRatio":1,"sdf":true},"theatre-15":{"width":21,"height":21,"x":294,"y":189,"pixelRatio":1,"sdf":true},"toilet-15":{"width":21,"height":21,"x":315,"y":189,"pixelRatio":1,"sdf":true},"town-15":{"width":21,"height":21,"x":0,"y":210,"pixelRatio":1,"sdf":true},"town-hall-15":{"width":21,"height":21,"x":21,"y":210,"pixelRatio":1,"sdf":true},"triangle-15":{"width":21,"height":21,"x":42,"y":210,"pixelRatio":1,"sdf":true},"triangle-stroked-15":{"width":21,"height":21,"x":63,"y":210,"pixelRatio":1,"sdf":true},"veterinary-15":{"width":21,"height":21,"x":84,"y":210,"pixelRatio":1,"sdf":true},"viewpoint-15":{"width":21,"height":21,"x":105,"y":210,"pixelRatio":1,"sdf":true},"village-15":{"width":21,"height":21,"x":126,"y":210,"pixelRatio":1,"sdf":true},"volcano-15":{"width":21,"height":21,"x":147,"y":210,"pixelRatio":1,"sdf":true},"volleyball-15":{"width":21,"height":21,"x":168,"y":210,"pixelRatio":1,"sdf":true},"warehouse-15":{"width":21,"height":21,"x":189,"y":210,"pixelRatio":1,"sdf":true},"waste-basket-15":{"width":21,"height":21,"x":210,"y":210,"pixelRatio":1,"sdf":true},"watch-15":{"width":21,"height":21,"x":231,"y":210,"pixelRatio":1,"sdf":true},"water-15":{"width":21,"height":21,"x":252,"y":210,"pixelRatio":1,"sdf":true},"waterfall-15":{"width":21,"height":21,"x":273,"y":210,"pixelRatio":1,"sdf":true},"watermill-15":{"width":21,"height":21,"x":294,"y":210,"pixelRatio":1,"sdf":true},"wetland-15":{"width":21,"height":21,"x":315,"y":210,"pixelRatio":1,"sdf":true},"wheelchair-15":{"width":21,"height":21,"x":0,"y":231,"pixelRatio":1,"sdf":true},"windmill-15":{"width":21,"height":21,"x":21,"y":231,"pixelRatio":1,"sdf":true},"zoo-15":{"width":21,"height":21,"x":42,"y":231,"pixelRatio":1,"sdf":true},"aerialway-11":{"width":17,"height":17,"x":63,"y":231,"pixelRatio":1,"sdf":true},"airfield-11":{"width":17,"height":17,"x":80,"y":231,"pixelRatio":1,"sdf":true},"airport-11":{"width":17,"height":17,"x":97,"y":231,"pixelRatio":1,"sdf":true},"alcohol-shop-11":{"width":17,"height":17,"x":114,"y":231,"pixelRatio":1,"sdf":true},"american-football-11":{"width":17,"height":17,"x":131,"y":231,"pixelRatio":1,"sdf":true},"amusement-park-11":{"width":17,"height":17,"x":148,"y":231,"pixelRatio":1,"sdf":true},"aquarium-11":{"width":17,"height":17,"x":165,"y":231,"pixelRatio":1,"sdf":true},"arrow-es-11":{"width":17,"height":17,"x":182,"y":231,"pixelRatio":1,"sdf":true},"art-gallery-11":{"width":17,"height":17,"x":199,"y":231,"pixelRatio":1,"sdf":true},"attraction-11":{"width":17,"height":17,"x":216,"y":231,"pixelRatio":1,"sdf":true},"bakery-11":{"width":17,"height":17,"x":233,"y":231,"pixelRatio":1,"sdf":true},"bank-11":{"width":17,"height":17,"x":250,"y":231,"pixelRatio":1,"sdf":true},"bar-11":{"width":17,"height":17,"x":267,"y":231,"pixelRatio":1,"sdf":true},"barrier-11":{"width":17,"height":17,"x":284,"y":231,"pixelRatio":1,"sdf":true},"baseball-11":{"width":17,"height":17,"x":301,"y":231,"pixelRatio":1,"sdf":true},"basketball-11":{"width":17,"height":17,"x":318,"y":231,"pixelRatio":1,"sdf":true},"bbq-11":{"width":17,"height":17,"x":0,"y":252,"pixelRatio":1,"sdf":true},"beach-11":{"width":17,"height":17,"x":17,"y":252,"pixelRatio":1,"sdf":true},"beer-11":{"width":17,"height":17,"x":34,"y":252,"pixelRatio":1,"sdf":true},"bicycle-11":{"width":17,"height":17,"x":51,"y":252,"pixelRatio":1,"sdf":true},"bicycle-share-11":{"width":17,"height":17,"x":68,"y":252,"pixelRatio":1,"sdf":true},"blood-bank-11":{"width":17,"height":17,"x":85,"y":252,"pixelRatio":1,"sdf":true},"boat-es-11":{"width":17,"height":17,"x":102,"y":252,"pixelRatio":1,"sdf":true},"bowling-alley-11":{"width":17,"height":17,"x":119,"y":252,"pixelRatio":1,"sdf":true},"bridge-11":{"width":17,"height":17,"x":136,"y":252,"pixelRatio":1,"sdf":true},"building-11":{"width":17,"height":17,"x":153,"y":252,"pixelRatio":1,"sdf":true},"building-alt1-11":{"width":17,"height":17,"x":170,"y":252,"pixelRatio":1,"sdf":true},"bus-11":{"width":17,"height":17,"x":187,"y":252,"pixelRatio":1,"sdf":true},"cafe-11":{"width":17,"height":17,"x":204,"y":252,"pixelRatio":1,"sdf":true},"campsite-11":{"width":17,"height":17,"x":221,"y":252,"pixelRatio":1,"sdf":true},"car-11":{"width":17,"height":17,"x":238,"y":252,"pixelRatio":1,"sdf":true},"car-rental-11":{"width":17,"height":17,"x":255,"y":252,"pixelRatio":1,"sdf":true},"car-repair-11":{"width":17,"height":17,"x":272,"y":252,"pixelRatio":1,"sdf":true},"car-top-es-11":{"width":17,"height":17,"x":289,"y":252,"pixelRatio":1,"sdf":true},"casino-11":{"width":17,"height":17,"x":306,"y":252,"pixelRatio":1,"sdf":true},"castle-11":{"width":17,"height":17,"x":0,"y":269,"pixelRatio":1,"sdf":true},"cemetery-11":{"width":17,"height":17,"x":17,"y":269,"pixelRatio":1,"sdf":true},"charging-station-11":{"width":17,"height":17,"x":34,"y":269,"pixelRatio":1,"sdf":true},"cinema-11":{"width":17,"height":17,"x":51,"y":269,"pixelRatio":1,"sdf":true},"circle-11":{"width":17,"height":17,"x":68,"y":269,"pixelRatio":1,"sdf":true},"circle-stroked-11":{"width":17,"height":17,"x":85,"y":269,"pixelRatio":1,"sdf":true},"city-11":{"width":17,"height":17,"x":102,"y":269,"pixelRatio":1,"sdf":true},"clothing-store-11":{"width":17,"height":17,"x":119,"y":269,"pixelRatio":1,"sdf":true},"college-11":{"width":17,"height":17,"x":136,"y":269,"pixelRatio":1,"sdf":true},"commercial-11":{"width":17,"height":17,"x":153,"y":269,"pixelRatio":1,"sdf":true},"communications-tower-11":{"width":17,"height":17,"x":170,"y":269,"pixelRatio":1,"sdf":true},"confectionery-11":{"width":17,"height":17,"x":187,"y":269,"pixelRatio":1,"sdf":true},"convenience-11":{"width":17,"height":17,"x":204,"y":269,"pixelRatio":1,"sdf":true},"cricket-11":{"width":17,"height":17,"x":221,"y":269,"pixelRatio":1,"sdf":true},"cross-11":{"width":17,"height":17,"x":238,"y":269,"pixelRatio":1,"sdf":true},"dam-11":{"width":17,"height":17,"x":255,"y":269,"pixelRatio":1,"sdf":true},"danger-11":{"width":17,"height":17,"x":272,"y":269,"pixelRatio":1,"sdf":true},"defibrillator-11":{"width":17,"height":17,"x":289,"y":269,"pixelRatio":1,"sdf":true},"dentist-11":{"width":17,"height":17,"x":306,"y":269,"pixelRatio":1,"sdf":true},"doctor-11":{"width":17,"height":17,"x":0,"y":286,"pixelRatio":1,"sdf":true},"dog-park-11":{"width":17,"height":17,"x":17,"y":286,"pixelRatio":1,"sdf":true},"drinking-water-11":{"width":17,"height":17,"x":34,"y":286,"pixelRatio":1,"sdf":true},"embassy-11":{"width":17,"height":17,"x":51,"y":286,"pixelRatio":1,"sdf":true},"emergency-phone-11":{"width":17,"height":17,"x":68,"y":286,"pixelRatio":1,"sdf":true},"entrance-11":{"width":17,"height":17,"x":85,"y":286,"pixelRatio":1,"sdf":true},"entrance-alt1-11":{"width":17,"height":17,"x":102,"y":286,"pixelRatio":1,"sdf":true},"farm-11":{"width":17,"height":17,"x":119,"y":286,"pixelRatio":1,"sdf":true},"fast-food-11":{"width":17,"height":17,"x":136,"y":286,"pixelRatio":1,"sdf":true},"fence-11":{"width":17,"height":17,"x":153,"y":286,"pixelRatio":1,"sdf":true},"ferry-11":{"width":17,"height":17,"x":170,"y":286,"pixelRatio":1,"sdf":true},"fire-station-11":{"width":17,"height":17,"x":187,"y":286,"pixelRatio":1,"sdf":true},"fitness-centre-11":{"width":17,"height":17,"x":204,"y":286,"pixelRatio":1,"sdf":true},"florist-11":{"width":17,"height":17,"x":221,"y":286,"pixelRatio":1,"sdf":true},"fuel-11":{"width":17,"height":17,"x":238,"y":286,"pixelRatio":1,"sdf":true},"furniture-11":{"width":17,"height":17,"x":255,"y":286,"pixelRatio":1,"sdf":true},"gaming-11":{"width":17,"height":17,"x":272,"y":286,"pixelRatio":1,"sdf":true},"garden-11":{"width":17,"height":17,"x":289,"y":286,"pixelRatio":1,"sdf":true},"garden-centre-11":{"width":17,"height":17,"x":306,"y":286,"pixelRatio":1,"sdf":true},"gift-11":{"width":17,"height":17,"x":0,"y":303,"pixelRatio":1,"sdf":true},"globe-11":{"width":17,"height":17,"x":17,"y":303,"pixelRatio":1,"sdf":true},"golf-11":{"width":17,"height":17,"x":34,"y":303,"pixelRatio":1,"sdf":true},"grocery-11":{"width":17,"height":17,"x":51,"y":303,"pixelRatio":1,"sdf":true},"hairdresser-11":{"width":17,"height":17,"x":68,"y":303,"pixelRatio":1,"sdf":true},"harbor-11":{"width":17,"height":17,"x":85,"y":303,"pixelRatio":1,"sdf":true},"hardware-11":{"width":17,"height":17,"x":102,"y":303,"pixelRatio":1,"sdf":true},"heart-11":{"width":17,"height":17,"x":119,"y":303,"pixelRatio":1,"sdf":true},"heliport-11":{"width":17,"height":17,"x":136,"y":303,"pixelRatio":1,"sdf":true},"home-11":{"width":17,"height":17,"x":153,"y":303,"pixelRatio":1,"sdf":true},"horse-riding-11":{"width":17,"height":17,"x":170,"y":303,"pixelRatio":1,"sdf":true},"hospital-11":{"width":17,"height":17,"x":187,"y":303,"pixelRatio":1,"sdf":true},"ice-cream-11":{"width":17,"height":17,"x":204,"y":303,"pixelRatio":1,"sdf":true},"industry-11":{"width":17,"height":17,"x":221,"y":303,"pixelRatio":1,"sdf":true},"information-11":{"width":17,"height":17,"x":238,"y":303,"pixelRatio":1,"sdf":true},"jewelry-store-11":{"width":17,"height":17,"x":255,"y":303,"pixelRatio":1,"sdf":true},"karaoke-11":{"width":17,"height":17,"x":272,"y":303,"pixelRatio":1,"sdf":true},"landmark-11":{"width":17,"height":17,"x":289,"y":303,"pixelRatio":1,"sdf":true},"landuse-11":{"width":17,"height":17,"x":306,"y":303,"pixelRatio":1,"sdf":true},"laundry-11":{"width":17,"height":17,"x":323,"y":252,"pixelRatio":1,"sdf":true},"library-11":{"width":17,"height":17,"x":340,"y":252,"pixelRatio":1,"sdf":true},"lighthouse-11":{"width":17,"height":17,"x":357,"y":252,"pixelRatio":1,"sdf":true},"lodging-11":{"width":17,"height":17,"x":374,"y":252,"pixelRatio":1,"sdf":true},"logging-11":{"width":17,"height":17,"x":391,"y":252,"pixelRatio":1,"sdf":true},"marker-11":{"width":17,"height":17,"x":408,"y":252,"pixelRatio":1,"sdf":true},"marker-stroked-11":{"width":17,"height":17,"x":425,"y":252,"pixelRatio":1,"sdf":true},"mobile-phone-11":{"width":17,"height":17,"x":442,"y":252,"pixelRatio":1,"sdf":true},"monument-11":{"width":17,"height":17,"x":459,"y":252,"pixelRatio":1,"sdf":true},"mountain-11":{"width":17,"height":17,"x":476,"y":252,"pixelRatio":1,"sdf":true},"museum-11":{"width":17,"height":17,"x":493,"y":252,"pixelRatio":1,"sdf":true},"music-11":{"width":17,"height":17,"x":510,"y":252,"pixelRatio":1,"sdf":true},"natural-11":{"width":17,"height":17,"x":527,"y":252,"pixelRatio":1,"sdf":true},"optician-11":{"width":17,"height":17,"x":544,"y":252,"pixelRatio":1,"sdf":true},"paint-11":{"width":17,"height":17,"x":561,"y":252,"pixelRatio":1,"sdf":true},"park-11":{"width":17,"height":17,"x":578,"y":252,"pixelRatio":1,"sdf":true},"park-alt1-11":{"width":17,"height":17,"x":595,"y":252,"pixelRatio":1,"sdf":true},"parking-11":{"width":17,"height":17,"x":612,"y":252,"pixelRatio":1,"sdf":true},"parking-garage-11":{"width":17,"height":17,"x":629,"y":252,"pixelRatio":1,"sdf":true},"pharmacy-11":{"width":17,"height":17,"x":646,"y":252,"pixelRatio":1,"sdf":true},"picnic-site-11":{"width":17,"height":17,"x":323,"y":269,"pixelRatio":1,"sdf":true},"pitch-11":{"width":17,"height":17,"x":340,"y":269,"pixelRatio":1,"sdf":true},"place-of-worship-11":{"width":17,"height":17,"x":357,"y":269,"pixelRatio":1,"sdf":true},"playground-11":{"width":17,"height":17,"x":374,"y":269,"pixelRatio":1,"sdf":true},"police-11":{"width":17,"height":17,"x":391,"y":269,"pixelRatio":1,"sdf":true},"post-11":{"width":17,"height":17,"x":408,"y":269,"pixelRatio":1,"sdf":true},"prison-11":{"width":17,"height":17,"x":425,"y":269,"pixelRatio":1,"sdf":true},"rail-11":{"width":17,"height":17,"x":442,"y":269,"pixelRatio":1,"sdf":true},"rail-light-11":{"width":17,"height":17,"x":459,"y":269,"pixelRatio":1,"sdf":true},"rail-metro-11":{"width":17,"height":17,"x":476,"y":269,"pixelRatio":1,"sdf":true},"ranger-station-11":{"width":17,"height":17,"x":493,"y":269,"pixelRatio":1,"sdf":true},"recycling-11":{"width":17,"height":17,"x":510,"y":269,"pixelRatio":1,"sdf":true},"religious-buddhist-11":{"width":17,"height":17,"x":527,"y":269,"pixelRatio":1,"sdf":true},"religious-christian-11":{"width":17,"height":17,"x":544,"y":269,"pixelRatio":1,"sdf":true},"religious-jewish-11":{"width":17,"height":17,"x":561,"y":269,"pixelRatio":1,"sdf":true},"religious-muslim-11":{"width":17,"height":17,"x":578,"y":269,"pixelRatio":1,"sdf":true},"residential-community-11":{"width":17,"height":17,"x":595,"y":269,"pixelRatio":1,"sdf":true},"restaurant-11":{"width":17,"height":17,"x":612,"y":269,"pixelRatio":1,"sdf":true},"restaurant-noodle-11":{"width":17,"height":17,"x":629,"y":269,"pixelRatio":1,"sdf":true},"restaurant-pizza-11":{"width":17,"height":17,"x":646,"y":269,"pixelRatio":1,"sdf":true},"restaurant-seafood-11":{"width":17,"height":17,"x":323,"y":286,"pixelRatio":1,"sdf":true},"roadblock-11":{"width":17,"height":17,"x":340,"y":286,"pixelRatio":1,"sdf":true},"rocket-11":{"width":17,"height":17,"x":357,"y":286,"pixelRatio":1,"sdf":true},"school-11":{"width":17,"height":17,"x":374,"y":286,"pixelRatio":1,"sdf":true},"scooter-11":{"width":17,"height":17,"x":391,"y":286,"pixelRatio":1,"sdf":true},"shelter-11":{"width":17,"height":17,"x":408,"y":286,"pixelRatio":1,"sdf":true},"shoe-11":{"width":17,"height":17,"x":425,"y":286,"pixelRatio":1,"sdf":true},"shop-11":{"width":17,"height":17,"x":442,"y":286,"pixelRatio":1,"sdf":true},"skateboard-11":{"width":17,"height":17,"x":459,"y":286,"pixelRatio":1,"sdf":true},"skiing-11":{"width":17,"height":17,"x":476,"y":286,"pixelRatio":1,"sdf":true},"slaughterhouse-11":{"width":17,"height":17,"x":493,"y":286,"pixelRatio":1,"sdf":true},"slipway-11":{"width":17,"height":17,"x":510,"y":286,"pixelRatio":1,"sdf":true},"snowmobile-11":{"width":17,"height":17,"x":527,"y":286,"pixelRatio":1,"sdf":true},"soccer-11":{"width":17,"height":17,"x":544,"y":286,"pixelRatio":1,"sdf":true},"square-11":{"width":17,"height":17,"x":561,"y":286,"pixelRatio":1,"sdf":true},"square-stroked-11":{"width":17,"height":17,"x":578,"y":286,"pixelRatio":1,"sdf":true},"stadium-11":{"width":17,"height":17,"x":595,"y":286,"pixelRatio":1,"sdf":true},"star-11":{"width":17,"height":17,"x":612,"y":286,"pixelRatio":1,"sdf":true},"star-stroked-11":{"width":17,"height":17,"x":629,"y":286,"pixelRatio":1,"sdf":true},"suitcase-11":{"width":17,"height":17,"x":646,"y":286,"pixelRatio":1,"sdf":true},"sushi-11":{"width":17,"height":17,"x":323,"y":303,"pixelRatio":1,"sdf":true},"swimming-11":{"width":17,"height":17,"x":340,"y":303,"pixelRatio":1,"sdf":true},"table-tennis-11":{"width":17,"height":17,"x":357,"y":303,"pixelRatio":1,"sdf":true},"teahouse-11":{"width":17,"height":17,"x":374,"y":303,"pixelRatio":1,"sdf":true},"telephone-11":{"width":17,"height":17,"x":391,"y":303,"pixelRatio":1,"sdf":true},"tennis-11":{"width":17,"height":17,"x":408,"y":303,"pixelRatio":1,"sdf":true},"theatre-11":{"width":17,"height":17,"x":425,"y":303,"pixelRatio":1,"sdf":true},"toilet-11":{"width":17,"height":17,"x":442,"y":303,"pixelRatio":1,"sdf":true},"town-11":{"width":17,"height":17,"x":459,"y":303,"pixelRatio":1,"sdf":true},"town-hall-11":{"width":17,"height":17,"x":476,"y":303,"pixelRatio":1,"sdf":true},"triangle-11":{"width":17,"height":17,"x":493,"y":303,"pixelRatio":1,"sdf":true},"triangle-stroked-11":{"width":17,"height":17,"x":510,"y":303,"pixelRatio":1,"sdf":true},"veterinary-11":{"width":17,"height":17,"x":527,"y":303,"pixelRatio":1,"sdf":true},"viewpoint-11":{"width":17,"height":17,"x":544,"y":303,"pixelRatio":1,"sdf":true},"village-11":{"width":17,"height":17,"x":561,"y":303,"pixelRatio":1,"sdf":true},"volcano-11":{"width":17,"height":17,"x":578,"y":303,"pixelRatio":1,"sdf":true},"volleyball-11":{"width":17,"height":17,"x":595,"y":303,"pixelRatio":1,"sdf":true},"warehouse-11":{"width":17,"height":17,"x":612,"y":303,"pixelRatio":1,"sdf":true},"waste-basket-11":{"width":17,"height":17,"x":629,"y":303,"pixelRatio":1,"sdf":true},"watch-11":{"width":17,"height":17,"x":646,"y":303,"pixelRatio":1,"sdf":true},"water-11":{"width":17,"height":17,"x":336,"y":0,"pixelRatio":1,"sdf":true},"waterfall-11":{"width":17,"height":17,"x":353,"y":0,"pixelRatio":1,"sdf":true},"watermill-11":{"width":17,"height":17,"x":370,"y":0,"pixelRatio":1,"sdf":true},"wetland-11":{"width":17,"height":17,"x":387,"y":0,"pixelRatio":1,"sdf":true},"wheelchair-11":{"width":17,"height":17,"x":404,"y":0,"pixelRatio":1,"sdf":true},"windmill-11":{"width":17,"height":17,"x":421,"y":0,"pixelRatio":1,"sdf":true},"zoo-11":{"width":17,"height":17,"x":438,"y":0,"pixelRatio":1,"sdf":true}};

/***/ }),

/***/ "./node_modules/@elastic/maki/dist/sprite@2.json":
/*!*******************************************************!*\
  !*** ./node_modules/@elastic/maki/dist/sprite@2.json ***!
  \*******************************************************/
/*! exports provided: aerialway-15, airfield-15, airport-15, alcohol-shop-15, american-football-15, amusement-park-15, aquarium-15, arrow-es-15, art-gallery-15, attraction-15, bakery-15, bank-15, bar-15, barrier-15, baseball-15, basketball-15, bbq-15, beach-15, beer-15, bicycle-15, bicycle-share-15, blood-bank-15, boat-es-15, bowling-alley-15, bridge-15, building-15, building-alt1-15, bus-15, cafe-15, campsite-15, car-15, car-rental-15, car-repair-15, car-top-es-15, casino-15, castle-15, cemetery-15, charging-station-15, cinema-15, circle-15, circle-stroked-15, city-15, clothing-store-15, college-15, commercial-15, communications-tower-15, confectionery-15, convenience-15, cricket-15, cross-15, dam-15, danger-15, defibrillator-15, dentist-15, doctor-15, dog-park-15, drinking-water-15, embassy-15, emergency-phone-15, entrance-15, entrance-alt1-15, farm-15, fast-food-15, fence-15, ferry-15, fire-station-15, fitness-centre-15, florist-15, fuel-15, furniture-15, gaming-15, garden-15, garden-centre-15, gift-15, globe-15, golf-15, grocery-15, hairdresser-15, harbor-15, hardware-15, heart-15, heliport-15, home-15, horse-riding-15, hospital-15, ice-cream-15, industry-15, information-15, jewelry-store-15, karaoke-15, landmark-15, landuse-15, laundry-15, library-15, lighthouse-15, lodging-15, logging-15, marker-15, marker-stroked-15, mobile-phone-15, monument-15, mountain-15, museum-15, music-15, natural-15, optician-15, paint-15, park-15, park-alt1-15, parking-15, parking-garage-15, pharmacy-15, picnic-site-15, pitch-15, place-of-worship-15, playground-15, police-15, post-15, prison-15, rail-15, rail-light-15, rail-metro-15, ranger-station-15, recycling-15, religious-buddhist-15, religious-christian-15, religious-jewish-15, religious-muslim-15, residential-community-15, restaurant-15, restaurant-noodle-15, restaurant-pizza-15, restaurant-seafood-15, roadblock-15, rocket-15, school-15, scooter-15, shelter-15, shoe-15, shop-15, skateboard-15, skiing-15, slaughterhouse-15, slipway-15, snowmobile-15, soccer-15, square-15, square-stroked-15, stadium-15, star-15, star-stroked-15, suitcase-15, sushi-15, swimming-15, table-tennis-15, teahouse-15, telephone-15, tennis-15, theatre-15, toilet-15, town-15, town-hall-15, triangle-15, triangle-stroked-15, veterinary-15, viewpoint-15, village-15, volcano-15, volleyball-15, warehouse-15, waste-basket-15, watch-15, water-15, waterfall-15, watermill-15, wetland-15, wheelchair-15, windmill-15, zoo-15, aerialway-11, airfield-11, airport-11, alcohol-shop-11, american-football-11, amusement-park-11, aquarium-11, arrow-es-11, art-gallery-11, attraction-11, bakery-11, bank-11, bar-11, barrier-11, baseball-11, basketball-11, bbq-11, beach-11, beer-11, bicycle-11, bicycle-share-11, blood-bank-11, boat-es-11, bowling-alley-11, bridge-11, building-11, building-alt1-11, bus-11, cafe-11, campsite-11, car-11, car-rental-11, car-repair-11, car-top-es-11, casino-11, castle-11, cemetery-11, charging-station-11, cinema-11, circle-11, circle-stroked-11, city-11, clothing-store-11, college-11, commercial-11, communications-tower-11, confectionery-11, convenience-11, cricket-11, cross-11, dam-11, danger-11, defibrillator-11, dentist-11, doctor-11, dog-park-11, drinking-water-11, embassy-11, emergency-phone-11, entrance-11, entrance-alt1-11, farm-11, fast-food-11, fence-11, ferry-11, fire-station-11, fitness-centre-11, florist-11, fuel-11, furniture-11, gaming-11, garden-11, garden-centre-11, gift-11, globe-11, golf-11, grocery-11, hairdresser-11, harbor-11, hardware-11, heart-11, heliport-11, home-11, horse-riding-11, hospital-11, ice-cream-11, industry-11, information-11, jewelry-store-11, karaoke-11, landmark-11, landuse-11, laundry-11, library-11, lighthouse-11, lodging-11, logging-11, marker-11, marker-stroked-11, mobile-phone-11, monument-11, mountain-11, museum-11, music-11, natural-11, optician-11, paint-11, park-11, park-alt1-11, parking-11, parking-garage-11, pharmacy-11, picnic-site-11, pitch-11, place-of-worship-11, playground-11, police-11, post-11, prison-11, rail-11, rail-light-11, rail-metro-11, ranger-station-11, recycling-11, religious-buddhist-11, religious-christian-11, religious-jewish-11, religious-muslim-11, residential-community-11, restaurant-11, restaurant-noodle-11, restaurant-pizza-11, restaurant-seafood-11, roadblock-11, rocket-11, school-11, scooter-11, shelter-11, shoe-11, shop-11, skateboard-11, skiing-11, slaughterhouse-11, slipway-11, snowmobile-11, soccer-11, square-11, square-stroked-11, stadium-11, star-11, star-stroked-11, suitcase-11, sushi-11, swimming-11, table-tennis-11, teahouse-11, telephone-11, tennis-11, theatre-11, toilet-11, town-11, town-hall-11, triangle-11, triangle-stroked-11, veterinary-11, viewpoint-11, village-11, volcano-11, volleyball-11, warehouse-11, waste-basket-11, watch-11, water-11, waterfall-11, watermill-11, wetland-11, wheelchair-11, windmill-11, zoo-11, default */
/***/ (function(module) {

module.exports = {"aerialway-15":{"width":36,"height":36,"x":0,"y":0,"pixelRatio":2,"sdf":true},"airfield-15":{"width":36,"height":36,"x":36,"y":0,"pixelRatio":2,"sdf":true},"airport-15":{"width":36,"height":36,"x":0,"y":36,"pixelRatio":2,"sdf":true},"alcohol-shop-15":{"width":36,"height":36,"x":36,"y":36,"pixelRatio":2,"sdf":true},"american-football-15":{"width":36,"height":36,"x":72,"y":0,"pixelRatio":2,"sdf":true},"amusement-park-15":{"width":36,"height":36,"x":108,"y":0,"pixelRatio":2,"sdf":true},"aquarium-15":{"width":36,"height":36,"x":72,"y":36,"pixelRatio":2,"sdf":true},"arrow-es-15":{"width":36,"height":36,"x":108,"y":36,"pixelRatio":2,"sdf":true},"art-gallery-15":{"width":36,"height":36,"x":0,"y":72,"pixelRatio":2,"sdf":true},"attraction-15":{"width":36,"height":36,"x":36,"y":72,"pixelRatio":2,"sdf":true},"bakery-15":{"width":36,"height":36,"x":72,"y":72,"pixelRatio":2,"sdf":true},"bank-15":{"width":36,"height":36,"x":108,"y":72,"pixelRatio":2,"sdf":true},"bar-15":{"width":36,"height":36,"x":0,"y":108,"pixelRatio":2,"sdf":true},"barrier-15":{"width":36,"height":36,"x":36,"y":108,"pixelRatio":2,"sdf":true},"baseball-15":{"width":36,"height":36,"x":72,"y":108,"pixelRatio":2,"sdf":true},"basketball-15":{"width":36,"height":36,"x":108,"y":108,"pixelRatio":2,"sdf":true},"bbq-15":{"width":36,"height":36,"x":144,"y":0,"pixelRatio":2,"sdf":true},"beach-15":{"width":36,"height":36,"x":180,"y":0,"pixelRatio":2,"sdf":true},"beer-15":{"width":36,"height":36,"x":216,"y":0,"pixelRatio":2,"sdf":true},"bicycle-15":{"width":36,"height":36,"x":252,"y":0,"pixelRatio":2,"sdf":true},"bicycle-share-15":{"width":36,"height":36,"x":144,"y":36,"pixelRatio":2,"sdf":true},"blood-bank-15":{"width":36,"height":36,"x":180,"y":36,"pixelRatio":2,"sdf":true},"boat-es-15":{"width":36,"height":36,"x":216,"y":36,"pixelRatio":2,"sdf":true},"bowling-alley-15":{"width":36,"height":36,"x":252,"y":36,"pixelRatio":2,"sdf":true},"bridge-15":{"width":36,"height":36,"x":144,"y":72,"pixelRatio":2,"sdf":true},"building-15":{"width":36,"height":36,"x":180,"y":72,"pixelRatio":2,"sdf":true},"building-alt1-15":{"width":36,"height":36,"x":216,"y":72,"pixelRatio":2,"sdf":true},"bus-15":{"width":36,"height":36,"x":252,"y":72,"pixelRatio":2,"sdf":true},"cafe-15":{"width":36,"height":36,"x":144,"y":108,"pixelRatio":2,"sdf":true},"campsite-15":{"width":36,"height":36,"x":180,"y":108,"pixelRatio":2,"sdf":true},"car-15":{"width":36,"height":36,"x":216,"y":108,"pixelRatio":2,"sdf":true},"car-rental-15":{"width":36,"height":36,"x":252,"y":108,"pixelRatio":2,"sdf":true},"car-repair-15":{"width":36,"height":36,"x":0,"y":144,"pixelRatio":2,"sdf":true},"car-top-es-15":{"width":36,"height":36,"x":36,"y":144,"pixelRatio":2,"sdf":true},"casino-15":{"width":36,"height":36,"x":72,"y":144,"pixelRatio":2,"sdf":true},"castle-15":{"width":36,"height":36,"x":108,"y":144,"pixelRatio":2,"sdf":true},"cemetery-15":{"width":36,"height":36,"x":144,"y":144,"pixelRatio":2,"sdf":true},"charging-station-15":{"width":36,"height":36,"x":180,"y":144,"pixelRatio":2,"sdf":true},"cinema-15":{"width":36,"height":36,"x":216,"y":144,"pixelRatio":2,"sdf":true},"circle-15":{"width":36,"height":36,"x":252,"y":144,"pixelRatio":2,"sdf":true},"circle-stroked-15":{"width":36,"height":36,"x":0,"y":180,"pixelRatio":2,"sdf":true},"city-15":{"width":36,"height":36,"x":36,"y":180,"pixelRatio":2,"sdf":true},"clothing-store-15":{"width":36,"height":36,"x":72,"y":180,"pixelRatio":2,"sdf":true},"college-15":{"width":36,"height":36,"x":108,"y":180,"pixelRatio":2,"sdf":true},"commercial-15":{"width":36,"height":36,"x":144,"y":180,"pixelRatio":2,"sdf":true},"communications-tower-15":{"width":36,"height":36,"x":180,"y":180,"pixelRatio":2,"sdf":true},"confectionery-15":{"width":36,"height":36,"x":216,"y":180,"pixelRatio":2,"sdf":true},"convenience-15":{"width":36,"height":36,"x":252,"y":180,"pixelRatio":2,"sdf":true},"cricket-15":{"width":36,"height":36,"x":0,"y":216,"pixelRatio":2,"sdf":true},"cross-15":{"width":36,"height":36,"x":36,"y":216,"pixelRatio":2,"sdf":true},"dam-15":{"width":36,"height":36,"x":72,"y":216,"pixelRatio":2,"sdf":true},"danger-15":{"width":36,"height":36,"x":108,"y":216,"pixelRatio":2,"sdf":true},"defibrillator-15":{"width":36,"height":36,"x":144,"y":216,"pixelRatio":2,"sdf":true},"dentist-15":{"width":36,"height":36,"x":180,"y":216,"pixelRatio":2,"sdf":true},"doctor-15":{"width":36,"height":36,"x":216,"y":216,"pixelRatio":2,"sdf":true},"dog-park-15":{"width":36,"height":36,"x":252,"y":216,"pixelRatio":2,"sdf":true},"drinking-water-15":{"width":36,"height":36,"x":0,"y":252,"pixelRatio":2,"sdf":true},"embassy-15":{"width":36,"height":36,"x":36,"y":252,"pixelRatio":2,"sdf":true},"emergency-phone-15":{"width":36,"height":36,"x":72,"y":252,"pixelRatio":2,"sdf":true},"entrance-15":{"width":36,"height":36,"x":108,"y":252,"pixelRatio":2,"sdf":true},"entrance-alt1-15":{"width":36,"height":36,"x":144,"y":252,"pixelRatio":2,"sdf":true},"farm-15":{"width":36,"height":36,"x":180,"y":252,"pixelRatio":2,"sdf":true},"fast-food-15":{"width":36,"height":36,"x":216,"y":252,"pixelRatio":2,"sdf":true},"fence-15":{"width":36,"height":36,"x":252,"y":252,"pixelRatio":2,"sdf":true},"ferry-15":{"width":36,"height":36,"x":288,"y":0,"pixelRatio":2,"sdf":true},"fire-station-15":{"width":36,"height":36,"x":324,"y":0,"pixelRatio":2,"sdf":true},"fitness-centre-15":{"width":36,"height":36,"x":360,"y":0,"pixelRatio":2,"sdf":true},"florist-15":{"width":36,"height":36,"x":396,"y":0,"pixelRatio":2,"sdf":true},"fuel-15":{"width":36,"height":36,"x":432,"y":0,"pixelRatio":2,"sdf":true},"furniture-15":{"width":36,"height":36,"x":468,"y":0,"pixelRatio":2,"sdf":true},"gaming-15":{"width":36,"height":36,"x":504,"y":0,"pixelRatio":2,"sdf":true},"garden-15":{"width":36,"height":36,"x":540,"y":0,"pixelRatio":2,"sdf":true},"garden-centre-15":{"width":36,"height":36,"x":288,"y":36,"pixelRatio":2,"sdf":true},"gift-15":{"width":36,"height":36,"x":324,"y":36,"pixelRatio":2,"sdf":true},"globe-15":{"width":36,"height":36,"x":360,"y":36,"pixelRatio":2,"sdf":true},"golf-15":{"width":36,"height":36,"x":396,"y":36,"pixelRatio":2,"sdf":true},"grocery-15":{"width":36,"height":36,"x":432,"y":36,"pixelRatio":2,"sdf":true},"hairdresser-15":{"width":36,"height":36,"x":468,"y":36,"pixelRatio":2,"sdf":true},"harbor-15":{"width":36,"height":36,"x":504,"y":36,"pixelRatio":2,"sdf":true},"hardware-15":{"width":36,"height":36,"x":540,"y":36,"pixelRatio":2,"sdf":true},"heart-15":{"width":36,"height":36,"x":288,"y":72,"pixelRatio":2,"sdf":true},"heliport-15":{"width":36,"height":36,"x":324,"y":72,"pixelRatio":2,"sdf":true},"home-15":{"width":36,"height":36,"x":360,"y":72,"pixelRatio":2,"sdf":true},"horse-riding-15":{"width":36,"height":36,"x":396,"y":72,"pixelRatio":2,"sdf":true},"hospital-15":{"width":36,"height":36,"x":432,"y":72,"pixelRatio":2,"sdf":true},"ice-cream-15":{"width":36,"height":36,"x":468,"y":72,"pixelRatio":2,"sdf":true},"industry-15":{"width":36,"height":36,"x":504,"y":72,"pixelRatio":2,"sdf":true},"information-15":{"width":36,"height":36,"x":540,"y":72,"pixelRatio":2,"sdf":true},"jewelry-store-15":{"width":36,"height":36,"x":288,"y":108,"pixelRatio":2,"sdf":true},"karaoke-15":{"width":36,"height":36,"x":324,"y":108,"pixelRatio":2,"sdf":true},"landmark-15":{"width":36,"height":36,"x":360,"y":108,"pixelRatio":2,"sdf":true},"landuse-15":{"width":36,"height":36,"x":396,"y":108,"pixelRatio":2,"sdf":true},"laundry-15":{"width":36,"height":36,"x":432,"y":108,"pixelRatio":2,"sdf":true},"library-15":{"width":36,"height":36,"x":468,"y":108,"pixelRatio":2,"sdf":true},"lighthouse-15":{"width":36,"height":36,"x":504,"y":108,"pixelRatio":2,"sdf":true},"lodging-15":{"width":36,"height":36,"x":540,"y":108,"pixelRatio":2,"sdf":true},"logging-15":{"width":36,"height":36,"x":288,"y":144,"pixelRatio":2,"sdf":true},"marker-15":{"width":36,"height":36,"x":324,"y":144,"pixelRatio":2,"sdf":true},"marker-stroked-15":{"width":36,"height":36,"x":360,"y":144,"pixelRatio":2,"sdf":true},"mobile-phone-15":{"width":36,"height":36,"x":396,"y":144,"pixelRatio":2,"sdf":true},"monument-15":{"width":36,"height":36,"x":432,"y":144,"pixelRatio":2,"sdf":true},"mountain-15":{"width":36,"height":36,"x":468,"y":144,"pixelRatio":2,"sdf":true},"museum-15":{"width":36,"height":36,"x":504,"y":144,"pixelRatio":2,"sdf":true},"music-15":{"width":36,"height":36,"x":540,"y":144,"pixelRatio":2,"sdf":true},"natural-15":{"width":36,"height":36,"x":288,"y":180,"pixelRatio":2,"sdf":true},"optician-15":{"width":36,"height":36,"x":324,"y":180,"pixelRatio":2,"sdf":true},"paint-15":{"width":36,"height":36,"x":360,"y":180,"pixelRatio":2,"sdf":true},"park-15":{"width":36,"height":36,"x":396,"y":180,"pixelRatio":2,"sdf":true},"park-alt1-15":{"width":36,"height":36,"x":432,"y":180,"pixelRatio":2,"sdf":true},"parking-15":{"width":36,"height":36,"x":468,"y":180,"pixelRatio":2,"sdf":true},"parking-garage-15":{"width":36,"height":36,"x":504,"y":180,"pixelRatio":2,"sdf":true},"pharmacy-15":{"width":36,"height":36,"x":540,"y":180,"pixelRatio":2,"sdf":true},"picnic-site-15":{"width":36,"height":36,"x":288,"y":216,"pixelRatio":2,"sdf":true},"pitch-15":{"width":36,"height":36,"x":324,"y":216,"pixelRatio":2,"sdf":true},"place-of-worship-15":{"width":36,"height":36,"x":360,"y":216,"pixelRatio":2,"sdf":true},"playground-15":{"width":36,"height":36,"x":396,"y":216,"pixelRatio":2,"sdf":true},"police-15":{"width":36,"height":36,"x":432,"y":216,"pixelRatio":2,"sdf":true},"post-15":{"width":36,"height":36,"x":468,"y":216,"pixelRatio":2,"sdf":true},"prison-15":{"width":36,"height":36,"x":504,"y":216,"pixelRatio":2,"sdf":true},"rail-15":{"width":36,"height":36,"x":540,"y":216,"pixelRatio":2,"sdf":true},"rail-light-15":{"width":36,"height":36,"x":288,"y":252,"pixelRatio":2,"sdf":true},"rail-metro-15":{"width":36,"height":36,"x":324,"y":252,"pixelRatio":2,"sdf":true},"ranger-station-15":{"width":36,"height":36,"x":360,"y":252,"pixelRatio":2,"sdf":true},"recycling-15":{"width":36,"height":36,"x":396,"y":252,"pixelRatio":2,"sdf":true},"religious-buddhist-15":{"width":36,"height":36,"x":432,"y":252,"pixelRatio":2,"sdf":true},"religious-christian-15":{"width":36,"height":36,"x":468,"y":252,"pixelRatio":2,"sdf":true},"religious-jewish-15":{"width":36,"height":36,"x":504,"y":252,"pixelRatio":2,"sdf":true},"religious-muslim-15":{"width":36,"height":36,"x":540,"y":252,"pixelRatio":2,"sdf":true},"residential-community-15":{"width":36,"height":36,"x":0,"y":288,"pixelRatio":2,"sdf":true},"restaurant-15":{"width":36,"height":36,"x":36,"y":288,"pixelRatio":2,"sdf":true},"restaurant-noodle-15":{"width":36,"height":36,"x":72,"y":288,"pixelRatio":2,"sdf":true},"restaurant-pizza-15":{"width":36,"height":36,"x":108,"y":288,"pixelRatio":2,"sdf":true},"restaurant-seafood-15":{"width":36,"height":36,"x":144,"y":288,"pixelRatio":2,"sdf":true},"roadblock-15":{"width":36,"height":36,"x":180,"y":288,"pixelRatio":2,"sdf":true},"rocket-15":{"width":36,"height":36,"x":216,"y":288,"pixelRatio":2,"sdf":true},"school-15":{"width":36,"height":36,"x":252,"y":288,"pixelRatio":2,"sdf":true},"scooter-15":{"width":36,"height":36,"x":288,"y":288,"pixelRatio":2,"sdf":true},"shelter-15":{"width":36,"height":36,"x":324,"y":288,"pixelRatio":2,"sdf":true},"shoe-15":{"width":36,"height":36,"x":360,"y":288,"pixelRatio":2,"sdf":true},"shop-15":{"width":36,"height":36,"x":396,"y":288,"pixelRatio":2,"sdf":true},"skateboard-15":{"width":36,"height":36,"x":432,"y":288,"pixelRatio":2,"sdf":true},"skiing-15":{"width":36,"height":36,"x":468,"y":288,"pixelRatio":2,"sdf":true},"slaughterhouse-15":{"width":36,"height":36,"x":504,"y":288,"pixelRatio":2,"sdf":true},"slipway-15":{"width":36,"height":36,"x":540,"y":288,"pixelRatio":2,"sdf":true},"snowmobile-15":{"width":36,"height":36,"x":0,"y":324,"pixelRatio":2,"sdf":true},"soccer-15":{"width":36,"height":36,"x":36,"y":324,"pixelRatio":2,"sdf":true},"square-15":{"width":36,"height":36,"x":72,"y":324,"pixelRatio":2,"sdf":true},"square-stroked-15":{"width":36,"height":36,"x":108,"y":324,"pixelRatio":2,"sdf":true},"stadium-15":{"width":36,"height":36,"x":144,"y":324,"pixelRatio":2,"sdf":true},"star-15":{"width":36,"height":36,"x":180,"y":324,"pixelRatio":2,"sdf":true},"star-stroked-15":{"width":36,"height":36,"x":216,"y":324,"pixelRatio":2,"sdf":true},"suitcase-15":{"width":36,"height":36,"x":252,"y":324,"pixelRatio":2,"sdf":true},"sushi-15":{"width":36,"height":36,"x":288,"y":324,"pixelRatio":2,"sdf":true},"swimming-15":{"width":36,"height":36,"x":324,"y":324,"pixelRatio":2,"sdf":true},"table-tennis-15":{"width":36,"height":36,"x":360,"y":324,"pixelRatio":2,"sdf":true},"teahouse-15":{"width":36,"height":36,"x":396,"y":324,"pixelRatio":2,"sdf":true},"telephone-15":{"width":36,"height":36,"x":432,"y":324,"pixelRatio":2,"sdf":true},"tennis-15":{"width":36,"height":36,"x":468,"y":324,"pixelRatio":2,"sdf":true},"theatre-15":{"width":36,"height":36,"x":504,"y":324,"pixelRatio":2,"sdf":true},"toilet-15":{"width":36,"height":36,"x":540,"y":324,"pixelRatio":2,"sdf":true},"town-15":{"width":36,"height":36,"x":0,"y":360,"pixelRatio":2,"sdf":true},"town-hall-15":{"width":36,"height":36,"x":36,"y":360,"pixelRatio":2,"sdf":true},"triangle-15":{"width":36,"height":36,"x":72,"y":360,"pixelRatio":2,"sdf":true},"triangle-stroked-15":{"width":36,"height":36,"x":108,"y":360,"pixelRatio":2,"sdf":true},"veterinary-15":{"width":36,"height":36,"x":144,"y":360,"pixelRatio":2,"sdf":true},"viewpoint-15":{"width":36,"height":36,"x":180,"y":360,"pixelRatio":2,"sdf":true},"village-15":{"width":36,"height":36,"x":216,"y":360,"pixelRatio":2,"sdf":true},"volcano-15":{"width":36,"height":36,"x":252,"y":360,"pixelRatio":2,"sdf":true},"volleyball-15":{"width":36,"height":36,"x":288,"y":360,"pixelRatio":2,"sdf":true},"warehouse-15":{"width":36,"height":36,"x":324,"y":360,"pixelRatio":2,"sdf":true},"waste-basket-15":{"width":36,"height":36,"x":360,"y":360,"pixelRatio":2,"sdf":true},"watch-15":{"width":36,"height":36,"x":396,"y":360,"pixelRatio":2,"sdf":true},"water-15":{"width":36,"height":36,"x":432,"y":360,"pixelRatio":2,"sdf":true},"waterfall-15":{"width":36,"height":36,"x":468,"y":360,"pixelRatio":2,"sdf":true},"watermill-15":{"width":36,"height":36,"x":504,"y":360,"pixelRatio":2,"sdf":true},"wetland-15":{"width":36,"height":36,"x":540,"y":360,"pixelRatio":2,"sdf":true},"wheelchair-15":{"width":36,"height":36,"x":0,"y":396,"pixelRatio":2,"sdf":true},"windmill-15":{"width":36,"height":36,"x":36,"y":396,"pixelRatio":2,"sdf":true},"zoo-15":{"width":36,"height":36,"x":72,"y":396,"pixelRatio":2,"sdf":true},"aerialway-11":{"width":28,"height":28,"x":108,"y":396,"pixelRatio":2,"sdf":true},"airfield-11":{"width":28,"height":28,"x":136,"y":396,"pixelRatio":2,"sdf":true},"airport-11":{"width":28,"height":28,"x":164,"y":396,"pixelRatio":2,"sdf":true},"alcohol-shop-11":{"width":28,"height":28,"x":192,"y":396,"pixelRatio":2,"sdf":true},"american-football-11":{"width":28,"height":28,"x":220,"y":396,"pixelRatio":2,"sdf":true},"amusement-park-11":{"width":28,"height":28,"x":248,"y":396,"pixelRatio":2,"sdf":true},"aquarium-11":{"width":28,"height":28,"x":276,"y":396,"pixelRatio":2,"sdf":true},"arrow-es-11":{"width":28,"height":28,"x":304,"y":396,"pixelRatio":2,"sdf":true},"art-gallery-11":{"width":28,"height":28,"x":332,"y":396,"pixelRatio":2,"sdf":true},"attraction-11":{"width":28,"height":28,"x":360,"y":396,"pixelRatio":2,"sdf":true},"bakery-11":{"width":28,"height":28,"x":388,"y":396,"pixelRatio":2,"sdf":true},"bank-11":{"width":28,"height":28,"x":416,"y":396,"pixelRatio":2,"sdf":true},"bar-11":{"width":28,"height":28,"x":444,"y":396,"pixelRatio":2,"sdf":true},"barrier-11":{"width":28,"height":28,"x":472,"y":396,"pixelRatio":2,"sdf":true},"baseball-11":{"width":28,"height":28,"x":500,"y":396,"pixelRatio":2,"sdf":true},"basketball-11":{"width":28,"height":28,"x":528,"y":396,"pixelRatio":2,"sdf":true},"bbq-11":{"width":28,"height":28,"x":0,"y":432,"pixelRatio":2,"sdf":true},"beach-11":{"width":28,"height":28,"x":28,"y":432,"pixelRatio":2,"sdf":true},"beer-11":{"width":28,"height":28,"x":56,"y":432,"pixelRatio":2,"sdf":true},"bicycle-11":{"width":28,"height":28,"x":84,"y":432,"pixelRatio":2,"sdf":true},"bicycle-share-11":{"width":28,"height":28,"x":112,"y":432,"pixelRatio":2,"sdf":true},"blood-bank-11":{"width":28,"height":28,"x":140,"y":432,"pixelRatio":2,"sdf":true},"boat-es-11":{"width":28,"height":28,"x":168,"y":432,"pixelRatio":2,"sdf":true},"bowling-alley-11":{"width":28,"height":28,"x":196,"y":432,"pixelRatio":2,"sdf":true},"bridge-11":{"width":28,"height":28,"x":224,"y":432,"pixelRatio":2,"sdf":true},"building-11":{"width":28,"height":28,"x":252,"y":432,"pixelRatio":2,"sdf":true},"building-alt1-11":{"width":28,"height":28,"x":280,"y":432,"pixelRatio":2,"sdf":true},"bus-11":{"width":28,"height":28,"x":308,"y":432,"pixelRatio":2,"sdf":true},"cafe-11":{"width":28,"height":28,"x":336,"y":432,"pixelRatio":2,"sdf":true},"campsite-11":{"width":28,"height":28,"x":364,"y":432,"pixelRatio":2,"sdf":true},"car-11":{"width":28,"height":28,"x":392,"y":432,"pixelRatio":2,"sdf":true},"car-rental-11":{"width":28,"height":28,"x":420,"y":432,"pixelRatio":2,"sdf":true},"car-repair-11":{"width":28,"height":28,"x":448,"y":432,"pixelRatio":2,"sdf":true},"car-top-es-11":{"width":28,"height":28,"x":476,"y":432,"pixelRatio":2,"sdf":true},"casino-11":{"width":28,"height":28,"x":504,"y":432,"pixelRatio":2,"sdf":true},"castle-11":{"width":28,"height":28,"x":532,"y":432,"pixelRatio":2,"sdf":true},"cemetery-11":{"width":28,"height":28,"x":0,"y":460,"pixelRatio":2,"sdf":true},"charging-station-11":{"width":28,"height":28,"x":28,"y":460,"pixelRatio":2,"sdf":true},"cinema-11":{"width":28,"height":28,"x":56,"y":460,"pixelRatio":2,"sdf":true},"circle-11":{"width":28,"height":28,"x":84,"y":460,"pixelRatio":2,"sdf":true},"circle-stroked-11":{"width":28,"height":28,"x":112,"y":460,"pixelRatio":2,"sdf":true},"city-11":{"width":28,"height":28,"x":140,"y":460,"pixelRatio":2,"sdf":true},"clothing-store-11":{"width":28,"height":28,"x":168,"y":460,"pixelRatio":2,"sdf":true},"college-11":{"width":28,"height":28,"x":196,"y":460,"pixelRatio":2,"sdf":true},"commercial-11":{"width":28,"height":28,"x":224,"y":460,"pixelRatio":2,"sdf":true},"communications-tower-11":{"width":28,"height":28,"x":252,"y":460,"pixelRatio":2,"sdf":true},"confectionery-11":{"width":28,"height":28,"x":280,"y":460,"pixelRatio":2,"sdf":true},"convenience-11":{"width":28,"height":28,"x":308,"y":460,"pixelRatio":2,"sdf":true},"cricket-11":{"width":28,"height":28,"x":336,"y":460,"pixelRatio":2,"sdf":true},"cross-11":{"width":28,"height":28,"x":364,"y":460,"pixelRatio":2,"sdf":true},"dam-11":{"width":28,"height":28,"x":392,"y":460,"pixelRatio":2,"sdf":true},"danger-11":{"width":28,"height":28,"x":420,"y":460,"pixelRatio":2,"sdf":true},"defibrillator-11":{"width":28,"height":28,"x":448,"y":460,"pixelRatio":2,"sdf":true},"dentist-11":{"width":28,"height":28,"x":476,"y":460,"pixelRatio":2,"sdf":true},"doctor-11":{"width":28,"height":28,"x":504,"y":460,"pixelRatio":2,"sdf":true},"dog-park-11":{"width":28,"height":28,"x":532,"y":460,"pixelRatio":2,"sdf":true},"drinking-water-11":{"width":28,"height":28,"x":0,"y":488,"pixelRatio":2,"sdf":true},"embassy-11":{"width":28,"height":28,"x":28,"y":488,"pixelRatio":2,"sdf":true},"emergency-phone-11":{"width":28,"height":28,"x":56,"y":488,"pixelRatio":2,"sdf":true},"entrance-11":{"width":28,"height":28,"x":84,"y":488,"pixelRatio":2,"sdf":true},"entrance-alt1-11":{"width":28,"height":28,"x":112,"y":488,"pixelRatio":2,"sdf":true},"farm-11":{"width":28,"height":28,"x":140,"y":488,"pixelRatio":2,"sdf":true},"fast-food-11":{"width":28,"height":28,"x":168,"y":488,"pixelRatio":2,"sdf":true},"fence-11":{"width":28,"height":28,"x":196,"y":488,"pixelRatio":2,"sdf":true},"ferry-11":{"width":28,"height":28,"x":224,"y":488,"pixelRatio":2,"sdf":true},"fire-station-11":{"width":28,"height":28,"x":252,"y":488,"pixelRatio":2,"sdf":true},"fitness-centre-11":{"width":28,"height":28,"x":280,"y":488,"pixelRatio":2,"sdf":true},"florist-11":{"width":28,"height":28,"x":308,"y":488,"pixelRatio":2,"sdf":true},"fuel-11":{"width":28,"height":28,"x":336,"y":488,"pixelRatio":2,"sdf":true},"furniture-11":{"width":28,"height":28,"x":364,"y":488,"pixelRatio":2,"sdf":true},"gaming-11":{"width":28,"height":28,"x":392,"y":488,"pixelRatio":2,"sdf":true},"garden-11":{"width":28,"height":28,"x":420,"y":488,"pixelRatio":2,"sdf":true},"garden-centre-11":{"width":28,"height":28,"x":448,"y":488,"pixelRatio":2,"sdf":true},"gift-11":{"width":28,"height":28,"x":476,"y":488,"pixelRatio":2,"sdf":true},"globe-11":{"width":28,"height":28,"x":504,"y":488,"pixelRatio":2,"sdf":true},"golf-11":{"width":28,"height":28,"x":532,"y":488,"pixelRatio":2,"sdf":true},"grocery-11":{"width":28,"height":28,"x":0,"y":516,"pixelRatio":2,"sdf":true},"hairdresser-11":{"width":28,"height":28,"x":28,"y":516,"pixelRatio":2,"sdf":true},"harbor-11":{"width":28,"height":28,"x":56,"y":516,"pixelRatio":2,"sdf":true},"hardware-11":{"width":28,"height":28,"x":84,"y":516,"pixelRatio":2,"sdf":true},"heart-11":{"width":28,"height":28,"x":112,"y":516,"pixelRatio":2,"sdf":true},"heliport-11":{"width":28,"height":28,"x":140,"y":516,"pixelRatio":2,"sdf":true},"home-11":{"width":28,"height":28,"x":168,"y":516,"pixelRatio":2,"sdf":true},"horse-riding-11":{"width":28,"height":28,"x":196,"y":516,"pixelRatio":2,"sdf":true},"hospital-11":{"width":28,"height":28,"x":224,"y":516,"pixelRatio":2,"sdf":true},"ice-cream-11":{"width":28,"height":28,"x":252,"y":516,"pixelRatio":2,"sdf":true},"industry-11":{"width":28,"height":28,"x":280,"y":516,"pixelRatio":2,"sdf":true},"information-11":{"width":28,"height":28,"x":308,"y":516,"pixelRatio":2,"sdf":true},"jewelry-store-11":{"width":28,"height":28,"x":336,"y":516,"pixelRatio":2,"sdf":true},"karaoke-11":{"width":28,"height":28,"x":364,"y":516,"pixelRatio":2,"sdf":true},"landmark-11":{"width":28,"height":28,"x":392,"y":516,"pixelRatio":2,"sdf":true},"landuse-11":{"width":28,"height":28,"x":420,"y":516,"pixelRatio":2,"sdf":true},"laundry-11":{"width":28,"height":28,"x":448,"y":516,"pixelRatio":2,"sdf":true},"library-11":{"width":28,"height":28,"x":476,"y":516,"pixelRatio":2,"sdf":true},"lighthouse-11":{"width":28,"height":28,"x":504,"y":516,"pixelRatio":2,"sdf":true},"lodging-11":{"width":28,"height":28,"x":532,"y":516,"pixelRatio":2,"sdf":true},"logging-11":{"width":28,"height":28,"x":0,"y":544,"pixelRatio":2,"sdf":true},"marker-11":{"width":28,"height":28,"x":28,"y":544,"pixelRatio":2,"sdf":true},"marker-stroked-11":{"width":28,"height":28,"x":56,"y":544,"pixelRatio":2,"sdf":true},"mobile-phone-11":{"width":28,"height":28,"x":84,"y":544,"pixelRatio":2,"sdf":true},"monument-11":{"width":28,"height":28,"x":112,"y":544,"pixelRatio":2,"sdf":true},"mountain-11":{"width":28,"height":28,"x":140,"y":544,"pixelRatio":2,"sdf":true},"museum-11":{"width":28,"height":28,"x":168,"y":544,"pixelRatio":2,"sdf":true},"music-11":{"width":28,"height":28,"x":196,"y":544,"pixelRatio":2,"sdf":true},"natural-11":{"width":28,"height":28,"x":224,"y":544,"pixelRatio":2,"sdf":true},"optician-11":{"width":28,"height":28,"x":252,"y":544,"pixelRatio":2,"sdf":true},"paint-11":{"width":28,"height":28,"x":280,"y":544,"pixelRatio":2,"sdf":true},"park-11":{"width":28,"height":28,"x":308,"y":544,"pixelRatio":2,"sdf":true},"park-alt1-11":{"width":28,"height":28,"x":336,"y":544,"pixelRatio":2,"sdf":true},"parking-11":{"width":28,"height":28,"x":364,"y":544,"pixelRatio":2,"sdf":true},"parking-garage-11":{"width":28,"height":28,"x":392,"y":544,"pixelRatio":2,"sdf":true},"pharmacy-11":{"width":28,"height":28,"x":420,"y":544,"pixelRatio":2,"sdf":true},"picnic-site-11":{"width":28,"height":28,"x":448,"y":544,"pixelRatio":2,"sdf":true},"pitch-11":{"width":28,"height":28,"x":476,"y":544,"pixelRatio":2,"sdf":true},"place-of-worship-11":{"width":28,"height":28,"x":504,"y":544,"pixelRatio":2,"sdf":true},"playground-11":{"width":28,"height":28,"x":532,"y":544,"pixelRatio":2,"sdf":true},"police-11":{"width":28,"height":28,"x":560,"y":432,"pixelRatio":2,"sdf":true},"post-11":{"width":28,"height":28,"x":588,"y":432,"pixelRatio":2,"sdf":true},"prison-11":{"width":28,"height":28,"x":616,"y":432,"pixelRatio":2,"sdf":true},"rail-11":{"width":28,"height":28,"x":644,"y":432,"pixelRatio":2,"sdf":true},"rail-light-11":{"width":28,"height":28,"x":672,"y":432,"pixelRatio":2,"sdf":true},"rail-metro-11":{"width":28,"height":28,"x":700,"y":432,"pixelRatio":2,"sdf":true},"ranger-station-11":{"width":28,"height":28,"x":728,"y":432,"pixelRatio":2,"sdf":true},"recycling-11":{"width":28,"height":28,"x":756,"y":432,"pixelRatio":2,"sdf":true},"religious-buddhist-11":{"width":28,"height":28,"x":784,"y":432,"pixelRatio":2,"sdf":true},"religious-christian-11":{"width":28,"height":28,"x":812,"y":432,"pixelRatio":2,"sdf":true},"religious-jewish-11":{"width":28,"height":28,"x":840,"y":432,"pixelRatio":2,"sdf":true},"religious-muslim-11":{"width":28,"height":28,"x":868,"y":432,"pixelRatio":2,"sdf":true},"residential-community-11":{"width":28,"height":28,"x":896,"y":432,"pixelRatio":2,"sdf":true},"restaurant-11":{"width":28,"height":28,"x":924,"y":432,"pixelRatio":2,"sdf":true},"restaurant-noodle-11":{"width":28,"height":28,"x":952,"y":432,"pixelRatio":2,"sdf":true},"restaurant-pizza-11":{"width":28,"height":28,"x":980,"y":432,"pixelRatio":2,"sdf":true},"restaurant-seafood-11":{"width":28,"height":28,"x":1008,"y":432,"pixelRatio":2,"sdf":true},"roadblock-11":{"width":28,"height":28,"x":1036,"y":432,"pixelRatio":2,"sdf":true},"rocket-11":{"width":28,"height":28,"x":1064,"y":432,"pixelRatio":2,"sdf":true},"school-11":{"width":28,"height":28,"x":1092,"y":432,"pixelRatio":2,"sdf":true},"scooter-11":{"width":28,"height":28,"x":1120,"y":432,"pixelRatio":2,"sdf":true},"shelter-11":{"width":28,"height":28,"x":560,"y":460,"pixelRatio":2,"sdf":true},"shoe-11":{"width":28,"height":28,"x":588,"y":460,"pixelRatio":2,"sdf":true},"shop-11":{"width":28,"height":28,"x":616,"y":460,"pixelRatio":2,"sdf":true},"skateboard-11":{"width":28,"height":28,"x":644,"y":460,"pixelRatio":2,"sdf":true},"skiing-11":{"width":28,"height":28,"x":672,"y":460,"pixelRatio":2,"sdf":true},"slaughterhouse-11":{"width":28,"height":28,"x":700,"y":460,"pixelRatio":2,"sdf":true},"slipway-11":{"width":28,"height":28,"x":728,"y":460,"pixelRatio":2,"sdf":true},"snowmobile-11":{"width":28,"height":28,"x":756,"y":460,"pixelRatio":2,"sdf":true},"soccer-11":{"width":28,"height":28,"x":784,"y":460,"pixelRatio":2,"sdf":true},"square-11":{"width":28,"height":28,"x":812,"y":460,"pixelRatio":2,"sdf":true},"square-stroked-11":{"width":28,"height":28,"x":840,"y":460,"pixelRatio":2,"sdf":true},"stadium-11":{"width":28,"height":28,"x":868,"y":460,"pixelRatio":2,"sdf":true},"star-11":{"width":28,"height":28,"x":896,"y":460,"pixelRatio":2,"sdf":true},"star-stroked-11":{"width":28,"height":28,"x":924,"y":460,"pixelRatio":2,"sdf":true},"suitcase-11":{"width":28,"height":28,"x":952,"y":460,"pixelRatio":2,"sdf":true},"sushi-11":{"width":28,"height":28,"x":980,"y":460,"pixelRatio":2,"sdf":true},"swimming-11":{"width":28,"height":28,"x":1008,"y":460,"pixelRatio":2,"sdf":true},"table-tennis-11":{"width":28,"height":28,"x":1036,"y":460,"pixelRatio":2,"sdf":true},"teahouse-11":{"width":28,"height":28,"x":1064,"y":460,"pixelRatio":2,"sdf":true},"telephone-11":{"width":28,"height":28,"x":1092,"y":460,"pixelRatio":2,"sdf":true},"tennis-11":{"width":28,"height":28,"x":1120,"y":460,"pixelRatio":2,"sdf":true},"theatre-11":{"width":28,"height":28,"x":560,"y":488,"pixelRatio":2,"sdf":true},"toilet-11":{"width":28,"height":28,"x":588,"y":488,"pixelRatio":2,"sdf":true},"town-11":{"width":28,"height":28,"x":616,"y":488,"pixelRatio":2,"sdf":true},"town-hall-11":{"width":28,"height":28,"x":644,"y":488,"pixelRatio":2,"sdf":true},"triangle-11":{"width":28,"height":28,"x":672,"y":488,"pixelRatio":2,"sdf":true},"triangle-stroked-11":{"width":28,"height":28,"x":700,"y":488,"pixelRatio":2,"sdf":true},"veterinary-11":{"width":28,"height":28,"x":728,"y":488,"pixelRatio":2,"sdf":true},"viewpoint-11":{"width":28,"height":28,"x":756,"y":488,"pixelRatio":2,"sdf":true},"village-11":{"width":28,"height":28,"x":784,"y":488,"pixelRatio":2,"sdf":true},"volcano-11":{"width":28,"height":28,"x":812,"y":488,"pixelRatio":2,"sdf":true},"volleyball-11":{"width":28,"height":28,"x":840,"y":488,"pixelRatio":2,"sdf":true},"warehouse-11":{"width":28,"height":28,"x":868,"y":488,"pixelRatio":2,"sdf":true},"waste-basket-11":{"width":28,"height":28,"x":896,"y":488,"pixelRatio":2,"sdf":true},"watch-11":{"width":28,"height":28,"x":924,"y":488,"pixelRatio":2,"sdf":true},"water-11":{"width":28,"height":28,"x":952,"y":488,"pixelRatio":2,"sdf":true},"waterfall-11":{"width":28,"height":28,"x":980,"y":488,"pixelRatio":2,"sdf":true},"watermill-11":{"width":28,"height":28,"x":1008,"y":488,"pixelRatio":2,"sdf":true},"wetland-11":{"width":28,"height":28,"x":1036,"y":488,"pixelRatio":2,"sdf":true},"wheelchair-11":{"width":28,"height":28,"x":1064,"y":488,"pixelRatio":2,"sdf":true},"windmill-11":{"width":28,"height":28,"x":1092,"y":488,"pixelRatio":2,"sdf":true},"zoo-11":{"width":28,"height":28,"x":1120,"y":488,"pixelRatio":2,"sdf":true}};

/***/ }),

/***/ "./node_modules/@elastic/maki/dist/sprite@2.png":
/*!******************************************************!*\
  !*** ./node_modules/@elastic/maki/dist/sprite@2.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b7c8b2342c6bf350c1251a126157ec08.png";

/***/ }),

/***/ "./node_modules/@elastic/maki/dist/sprite@4.json":
/*!*******************************************************!*\
  !*** ./node_modules/@elastic/maki/dist/sprite@4.json ***!
  \*******************************************************/
/*! exports provided: aerialway-15, airfield-15, airport-15, alcohol-shop-15, american-football-15, amusement-park-15, aquarium-15, arrow-es-15, art-gallery-15, attraction-15, bakery-15, bank-15, bar-15, barrier-15, baseball-15, basketball-15, bbq-15, beach-15, beer-15, bicycle-15, bicycle-share-15, blood-bank-15, boat-es-15, bowling-alley-15, bridge-15, building-15, building-alt1-15, bus-15, cafe-15, campsite-15, car-15, car-rental-15, car-repair-15, car-top-es-15, casino-15, castle-15, cemetery-15, charging-station-15, cinema-15, circle-15, circle-stroked-15, city-15, clothing-store-15, college-15, commercial-15, communications-tower-15, confectionery-15, convenience-15, cricket-15, cross-15, dam-15, danger-15, defibrillator-15, dentist-15, doctor-15, dog-park-15, drinking-water-15, embassy-15, emergency-phone-15, entrance-15, entrance-alt1-15, farm-15, fast-food-15, fence-15, ferry-15, fire-station-15, fitness-centre-15, florist-15, fuel-15, furniture-15, gaming-15, garden-15, garden-centre-15, gift-15, globe-15, golf-15, grocery-15, hairdresser-15, harbor-15, hardware-15, heart-15, heliport-15, home-15, horse-riding-15, hospital-15, ice-cream-15, industry-15, information-15, jewelry-store-15, karaoke-15, landmark-15, landuse-15, laundry-15, library-15, lighthouse-15, lodging-15, logging-15, marker-15, marker-stroked-15, mobile-phone-15, monument-15, mountain-15, museum-15, music-15, natural-15, optician-15, paint-15, park-15, park-alt1-15, parking-15, parking-garage-15, pharmacy-15, picnic-site-15, pitch-15, place-of-worship-15, playground-15, police-15, post-15, prison-15, rail-15, rail-light-15, rail-metro-15, ranger-station-15, recycling-15, religious-buddhist-15, religious-christian-15, religious-jewish-15, religious-muslim-15, residential-community-15, restaurant-15, restaurant-noodle-15, restaurant-pizza-15, restaurant-seafood-15, roadblock-15, rocket-15, school-15, scooter-15, shelter-15, shoe-15, shop-15, skateboard-15, skiing-15, slaughterhouse-15, slipway-15, snowmobile-15, soccer-15, square-15, square-stroked-15, stadium-15, star-15, star-stroked-15, suitcase-15, sushi-15, swimming-15, table-tennis-15, teahouse-15, telephone-15, tennis-15, theatre-15, toilet-15, town-15, town-hall-15, triangle-15, triangle-stroked-15, veterinary-15, viewpoint-15, village-15, volcano-15, volleyball-15, warehouse-15, waste-basket-15, watch-15, water-15, waterfall-15, watermill-15, wetland-15, wheelchair-15, windmill-15, zoo-15, aerialway-11, airfield-11, airport-11, alcohol-shop-11, american-football-11, amusement-park-11, aquarium-11, arrow-es-11, art-gallery-11, attraction-11, bakery-11, bank-11, bar-11, barrier-11, baseball-11, basketball-11, bbq-11, beach-11, beer-11, bicycle-11, bicycle-share-11, blood-bank-11, boat-es-11, bowling-alley-11, bridge-11, building-11, building-alt1-11, bus-11, cafe-11, campsite-11, car-11, car-rental-11, car-repair-11, car-top-es-11, casino-11, castle-11, cemetery-11, charging-station-11, cinema-11, circle-11, circle-stroked-11, city-11, clothing-store-11, college-11, commercial-11, communications-tower-11, confectionery-11, convenience-11, cricket-11, cross-11, dam-11, danger-11, defibrillator-11, dentist-11, doctor-11, dog-park-11, drinking-water-11, embassy-11, emergency-phone-11, entrance-11, entrance-alt1-11, farm-11, fast-food-11, fence-11, ferry-11, fire-station-11, fitness-centre-11, florist-11, fuel-11, furniture-11, gaming-11, garden-11, garden-centre-11, gift-11, globe-11, golf-11, grocery-11, hairdresser-11, harbor-11, hardware-11, heart-11, heliport-11, home-11, horse-riding-11, hospital-11, ice-cream-11, industry-11, information-11, jewelry-store-11, karaoke-11, landmark-11, landuse-11, laundry-11, library-11, lighthouse-11, lodging-11, logging-11, marker-11, marker-stroked-11, mobile-phone-11, monument-11, mountain-11, museum-11, music-11, natural-11, optician-11, paint-11, park-11, park-alt1-11, parking-11, parking-garage-11, pharmacy-11, picnic-site-11, pitch-11, place-of-worship-11, playground-11, police-11, post-11, prison-11, rail-11, rail-light-11, rail-metro-11, ranger-station-11, recycling-11, religious-buddhist-11, religious-christian-11, religious-jewish-11, religious-muslim-11, residential-community-11, restaurant-11, restaurant-noodle-11, restaurant-pizza-11, restaurant-seafood-11, roadblock-11, rocket-11, school-11, scooter-11, shelter-11, shoe-11, shop-11, skateboard-11, skiing-11, slaughterhouse-11, slipway-11, snowmobile-11, soccer-11, square-11, square-stroked-11, stadium-11, star-11, star-stroked-11, suitcase-11, sushi-11, swimming-11, table-tennis-11, teahouse-11, telephone-11, tennis-11, theatre-11, toilet-11, town-11, town-hall-11, triangle-11, triangle-stroked-11, veterinary-11, viewpoint-11, village-11, volcano-11, volleyball-11, warehouse-11, waste-basket-11, watch-11, water-11, waterfall-11, watermill-11, wetland-11, wheelchair-11, windmill-11, zoo-11, default */
/***/ (function(module) {

module.exports = {"aerialway-15":{"width":66,"height":66,"x":0,"y":0,"pixelRatio":4,"sdf":true},"airfield-15":{"width":66,"height":66,"x":66,"y":0,"pixelRatio":4,"sdf":true},"airport-15":{"width":66,"height":66,"x":0,"y":66,"pixelRatio":4,"sdf":true},"alcohol-shop-15":{"width":66,"height":66,"x":66,"y":66,"pixelRatio":4,"sdf":true},"american-football-15":{"width":66,"height":66,"x":132,"y":0,"pixelRatio":4,"sdf":true},"amusement-park-15":{"width":66,"height":66,"x":198,"y":0,"pixelRatio":4,"sdf":true},"aquarium-15":{"width":66,"height":66,"x":132,"y":66,"pixelRatio":4,"sdf":true},"arrow-es-15":{"width":66,"height":66,"x":198,"y":66,"pixelRatio":4,"sdf":true},"art-gallery-15":{"width":66,"height":66,"x":0,"y":132,"pixelRatio":4,"sdf":true},"attraction-15":{"width":66,"height":66,"x":66,"y":132,"pixelRatio":4,"sdf":true},"bakery-15":{"width":66,"height":66,"x":132,"y":132,"pixelRatio":4,"sdf":true},"bank-15":{"width":66,"height":66,"x":198,"y":132,"pixelRatio":4,"sdf":true},"bar-15":{"width":66,"height":66,"x":0,"y":198,"pixelRatio":4,"sdf":true},"barrier-15":{"width":66,"height":66,"x":66,"y":198,"pixelRatio":4,"sdf":true},"baseball-15":{"width":66,"height":66,"x":132,"y":198,"pixelRatio":4,"sdf":true},"basketball-15":{"width":66,"height":66,"x":198,"y":198,"pixelRatio":4,"sdf":true},"bbq-15":{"width":66,"height":66,"x":264,"y":0,"pixelRatio":4,"sdf":true},"beach-15":{"width":66,"height":66,"x":330,"y":0,"pixelRatio":4,"sdf":true},"beer-15":{"width":66,"height":66,"x":396,"y":0,"pixelRatio":4,"sdf":true},"bicycle-15":{"width":66,"height":66,"x":462,"y":0,"pixelRatio":4,"sdf":true},"bicycle-share-15":{"width":66,"height":66,"x":264,"y":66,"pixelRatio":4,"sdf":true},"blood-bank-15":{"width":66,"height":66,"x":330,"y":66,"pixelRatio":4,"sdf":true},"boat-es-15":{"width":66,"height":66,"x":396,"y":66,"pixelRatio":4,"sdf":true},"bowling-alley-15":{"width":66,"height":66,"x":462,"y":66,"pixelRatio":4,"sdf":true},"bridge-15":{"width":66,"height":66,"x":264,"y":132,"pixelRatio":4,"sdf":true},"building-15":{"width":66,"height":66,"x":330,"y":132,"pixelRatio":4,"sdf":true},"building-alt1-15":{"width":66,"height":66,"x":396,"y":132,"pixelRatio":4,"sdf":true},"bus-15":{"width":66,"height":66,"x":462,"y":132,"pixelRatio":4,"sdf":true},"cafe-15":{"width":66,"height":66,"x":264,"y":198,"pixelRatio":4,"sdf":true},"campsite-15":{"width":66,"height":66,"x":330,"y":198,"pixelRatio":4,"sdf":true},"car-15":{"width":66,"height":66,"x":396,"y":198,"pixelRatio":4,"sdf":true},"car-rental-15":{"width":66,"height":66,"x":462,"y":198,"pixelRatio":4,"sdf":true},"car-repair-15":{"width":66,"height":66,"x":0,"y":264,"pixelRatio":4,"sdf":true},"car-top-es-15":{"width":66,"height":66,"x":66,"y":264,"pixelRatio":4,"sdf":true},"casino-15":{"width":66,"height":66,"x":132,"y":264,"pixelRatio":4,"sdf":true},"castle-15":{"width":66,"height":66,"x":198,"y":264,"pixelRatio":4,"sdf":true},"cemetery-15":{"width":66,"height":66,"x":264,"y":264,"pixelRatio":4,"sdf":true},"charging-station-15":{"width":66,"height":66,"x":330,"y":264,"pixelRatio":4,"sdf":true},"cinema-15":{"width":66,"height":66,"x":396,"y":264,"pixelRatio":4,"sdf":true},"circle-15":{"width":66,"height":66,"x":462,"y":264,"pixelRatio":4,"sdf":true},"circle-stroked-15":{"width":66,"height":66,"x":0,"y":330,"pixelRatio":4,"sdf":true},"city-15":{"width":66,"height":66,"x":66,"y":330,"pixelRatio":4,"sdf":true},"clothing-store-15":{"width":66,"height":66,"x":132,"y":330,"pixelRatio":4,"sdf":true},"college-15":{"width":66,"height":66,"x":198,"y":330,"pixelRatio":4,"sdf":true},"commercial-15":{"width":66,"height":66,"x":264,"y":330,"pixelRatio":4,"sdf":true},"communications-tower-15":{"width":66,"height":66,"x":330,"y":330,"pixelRatio":4,"sdf":true},"confectionery-15":{"width":66,"height":66,"x":396,"y":330,"pixelRatio":4,"sdf":true},"convenience-15":{"width":66,"height":66,"x":462,"y":330,"pixelRatio":4,"sdf":true},"cricket-15":{"width":66,"height":66,"x":0,"y":396,"pixelRatio":4,"sdf":true},"cross-15":{"width":66,"height":66,"x":66,"y":396,"pixelRatio":4,"sdf":true},"dam-15":{"width":66,"height":66,"x":132,"y":396,"pixelRatio":4,"sdf":true},"danger-15":{"width":66,"height":66,"x":198,"y":396,"pixelRatio":4,"sdf":true},"defibrillator-15":{"width":66,"height":66,"x":264,"y":396,"pixelRatio":4,"sdf":true},"dentist-15":{"width":66,"height":66,"x":330,"y":396,"pixelRatio":4,"sdf":true},"doctor-15":{"width":66,"height":66,"x":396,"y":396,"pixelRatio":4,"sdf":true},"dog-park-15":{"width":66,"height":66,"x":462,"y":396,"pixelRatio":4,"sdf":true},"drinking-water-15":{"width":66,"height":66,"x":0,"y":462,"pixelRatio":4,"sdf":true},"embassy-15":{"width":66,"height":66,"x":66,"y":462,"pixelRatio":4,"sdf":true},"emergency-phone-15":{"width":66,"height":66,"x":132,"y":462,"pixelRatio":4,"sdf":true},"entrance-15":{"width":66,"height":66,"x":198,"y":462,"pixelRatio":4,"sdf":true},"entrance-alt1-15":{"width":66,"height":66,"x":264,"y":462,"pixelRatio":4,"sdf":true},"farm-15":{"width":66,"height":66,"x":330,"y":462,"pixelRatio":4,"sdf":true},"fast-food-15":{"width":66,"height":66,"x":396,"y":462,"pixelRatio":4,"sdf":true},"fence-15":{"width":66,"height":66,"x":462,"y":462,"pixelRatio":4,"sdf":true},"ferry-15":{"width":66,"height":66,"x":528,"y":0,"pixelRatio":4,"sdf":true},"fire-station-15":{"width":66,"height":66,"x":594,"y":0,"pixelRatio":4,"sdf":true},"fitness-centre-15":{"width":66,"height":66,"x":660,"y":0,"pixelRatio":4,"sdf":true},"florist-15":{"width":66,"height":66,"x":726,"y":0,"pixelRatio":4,"sdf":true},"fuel-15":{"width":66,"height":66,"x":792,"y":0,"pixelRatio":4,"sdf":true},"furniture-15":{"width":66,"height":66,"x":858,"y":0,"pixelRatio":4,"sdf":true},"gaming-15":{"width":66,"height":66,"x":924,"y":0,"pixelRatio":4,"sdf":true},"garden-15":{"width":66,"height":66,"x":990,"y":0,"pixelRatio":4,"sdf":true},"garden-centre-15":{"width":66,"height":66,"x":528,"y":66,"pixelRatio":4,"sdf":true},"gift-15":{"width":66,"height":66,"x":594,"y":66,"pixelRatio":4,"sdf":true},"globe-15":{"width":66,"height":66,"x":660,"y":66,"pixelRatio":4,"sdf":true},"golf-15":{"width":66,"height":66,"x":726,"y":66,"pixelRatio":4,"sdf":true},"grocery-15":{"width":66,"height":66,"x":792,"y":66,"pixelRatio":4,"sdf":true},"hairdresser-15":{"width":66,"height":66,"x":858,"y":66,"pixelRatio":4,"sdf":true},"harbor-15":{"width":66,"height":66,"x":924,"y":66,"pixelRatio":4,"sdf":true},"hardware-15":{"width":66,"height":66,"x":990,"y":66,"pixelRatio":4,"sdf":true},"heart-15":{"width":66,"height":66,"x":528,"y":132,"pixelRatio":4,"sdf":true},"heliport-15":{"width":66,"height":66,"x":594,"y":132,"pixelRatio":4,"sdf":true},"home-15":{"width":66,"height":66,"x":660,"y":132,"pixelRatio":4,"sdf":true},"horse-riding-15":{"width":66,"height":66,"x":726,"y":132,"pixelRatio":4,"sdf":true},"hospital-15":{"width":66,"height":66,"x":792,"y":132,"pixelRatio":4,"sdf":true},"ice-cream-15":{"width":66,"height":66,"x":858,"y":132,"pixelRatio":4,"sdf":true},"industry-15":{"width":66,"height":66,"x":924,"y":132,"pixelRatio":4,"sdf":true},"information-15":{"width":66,"height":66,"x":990,"y":132,"pixelRatio":4,"sdf":true},"jewelry-store-15":{"width":66,"height":66,"x":528,"y":198,"pixelRatio":4,"sdf":true},"karaoke-15":{"width":66,"height":66,"x":594,"y":198,"pixelRatio":4,"sdf":true},"landmark-15":{"width":66,"height":66,"x":660,"y":198,"pixelRatio":4,"sdf":true},"landuse-15":{"width":66,"height":66,"x":726,"y":198,"pixelRatio":4,"sdf":true},"laundry-15":{"width":66,"height":66,"x":792,"y":198,"pixelRatio":4,"sdf":true},"library-15":{"width":66,"height":66,"x":858,"y":198,"pixelRatio":4,"sdf":true},"lighthouse-15":{"width":66,"height":66,"x":924,"y":198,"pixelRatio":4,"sdf":true},"lodging-15":{"width":66,"height":66,"x":990,"y":198,"pixelRatio":4,"sdf":true},"logging-15":{"width":66,"height":66,"x":528,"y":264,"pixelRatio":4,"sdf":true},"marker-15":{"width":66,"height":66,"x":594,"y":264,"pixelRatio":4,"sdf":true},"marker-stroked-15":{"width":66,"height":66,"x":660,"y":264,"pixelRatio":4,"sdf":true},"mobile-phone-15":{"width":66,"height":66,"x":726,"y":264,"pixelRatio":4,"sdf":true},"monument-15":{"width":66,"height":66,"x":792,"y":264,"pixelRatio":4,"sdf":true},"mountain-15":{"width":66,"height":66,"x":858,"y":264,"pixelRatio":4,"sdf":true},"museum-15":{"width":66,"height":66,"x":924,"y":264,"pixelRatio":4,"sdf":true},"music-15":{"width":66,"height":66,"x":990,"y":264,"pixelRatio":4,"sdf":true},"natural-15":{"width":66,"height":66,"x":528,"y":330,"pixelRatio":4,"sdf":true},"optician-15":{"width":66,"height":66,"x":594,"y":330,"pixelRatio":4,"sdf":true},"paint-15":{"width":66,"height":66,"x":660,"y":330,"pixelRatio":4,"sdf":true},"park-15":{"width":66,"height":66,"x":726,"y":330,"pixelRatio":4,"sdf":true},"park-alt1-15":{"width":66,"height":66,"x":792,"y":330,"pixelRatio":4,"sdf":true},"parking-15":{"width":66,"height":66,"x":858,"y":330,"pixelRatio":4,"sdf":true},"parking-garage-15":{"width":66,"height":66,"x":924,"y":330,"pixelRatio":4,"sdf":true},"pharmacy-15":{"width":66,"height":66,"x":990,"y":330,"pixelRatio":4,"sdf":true},"picnic-site-15":{"width":66,"height":66,"x":528,"y":396,"pixelRatio":4,"sdf":true},"pitch-15":{"width":66,"height":66,"x":594,"y":396,"pixelRatio":4,"sdf":true},"place-of-worship-15":{"width":66,"height":66,"x":660,"y":396,"pixelRatio":4,"sdf":true},"playground-15":{"width":66,"height":66,"x":726,"y":396,"pixelRatio":4,"sdf":true},"police-15":{"width":66,"height":66,"x":792,"y":396,"pixelRatio":4,"sdf":true},"post-15":{"width":66,"height":66,"x":858,"y":396,"pixelRatio":4,"sdf":true},"prison-15":{"width":66,"height":66,"x":924,"y":396,"pixelRatio":4,"sdf":true},"rail-15":{"width":66,"height":66,"x":990,"y":396,"pixelRatio":4,"sdf":true},"rail-light-15":{"width":66,"height":66,"x":528,"y":462,"pixelRatio":4,"sdf":true},"rail-metro-15":{"width":66,"height":66,"x":594,"y":462,"pixelRatio":4,"sdf":true},"ranger-station-15":{"width":66,"height":66,"x":660,"y":462,"pixelRatio":4,"sdf":true},"recycling-15":{"width":66,"height":66,"x":726,"y":462,"pixelRatio":4,"sdf":true},"religious-buddhist-15":{"width":66,"height":66,"x":792,"y":462,"pixelRatio":4,"sdf":true},"religious-christian-15":{"width":66,"height":66,"x":858,"y":462,"pixelRatio":4,"sdf":true},"religious-jewish-15":{"width":66,"height":66,"x":924,"y":462,"pixelRatio":4,"sdf":true},"religious-muslim-15":{"width":66,"height":66,"x":990,"y":462,"pixelRatio":4,"sdf":true},"residential-community-15":{"width":66,"height":66,"x":0,"y":528,"pixelRatio":4,"sdf":true},"restaurant-15":{"width":66,"height":66,"x":66,"y":528,"pixelRatio":4,"sdf":true},"restaurant-noodle-15":{"width":66,"height":66,"x":132,"y":528,"pixelRatio":4,"sdf":true},"restaurant-pizza-15":{"width":66,"height":66,"x":198,"y":528,"pixelRatio":4,"sdf":true},"restaurant-seafood-15":{"width":66,"height":66,"x":264,"y":528,"pixelRatio":4,"sdf":true},"roadblock-15":{"width":66,"height":66,"x":330,"y":528,"pixelRatio":4,"sdf":true},"rocket-15":{"width":66,"height":66,"x":396,"y":528,"pixelRatio":4,"sdf":true},"school-15":{"width":66,"height":66,"x":462,"y":528,"pixelRatio":4,"sdf":true},"scooter-15":{"width":66,"height":66,"x":528,"y":528,"pixelRatio":4,"sdf":true},"shelter-15":{"width":66,"height":66,"x":594,"y":528,"pixelRatio":4,"sdf":true},"shoe-15":{"width":66,"height":66,"x":660,"y":528,"pixelRatio":4,"sdf":true},"shop-15":{"width":66,"height":66,"x":726,"y":528,"pixelRatio":4,"sdf":true},"skateboard-15":{"width":66,"height":66,"x":792,"y":528,"pixelRatio":4,"sdf":true},"skiing-15":{"width":66,"height":66,"x":858,"y":528,"pixelRatio":4,"sdf":true},"slaughterhouse-15":{"width":66,"height":66,"x":924,"y":528,"pixelRatio":4,"sdf":true},"slipway-15":{"width":66,"height":66,"x":990,"y":528,"pixelRatio":4,"sdf":true},"snowmobile-15":{"width":66,"height":66,"x":0,"y":594,"pixelRatio":4,"sdf":true},"soccer-15":{"width":66,"height":66,"x":66,"y":594,"pixelRatio":4,"sdf":true},"square-15":{"width":66,"height":66,"x":132,"y":594,"pixelRatio":4,"sdf":true},"square-stroked-15":{"width":66,"height":66,"x":198,"y":594,"pixelRatio":4,"sdf":true},"stadium-15":{"width":66,"height":66,"x":264,"y":594,"pixelRatio":4,"sdf":true},"star-15":{"width":66,"height":66,"x":330,"y":594,"pixelRatio":4,"sdf":true},"star-stroked-15":{"width":66,"height":66,"x":396,"y":594,"pixelRatio":4,"sdf":true},"suitcase-15":{"width":66,"height":66,"x":462,"y":594,"pixelRatio":4,"sdf":true},"sushi-15":{"width":66,"height":66,"x":528,"y":594,"pixelRatio":4,"sdf":true},"swimming-15":{"width":66,"height":66,"x":594,"y":594,"pixelRatio":4,"sdf":true},"table-tennis-15":{"width":66,"height":66,"x":660,"y":594,"pixelRatio":4,"sdf":true},"teahouse-15":{"width":66,"height":66,"x":726,"y":594,"pixelRatio":4,"sdf":true},"telephone-15":{"width":66,"height":66,"x":792,"y":594,"pixelRatio":4,"sdf":true},"tennis-15":{"width":66,"height":66,"x":858,"y":594,"pixelRatio":4,"sdf":true},"theatre-15":{"width":66,"height":66,"x":924,"y":594,"pixelRatio":4,"sdf":true},"toilet-15":{"width":66,"height":66,"x":990,"y":594,"pixelRatio":4,"sdf":true},"town-15":{"width":66,"height":66,"x":0,"y":660,"pixelRatio":4,"sdf":true},"town-hall-15":{"width":66,"height":66,"x":66,"y":660,"pixelRatio":4,"sdf":true},"triangle-15":{"width":66,"height":66,"x":132,"y":660,"pixelRatio":4,"sdf":true},"triangle-stroked-15":{"width":66,"height":66,"x":198,"y":660,"pixelRatio":4,"sdf":true},"veterinary-15":{"width":66,"height":66,"x":264,"y":660,"pixelRatio":4,"sdf":true},"viewpoint-15":{"width":66,"height":66,"x":330,"y":660,"pixelRatio":4,"sdf":true},"village-15":{"width":66,"height":66,"x":396,"y":660,"pixelRatio":4,"sdf":true},"volcano-15":{"width":66,"height":66,"x":462,"y":660,"pixelRatio":4,"sdf":true},"volleyball-15":{"width":66,"height":66,"x":528,"y":660,"pixelRatio":4,"sdf":true},"warehouse-15":{"width":66,"height":66,"x":594,"y":660,"pixelRatio":4,"sdf":true},"waste-basket-15":{"width":66,"height":66,"x":660,"y":660,"pixelRatio":4,"sdf":true},"watch-15":{"width":66,"height":66,"x":726,"y":660,"pixelRatio":4,"sdf":true},"water-15":{"width":66,"height":66,"x":792,"y":660,"pixelRatio":4,"sdf":true},"waterfall-15":{"width":66,"height":66,"x":858,"y":660,"pixelRatio":4,"sdf":true},"watermill-15":{"width":66,"height":66,"x":924,"y":660,"pixelRatio":4,"sdf":true},"wetland-15":{"width":66,"height":66,"x":990,"y":660,"pixelRatio":4,"sdf":true},"wheelchair-15":{"width":66,"height":66,"x":0,"y":726,"pixelRatio":4,"sdf":true},"windmill-15":{"width":66,"height":66,"x":66,"y":726,"pixelRatio":4,"sdf":true},"zoo-15":{"width":66,"height":66,"x":132,"y":726,"pixelRatio":4,"sdf":true},"aerialway-11":{"width":50,"height":50,"x":198,"y":726,"pixelRatio":4,"sdf":true},"airfield-11":{"width":50,"height":50,"x":248,"y":726,"pixelRatio":4,"sdf":true},"airport-11":{"width":50,"height":50,"x":298,"y":726,"pixelRatio":4,"sdf":true},"alcohol-shop-11":{"width":50,"height":50,"x":348,"y":726,"pixelRatio":4,"sdf":true},"american-football-11":{"width":50,"height":50,"x":398,"y":726,"pixelRatio":4,"sdf":true},"amusement-park-11":{"width":50,"height":50,"x":448,"y":726,"pixelRatio":4,"sdf":true},"aquarium-11":{"width":50,"height":50,"x":498,"y":726,"pixelRatio":4,"sdf":true},"arrow-es-11":{"width":50,"height":50,"x":548,"y":726,"pixelRatio":4,"sdf":true},"art-gallery-11":{"width":50,"height":50,"x":598,"y":726,"pixelRatio":4,"sdf":true},"attraction-11":{"width":50,"height":50,"x":648,"y":726,"pixelRatio":4,"sdf":true},"bakery-11":{"width":50,"height":50,"x":698,"y":726,"pixelRatio":4,"sdf":true},"bank-11":{"width":50,"height":50,"x":748,"y":726,"pixelRatio":4,"sdf":true},"bar-11":{"width":50,"height":50,"x":798,"y":726,"pixelRatio":4,"sdf":true},"barrier-11":{"width":50,"height":50,"x":848,"y":726,"pixelRatio":4,"sdf":true},"baseball-11":{"width":50,"height":50,"x":898,"y":726,"pixelRatio":4,"sdf":true},"basketball-11":{"width":50,"height":50,"x":948,"y":726,"pixelRatio":4,"sdf":true},"bbq-11":{"width":50,"height":50,"x":998,"y":726,"pixelRatio":4,"sdf":true},"beach-11":{"width":50,"height":50,"x":0,"y":792,"pixelRatio":4,"sdf":true},"beer-11":{"width":50,"height":50,"x":50,"y":792,"pixelRatio":4,"sdf":true},"bicycle-11":{"width":50,"height":50,"x":100,"y":792,"pixelRatio":4,"sdf":true},"bicycle-share-11":{"width":50,"height":50,"x":150,"y":792,"pixelRatio":4,"sdf":true},"blood-bank-11":{"width":50,"height":50,"x":200,"y":792,"pixelRatio":4,"sdf":true},"boat-es-11":{"width":50,"height":50,"x":250,"y":792,"pixelRatio":4,"sdf":true},"bowling-alley-11":{"width":50,"height":50,"x":300,"y":792,"pixelRatio":4,"sdf":true},"bridge-11":{"width":50,"height":50,"x":350,"y":792,"pixelRatio":4,"sdf":true},"building-11":{"width":50,"height":50,"x":400,"y":792,"pixelRatio":4,"sdf":true},"building-alt1-11":{"width":50,"height":50,"x":450,"y":792,"pixelRatio":4,"sdf":true},"bus-11":{"width":50,"height":50,"x":500,"y":792,"pixelRatio":4,"sdf":true},"cafe-11":{"width":50,"height":50,"x":550,"y":792,"pixelRatio":4,"sdf":true},"campsite-11":{"width":50,"height":50,"x":600,"y":792,"pixelRatio":4,"sdf":true},"car-11":{"width":50,"height":50,"x":650,"y":792,"pixelRatio":4,"sdf":true},"car-rental-11":{"width":50,"height":50,"x":700,"y":792,"pixelRatio":4,"sdf":true},"car-repair-11":{"width":50,"height":50,"x":750,"y":792,"pixelRatio":4,"sdf":true},"car-top-es-11":{"width":50,"height":50,"x":800,"y":792,"pixelRatio":4,"sdf":true},"casino-11":{"width":50,"height":50,"x":850,"y":792,"pixelRatio":4,"sdf":true},"castle-11":{"width":50,"height":50,"x":900,"y":792,"pixelRatio":4,"sdf":true},"cemetery-11":{"width":50,"height":50,"x":950,"y":792,"pixelRatio":4,"sdf":true},"charging-station-11":{"width":50,"height":50,"x":1000,"y":792,"pixelRatio":4,"sdf":true},"cinema-11":{"width":50,"height":50,"x":0,"y":842,"pixelRatio":4,"sdf":true},"circle-11":{"width":50,"height":50,"x":50,"y":842,"pixelRatio":4,"sdf":true},"circle-stroked-11":{"width":50,"height":50,"x":100,"y":842,"pixelRatio":4,"sdf":true},"city-11":{"width":50,"height":50,"x":150,"y":842,"pixelRatio":4,"sdf":true},"clothing-store-11":{"width":50,"height":50,"x":200,"y":842,"pixelRatio":4,"sdf":true},"college-11":{"width":50,"height":50,"x":250,"y":842,"pixelRatio":4,"sdf":true},"commercial-11":{"width":50,"height":50,"x":300,"y":842,"pixelRatio":4,"sdf":true},"communications-tower-11":{"width":50,"height":50,"x":350,"y":842,"pixelRatio":4,"sdf":true},"confectionery-11":{"width":50,"height":50,"x":400,"y":842,"pixelRatio":4,"sdf":true},"convenience-11":{"width":50,"height":50,"x":450,"y":842,"pixelRatio":4,"sdf":true},"cricket-11":{"width":50,"height":50,"x":500,"y":842,"pixelRatio":4,"sdf":true},"cross-11":{"width":50,"height":50,"x":550,"y":842,"pixelRatio":4,"sdf":true},"dam-11":{"width":50,"height":50,"x":600,"y":842,"pixelRatio":4,"sdf":true},"danger-11":{"width":50,"height":50,"x":650,"y":842,"pixelRatio":4,"sdf":true},"defibrillator-11":{"width":50,"height":50,"x":700,"y":842,"pixelRatio":4,"sdf":true},"dentist-11":{"width":50,"height":50,"x":750,"y":842,"pixelRatio":4,"sdf":true},"doctor-11":{"width":50,"height":50,"x":800,"y":842,"pixelRatio":4,"sdf":true},"dog-park-11":{"width":50,"height":50,"x":850,"y":842,"pixelRatio":4,"sdf":true},"drinking-water-11":{"width":50,"height":50,"x":900,"y":842,"pixelRatio":4,"sdf":true},"embassy-11":{"width":50,"height":50,"x":950,"y":842,"pixelRatio":4,"sdf":true},"emergency-phone-11":{"width":50,"height":50,"x":1000,"y":842,"pixelRatio":4,"sdf":true},"entrance-11":{"width":50,"height":50,"x":0,"y":892,"pixelRatio":4,"sdf":true},"entrance-alt1-11":{"width":50,"height":50,"x":50,"y":892,"pixelRatio":4,"sdf":true},"farm-11":{"width":50,"height":50,"x":100,"y":892,"pixelRatio":4,"sdf":true},"fast-food-11":{"width":50,"height":50,"x":150,"y":892,"pixelRatio":4,"sdf":true},"fence-11":{"width":50,"height":50,"x":200,"y":892,"pixelRatio":4,"sdf":true},"ferry-11":{"width":50,"height":50,"x":250,"y":892,"pixelRatio":4,"sdf":true},"fire-station-11":{"width":50,"height":50,"x":300,"y":892,"pixelRatio":4,"sdf":true},"fitness-centre-11":{"width":50,"height":50,"x":350,"y":892,"pixelRatio":4,"sdf":true},"florist-11":{"width":50,"height":50,"x":400,"y":892,"pixelRatio":4,"sdf":true},"fuel-11":{"width":50,"height":50,"x":450,"y":892,"pixelRatio":4,"sdf":true},"furniture-11":{"width":50,"height":50,"x":500,"y":892,"pixelRatio":4,"sdf":true},"gaming-11":{"width":50,"height":50,"x":550,"y":892,"pixelRatio":4,"sdf":true},"garden-11":{"width":50,"height":50,"x":600,"y":892,"pixelRatio":4,"sdf":true},"garden-centre-11":{"width":50,"height":50,"x":650,"y":892,"pixelRatio":4,"sdf":true},"gift-11":{"width":50,"height":50,"x":700,"y":892,"pixelRatio":4,"sdf":true},"globe-11":{"width":50,"height":50,"x":750,"y":892,"pixelRatio":4,"sdf":true},"golf-11":{"width":50,"height":50,"x":800,"y":892,"pixelRatio":4,"sdf":true},"grocery-11":{"width":50,"height":50,"x":850,"y":892,"pixelRatio":4,"sdf":true},"hairdresser-11":{"width":50,"height":50,"x":900,"y":892,"pixelRatio":4,"sdf":true},"harbor-11":{"width":50,"height":50,"x":950,"y":892,"pixelRatio":4,"sdf":true},"hardware-11":{"width":50,"height":50,"x":1000,"y":892,"pixelRatio":4,"sdf":true},"heart-11":{"width":50,"height":50,"x":0,"y":942,"pixelRatio":4,"sdf":true},"heliport-11":{"width":50,"height":50,"x":50,"y":942,"pixelRatio":4,"sdf":true},"home-11":{"width":50,"height":50,"x":100,"y":942,"pixelRatio":4,"sdf":true},"horse-riding-11":{"width":50,"height":50,"x":150,"y":942,"pixelRatio":4,"sdf":true},"hospital-11":{"width":50,"height":50,"x":200,"y":942,"pixelRatio":4,"sdf":true},"ice-cream-11":{"width":50,"height":50,"x":250,"y":942,"pixelRatio":4,"sdf":true},"industry-11":{"width":50,"height":50,"x":300,"y":942,"pixelRatio":4,"sdf":true},"information-11":{"width":50,"height":50,"x":350,"y":942,"pixelRatio":4,"sdf":true},"jewelry-store-11":{"width":50,"height":50,"x":400,"y":942,"pixelRatio":4,"sdf":true},"karaoke-11":{"width":50,"height":50,"x":450,"y":942,"pixelRatio":4,"sdf":true},"landmark-11":{"width":50,"height":50,"x":500,"y":942,"pixelRatio":4,"sdf":true},"landuse-11":{"width":50,"height":50,"x":550,"y":942,"pixelRatio":4,"sdf":true},"laundry-11":{"width":50,"height":50,"x":600,"y":942,"pixelRatio":4,"sdf":true},"library-11":{"width":50,"height":50,"x":650,"y":942,"pixelRatio":4,"sdf":true},"lighthouse-11":{"width":50,"height":50,"x":700,"y":942,"pixelRatio":4,"sdf":true},"lodging-11":{"width":50,"height":50,"x":750,"y":942,"pixelRatio":4,"sdf":true},"logging-11":{"width":50,"height":50,"x":800,"y":942,"pixelRatio":4,"sdf":true},"marker-11":{"width":50,"height":50,"x":850,"y":942,"pixelRatio":4,"sdf":true},"marker-stroked-11":{"width":50,"height":50,"x":900,"y":942,"pixelRatio":4,"sdf":true},"mobile-phone-11":{"width":50,"height":50,"x":950,"y":942,"pixelRatio":4,"sdf":true},"monument-11":{"width":50,"height":50,"x":1000,"y":942,"pixelRatio":4,"sdf":true},"mountain-11":{"width":50,"height":50,"x":0,"y":992,"pixelRatio":4,"sdf":true},"museum-11":{"width":50,"height":50,"x":50,"y":992,"pixelRatio":4,"sdf":true},"music-11":{"width":50,"height":50,"x":100,"y":992,"pixelRatio":4,"sdf":true},"natural-11":{"width":50,"height":50,"x":150,"y":992,"pixelRatio":4,"sdf":true},"optician-11":{"width":50,"height":50,"x":200,"y":992,"pixelRatio":4,"sdf":true},"paint-11":{"width":50,"height":50,"x":250,"y":992,"pixelRatio":4,"sdf":true},"park-11":{"width":50,"height":50,"x":300,"y":992,"pixelRatio":4,"sdf":true},"park-alt1-11":{"width":50,"height":50,"x":350,"y":992,"pixelRatio":4,"sdf":true},"parking-11":{"width":50,"height":50,"x":400,"y":992,"pixelRatio":4,"sdf":true},"parking-garage-11":{"width":50,"height":50,"x":450,"y":992,"pixelRatio":4,"sdf":true},"pharmacy-11":{"width":50,"height":50,"x":500,"y":992,"pixelRatio":4,"sdf":true},"picnic-site-11":{"width":50,"height":50,"x":550,"y":992,"pixelRatio":4,"sdf":true},"pitch-11":{"width":50,"height":50,"x":600,"y":992,"pixelRatio":4,"sdf":true},"place-of-worship-11":{"width":50,"height":50,"x":650,"y":992,"pixelRatio":4,"sdf":true},"playground-11":{"width":50,"height":50,"x":700,"y":992,"pixelRatio":4,"sdf":true},"police-11":{"width":50,"height":50,"x":750,"y":992,"pixelRatio":4,"sdf":true},"post-11":{"width":50,"height":50,"x":800,"y":992,"pixelRatio":4,"sdf":true},"prison-11":{"width":50,"height":50,"x":850,"y":992,"pixelRatio":4,"sdf":true},"rail-11":{"width":50,"height":50,"x":900,"y":992,"pixelRatio":4,"sdf":true},"rail-light-11":{"width":50,"height":50,"x":950,"y":992,"pixelRatio":4,"sdf":true},"rail-metro-11":{"width":50,"height":50,"x":1000,"y":992,"pixelRatio":4,"sdf":true},"ranger-station-11":{"width":50,"height":50,"x":1050,"y":792,"pixelRatio":4,"sdf":true},"recycling-11":{"width":50,"height":50,"x":1100,"y":792,"pixelRatio":4,"sdf":true},"religious-buddhist-11":{"width":50,"height":50,"x":1150,"y":792,"pixelRatio":4,"sdf":true},"religious-christian-11":{"width":50,"height":50,"x":1200,"y":792,"pixelRatio":4,"sdf":true},"religious-jewish-11":{"width":50,"height":50,"x":1250,"y":792,"pixelRatio":4,"sdf":true},"religious-muslim-11":{"width":50,"height":50,"x":1300,"y":792,"pixelRatio":4,"sdf":true},"residential-community-11":{"width":50,"height":50,"x":1350,"y":792,"pixelRatio":4,"sdf":true},"restaurant-11":{"width":50,"height":50,"x":1400,"y":792,"pixelRatio":4,"sdf":true},"restaurant-noodle-11":{"width":50,"height":50,"x":1450,"y":792,"pixelRatio":4,"sdf":true},"restaurant-pizza-11":{"width":50,"height":50,"x":1500,"y":792,"pixelRatio":4,"sdf":true},"restaurant-seafood-11":{"width":50,"height":50,"x":1550,"y":792,"pixelRatio":4,"sdf":true},"roadblock-11":{"width":50,"height":50,"x":1600,"y":792,"pixelRatio":4,"sdf":true},"rocket-11":{"width":50,"height":50,"x":1650,"y":792,"pixelRatio":4,"sdf":true},"school-11":{"width":50,"height":50,"x":1700,"y":792,"pixelRatio":4,"sdf":true},"scooter-11":{"width":50,"height":50,"x":1750,"y":792,"pixelRatio":4,"sdf":true},"shelter-11":{"width":50,"height":50,"x":1800,"y":792,"pixelRatio":4,"sdf":true},"shoe-11":{"width":50,"height":50,"x":1850,"y":792,"pixelRatio":4,"sdf":true},"shop-11":{"width":50,"height":50,"x":1900,"y":792,"pixelRatio":4,"sdf":true},"skateboard-11":{"width":50,"height":50,"x":1950,"y":792,"pixelRatio":4,"sdf":true},"skiing-11":{"width":50,"height":50,"x":2000,"y":792,"pixelRatio":4,"sdf":true},"slaughterhouse-11":{"width":50,"height":50,"x":2050,"y":792,"pixelRatio":4,"sdf":true},"slipway-11":{"width":50,"height":50,"x":1050,"y":842,"pixelRatio":4,"sdf":true},"snowmobile-11":{"width":50,"height":50,"x":1100,"y":842,"pixelRatio":4,"sdf":true},"soccer-11":{"width":50,"height":50,"x":1150,"y":842,"pixelRatio":4,"sdf":true},"square-11":{"width":50,"height":50,"x":1200,"y":842,"pixelRatio":4,"sdf":true},"square-stroked-11":{"width":50,"height":50,"x":1250,"y":842,"pixelRatio":4,"sdf":true},"stadium-11":{"width":50,"height":50,"x":1300,"y":842,"pixelRatio":4,"sdf":true},"star-11":{"width":50,"height":50,"x":1350,"y":842,"pixelRatio":4,"sdf":true},"star-stroked-11":{"width":50,"height":50,"x":1400,"y":842,"pixelRatio":4,"sdf":true},"suitcase-11":{"width":50,"height":50,"x":1450,"y":842,"pixelRatio":4,"sdf":true},"sushi-11":{"width":50,"height":50,"x":1500,"y":842,"pixelRatio":4,"sdf":true},"swimming-11":{"width":50,"height":50,"x":1550,"y":842,"pixelRatio":4,"sdf":true},"table-tennis-11":{"width":50,"height":50,"x":1600,"y":842,"pixelRatio":4,"sdf":true},"teahouse-11":{"width":50,"height":50,"x":1650,"y":842,"pixelRatio":4,"sdf":true},"telephone-11":{"width":50,"height":50,"x":1700,"y":842,"pixelRatio":4,"sdf":true},"tennis-11":{"width":50,"height":50,"x":1750,"y":842,"pixelRatio":4,"sdf":true},"theatre-11":{"width":50,"height":50,"x":1800,"y":842,"pixelRatio":4,"sdf":true},"toilet-11":{"width":50,"height":50,"x":1850,"y":842,"pixelRatio":4,"sdf":true},"town-11":{"width":50,"height":50,"x":1900,"y":842,"pixelRatio":4,"sdf":true},"town-hall-11":{"width":50,"height":50,"x":1950,"y":842,"pixelRatio":4,"sdf":true},"triangle-11":{"width":50,"height":50,"x":2000,"y":842,"pixelRatio":4,"sdf":true},"triangle-stroked-11":{"width":50,"height":50,"x":2050,"y":842,"pixelRatio":4,"sdf":true},"veterinary-11":{"width":50,"height":50,"x":1050,"y":892,"pixelRatio":4,"sdf":true},"viewpoint-11":{"width":50,"height":50,"x":1100,"y":892,"pixelRatio":4,"sdf":true},"village-11":{"width":50,"height":50,"x":1150,"y":892,"pixelRatio":4,"sdf":true},"volcano-11":{"width":50,"height":50,"x":1200,"y":892,"pixelRatio":4,"sdf":true},"volleyball-11":{"width":50,"height":50,"x":1250,"y":892,"pixelRatio":4,"sdf":true},"warehouse-11":{"width":50,"height":50,"x":1300,"y":892,"pixelRatio":4,"sdf":true},"waste-basket-11":{"width":50,"height":50,"x":1350,"y":892,"pixelRatio":4,"sdf":true},"watch-11":{"width":50,"height":50,"x":1400,"y":892,"pixelRatio":4,"sdf":true},"water-11":{"width":50,"height":50,"x":1450,"y":892,"pixelRatio":4,"sdf":true},"waterfall-11":{"width":50,"height":50,"x":1500,"y":892,"pixelRatio":4,"sdf":true},"watermill-11":{"width":50,"height":50,"x":1550,"y":892,"pixelRatio":4,"sdf":true},"wetland-11":{"width":50,"height":50,"x":1600,"y":892,"pixelRatio":4,"sdf":true},"wheelchair-11":{"width":50,"height":50,"x":1650,"y":892,"pixelRatio":4,"sdf":true},"windmill-11":{"width":50,"height":50,"x":1700,"y":892,"pixelRatio":4,"sdf":true},"zoo-11":{"width":50,"height":50,"x":1750,"y":892,"pixelRatio":4,"sdf":true}};

/***/ }),

/***/ "./node_modules/@elastic/maki/dist/svgicons.json":
/*!*******************************************************!*\
  !*** ./node_modules/@elastic/maki/dist/svgicons.json ***!
  \*******************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, default */
/***/ (function(module) {

module.exports = ["<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"aerialway-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9,4.5H6V3.1c0.1992-0.1183,0.3512-0.3021,0.43-0.52L9.5,2C9.7761,2,10,1.7761,10,1.5S9.7761,1,9.5,1&#xA;&#x9;L6.25,1.61C5.8847,1.1957,5.2528,1.156,4.8386,1.5213C4.713,1.6321,4.6172,1.7726,4.56,1.93L1.5,2.5C1.2239,2.5,1,2.7239,1,3&#xA;&#x9;s0.2239,0.5,0.5,0.5l3.25-0.61C4.8213,2.9732,4.9057,3.0442,5,3.1v1.4H2c-0.5523,0-1,0.4477-1,1V9c0,0.5523,0.4477,1,1,1h7&#xA;&#x9;c0.5523,0,1-0.4477,1-1V5.5C10,4.9477,9.5523,4.5,9,4.5z M5,8.5H2.5v-3H5V8.5z M8.5,8.5H6v-3h2.5V8.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"aerialway-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M13,5H8V2.6c0.1854-0.1047,0.3325-0.2659,0.42-0.46L13.5,1.5C13.7761,1.5,14,1.2761,14,1s-0.2239-0.5-0.5-0.5L8.28,1.15&#xA;&#x9;C8.0954,0.9037,7.8077,0.7562,7.5,0.75C7.0963,0.752,6.7334,0.9966,6.58,1.37L1.5,2C1.2239,2,1,2.2239,1,2.5S1.2239,3,1.5,3&#xA;&#x9;l5.22-0.65C6.7967,2.4503,6.8917,2.5351,7,2.6V5H2C1.4477,5,1,5.4477,1,6v7c0,0.5523,0.4477,1,1,1h11c0.5523,0,1-0.4477,1-1V6&#xA;&#x9;C14,5.4477,13.5523,5,13,5z M7,11H3V7h4V11z M12,11H8V7h4V11z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"airfield-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path5\" d=\"M5,0.5H3.5C3,0.5,3,0,3.5,0h4&#xA;&#x9;C8,0,8,0.5,7.5,0.5H6C6,0.5,6.5,1,6.5,2v1H11v1.5l-4.5,2L6,10l1.5,0.5V11h-4v-0.5L5,10L4.5,6.5L0,4.5V3h4.5V2C4.5,1,5,0.5,5,0.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"airfield-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path5\" d=\"M6.8182,0.6818H4.7727&#xA;&#x9;C4.0909,0.6818,4.0909,0,4.7727,0h5.4545c0.6818,0,0.6818,0.6818,0,0.6818H8.1818c0,0,0.8182,0.5909,0.8182,1.9545V4h6v2L9,8l-0.5,5&#xA;&#x9;l2.5,1.3182V15H4v-0.6818L6.5,13L6,8L0,6V4h6V2.6364C6,1.2727,6.8182,0.6818,6.8182,0.6818z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"airport-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M6.5,6.4V6L11,6.5V5L6.5,3.2V1.5c0-1-0.5-1.5-1-1.5s-1,0.5-1,1.5v1.7L0,5v1.4L4.5,6v0.4v1.1v1.8L3,10v1l2.5-0.5L8,11v-1&#xA;&#x9;L6.5,9.2V7.5V6.4z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"airport-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path7712-0\" d=\"M15,6.8182L15,8.5l-6.5-1&#xA;&#x9;l-0.3182,4.7727L11,14v1l-3.5-0.6818L4,15v-1l2.8182-1.7273L6.5,7.5L0,8.5V6.8182L6.5,4.5v-3c0,0,0-1.5,1-1.5s1,1.5,1,1.5v2.8182&#xA;&#x9;L15,6.8182z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"alcohol-shop-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M7,4v2.5c0.0018,0.6341,0.4021,1.1986,1,1.41V10H7.5C7.2239,10,7,10.2239,7,10.5S7.2239,11,7.5,11h2&#xA;&#x9;c0.2761,0,0.5-0.2239,0.5-0.5S9.7761,10,9.5,10H9V7.91c0.5979-0.2114,0.9982-0.7759,1-1.41V4H7z M9.5,6.5c0,0.5523-0.4477,1-1,1&#xA;&#x9;s-1-0.4477-1-1v-2h2V6.5z M4.21,2.85V2.5c0.1961,0,0.355-0.1589,0.355-0.355S4.4061,1.79,4.21,1.79V1.44&#xA;&#x9;c0.0001-0.1933-0.1566-0.3501-0.3499-0.3501c-0.0034,0-0.0068,0-0.0101,0.0001H3.14C2.9468,1.0845,2.7857,1.2366,2.7801,1.4299&#xA;&#x9;C2.78,1.4332,2.78,1.4366,2.78,1.44v0.35c-0.1961,0-0.355,0.1589-0.355,0.355S2.5839,2.5,2.78,2.5v0.35C2.79,3.87,1,5,1,6v4.25&#xA;&#x9;c-0.0056,0.3866,0.3033,0.7044,0.6899,0.71c0.0067,0.0001,0.0134,0.0001,0.0201,0h3.58c0.3628-0.0329,0.6561-0.3097,0.71-0.67V6&#xA;&#x9;C6,5.09,4.21,3.81,4.21,2.85z M3.5,9C2.6716,9,2,8.3284,2,7.5S2.6716,6,3.5,6S5,6.6716,5,7.5S4.3284,9,3.5,9z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"alcohol-shop-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M14,4h-4v3.44l0,0c0,0,0,0,0,0.06c0.003,0.9096,0.6193,1.7026,1.5,1.93V13H11c-0.2761,0-0.5,0.2239-0.5,0.5&#xA;&#x9;S10.7239,14,11,14h2c0.2761,0,0.5-0.2239,0.5-0.5S13.2761,13,13,13h-0.5V9.43c0.8807-0.2274,1.497-1.0204,1.5-1.93c0,0,0,0,0-0.06&#xA;&#x9;l0,0V4z M13,7.5c0,0.5523-0.4477,1-1,1s-1-0.4477-1-1V5h2V7.5z M5.5,2.5V2C5.7761,2,6,1.7761,6,1.5S5.7761,1,5.5,1V0.5&#xA;&#x9;C5.5,0.2239,5.2761,0,5,0H4C3.7239,0,3.5,0.2239,3.5,0.5V1C3.2239,1,3,1.2239,3,1.5S3.2239,2,3.5,2v0.5C3.5,3.93,1,5.57,1,7v6&#xA;&#x9;c0,0.5523,0.4477,1,1,1h5c0.5318-0.0465,0.9535-0.4682,1-1V7C8,5.65,5.5,3.85,5.5,2.5z M4.5,12C3.1193,12,2,10.8807,2,9.5&#xA;&#x9;S3.1193,7,4.5,7S7,8.1193,7,9.5S5.8807,12,4.5,12z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"american-football-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M5.53,2C2.47,2,1,5.5,1,5.5S2.47,9,5.53,9S10,5.5,10,5.5S8.6,2,5.53,2z M7,6H4C3.7239,6,3.5,5.7761,3.5,5.5S3.7239,5,4,5h3&#xA;&#x9;c0.2761,0,0.5,0.2239,0.5,0.5S7.2761,6,7,6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"american-football-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M7.53,3C3.09,3,1,7.5,1,7.5S3.09,12,7.53,12S14,7.5,14,7.5S12,3,7.53,3z M11,7v1.5C11,8.7761,10.7761,9,10.5,9&#xA;&#x9;S10,8.7761,10,8.5V8H8v0.5C8,8.7761,7.7761,9,7.5,9S7,8.7761,7,8.5V8H5v0.5C5,8.7761,4.7761,9,4.5,9S4,8.7761,4,8.5v-2&#xA;&#x9;C4,6.2239,4.2239,6,4.5,6S5,6.2239,5,6.5V7h2V6.5C7,6.2239,7.2239,6,7.5,6S8,6.2239,8,6.5V7h2V6.5C10,6.2239,10.2239,6,10.5,6&#xA;&#x9;S11,6.2239,11,6.5V7z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"amusement-park-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path5082\" d=\"M5.5,1C3.0206,1,1,3.0206,1,5.5c0,1.7919,1.0627,3.3316,2.584,4.0547L2.5,11h6L7.416,9.5547&#xA;&#x9;C8.9373,8.8316,10,7.2919,10,5.5C10,3.0206,7.9794,1,5.5,1z M5.375,2.0117v1.9941c-0.3108,0.026-0.6057,0.1482-0.8438,0.3496&#xA;&#x9;L3.1191,2.9434C3.7146,2.3888,4.5013,2.0428,5.375,2.0117z M5.625,2.0117c0.8737,0.0311,1.6604,0.3771,2.2559,0.9316L6.4688,4.3555&#xA;&#x9;c-0.0007-0.0007-0.0013-0.0013-0.002-0.002C6.229,4.1532,5.9348,4.0317,5.625,4.0059V2.0117z M2.9434,3.1191l1.4121,1.4121&#xA;&#x9;c-0.0007,0.0007-0.0013,0.0013-0.002,0.002C4.1532,4.771,4.0317,5.0652,4.0059,5.375H2.0117&#xA;&#x9;C2.0428,4.5013,2.3888,3.7146,2.9434,3.1191z M8.0566,3.1191C8.6112,3.7146,8.9572,4.5013,8.9883,5.375H6.9941&#xA;&#x9;c-0.026-0.3108-0.1482-0.6057-0.3496-0.8438L8.0566,3.1191z M2.0117,5.625h1.9941c0.026,0.3108,0.1482,0.6057,0.3496,0.8438&#xA;&#x9;L2.9434,7.8809C2.3888,7.2854,2.0428,6.4987,2.0117,5.625z M6.9941,5.625h1.9941C8.9572,6.4987,8.6112,7.2854,8.0566,7.8809&#xA;&#x9;L6.6445,6.4688c0.0007-0.0007,0.0013-0.0013,0.002-0.002C6.8468,6.229,6.9683,5.9348,6.9941,5.625z M4.5312,6.6445&#xA;&#x9;c0.0007,0.0007,0.0013,0.0013,0.002,0.002C4.6716,6.7624,4.8297,6.8524,5,6.9121v2.0391C4.2765,8.8476,3.6278,8.5303,3.1191,8.0566&#xA;&#x9;L4.5312,6.6445z M6.4688,6.6445l1.4121,1.4121C7.3722,8.5303,6.7235,8.8476,6,8.9512V6.9121C6.1711,6.852,6.33,6.7613,6.4688,6.6445&#xA;&#x9;z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"amusement-park-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path5082\" d=\"M7.5,0C3.919,0,1,2.919,1,6.5c0,2.3161,1.2251,4.3484,3.0566,5.5H4l-1,2h9l-1-2h-0.0566&#xA;&#x9;C12.7749,10.8484,14,8.8161,14,6.5C14,2.919,11.081,0,7.5,0z M7.375,1.5059v3.5c-0.3108,0.026-0.6057,0.1482-0.8438,0.3496&#xA;&#x9;L4.0566,2.8809C4.9243,2.0555,6.0851,1.5376,7.375,1.5059z M7.625,1.5059c1.2899,0.0317,2.4507,0.5496,3.3184,1.375L8.4688,5.3555&#xA;&#x9;c-0.0007-0.0007-0.0013-0.0013-0.002-0.002C8.229,5.1532,7.9348,5.0317,7.625,5.0059V1.5059z M3.8809,3.0566l2.4746,2.4746&#xA;&#x9;c-0.0007,0.0007-0.0013,0.0013-0.002,0.002C6.1532,5.771,6.0317,6.0652,6.0059,6.375h-3.5&#xA;&#x9;C2.5376,5.0851,3.0555,3.9243,3.8809,3.0566z M11.1191,3.0566c0.8254,0.8676,1.3433,2.0285,1.375,3.3184h-3.5&#xA;&#x9;c-0.026-0.3108-0.1482-0.6057-0.3496-0.8438L11.1191,3.0566z M2.5059,6.625h3.5c0.026,0.3108,0.1482,0.6057,0.3496,0.8438&#xA;&#x9;L3.8809,9.9434C3.0555,9.0757,2.5376,7.9149,2.5059,6.625z M8.9941,6.625h3.5c-0.0317,1.2899-0.5496,2.4507-1.375,3.3184&#xA;&#x9;L8.6445,7.4688c0.0007-0.0007,0.0013-0.0013,0.002-0.002C8.8468,7.229,8.9683,6.9348,8.9941,6.625z M6.5312,7.6445&#xA;&#x9;c0.0007,0.0007,0.0013,0.0013,0.002,0.002C6.6716,7.7624,6.8297,7.8524,7,7.9121v3.5625c-1.1403-0.1124-2.1606-0.6108-2.9434-1.3555&#xA;&#x9;L6.5312,7.6445z M8.4688,7.6445l2.4746,2.4746c-0.7828,0.7447-1.803,1.243-2.9434,1.3555V7.9121&#xA;&#x9;C8.1711,7.852,8.33,7.7613,8.4688,7.6445z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"aquarium-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path3338\" d=\"M8,1C7.1243,1,6.1491,1.092,4.9961,1.5273&#xA;&#x9;C3.8431,1.9622,2.8479,2.6569,2,3.5C1.1477,4.3474,0,6,0,6.5s1.1354,1.9426,2.6777,2.6211&#xA;&#x9;c1.5424,0.6784,2.3909,0.7983,3.2832,0.8945c0.7968,0.086,1.9424-0.027,2.8848-0.2324C9.5925,9.6205,10.9937,9.3099,11,9&#xA;&#x9;c0,0-2.7561-0.063-3-0.5c-0.2486-0.4448-0.2494-1.5858,0-2c0.258-0.4283,2.5,1,2.5,1c0.6439,0.2576,0.6439-4.2576,0-4&#xA;&#x9;c0,0-2.2768,1.4474-2.5,1C7.7506,4,7.7506,3,8,2.5C8.2232,2.0526,11,2,11,2C11,1.5,8.8757,1,8,1z M3.5137,4.502&#xA;&#x9;c0.5598,0.0001,1.0136,0.4539,1.0137,1.0137C4.5272,6.0754,4.0735,6.5292,3.5137,6.5293C2.9539,6.5292,2.5001,6.0754,2.5,5.5156&#xA;&#x9;C2.5001,4.9558,2.9539,4.5021,3.5137,4.502z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"aquarium-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M10.9,11.6c-0.3-0.6-0.3-2.3,0-2.8c0.4-0.6,3.4,1.4,3.4,1.4c0.9,0.4,0.9-6.1,0-5.7&#xA;&#x9;c0,0-3.1,2.1-3.4,1.4c-0.3-0.7-0.3-2.1,0-2.8C11.2,2.5,15,2.4,15,2.4C15,1.7,12.1,1,10.9,1S8.4,1.1,6.8,1.8C5.2,2.4,3.9,3.4,2.7,4.6&#xA;&#x9;S0,8.2,0,8.9s1.5,2.8,3.7,3.7s3.3,1.1,4.5,1.3c1.1,0.1,2.6,0,3.9-0.3c1-0.2,2.9-0.7,2.9-1.1C15,12.3,11.2,12.2,10.9,11.6z M4.5,9.3&#xA;&#x9;C3.7,9.3,3,8.6,3,7.8s0.7-1.5,1.5-1.5S6,7,6,7.8S5.3,9.3,4.5,9.3z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"arrow-es-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M6.68912398,9.49179828 C6.31352747,9.03258227 5.76080389,8.34688747 5.74868301,8.33447489 C5.68498686,8.26924579 5.59708162,8.22891566 5.5,8.22891566 C5.40215559,8.22891566 5.31363232,8.26988205 5.24982005,8.33601706 C5.23668308,8.34963221 4.67555385,9.04578733 4.30561702,9.50344914 C4.05607605,9.77151155 3.76174927,9.65438843 3.68323365,9.61819425 C3.15316969,9.38401112 2.86453945,9.14544458 2.67073059,9.00338745 C2.53083631,8.90084839 2.45346069,8.64973179 2.53083631,8.41444699 C2.99857207,6.99215 3.87240865,4.20383407 5.17605634,1.20963855 C5.23626027,1.08584236 5.35836421,1 5.5,1 C5.63991852,1 5.76077596,1.08377338 5.81756824,1.2051232 C7.12501397,4.20572268 8,7.02011108 8.46101379,8.41444699 C8.54510498,8.66885376 8.46030395,8.8727609 8.35740816,8.97040303 C8.22070313,9.10012817 7.82549445,9.39792108 7.28729653,9.63108766 C7.08,9.71022034 6.85346985,9.68 6.68912398,9.49179828 Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"arrow-es-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M10.2605799,13.3863593 C10.1395968,13.4287864 10.0527368,13.45 10,13.45 C9.86888463,13.45 9.7495566,13.3995324 9.66038175,13.3169629 C9.62336122,13.2826846 7.87888372,11.1717162 7.85312988,11.1460236 C7.76268134,11.05579 7.6378559,11 7.5,11 C7.36106093,11 7.23535789,11.0566702 7.14474446,11.1481569 C7.11712067,11.176047 5.38316951,13.2743383 5.3512134,13.3058781 C5.26092214,13.3949932 5.13688483,13.45 5,13.45 C4.94846592,13.45 4.86607927,13.4308817 4.75284004,13.3926451 C3.95322232,13.0192244 3.32116699,12.5002136 3.1295929,12.3130188 C3.04943242,12.222975 2.999749,12.1044865 2.999749,11.9743938 C2.999749,11.8971872 3.01724809,11.8240676 3.04849642,11.7587851 L7.04,1.29 L7.04612499,1.289958 C7.12548958,1.1187486 7.29887718,1 7.5,1 C7.6986843,1 7.87030186,1.11588651 7.9509469,1.28375376 L7.95635553,1.28371668 L11.962677,11.7834625 C11.993942,11.8487592 12.0005287,11.9135014 12.0005287,11.99073 C12.0005287,12.1135282 11.962677,12.2262726 11.8828125,12.3130188 C11.7159576,12.47 10.804184,13.1774445 10.2605799,13.3863593 Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"art-gallery-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M8.21,3L5.85,0.65C5.6555,0.4539,5.339,0.4526,5.1429,0.6471C5.1419,0.6481,5.141,0.649,5.14,0.65L2.79,3H1.5&#xA;&#x9;C1.2239,3,1,3.2239,1,3.5v6C1,9.7761,1.2239,10,1.5,10h8C9.7761,10,10,9.7761,10,9.5v-6C10,3.2239,9.7761,3,9.5,3H8.21z M5.5,1.71&#xA;&#x9;L6.79,3H4.21L5.5,1.71z M9,9H2V4h7V9z M4.5,5.5C4.5,5.7761,4.2761,6,4,6S3.5,5.7761,3.5,5.5S3.7239,5,4,5S4.5,5.2239,4.5,5.5z M8,8&#xA;&#x9;H4l0.75-1.5l0.5,1L6.5,5L8,8z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"art-gallery-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M10.71,4L7.85,1.15C7.6555,0.9539,7.339,0.9526,7.1429,1.1471C7.1419,1.1481,7.141,1.149,7.14,1.15L4.29,4H1.5&#xA;&#x9;C1.2239,4,1,4.2239,1,4.5v9C1,13.7761,1.2239,14,1.5,14h12c0.2761,0,0.5-0.2239,0.5-0.5v-9C14,4.2239,13.7761,4,13.5,4H10.71z&#xA;&#x9; M7.5,2.21L9.29,4H5.71L7.5,2.21z M13,13H2V5h11V13z M5,8C4.4477,8,4,7.5523,4,7s0.4477-1,1-1s1,0.4477,1,1S5.5523,8,5,8z M12,12&#xA;&#x9;H4.5L6,9l1.25,2.5L9.5,7L12,12z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"attraction-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"rect7143\" d=\"M4.5,1.5c0,0-0.5,0-0.7,0.5L3.5,2.5H1c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1h9&#xA;&#x9;c0.6,0,1-0.4,1-1v-5c0-0.6-0.4-1-1-1H7.5L7.2,2C7,1.5,6.5,1.5,6.5,1.5H4.5z M5.5,3.5C6.9,3.5,8,4.6,8,6S6.9,8.5,5.5,8.5S3,7.4,3,6&#xA;&#x9;S4.1,3.5,5.5,3.5z M5.5,5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S6.1,5,5.5,5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"attraction-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"rect7143\" d=\"M6,2C5.446,2,5.2478,2.5045,5,3L4.5,4h-2C1.669,4,1,4.669,1,5.5v5C1,11.331,1.669,12,2.5,12h10&#xA;&#x9;c0.831,0,1.5-0.669,1.5-1.5v-5C14,4.669,13.331,4,12.5,4h-2L10,3C9.75,2.5,9.554,2,9,2H6z M2.5,5C2.7761,5,3,5.2239,3,5.5&#xA;&#x9;S2.7761,6,2.5,6S2,5.7761,2,5.5S2.2239,5,2.5,5z M7.5,5c1.6569,0,3,1.3431,3,3s-1.3431,3-3,3s-3-1.3431-3-3S5.8431,5,7.5,5z&#xA;&#x9; M7.5,6.5C6.6716,6.5,6,7.1716,6,8l0,0c0,0.8284,0.6716,1.5,1.5,1.5l0,0C8.3284,9.5,9,8.8284,9,8l0,0C9,7.1716,8.3284,6.5,7.5,6.5&#xA;&#x9;L7.5,6.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"bakery-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path5836\" d=\"M4.5,2c-1,0-1,1-1,1L5,7.5&#xA;&#x9;C5,7.5,5,8,5.5,8S6,7.5,6,7.5L7.5,3c0,0,0-1-1-1H4.5z M9,3.5l-2,4h1.5l1,1H10c1,0,1-0.9,1-0.9V6.3L9,3.5z M0,6.3v1.2&#xA;&#x9;c0,0,0.0296,1.0097,1,1c0.9704-0.0097,0.5,0,0.5,0l1-1H4l-2-4L0,6.3z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"bakery-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path5230\" d=\"M5.2941,4.3824L6,9.5&#xA;&#x9;c0,0,0,1,1,1h1c1,0,1-1,1-1l0.7059-5.1176C9.7059,3,7.5,3,7.5,3S5.291,3,5.2941,4.3824z M3.5,5C2,5,2,6,2,6l1,4h1.5&#xA;&#x9;c0.755,0,0.7941-0.7647,0.7941-0.7647L4.5,5H3.5z M1.5,7.5c0,0-0.6176-0.0294-1.0588,0.4118C0,8.3529,0,8.7941,0,8.7941V11h0.8824&#xA;&#x9;C2,11,2,10,2,10L1.5,7.5z\"/>\n  <path id=\"path5230-2\" d=\"M11.5,5C13,5,13,6,13,6l-1,4h-1.5&#xA;&#x9;c-0.755,0-0.7941-0.7647-0.7941-0.7647L10.5,5H11.5z M13.5,7.5c0,0,0.6176-0.0294,1.0588,0.4118C15,8.3529,15,8.7941,15,8.7941V11&#xA;&#x9;h-0.8824C13,11,13,10,13,10L13.5,7.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"bank-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path5622\" d=\"M1,2C0,2,0,3,0,3v5c0,1,1,1,1,1h9c1,0,1-1,1-1V3c0,0,0-1-1-1H1z M1,3h1.5C2.7761,3,3,3.2239,3,3.5&#xA;&#x9;S2.7761,4,2.5,4S2,3.7761,2,3.5L1.5,4C1.7761,4,2,4.2239,2,4.5S1.7761,5,1.5,5S1,4.7761,1,4.5V3z M5.5,3c1.1046,0,2,1.1193,2,2.5&#xA;&#x9;S6.6046,8,5.5,8s-2-1.1193-2-2.5S4.3954,3,5.5,3z M8.5,3H10v1.5C10,4.7761,9.7761,5,9.5,5S9,4.7761,9,4.5S9.2239,4,9.5,4L9,3.5&#xA;&#x9;C9,3.7761,8.7761,4,8.5,4S8,3.7761,8,3.5S8.2239,3,8.5,3z M1.5,6C1.7761,6,2,6.2239,2,6.5S1.7761,7,1.5,7L2,7.5&#xA;&#x9;C2,7.2239,2.2239,7,2.5,7S3,7.2239,3,7.5S2.7761,8,2.5,8H1V6.5C1,6.2239,1.2239,6,1.5,6z M9.5,6C9.7761,6,10,6.2239,10,6.5V8H8.5&#xA;&#x9;C8.2239,8,8,7.7761,8,7.5S8.2239,7,8.5,7S9,7.2239,9,7.5L9.5,7C9.2239,7,9,6.7761,9,6.5S9.2239,6,9.5,6z\"/>\n  <path id=\"path5835\" d=\"M4.9023,4.25C4.8261,4.321,4.7584,4.4051,4.7012,4.5h1.5977c-0.0572-0.0949-0.125-0.179-0.2012-0.25H4.9023z&#xA;&#x9; M4.5859,4.75C4.5575,4.8303,4.5359,4.9141,4.5215,5h1.959C6.4661,4.9141,6.4445,4.8303,6.416,4.75H4.5859z M4.5,5.25&#xA;&#x9;C4.4998,5.3339,4.5063,5.4177,4.5195,5.5h1.959C6.4924,5.4178,6.4996,5.334,6.5,5.25H4.5z M4.5859,5.75&#xA;&#x9;C4.6171,5.8387,4.6564,5.9226,4.7031,6h1.5957c0.046-0.0775,0.0847-0.1614,0.1152-0.25H4.5859z M4.9023,6.25&#xA;&#x9;c0.0109,0.0107,0.022,0.0211,0.0332,0.0312L4.5,6.5h2L6.0645,6.2812C6.0757,6.2711,6.0868,6.2607,6.0977,6.25H4.9023z M4.582,6.75&#xA;&#x9;C4.611,6.8289,4.638,6.9091,4.6914,7h1.627c0.0524-0.091,0.0778-0.1711,0.1055-0.25H4.582z M4.8926,7.25&#xA;&#x9;C5.0395,7.3915,5.2332,7.5,5.5,7.5c0.2739,0,0.4701-0.1085,0.6172-0.25H4.8926z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"bank-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"rect5668\" d=\"M1,3C0.446,3,0,3.446,0,4v7c0,0.554,0.446,1,1,1h13c0.554,0,1-0.446,1-1V4c0-0.554-0.446-1-1-1H1z M1,4h1.5&#xA;&#x9;C2.7761,4,3,4.2239,3,4.5S2.7761,5,2.5,5S2,4.7761,2,4.5L1.5,5C1.7761,5,2,5.2239,2,5.5S1.7761,6,1.5,6S1,5.7761,1,5.5V4z M7.5,4&#xA;&#x9;C8.8807,4,10,5.567,10,7.5l0,0C10,9.433,8.8807,11,7.5,11S5,9.433,5,7.5S6.1193,4,7.5,4z M12.5,4H14v1.5C14,5.7761,13.7761,6,13.5,6&#xA;&#x9;S13,5.7761,13,5.5S13.2239,5,13.5,5L13,4.5C13,4.7761,12.7761,5,12.5,5S12,4.7761,12,4.5S12.2239,4,12.5,4z M7.5,5.5&#xA;&#x9;c-0.323,0-0.5336,0.1088-0.6816,0.25h1.3633C8.0336,5.6088,7.823,5.5,7.5,5.5z M6.625,6C6.5795,6.091,6.5633,6.1711,6.5449,6.25&#xA;&#x9;h1.9102C8.4367,6.1711,8.4205,6.091,8.375,6H6.625z M6.5,6.5v0.25h2V6.5H6.5z M6.5,7v0.25h2V7H6.5z M6.5,7.5v0.25h2V7.5H6.5z M6.5,8&#xA;&#x9;L6.25,8.25h2L8.5,8H6.5z M6,8.5c0,0,0.0353,0.1024,0.1016,0.25H8.375L8,8.5H6z M1.5,9C1.7761,9,2,9.2239,2,9.5S1.7761,10,1.5,10&#xA;&#x9;L2,10.5C2,10.2239,2.2239,10,2.5,10S3,10.2239,3,10.5S2.7761,11,2.5,11H1V9.5C1,9.2239,1.2239,9,1.5,9z M6.2383,9&#xA;&#x9;C6.2842,9.0856,6.3144,9.159,6.375,9.25h2.2676C8.7092,9.1121,8.75,9,8.75,9H6.2383z M13.5,9C13.7761,9,14,9.2239,14,9.5V11h-1.5&#xA;&#x9;c-0.2761,0-0.5-0.2239-0.5-0.5s0.2239-0.5,0.5-0.5s0.5,0.2239,0.5,0.5l0.5-0.5C13.2239,10,13,9.7761,13,9.5S13.2239,9,13.5,9z&#xA;&#x9; M6.5664,9.5c0.0786,0.0912,0.1647,0.1763,0.2598,0.25h1.4199C8.3462,9.6727,8.4338,9.5883,8.5,9.5H6.5664z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"bar-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path15601-4-2_2_\" d=\"M5.4883,1C4.9759,1,0.5,1,1,1.5L5,6v2.5C5,9,2.5,9,2.5,10h6&#xA;&#x9;C8.5,9,6,9,6,8.5V6l4-4.5C10.5,1,6.0006,1,5.4883,1z M2.5,2h6l-1,1h-4L2.5,2z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"bar-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path4\" d=\"M7.5,1c-2,0-7,0.25-6.5,0.75L7,8v4&#xA;&#x9;c0,1-3,0.5-3,2h7c0-1.5-3-1-3-2V8l6-6.25C14.5,1.25,9.5,1,7.5,1z M7.5,2c2.5,0,4.75,0.25,4.75,0.25L11.5,3h-8L2.75,2.25&#xA;&#x9;C2.75,2.25,5,2,7.5,2z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"barrier-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.5,2h-8a.5.5,0,0,0-.5.5v4a.5.5,0,0,0,.5.5H2V9.5a.5.5,0,0,0,1,0V9H8v.5a.5.5,0,0,0,1,0V7h.5a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,9.5,2ZM2,3H3.5l3,3h-2L2,3.5ZM2,6V4.5L3.5,6ZM3,8V7H8V8ZM9,6H7.5l-3-3h2L9,5.5ZM9,4.5,7.5,3H9Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"barrier-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M13,3H2A1,1,0,0,0,1,4v6a1,1,0,0,0,1,1H3v2.5a.5.5,0,0,0,1,0V13h7v.5a.5.5,0,0,0,1,0V11h1a1,1,0,0,0,1-1V4A1,1,0,0,0,13,3Zm0,1V6L11,4ZM9.5,4,13,7.5V10L7,4Zm-4,6L2,6.5V4l6,6ZM2,10V8l2,2Zm9,2H4V11h7Zm-.207-2H9.5l-6-6h2l6,6Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"baseball-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M7,3c0,0.5523-0.4477,1-1,1S5,3.5523,5,3s0.4477-1,1-1S7,2.4477,7,3z M9.85,10.24L9.85,10.24l-3-4.85&#xA;&#x9;C6.7391,5.2011,6.5603,5.0616,6.35,5H2.5C2.2239,5,2,5.2239,2,5.5S2.2239,6,2.5,6H5l0.92,1.09l-2.73,3l0,0&#xA;&#x9;C3.0637,10.1876,2.9928,10.3405,3,10.5C3,10.7761,3.2239,11,3.5,11c0.1224-0.0006,0.2401-0.047,0.33-0.13l0,0l3-2.71L9,10.81l0,0&#xA;&#x9;c0.0912,0.1178,0.231,0.1877,0.38,0.19c0.2761,0,0.5-0.2239,0.5-0.5C9.8938,10.4122,9.8834,10.3223,9.85,10.24z M4,0.28&#xA;&#x9;C4,0.1254,3.8746,0,3.72,0C3.6221,0.0262,3.5348,0.0821,3.47,0.16L2,4.59C1.9941,4.6331,1.9941,4.6769,2,4.72&#xA;&#x9;C2,4.8746,2.1254,5,2.28,5c0.1015-0.0243,0.1926-0.0803,0.26-0.16L4,0.41C4.006,0.3669,4.006,0.3231,4,0.28z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"baseball-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M10,3.5C10,4.3284,9.3284,5,8.5,5S7,4.3284,7,3.5S7.6716,2,8.5,2S10,2.6716,10,3.5z M7,0.28C7,0.1254,6.8746,0,6.72,0&#xA;&#x9;c0,0,0,0,0,0C6.6221,0.0262,6.5348,0.0821,6.47,0.16L4,4.59C3.9941,4.6331,3.9941,4.6769,4,4.72C4,4.8746,4.1254,5,4.28,5&#xA;&#x9;c0.1015-0.0243,0.1926-0.0803,0.26-0.16L7,0.41C7.006,0.3669,7.006,0.3231,7,0.28z M12.9,14.2L12.9,14.2L10,6.39l0,0&#xA;&#x9;C9.9526,6.1627,9.7522,5.9999,9.52,6h-5c-0.2761,0-0.5,0.2239-0.5,0.5S4.2439,7,4.52,7H7l1.45,2.51l-4.27,4.61l0,0&#xA;&#x9;C4.0659,14.2132,3.9998,14.3527,4,14.5C4,14.7761,4.2239,15,4.5,15c0.1224-0.0006,0.2401-0.047,0.33-0.13l0,0l4.45-4.15l2.76,4l0,0&#xA;&#x9;c0.0895,0.1592,0.2574,0.2584,0.44,0.26c0.2796,0.0002,0.5092-0.2207,0.52-0.5C12.9958,14.3787,12.961,14.281,12.9,14.2z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"basketball-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path id=\"icon_concepts:_sports_leisure\" d=\"M2.63,3.51a5.1555,5.1555,0,0,1,.34,1.48H2.04A3.2586,3.2586,0,0,1,2.63,3.51Zm.55-.63a6.2022,6.2022,0,0,1,.55,2.11H5.12V2.01A3.4256,3.4256,0,0,0,3.18,2.88Zm2.7-.87V4.99H7.27a6.2022,6.2022,0,0,1,.55-2.11A3.4256,3.4256,0,0,0,5.88,2.01Zm2.49,1.5a5.1555,5.1555,0,0,0-.34,1.48h.93A3.2586,3.2586,0,0,0,8.37,3.51ZM9.9,6.5a.4952.4952,0,0,1-.49.5H8.44L7.91,8.05v1.7a.2176.2176,0,0,1-.14.2.236.236,0,0,1-.08.02.1987.1987,0,0,1-.16-.07l-.75-.74-1.16.77a.2107.2107,0,0,1-.24,0L4.22,9.16l-.75.74a.2222.2222,0,0,1-.38-.15V8.05L2.57,7H1.6a.5.5,0,1,1,0-1H9.4a.4951.4951,0,0,1,.5.49ZM3.53,8V9.22l.5-.5c.01,0,.01-.01.02-.01L5.1,7H3.06l.45.9A.3561.3561,0,0,1,3.53,8Zm2.97.82-1-1.63-1,1.63,1,.67ZM7.94,7H5.9L6.95,8.71c.01,0,.01.01.02.01l.5.5V8a.3561.3561,0,0,1,.02-.1Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"basketball-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path id=\"icon_concepts:_sports_leisure\" d=\"M3.66,7.0016H2.03a5.3231,5.3231,0,0,1,1.01-2.71A8.7122,8.7122,0,0,1,3.66,7.0016Zm1.075,0h2.34v-4.97a5.4585,5.4585,0,0,0-3.24,1.44A9.2947,9.2947,0,0,1,4.735,7.0016Zm3.19-4.97v4.97h2.34a9.2947,9.2947,0,0,1,.9-3.53A5.4585,5.4585,0,0,0,7.925,2.0316Zm4.035,2.26a8.7122,8.7122,0,0,0-.62,2.71h1.63A5.3231,5.3231,0,0,0,11.96,4.2916ZM14,8.7516a.7555.7555,0,0,1-.75.75H11.72l-.76,1.52v2.38a.392.392,0,0,1-.24.35.5863.5863,0,0,1-.14.02.3274.3274,0,0,1-.26-.11l-1.02-1.01-1.59,1.06a.3975.3975,0,0,1-.42,0l-1.59-1.06-1.02,1.01a.3709.3709,0,0,1-.4.09.392.392,0,0,1-.24-.35v-2.38l-.76-1.52H1.75a.75.75,0,0,1,0-1.5h11.5A.749.749,0,0,1,14,8.75Zm-7.14.75H4.12l.63,1.27a.3175.3175,0,0,1,.04.16v1.56l.56-.55Zm1.98,2.55L7.5,9.8916l-1.34,2.16,1.34.9Zm2.05-2.55H8.14l1.51,2.44.56.55v-1.56a.3175.3175,0,0,1,.04-.16Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"bbq-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M4,1.75c0,0,0-1,1-1c0,0,0.5,0,0.5-0.5C5.5,0.1119,5.6119,0,5.75,0S6,0.1119,6,0.25c0,0,0,1-1,1c0,0-0.5,0-0.5,0.5&#xA;&#x9;C4.5,1.8881,4.3881,2,4.25,2S4,1.8881,4,1.75z M2.25,2C2.3881,2,2.5,1.8881,2.5,1.75c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1&#xA;&#x9;C4,0.1119,3.8881,0,3.75,0S3.5,0.1119,3.5,0.25c0,0.5-0.5,0.5-0.5,0.5c-1,0-1,1-1,1C2,1.8881,2.1119,2,2.25,2z M6.25,2&#xA;&#x9;C6.3881,2,6.5,1.8881,6.5,1.75c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1C8,0.1119,7.8881,0,7.75,0S7.5,0.1119,7.5,0.25&#xA;&#x9;c0,0.5-0.5,0.5-0.5,0.5c-1,0-1,1-1,1C6,1.8881,6.1119,2,6.25,2z M9.75,0C9.6119,0,9.5,0.1119,9.5,0.25c0,0.5-0.5,0.5-0.5,0.5&#xA;&#x9;c-1,0-1,1-1,1C8,1.8881,8.1119,2,8.25,2S8.5,1.8881,8.5,1.75c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1C10,0.1119,9.8881,0,9.75,0z&#xA;&#x9; M6.6746,5.865C6.6745,5.8654,6.6741,5.8657,6.674,5.866l2.3,4.782v0.009c0.055,0.1215,0.0014,0.2646-0.12,0.32&#xA;&#x9;c-0.1237,0.0574-0.2705,0.0037-0.328-0.12L7.845,9.5H4c0,0.2029-0.0411,0.4036-0.1209,0.5901&#xA;&#x9;C3.5532,10.8518,2.6717,11.205,1.91,10.8792c-0.7617-0.3259-1.115-1.2074-0.7891-1.9691C1.4468,8.1484,2.3283,7.7952,3.09,8.121&#xA;&#x9;c0.0531,0.0208,0.1048,0.0449,0.155,0.072L4.278,5.85C2.9692,5.5125,2.0408,4.351,2,3h7C9,3,8.9985,5.2823,6.6746,5.865z M3.25,9.5&#xA;&#x9;c0-0.4142-0.3358-0.75-0.75-0.75S1.75,9.0858,1.75,9.5s0.3358,0.75,0.75,0.75S3.25,9.9142,3.25,9.5z M6.1731,5.9562&#xA;&#x9;C5.9635,5.9829,5.7419,6,5.5,6C5.2147,6,4.787,5.953,4.787,5.953l-1.144,2.58C3.7659,8.6688,3.8607,8.8275,3.922,9h3.673&#xA;&#x9;L6.1731,5.9562z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"bbq-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M9.32,7.655C10.8782,7.108,11.9471,5.6506,12,4H3c0.053,1.6299,1.0978,3.0728,2.63,3.631L4.923,9.044&#xA;&#x9;c-1.3571-0.2355-2.6482,0.6737-2.8837,2.0308s0.6737,2.6482,2.0308,2.8837C4.9927,14.1187,5.9273,13.7485,6.49,13h4.223l0.335,0.717&#xA;&#x9;c0.0836,0.1735,0.2594,0.2836,0.452,0.283c0.0733,0.0003,0.1457-0.0158,0.212-0.047c0.2497-0.117,0.3575-0.4141,0.241-0.664&#xA;&#x9;L9.32,7.655z M4.5,12.75c-0.6904,0-1.25-0.5596-1.25-1.25s0.5596-1.25,1.25-1.25s1.25,0.5596,1.25,1.25&#xA;&#x9;C5.7484,12.1897,5.1897,12.7484,4.5,12.75z M6.95,12c0.2066-1.007-0.2268-2.0374-1.091-2.594L6.6,7.923&#xA;&#x9;c0.577,0.1042,1.168,0.1042,1.745,0l1.9,4.07L6.95,12z M4.75,1C4.6119,1,4.5,1.1119,4.5,1.25c0,0.5-0.5,0.5-0.5,0.5c-1,0-1,1-1,1&#xA;&#x9;C3,2.8881,3.1119,3,3.25,3S3.5,2.8881,3.5,2.75c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1C5,1.1119,4.8881,1,4.75,1z M6.75,1&#xA;&#x9;C6.6119,1,6.5,1.1119,6.5,1.25c0,0.5-0.5,0.5-0.5,0.5c-1,0-1,1-1,1C5,2.8881,5.1119,3,5.25,3S5.5,2.8881,5.5,2.75&#xA;&#x9;c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1C7,1.1119,6.8881,1,6.75,1z M8.75,1C8.6119,1,8.5,1.1119,8.5,1.25c0,0.5-0.5,0.5-0.5,0.5&#xA;&#x9;c-1,0-1,1-1,1C7,2.8881,7.1119,3,7.25,3S7.5,2.8881,7.5,2.75c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1C9,1.1119,8.8881,1,8.75,1z M10.75,1&#xA;&#x9;c-0.1381,0-0.25,0.1119-0.25,0.25c0,0.5-0.5,0.5-0.5,0.5c-1,0-1,1-1,1C9,2.8881,9.1119,3,9.25,3S9.5,2.8881,9.5,2.75&#xA;&#x9;c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1C11,1.1119,10.8881,1,10.75,1z M12.75,1c-0.1381,0-0.25,0.1119-0.25,0.25c0,0.5-0.5,0.5-0.5,0.5&#xA;&#x9;c-1,0-1,1-1,1C11,2.8881,11.1119,3,11.25,3s0.25-0.1119,0.25-0.25c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1C13,1.1119,12.8881,1,12.75,1z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"beach-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M3.5,1.65V4.47a1.7027,1.7027,0,0,0-.58-.04c-.28.07-.56.47-.83.57A3.1261,3.1261,0,0,1,3.5,1.65Zm2.31-.62L7.26,3.45a1.2164,1.2164,0,0,1,.45-.31c.27-.07.7.13,1,.09A3.1057,3.1057,0,0,0,5.81,1.03ZM.9839,10h8.99A4.8406,4.8406,0,0,0,6.9,8.68L5.57,3.74c.46-.04,1.02.06,1.27-.01L5.23,1.04a3.5252,3.5252,0,0,0-.62.11A2.96,2.96,0,0,0,4,1.38v3.1c.25-.08.68-.42,1.08-.6L6.35,8.63q-.39-.03-.84-.03C1.99,8.6.9839,10,.9839,10Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"beach-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M5.3608,1.67l-.01,4.02a4.4523,4.4523,0,0,0-1.1-.11c-.37.1-.74.63-1.1.76A4.2019,4.2019,0,0,1,5.3608,1.67Zm2.41-.64,2.03,3.45a3.1832,3.1832,0,0,1,.84-.61c.36-.1.94.17,1.34.11A4.2018,4.2018,0,0,0,7.7708,1.03ZM1.0008,13h13c-.66-.66-2.64-1.11-4.34-1.33l-1.87-7c.52-.05,1.15.03,1.53,0l-2.11-3.6h-.01a6.1743,6.1743,0,0,0-.7.14,4.3792,4.3792,0,0,0-.64.22l-.01,4.15c.35-.17.84-.54,1.3-.74l1.8,6.74c-.58-.05-1.09-.08-1.45-.08C6.0308,11.5,2.0008,12,1.0008,13Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"beer-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M5.5,1c-2.3,0-3,0.66-3,0.66v2c0.0328,0.9197,0.2577,1.8223,0.66,2.65c0.376,0.9646,0.376,2.0354,0,3c0,0,0,0.66,2.32,0.66&#xA;&#x9;S7.8,9.31,7.8,9.31c-0.376-0.9646-0.376-2.0354,0-3c0.4023-0.8277,0.6272-1.7303,0.66-2.65v-2C8.46,1.66,7.8,1,5.5,1z M5.5,9.28&#xA;&#x9;C4.9736,9.3066,4.4465,9.2458,3.94,9.1c0.1326-0.4787,0.1999-0.9732,0.2-1.47h2.72c-0.0144,0.2198-0.0144,0.4402,0,0.66&#xA;&#x9;C6.8939,8.5635,6.9474,8.8342,7.02,9.1C6.5269,9.2448,6.0136,9.309,5.5,9.29V9.28z M7.82,3.28c-1.5116,0.4425-3.1184,0.4425-4.63,0&#xA;&#x9;L3.18,2c1.5151-0.4422,3.1249-0.4422,4.64,0c0,0,0.03,1.33,0,1.33L7.82,3.28z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"beer-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M12,5V2c0,0-1-1-4.5-1S3,2,3,2v3c0.0288,1.3915,0.3706,2.7586,1,4c0.6255,1.4348,0.6255,3.0652,0,4.5c0,0,0,1,3.5,1&#xA;&#x9;s3.5-1,3.5-1c-0.6255-1.4348-0.6255-3.0652,0-4.5C11.6294,7.7586,11.9712,6.3915,12,5z M7.5,13.5&#xA;&#x9;c-0.7966,0.035-1.5937-0.0596-2.36-0.28c0.203-0.7224,0.304-1.4696,0.3-2.22h4.12c-0.004,0.7504,0.097,1.4976,0.3,2.22&#xA;&#x9;C9.0937,13.4404,8.2966,13.535,7.5,13.5z M7.5,5C6.3136,5.0299,5.1306,4.8609,4,4.5v-2C5.131,2.1411,6.3137,1.9722,7.5,2&#xA;&#x9;C8.6863,1.9722,9.869,2.1411,11,2.5v2C9.8694,4.8609,8.6864,5.0299,7.5,5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"bicycle-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path4804\" d=\"&#xA;&#x9;M6.5,1.5c-0.6761-0.01-0.6761,1.0096,0,1H7V3.211L4.252,4.7813L3.7383,3.5h0.7148c0.6761,0.01,0.6761-1.0096,0-1H2.4258&#xA;&#x9;c-0.6761-0.01-0.6761,1.0096,0,1h0.2344l0.4316,1.0781C2.9011,4.5311,2.7047,4.5001,2.5,4.5001c-1.3748,0-2.5,1.1252-2.5,2.5&#xA;&#x9;s1.1252,2.5,2.5,2.5S5,8.3748,5,7.0001c0-0.4713-0.1399-0.9078-0.3691-1.2852l2.4707-1.4121L7.5039,4.711&#xA;&#x9;C6.6216,5.0981,6,5.9792,6,7.0001c0,1.3748,1.1252,2.5,2.5,2.5s2.5-1.1252,2.5-2.5c0-1.2959-1.0034-2.3575-2.2695-2.4766L8,3.793V2&#xA;&#x9;c0-0.2761-0.2239-0.5-0.5-0.5H6.5z M2.5,5.5C3.3344,5.5,4,6.1657,4,7S3.3344,8.5,2.5,8.5S1,7.8344,1,7S1.6656,5.5,2.5,5.5z&#xA;&#x9; M8.4551,5.504h0.002c0.0299,0.003,0.06,0.003,0.0898,0C9.3587,5.5289,10,6.1818,10,7.0001c0,0.8344-0.6656,1.5-1.5,1.5&#xA;&#x9;S7,7.8345,7,7.0001C7,6.1811,7.6424,5.5279,8.4551,5.504L8.4551,5.504z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"bicycle-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path4668\" d=\"&#xA;&#x9;M7.5,2c-0.6761-0.01-0.6761,1.0096,0,1H9v1.2656l-2.8027,2.334L5.2226,4H5.5c0.6761,0.01,0.6761-1.0096,0-1h-2&#xA;&#x9;c-0.6761-0.01-0.6761,1.0096,0,1h0.6523L5.043,6.375C4.5752,6.1424,4.0559,6,3.5,6C1.5729,6,0,7.5729,0,9.5S1.5729,13,3.5,13&#xA;&#x9;S7,11.4271,7,9.5c0-0.6699-0.2003-1.2911-0.5293-1.8242L9.291,5.3262l0.4629,1.1602C8.7114,7.0937,8,8.2112,8,9.5&#xA;&#x9;c0,1.9271,1.5729,3.5,3.5,3.5S15,11.4271,15,9.5S13.4271,6,11.5,6c-0.2831,0-0.5544,0.0434-0.8184,0.1074L10,4.4023V2.5&#xA;&#x9;c0-0.2761-0.2239-0.5-0.5-0.5H7.5z M3.5,7c0.5923,0,1.1276,0.2119,1.5547,0.5527l-1.875,1.5625&#xA;&#x9;c-0.5109,0.4273,0.1278,1.1945,0.6406,0.7695l1.875-1.5625C5.8835,8.674,6,9.0711,6,9.5C6,10.8866,4.8866,12,3.5,12S1,10.8866,1,9.5&#xA;&#x9;S2.1133,7,3.5,7L3.5,7z M11.5,7C12.8866,7,14,8.1134,14,9.5S12.8866,12,11.5,12S9,10.8866,9,9.5c0-0.877,0.4468-1.6421,1.125-2.0879&#xA;&#x9;l0.9102,2.2734c0.246,0.6231,1.1804,0.2501,0.9297-0.3711l-0.9082-2.2695C11.2009,7.0193,11.3481,7,11.5,7L11.5,7z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"bicycle-share-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path4632\" d=\"M8,0.0004c-0.5523,0-1,0.4477-1,1s0.4477,1,1,1s1-0.4477,1-1&#xA;&#x9;S8.5523,0.0004,8,0.0004z M6.0137,2.0004C5.8763,1.9967,5.7436,2.0497,5.6465,2.1468l-2,2c-0.1952,0.1953-0.1952,0.5118,0,0.707&#xA;&#x9;L5,6.2074v2.293C4.9961,8.7765,5.2168,9.0035,5.4929,9.0074C5.7691,9.0114,5.9961,8.7907,6,8.5145&#xA;&#x9;c0.0001-0.0047,0.0001-0.0094,0-0.0141v-2.5c0.0005-0.1323-0.0515-0.2594-0.1445-0.3535l-0.752-0.752l1.166-1.2031l0.832,1.1094&#xA;&#x9;C7.1958,4.9263,7.3433,5.0001,7.5,5.0004h2c0.2762,0.0039,0.5032-0.2168,0.5071-0.4929c0.0039-0.2761-0.2168-0.5032-0.493-0.5071&#xA;&#x9;c-0.0047-0.0001-0.0094-0.0001-0.0141,0H7.75L6.4004,2.1996C6.3086,2.0777,6.1662,2.0043,6.0137,2.0004z M2.3633,6.0043&#xA;&#x9;C2.113,6.0182,1.8615,6.0708,1.6191,6.1625C0.6498,6.5293,0.0049,7.46,0.0039,8.4965s0.6411,1.9703,1.6094,2.3398&#xA;&#x9;s2.0683,0.1,2.7578-0.6738c0.1831-0.2068,0.164-0.5229-0.0428-0.706C4.1219,9.2736,3.8064,9.2924,3.623,9.4984&#xA;&#x9;c-0.4154,0.4663-1.0709,0.627-1.6543,0.4043C1.3853,9.68,1.003,9.1229,1.0039,8.4984S1.3886,7.319,1.9727,7.098&#xA;&#x9;c0.584-0.221,1.2402-0.0592,1.6543,0.4082C3.8101,7.713,4.1262,7.7322,4.3329,7.549c0.2068-0.1831,0.226-0.4992,0.0428-0.706&#xA;&#x9;C4.3755,6.8427,4.3752,6.8425,4.375,6.8422C4.0314,6.4543,3.5855,6.1936,3.1035,6.0746C2.8625,6.0151,2.6136,5.9904,2.3633,6.0043&#xA;&#x9;L2.3633,6.0043z M8.6426,6.0043C8.3923,5.9904,8.1433,6.0151,7.9023,6.0746c-0.482,0.119-0.9298,0.3797-1.2734,0.7676&#xA;&#x9;c-0.1834,0.2071-0.1641,0.5237,0.043,0.707s0.5237,0.1641,0.707-0.043C7.793,7.0388,8.4472,6.877,9.0312,7.098&#xA;&#x9;C9.6153,7.319,9.9991,7.8739,10,8.4984S9.6186,9.68,9.0352,9.9027c-0.5834,0.2227-1.2389,0.062-1.6543-0.4043&#xA;&#x9;c-0.1729-0.2153-0.4877-0.2497-0.703-0.0768s-0.2497,0.4877-0.0768,0.703c0.0106,0.0132,0.0218,0.0258,0.0337,0.0378&#xA;&#x9;c0.6895,0.7739,1.7895,1.0434,2.7578,0.6738C10.3609,10.4667,11.0015,9.5329,11,8.4964c-0.001-1.0365-0.6439-1.9671-1.6133-2.334&#xA;&#x9;C9.1444,6.0708,8.8928,6.0182,8.6426,6.0043L8.6426,6.0043z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"bicycle-share-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"circle4604\" d=\"&#xA;&#x9;M10,1C9.4477,1,9,1.4477,9,2c0,0.5523,0.4477,1,1,1s1-0.4477,1-1C11,1.4477,10.5523,1,10,1z M8.1445,2.9941&#xA;&#x9;c-0.13,0.0005-0.2547,0.0517-0.3477,0.1426l-2.6406,2.5c-0.2256,0.2128-0.2051,0.5775,0.043,0.7637L7,7.75v2.75&#xA;&#x9;c-0.01,0.6762,1.0096,0.6762,1,0v-3c0.0003-0.1574-0.0735-0.3057-0.1992-0.4004L7.0332,6.5234l1.818-1.7212l0.7484,0.9985&#xA;&#x9;C9.6943,5.9265,9.8426,6.0003,10,6h1.5c0.6761,0.01,0.6761-1.0096,0-1h-1.25L9.5,4L8.9004,3.1992&#xA;&#x9;C8.8103,3.0756,8.6685,3,8.5156,2.9941H8.1445z M3,7c-1.6569,0-3,1.3432-3,3s1.3431,3,3,3s3-1.3432,3-3S4.6569,7,3,7z M12,7&#xA;&#x9;c-1.6569,0-3,1.3432-3,3s1.3431,3,3,3s3-1.3432,3-3S13.6569,7,12,7z M3,8c1.1046,0,2,0.8954,2,2s-0.8954,2-2,2s-2-0.8954-2-2&#xA;&#x9;S1.8954,8,3,8z M12,8c1.1046,0,2,0.8954,2,2s-0.8954,2-2,2s-2-0.8954-2-2S10.8954,8,12,8z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\" id=\"blood-bank-11\">\n  <path d=\"M8.40515,4.64435H8.40643L5.5,1,2.59308,4.64435H2.59485A3.37087,3.37087,0,0,0,2,6.55859,3.464,3.464,0,0,0,5.5,9.98822,3.464,3.464,0,0,0,9,6.55859,3.37087,3.37087,0,0,0,8.40515,4.64435ZM8,7H6V9H5V7H3V6H5V4H6V6H8V7Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"blood-bank-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M11.2,7.1L11.2,7.1L7.5,2L3.8,7.1h0C3.3,7.8,3,8.7,3,9.6C3,12,5,14,7.5,14c0,0,0,0,0,0C10,14,12,12,12,9.6c0,0,0,0,0,0&#xA;&#x9;C12,8.7,11.7,7.8,11.2,7.1z M10,10H8v2H7v-2H5V9h2V7h1v2h2V10z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"boat-es-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M5.49155349,1 C5.8474897,1 7.18272402,1.81764454 7.62717076,3.42307692 C7.91542674,4.46431637 8.05002781,6.45947675 7.98310698,9.40499722 C7.97869503,9.59918917 7.80769593,9.70129941 7.71999041,9.72309588 C6.9771781,9.90769863 6.2343658,10 5.49155349,10 C4.74960052,10 4.00764755,9.90791206 3.26569459,9.72373619 C3.17712972,9.70175163 3,9.60085825 3,9.41035081 C3,6.46424944 3.06615372,4.46983047 3.35593621,3.42307692 C3.80248609,1.81004756 5.13561728,1 5.49155349,1 Z M3.71187243,4.80769231 L3.71187243,5.15384615 C3.87676711,4.83784365 4.62611891,4.46153846 5.48711363,4.46153846 C6.34810835,4.46153846 7.10633986,4.83784365 7.27123455,5.15384615 L7.27123455,4.80769231 C7.27123455,4.23416584 6.47000434,3.76923077 5.48711363,3.76923077 C4.50422292,3.76923077 3.71187243,4.23416584 3.71187243,4.80769231 Z M4.42374485,5.84615385 C4.03058857,5.84615385 3.71187243,6.15611056 3.71187243,6.53846154 L3.71187243,7.92307692 C3.71187243,8.3054279 4.03058857,8.61538462 4.42374485,8.61538462 L6.55936213,8.61538462 C6.95251841,8.61538462 7.27123455,8.3054279 7.27123455,7.92307692 L7.27123455,6.53846154 C7.27123455,6.15611056 6.95251841,5.84615385 6.55936213,5.84615385 L4.42374485,5.84615385 Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"boat-es-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M7.5,1 C8,1 9.87566518,2.18104212 10.5,4.5 C10.9049265,6.00401254 11.0940068,8.88591087 11,13.1405515 C10.9938023,13.421051 10.753592,13.5685436 10.630388,13.6000274 C9.58692536,13.8666758 8.54346268,14 7.5,14 C6.45774448,14 5.41548895,13.8669841 4.37323343,13.6009523 C4.24882229,13.5691968 4,13.4234619 4,13.1482845 C4,8.89280475 4.09292918,6.01197734 4.5,4.5 C5.1272892,2.1700687 7,1 7.5,1 Z M5,6.5 L5,7 C5.23163517,6.54355194 6.28428417,6 7.49376313,6 C8.70324208,6 9.76836483,6.54355194 10,7 L10,6.5 C10,5.67157288 8.874475,5 7.49376313,5 C6.11305125,5 5,5.67157288 5,6.5 Z M6,8 C5.44771525,8 5,8.44771525 5,9 L5,11 C5,11.5522847 5.44771525,12 6,12 L9,12 C9.55228475,12 10,11.5522847 10,11 L10,9 C10,8.44771525 9.55228475,8 9,8 L6,8 Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"bowling-alley-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path id=\"icon_concepts:_sports_leisure\" d=\"M6.02,3.94c.04-.1.13-.4.17-.49A2.8252,2.8252,0,0,0,4.5,3a3.5,3.5,0,0,0,0,7,2.88,2.88,0,0,0,1.54-.4,8.5971,8.5971,0,0,1-.4-2.61A12.7588,12.7588,0,0,1,6.02,3.94ZM2.5,6.98a.48.48,0,1,1,.48-.48A.4867.4867,0,0,1,2.5,6.98Zm1-2a.48.48,0,1,1,.48-.48A.4867.4867,0,0,1,3.5,4.98Zm1,2a.48.48,0,1,1,.48-.48A.4867.4867,0,0,1,4.5,6.98ZM8.0981,2.4992c0-.5-.1-.5-.1-1,0-.7816.5-.7.5-.7s.5-.0814.5.7c0,.5-.1.5-.1,1,0,1.5,1.075,2.5039,1.075,4.5,0,1.5-.475,3-.975,3h-1c-.5,0-.975-1.5-.975-3C7.0231,5.0031,8.0981,3.9992,8.0981,2.4992Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"bowling-alley-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path id=\"icon_concepts:_sports_leisure\" d=\"M8.83,5.39a11.0127,11.0127,0,0,0-.96,4.28,11.4686,11.4686,0,0,0,.58,3.69A4.9424,4.9424,0,0,1,6,14,5,5,0,1,1,8.98,4.99C8.94,5.12,8.88,5.25,8.83,5.39ZM4.12,8.5a.62.62,0,1,0-.62.62h0a.6105.6105,0,0,0,.62-.6009C4.12,8.5128,4.12,8.5064,4.12,8.5ZM4.5,7.12a.62.62,0,1,0-.62-.62h0a.6106.6106,0,0,0,.6011.62ZM6.12,8.5a.62.62,0,1,0-.62.62h0a.6105.6105,0,0,0,.62-.6009C6.12,8.5128,6.12,8.5064,6.12,8.5Zm4.8022-5.3341c0-.7222-.1444-.7222-.1444-1.4444a.7222.7222,0,0,1,1.4444-.0007v.0007c0,.7222-.1444.7222-.1444,1.4444,0,2.1667,1.5528,3.6168,1.5528,6.5,0,2.1667-.6861,4.3333-1.4083,4.3333H10.7778c-.7222,0-1.4083-2.1667-1.4083-4.3333C9.3694,6.7826,10.9222,5.3325,10.9222,3.1659Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"bridge-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M0,5.835V9h1c0-1.105,0.896-2.006,2-2.006c1.103,0,1.998,0.903,2,2.006h1c0-1.105,0.895-2.006,1.999-2.006&#xA;&#x9;C9.102,6.994,9.997,7.897,10,9h1V5.835C8.083,1.806,2.389,2.312,0,5.835z M2,6H0.5C0.919,5.449,1.426,4.966,2,4.582V6z M4,6H2.5&#xA;&#x9;V4.263C2.963,4.016,3.491,3.806,4,3.682V6z M6,6H4.5V3.578c0.496-0.081,1-0.102,1.5-0.062V6z M8,6H6.5V3.579&#xA;&#x9;C7.017,3.663,7.52,3.811,8,4.02V6z M8.5,6V4.264C9.28,4.691,9.968,5.287,10.5,6H8.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"bridge-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M0,8.842V13h2v-1c0.036-1.089,0.911-1.964,2-2c1.089,0.036,1.964,0.911,2,2v1h3v-1c0.036-1.089,0.911-1.964,2-2&#xA;&#x9;c1.089,0.036,1.964,0.911,2,2v1h2V8.842C10.6,3.082,3.071,4.4,0,8.842z M9.5,5.734c0.514,0.121,1.016,0.289,1.5,0.5V9H9.5V5.734z&#xA;&#x9; M9,5.634V9H7.5V5.506C8.003,5.506,8.505,5.549,9,5.634z M3.5,6.477C3.98,6.229,4.482,6.026,5,5.871V9H3.5V6.477z M5.5,9V5.73&#xA;&#x9;C5.993,5.615,6.495,5.543,7,5.515V9H5.5z M3,6.744V9H0.5C1.176,8.094,2.032,7.328,3,6.744z M11.5,9V6.5l-0.053-0.053&#xA;&#x9;C12.649,7.05,13.694,7.924,14.5,9H11.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"building-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M2,1v9h4V6h2v4h1V1H2z M5,9H3V6h2V9z M5,5H3V3h2V5z M8,5H6V3h2V5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"building-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M3,2v11h5v-3h3v3h1V2H3z M7,12H4v-2h3V12z M7,9H4V7h3V9z M7,6H4V4h3V6z M11,9H8V7h3V9z M11,6H8V4h3V6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"building-alt1-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M8,9.5v-5C8,4.2,7.8,4,7.5,4H6V1L3,2v7.5H2V10h7V9.5H8z M5,9.5H4V3h1V9.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"building-alt1-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M11,13.5v-9C11,4.2,10.8,4,10.5,4H9V1L5,2.1v11.4H2V14h11v-0.5H11z M7,13.5V3h1v10.5H7z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"bus-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path8043\" d=\"M3,0C2,0,1,0.5312,1,2v4v3.5c0,0,0,0.5,0.5,0.5L2,10.0156V10.5&#xA;&#x9;c0,0,0,0.5,0.5,0.5H3c0,0,0.5,0,0.5-0.5v-0.4844L7.5,10v0.5c0,0,0,0.5,0.5,0.5h0.5C9,11,9,10.5,9,10.5v-0.4844L9.5,10&#xA;&#x9;c0,0,0.5,0,0.5-0.5V6V2c0-1.5-1-2-2-2H3z M3.75,1h3.5C7.3885,1,7.5,1.1115,7.5,1.25S7.3885,1.5,7.25,1.5h-3.5&#xA;&#x9;C3.6115,1.5,3.5,1.3885,3.5,1.25S3.6115,1,3.75,1z M3,2h5c1,0,1,1,1,1v2c0,0,0,1-1,1H3C2,6,2,5,2,5V3C2,3,2,2,3,2z M2.75,7.5&#xA;&#x9;c0.4142,0,0.75,0.3358,0.75,0.75C3.5,8.6642,3.1642,9,2.75,9S2,8.6642,2,8.25C2,7.8358,2.3358,7.5,2.75,7.5z M8.25,7.5&#xA;&#x9;C8.6642,7.5,9,7.8358,9,8.25C9,8.6642,8.6642,9,8.25,9C7.8358,9,7.5,8.6642,7.5,8.25C7.5,7.8358,7.8358,7.5,8.25,7.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"bus-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path8043\" d=\"M4,0C2.6364,0,1,0.7433,1,2.7461v5.4531V12c0,0,0,1,1,1v1c0,0,0,1,1,1s1-1,1-1v-1h7v1c0,0,0,1,1,1s1-1,1-1v-1&#xA;&#x9;c0,0,1,0,1-1V2.7461C14,0.7006,12.764,0,11.4004,0H4z M4.25,1.5h6.5C10.8885,1.5,11,1.6115,11,1.75S10.8885,2,10.75,2h-6.5&#xA;&#x9;C4.1115,2,4,1.8885,4,1.75S4.1115,1.5,4.25,1.5z M3,3h9c1,0,1,0.9668,1,0.9668V7c0,0,0,1-1,1H3C2,8,2,7,2,7V4C2,4,2,3,3,3z M3,10&#xA;&#x9;c0.5523,0,1,0.4477,1,1s-0.4477,1-1,1s-1-0.4477-1-1S2.4477,10,3,10z M12,10c0.5523,0,1,0.4477,1,1s-0.4477,1-1,1s-1-0.4477-1-1&#xA;&#x9;S11.4477,10,12,10z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"cafe-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M7,9.5C7,9.7761,6.7761,10,6.5,10h-4C2.2239,10,2,9.7761,2,9.5S2.2239,9,2.5,9h4C6.7761,9,7,9.2239,7,9.5z M8,3H7V2H2v4&#xA;&#x9;c0.0016,1.3807,1.1222,2.4987,2.5029,2.4971C5.4948,8.4959,6.3921,7.9085,6.79,7H8c1.1046,0,2-0.8954,2-2S9.1046,3,8,3z M8,6H7V4h1&#xA;&#x9;c0.5523,0,1,0.4477,1,1S8.5523,6,8,6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"cafe-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M12,5h-2V3H2v4c0.0133,2.2091,1.8149,3.9891,4.024,3.9758C7.4345,10.9673,8.7362,10.2166,9.45,9H12c1.1046,0,2-0.8954,2-2&#xA;&#x9;S13.1046,5,12,5z M12,8H9.86C9.9487,7.6739,9.9958,7.3379,10,7V6h2c0.5523,0,1,0.4477,1,1S12.5523,8,12,8z M10,12.5&#xA;&#x9;c0,0.2761-0.2239,0.5-0.5,0.5h-7C2.2239,13,2,12.7761,2,12.5S2.2239,12,2.5,12h7C9.7761,12,10,12.2239,10,12.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"campsite-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M5.92,2.19C5.7745,1.9553,5.4663,1.8829,5.2316,2.0284C5.166,2.0691,5.1107,2.1244,5.07,2.19L1.5,8h-1&#xA;&#x9;C0.2724,7.9555,0.0517,8.104,0.0072,8.3316C0.0034,8.3509,0.001,8.3704,0,8.39V9.5C-0.0056,9.7706,0.2092,9.9944,0.4798,10&#xA;&#x9;c0.0067,0.0001,0.0135,0.0001,0.0202,0h10c0.2706,0.0056,0.4944-0.2092,0.5-0.4798c0.0001-0.0067,0.0001-0.0135,0-0.0202V8.39&#xA;&#x9;c-0.0123-0.2316-0.21-0.4095-0.4416-0.3972C10.5388,7.9938,10.5193,7.9962,10.5,8h-1L5.92,2.19z M5.5,3l3,5h-6L5.5,3z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"campsite-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"rect3335\" d=\"M7,1.5&#xA;&#x9;l-5.5,9H1c-1,0-1,1-1,1v1c0,0,0,1,1,1h13c1,0,1-1,1-1v-1c0,0,0-1-1-1h-0.5L8,1.5C7.8,1.1,7.2,1.1,7,1.5z M7.5,5l3.2,5.5H4.2L7.5,5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"car-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9,4L8.11,1.34C8.0418,1.1381,7.8531,1.0016,7.64,1H3.36C3.1469,1.0016,2.9582,1.1381,2.89,1.34L2,4C1.4477,4,1,4.4477,1,5&#xA;&#x9;v3h1v1c0,0.5523,0.4477,1,1,1s1-0.4477,1-1V8h3v1c0,0.5523,0.4477,1,1,1s1-0.4477,1-1V8h1V5C10,4.4477,9.5523,4,9,4z M3,7&#xA;&#x9;C2.4477,7,2,6.5523,2,6s0.4477-1,1-1s1,0.4477,1,1S3.5523,7,3,7z M3,4l0.62-2h3.76L8,4H3z M8,7C7.4477,7,7,6.5523,7,6s0.4477-1,1-1&#xA;&#x9;s1,0.4477,1,1S8.5523,7,8,7z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"car-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M14,7c-0.004-0.6904-0.4787-1.2889-1.15-1.45l-1.39-3.24l0,0l0,0l0,0C11.3833,2.1233,11.2019,2.001,11,2H4&#xA;&#x9;C3.8124,2.0034,3.6425,2.1115,3.56,2.28l0,0l0,0l0,0L2.15,5.54C1.475,5.702,0.9994,6.3059,1,7v3.5h1v1c0,0.5523,0.4477,1,1,1&#xA;&#x9;s1-0.4477,1-1v-1h7v1c0,0.5523,0.4477,1,1,1s1-0.4477,1-1v-1h1V7z M4.3,3h6.4l1.05,2.5h-8.5L4.3,3z M3,9C2.4477,9,2,8.5523,2,8&#xA;&#x9;s0.4477-1,1-1s1,0.4477,1,1S3.5523,9,3,9z M12,9c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S12.5523,9,12,9z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"car-rental-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <g>\n    <path d=\"M9.0252,7H8.84L8.5615,5.3301C8.4824,4.8491,8.0713,4.5,7.583,4.5H3.417c-0.4883,0-0.8994,0.3491-0.9785,0.8291L2.1599,7&#xA;&#x9;&#x9;H1.981C1.4391,7,1,7.4391,1,7.9809V10h1c0,0.5522,0.4477,1,1,1s1-0.4478,1-1h3c0,0.5522,0.4477,1,1,1s1-0.4478,1-1h1V7.9748&#xA;&#x9;&#x9;C10,7.4364,9.5635,7,9.0252,7z M3.25,9C2.8358,9,2.5,8.6642,2.5,8.25c0-0.4142,0.3358-0.75,0.75-0.75S4,7.8358,4,8.25&#xA;&#x9;&#x9;C4,8.6642,3.6642,9,3.25,9z M3.1708,7L3.417,5.5l4.1582-0.0068L7.8264,7H3.1708z M7.75,9C7.3358,9,7,8.6642,7,8.25&#xA;&#x9;&#x9;C7,7.8358,7.3358,7.5,7.75,7.5S8.5,7.8358,8.5,8.25C8.5,8.6642,8.1642,9,7.75,9z\"/>\n    <path d=\"M9.4969,0H7.9973C7.4465,0,7,0.4465,7,0.9972V1H2.5l-1,1l1,1l1-1l1,1l1-1l1,1h0.5008C7.0031,3.5526,7.4509,4,8.004,4&#xA;&#x9;&#x9;h1.4938C9.7751,4,10,3.7751,10,3.4977V0.5031C10,0.2252,9.7748,0,9.4969,0z M9,2.5C9,2.7761,8.7761,3,8.5,3S8,2.7761,8,2.5v-1&#xA;&#x9;&#x9;C8,1.2238,8.2239,1,8.5,1S9,1.2238,9,1.5V2.5z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"car-rental-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <g>\n    <path d=\"M11.5039,1H10C9.2616,1,8.6238,1.4047,8.2774,2H3.5l-1,1l1,1l1-1l1,1l1-1l1,1h0.7774C8.6238,4.5953,9.2616,5,10,5h1.4982&#xA;&#x9;&#x9;C11.7753,5,12,4.7753,12,4.4982V1.4961C12,1.2221,11.7779,1,11.5039,1z M11,3.5C11,3.7761,10.7761,4,10.5,4S10,3.7761,10,3.5v-1&#xA;&#x9;&#x9;C10,2.2238,10.2239,2,10.5,2S11,2.2238,11,2.5V3.5z\"/>\n    <path d=\"M10.9252,9.0103l-0.3636-2.1802C10.4824,6.3491,10.0713,6,9.583,6H5.417C4.9302,6,4.5186,6.3486,4.4385,6.8291&#xA;&#x9;&#x9;L4.0746,9.0117C3.4776,9.0436,3,9.5277,3,10.1327V13h1c0,0.5522,0.4477,1,1,1s1-0.4478,1-1h3c0,0.5522,0.4477,1,1,1s1-0.4478,1-1h1&#xA;&#x9;&#x9;v-2.8744C12,9.522,11.5219,9.0383,10.9252,9.0103z M4.75,12C4.3358,12,4,11.6642,4,11.25c0-0.4142,0.3358-0.75,0.75-0.75&#xA;&#x9;&#x9;s0.75,0.3358,0.75,0.75C5.5,11.6642,5.1642,12,4.75,12z M5.0887,9L5.417,7l4.1582-0.0068L9.9098,9H5.0887z M10.25,12&#xA;&#x9;&#x9;c-0.4142,0-0.75-0.3358-0.75-0.75c0-0.4142,0.3358-0.75,0.75-0.75S11,10.8358,11,11.25C11,11.6642,10.6642,12,10.25,12z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"car-repair-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.5,1.25H4.3517C4.0547,0.5176,3.3389,0,2.5,0C1.7616,0,1.1238,0.4047,0.7774,1H2.5L3,2L2.5,3H0.7774&#xA;&#x9;C1.1238,3.5953,1.7616,4,2.5,4c0.8389,0,1.5547-0.5176,1.8517-1.25H9.5c0.4141,0,0.75-0.3359,0.75-0.75S9.9141,1.25,9.5,1.25z\"/>\n  <path d=\"M8.3105,7.0344l-0.249-1.2043C7.9824,5.3491,7.5713,5,7.083,5H3.917C3.4287,5,3.0176,5.3491,2.9424,5.8101L2.6891,7.0355&#xA;&#x9;C2.2987,7.1191,2,7.4498,2,7.8651V10h0.5c0,0.5522,0.4477,1,1,1s1-0.4478,1-1h2c0,0.5522,0.4477,1,1,1s1-0.4478,1-1H9V7.8597&#xA;&#x9;C9,7.4453,8.7008,7.1157,8.3105,7.0344z M3.75,9C3.3358,9,3,8.6642,3,8.25C3,7.8358,3.3358,7.5,3.75,7.5S4.5,7.8358,4.5,8.25&#xA;&#x9;C4.5,8.6642,4.1642,9,3.75,9z M3.7134,7L3.917,6l3.1621,0.0122L7.2831,7H3.7134z M7.25,9C6.8358,9,6.5,8.6642,6.5,8.25&#xA;&#x9;c0-0.4142,0.3358-0.75,0.75-0.75S8,7.8358,8,8.25C8,8.6642,7.6642,9,7.25,9z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"car-repair-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <g>\n    <path d=\"M10.9252,9.0103l-0.3636-2.1802C10.4824,6.3491,10.0713,6,9.583,6H5.417C4.9302,6,4.5186,6.3486,4.4385,6.8291&#xA;&#x9;&#x9;L4.0746,9.0117C3.4776,9.0436,3,9.5277,3,10.1327V13h1c0,0.5522,0.4477,1,1,1s1-0.4478,1-1h3c0,0.5522,0.4477,1,1,1s1-0.4478,1-1h1&#xA;&#x9;&#x9;v-2.8744C12,9.522,11.5219,9.0383,10.9252,9.0103z M4.75,12C4.3358,12,4,11.6642,4,11.25c0-0.4142,0.3358-0.75,0.75-0.75&#xA;&#x9;&#x9;s0.75,0.3358,0.75,0.75C5.5,11.6642,5.1642,12,4.75,12z M5.0887,9L5.417,7l4.1582-0.0068L9.9098,9H5.0887z M10.25,12&#xA;&#x9;&#x9;c-0.4142,0-0.75-0.3358-0.75-0.75c0-0.4142,0.3358-0.75,0.75-0.75S11,10.8358,11,11.25C11,11.6642,10.6642,12,10.25,12z\"/>\n    <path d=\"M12,2H5.7889C5.4029,1.1177,4.5247,0.5,3.5,0.5S1.5971,1.1177,1.2111,2H3.5L4,3L3.5,4H1.2111&#xA;&#x9;&#x9;C1.5972,4.8821,2.4754,5.5,3.5,5.5S5.4028,4.8821,5.7889,4H12c0.5527,0,1-0.4478,1-1S12.5527,2,12,2z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"car-top-es-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M8,5 L8,8.5 C8,9.26470196 7.23637967,10 6.5,10 L4.5,10 C3.76362033,10 3,9.26470196 3,8.5 L3,5 L2.33,5 C2.33,4.61764902 2.63181017,4.31 3,4.31 L3,3 C3,2 4,1 5,1 L6,1 C7,1 8,2 8,3 L8,4.31 C8.36818983,4.31 8.67,4.61764902 8.67,5 L8,5 Z M4,7 L3.75,7.75 C4.36111111,7.91666667 4.94444444,8 5.5,8 C6.05555556,8 6.63888889,7.91666667 7.25,7.75 L7,7 L5.5,7 L4,7 Z M3.75,4.25 L4,5 C4.55555556,4.83333333 5.05555556,4.75 5.5,4.75 C5.94444444,4.75 6.44444444,4.83333333 7,5 L7.25,4.25 C6.63888889,3.91666667 6.05555556,3.75 5.5,3.75 C4.94444444,3.75 4.36111111,3.91666667 3.75,4.25 Z M3.76193953,2.60929231 C3.86770819,2.70145623 4.09734355,2.5980894 4.27484444,2.37841601 C4.45234534,2.15874263 4.5104958,1.90594854 4.40472714,1.81378462 C4.29895847,1.72162069 4.06932312,1.82498753 3.89182222,2.04466091 C3.71432133,2.26433429 3.65617086,2.51712838 3.76193953,2.60929231 Z M7.24096539,2.60929231 C7.34673405,2.51712838 7.28858359,2.26433429 7.11108269,2.04466091 C6.9335818,1.82498753 6.70394644,1.72162069 6.59817778,1.81378462 C6.49240911,1.90594854 6.55055957,2.15874263 6.72806047,2.37841601 C6.90556137,2.5980894 7.13519672,2.70145623 7.24096539,2.60929231 Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"car-top-es-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M11,7 L11,12 C11,13.1045695 10.1045695,14 9,14 L6,14 C4.8954305,14 4,13.1045695 4,12 L4,7 L3,7 C3,6.44771525 3.44771525,6 4,6 L4,4 C4,2.34314575 5.34314575,1 7,1 L8,1 C9.65685425,1 11,2.34314575 11,4 L11,6 C11.5522847,6 12,6.44771525 12,7 L11,7 Z M5.5,10 L5,11 C5.83333333,11.3333333 6.66666667,11.5 7.5,11.5 C8.33333333,11.5 9.16666667,11.3333333 10,11 L9.5,10 L7.5,10 L5.5,10 Z M5,6 L5.5,7 C6.16666667,6.66666667 6.83333333,6.5 7.5,6.5 C8.16666667,6.5 8.83333333,6.66666667 9.5,7 L10,6 C9.16666667,5.33333333 8.33333333,5 7.5,5 C6.66666667,5 5.83333333,5.33333333 5,6 Z M4.89290929,3.32453333 C5.05156229,3.45765901 5.39601532,3.30835135 5.66226667,2.99104535 C5.92851801,2.67373936 6.01574371,2.30859234 5.85709071,2.17546667 C5.69843771,2.04234099 5.35398468,2.19164865 5.08773333,2.50895465 C4.82148199,2.82626064 4.73425629,3.19140766 4.89290929,3.32453333 Z M10.1114481,3.32453333 C10.2701011,3.19140766 10.1828754,2.82626064 9.91662404,2.50895465 C9.65037269,2.19164865 9.30591967,2.04234099 9.14726667,2.17546667 C8.98861367,2.30859234 9.07583936,2.67373936 9.34209071,2.99104535 C9.60834205,3.30835135 9.95279508,3.45765901 10.1114481,3.32453333 Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"casino-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M6.1364,6.85C6.4266,7.2446,6.8886,7.5,7.4091,7.5C8.2877,7.5,9,6.7725,9,5.875c0-0.3667-0.1234-0.7014-0.324-0.9733&#xA;&#x9;L8.6818,4.9L5.5,1L2.3182,4.9L2.324,4.9017C2.1234,5.1736,2,5.5083,2,5.875C2,6.7725,2.7123,7.5,3.5909,7.5&#xA;&#x9;c0.5205,0,0.9825-0.2554,1.2728-0.65C4.918,6.776,5.0147,6.6443,5.125,6.4942V8.5c0,0.5-1.75,0.75-1.75,0.75&#xA;&#x9;C3.1679,9.25,3,9.4179,3,9.625S3.1679,10,3.375,10h1.75h0.75h1.75C7.8321,10,8,9.8321,8,9.625S7.8321,9.25,7.625,9.25&#xA;&#x9;c0,0-1.75-0.25-1.75-0.75V6.4942C5.9853,6.6443,6.082,6.776,6.1364,6.85z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"casino-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M8.5,10c0.4561,0.6072,1.1821,1,2,1c1.3807,0,2.5-1.1193,2.5-2.5c0-0.5642-0.1938-1.0789-0.509-1.4973L12.5,7l-5-6l-5,6&#xA;&#x9;l0.009,0.0027C2.1938,7.4211,2,7.9358,2,8.5C2,9.8807,3.1193,11,4.5,11c0.8179,0,1.5439-0.3928,2-1&#xA;&#x9;C6.5997,9.8672,6.7902,9.6135,7,9.3337V11.5C7,13,4.5,13,4.5,13C4.2239,13,4,13.2238,4,13.5C4,13.7761,4.2239,14,4.5,14H7h1h2.5&#xA;&#x9;c0.2761,0,0.5-0.2239,0.5-0.5c0-0.2762-0.2239-0.5-0.5-0.5c0,0-2.5,0-2.5-1.5V9.3337C8.2098,9.6135,8.4003,9.8672,8.5,10z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"castle-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M8.67,0.81v1.48C8.6812,2.6709,8.3815,2.9888,8.0006,3C8.0004,3,8.0002,3,8,3H3.09c-0.381,0.0056-0.6944-0.2988-0.7-0.6799&#xA;&#x9;C2.3899,2.3134,2.3899,2.3067,2.39,2.3V0.81c0-0.1905,0.1545-0.345,0.345-0.345S3.08,0.6195,3.08,0.81V1.5H4V1l0,0&#xA;&#x9;c0-0.2761,0.2239-0.5,0.5-0.5S5,0.7239,5,1l0,0v0.5h1V1l0,0c0-0.2761,0.2239-0.5,0.5-0.5S7,0.7239,7,1l0,0v0.5h1V0.81&#xA;&#x9;C7.9679,0.625,8.0919,0.449,8.2769,0.4169c0.185-0.0321,0.361,0.0919,0.3931,0.2769C8.6767,0.7323,8.6767,0.7716,8.67,0.81z&#xA;&#x9; M10.06,9.63c0,0.1933-0.1567,0.35-0.35,0.35h0H1.35C1.1567,9.9799,1.0001,9.8231,1.0002,9.6298&#xA;&#x9;C1.0004,9.4366,1.1569,9.2801,1.35,9.28H1.7c0.3754,0.0112,0.6888-0.284,0.7-0.6594c0.0004-0.0135,0.0004-0.0271,0-0.0406&#xA;&#x9;c0,0,0.7-3.2,0.7-3.89C3.0944,4.3145,3.3943,4.0056,3.7699,4C3.7766,3.9999,3.7833,3.9999,3.79,4h3.48&#xA;&#x9;c0.3754-0.0112,0.6888,0.284,0.7,0.6594c0.0004,0.0135,0.0004,0.0271,0,0.0406c0,0.7,0.7,3.89,0.7,3.89&#xA;&#x9;c-0.0112,0.3754,0.284,0.6888,0.6594,0.7c0.0135,0.0004,0.0271,0.0004,0.0406,0h0.34c0.1933,0,0.35,0.1567,0.35,0.35v0V9.63z&#xA;&#x9; M6.5,7.5c0-0.5523-0.4477-1-1-1s-1,0.4477-1,1v2h2V7.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"castle-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M11,4H4C3.4477,4,3,3.5523,3,3V0.5C3,0.2239,3.2239,0,3.5,0S4,0.2239,4,0.5V2h1V1c0-0.5523,0.4477-1,1-1s1,0.4477,1,1v1h1V1&#xA;&#x9;c0-0.5523,0.4477-1,1-1s1,0.4477,1,1v1h1V0.5C11,0.2239,11.2239,0,11.5,0S12,0.2239,12,0.5V3C12,3.5523,11.5523,4,11,4z M14,14.5&#xA;&#x9;c0,0.2761-0.2239,0.5-0.5,0.5h-12C1.2239,15,1,14.7761,1,14.5S1.2239,14,1.5,14H2c0.5523,0,1-0.4477,1-1c0,0,1-6,1-7&#xA;&#x9;c0-0.5523,0.4477-1,1-1h5c0.5523,0,1,0.4477,1,1c0,1,1,7,1,7c0,0.5523,0.4477,1,1,1h0.5c0.2723-0.0001,0.4946,0.2178,0.5,0.49V14.5z&#xA;&#x9; M9,10.5C9,9.6716,8.3284,9,7.5,9S6,9.6716,6,10.5V14h3V10.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"cemetery-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M8.65,8H8l0,0l1-5.61c0.0167-0.1981-0.1304-0.3722-0.3286-0.3889C8.6577,1.9999,8.6438,1.9996,8.63,2H7.16&#xA;&#x9;c0-0.65-0.7-1-1.67-1S3.66,1.35,3.66,2H2.35C2.1512,2.0048,1.994,2.1699,1.9988,2.3686C1.999,2.3758,1.9994,2.3829,2,2.39L3,8l0,0&#xA;&#x9;H2.35C2.1567,7.9999,1.9999,8.1566,1.9999,8.3499c0,0.0034,0,0.0068,0.0001,0.0101V10h7V8.36&#xA;&#x9;c0.0055-0.1932-0.1466-0.3543-0.3399-0.3599C8.6568,8,8.6534,8,8.65,8z M7,5H4V4h3V5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"cemetery-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M11.46,12h-0.68L12,3.55c0.0175-0.2867-0.2008-0.5332-0.4874-0.5507C11.4884,2.9979,11.4641,2.9981,11.44,3h-1.18&#xA;&#x9;c0-0.92-1.23-2-2.75-2S4.77,2.08,4.77,3H3.54C3.253,2.9885,3.0111,3.2117,2.9995,3.4987C2.9988,3.5158,2.999,3.5329,3,3.55L4.2,12&#xA;&#x9;H3.55C3.2609,11.9886,3.0162,12.2112,3,12.5V14h9v-1.51C11.9839,12.2067,11.7435,11.9886,11.46,12z M4.5,5h6v1h-6V5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"charging-station-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.5,3H9V1.5C9,1.2239,8.7761,1,8.5,1S8,1.2239,8,1.5V3c0,0.5523,0.4477,1,1,1v4.25C9,8.3881,8.8881,8.5,8.75,8.5&#xA;&#x9;S8.5,8.3881,8.5,8.25V6.5C8.5,5.6716,7.8284,5,7,5V2c0-0.5523-0.4477-1-1-1H2C1.4477,1,1,1.4477,1,2v7c0,0.5523,0.4477,1,1,1h4&#xA;&#x9;c0.5523,0,1-0.4477,1-1V6c0.2761,0,0.5,0.2239,0.5,0.5v1.75c0,0.6904,0.5596,1.25,1.25,1.25S10,8.9404,10,8.25V3.5&#xA;&#x9;C10,3.2239,9.7761,3,9.5,3z M3.5,8.75H3L4,6H1.75L4.5,2.25H5L4,5h2.25L3.5,8.75z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"charging-station-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M13,4V2.49C12.9946,2.2178,12.7723,1.9999,12.5,2c-0.2816,0.0047-0.5062,0.2367-0.5015,0.5184&#xA;&#x9;C11.9987,2.5289,11.9992,2.5395,12,2.55V5c0,0.5523,0.4477,1,1,1v5.5c0,0.2761-0.2239,0.5-0.5,0.5S12,11.7761,12,11.5v-2&#xA;&#x9;C12,8.6716,11.3284,8,10.5,8H9V2c0-0.5523-0.4477-1-1-1H2C1.4477,1,1,1.4477,1,2v11c0,0.5523,0.4477,1,1,1h6c0.5523,0,1-0.4477,1-1&#xA;&#x9;V9h1.5C10.7761,9,11,9.2239,11,9.5v2c0,0.8284,0.6716,1.5,1.5,1.5c0.8284,0,1.5-0.6716,1.5-1.5V5C14,4.4477,13.5523,4,13,4z&#xA;&#x9; M7.2004,7.3995l-2.6006,3.4674l-0.0164-0.0072C4.5369,10.9384,4.4667,11,4.3688,11c-0.1476,0-0.2672-0.1196-0.2672-0.2672&#xA;&#x9;c0-0.028,0.0217-0.0463,0.0297-0.0717l-0.0177-0.0078l0.7766-2.3245C4.9442,8.1671,4.8238,8,4.6533,8H2.9994&#xA;&#x9;C2.7936,8,2.6762,7.7651,2.7996,7.6005l2.6006-3.4674l0.0164,0.0072C5.4631,4.0616,5.5333,4,5.6312,4&#xA;&#x9;c0.1476,0,0.2672,0.1196,0.2672,0.2672c0,0.028-0.0217,0.0463-0.0297,0.0717l0.0176,0.0078L5.1099,6.6711&#xA;&#x9;C5.0558,6.8329,5.1762,7,5.3467,7h1.6539C7.2064,7,7.3238,7.2349,7.2004,7.3995z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"cinema-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M10,5.5v2C10,7.7761,9.7761,8,9.5,8S9,7.7761,9,7.5l0,0C8.9427,7.2478,8.7433,7.0523,8.49,7H8v1.63&#xA;&#x9;C8,8.8343,7.8343,9,7.63,9H1.37C1.1657,9,1,8.8343,1,8.63V5.37C1,5.1657,1.1657,5,1.37,5h6.26C7.8343,5,8,5.1657,8,5.37V6h0.49&#xA;&#x9;C8.7433,5.9477,8.9427,5.7522,9,5.5C9,5.2239,9.2239,5,9.5,5S10,5.2239,10,5.5z M2.5,2C1.6716,2,1,2.6716,1,3.5S1.6716,5,2.5,5&#xA;&#x9;S4,4.3284,4,3.5S3.3284,2,2.5,2z M2.5,4C2.2239,4,2,3.7761,2,3.5S2.2239,3,2.5,3S3,3.2239,3,3.5S2.7761,4,2.5,4z M6,1&#xA;&#x9;C4.8954,1,4,1.8954,4,3s0.8954,2,2,2s2-0.8954,2-2S7.1046,1,6,1z M6,4C5.4477,4,5,3.5523,5,3s0.4477-1,1-1s1,0.4477,1,1&#xA;&#x9;S6.5523,4,6,4z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"cinema-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M14,7.5v2c0,0.2761-0.2239,0.5-0.5,0.5S13,9.7761,13,9.5c0,0,0.06-0.5-1-0.5h-1v2.5c0,0.2761-0.2239,0.5-0.5,0.5h-8&#xA;&#x9;C2.2239,12,2,11.7761,2,11.5v-4C2,7.2239,2.2239,7,2.5,7h8C10.7761,7,11,7.2239,11,7.5V8h1c1.06,0,1-0.5,1-0.5&#xA;&#x9;C13,7.2239,13.2239,7,13.5,7S14,7.2239,14,7.5z M4,3C2.8954,3,2,3.8954,2,5s0.8954,2,2,2s2-0.8954,2-2S5.1046,3,4,3z M4,6&#xA;&#x9;C3.4477,6,3,5.5523,3,5s0.4477-1,1-1s1,0.4477,1,1S4.5523,6,4,6z M8.5,2C7.1193,2,6,3.1193,6,4.5S7.1193,7,8.5,7S11,5.8807,11,4.5&#xA;&#x9;S9.8807,2,8.5,2z M8.5,6C7.6716,6,7,5.3284,7,4.5S7.6716,3,8.5,3S10,3.6716,10,4.5S9.3284,6,8.5,6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"circle-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M10,5.5C10,7.9853,7.9853,10,5.5,10S1,7.9853,1,5.5S3.0147,1,5.5,1S10,3.0147,10,5.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"circle-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M14,7.5c0,3.5899-2.9101,6.5-6.5,6.5S1,11.0899,1,7.5S3.9101,1,7.5,1S14,3.9101,14,7.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"circle-stroked-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path8564-5-6-2\" d=\"M5.5,0C8.5376,0,11,2.4624,11,5.5S8.5376,11,5.5,11S0,8.5376,0,5.5&#xA;&#x9;S2.4624,0,5.5,0z M5.5,1.2222c-2.3626,0-4.2778,1.9152-4.2778,4.2778S3.1374,9.7778,5.5,9.7778S9.7778,7.8626,9.7778,5.5&#xA;&#x9;S7.8626,1.2222,5.5,1.2222z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"circle-stroked-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path8564-5-6-4\" d=\"M7.5,0C11.6422,0,15,3.3578,15,7.5S11.6422,15,7.5,15&#xA;&#x9;S0,11.6422,0,7.5S3.3578,0,7.5,0z M7.5,1.6666c-3.2217,0-5.8333,2.6117-5.8333,5.8334S4.2783,13.3334,7.5,13.3334&#xA;&#x9;s5.8333-2.6117,5.8333-5.8334S10.7217,1.6666,7.5,1.6666z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\" id=\"city-11\">\n  <path d=\"M9.7514,3h-0.75V1.25c0-0.13807-0.11193-0.25-0.25-0.25C8.75137,1,8.75133,1,8.7513,1h-0.5&#xA;&#x9;c-0.13807,0-0.25,0.11193-0.25,0.25V3h-0.75c-0.13807,0-0.25,0.11193-0.25,0.25v3.751H5.2518c-0.13862,0-0.251,0.11238-0.251,0.251&#xA;&#x9;v2.5c0.0011,0.13784,0.11315,0.249,0.251,0.249h4.5006c0.13768-0.00055,0.249-0.11232,0.249-0.25V3.25&#xA;&#x9;C10.0014,3.11193,9.88947,3,9.7514,3z M6.0009,8.0012h1v1h-1V8.0012z M9.0009,9.0012h-1v-1h1V9.0012z M9.0009,7.0012h-1v-1h1V7.0012&#xA;&#x9;z M9.0009,5.0012h-1v-1h1V5.0012z M6.0009,1.2507C6.00129,1.11263,5.88967,1.00039,5.7516,1C5.75133,1,5.75107,1,5.7508,1H3.25&#xA;&#x9;C3.11193,1,3,1.11193,3,1.25V2H2.25C2.11193,2,2,2.11193,2,2.25V3H1.25C1.11193,3,1,3.11193,1,3.25v6.5014&#xA;&#x9;c0,0.13807,0.11193,0.25,0.25,0.25H4V6.0009h2V1.25L6.0009,1.2507z M3,9.0013H2v-1h1V9.0013z M3,7.0013H2v-1h1V7.0013z M3,5.0013H2&#xA;&#x9;v-1h1V5.0013z M5,5.0013H4v-1h1V5.0013z M5,3.0013H4V2h1v1V3.0013z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\" id=\"city-15\">\n  <path d=\"M13.6368,3.9994h-1.6387V1.3608C11.99804,1.16148,11.83642,0.99994,11.6371,1l0,0h-0.278&#xA;&#x9;c-0.19932,0-0.3609,0.16158-0.3609,0.3609l0,0v2.6385H9.36c-0.19932,0-0.3609,0.16158-0.3609,0.3609l0,0l0,0v5.6381h-3.637&#xA;&#x9;c-0.20042,0-0.3629,0.16248-0.3629,0.3629v3.2745c0.00055,0.20003,0.16287,0.3619,0.3629,0.3619h8.2747&#xA;&#x9;c0.19932,0,0.3609-0.16158,0.3609-0.3609l0,0V4.36c0-0.19932-0.16158-0.3609-0.3609-0.3609l0,0L13.6368,3.9994z M6.9989,11.9981h-1&#xA;&#x9;v-1h1V11.9981z M8.9989,11.9981h-1v-1h1V11.9981z M10.9989,11.9981h-1v-1h1V11.9981z M10.9989,9.9981h-1v-1h1V9.9981z&#xA;&#x9; M10.9989,7.9981h-1v-1h1V7.9981z M10.9989,5.9981h-1v-1h1V5.9981z M12.9989,11.9971h-1v-1h1V11.9971z M12.9989,9.9971h-1v-1h1&#xA;&#x9;V9.9971z M12.9989,7.9971h-1v-1h1V7.9971z M12.9989,5.9971h-1v-1h1V5.9971z M7.9987,1.3608C7.99864,1.16152,7.83708,1,7.6378,1H5.36&#xA;&#x9;C5.16068,1,4.9991,1.16158,4.9991,1.3609l0,0V3H3.36C3.16138,3.00049,3.00049,3.16138,3,3.36l0,0v0.6394H1.3608&#xA;&#x9;C1.16164,3.99945,1.00017,4.16084,1,4.36l0,0v9.2765c0,0.19932,0.16158,0.3609,0.3609,0.3609h2.6385V8.9986h3.9993V1.3608z&#xA;&#x9; M3,11.9981H2v-1h1V11.9981z M3,9.9981H2v-1h1V9.9981z M3,7.9981H2v-1h1V7.9981z M3,5.9981H2v-1h1V5.9981z M5,7.9981H4v-1h1V7.9981z&#xA;&#x9; M5,5.9981H4v-1h1V5.9981z M7,7.9981H6v-1h1V7.9981z M7,5.9981H6v-1h1V5.9981z M7,3.9981H6V3h1v1V3.9981z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"clothing-store-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"rect4181-0-0\" d=\"&#xA;&#x9;M2.5,1l-2,2v2h2v5h6V5h2V3l-2-2H7L5.5,4L4,1H2.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"clothing-store-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"rect4181-0-0\" d=\"&#xA;&#x9;M3.5,1L0,4v3h2.9L3,14h9V7h3V4l-3.5-3H10L7.5,5L5,1H3.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"college-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <g>\n    <path d=\"M2,7.3c0.3-0.2,0.5-0.5,0.5-0.8c0-0.4-0.2-0.7-0.6-0.9V4.4L5.5,6L11,3.5L5.5,1L0,3.5L1.2,4v1.6&#xA;  C0.8,5.8,0.6,6.1,0.6,6.5c0,0.3,0.2,0.6,0.5,0.8L0.6,9c-0.3,1,0.5,1,0.5,1h1c0,0,0.8,0,0.5-1L2,7.3z\"/>\n    <path d=\"M3.5,6.2c0,0.1,0,0.2,0,0.3c0,0.4-0.2,0.8-0.4,1.1C3.3,8,3.5,8.4,3.5,9v0.6C4,9.8,4.7,10,5.5,10&#xA;  C8,10,9,8.5,9,8.5v-3L5.5,7.1L3.5,6.2z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"college-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M7.5,1L0,4.5l2,0.9v1.7C1.4,7.3,1,7.9,1,8.5s0.4,1.2,1,1.4V10l-0.9,2.1&#xA; C0.8,13,1,14,2.5,14s1.7-1,1.4-1.9L3,10c0.6-0.3,1-0.8,1-1.5S3.6,7.3,3,7.1V5.9L7.5,8L15,4.5L7.5,1z M11.9,7.5l-4.5,2L5,8.4v0.1&#xA; c0,0.7-0.3,1.3-0.8,1.8l0.6,1.4v0.1C4.9,12.2,5,12.6,4.9,13c0.7,0.3,1.5,0.5,2.5,0.5c3.3,0,4.5-2,4.5-3L11.9,7.5L11.9,7.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"commercial-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M0,5c-0.0224-1.0854,0.3309-2.1451,1-3h9c0.6691,0.8549,1.0224,1.9146,1,3H0z M2,6v5h4V7h2v4h1V6H2z M5,9H3V7h2V9z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"commercial-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M14,7H1c0.0881-1.3829,0.427-2.7383,1-4h11C13.5731,4.2617,13.9119,5.6171,14,7z M3,8h9v6h-1V9H8v5H3V8z M4,11h3V9H4V11z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"communications-tower-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <g id=\"communications-tower-11\">\n    <path d=\"M7.6553,3.5645h-.4V1.4482h.4ZM3.7017,1.4482h-.4V3.5645h.4Zm6-.2851h-.4V4.4414h.4Zm-8.023,0h-.4V4.4414h.4ZM5.7572,4.1683l.4366,0h0a.3541.3541,0,0,1,.3457.2812L7.5792,9.4366H9V10H2V9.4366H3.434L4.4731,4.45a.3548.3548,0,0,1,.3453-.2813l.4388,0V2.912h0A.9155.9155,0,0,1,4.59,2.0373a.9272.9272,0,1,1,1.167.8874Zm-.96,2.1881H6.2159L5.9072,4.875H5.106ZM4.383,8.3447H6.63L6.2786,6.6572H4.7346ZM6.8577,9.4366l-.1648-.7911H4.32l-.1648.7911Z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"communications-tower-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <g id=\"communications-tower-15\">\n    <path d=\"M11.8545,6.4336l-.4131-.2813a4.7623,4.7623,0,0,0,.2813-4.8779l-.0835-.1533L12.0747.875l.0908.167a5.2619,5.2619,0,0,1-.311,5.3916Zm1.1521,7.1316V14h-11v-.4348H4.4952L6.0439,6.4a.5.5,0,0,1,.4888-.3945h.7255V4.6014A1.14,1.14,0,0,1,6.3756,3.5a1.1568,1.1568,0,1,1,2.3136,0,1.14,1.14,0,0,1-.931,1.1112V6.0059h.7223A.5.5,0,0,1,8.9692,6.4l1.5478,7.1648ZM8.4543,8.751H6.5588L6.236,10.2441H8.777ZM6.1279,10.7441l-.3233,1.4952H9.2082l-.3231-1.4952ZM6.936,7.0059,6.6669,8.251H8.3463L8.0771,7.0059ZM5.5179,13.5652H9.4948l-.1786-.8259h-3.62ZM5.21,5.0137a2.7523,2.7523,0,0,1,.0161-3.0518L4.812,1.6826a3.25,3.25,0,0,0-.019,3.6065ZM10.7568,3.5a3.2433,3.2433,0,0,0-.5341-1.7861l-.418.2754a2.7517,2.7517,0,0,1-.0176,3.0488l.4141.2793A3.2341,3.2341,0,0,0,10.7568,3.5ZM3.5342,6.1182A4.7637,4.7637,0,0,1,3.3813,1.13L2.9478.88a5.2643,5.2643,0,0,0,.1694,5.5137Z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"confectionery-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <g id=\"confectionary-11\">\n    <path d=\"M9.2407,2.513a.7461.7461,0,0,0-.7461-.7461.7461.7461,0,1,0-1.4922,0V3.5132A2.4888,2.4888,0,0,0,3.5113,7H1.7485a.7461.7461,0,0,0,0,1.4922.7461.7461,0,0,0,.7461.7461.7461.7461,0,0,0,1.4922,0V7.4778A2.4887,2.4887,0,0,0,7.493,4.0052H9.2407a.7461.7461,0,0,0,0-1.4922ZM5.5,7.2842a1.7824,1.7824,0,0,1-.72-3.4135.8158.8158,0,0,1,.2438.1772A1.6481,1.6481,0,0,1,5.3252,5.124v.7373a1.9718,1.9718,0,0,0,.3877,1.3213,1.1554,1.1554,0,0,0,.0958.07A1.7759,1.7759,0,0,1,5.5,7.2842Zm.72-.1549a.8158.8158,0,0,1-.2438-.1772A1.6481,1.6481,0,0,1,5.6748,5.876V5.1387a1.9718,1.9718,0,0,0-.3877-1.3213,1.1554,1.1554,0,0,0-.0958-.07A1.78,1.78,0,0,1,6.22,7.1293Z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"confectionery-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <g id=\"confectionary-15\">\n    <path d=\"M13,4a1,1,0,0,0-1-1,1,1,0,0,0-2,0V5.0673A3.4808,3.4808,0,0,0,4.3583,9H2a1,1,0,0,0,0,2,1,1,0,0,0,1,1,1,1,0,0,0,2,0V9.9326A3.4807,3.4807,0,0,0,10.6417,6H13a1,1,0,0,0,0-2ZM7.5,9.9925A2.484,2.484,0,0,1,6.3184,5.319a1.0809,1.0809,0,0,1,.5459.307A2.1243,2.1243,0,0,1,7.25,7.0117l.001.9561A2.5821,2.5821,0,0,0,7.76,9.7031a1.5462,1.5462,0,0,0,.2591.2333A2.4861,2.4861,0,0,1,7.5,9.9925ZM8.6815,9.681a1.0813,1.0813,0,0,1-.5458-.307A2.1243,2.1243,0,0,1,7.75,7.9883l-.001-.9561A2.5821,2.5821,0,0,0,7.24,5.2969a1.5557,1.5557,0,0,0-.2592-.2334A2.4843,2.4843,0,0,1,8.6815,9.681Z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"convenience-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <g id=\"convenience-store-11\">\n    <path d=\"M8.8211,4.2685h-.62c-.1554-.6-.28-1.0651-.2826-1.0734l-.0111-.05c0-.0011-.12-.5479-.41-.5479H3.519c-.2889,0-.4091.5468-.41.5523-.008.0333-.136.5119-.293,1.1185h-.62c.1756-.6809.3228-1.2291.3228-1.2291s.1875-1.0417,1-1.0417h.4963a.4932.4932,0,0,1,.4829-.4153h2a.4932.4932,0,0,1,.4829.4153h.5171c.8125,0,1,1.0417,1,1.0417S8.6454,3.5876,8.8211,4.2685ZM2.9189,9.9954a.4945.4945,0,0,1-.4828-.368c-.23-.8736-.8-3.0538-.9379-3.63a.5.5,0,1,1,0-1h8a.5.5,0,0,1,0,1c-.1375.5763-.7156,2.7587-.9487,3.6313a.4948.4948,0,0,1-.4825.3665Zm1.094-3.2968a.5129.5129,0,0,0-1.0235,0V8.51a.5129.5129,0,0,0,1.0235,0Zm1.9971,0a.5129.5129,0,0,0-1.0235,0V8.51a.5129.5129,0,0,0,1.0235,0Zm2.0058,0a.5129.5129,0,0,0-1.0236,0V8.51a.5129.5129,0,0,0,1.0236,0Z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"convenience-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <g id=\"convenience-store-15\">\n    <path d=\"M2.9982,3.0687s.1875-1.062,1-1.062H5.0043V1.7276a.5.5,0,0,1,.5-.5H9.4882a.5.5,0,0,1,.5.5v.2791h1.01a.8324.8324,0,0,1,.6373.2937,1.7589,1.7589,0,0,1,.3627.7683s.3108,1.5719.5921,2.9181h-.938L11,3,3.982,2.9956,3.3336,5.9868H2.382Zm11,4.9144a1,1,0,0,1-.9992,1l-1.0008,3.973s-.1875,1.0417-1,1.0417h-7c-.8125,0-1-1.0417-1-1.0417L1.9822,8.98a.9985.9985,0,0,1,.016-1.9968h11A1,1,0,0,1,13.9982,7.9831ZM5.0327,12.13,5.03,11.0051,4.6392,9.4686a.5373.5373,0,1,0-1.0649.1445L3.78,11.0075l.1874,1.2672A.5373.5373,0,1,0,5.0327,12.13Zm2-2.5967A.5332.5332,0,0,0,6.4994,9l-.0039.0008L6.4886,9a.4992.4992,0,0,0-.3575.1509.529.529,0,0,0-.1648.3828v2.68a.5332.5332,0,1,0,1.0663,0Zm1.998,0A.5314.5314,0,0,0,8.694,9.04a.4992.4992,0,0,0-.393,0,.5312.5312,0,0,0-.3366.4934v2.68a.5331.5331,0,1,0,1.0662,0Zm2.3857.08a.5373.5373,0,1,0-1.0649-.1445L9.96,10.9938,9.9579,12.13a.5373.5373,0,1,0,1.0649.1446Z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"cricket-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M6,1c0,0.5523-0.4477,1-1,1S4,1.5523,4,1s0.4477-1,1-1S6,0.4477,6,1z M8.88,5.18l-1-2l0,0l0,0&#xA;&#x9;C7.7859,3.0671,7.647,3.0012,7.5,3H2.77C2.3827,2.9815,2.0467,3.2651,2,3.65l0,0l-1,6.71l0,0c-0.0068,0.0464-0.0068,0.0936,0,0.14&#xA;&#x9;C1,10.7761,1.2239,11,1.5,11c0.2307,0.0129,0.4391-0.1371,0.5-0.36l0,0l1.22-3.89l0,0l0.21-0.83l0.4,0.44l0,0L5,7.6v2.9&#xA;&#x9;C5,10.7761,5.2239,11,5.5,11S6,10.7761,6,10.5v-3l0,0l0,0C5.9971,7.3984,5.9621,7.3004,5.9,7.22l0,0L4.45,5.5L5.5,4h1.71l0.92,1.84&#xA;&#x9;l0,0C8.2247,5.9439,8.3594,6.0022,8.5,6C8.7723,6.0001,8.9946,5.7822,9,5.51C8.9826,5.3931,8.9418,5.2808,8.88,5.18z M10.5,8&#xA;&#x9;C10.2239,8,10,8.2239,10,8.5S10.2239,9,10.5,9S11,8.7761,11,8.5S10.7761,8,10.5,8z M8.69,8V7.25C8.69,7.1119,8.5781,7,8.44,7&#xA;&#x9;S8.19,7.1119,8.19,7.25V8C8.0378,8.0855,7.9426,8.2455,7.94,8.42v2.08c0,0.2761,0.2239,0.5,0.5,0.5s0.5-0.2239,0.5-0.5V8.41&#xA;&#x9;C8.9339,8.2391,8.8392,8.0837,8.69,8z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"cricket-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M8,1.5C8,2.3284,7.3284,3,6.5,3S5,2.3284,5,1.5S5.6716,0,6.5,0S8,0.6716,8,1.5z M10.88,7.18L10.88,7.18l-2-2l0,0l0,0&#xA;&#x9;C8.7815,5.0616,8.6339,4.9952,8.48,5H3.75C3.3736,4.9915,3.0508,5.2669,3,5.64l0,0l-1,7.7l0,0c-0.0068,0.0464-0.0068,0.0936,0,0.14&#xA;&#x9;c0,0.2761,0.2239,0.5,0.5,0.5c0.2251,0.0153,0.4315-0.1251,0.5-0.34l0,0l1.2-3.89l0,0l0.26-0.83l0.4,0.44l0,0L6,10.6v2.9&#xA;&#x9;C6,13.7761,6.2239,14,6.5,14S7,13.7761,7,13.5v-3l0,0l0,0c-0.0081-0.0788-0.0356-0.1544-0.08-0.22l0,0L5.48,8.5l1-2.5h1.71l2,1.84&#xA;&#x9;l0,0c0.0928,0.1077,0.2278,0.1697,0.37,0.17C10.8163,7.9791,11.007,7.7581,11,7.5C10.9997,7.3824,10.9571,7.2688,10.88,7.18z&#xA;&#x9; M14,11.27c-0.4142,0-0.75,0.3358-0.75,0.75s0.3358,0.75,0.75,0.75s0.75-0.3358,0.75-0.75S14.4142,11.27,14,11.27z M10.76,9.74V9&#xA;&#x9;c0-0.1381-0.1119-0.25-0.25-0.25S10.26,8.8619,10.26,9v0.74c-0.1522,0.0855-0.2474,0.2455-0.25,0.42v3.34&#xA;&#x9;c0,0.2761,0.2239,0.5,0.5,0.5s0.5-0.2239,0.5-0.5v-3.34C11.0074,9.9855,10.9122,9.8255,10.76,9.74z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"cross-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M2.2,1.19l3.3,3.3L8.8,1.2C8.9314,1.0663,9.1127,0.9938,9.3,1C9.6761,1.0243,9.9757,1.3239,10,1.7&#xA;&#x9;c0.0018,0.1806-0.0705,0.3541-0.2,0.48L6.49,5.5L9.8,8.82C9.9295,8.9459,10.0018,9.1194,10,9.3C9.9757,9.6761,9.6761,9.9757,9.3,10&#xA;&#x9;c-0.1873,0.0062-0.3686-0.0663-0.5-0.2L5.5,6.51L2.21,9.8c-0.1314,0.1337-0.3127,0.2062-0.5,0.2C1.3265,9.98,1.02,9.6735,1,9.29&#xA;&#x9;C0.9982,9.1094,1.0705,8.9359,1.2,8.81L4.51,5.5L1.19,2.18C1.0641,2.0524,0.9955,1.8792,1,1.7C1.0243,1.3239,1.3239,1.0243,1.7,1&#xA;&#x9;C1.8858,0.9912,2.0669,1.06,2.2,1.19z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"cross-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M2.64,1.27L7.5,6.13l4.84-4.84C12.5114,1.1076,12.7497,1.0029,13,1c0.5523,0,1,0.4477,1,1&#xA;&#x9;c0.0047,0.2478-0.093,0.4866-0.27,0.66L8.84,7.5l4.89,4.89c0.1648,0.1612,0.2615,0.3796,0.27,0.61c0,0.5523-0.4477,1-1,1&#xA;&#x9;c-0.2577,0.0107-0.508-0.0873-0.69-0.27L7.5,8.87l-4.85,4.85C2.4793,13.8963,2.2453,13.9971,2,14c-0.5523,0-1-0.4477-1-1&#xA;&#x9;c-0.0047-0.2478,0.093-0.4866,0.27-0.66L6.16,7.5L1.27,2.61C1.1052,2.4488,1.0085,2.2304,1,2c0-0.5523,0.4477-1,1-1&#xA;&#x9;C2.2404,1.0029,2.4701,1.0998,2.64,1.27z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"dam-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M10,7.51c0,0.2761-0.2239,0.5-0.5,0.5l0,0C9.241,8.0319,9.0006,8.1539,8.83,8.35c-0.2714,0.2887-0.6175,0.4964-1,0.6&#xA;&#x9;C7.2185,9.1316,6.5566,8.9924,6.07,8.58L5.73,8.23c-0.2997-0.2948-0.7803-0.2948-1.08,0L5,9.38&#xA;&#x9;c0.0664,0.268-0.0971,0.5392-0.3651,0.6055C4.5908,9.9965,4.5454,10.0013,4.5,10h-3C1.2239,10,1,9.7761,1,9.5v-8&#xA;&#x9;C0.9999,1.2277,1.2178,1.0054,1.49,1h0.7c0.2346-0.0011,0.4384,0.1611,0.49,0.39L3.41,3.9l0.1-0.06C3.67,3.72,3.82,3.57,4,3.44&#xA;&#x9;c0.7076-0.5968,1.7424-0.5968,2.45,0C6.6,3.57,6.74,3.71,6.89,3.83c0.2847,0.2546,0.7153,0.2546,1,0l0.41-0.4&#xA;&#x9;C8.6306,3.1458,9.0541,2.9928,9.49,3l0,0c0.2761,0,0.5,0.2239,0.5,0.5S9.7661,4,9.49,4l0,0C9.231,4.0219,8.9906,4.1439,8.82,4.34&#xA;&#x9;c-0.2714,0.2887-0.6175,0.4964-1,0.6C7.2085,5.1216,6.5466,4.9824,6.06,4.57L5.73,4.23C5.4324,3.9262,4.9449,3.9213,4.6411,4.2189&#xA;&#x9;C4.6374,4.2226,4.6337,4.2263,4.63,4.23C4.49,4.35,4.36,4.48,4.21,4.6C4.0521,4.7221,3.8768,4.8198,3.69,4.89l0.67,2.32&#xA;&#x9;c0.6727-0.3402,1.4836-0.2458,2.06,0.24c0.15,0.13,0.29,0.27,0.44,0.39c0.2847,0.2546,0.7153,0.2546,1,0L8.3,7.42&#xA;&#x9;C8.6321,7.1394,9.0554,6.99,9.49,7l0,0C9.7661,6.9944,9.9944,7.2137,10,7.4898C10.0001,7.4965,10.0001,7.5033,10,7.51z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"dam-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M13.94,9.5c0,0.2761-0.2239,0.5-0.5,0.5l0,0c-0.259,0.0219-0.4994,0.1439-0.67,0.34c-0.2714,0.2887-0.6175,0.4964-1,0.6&#xA;&#x9;c-0.6115,0.1816-1.2734,0.0424-1.76-0.37l-0.39-0.35c-0.2976-0.3038-0.7851-0.3087-1.0889-0.0111&#xA;&#x9;C8.5274,10.2126,8.5237,10.2163,8.52,10.22c-0.14,0.12-0.27,0.25-0.42,0.37c-0.7278,0.5784-1.7663,0.5489-2.46-0.07L5.3,10.19&#xA;&#x9;l-0.1-0.06l0.3,1.22l0.49,2c0.0829,0.2634-0.0634,0.5441-0.3267,0.6271C5.6105,13.9937,5.5553,14.0014,5.5,14h-4&#xA;&#x9;C1.2239,14,1,13.7761,1,13.5v-12C1,1.2239,1.2239,1,1.5,1h1.1c0.2346-0.0011,0.4384,0.1611,0.49,0.39L4,5.06V5.2&#xA;&#x9;c0.6569-0.314,1.4361-0.2205,2,0.24c0.16,0.13,0.31,0.28,0.47,0.41c0.2847,0.2546,0.7153,0.2546,1,0c0.16-0.13,0.31-0.28,0.47-0.41&#xA;&#x9;c0.7076-0.5968,1.7424-0.5968,2.45,0c0.15,0.13,0.29,0.27,0.44,0.39c0.2847,0.2546,0.7153,0.2546,1,0l0.47-0.41&#xA;&#x9;c0.3163-0.2672,0.7159-0.4157,1.13-0.42l0,0c0.2761,0,0.5,0.2239,0.5,0.5S13.7061,6,13.43,6l0,0&#xA;&#x9;c-0.259,0.0219-0.4994,0.1439-0.67,0.34c-0.2714,0.2887-0.6175,0.4964-1,0.6C11.1485,7.1216,10.4866,6.9824,10,6.57L9.67,6.23&#xA;&#x9;C9.3724,5.9262,8.8849,5.9213,8.5811,6.2189C8.5774,6.2226,8.5737,6.2263,8.57,6.23C8.43,6.35,8.3,6.48,8.15,6.6&#xA;&#x9;C7.4222,7.1784,6.3837,7.1489,5.69,6.53L5.3,6.19c-0.2847-0.2546-0.7153-0.2546-1,0L4.24,6.24L4.93,9&#xA;&#x9;C5.3226,9.029,5.6965,9.1793,6,9.43c0.16,0.13,0.31,0.28,0.47,0.41c0.2847,0.2546,0.7153,0.2546,1,0c0.16-0.13,0.31-0.28,0.47-0.41&#xA;&#x9;c0.7076-0.5968,1.7424-0.5968,2.45,0c0.15,0.13,0.29,0.27,0.44,0.39c0.2847,0.2546,0.7153,0.2546,1,0l0.47-0.41&#xA;&#x9;c0.3177-0.2636,0.7172-0.4085,1.13-0.41l0,0c0.2761-0.0055,0.5044,0.2138,0.5099,0.4899C13.94,9.4933,13.94,9.4966,13.94,9.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"danger-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M6.62,8.5l3.11,1.55l-0.45,0.89L5.5,9.06l-3.78,1.89l-0.45-0.89L4.38,8.5l-3.1-1.55l0.45-0.89L5.5,7.94l3.78-1.89l0.44,0.9&#xA;&#x9;L6.62,8.5z M8.5,3.21V3.5l-1,1v1l-2,1l-2-1v-1l-1-1V3C2.4438,1.3994,3.6958,0.0562,5.2964,0C5.3643-0.0024,5.4322-0.0024,5.5,0&#xA;&#x9;c1.7059,0.0484,3.0495,1.4705,3.0011,3.1764C8.5008,3.1876,8.5004,3.1988,8.5,3.21z M4.71,2.71c0-0.4363-0.3537-0.79-0.79-0.79&#xA;&#x9;S3.13,2.2737,3.13,2.71c0,0.4363,0.3537,0.79,0.79,0.79l0,0C4.3563,3.5,4.71,3.1463,4.71,2.71z M5,4.5H4.5v1H5V4.5z M6.5,4.5H6v1&#xA;&#x9;h0.5V4.5z M7.86,2.71c0-0.4363-0.3537-0.79-0.79-0.79S6.28,2.2737,6.28,2.71S6.6337,3.5,7.07,3.5l0,0&#xA;&#x9;C7.5063,3.5,7.86,3.1463,7.86,2.71z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"danger-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M13.94,14.68c-0.0749,0.194-0.262,0.3215-0.47,0.32c-0.0595,0.0107-0.1205,0.0107-0.18,0L7.5,12.56L1.7,15&#xA;&#x9;c-0.2572,0.1005-0.5472-0.0266-0.6476-0.2838C1.0516,14.7141,1.0508,14.7121,1.05,14.71c-0.1291-0.2441-0.0358-0.5467,0.2084-0.6757&#xA;&#x9;C1.2845,14.0205,1.3118,14.009,1.34,14l4.85-2l-4.85-2C1.0758,9.9197,0.9267,9.6404,1.007,9.3762s0.3596-0.4133,0.6238-0.333&#xA;&#x9;C1.6545,9.0504,1.6776,9.0594,1.7,9.07l5.8,2.41l5.8-2.41c0.2494-0.1185,0.5477-0.0124,0.6662,0.237&#xA;&#x9;c0.1185,0.2494,0.0124,0.5477-0.237,0.6662C13.7068,9.9839,13.6837,9.9928,13.66,10L8.8,12l4.85,2&#xA;&#x9;c0.2607,0.091,0.3983,0.3761,0.3074,0.6368C13.9523,14.6515,13.9465,14.6659,13.94,14.68z M12,4.23v0.45&#xA;&#x9;c-0.0021,0.2129-0.0722,0.4196-0.2,0.59C11.2414,5.8883,10.6399,6.4664,10,7v1.16c0.0015,0.208-0.126,0.3951-0.32,0.47L7.52,9.5&#xA;&#x9;H7.45L5.28,8.63C5.1016,8.5428,4.9917,8.3584,5,8.16V7C4.3528,6.4675,3.7446,5.8893,3.18,5.27C3.0593,5.0972,2.9963,4.8907,3,4.68&#xA;&#x9;V4.23C3.1669,2.0117,4.8974,0.2307,7.11,0h0.36l0,0h0.39C10.0862,0.2131,11.8348,1.9997,12,4.23z M6,4c0-0.5523-0.4477-1-1-1&#xA;&#x9;S4,3.4477,4,4s0.4477,1,1,1S6,4.5523,6,4z M7,7c0-0.2761-0.2239-0.5-0.5-0.5S6,6.7239,6,7v0.5C6,7.7761,6.2239,8,6.5,8&#xA;&#x9;S7,7.7761,7,7.5V7z M9,7c0-0.2761-0.2239-0.5-0.5-0.5S8,6.7239,8,7v0.5C8,7.7761,8.2239,8,8.5,8S9,7.7761,9,7.5V7z M11,4&#xA;&#x9;c0-0.5523-0.4477-1-1-1S9,3.4477,9,4s0.4477,1,1,1S11,4.5523,11,4z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\" id=\"defibrillator-11\">\n  <path d=\"M1.42,4.7955C-0.2131,1.5291,3.9327-.6514,5.512,2.6149,7.0914-.6514,11.2371,1.5291,9.6039,4.7955c-0.0225.0377-.0483,0.0732-0.071,0.1108H8.3867L7.5586,3.252a0.65,0.65,0,0,0-1.1172,0L5,6.1338,4.5586,5.252A0.6243,0.6243,0,0,0,4,4.9063H1.4913C1.4685,4.8687,1.4427,4.8332,1.42,4.7955ZM8,6.1563a0.6243,0.6243,0,0,1-.5586-0.3457L7,4.9287,5.5586,7.8105a0.6241,0.6241,0,0,1-1.1172,0L3.6133,6.1563H2.3006a24.2269,24.2269,0,0,0,2.8973,3.449L5.2134,9.6208A0.44,0.44,0,0,0,5.835,9.6053a24.2289,24.2289,0,0,0,2.8905-3.449H8Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" id=\"defibrillator-15\">\n  <path d=\"M1.55,6.3381C-0.8368,1.7416,5.18-1.3228,7.502,3.2737c2.3215-4.5965,8.3387-1.5322,5.9523,3.0644-0.0869.1671-.2028,0.3456-0.3114,0.5212H11.335L9.5205,4.1377A0.6252,0.6252,0,0,0,8.42,4.2524l-1.6484,4.12-1.33-1.33A0.6254,0.6254,0,0,0,5,6.8594H1.8611C1.7525,6.6837,1.6366,6.5052,1.55,6.3381ZM11,8.1094a0.6263,0.6263,0,0,1-.5205-0.2783L9.1387,5.82,7.58,9.7168a0.6245,0.6245,0,0,1-.4546.38A0.6047,0.6047,0,0,1,7,10.1094a0.6251,0.6251,0,0,1-.4419-0.1826L4.7412,8.1094H2.7358a42.67,42.67,0,0,0,4.46,4.6732,0.4642,0.4642,0,0,0,.6222,0,43.26,43.26,0,0,0,4.4505-4.6732H11Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"dentist-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M5.48,6C4.857,6.0823,4.3088,6.4527,4,7c-0.46,1.21-0.14,3-0.82,3S2.7,8.49,2.5,7C2.2864,6.3547,2.0326,5.7235,1.74,5.11&#xA;&#x9;C1.53,3.7,1,1.28,2.67,1S4.35,2.52,5.5,2.52S6.67,0.72,8.33,1s1.14,2.7,0.93,4.11C8.9674,5.7235,8.7136,6.3547,8.5,7&#xA;&#x9;c-0.2,1.49,0,3-0.68,3S7.46,8.21,7,7C6.6912,6.4527,6.143,6.0823,5.52,6l0,0H5.48z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"dentist-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M4.36,14c-1,0-0.56-2.67-0.86-5c-0.1-0.76-1-1.49-1.12-2.06C2,5,1.39,1.44,3.66,1S6,3,7.54,3s1.57-2.36,3.85-2&#xA;&#x9;s1.59,3.9,1.29,5.9c-0.1,0.45-1.1,1.48-1.18,2.06c-0.33,2.4,0.32,5-0.8,5c-0.93,0-1.32-2.72-2-4.5C8.43,8.63,8.06,8,7.54,8&#xA;&#x9;C6,8,5.75,14,4.36,14z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"doctor-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.5,5.87c0.0017-0.8174-0.6596-1.4813-1.477-1.483S6.5417,5.0466,6.54,5.864C6.5386,6.54,6.9955,7.131,7.65,7.3v0.42&#xA;&#x9;c0,1.0245-0.8305,1.855-1.855,1.855S3.94,8.7445,3.94,7.72l0,0C3.9776,6.8275,4.3787,5.9893,5.05,5.4H5&#xA;&#x9;c0.718-0.4684,1.1564-1.2628,1.17-2.12V1.79c0-0.613-0.4969-1.11-1.11-1.11c-0.0033,0-0.0067,0-0.01,0H4.5&#xA;&#x9;c-0.2043,0-0.37,0.1657-0.37,0.37S4.2957,1.42,4.5,1.42h0.55c0.2043,0,0.37,0.1657,0.37,0.37v1.49l0,0&#xA;&#x9;c0,1.0178-0.8222,1.8445-1.84,1.85V5.4l0,0V5.13C2.5583,5.1355,1.7255,4.3117,1.72,3.29c0-0.0033,0-0.0067,0-0.01l0,0V1.79&#xA;&#x9;c0-0.2043,0.1657-0.37,0.37-0.37l0,0h0.52c0.2043,0,0.37-0.1657,0.3699-0.3701C2.9799,0.8456,2.8143,0.68,2.61,0.68H2.09&#xA;&#x9;C1.4848,0.6909,0.9999,1.1847,1,1.79v1.49C0.9978,4.1241,1.4086,4.9158,2.1,5.4l0,0c0.6676,0.591,1.065,1.429,1.1,2.32&#xA;&#x9;c0,1.4332,1.1618,2.595,2.595,2.595S8.39,9.1532,8.39,7.72V7.3C9.0424,7.1316,9.4986,6.5438,9.5,5.87z M8,6.61&#xA;&#x9;c-0.4087,0-0.74-0.3313-0.74-0.74S7.5913,5.13,8,5.13s0.74,0.3313,0.74,0.74l0,0C8.74,6.2787,8.4087,6.61,8,6.61z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"doctor-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M5.5,7C4.1193,7,3,5.8807,3,4.5l0,0v-2C3,2.2239,3.2239,2,3.5,2H4c0.2761,0,0.5-0.2239,0.5-0.5S4.2761,1,4,1H3.5&#xA;&#x9;C2.6716,1,2,1.6716,2,2.5v2c0.0013,1.1466,0.5658,2.2195,1.51,2.87l0,0C4.4131,8.1662,4.9514,9.297,5,10.5C5,12.433,6.567,14,8.5,14&#xA;&#x9;s3.5-1.567,3.5-3.5V9.93c1.0695-0.2761,1.7126-1.367,1.4365-2.4365C13.1603,6.424,12.0695,5.7809,11,6.057&#xA;&#x9;C9.9305,6.3332,9.2874,7.424,9.5635,8.4935C9.7454,9.198,10.2955,9.7481,11,9.93v0.57c0,1.3807-1.1193,2.5-2.5,2.5S6,11.8807,6,10.5&#xA;&#x9;c0.0511-1.2045,0.5932-2.3356,1.5-3.13l0,0C8.4404,6.7172,9.001,5.6448,9,4.5v-2C9,1.6716,8.3284,1,7.5,1H7&#xA;&#x9;C6.7239,1,6.5,1.2239,6.5,1.5S6.7239,2,7,2h0.5C7.7761,2,8,2.2239,8,2.5v2l0,0C8,5.8807,6.8807,7,5.5,7 M11.5,9&#xA;&#x9;c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S12.0523,9,11.5,9z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"dog-park-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"rect4698\" d=\"M7.5,1&#xA;&#x9;c0,0-0.3457,0.0371-0.5,0.5l-0.5,2l2,1.5H10c1,0,1-1,1-1L9.5,2.5C9,2,8.5,2,8,2V1.5C8,1.5,8,1,7.5,1z M2.5,2&#xA;&#x9;c0,0-0.3534-0.0069-0.7227,0.1777S1,2.8333,1,3.5v0.9648C0.9996,4.4766,0.9996,4.4883,1,4.5V5v0.5C1,6.5,1,7,0.5,7C0.5,7,0,7,0,7.5&#xA;&#x9;v2c0,0,0,0.5,0.5,0.5S1,9.5,1,9.5V8c0.3537,0,0.6906-0.1371,1-0.2988V9.5c0,0,0,0.5,0.5,0.5S3,9.5,3,9.5V7h3l0.6641,1.9922&#xA;&#x9;C7,9.9999,7.5,10,7.5,10H8c0,0,0.5,0,0.5-0.5S8,9,8,9V6.5C8,5.6094,7.3678,5.2449,7,5L5.498,4H2V3.5&#xA;&#x9;c0-0.3333,0.0919-0.3624,0.2227-0.4277C2.3534,3.0069,2.5,3,2.5,3C3.1762,3.0096,3.1762,1.9904,2.5,2z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" id=\"dog-park-15\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <g id=\"g3\">\n    <path d=\"M 10.300781 1.2207031 C 9.9144812 1.2207031 9.6 1.2 9.5 2 L 9.0996094 4.5214844 L 11.5 6.5 L 13.5 6.5 C 14.9 6.5 15 5.5410156 15 5.5410156 L 13.099609 3.3222656 C 12.399609 2.6222656 11.7 2.5 11 2.5 L 11 2 C 11 2 11.067481 1.2206031 10.300781 1.2207031 z M 4.75 1.5 C 4.75 1.5 3.7992187 1.5206031 3.1992188 1.7207031 C 2.5992187 1.9207031 2 2.6210938 2 3.6210938 L 2 7.5214844 C 2 9.2214844 1.3 9.5 1 9.5 C 1 9.5 0 9.5214844 0 10.521484 L 0 12.720703 C 0 12.720703 0.00078125 13.521484 0.80078125 13.521484 L 1 13.521484 L 1.5 13.521484 L 2 13.521484 L 2 13.021484 L 2 12.822266 C 2 12.422266 1.8 12.221094 1.5 12.121094 L 1.5 11.021484 C 2.5 11.021484 2.6 10.820703 3 10.720703 L 3.5507812 12.917969 C 3.6507813 13.217969 3.7507813 13.417578 4.0507812 13.517578 L 5.0507812 13.517578 L 6 13.5 L 6 12.699219 C 6 12.022819 5 12 5 12 L 5 9.5 L 8.5 9.5 L 9.1992188 12.121094 C 9.5992188 13.521094 10.5 13.5 10.5 13.5 L 11 13.5 L 12 13.5 L 12 12.699219 C 12 11.987419 11 12 11 12 L 11.099609 7.921875 L 8 5.5 L 3.5 5.5 L 3.5 3.5 C 3.5 3.1 3.7765 3.0053 4 3 C 4.4941 2.9882 4.75 3 4.75 3 C 5.1642 3 5.5 2.6642 5.5 2.25 C 5.5 1.8358 5.1642 1.5 4.75 1.5 z M 11.75 4 C 11.8881 4 12 4.1119 12 4.25 C 12 4.3881 11.8881 4.5 11.75 4.5 C 11.6119 4.5 11.5 4.3881 11.5 4.25 C 11.5 4.1119 11.6119 4 11.75 4 z \" id=\"path5\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\" id=\"drinking-water-11\">\n  <path d=\"M5,11H3a0.51,0.51,0,0,1-.5-0.4L1,5.6A0.5,0.5,0,0,1,1.5,5h5A0.5,0.5,0,0,1,7,5.6l-1.49,5A0.51,0.51,0,0,1,5,11ZM2.76,8L5.22,8,5.89,6H2.11Z\"/>\n  <path d=\"M4.5,0h0A1.5,1.5,0,0,0,3,1.51v2a0.5,0.5,0,0,0,.5.5h1A0.5,0.5,0,0,0,5,3.5v-1A0.5,0.5,0,0,1,5.5,2H10V0H4.5Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" id=\"drinking-water-15\">\n  <path d=\"M6,1A2,2,0,0,0,4,3V6.5a0.5,0.5,0,0,0,.5.5h2A0.5,0.5,0,0,0,7,6.5v-2A0.5,0.5,0,0,1,7.5,4H14V1H6Z\"/>\n  <path d=\"M7,15H4a0.5,0.5,0,0,1-.48-0.38L2,8.62A0.5,0.5,0,0,1,2.5,8h6A0.5,0.5,0,0,1,9,8.62l-1.5,6A0.5,0.5,0,0,1,7,15ZM3.65,11l3.71,0L7.86,9H3.14Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"embassy-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M5.5,2C4.6014,2.0766,3.7537,2.4494,3.09,3.06C3.0316,3.1262,2.9995,3.2117,3,3.3v3.32&#xA;&#x9;C2.9889,6.8074,3.1318,6.9684,3.3193,6.9796C3.4115,6.985,3.5021,6.9527,3.57,6.89C4.1239,6.4637,4.8011,6.2286,5.5,6.22&#xA;&#x9;C6.61,6.22,6.85,7,8,7c0.6869-0.0671,1.3313-0.3629,1.83-0.84C9.9401,6.0917,10.0051,5.9695,10,5.84V2.37&#xA;&#x9;c0.0309-0.1908-0.0987-0.3705-0.2896-0.4014C9.6387,1.9569,9.5652,1.9679,9.5,2C9.0686,2.3529,8.5507,2.5842,8,2.67&#xA;&#x9;C6.85,2.67,6.65,2,5.5,2z M1.5,1.5c0.5523,0,1,0.4477,1,1s-0.4477,1-1,1s-1-0.4477-1-1S0.9477,1.5,1.5,1.5z M2,4.5v6&#xA;&#x9;C2,10.7761,1.7761,11,1.5,11S1,10.7761,1,10.5v-6C1,4.2239,1.2239,4,1.5,4S2,4.2239,2,4.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"embassy-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M6.65,2C5.43,2,4.48,3.38,4.11,3.82C4.0365,3.9102,3.9975,4.0237,4,4.14v4.4C3.9884,8.7827,4.1758,8.9889,4.4185,9.0005&#xA;&#x9;C4.528,9.0057,4.6355,8.9699,4.72,8.9c0.4665-0.6264,1.1589-1.0461,1.93-1.17C8.06,7.73,8.6,9,10.07,9&#xA;&#x9;c0.9948-0.0976,1.9415-0.4756,2.73-1.09c0.1272-0.0934,0.2016-0.2422,0.2-0.4V2.45c0.0275-0.2414-0.1459-0.4595-0.3874-0.487&#xA;&#x9;C12.5332,1.954,12.4527,1.9668,12.38,2c-0.6813,0.5212-1.4706,0.8834-2.31,1.06C8.6,3.08,8.12,2,6.65,2z M2.5,3&#xA;&#x9;c-0.5523,0-1-0.4477-1-1s0.4477-1,1-1s1,0.4477,1,1S3.0523,3,2.5,3z M3,4v9.48c0,0.2761-0.2239,0.5-0.5,0.5S2,13.7561,2,13.48V4&#xA;&#x9;c0-0.2761,0.2239-0.5,0.5-0.5S3,3.7239,3,4z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"emergency-phone-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M8.87,8.53a.73.73,0,0,0,0-1l-.74-.74a.73.73,0,0,0-1,0ZM4.27,3.97a.73.73,0,0,0,0-1l-.71-.71a.73.73,0,0,0-1,0ZM3.04,5.65,5.35,7.96a.37.37,0,0,0,.52,0l.44-.43L8.07,9.27A2.27,2.27,0,0,1,6.73,10h-1a1.345,1.345,0,0,1-1-.52L1.52,6.27a1.345,1.345,0,0,1-.52-1v-1a2.27,2.27,0,0,1,.73-1.34L3.47,4.69l-.43.44a.37.37,0,0,0,0,.52M8,2.5H6.5v1H8V5H9V3.5h1.5v-1H9V1H8Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"emergency-phone-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M7.875,11.49a.51.51,0,0,0,.72,0l.72-.72,2.18,2.16-.37.37a2.24,2.24,0,0,1-1.44.7H8.24a2.24,2.24,0,0,1-1.45-.7L1.72,8.23A2.24,2.24,0,0,1,1,6.78V5.33a2.24,2.24,0,0,1,.72-1.45l.36-.36L4.26,5.69l-.73.73a.51.51,0,0,0,0,.72Zm4.72.38a1,1,0,0,0,.036-1.414h0l-.036-.036-.72-.72a1,1,0,0,0-1.414-.036h0l-.036.036ZM5.315,4.62a1,1,0,0,0,.036-1.414h0L4.595,2.45a1,1,0,0,0-1.414-.036h0L3.14,2.45ZM10,2V4H8V5h2V7h1V5h2V4H11V2Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"entrance-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M4,2.25C4,1.8358,4.3358,1.5,4.75,1.5S5.5,1.8358,5.5,2.25S5.1642,3,4.75,3S4,2.6642,4,2.25z M9.27,4H7.88&#xA;&#x9;C7.6856,3.998,7.4985,4.0736,7.36,4.21l-4,4C3.224,8.344,3.0409,8.4194,2.85,8.42H1.73C1.3268,8.42,1,8.7468,1,9.15l0,0&#xA;&#x9;c0,0.4032,0.3268,0.73,0.73,0.73h1.89c0.1909-0.0006,0.374-0.076,0.51-0.21l4-4C8.2644,5.5576,8.4348,5.4972,8.61,5.5h0.66&#xA;&#x9;C9.6732,5.5,10,5.1732,10,4.77l0,0c0.0221-0.4026-0.2863-0.7468-0.6889-0.7689C9.2974,4.0003,9.2837,4,9.27,4z M4.75,3.5&#xA;&#x9;C4.3358,3.5,4,3.8358,4,4.25V6l1.5-1.5V4.25C5.5,3.8358,5.1642,3.5,4.75,3.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"entrance-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M7,6.5v-1c0-0.5523-0.4477-1-1-1s-1,0.4477-1,1v3L7,6.5z M4.65,10.56L5,3c0-0.5523,0.4477-1,1-1s1,0.4477,1,1S6.5523,4,6,4&#xA;&#x9;S5,3.5523,5,3L4.65,10.56z\"/>\n  <path d=\"M14,6L14,6c0,0.5523-0.4477,1-1,1h-1.58c-0.2658-0.0015-0.5213,0.1028-0.71,0.29l-5.42,5.42&#xA;&#x9;c-0.1863,0.1847-0.4377,0.2889-0.7,0.29H2c-0.5523,0-1-0.4477-1-1l0,0c0-0.5523,0.4477-1,1-1h1.59&#xA;&#x9;c0.2623-0.0011,0.5137-0.1053,0.7-0.29l5.42-5.42C9.8987,5.1028,10.1542,4.9985,10.42,5H13C13.5523,5,14,5.4477,14,6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"entrance-alt1-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M4.793,7.263A.5.5,0,0,0,5.5,7.97L7.743,5.677a.25.25,0,0,0,0-.354h0L5.489,3.042a.5.5,0,0,0-.707.707L6,5H1.5a.5.5,0,0,0,0,1H6ZM9,1H4.5a.5.5,0,0,0,0,1h4a.5.5,0,0,1,.5.5v6a.5.5,0,0,1-.5.5h-4a.5.5,0,0,0,0,1H9a1,1,0,0,0,1-1V2A1,1,0,0,0,9,1Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"entrance-alt1-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M6.554,9.639a.5.5,0,0,0,.707.707L9.928,7.669a.25.25,0,0,0,0-.354h0L7.261,4.639a.5.5,0,0,0-.707.707L8.2,7H1.5a.5.5,0,0,0,0,1H8.2ZM12,1H5.5a.5.5,0,0,0,0,1h6a.5.5,0,0,1,.5.5v10a.5.5,0,0,1-.5.5H5.25a.5.5,0,0,0,0,1H12a1,1,0,0,0,1-1V2A1,1,0,0,0,12,1Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"farm-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M6,5L4,4,2,5,1,7v3l1.5,0V8h3v2L7,10V7ZM5,7H3V5.5H5V7Z\"/>\n  <path d=\"M10,2A1,1,0,0,0,8,2v8h2V2Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"farm-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M8,7L5,5,2,7,1,9v4H3V11H7v2H9V9ZM6,9H4V7H6V9Zm8,4H11V3.5a1.5,1.5,0,0,1,3,0V13Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"fast-food-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M10,8L10,8c0,1.1046-0.8954,2-2,2H3c-1.1046,0-2-0.8954-2-2H10z M10,5H1C0.4477,5,0,5.4477,0,6s0.4477,1,1,1h9&#xA;&#x9;c0.5523,0,1-0.4477,1-1S10.5523,5,10,5z M8.55,1H2.46C1.6537,1,1,1.6536,1,2.46c0,0.0033,0,0.0067,0,0.01V4h9V2.47&#xA;&#x9;C10.0055,1.6637,9.3564,1.0055,8.55,1C8.55,1,8.55,1,8.55,1z M3.55,3C3.2752,3.0276,3.0301,2.8273,3.0025,2.5525&#xA;&#x9;C2.9749,2.2777,3.1753,2.0326,3.45,2.005c0.2748-0.0276,0.5199,0.1727,0.5475,0.4475C3.9991,2.4683,3.9999,2.4841,4,2.5&#xA;&#x9;C4,2.7761,3.7761,3,3.5,3H3.55z M7.55,3C7.2752,3.0276,7.0301,2.8273,7.0025,2.5525S7.1753,2.0326,7.45,2.005&#xA;&#x9;c0.2748-0.0276,0.5199,0.1727,0.5475,0.4475C7.9991,2.4683,7.9999,2.4841,8,2.5C8,2.7761,7.7761,3,7.5,3H7.55z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"fast-food-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M14,8c0,0.5523-0.4477,1-1,1H2C1.4477,9,1,8.5523,1,8s0.4477-1,1-1h11C13.5523,7,14,7.4477,14,8z M3.5,10H2&#xA;&#x9;c0,1.6569,1.3431,3,3,3h5c1.6569,0,3-1.3431,3-3H3.5z M3,6H2V4c0-1.1046,0.8954-2,2-2h7c1.1046,0,2,0.8954,2,2v2H3z M11,4.5&#xA;&#x9;C11,4.7761,11.2239,5,11.5,5S12,4.7761,12,4.5S11.7761,4,11.5,4S11,4.2239,11,4.5z M9,3.5C9,3.7761,9.2239,4,9.5,4S10,3.7761,10,3.5&#xA;&#x9;S9.7761,3,9.5,3S9,3.2239,9,3.5z M7,4.5C7,4.7761,7.2239,5,7.5,5S8,4.7761,8,4.5S7.7761,4,7.5,4S7,4.2239,7,4.5z M5,3.5&#xA;&#x9;C5,3.7761,5.2239,4,5.5,4S6,3.7761,6,3.5S5.7761,3,5.5,3S5,3.2239,5,3.5z M3,4.5C3,4.7761,3.2239,5,3.5,5S4,4.7761,4,4.5&#xA;&#x9;S3.7761,4,3.5,4S3,4.2239,3,4.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"fence-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.5,7H9V5h.5a.5.5,0,0,0,0-1H9V3l-.278-.555a.254.254,0,0,0-.443,0L8,3V4H7V3l-.278-.555a.254.254,0,0,0-.443,0L6,3V4H5V3l-.278-.555a.254.254,0,0,0-.443,0L4,3V4H3V3l-.278-.555a.254.254,0,0,0-.443,0L2,3V4H1.5a.5.5,0,0,0,0,1H2V7H1.5a.5.5,0,0,0,0,1H2v.5a.5.5,0,0,0,1,0V8H4v.5a.5.5,0,0,0,1,0V8H6v.5a.5.5,0,0,0,1,0V8H8v.5a.5.5,0,0,0,1,0V8h.5a.5.5,0,0,0,0-1ZM3,7V5H4V7ZM5,7V5H6V7ZM7,7V5H8V7Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"fence-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M13.5,10H13V7h.5a.5.5,0,0,0,0-1H13V4l-.286-.573a.249.249,0,0,0-.424-.006L12,4V6H11V4l-.286-.573a.249.249,0,0,0-.424-.006L10,4V6H9V4l-.286-.573a.249.249,0,0,0-.424-.006L8,4V6H7V4l-.286-.573a.249.249,0,0,0-.424-.006L6,4V6H5V4l-.286-.573a.249.249,0,0,0-.424-.006L4,4V6H3V4l-.286-.573a.249.249,0,0,0-.424-.006L2,4V6H1.5a.5.5,0,0,0,0,1H2v3H1.5a.5.5,0,0,0,0,1H2v1.5a.5.5,0,0,0,1,0V11H4v1.5a.5.5,0,0,0,1,0V11H6v1.5a.5.5,0,0,0,1,0V11H8v1.5a.5.5,0,0,0,1,0V11h1v1.5a.5.5,0,0,0,1,0V11h1v1.5a.5.5,0,0,0,1,0V11h.5a.5.5,0,0,0,0-1ZM3,10V7H4v3Zm2,0V7H6v3Zm2,0V7H8v3Zm2,0V7h1v3Zm2,0V7h1v3Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"ferry-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M11,9.45v0.77c-0.2167,0.0089-0.4213,0.1022-0.57,0.26c-0.2266,0.2196-0.5054,0.3779-0.81,0.46&#xA;&#x9;c-0.5149,0.1365-1.0639,0.0296-1.49-0.29L7.8,10.38c-0.2669-0.2313-0.6631-0.2313-0.93,0c-0.12,0.09-0.23,0.2-0.35,0.28&#xA;&#x9;c-0.6333,0.452-1.4889,0.4316-2.1-0.05l-0.33-0.27c-0.2457-0.185-0.5843-0.185-0.83,0c-0.16,0.11-0.3,0.25-0.46,0.36&#xA;&#x9;c-0.601,0.4185-1.399,0.4185-2,0l-0.26-0.21C0.4009,10.3346,0.2078,10.238,0,10.22V9.45c0.2162-0.0231,0.4345,0.015,0.63,0.11&#xA;&#x9;C0.8642,9.6894,1.0882,9.8365,1.3,10c0.1841,0.1814,0.4478,0.2567,0.7,0.2c0.093-0.0244,0.181-0.0651,0.26-0.12&#xA;&#x9;c0.13-0.09,0.25-0.2,0.38-0.3c0.616-0.4518,1.454-0.4518,2.07,0l0.4,0.31c0.2416,0.1752,0.5684,0.1752,0.81,0l0.4-0.31&#xA;&#x9;c0.6181-0.4567,1.4619-0.4567,2.08,0l0.38,0.3c0.2437,0.18,0.5763,0.18,0.82,0L10,9.77C10.2882,9.5546,10.6403,9.4419,11,9.45z&#xA;&#x9; M2.61,7.61L1,5l1-0.91V1.15C2.0163,0.5061,2.546-0.0057,3.19,0h4.62C8.454-0.0057,8.9837,0.5061,9,1.15v2.94L10,5L8.39,7.62&#xA;&#x9;C7.5729,7.0755,6.4952,7.1324,5.74,7.76L5.5,8l0,0L5.3,7.82C4.5536,7.1506,3.4512,7.0646,2.61,7.61z M2.81,3.61L5.5,2l2.69,1.63&#xA;&#x9;V1.15c0.0114-0.1985-0.1403-0.3686-0.3388-0.38c-0.0137-0.0008-0.0275-0.0008-0.0412,0H3.19&#xA;&#x9;C2.9915,0.7586,2.8214,0.9103,2.81,1.1088c-0.0008,0.0137-0.0008,0.0275,0,0.0412v2.48V3.61z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"ferry-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M5.33,11c0.6745,0.009,1.3262,0.245,1.85,0.67l0.26,0.23h0.05l0.31-0.28c0.9817-0.8115,2.379-0.8846,3.44-0.18L13.5,7L12,6&#xA;&#x9;V2.45c-0.0466-0.8-0.6989-1.4305-1.5-1.45H10c0.0343-0.518-0.3579-0.9657-0.8759-1C9.0828-0.0027,9.0413-0.0027,9,0H6&#xA;&#x9;C5.482-0.0343,5.0343,0.3579,5,0.8759C4.9973,0.9172,4.9973,0.9587,5,1H4.5C3.6989,1.0195,3.0466,1.65,3,2.45V6L1.5,7l2.25,4.53&#xA;&#x9;C4.2143,11.2041,4.7631,11.02,5.33,11z M4,2.45c0.0105-0.2594,0.2293-0.4611,0.4886-0.4506C4.4924,1.9996,4.4962,1.9998,4.5,2h6&#xA;&#x9;c0.259-0.0171,0.4829,0.1789,0.5,0.4379c0.0014,0.0207,0.0014,0.0414,0,0.0621v3l-3.5-2L4,5.45C4,5.45,4,2.45,4,2.45z M14,13v1&#xA;&#x9;c-0.2626,0.0194-0.5069,0.1416-0.68,0.34c-0.2717,0.2883-0.6178,0.4959-1,0.6c-0.6147,0.1815-1.2795,0.0425-1.77-0.37l-0.39-0.35&#xA;&#x9;c-0.3043-0.3026-0.7957-0.3026-1.1,0c-0.14,0.12-0.27,0.25-0.42,0.37c-0.7328,0.5856-1.7814,0.556-2.48-0.07l-0.39-0.35&#xA;&#x9;c-0.2864-0.2502-0.7136-0.2502-1,0c-0.19,0.15-0.36,0.32-0.55,0.47c-0.7043,0.5215-1.6732,0.4968-2.35-0.06l-0.31-0.27&#xA;&#x9;C1.4153,14.1443,1.2172,14.0346,1,14v-1c0.2585-0.032,0.5205,0.0169,0.75,0.14c0.2782,0.1722,0.5424,0.3661,0.79,0.58&#xA;&#x9;c0.2051,0.2235,0.5147,0.319,0.81,0.25c0.1125-0.0333,0.2177-0.0876,0.31-0.16c0.16-0.12,0.29-0.26,0.45-0.39&#xA;&#x9;c0.7106-0.5888,1.7394-0.5888,2.45,0c0.16,0.13,0.31,0.28,0.47,0.41c0.2864,0.2502,0.7136,0.2502,1,0c0.16-0.13,0.31-0.28,0.47-0.41&#xA;&#x9;c0.7123-0.5943,1.7477-0.5943,2.46,0c0.15,0.13,0.29,0.27,0.44,0.39c0.2864,0.2502,0.7136,0.2502,1,0l0.47-0.41&#xA;&#x9;C13.1895,13.1408,13.5886,12.9995,14,13z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"fire-station-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path10041-3-2\" d=\"M5.5,0l-2,4L2,2&#xA;&#x9;C1.595,2.7121,0,4.1667,0,6c0,2.7001,2.7999,5,5.5,5S11,8.7001,11,6c0-1.8333-1.595-3.2879-2-4L7.5,4L5.5,0z M5.5,5.5&#xA;&#x9;c0,0,2,1.585,2,3c0,0.6111-0.7778,1.2778-2,1.2778s-2-0.6667-2-1.2778C3.5,7.1336,5.5,5.5,5.5,5.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"fire-station-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path10041-3-3\" d=\"M7.5,0.5L5,4.5l-1.5-2&#xA;&#x9;C2.9452,3.4753,0.8036,5.7924,0.8036,8.3036C0.8036,12.002,3.8017,15,7.5,15s6.6964-2.998,6.6964-6.6964&#xA;&#x9;c0-2.5112-2.1416-4.8283-2.6964-5.8036l-1.5,2L7.5,0.5z M7.5,7c0,0,2.5,2.5618,2.5,4.5c0,0.8371-0.8259,2-2.5,2S5,12.3371,5,11.5&#xA;&#x9;C5,9.6283,7.5,7,7.5,7z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"fitness-centre-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M7,6H4V5H7ZM2,3V4H1V5A.5.5,0,0,0,1,6V7H2V8H3.5V3Zm8,2V4H9V3H7.5V8H9V7h1V6a.5.5,0,0,0,0-1Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"fitness-centre-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path id=\"daec40ff-71f5-4432-9d75-dcba7b9c1b89\" d=\"M14.5,7V8h-1v2h-1v1H11V8H4v3H2.5V10h-1V8H.5V7h1V5h1V4H4V7h7V4h1.5V5h1V7Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"florist-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M1,2.5a3.1,3.1,0,0,0-1-2A3.9,3.9,0,0,1,2,2l.526-2,.437,2a3.9,3.9,0,0,1,2-1.5,3.1,3.1,0,0,0-1,2A1.307,1.307,0,0,1,2.662,4H2.409A1.36,1.36,0,0,1,1,2.5ZM9,8.982l2-.437L9,8.018a3.9,3.9,0,0,0,1.5-2,3.1,3.1,0,0,1-2,1A1.36,1.36,0,0,0,7,8.427V8.68a1.307,1.307,0,0,0,1.5,1.3,3.1,3.1,0,0,1,2,1A3.9,3.9,0,0,0,9,8.982ZM3.4,7.9,6.113,5.181a1.382,1.382,0,0,1-.436-.271L3.044,7.543l-.279-.279A11.045,11.045,0,0,0,3,4.5H2.5a15.272,15.272,0,0,1-.161,2.338L2.251,6.75a.247.247,0,0,0-.4.071L.059,10.657a.27.27,0,0,0-.026.108.25.25,0,0,0,.25.25.27.27,0,0,0,.089-.021L.378,11l3.8-1.85a.247.247,0,0,0,.068-.4l-.063-.063A12.768,12.768,0,0,1,6.5,8.5V8a10.381,10.381,0,0,0-2.724.275ZM7.243,2.522a.75.75,0,0,1,.018-1.5.739.739,0,0,1,.561.266.75.75,0,1,1,1.383,0,.739.739,0,0,1,.561-.266.75.75,0,0,1,.014,1.5.748.748,0,1,1-.561,1.26A.728.728,0,0,1,9.263,4a.75.75,0,1,1-1.5,0,.737.737,0,0,1,.05-.238.739.739,0,0,1-.558.26.75.75,0,0,1-.012-1.5ZM7.761,2.5a.75.75,0,1,0,.75-.75A.75.75,0,0,0,7.761,2.5Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"florist-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M1.5,1A2.7,2.7,0,0,1,4,3l.5-3L5,3A2.7,2.7,0,0,1,7.5,1c-.2.03-1,.26-1,2v.083A1.959,1.959,0,0,1,4.5,5H4.417A1.959,1.959,0,0,1,2.5,3C2.5,1.261,1.7,1.03,1.5,1ZM12.012,11l3-.5-3-.5A2.686,2.686,0,0,0,14,7.5c-.03.2-.248,1-1.988,1a2,2,0,0,0,0,4c1.739,0,1.958.8,1.988,1A2.686,2.686,0,0,0,12.012,11ZM9.688,5.548a1,1,0,0,1,0-2,1,1,0,0,1,0-2,.986.986,0,0,1,.852.507l.023-.012a.978.978,0,0,1-.116-.444,1,1,0,1,1,2,0,.978.978,0,0,1-.116.444l.019.01a.986.986,0,0,1,.85-.5,1,1,0,0,1,.025,2,1,1,0,0,1-.025,2,.986.986,0,0,1-.85-.5l-.016.009a.978.978,0,0,1,.113.44,1,1,0,0,1-2,0,.978.978,0,0,1,.113-.44l-.02-.011a.986.986,0,0,1-.852.507Zm.71-1.995A1.051,1.051,0,1,0,11.449,2.5,1.051,1.051,0,0,0,10.4,3.553v0ZM4.946,11.444l-.516-.515L8.892,6.475A1.746,1.746,0,0,1,8.44,6.22L4.076,10.575l-.519-.518A16.051,16.051,0,0,0,4.912,6a3.373,3.373,0,0,1-.412.035c-.041,0-.073-.008-.112-.01A16.953,16.953,0,0,1,3.131,9.631L2.76,9.26a.246.246,0,0,0-.4.079L.231,14.445a.287.287,0,0,0-.016.089.25.25,0,0,0,.25.25.289.289,0,0,0,.1-.019l5.1-2.124a.246.246,0,0,0,.079-.4l-.372-.372a16.874,16.874,0,0,1,3.612-1.256c0-.059-.015-.106-.015-.166A3.349,3.349,0,0,1,9,10.089,16.076,16.076,0,0,0,4.946,11.444Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"fuel-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.5,3H9V1.5l0,0C9,1.2239,8.7761,1,8.5,1S8,1.2239,8,1.5l0,0V3c0,0.5523,0.4477,1,1,1v4.25C9,8.3881,8.8881,8.5,8.75,8.5&#xA;&#x9;S8.5,8.3881,8.5,8.25V6.5C8.5,5.6716,7.8284,5,7,5V2c0-0.5523-0.4477-1-1-1H2C1.4477,1,1,1.4477,1,2v7c0,0.5523,0.4477,1,1,1h4&#xA;&#x9;c0.5523,0,1-0.4477,1-1V6c0.2761,0,0.5,0.2239,0.5,0.5v1.75c0,0.6904,0.5596,1.25,1.25,1.25S10,8.9404,10,8.25V3.5&#xA;&#x9;C10,3.2239,9.7761,3,9.5,3z M6,4.5C6.0056,4.7706,5.7908,4.9944,5.5202,5C5.5201,5,5.5201,5,5.52,5h-3&#xA;&#x9;C2.2384,5.0056,2.0056,4.7818,2,4.5002C2,4.5001,2,4.5001,2,4.5l0,0V3c0-0.2761,0.2239-0.5,0.5-0.5h3C5.7761,2.5,6,2.7239,6,3V4.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"fuel-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M13,6L13,6v5.5c0,0.2761-0.2239,0.5-0.5,0.5S12,11.7761,12,11.5v-2C12,8.6716,11.3284,8,10.5,8H9V2c0-0.5523-0.4477-1-1-1H2&#xA;&#x9;C1.4477,1,1,1.4477,1,2v11c0,0.5523,0.4477,1,1,1h6c0.5523,0,1-0.4477,1-1V9h1.5C10.7761,9,11,9.2239,11,9.5v2&#xA;&#x9;c0,0.8284,0.6716,1.5,1.5,1.5s1.5-0.6716,1.5-1.5V5c0-0.5523-0.4477-1-1-1l0,0V2.49C12.9946,2.2178,12.7723,1.9999,12.5,2&#xA;&#x9;c-0.2816,0.0047-0.5062,0.2367-0.5015,0.5184C11.9987,2.5289,11.9992,2.5395,12,2.55V5C12,5.5523,12.4477,6,13,6s1-0.4477,1-1&#xA;&#x9;s-0.4477-1-1-1 M8,6.5C8,6.7761,7.7761,7,7.5,7h-5C2.2239,7,2,6.7761,2,6.5v-3C2,3.2239,2.2239,3,2.5,3h5C7.7761,3,8,3.2239,8,3.5&#xA;&#x9;V6.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"furniture-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <g>\n    <path d=\"M6,7.5552V6c0-0.2762-0.2239-0.5-0.5-0.5S5,5.7238,5,6v1.5552c-0.9391,0.1914-1.6886,0.9044-1.9231,1.827&#xA;&#x9;&#x9;C2.9976,9.6944,3.244,10,3.566,10H7.434c0.3221,0,0.5685-0.3056,0.4891-0.6177C7.6886,8.4596,6.9391,7.7466,6,7.5552z\"/>\n    <path d=\"M9.1348,4.2697L7.6395,1.2789C7.554,1.108,7.3793,1,7.1881,1H3.8119C3.6207,1,3.446,1.108,3.3605,1.2789L1.8652,4.2697&#xA;&#x9;&#x9;C1.6974,4.6052,1.9414,5,2.3166,5H7v0.75C7,5.8881,7.1119,6,7.25,6S7.5,5.8881,7.5,5.75V5h1.1834&#xA;&#x9;&#x9;C9.0586,5,9.3026,4.6052,9.1348,4.2697z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"furniture-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <g>\n    <path d=\"M9,10.1419V8.5013C9,8.2244,8.7756,8,8.4987,8H7.5013C7.2244,8,7,8.2244,7,8.5013v1.6406&#xA;&#x9;&#x9;c-1.538,0.3984-2.7227,1.6744-2.9573,3.2719C3.9976,13.7202,4.2291,14,4.5389,14h6.9222c0.3098,0,0.5413-0.2798,0.4962-0.5862&#xA;&#x9;&#x9;C11.7227,11.8163,10.538,10.5403,9,10.1419z\"/>\n    <path d=\"M13.6394,6.2788l-2.5016-5.0034C11.0533,1.1066,10.8808,1,10.692,1H5.308C5.1192,1,4.9467,1.1066,4.8622,1.2755&#xA;&#x9;&#x9;L2.3606,6.2788C2.1949,6.6102,2.4359,7,2.8063,7H11v1.5C11,8.7761,11.2239,9,11.5,9S12,8.7761,12,8.5V7h1.1937&#xA;&#x9;&#x9;C13.5641,7,13.8051,6.6102,13.6394,6.2788z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\" id=\"gaming-11\">\n  <path d=\"M9.715,5.8a2.046,2.046,0,0,0-2-1.8h-1.7V2.5c0-.2.2-.5.4-.5h2.1a.472.472,0,0,0,.5-.5.472.472,0,0,0-.5-.5h-2a1.453,1.453,0,0,0-1.5,1.4V4h-1.8a2.046,2.046,0,0,0-2,1.8l-.2,2.8a.991.991,0,0,0,.8,1.1,1.613,1.613,0,0,0,.9-.3L4.115,8h2.8l1.4,1.4a1.071,1.071,0,0,0,1.4.1,1.613,1.613,0,0,0,.3-.9ZM4.015,7h-2V6a.945.945,0,0,1,1-1h1Zm5,0h-2V5h1a1,1,0,0,1,1,1Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"gaming-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M13.1,12.5c-0.6,0.3-1.4,0.1-1.8-0.5l-1.1-1.4H4.8L3.7,12l0,0c-0.5,0.7-1.4,0.8-2.1,0.3c-0.5-0.4-0.7-1-0.6-1.5l0.7-3.7l0,0&#xA;&#x9;C1.9,5.9,3,5,4.2,5v0H7V3.5C7,2.7,7.6,2,8.4,2h3.1C11.8,2,12,2.2,12,2.5S11.8,3,11.5,3h-3C8.2,3,8,3.2,8,3.4c0,0,0,0.1,0,0.1V5h2.8&#xA;&#x9;v0c1.2,0,2.3,0.9,2.5,2.1l0,0l0.7,3.7l0,0C14.1,11.5,13.8,12.2,13.1,12.5z M6,7.5C6,6.7,5.3,6,4.5,6S3,6.7,3,7.5S3.7,9,4.5,9&#xA;&#x9;S6,8.3,6,7.5z M12,7.5C12,7.2,11.8,7,11.5,7H11V6.5C11,6.2,10.8,6,10.5,6S10,6.2,10,6.5V7H9.5C9.2,7,9,7.2,9,7.5S9.2,8,9.5,8H10v0.5&#xA;&#x9;C10,8.8,10.2,9,10.5,9S11,8.8,11,8.5V8h0.5C11.8,8,12,7.8,12,7.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"garden-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M10,6c0.0043,2.2091-1.783,4.0035-3.9922,4.0078C5.9218,10.008,5.8358,10.0054,5.75,10&#xA;&#x9;c-2.2048,0.1381-4.1041-1.5374-4.2422-3.7422C1.5024,6.172,1.4998,6.086,1.5,6c1.6411-0.1206,3.1886,0.7762,3.9,2.26V5h-2&#xA;&#x9;C2.9085,5.0055,2.5056,4.6116,2.5001,4.1201C2.5,4.1167,2.5,4.1134,2.5,4.11V1.84C2.492,1.6469,2.6421,1.4838,2.8352,1.4758&#xA;&#x9;C2.9567,1.4708,3.0721,1.5292,3.14,1.63L4.28,3l1.17-2.33c0.0996-0.1657,0.3146-0.2193,0.4803-0.1197&#xA;&#x9;C5.9794,0.5798,6.0205,0.6209,6.05,0.67L7.22,3l1.13-1.38c0.0982-0.1665,0.3128-0.2219,0.4793-0.1237&#xA;&#x9;C8.946,1.5651,9.0125,1.6951,9,1.83v2.28C9,4.6015,8.6016,5,8.1101,5.0001C8.1067,5.0001,8.1034,5,8.1,5h-2v3.26&#xA;&#x9;C6.8114,6.7762,8.3589,5.8794,10,6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"garden-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M13,8c0,3.31-2.19,6-5.5,6S2,11.31,2,8c2.2643,0.0191,4.2694,1.4667,5,3.61V7H4.5C3.6716,7,3,6.3284,3,5.5v-3&#xA;&#x9;C3,2.2239,3.2239,2,3.5,2c0.1574,0,0.3056,0.0741,0.4,0.2l1.53,2l1.65-3c0.1498-0.232,0.4593-0.2985,0.6913-0.1487&#xA;&#x9;C7.8308,1.0898,7.8815,1.1404,7.92,1.2l1.65,3l1.53-2c0.1657-0.2209,0.4791-0.2657,0.7-0.1C11.9259,2.1944,12,2.3426,12,2.5v3&#xA;&#x9;C12,6.3284,11.3284,7,10.5,7H8v4.61C8.7306,9.4667,10.7357,8.0191,13,8z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"garden-centre-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M10.875,5.1642l-0.007-.008-0.029-.029-0.971-.971A0.5,0.5,0,0,0,9,4.4952V5.6429L7,7.6458V3A2,2,0,0,0,3,3,2,2,0,0,0,3,7V8A1,1,0,0,0,4,9H6a0.9843,0.9843,0,0,0,.8328-0.48L9.3606,5.9893H10.422A0.5,0.5,0,0,0,10.875,5.1642ZM1.5,5A1.5,1.5,0,0,1,3,3.5v3A1.5,1.5,0,0,1,1.5,5Zm2-2a1.5,1.5,0,0,1,3,0h-3Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" id=\"garden-centre-15\">\n  <path d=\"M4,5L4,4.5C4,3.12 5.12,2 6.5,2C7.88,2 9,3.12 9,4.5L9,10.293L11.365,7.928L11.018,6.633C11.018,6.631 11.017,6.629 11.017,6.627L11.016,6.627L11.016,6.627C10.973,6.461 11.016,6.276 11.147,6.146C11.342,5.951 11.659,5.951 11.854,6.146L13.854,8.146C14.049,8.341 14.049,8.658 13.854,8.853C13.724,8.983 13.541,9.027 13.375,8.984C13.375,8.984 13.375,8.984 13.375,8.984C13.372,8.983 13.369,8.982 13.365,8.981L12.072,8.635L9,11.707L9,12C9,12.552 8.552,13 8,13L5,13C4.448,13 4,12.552 4,12L4,11.536L1.732,9.268C0.757,8.292 0.757,6.708 1.732,5.732C2.22,5.244 2.86,5 3.5,5L3.5,5L4,5ZM4,6L3.5,6L3.5,6C3.116,6 2.732,6.147 2.439,6.439C1.854,7.025 1.854,7.975 2.439,8.561L4,10.121L4,6ZM8,5L8,4.5C8,3.672 7.328,3 6.5,3C5.672,3 5,3.672 5,4.5L5,5L8,5Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"gift-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M0,5h4.5v1H0V5z M1,9.79C1,10.4583,1.5417,11,2.21,11c0.0033,0,0.0067,0,0.01,0h2.3V7H1V9.79z M7.64,4H3.36&#xA;&#x9;C2.6675,4.0686,2.0505,3.5629,1.9819,2.8704C1.9696,2.7467,1.9757,2.6219,2,2.5C1.9503,1.7229,2.5399,1.0526,3.3171,1.0028&#xA;&#x9;C3.3513,1.0006,3.3857,0.9997,3.42,1c1.0141-0.0115,1.8944,0.6969,2.1,1.69C5.7292,1.699,6.6072,0.9924,7.62,1&#xA;&#x9;c0.7893,0.026,1.4081,0.687,1.3821,1.4763C9.0016,2.4909,9.0009,2.5055,9,2.52c0.1185,0.6913-0.3458,1.3478-1.0371,1.4664&#xA;&#x9;C7.8563,4.0046,7.7478,4.0092,7.64,4z M4.82,3.25c0.0388-0.7888-0.5692-1.4597-1.358-1.4986C3.448,1.7508,3.434,1.7503,3.42,1.75&#xA;&#x9;C3.0447,1.7369,2.7298,2.0306,2.7168,2.4059C2.7157,2.4373,2.7167,2.4688,2.72,2.5C2.6811,2.8735,2.9524,3.2079,3.3259,3.2468&#xA;&#x9;C3.3572,3.25,3.3886,3.2511,3.42,3.25H4.82z M7.62,3.25c0.3753,0.0131,0.6902-0.2806,0.7032-0.6559&#xA;&#x9;c0.0011-0.0314,0-0.0628-0.0032-0.0941c0.0221-0.3915-0.2773-0.7268-0.6688-0.7489C7.6408,1.7505,7.6304,1.7501,7.62,1.75&#xA;&#x9;C6.8304,1.7656,6.2029,2.4184,6.2186,3.208C6.2188,3.222,6.2193,3.236,6.22,3.25H7.62z M6.52,5v1H11V5H6.52z M6.52,11h2.29&#xA;&#x9;c0.6604-0.0109,1.1901-0.5495,1.19-1.21V7H6.52V11z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"gift-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M6.5,5v2H0V5H6.5z M8.5,5v2H15V5H8.5z M1,8v4.5C1,13.3284,1.6716,14,2.5,14h4V8H1z M8.5,8v6h4c0.8284,0,1.5-0.6716,1.5-1.5&#xA;&#x9;V8H8.5z M10.5,0c-1.4033-0.0444-2.6497,0.8904-3,2.25C7.1497,0.8904,5.9033-0.0444,4.5,0c-1.0709-0.0337-1.9663,0.8072-2,1.8781&#xA;&#x9;C2.4987,1.9187,2.4987,1.9594,2.5,2C2.3443,2.9427,2.9822,3.8331,3.9249,3.9888C4.0853,4.0153,4.2486,4.0191,4.41,4h6.13&#xA;&#x9;c0.9548,0.1497,1.8503-0.5029,2-1.4577c0.0282-0.1797,0.0282-0.3626,0-0.5423c0.0002-1.1046-0.895-2.0002-1.9996-2.0004&#xA;&#x9;C10.5269-0.0004,10.5135-0.0003,10.5,0z M4.5,3c-0.506,0.0463-0.9537-0.3264-1-0.8323C3.4949,2.1119,3.4949,2.0558,3.5,2&#xA;&#x9;C3.4537,1.494,3.8264,1.0463,4.3323,1C4.3881,0.9949,4.4442,0.9949,4.5,1c1.1046,0,2,0.8954,2,2H4.5z M10.5,3h-2&#xA;&#x9;c0-1.1046,0.8954-2,2-2c0.5523,0,1,0.4477,1,1c0.0463,0.506-0.3264,0.9537-0.8323,1C10.6119,3.0051,10.5558,3.0051,10.5,3z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"globe-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <g>\n    <g>\n      <path d=\"M6.5,10H6V8.9496C7.0402,8.8331,7.9799,8.3841,8.682,7.682L8.1504,7.1504C7.4713,7.8294,6.5339,8.25,5.5,8.25&#xA;&#x9;&#x9;&#x9;c-2.0677,0-3.75-1.6823-3.75-3.75c0-1.0339,0.4206-1.9713,1.0996-2.6504L2.318,1.318C1.5037,2.1323,1,3.2573,1,4.5&#xA;&#x9;&#x9;&#x9;c0,2.314,1.7532,4.1979,4,4.4496V10H4.5C4.2239,10,4,10.2238,4,10.5C4,10.7761,4.2239,11,4.5,11h2C6.7761,11,7,10.7761,7,10.5&#xA;&#x9;&#x9;&#x9;C7,10.2238,6.7761,10,6.5,10z\"/>\n    </g>\n    <g>\n      <path d=\"M5.5,7C6.8807,7,8,5.8807,8,4.5C8,3.1193,6.8807,2,5.5,2S3,3.1193,3,4.5C3,5.8807,4.1193,7,5.5,7z M4.9549,2.5847&#xA;&#x9;&#x9;&#x9;l0.4928,0.6168v0.8362l0.6129,1.1115h1.3224C7.2133,5.6406,6.8611,6.0414,6.4035,6.275L5.5,5.5h-1L3.5323,4.1791&#xA;&#x9;&#x9;&#x9;C3.6572,3.4099,4.2178,2.7946,4.9549,2.5847z\"/>\n    </g>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"globe-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <g>\n    <g>\n      <path d=\"M11.9807,9.4807l-0.7208-0.7208C10.3425,9.8168,9.006,10.5,7.5,10.5c-2.757,0-5-2.243-5-5&#xA;&#x9;&#x9;&#x9;c0-1.506,0.6832-2.8425,1.7401-3.7599L3.5193,1.0193C2.2831,2.1183,1.5,3.7158,1.5,5.5c0,3.1449,2.4208,5.72,5.5,5.9747V13H6.5&#xA;&#x9;&#x9;&#x9;C6.2239,13,6,13.2238,6,13.5C6,13.7761,6.2239,14,6.5,14h2C8.7761,14,9,13.7761,9,13.5C9,13.2238,8.7761,13,8.5,13H8v-1.5273&#xA;&#x9;&#x9;&#x9;C9.5806,11.341,10.9858,10.5997,11.9807,9.4807z\"/>\n    </g>\n    <g>\n      <path d=\"M7.5,9C9.433,9,11,7.433,11,5.5S9.433,2,7.5,2S4,3.567,4,5.5S5.567,9,7.5,9z M8.5,4l0.3638-0.5915&#xA;&#x9;&#x9;&#x9;c0.3463,0.2263,0.6249,0.5394,0.8235,0.9042L9.5,5h-1V4z M6.6563,3.1563L7.5,4v1L8,6h1.5h0.4396&#xA;&#x9;&#x9;&#x9;C9.7708,6.826,9.2026,7.5041,8.4381,7.8144L8,7H6.5L5.0504,5C5.2251,4.1396,5.8452,3.4486,6.6563,3.1563z\"/>\n    </g>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"golf-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path11685\" d=\"M4.0492,0.638&#xA;&#x9;C3.5323,1.1814,4.2729,1.813,4.7284,1.3132l0.4953-0.5434l2.3326,1.3937L3.3063,4.5C3.0126,4.6615,2.9648,4.9407,3.0724,5.2212&#xA;&#x9;l0.8886,2.3165l-0.9355,2.8046C2.8974,10.7268,3.1975,10.991,3.5001,11c0.1954,0.0058,0.3919-0.093,0.4747-0.3413l0.9199-2.7636&#xA;&#x9;l0.8535-0.2832L6,8.1172V10.5c0,0,0,0.5,0.5,0.5S7,10.5,7,10.5V8.1172C7,8,6.9893,7.8618,6.9358,7.7548L5.6546,4.415l2.5528-1.4035&#xA;&#x9;c0.1868-0.0802,0.2901-0.2535,0.2901-0.5115c0-0.2259-0.2177-0.413-0.4564-0.5556L4.9047,0.0706&#xA;&#x9;c-0.1595-0.0953-0.2749-0.043-0.3226,0.0071L4.0492,0.638z M3,2.0002c-0.5523,0-1,0.4477-1,1s0.4477,1,1,1s1-0.4477,1-1&#xA;&#x9;S3.5523,2.0002,3,2.0002z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"golf-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path11758\" d=\"&#xA;&#x9;M3.3999,1.1c0,0.1,0,0.2,0,0.2c0,0.4,0.3,0.7,0.7,0.7c0.3,0,0.5-0.2,0.6-0.5l0,0L4.9,1l5.6,2.3L6.6,6C6.2,6.3,6.2,6.7,6.3,7.1&#xA;&#x9;l0.9,2.1l-1.3,3.9C5.7,13.6,6.1,14,6.5,14c0.3,0,0.5-0.1,0.6-0.5l1.4-4l0.1,0.3v3.5c0,0,0,0.7,0.7,0.7s0.7-0.7,0.7-0.7V10&#xA;&#x9;c0-0.2,0-0.3-0.1-0.5L8.5,6.1l2.7-1.9c0.2-0.2,0.4-0.3,0.4-0.6s-0.2-0.5-0.4-0.6L4,0.1c-0.0878,0-0.118,0.0179-0.2001,0.1&#xA;&#x9;L3.3999,1.1z M5.5,3C4.7,3,4,3.7,4,4.5S4.7,6,5.5,6S7,5.3,7,4.5S6.2999,3,5.5,3z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"grocery-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"rect7842-7\" d=\"M9.75,1.5C9.7464,1.4999,9.4324,1.4942,9.1191,1.6875C8.8041,1.8819,8.5,2.3013,8.5,3H8.2539H1l0.75,3.5&#xA;&#x9;C1.8571,7,2.5,7,2.5,7h6c0,0-0.0027,0.2466-0.1523,0.4961S7.9306,8,7.25,8H2C1.6619,7.9952,1.6619,8.5048,2,8.5h1.25h4&#xA;&#x9;c0.8194,0,1.302-0.3705,1.5273-0.7461C9.0027,7.3784,9,7,9,7V3c0-0.567,0.1959-0.7725,0.3809-0.8867&#xA;&#x9;C9.5659,1.9991,9.7461,2,9.7461,2C9.7474,2,9.7487,2,9.75,2h0.5c0.3381,0.0048,0.3381-0.5048,0-0.5H9.7539H9.75z M7.25,8.5&#xA;&#x9;C6.8358,8.5,6.5,8.8358,6.5,9.25S6.8358,10,7.25,10S8,9.6642,8,9.25S7.6642,8.5,7.25,8.5z M3.25,8.5C2.8358,8.5,2.5,8.8358,2.5,9.25&#xA;&#x9;S2.8358,10,3.25,10S4,9.6642,4,9.25S3.6642,8.5,3.25,8.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" id=\"grocery-15\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <g id=\"g3\">\n    <path d=\"M 13.199219 1.5 C 13.199219 1.5 11.808806 1.4588 11.253906 2 C 10.720406 2.5202 10.5 2.9177 10.5 4 L 1.1992188 4 L 2.59375 8.8144531 C 2.59725 8.8217531 2.6036219 8.8287375 2.6074219 8.8359375 C 2.8418219 9.4932375 3.4545469 9.9666406 4.1855469 9.9941406 C 4.1885469 9.9954406 4.1992187 10 4.1992188 10 L 10.699219 10 L 10.699219 10.199219 C 10.699219 10.199219 10.7 10.500391 10.5 10.900391 C 10.3 11.300391 10.200391 11.5 9.4003906 11.5 L 2.9003906 11.5 C 1.9003906 11.5 1.9003906 13 2.9003906 13 L 4.0996094 13 L 4.1992188 13 L 9.0996094 13 L 9.1992188 13 L 9.3007812 13 C 10.500781 13 11.399219 12.299609 11.699219 11.599609 C 11.999219 10.899609 12 10.300781 12 10.300781 L 12 10 L 12 4 C 12 3.4764 12.228619 3 12.699219 3 L 13.25 3 C 13.6642 3 14 2.6642 14 2.25 C 14 1.8358 13.6642 1.5 13.25 1.5 L 13.199219 1.5 z M 9.1992188 13 C 8.5992188 13 8.1992188 13.4 8.1992188 14 C 8.1992188 14.6 8.5992187 15 9.1992188 15 C 9.7992187 15 10.199219 14.6 10.199219 14 C 10.199219 13.4 9.7992188 13 9.1992188 13 z M 4.1992188 13 C 3.5992188 13 3.1992188 13.4 3.1992188 14 C 3.1992188 14.6 3.5992187 15 4.1992188 15 C 4.7992188 15 5.1992188 14.6 5.1992188 14 C 5.1992188 13.4 4.7992187 13 4.1992188 13 z \" id=\"path5\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"hairdresser-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path6232\" d=\"M1.5,2C0.6716,2,0,2.6716,0,3.5v1C0,5,0.5,5,0.5,5h1C3,5,4,5.5,4,5.5S3,6,1.5,6h-1C0.5,6,0,6,0,6.5v1&#xA;&#x9;C0,8.3284,0.6716,9,1.5,9S3,8.3284,3,7.5V6.8848C3.8082,6.727,4.5865,6.4316,5.2246,6.1426L8.5,8C10,8.75,11,8,11,8L6.5,5.5L11,3&#xA;&#x9;c0,0-1-0.75-2.5,0L5.2246,4.8574C4.5866,4.5684,3.8081,4.2731,3,4.1152V3.5039C3,3.5026,3,3.5013,3,3.5C3,2.6716,2.3284,2,1.5,2z&#xA;&#x9; M1.5,3C1.7761,3,2,3.2239,2,3.5S1.7761,4,1.5,4S1,3.7761,1,3.5S1.2239,3,1.5,3z M5.2324,5.25c0.0059-0.0002,0.0117-0.0002,0.0176,0&#xA;&#x9;c0.1381,0,0.25,0.1119,0.25,0.25S5.3881,5.75,5.25,5.75S5,5.6381,5,5.5C4.9997,5.3685,5.1013,5.2592,5.2324,5.25z M1.5,7&#xA;&#x9;C1.7761,7,2,7.2239,2,7.5S1.7761,8,1.5,8S1,7.7761,1,7.5S1.2239,7,1.5,7z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"hairdresser-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M15,3c0,0-2-0.6-3.5,0.5l-4.3,3C6.4,5.9,5.2,5.2,4,4.8V4c0-1.1-0.9-2-2-2C0.9,2,0,2.9,0,4v1.5&#xA;&#x9;C0,6,0.5,6,0.5,6H2h0.5C4.5,6,6,7.5,6,7.5S4.5,9,2.5,9H2H0.5C0.5,9,0,9,0,9.5V11c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2v-0.8&#xA;&#x9;c1.2-0.4,2.4-1.1,3.2-1.7l4.3,3C13,12.6,15,12,15,12L8.5,7.5L15,3z M3,5H2H1V4c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1V5z M3,11&#xA;&#x9;c0,0.6-0.4,1-1,1c-0.6,0-1-0.4-1-1v-1h1h1V11z M7.25,8c-0.2761,0-0.5-0.2239-0.5-0.5S6.9739,7,7.25,7s0.5,0.2239,0.5,0.5&#xA;&#x9;S7.5261,8,7.25,8z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"harbor-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path5263\" d=\"M5.5,0C4.1193,0,3,1.1193,3,2.5c0.0018,1.0981,0.7217,2.0466,1.75,2.3711V9.416&#xA;&#x9;c-0.659-0.115-1.3381-0.3753-1.8926-0.8574C2.0886,7.8901,1.5,6.8297,1.5,5c0.0055-0.4226-0.3391-0.7664-0.7617-0.7598&#xA;&#x9;C0.3248,4.2467-0.0054,4.5865,0,5c0,2.1703,0.7731,3.7349,1.873,4.6914S4.3333,11,5.5,11s2.527-0.3521,3.627-1.3086S11,7.1703,11,5&#xA;&#x9;c0.0143-1.0142-1.5143-1.0142-1.5,0c0,1.8297-0.5886,2.8901-1.3574,3.5586C7.5881,9.0407,6.909,9.3011,6.25,9.416V4.875&#xA;&#x9;C7.2795,4.55,7.9999,3.5995,8,2.5C8,1.1193,6.8807,0,5.5,0z M5.5,1.5c0.5523,0,1,0.4477,1,1s-0.4477,1-1,1s-1-0.4477-1-1&#xA;&#x9;S4.9477,1.5,5.5,1.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"harbor-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path5263\" d=\"M7.5,0C5.5,0,4,1.567,4,3.5c0.0024,1.5629,1.0397,2.902,2.5,3.3379v6.0391&#xA;&#x9;c-0.9305-0.1647-1.8755-0.5496-2.6484-1.2695C2.7992,10.6273,2.002,9.0676,2.002,6.498c0.0077-0.5646-0.4531-1.0236-1.0176-1.0137&#xA;&#x9;C0.4329,5.493-0.0076,5.9465,0,6.498c0,3.0029,1.0119,5.1955,2.4902,6.5723C3.9685,14.4471,5.8379,15,7.5,15&#xA;&#x9;c1.6656,0,3.535-0.5596,5.0117-1.9395S14.998,9.4868,14.998,6.498c0.0648-1.3953-2.0628-1.3953-1.998,0&#xA;&#x9;c0,2.553-0.7997,4.1149-1.8535,5.0996C10.3731,12.3203,9.4288,12.7084,8.5,12.875V6.8418C9.9607,6.4058,10.9986,5.0642,11,3.5&#xA;&#x9;C11,1.567,9.5,0,7.5,0z M7.5,2C8.3284,2,9,2.6716,9,3.5S8.3284,5,7.5,5S6,4.3284,6,3.5S6.6716,2,7.5,2z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"hardware-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <g id=\"GaLBQ6.tif_2_\">\n    <g>\n      <path d=\"M1.2174,8.3652C0.8535,8.8127,0.9497,9.4896,1.423,9.8184c0.4178,0.2902,0.9442,0.238,1.3172-0.1347&#xA;&#x9;&#x9;&#x9;c1.2813-1.2802,2.562-2.5611,3.841-3.8436C6.6447,5.7764,6.6952,5.7546,6.788,5.7863c0.4279,0.1458,0.8659,0.1627,1.3055,0.0611&#xA;&#x9;&#x9;&#x9;c1.3402-0.3096,2.1605-1.6406,1.8354-2.9751C9.906,2.7783,9.8722,2.6868,9.8351,2.567C9.7998,2.6112,8.8376,3.5803,8.3764,4.0471&#xA;&#x9;&#x9;&#x9;c-0.0587,0.0595-0.1167,0.0784-0.195,0.0665C8.0791,4.0979,7.2868,4.034,7,4C6.9522,3.5907,6.9268,3.1638,6.8846,2.7619&#xA;&#x9;&#x9;&#x9;c-0.004-0.0378,0.0229-0.0894,0.0517-0.1185C7.2869,2.2885,8.2679,1.31,8.4116,1.1666C8.1,1.0195,7.5652,0.9615,7.1668,1.0263&#xA;&#x9;&#x9;&#x9;c-1.5072,0.245-2.4274,1.7518-1.95,3.1974c0.0262,0.0795,0.0098,0.1259-0.0469,0.1824L1.2174,8.3652z\"/>\n    </g>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"hardware-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M13.7919,3.2619c0,0-1.676,1.675-2.1163,2.1208c-0.085,0.0861-0.1688,0.1135-0.282,0.0961&#xA;&#x9;c-0.1481-0.0226-0.2974-0.038-0.4462-0.0558c-0.4072-0.0485-0.8145-0.0966-1.2292-0.1458C9.649,4.6852,9.5787,4.1049,9.5177,3.5236&#xA;&#x9;C9.512,3.4689,9.5509,3.3943,9.5925,3.3522c0.5071-0.5134,1.9261-1.9287,2.134-2.136c-0.4508-0.2129-1.2243-0.2968-1.8007-0.2031&#xA;&#x9;c-2.1801,0.3543-3.5112,2.534-2.8206,4.625C7.1432,5.753,7.1194,5.8201,7.0374,5.902C5.1891,7.7454,3.3436,9.5914,1.498,11.4374&#xA;&#x9;c-0.0616,0.0616-0.1231,0.124-0.1779,0.1913c-0.5264,0.6473-0.3873,1.6264,0.2974,2.102c0.6044,0.4197,1.3658,0.3442,1.9053-0.1948&#xA;&#x9;c1.8534-1.8519,3.7059-3.7047,5.556-5.5598C9.1707,7.884,9.2437,7.8526,9.3779,7.8983c0.6189,0.2109,1.2524,0.2354,1.8884,0.0884&#xA;&#x9;c1.9386-0.4478,3.1251-2.3732,2.6549-4.3034C13.8895,3.5532,13.843,3.4244,13.7919,3.2619z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"heart-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M10.06,4.76c-1.1682,1.9568-2.5794,3.7577-4.2,5.36c-0.1865,0.1961-0.4967,0.2038-0.6927,0.0173&#xA;&#x9;C5.1614,10.1316,5.1556,10.1259,5.15,10.12C3.5259,8.5183,2.1113,6.7173,0.94,4.76c-1.82-3.64,2.8-6.07,4.56-2.43&#xA;&#x9;C7.26-1.31,11.88,1.12,10.06,4.76z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"heart-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#xA;&#x9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"heliport-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path10415\" d=\"M3,1&#xA;&#x9;C2.723,1,2.5,1.223,2.5,1.5S2.7236,1.9824,3,2h3v2H2.9141h-0.002C2.7004,3.4014,2.1349,3.0009,1.5,3C0.6716,3,0,3.6716,0,4.5&#xA;&#x9;S0.6716,6,1.5,6c0.3794-0.0007,0.7444-0.1452,1.0215-0.4043L4.5,8.5c0.6812,1,1.5,1,2,1h3.5352c0,0,0.9648-0.0008,0.9648-1v-1&#xA;&#x9;c0-0.5-0.5-1-0.5-1l-2-2c0,0-0.5-0.5-1-0.5H7V2h3c0.277,0,0.5-0.223,0.5-0.5S10.277,1,10,1H3z M1.5,4C1.7761,4,2,4.2239,2,4.5&#xA;&#x9;S1.7761,5,1.5,5S1,4.7761,1,4.5S1.2239,4,1.5,4z M7.75,5C7.75,5,8,5,8.5,5.5L10,7H7.5C7.5,7,7,7,7,6.5v-1C7,5.5,7,5,7.5,5H7.75z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"heliport-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path10415\" d=\"M4,2C3,2,3,3,4,3h4v1C7.723,4,7.5,4.223,7.5,4.5V5H5H3.9707H3.9316&#xA;&#x9;C3.7041,4.1201,2.9122,3.5011,2,3.5c-1.1046,0-2,0.8954-2,2s0.8954,2,2,2c0.3722-0.001,0.7368-0.1058,1.0527-0.3027L5.5,10.5&#xA;&#x9;C6.5074,11.9505,8.3182,12,9,12h5c0,0,1,0,1-1v-0.9941C15,9.2734,14.874,8.874,14.5,8.5l-3-3c0,0-0.5916-0.5-1.2734-0.5H9.5V4.5&#xA;&#x9;C9.5,4.223,9.277,4,9,4V3h4c1,0,1-1,0-1C13,2,4,2,4,2z M2,4.5c0.5523,0,1,0.4477,1,1s-0.4477,1-1,1s-1-0.4477-1-1&#xA;&#x9;C1,4.9477,1.4477,4.5,2,4.5z M10,6c0.5,0,0.7896,0.3231,1,0.5L13.5,9H10c0,0-1,0-1-1V7C9,7,9,6,10,6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\" id=\"home-11\">\n  <path d=\"M10.0015,4.7507c0,0.13807-0.11193,0.25-0.25,0.25H1.25c-0.13807,0-0.25-0.11193-0.25-0.25&#xA;&#x9;c-0.00054-0.07163,0.02839-0.14033,0.08-0.19l4.2378-3.4545l0.016-0.016c0.10112-0.09209,0.2577-0.08493,0.35,0.016l2.3174,1.8892&#xA;&#x9;V1.5c0-0.27614,0.22386-0.5,0.5-0.5s0.5,0.22386,0.5,0.5v2.31l0.92,0.75C9.9731,4.60979,10.00215,4.67878,10.0015,4.7507z M2,9.7514&#xA;&#x9;c-0.00111,0.13696,0.10902,0.24889,0.24598,0.25c0.00001,0,0.00001,0,0.00002,0h2.7547v-2h1v2h2.7526&#xA;&#x9;c0.13697,0,0.248-0.11103,0.248-0.248l0,0l0,0V6.0009H2V9.7514z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\" id=\"home-15\">\n  <path d=\"M2,13.7478c0,0.13807,0.11193,0.25,0.25,0.25h3.749v-3h3v3h3.749c0.13807,0,0.25-0.11193,0.25-0.25V7.9987H2&#xA;&#x9;C2,7.9987,2,13.7478,2,13.7478z M13.93,6.5778l-0.9319-0.8189V2c0-0.55228-0.44771-1-1-1s-1,0.44772-1,1v2L7.6808,1.09&#xA;&#x9;C7.5863,0.9897,7.42846,0.98478,7.3279,1.079L7.3169,1.09L1.0678,6.553C0.9734,6.65376,0.97856,6.81197,1.07932,6.90637&#xA;&#x9;C1.12478,6.94896,1.18451,6.97304,1.2468,6.9739L3,6.9989h10.7468c0.13807,0.00046,0.25037-0.1111,0.25083-0.24917&#xA;&#x9;C13.99784,6.68592,13.97365,6.62445,13.93,6.5779V6.5778z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"horse-riding-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M4,1A1,1,0,1,1,5,2,1,1,0,0,1,4,1Zm6.88,3.5L9,3V2.5L7,5H6L7,6V7.014a.5.5,0,1,1-1,0V6.5L4,5H3a1,1,0,0,0-.8.446A1.189,1.189,0,0,0,1.247,5,1.076,1.076,0,0,0,0,5.988C0,7.3.635,7.471.635,7.471a.33.33,0,0,0,.115.023A.253.253,0,0,0,1,7.25V6a.49.49,0,0,1,.48-.5H1.5A.5.5,0,0,1,2,6V8.014l-.3.6a1.609,1.609,0,0,0-.2.6v1.542A.244.244,0,0,0,1.744,11,.255.255,0,0,0,2,10.756V9.514a.367.367,0,0,1,.1-.3l.9-1.2V9l.467,1.816A.256.256,0,0,0,3.709,11a.25.25,0,0,0,.25-.25v-.016l-.242-1.61a.6.6,0,0,1,.025-.236L3.8,8.714,4,8H6V9l.466,1.816A.256.256,0,0,0,6.709,11a.25.25,0,0,0,.25-.25L6.718,9.124a.6.6,0,0,1,.025-.236L7,8a.877.877,0,0,0,.934-.661L8.5,4.5a.6.6,0,0,0,.71.454.562.562,0,0,0,.143-.07l.9.116a.721.721,0,0,0,.392.1A.331.331,0,0,0,11,4.784.406.406,0,0,0,10.88,4.5ZM6,3.5A.51.51,0,0,0,5.5,3h-1a.482.482,0,0,0-.5.5V5H6Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"horse-riding-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M6,1A1,1,0,1,1,7,2,1,1,0,0,1,6,1ZM8,3.5a.484.484,0,0,0,0-.058A.472.472,0,0,0,7.5,3h-1a.484.484,0,0,0-.058,0A.472.472,0,0,0,6,3.5V7H8Zm6.85,3.644L12.8,4.8l.085-.509a.478.478,0,0,0,.008-.063.25.25,0,0,0-.25-.25.346.346,0,0,0-.158.056L9,7H8L9,8V9.5a.5.5,0,0,1-1,0v-1L6,7H4a1.5,1.5,0,0,0-1.243.661A1.466,1.466,0,0,0,1.563,7H1.5A1.449,1.449,0,0,0,0,8.4v.086A3.781,3.781,0,0,0,.559,10.4a.278.278,0,0,0,.191.1A.25.25,0,0,0,1,10.25V9s-.02-.924.753-1c.5-.048.747.253.747.5V11L2,13v1.75a.25.25,0,0,0,.25.25.254.254,0,0,0,.25-.234V13L4,11v1l.5,2.8a.255.255,0,0,0,.246.2A.25.25,0,0,0,5,14.754H5L4.855,12.3,5.5,11H8v1l.508,2.813A.257.257,0,0,0,8.75,15,.25.25,0,0,0,9,14.75V12l.367-1a1.155,1.155,0,0,0,.543-.6l2.161-3.767a.863.863,0,0,0,1.023.4l1.066.818a.591.591,0,0,0,.35.135.487.487,0,0,0,.475-.4A.552.552,0,0,0,14.85,7.144Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"hospital-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M10,4H7V1C6.9616,0.4644,6.5356,0.0384,6,0H5C4.4644,0.0384,4.0384,0.4644,4,1v3H1C0.4644,4.0384,0.0384,4.4644,0,5v1&#xA;&#x9;c0.0384,0.5356,0.4644,0.9616,1,1h3v3c0.0384,0.5356,0.4644,0.9616,1,1h1c0.5356-0.0384,0.9616-0.4644,1-1V7h3&#xA;&#x9;c0.5356-0.0384,0.9616-0.4644,1-1V5C11,4.4477,10.5523,4,10,4z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"hospital-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"rect4194\" d=\"M7,1C6.4,1,6,1.4,6,2v4H2C1.4,6,1,6.4,1,7v1&#xA;&#x9;c0,0.6,0.4,1,1,1h4v4c0,0.6,0.4,1,1,1h1c0.6,0,1-0.4,1-1V9h4c0.6,0,1-0.4,1-1V7c0-0.6-0.4-1-1-1H9V2c0-0.6-0.4-1-1-1H7z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"ice-cream-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M4,6c0.541,0.0007,1.0676-0.1748,1.5-0.5C5.9324,5.8252,6.459,6.0007,7,6l-1,4.69c-0.1082,0.2541-0.4019,0.3723-0.656,0.264&#xA;&#x9;c-0.1188-0.0506-0.2134-0.1452-0.264-0.264L4,6z M7,2H6.91c0.2826-0.7787-0.1195-1.6391-0.8982-1.9218S4.3726,0.1978,4.09,0.9765&#xA;&#x9;C3.97,1.3071,3.97,1.6694,4.09,2H4C3.1716,2,2.5,2.6716,2.5,3.5S3.1716,5,4,5s1.5-0.6716,1.5-1.5l0,0l0,0l0,0&#xA;&#x9;C5.5,4.3284,6.1716,5,7,5s1.5-0.6716,1.5-1.5S7.8284,2,7,2z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"ice-cream-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M5.44,8.17c0.7156,0.0006,1.414-0.2194,2-0.63C7.9037,7.8634,8.4391,8.0693,9,8.14h0.44L8,13.7&#xA;&#x9;c-0.1082,0.2541-0.4019,0.3723-0.656,0.264C7.2252,13.9134,7.1306,13.8188,7.08,13.7L5.44,8.17z\"/>\n  <path d=\"M11.44,4.67c0,1.1046-0.8954,2-2,2s-2-0.8954-2-2l0,0l0,0l0,0c0,1.1046-0.8954,2-2,2s-2-0.8954-2-2s0.8954-2,2-2h0.12&#xA;&#x9;C5.1756,1.6345,5.7035,0.4834,6.739,0.099s2.1866,0.1435,2.571,1.179c0.1667,0.449,0.1667,0.9429,0,1.3919h0.13&#xA;&#x9;C10.5446,2.67,11.44,3.5654,11.44,4.67z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"industry-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M10,1v8H1V6l2.11-1.78C3.43,3.9,4,3.91,4,4.36V6l2.13-1.86c0.1854-0.2047,0.5016-0.2203,0.7062-0.0349&#xA;&#x9;C6.9472,4.2056,7.0073,4.3505,7,4.5V8h2V1H10z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"industry-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M14,1v12H1V8.72c0.0016-0.1419,0.0634-0.2764,0.17-0.37l3-3.22c0.2074-0.1823,0.5234-0.1618,0.7056,0.0456&#xA;&#x9;C4.9568,5.268,5.0011,5.387,5,5.51v3l3.16-3.37c0.2025-0.1878,0.5188-0.1759,0.7066,0.0266C8.9532,5.2599,9.0009,5.3827,9,5.51V11h3&#xA;&#x9;V1H14z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"information-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"rect8399\" d=\"&#xA;&#x9;M5.5989,0.9391c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1S6.1989,0.9391,5.5989,0.9391z M3,4L2.9989,4.7391&#xA;&#x9;C2.9989,4.7391,4.5,4.6353,4.5,6v1.5c0,1.5-1.5011,1.7391-1.5011,1.7391L3,10h5.2L8.1989,9.2391c0,0-1.2,0-1.2-1.5L7,5c0,0,0-1-1-1&#xA;&#x9;H3z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"information-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"rect8399\" d=\"M7.5,1&#xA;&#x9;C6.7,1,6,1.7,6,2.5S6.7,4,7.5,4S9,3.3,9,2.5S8.3,1,7.5,1z M4,5v1c0,0,2,0,2,2v2c0,2-2,2-2,2v1h7v-1c0,0-2,0-2-2V6c0-0.5-0.5-1-1-1H4&#xA;&#x9;z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"jewelry-store-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M7.574,3.6944L6.7227,4.3329C7.4811,4.7628,8,5.5677,8,6.5C8,7.8785,6.8785,9,5.5,9S3,7.8785,3,6.5&#xA;&#x9;c0-0.9323,0.5189-1.7372,1.2773-2.1671L3.426,3.6944C2.5652,4.332,2,5.3465,2,6.5C2,8.433,3.567,10,5.5,10S9,8.433,9,6.5&#xA;&#x9;C9,5.3465,8.4348,4.332,7.574,3.6944z M7.5,2.5L6.5,1h-2l-1,1.5l2,1.5L7.5,2.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"jewelry-store-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M12,8.5c0,2.4853-2.0147,4.5-4.5,4.5S3,10.9853,3,8.5c0-1.8483,1.1164-3.4329,2.7099-4.1255l0.1761,0.137l0.7739,0.6019&#xA;&#x9;C5.1366,5.4922,4,6.8611,4,8.5C4,10.4299,5.5701,12,7.5,12S11,10.4299,11,8.5c0-1.6389-1.1366-3.0078-2.6599-3.3866l0.95-0.7388&#xA;&#x9;C10.8836,5.0672,12,6.6517,12,8.5z M7.5,4.5L10,2.5555L9,1H6L5,2.5555l1.5,1.1667L7.5,4.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"karaoke-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M4.5,4.4l-2,2l-1,1C1,7.8,0.9,8.5,1.2,9.1l0.6,0.7c0.6,0.4,1.3,0.2,1.7-0.3l1-1l2-2L4.5,4.4z M3.1,8.5L2.5,7.8l2-2l0.7,0.7&#xA;&#x9;L3.1,8.5z M5,2l1-1h3l1,1v3L9,6H8L5,3V2z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" id=\"karaoke-15\">\n  <g>\n    <path d=\"M12.1,2.952A2.988,2.988,0,0,0,6.99,4.917l3.142,3.142A2.988,2.988,0,0,0,12.1,2.952Z\"/>\n    <path d=\"M4.672,8.255,2.55,10.377a1,1,0,0,0,0,1.414l.707.707a1,1,0,0,0,1.414,0l2.121-2.121L8.914,8.255,6.793,6.134Zm.741,2.087-.707-.707L6.793,7.548l.707.707Z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"landmark-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.5,9H8V5h1l1-2C9.3,3.1,8.7,3.1,8,3C7.3,2.7,6.6,2.4,6,2V1.5C6,1.2,5.8,1,5.5,1S5,1.2,5,1.5V2C4.4,2.4,3.7,2.7,3,3&#xA;&#x9;C2.3,3.1,1.7,3.1,1,3l1,2h1v4H1.5C1.2,9,1,9.2,1,9.5S1.2,10,1.5,10h8C9.8,10,10,9.8,10,9.5S9.8,9,9.5,9z M7,9H4V5h3V9z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"landmark-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M12.5,12H12v-0.5c0-0.3-0.2-0.5-0.5-0.5H11V6h1l1-2c-1,0.1-2,0.1-3,0C9.2,3.4,8.6,2.8,8,2V1.5C8,1.2,7.8,1,7.5,1&#xA;&#x9;S7,1.2,7,1.5V2C6.4,2.8,5.8,3.4,5,4C4,4.1,3,4.1,2,4l1,2h1v5c0,0-0.5,0-0.5,0C3.2,11,3,11.2,3,11.5V12H2.5C2.2,12,2,12.2,2,12.5V13&#xA;&#x9;h11v-0.5C13,12.2,12.8,12,12.5,12z M7,11H5V6h2V11z M10,11H8V6h2V11z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"landuse-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M1,4.749.995,2.057a.251.251,0,0,1,.1-.2L3.344.057A.251.251,0,0,1,3.657.052l2.249,1.8a.251.251,0,0,1,.094.2v2.7A.251.251,0,0,1,5.751,5h-1.5A.251.251,0,0,1,4,4.749V3H3V4.752A.251.251,0,0,1,2.746,5h-1.5A.247.247,0,0,1,1,4.749Zm4.753,2.6h0a.248.248,0,0,0-.173.072L4,9V6.5a.5.5,0,0,0-1,0V9H2V6.5a.5.5,0,0,0-1,0v4.25a.25.25,0,0,0,.25.25h4.5A.249.249,0,0,0,6,10.752V7.6A.25.25,0,0,0,5.753,7.347ZM11,3.253v6.5a.247.247,0,0,1-.247.247H7.247A.247.247,0,0,1,7,9.753v-6.5A.252.252,0,0,1,7.252,3H8V2.248A.248.248,0,0,1,8.248,2H9.754A.246.246,0,0,1,10,2.246V3h.747A.253.253,0,0,1,11,3.253ZM10,8H8V9h2Zm0-2H8V7h2Zm0-2H8V5h2Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"landuse-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M8.911,3.854A.248.248,0,0,1,9,4.044V7.75A.25.25,0,0,1,8.75,8H6.25A.25.25,0,0,1,6,7.75V6H5V7.75A.25.25,0,0,1,4.75,8H2.25A.25.25,0,0,1,2,7.75v-3.7a.248.248,0,0,1,.089-.19L5.343,1.132a.245.245,0,0,1,.315,0ZM7.752,9.5a.248.248,0,0,0-.138.042L5,11.5H4v-2a.5.5,0,0,0-1,0v2H2v-2a.5.5,0,0,0-1,0v4.25a.25.25,0,0,0,.25.25h6.5A.25.25,0,0,0,8,13.75v-4A.248.248,0,0,0,7.752,9.5ZM14,6.245v6.5a.253.253,0,0,1-.253.253H10.253A.253.253,0,0,1,10,12.747V6.25A.249.249,0,0,1,10.25,6H11V5.249A.249.249,0,0,1,11.249,5h1.5A.253.253,0,0,1,13,5.253V6h.755A.245.245,0,0,1,14,6.245ZM13,11H11v1h2Zm0-2H11v1h2Zm0-2H11V8h2Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"laundry-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path3291\" d=\"M5,0L4,2H2c0,0-1,0-1,1v7c0,0,0,1,1,1h7c1,0,1-1,1-1V1c0-1-1-1-1-1H5z M6,1h3v1H6V1z M5.5,4&#xA;&#x9;C6.8807,4,8,5.1193,8,6.5S6.8807,9,5.5,9S3,7.8807,3,6.5S4.1193,4,5.5,4z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"laundry-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path3291-2\" d=\"M8,1L6,3H3c0,0-1,0-1,1v9c0,1,1,1,1,1h9c0,0,1,0,1-1V2c0-1-1-1-1-1&#xA;&#x9;S8,1,8,1z M8.5,2h2C10.777,2,11,2.223,11,2.5S10.777,3,10.5,3h-2C8.223,3,8,2.777,8,2.5S8.223,2,8.5,2z M7.5,6&#xA;&#x9;c1.6569,0,3,1.3431,3,3s-1.3431,3-3,3s-3-1.3431-3-3S5.8431,6,7.5,6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"library-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path5\" d=\"&#xA;&#x9;M0,1v7c3.26,0,5.4902,2,5.4902,2S7.76,8,11,8V1C7,1,5.4902,2.7246,5.4902,2.7246S4,1,0,1z M1,2c1.1953-0.0313,3.053,0.4015,4,1.3477&#xA;&#x9;L5.5,4L6,3.3477C6.9615,2.4183,8.8009,1.9878,10,2v5C8,7,6.6456,7.8564,5.4902,8.7812C4.3506,7.8533,3,7,1,7V2z M2,3.3027v0.1816&#xA;&#x9;c0.8234,0.1688,2.0997,0.6868,3,1.1758V4.4316C4.0828,3.9535,2.8241,3.46,2,3.3027z M9,3.3027C8.1759,3.46,6.9172,3.9535,6,4.4316&#xA;&#x9;v0.2285c0.9003-0.489,2.1766-1.007,3-1.1758V3.3027z M2,4.2227v0.1816c0.8217,0.1539,2.0985,0.6584,3,1.1328V5.3418&#xA;&#x9;C4.0827,4.8663,2.8238,4.3752,2,4.2227z M9,4.2227C8.1762,4.3752,6.9173,4.8663,6,5.3418v0.1953&#xA;&#x9;c0.9015-0.4744,2.1783-0.9789,3-1.1328V4.2227z M2,5.1172v0.1816c0.8216,0.1547,2.0984,0.659,3,1.1328V6.2363&#xA;&#x9;C4.0825,5.7614,2.8236,5.2707,2,5.1172z M9,5.1172C8.1764,5.2707,6.9175,5.7614,6,6.2363v0.1953&#xA;&#x9;c0.9016-0.4738,2.1784-0.9781,3-1.1328V5.1172z M2,6v0.1816C2.8201,6.322,4.097,6.811,5,7.2695V7.1191&#xA;&#x9;C4.0825,6.6445,2.8236,6.1538,2,6z M9,6C8.1764,6.1538,6.9175,6.6445,6,7.1191v0.1504C6.903,6.811,8.1799,6.322,9,6.1816V6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"library-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M7.47,4.92C7.47,4.92,5.7,3,1,3v8c4.7,0,6.47,2,6.47,2S9.3,11,14,11V3C9.3,3,7.47,4.92,7.47,4.92z M13,10&#xA;&#x9;c-1.9614,0.0492-3.8727,0.6299-5.53,1.68C5.836,10.6273,3.9432,10.0459,2,10V4c3.4,0.26,4.73,1.6,4.75,1.61l0.73,0.74L8.2,5.6&#xA;&#x9;c0,0,1.4-1.34,4.8-1.6V10z M8,10.24l-0.1-0.17c1.3011-0.5931,2.6827-0.9907,4.1-1.18v0.2c-1.3839,0.1953-2.7316,0.5929-4,1.18V10.24&#xA;&#x9;z M8,9.24L7.9,9.07C9.2016,8.4802,10.5832,8.086,12,7.9v0.2c-1.3844,0.1988-2.7321,0.5997-4,1.19V9.24z M8,8.24L7.9,8.07&#xA;&#x9;C9.2015,7.48,10.5831,7.0857,12,6.9v0.2c-1.3845,0.1981-2.7323,0.599-4,1.19V8.24z M8,7.24L7.9,7.07&#xA;&#x9;C9.2013,6.4794,10.583,6.0851,12,5.9v0.2c-1.3844,0.1986-2.7321,0.5996-4,1.19V7.24z M6.9,10.24C5.6639,9.6641,4.3499,9.2733,3,9.08&#xA;&#x9;v-0.2c1.3872,0.2028,2.7358,0.6141,4,1.22L6.9,10.24z M6.9,9.24C5.6629,8.671,4.3488,8.2869,3,8.1V7.9&#xA;&#x9;c1.386,0.2027,2.7341,0.6105,4,1.21L6.9,9.24z M6.9,8.24C5.6631,7.6705,4.3489,7.2863,3,7.1V6.9c1.3868,0.199,2.7354,0.607,4,1.21&#xA;&#x9;L6.9,8.24z M6.9,7.24C5.6629,6.671,4.3488,6.2869,3,6.1V5.9c1.386,0.2024,2.7342,0.6102,4,1.21L6.9,7.24z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"lighthouse-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M7,6l1,5H3l1-5h1.2V2H4.28C4.1042,1.9823,3.9759,1.8255,3.9936,1.6496C4.0042,1.544,4.0665,1.4504,4.16,1.4L5.38,1&#xA;&#x9;c0.0762-0.0347,0.1638-0.0347,0.24,0l1.22,0.4c0.1555,0.0839,0.2136,0.2781,0.1296,0.4336C6.9192,1.927,6.8257,1.9894,6.72,2H5.81v4&#xA;&#x9;H7z M8,3v0.5L11,3V2.5L8,3z M8,5.5L11,6V5.5L8,5V5.5z M3,3L0,2.5V3l3,0.5V3z M3,5L0,5.5V6l3-0.5V5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"lighthouse-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M4.5,6L0,7V6.5l4.5-1V6z M4.5,3.5L0,2.5V3l4.5,1V3.5z M10.5,3.5V4L15,3V2.5L10.5,3.5z M10.5,6L15,7V6.5l-4.5-1V6z M8,7V2&#xA;&#x9;h2.5c0.2761,0.0552,0.5448-0.1239,0.6-0.4c0.0552-0.2761-0.1239-0.5448-0.4-0.6l-3-1C7.5696-0.0586,7.4204-0.0586,7.29,0l-3,1&#xA;&#x9;c-0.2761,0.0552-0.4552,0.3239-0.4,0.6S4.2139,2.0552,4.49,2H7v5H5l-2,7h9l-2-7H8z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"lodging-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"rect6430\" d=\"M1.5,2C1.2239,2,1,2.2239,1,2.5v6C1,8.7761,1.2239,9,1.5,9S2,8.7761,2,8.5V8h7v0.5C9,8.7761,9.2239,9,9.5,9&#xA;&#x9;S10,8.7761,10,8.5v-1C10,7.2239,9.7761,7,9.5,7H2V2.5C2,2.2239,1.7761,2,1.5,2z M3.5,2c-0.5523,0-1,0.4477-1,1s0.4477,1,1,1&#xA;&#x9;s1-0.4477,1-1S4.0523,2,3.5,2z M6,3C5.4477,3,5,3.4477,5,4v1H3C2.7239,5,2.5,5.2239,2.5,5.5S2.7239,6,3,6h7V5c0-1.1046-0.8954-2-2-2&#xA;&#x9;H6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"lodging-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"rect6507\" d=\"M0.5,2.5C0.2,2.5,0,2.7,0,3v7.5v2C0,12.8,0.2,13,0.5,13S1,12.8,1,12.5V11h13v1.5&#xA;&#x9;c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-2c0-0.3-0.2-0.5-0.5-0.5H1V3C1,2.7,0.8,2.5,0.5,2.5z M3.5,3C2.7,3,2,3.7,2,4.5l0,0&#xA;&#x9;C2,5.3,2.7,6,3.5,6l0,0C4.3,6,5,5.3,5,4.5l0,0C5,3.7,4.3,3,3.5,3L3.5,3z M7,4C5.5,4,5.5,5.5,5.5,5.5V7h-3C2.2,7,2,7.2,2,7.5v1&#xA;&#x9;C2,8.8,2.2,9,2.5,9H6h9V6.5C15,4,12.5,4,12.5,4H7z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"logging-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.25,1a.409.409,0,0,0-.11.01.668.668,0,0,0-.44.24L8,2H7.263A.25.25,0,0,0,7,2.236a.243.243,0,0,0,0,.025V3H6.263a.256.256,0,0,0-.19.073A.248.248,0,0,0,6,3.252V4H5.237a.275.275,0,0,0-.164.073A.248.248,0,0,0,5,4.252V5H4.249a.257.257,0,0,0-.176.075l.178.178.5.5L8.5,2H9v.5L5.25,6.25l.5.5.177.177A.249.249,0,0,0,6,6.749V6h.751a.25.25,0,0,0,.176-.073A.266.266,0,0,0,7,5.759V5h.748A.248.248,0,0,0,8,4.756H8V4h.751a.267.267,0,0,0,.176-.073A.258.258,0,0,0,9,3.733V3l.78-.72a.734.734,0,0,0,.21-.42L10,1.75A.755.755,0,0,0,9.25,1ZM2,8,1.569,6.8h0a1.422,1.422,0,0,1-.07-.465V6.25A.25.25,0,0,1,1.749,6h1a.25.25,0,0,0,0-.5H1.5A.5.5,0,0,0,1,6v.415a2,2,0,0,0,.106.642L1.57,8.43a1.841,1.841,0,0,0,.1.24,1.551,1.551,0,0,0,.624.643,1.342,1.342,0,0,0,1.315,0C3.869,9.122,5,8,5,8L3.5,6.5Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"logging-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M13.91,3.41,13.5,3l.2-.28c.02-.03.04-.05.06-.08A.969.969,0,0,0,14,1.99a1,1,0,0,0-1.62-.77c-.03.02-.06.05-.09.07L12,1.5l-.386-.386a.354.354,0,0,0-.525.475l.417.417-.5.5-.392-.392a.354.354,0,0,0-.525.475L10.5,3l-.5.5-.381-.381a.354.354,0,1,0-.528.472h0l.028.028L9.5,4,9,4.5l-.395-.395a.354.354,0,0,0-.517.483L8.5,5,8,5.5l-.365-.365a.354.354,0,0,0-.556.439h0C7.1,5.6,7.508,6,7.508,6L7,6.5l-.394-.392a.392.392,0,0,0-.5-.028.384.384,0,0,0-.028.5L6.1,6.6l.4.4L6,7.5l-.4-.4a.37.37,0,0,0-.5,0L6.248,8.244,12.09,2.41,12.5,2H13v.5l-.41.41L6.751,8.749,7.9,9.9a.355.355,0,0,0,0-.5l-.008-.009L7.5,9,8,8.5l.384.384a.354.354,0,0,0,.528-.472L8.5,8,9,7.5l.38.38a.354.354,0,0,0,.528-.472l-.02-.02L9.5,7l.5-.5.377.377A.35.35,0,0,0,10.64,7a.347.347,0,0,0,.252-.6L10.5,6l.5-.5.38.38a.354.354,0,0,0,.528-.472L11.88,5.38,11.5,5l.5-.5.381.381a.354.354,0,0,0,.528-.472l-.025-.025L12.5,4l.5-.5.382.382a.354.354,0,0,0,.528-.472ZM4.39,7.916C3.893,7.419,3.641,7,3,7H1.5a.5.5,0,0,0-.5.5v3A2.19,2.19,0,0,0,1.5,12l.815.811A2.251,2.251,0,0,0,5.493,13h0L7.5,11ZM3.5,10,2.262,11.238A1.3,1.3,0,0,1,2,10.5V8H3a.545.545,0,0,1,.335.194.455.455,0,0,1,.165.418Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"marker-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path4133\" d=\"M5.5-0.0176c-1.7866,0-3.8711,1.0918-3.8711,3.8711&#xA;&#x9;C1.6289,5.7393,4.6067,9.9082,5.5,11c0.7941-1.0918,3.871-5.1614,3.871-7.1466C9.371,1.0742,7.2866-0.0176,5.5-0.0176z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"marker-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path4133\" d=\"M7.5,0C5.0676,0,2.2297,1.4865,2.2297,5.2703&#xA;&#x9;C2.2297,7.8378,6.2838,13.5135,7.5,15c1.0811-1.4865,5.2703-7.027,5.2703-9.7297C12.7703,1.4865,9.9324,0,7.5,0z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"marker-stroked-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path id=\"Layer_7\" d=\"M5.486,11l-.365-.446c-.7-.858-3.544-4.739-3.544-6.638A3.726,3.726,0,0,1,5.132.026q.167-.008.333,0A3.726,3.726,0,0,1,9.353,3.583q.007.166,0,.331c0,1.6-1.806,4.268-3.38,6.415ZM5.465.916a2.817,2.817,0,0,0-3,3c0,1.268,1.883,4.161,2.987,5.62.935-1.282,3.011-4.217,3.011-5.62a2.817,2.817,0,0,0-3-3Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"marker-stroked-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path id=\"Layer_7\" d=\"M7.5,14.941l-.4-.495c-.973-1.189-4.9-6.556-4.9-9.16A5.066,5.066,0,0,1,7.036,0q.222-.01.445,0a5.066,5.066,0,0,1,5.286,4.836q.01.225,0,.45c0,2.213-2.669,6.111-4.678,8.851ZM7.481.986a4.077,4.077,0,0,0-4.3,4.3c0,1.832,2.759,6.038,4.286,8.034,1.25-1.71,4.315-5.989,4.315-8.034a4.077,4.077,0,0,0-4.3-4.3Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"mobile-phone-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M7,2V1.5a.5.5,0,0,0-1,0V2H4A1,1,0,0,0,3,3V9a1,1,0,0,0,1,1H7A1,1,0,0,0,8,9V3A1,1,0,0,0,7,2ZM5,9H4V8H5ZM5,7H4V6H5ZM7,9H6V8H7ZM7,7H6V6H7ZM7,5H4V3H7Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"mobile-phone-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M10,2h0V1.5a.5.5,0,0,0-1,0V2H5A1,1,0,0,0,4,3V13a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM6,13H5V12H6Zm0-2H5V10H6ZM6,9H5V8H6Zm2,4H7V12H8Zm0-2H7V10H8ZM8,9H7V8H8Zm2,4H9V12h1Zm0-2H9V10h1Zm0-2H9V8h1Zm0-2.5a.5.5,0,0,1-.5.5h-4A.5.5,0,0,1,5,6.5v-3A.5.5,0,0,1,5.5,3h4a.5.5,0,0,1,.5.5Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"monument-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path11719-7\" d=\"M5.5,0L4,2v4.5h3V2L5.5,0z M3,7L2,8&#xA;&#x9;v3h7V8L8,7H3z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"monument-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path11719-7\" d=\"M7.5,0L6,2.5v7h3v-7L7.5,0z M3,11.5&#xA;&#x9;L3,15h9v-3.5L10.5,10h-6L3,11.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"mountain-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"rect3338\" d=\"M5.5176,1.2324C5.3165,1.2262,5.1271,1.328,5.0234,1.5l-4,6.6602&#xA;&#x9;C0.8007,8.5296,1.0679,8.9999,1.5,9h8c0.4321-0.0001,0.6993-0.4704,0.4766-0.8398l-4-6.6602&#xA;&#x9;C5.8793,1.3386,5.7062,1.2384,5.5176,1.2324z M5.5195,2.1543L8.4316,7H7.7598L6.416,5.7734L5.5195,7L4.625,5.7734L3.2812,7H2.6094&#xA;&#x9;C2.6094,7,5.5195,2.1543,5.5195,2.1543z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"mountain-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path5571\" d=\"M7.5,2C7.2,2,7.1,2.2,6.9,2.4&#xA;&#x9;l-5.8,9.5C1,12,1,12.2,1,12.3C1,12.8,1.4,13,1.7,13h11.6c0.4,0,0.7-0.2,0.7-0.7c0-0.2,0-0.2-0.1-0.4L8.2,2.4C8,2.2,7.8,2,7.5,2z&#xA;&#x9; M7.5,3.5L10.8,9H10L8.5,7.5L7.5,9l-1-1.5L5,9H4.1L7.5,3.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"museum-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M5.5,0L1,2v1h9V2L5.5,0z M2,4v4L1,9v1h9V9L9,8V4H2z M3.49,5c0.1354-0.0008,0.2653,0.0533,0.36,0.15L5.5,6.79l1.65-1.64&#xA;&#x9;c0.1972-0.1933,0.5137-0.1902,0.7071,0.007C7.947,5.2487,7.9982,5.3715,8,5.5v3C8,8.7761,7.7761,9,7.5,9S7,8.7761,7,8.5l0,0V6.71&#xA;&#x9;L5.85,7.85C5.6555,8.0461,5.339,8.0474,5.1429,7.8529C5.1419,7.8519,5.141,7.851,5.14,7.85L4,6.71V8.5C4,8.7761,3.7761,9,3.5,9&#xA;&#x9;S3,8.7761,3,8.5l0,0v-3C2.9999,5.2277,3.2178,5.0054,3.49,5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"museum-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path7509\" d=\"M7.5,0L1,3.4453V4h13V3.4453L7.5,0z M2,5v5l-1,1.5547V13h13v-1.4453L13,10&#xA;&#x9;V5H2z M4.6152,6c0.169-0.0023,0.3318,0.0639,0.4512,0.1836L7.5,8.6172l2.4336-2.4336c0.2445-0.2437,0.6402-0.2432,0.884,0.0013&#xA;&#x9;C10.9341,6.3017,10.9997,6.46,11,6.625v4.2422c0.0049,0.3452-0.271,0.629-0.6162,0.6338c-0.3452,0.0049-0.629-0.271-0.6338-0.6162&#xA;&#x9;c-0.0001-0.0059-0.0001-0.0118,0-0.0177V8.1328L7.9414,9.9414c-0.244,0.2433-0.6388,0.2433-0.8828,0L5.25,8.1328v2.7344&#xA;&#x9;c0.0049,0.3452-0.271,0.629-0.6162,0.6338C4.2887,11.5059,4.0049,11.2301,4,10.8849c-0.0001-0.0059-0.0001-0.0118,0-0.0177V6.625&#xA;&#x9;C4,6.2836,4.2739,6.0054,4.6152,6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"music-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.5,0.5C9.4238,0.4993,9.3484,0.5164,9.28,0.55L3.5,2C3.2239,2,3,2.2239,3,2.5v4.59&#xA;&#x9;C2.219,6.8139,1.3619,7.2232,1.0858,8.0042S1.219,9.6423,2,9.9184s1.6381-0.1332,1.9142-0.9142C3.9715,8.8423,4.0005,8.6717,4,8.5&#xA;&#x9;V5.38l5-1.25v1.46C8.219,5.3139,7.3619,5.7232,7.0858,6.5042C6.8097,7.2853,7.219,8.1423,8,8.4184s1.6381-0.1332,1.9142-0.9142&#xA;&#x9;C9.9715,7.3423,10.0005,7.1717,10,7V1C10,0.7239,9.7761,0.5,9.5,0.5z M4,4.38v-1.5l5-1.25v1.5L4,4.38z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"music-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M13.5,1c-0.0804,0.0008-0.1594,0.0214-0.23,0.06L4.5,3.5C4.2239,3.5,4,3.7239,4,4v6.28C3.6971,10.1002,3.3522,10.0037,3,10&#xA;&#x9;c-1.1046,0-2,0.8954-2,2s0.8954,2,2,2s2-0.8954,2-2V7.36l8-2.22v3.64c-0.3029-0.1798-0.6478-0.2763-1-0.28c-1.1046,0-2,0.8954-2,2&#xA;&#x9;s0.8954,2,2,2s2-0.8954,2-2v-9C14,1.2239,13.7761,1,13.5,1z M13,4.14L5,6.36v-2l8-2.22C13,2.14,13,4.14,13,4.14z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"natural-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M4.579,9.579h0L3,8H4.4a.25.25,0,0,0,.25-.25.246.246,0,0,0-.079-.179L3,6h.736a.25.25,0,0,0,.25-.25.246.246,0,0,0-.078-.179h0l-1.2-1.253a.253.253,0,0,0-.4-.015c-.02.023-1.21,1.266-1.21,1.266a.245.245,0,0,0-.082.18.25.25,0,0,0,.25.25H2L.425,7.575h0A.249.249,0,0,0,.6,8H2L.434,9.566h0a.244.244,0,0,0-.082.18A.25.25,0,0,0,.6,10H2v1H3V10H4.4a.247.247,0,0,0,.179-.421Zm6.242-.938-2.1-4.2a.248.248,0,0,0-.443,0l-2.1,4.2A.248.248,0,0,0,6.4,9h4.2a.248.248,0,0,0,.221-.359ZM7.5,7l1-2,1,2Zm.279-5.921a.266.266,0,0,1-.049.148A3.513,3.513,0,0,0,7,3,2.141,2.141,0,0,1,5.709,4.911a.475.475,0,0,1-.419,0A2.141,2.141,0,0,1,4,3a3.5,3.5,0,0,0-.726-1.769.271.271,0,0,1-.046-.148.25.25,0,0,1,.25-.25.27.27,0,0,1,.067.009A2.939,2.939,0,0,1,5,2L5.25.224A.25.25,0,0,1,5.744.2L6,2A2.957,2.957,0,0,1,7.453.841.272.272,0,0,1,7.529.829.25.25,0,0,1,7.779,1.079Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"natural-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M8.753,6.278a.5.5,0,0,1-.51,0A4.109,4.109,0,0,1,6.5,3.5a2.779,2.779,0,0,0-.59-1.506l-.019-.027a.257.257,0,0,1-.056-.144.237.237,0,0,1,.25-.25.264.264,0,0,1,.057.011A3.523,3.523,0,0,1,7.5,2.5L8.28.94a.246.246,0,0,1,.44,0L9.5,2.5a3.4,3.4,0,0,1,1.339-.907.283.283,0,0,1,.1-.021c.175.009.212.119.221.249a.35.35,0,0,1-.043.141A5.2,5.2,0,0,0,10.5,3.5,4.113,4.113,0,0,1,8.753,6.278ZM5,8H6.289a.25.25,0,0,0,.25-.25.241.241,0,0,0-.061-.15L4.7,5.235a.255.255,0,0,0-.391,0L2.518,7.589a.274.274,0,0,0-.062.161.25.25,0,0,0,.25.25H4L1.335,10.6a.273.273,0,0,0-.058.152A.25.25,0,0,0,1.529,11H3L1.435,12.565a.255.255,0,0,0,.18.435H4v1H5V13H7.385a.255.255,0,0,0,.18-.435L6,11H7.471a.25.25,0,0,0,.25-.25.233.233,0,0,0-.058-.149Zm9.345,3.748a.252.252,0,0,1-.252.252H8.908a.252.252,0,0,1-.226-.365L11.27,6.451a.252.252,0,0,1,.451,0l2.6,5.184h0A.251.251,0,0,1,14.345,11.748ZM12.75,10,11.5,7.5,10.25,10Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"optician-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M10.5,4c-0.0246,0-0.0457,0.0106-0.0694,0.014C10.2798,3.35,9.8149,3,9,3H7.5C6.6155,3,6.1454,3.4145,6.0433,4.1969&#xA;&#x9;C5.8868,4.1503,5.6987,4.1084,5.5,4.1084S5.1132,4.1503,4.9567,4.1969C4.8546,3.4145,4.3845,3,3.5,3H2&#xA;&#x9;C1.1851,3,0.7202,3.35,0.5694,4.014C0.5457,4.0106,0.5246,4,0.5,4C0.2239,4,0,4.2238,0,4.5C0,4.7761,0.2239,5,0.5,5&#xA;&#x9;c0,1.5,1,2,2.25,2S5,6.5,5,5V4.9735c0.1148-0.0472,0.3174-0.1151,0.5-0.1151S5.8852,4.9263,6,4.9735V5c0,1.5,1,2,2.25,2&#xA;&#x9;s2.25-0.5,2.25-2C10.7761,5,11,4.7761,11,4.5C11,4.2238,10.7761,4,10.5,4z M4.25,5c0,0.6492-0.1817,1.25-1.5,1.25&#xA;&#x9;S1.25,5.6492,1.25,5V4.5c0-0.5888,0.1612-0.75,0.75-0.75h1.5c0.5888,0,0.75,0.1612,0.75,0.75V5z M9.75,5&#xA;&#x9;c0,0.6492-0.1817,1.25-1.5,1.25S6.75,5.6492,6.75,5V4.5c0-0.5888,0.1612-0.75,0.75-0.75H9c0.5888,0,0.75,0.1612,0.75,0.75V5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"optician-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M14.5,6h-0.6766c-0.2828-0.5892-0.8801-1-1.5763-1H9.752C8.9344,5,8.2513,5.5656,8.059,6.3246&#xA;&#x9;C7.8854,6.2835,7.6991,6.25,7.5,6.25S7.1146,6.2834,6.941,6.3245C6.7487,5.5656,6.0654,5,5.2476,5H2.7529&#xA;&#x9;C2.0566,5,1.4592,5.4108,1.1765,6H0.4992C0.2235,6,0,6.2234,0,6.4991v0.0016C0,6.7765,0.2235,7,0.4992,7H1v0.5&#xA;&#x9;C1,9.0889,2.0024,10,3.75,10h0.5C5.9976,10,7,9.0889,7,7.5V7.3413C7.1503,7.2933,7.3307,7.25,7.5,7.25&#xA;&#x9;c0.1693,0,0.3499,0.0433,0.5,0.0913V7.5C8,9.0889,9.002,10,10.75,10h0.5C12.998,10,14,9.0889,14,7.5V7h0.5&#xA;&#x9;C14.7761,7,15,6.7761,15,6.5C15,6.2238,14.7761,6,14.5,6z M6,7.5C6,8.1982,5.8013,9,4.25,9h-0.5C2.1987,9,2,8.1982,2,7.5V6.7524&#xA;&#x9;C2,6.3374,2.3379,6,2.7529,6h2.4946C5.6626,6,6,6.3374,6,6.7524V7.5z M13,7.5C13,8.1982,12.8008,9,11.25,9h-0.5&#xA;&#x9;C9.1992,9,9,8.1982,9,7.5V6.7524C9,6.3374,9.3369,6,9.752,6h2.4951C12.6621,6,13,6.3379,13,6.7529V7.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"paint-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M10,2H9V1.3631C9,1.1625,8.8374,1,8.6369,1H1.3631C1.1626,1,1,1.1625,1,1.3631v2.2737C1,3.8374,1.1626,4,1.3631,4h7.2738&#xA;&#x9;C8.8374,4,9,3.8374,9,3.6368V3h0.5v2.0176L4.8965,5.9917C4.665,6.0405,4.5,6.2446,4.5,6.481v1.0959H4.459&#xA;&#x9;C4.2055,7.5769,4,7.7824,4,8.0359v2.0051C4,10.2945,4.2055,10.5,4.459,10.5h1.082C5.7945,10.5,6,10.2945,6,10.041V8.0359&#xA;&#x9;c0-0.2535-0.2055-0.459-0.459-0.459H5.5V6.8862l4.6035-0.9741C10.335,5.8633,10.5,5.6592,10.5,5.4229V2.5&#xA;&#x9;C10.5,2.2236,10.2764,2,10,2z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"paint-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M13.5,2.5h-1V1.5027C12.5,1.225,12.2749,1,11.9973,1H1.5027C1.2251,1,1,1.225,1,1.5027v2.9946C1,4.7749,1.2251,5,1.5027,5&#xA;&#x9;h10.4946C12.2749,5,12.5,4.7749,12.5,4.4973V3.5H13v3.1021L6.8877,8.0127C6.6606,8.0654,6.5,8.2676,6.5,8.5v1.5074&#xA;&#x9;c-0.2783,0.02-0.5,0.246-0.5,0.5295v2.9261C6,13.7596,6.2404,14,6.5369,14h0.9261C7.7596,14,8,13.7596,8,13.4631v-2.9261&#xA;&#x9;c0-0.2834-0.2217-0.5095-0.5-0.5295v-1.11l6.1123-1.4102C13.8389,7.4351,14,7.2329,14,7V3C14,2.7236,13.7764,2.5,13.5,2.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"park-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M11,3.75C11,2.7835,10.2165,2,9.25,2c-0.2789,0.0012-0.5534,0.0698-0.8,0.2C8.4284,1.5308,7.8795,0.9997,7.21,1&#xA;&#x9;C7.1386,1.0103,7.0683,1.027,7,1.05C6.9091,0.4341,6.3724-0.0168,5.75,0C5.2633,0.0026,4.8224,0.2874,4.62,0.73&#xA;&#x9;C4.4366,0.6044,4.222,0.5317,4,0.52C3.5966,0.5282,3.223,0.7338,3,1.07C2.8417,1.0195,2.6761,0.9959,2.51,1&#xA;&#x9;C1.6761,0.9991,0.9992,1.6743,0.9983,2.5083C0.9981,2.7043,1.036,2.8985,1.11,3.08C0.302,3.2358-0.2268,4.0171-0.071,4.8251&#xA;&#x9;C0.0422,5.4122,0.4954,5.8748,1.08,6c0.2492,0.7843,1.087,1.218,1.8713,0.9688C3.2148,6.8851,3.4498,6.7297,3.63,6.52h0.12&#xA;&#x9;c0.3212-0.0009,0.6295-0.1264,0.86-0.35V10L3,11h5l-1.6-1V9c0.6623-0.8086,1.4694-1.4868,2.38-2&#xA;&#x9;c0.2593-0.0493,0.5009-0.1667,0.7-0.34l0,0l0,0C9.8179,6.3704,10.0086,5.9449,10,5.5c0.0033-0.0566,0.0033-0.1134,0-0.17&#xA;&#x9;C10.6103,5.0405,10.9996,4.4255,11,3.75z M6.36,8.25V6h0.18c0.1812-0.0015,0.3607-0.0353,0.53-0.1&#xA;&#x9;c0.1232,0.4546,0.4528,0.8249,0.89,1C7.375,7.2849,6.8378,7.7381,6.36,8.25z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"park-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M14,5.75c0.0113-0.6863-0.3798-1.3159-1-1.61C12.9475,3.4906,12.4014,2.9926,11.75,3&#xA;&#x9;c-0.0988,0.0079-0.1962,0.0281-0.29,0.06c-0.0607-0.66-0.6449-1.1458-1.3048-1.0851C9.8965,1.9987,9.6526,2.1058,9.46,2.28l0,0&#xA;&#x9;c0-0.6904-0.5596-1.25-1.25-1.25S6.96,1.5896,6.96,2.28C6.96,2.28,7,2.3,7,2.33C6.4886,1.8913,5.7184,1.9503,5.2797,2.4618&#xA;&#x9;C5.1316,2.6345,5.0347,2.8451,5,3.07C4.8417,3.0195,4.6761,2.9959,4.51,3C3.6816,2.9931,3.0044,3.659,2.9975,4.4874&#xA;&#x9;C2.9958,4.6872,3.0341,4.8852,3.11,5.07C2.3175,5.2915,1.8546,6.1136,2.0761,6.9061C2.2163,7.4078,2.6083,7.7998,3.11,7.94&#xA;&#x9;c0.2533,0.7829,1.0934,1.2123,1.8763,0.959C5.5216,8.7258,5.9137,8.2659,6,7.71C6.183,7.8691,6.4093,7.9701,6.65,8v5L5,14h5l-1.6-1&#xA;&#x9;v-2c0.7381-0.8915,1.6915-1.5799,2.77-2c0.8012,0.1879,1.603-0.3092,1.7909-1.1103C12.9893,7.7686,13.0025,7.6444,13,7.52&#xA;&#x9;c0.0029-0.0533,0.0029-0.1067,0-0.16C13.6202,7.0659,14.0113,6.4363,14,5.75z M8.4,10.26V6.82C8.6703,7.3007,9.1785,7.5987,9.73,7.6&#xA;&#x9;h0.28c0.0156,0.4391,0.2242,0.849,0.57,1.12C9.7643,9.094,9.0251,9.6162,8.4,10.26z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"park-alt1-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.571,8.563,7.425,6.424a.255.255,0,0,1-.069-.174A.25.25,0,0,1,7.6,6h.8a.25.25,0,0,0,.25-.25.246.246,0,0,0-.068-.165l-.008-.008L6.4,3.4a.27.27,0,0,1-.051-.149A.25.25,0,0,1,6.6,3H7.48a.257.257,0,0,0,.25-.258A.234.234,0,0,0,7.68,2.6L5.694.224A.223.223,0,0,0,5.343.186h0C5.327.2,3.352,2.578,3.352,2.578a.246.246,0,0,0-.068.164A.257.257,0,0,0,3.534,3H4.4a.25.25,0,0,1,.25.25.262.262,0,0,1-.066.17L2.431,5.571a.247.247,0,0,0-.077.178A.251.251,0,0,0,2.6,6h.789a.249.249,0,0,1,.25.249.3.3,0,0,1-.063.17L1.43,8.563A.253.253,0,0,0,1.6,9H5v1H6V9H9.4a.255.255,0,0,0,.249-.255A.248.248,0,0,0,9.571,8.563Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"park-alt1-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M9.428,10.429a.269.269,0,0,1-.074-.18A.25.25,0,0,1,9.6,10h1.447a.25.25,0,0,0,.25-.25.258.258,0,0,0-.079-.179L9.07,7.419a.3.3,0,0,1-.063-.17A.249.249,0,0,1,9.257,7H10.4a.251.251,0,0,0,.25-.251.247.247,0,0,0-.077-.178L8.432,4.434,8.418,4.42a.262.262,0,0,1-.066-.17A.25.25,0,0,1,8.6,4h.866a.25.25,0,0,0,.25-.25.246.246,0,0,0-.068-.164h.006L7.7,1.238a.253.253,0,0,0-.042-.044A.249.249,0,0,0,7.5,1.139h0a.249.249,0,0,0-.158.055.253.253,0,0,0-.042.044L5.352,3.586a.246.246,0,0,0-.068.164.25.25,0,0,0,.25.25H6.4a.241.241,0,0,1,.184.42l-.014.014L4.431,6.571a.247.247,0,0,0-.077.178A.251.251,0,0,0,4.6,7H5.745a.249.249,0,0,1,.25.249.3.3,0,0,1-.063.17L3.782,9.571A.258.258,0,0,0,3.7,9.75a.25.25,0,0,0,.25.25H5.4a.25.25,0,0,1,.248.249.269.269,0,0,1-.074.18l-2.14,2.132-.009.009a.248.248,0,0,0,0,.351A.256.256,0,0,0,3.605,13H7v1l1-.008V13h3.391a.263.263,0,0,0,.26-.254.248.248,0,0,0-.071-.177Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"parking-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M8.1,6.1C7.4363,6.5788,6.6268,6.8121,5.81,6.76H3.9V10H2V1h3.93c0.7801-0.0414,1.5484,0.2041,2.16,0.69&#xA;&#x9;C8.6707,2.2518,8.9681,3.0449,8.9,3.85C8.9884,4.6825,8.6941,5.5101,8.1,6.1z M6.64,2.86c-0.289-0.2119-0.6421-0.3178-1-0.3H3.9&#xA;&#x9;v2.65h1.72c0.3612,0.0191,0.717-0.0947,1-0.32c0.2559-0.2675,0.3867-0.6308,0.36-1C7.0323,3.5125,6.9068,3.1321,6.64,2.86z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"parking-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M11.85,8.37c-0.9532,0.7086-2.1239,1.0623-3.31,1H5.79V14H3V1h5.72c1.1305-0.0605,2.244,0.2952,3.13,1&#xA;&#x9;c0.8321,0.8147,1.2543,1.9601,1.15,3.12C13.1271,6.3214,12.7045,7.5159,11.85,8.37z M9.75,3.7C9.3254,3.3892,8.8052,3.237,8.28,3.27&#xA;&#x9;H5.79v3.82h2.49c0.5315,0.0326,1.056-0.1351,1.47-0.47c0.3795-0.3947,0.5693-0.9346,0.52-1.48C10.324,4.606,10.1327,4.0763,9.75,3.7&#xA;&#x9;z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"parking-garage-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M7.25,7.44C6.8067,7.7602,6.2657,7.9158,5.72,7.88H4.45V10H3.19V4H5.8c0.5201-0.0279,1.0324,0.1358,1.44,0.46&#xA;&#x9;c0.3847,0.372,0.5828,0.8966,0.54,1.43C7.8557,6.4611,7.6596,7.0348,7.25,7.44z M6.25,5.28c-0.1946-0.1475-0.4365-0.2186-0.68-0.2&#xA;&#x9;H4.45v1.76H5.6c0.246,0.0129,0.4882-0.0654,0.68-0.22c0.1746-0.1813,0.2621-0.4293,0.24-0.68c0.023-0.2449-0.0651-0.4871-0.24-0.66&#xA;&#x9;L6.25,5.28z M10.41,3.28c0.1349-0.2403,0.0499-0.5444-0.19-0.68l-4.5-2.5c-0.1521-0.0855-0.3379-0.0855-0.49,0l-4.5,2.5&#xA;&#x9;C0.4972,2.7485,0.4288,3.0576,0.5773,3.2904C0.7144,3.5054,0.9913,3.5828,1.22,3.47l4.28-2.4l4.26,2.37&#xA;&#x9;c0.2421,0.1328,0.546,0.0442,0.6789-0.1979C10.4392,3.2414,10.4396,3.2407,10.44,3.24L10.41,3.28z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"parking-garage-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M10.5,10.14c-0.6637,0.4788-1.4732,0.7121-2.29,0.66h-1.9V14h-1.9V5h3.92&#xA;&#x9;c0.7801-0.0414,1.5484,0.2041,2.16,0.69c0.5779,0.5595,0.875,1.3483,0.81,2.15C11.4042,8.6892,11.1088,9.5388,10.5,10.14z M9,6.9&#xA;&#x9;C8.711,6.6881,8.3579,6.5822,8,6.6H6.31v2.65H8c0.3612,0.0191,0.717-0.0947,1-0.32c0.2559-0.2675,0.3867-0.6308,0.36-1&#xA;&#x9;C9.4072,7.5493,9.274,7.1684,9,6.9z M14.41,4.21c0.114-0.2486,0.007-0.5427-0.24-0.66L7.5,0.45l-6.71,3.1&#xA;&#x9;C0.5387,3.666,0.429,3.9637,0.545,4.215C0.661,4.4663,0.9587,4.576,1.21,4.46l0,0L7.5,1.55l6.29,2.9&#xA;&#x9;c0.2486,0.114,0.5427,0.007,0.66-0.24H14.41z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"pharmacy-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M6,4l2-2C7.9899,1.9304,7.9899,1.8596,8,1.79c0-0.4142,0.3358-0.75,0.75-0.75S9.5,1.3758,9.5,1.79S9.1642,2.54,8.75,2.54&#xA;&#x9;H8.64L7.5,4H6z M9.48,5.83L8.65,7.5l0.83,1.67V10h-8V9.17L2.32,7.5L1.48,5.83V5h8V5.83z M7.5,7H6V5.5H5V7H3.5v1H5v1.5h1V8h1.5V7z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"pharmacy-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M9.5,4l1.07-1.54c0.0599,0.0046,0.1201,0.0046,0.18,0c0.6904-0.0004,1.2497-0.5603,1.2494-1.2506&#xA;&#x9;C11.999,0.519,11.4391-0.0404,10.7487-0.04C10.0584-0.0396,9.499,0.5203,9.4994,1.2106c0,0.0131,0.0002,0.0262,0.0006,0.0394&#xA;&#x9;c0,0,0,0.07,0,0.1L7,4H9.5z M12,6V5H3v1l1.5,3.5L3,13v1h9v-1l-1-3.5L12,6z M10,10H8v2H7v-2H5V9h2V7h1v2h2V10z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"picnic-site-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"rect4760\" d=\"M2.75,2C2.3345,2,2,2.3345,2,2.75S2.3345,3.5,2.75,3.5H4L3.5391,5H1.75C1.3345,5,1,5.3345,1,5.75&#xA;&#x9;S1.3345,6.5,1.75,6.5h1.3262L2,10h1l1.0762-3.5h2.8477L8,10h1L7.9238,6.5H9.25C9.6655,6.5,10,6.1655,10,5.75S9.6655,5,9.25,5H7.4609&#xA;&#x9;L7,3.5h1.25C8.6655,3.5,9,3.1655,9,2.75S8.6655,2,8.25,2H2.75z M5,3.5h1L6.4609,5H4.5391L5,3.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"picnic-site-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"rect4760\" d=\"M4,3C3.446,3,3,3.446,3,4s0.446,1,1,1h1.2969&#xA;&#x9;L4.6523,7H2.5c-0.554,0-1,0.446-1,1s0.446,1,1,1h1.5098L3.041,12.0098c-0.1284,0.3939,0.0868,0.8173,0.4807,0.9457&#xA;&#x9;s0.8173-0.0868,0.9457-0.4807c0.0005-0.0013,0.0009-0.0027,0.0013-0.004L5.5859,9h3.8281l1.1172,3.4707&#xA;&#x9;c0.1273,0.3943,0.5501,0.6107,0.9443,0.4834s0.6107-0.5501,0.4834-0.9443l0,0L10.9902,9H12.5c0.554,0,1-0.446,1-1s-0.446-1-1-1&#xA;&#x9;h-2.1523L9.7031,5H11c0.554,0,1-0.446,1-1s-0.446-1-1-1H4z M6.873,5H8.127l0.6445,2h-2.543L6.873,5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"pitch-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M4,2C3.4477,2,3,1.5523,3,1s0.4477-1,1-1s1,0.4477,1,1S4.5523,2,4,2z M10.5,8H9L8,5L7,3.25L8,3l2.3,1l0,0&#xA;&#x9;c0.2761,0.0994,0.5806-0.0439,0.68-0.32c0.0994-0.2761-0.0439-0.5806-0.32-0.68l0,0L8,2H6L4,3L3,4H1.47&#xA;&#x9;c-0.2761,0-0.5,0.2239-0.5,0.5S1.1939,5,1.47,5H4l1-1l1,2L4,7v3.5C4,10.7761,4.2239,11,4.5,11S5,10.7761,5,10.5V7.39L7,7l1,2h2.5&#xA;&#x9;C10.7761,9,11,8.7761,11,8.5S10.7761,8,10.5,8z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"pitch-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M5,3C4.4477,3,4,2.5523,4,2s0.4477-1,1-1s1,0.4477,1,1S5.5523,3,5,3z M12.5,10H10L9,7L8,5.25L9,5l2.3,1l0,0&#xA;&#x9;c0.2761,0.1105,0.5895-0.0239,0.7-0.3S11.9761,5.1105,11.7,5l0,0L9,4H7L5,5L4,6H2.5C2.2239,6,2,6.2239,2,6.5S2.2239,7,2.5,7H5l1-1&#xA;&#x9;l1,2l-2,2v3.5C5,13.7761,5.2239,14,5.5,14S6,13.7761,6,13.5v-3.11L8,9l1,2h3.5c0.2761,0,0.5-0.2239,0.5-0.5S12.7761,10,12.5,10z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"place-of-worship-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M5.52,0L4,2v1h3V2L5.52,0z M4,4L2,5v5h7V5L7,4H4z M11,5.5V10h-1V5.5C10,5.2239,10.2239,5,10.5,5S11,5.2239,11,5.5z M1,5.5&#xA;&#x9;V10H0V5.5C0,5.2239,0.2239,5,0.5,5S1,5.2239,1,5.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"place-of-worship-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path9064\" d=\"M7.5,0l-2,2v2h4V2&#xA;&#x9;L7.5,0z M5.5,4.5L4,6h7L9.5,4.5H5.5z M2,6.5c-0.5523,0-1,0.4477-1,1V13h2V7.5C3,6.9477,2.5523,6.5,2,6.5z M4,6.5V13h7V6.5H4z&#xA;&#x9; M13,6.5c-0.5523,0-1,0.4477-1,1V13h2V7.5C14,6.9477,13.5523,6.5,13,6.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"playground-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M1,0.79c0.1286-0.5371,0.6683-0.8683,1.2054-0.7397S3.0736,0.7186,2.945,1.2557C2.8183,1.7849,2.2917,2.1156,1.76,2&#xA;&#x9;C1.2203,1.8826,0.878,1.35,0.9954,0.8103C0.9968,0.8035,0.9984,0.7968,1,0.79z M10.85,8.16L10.85,8.16l-2-2l0,0&#xA;&#x9;C8.76,6.0612,8.6336,6.0034,8.5,6H8.37l0,0L6.5,6.55V4l0,0C6.746,4.0083,6.96,3.8328,7,3.59C7.0558,3.3225,6.8866,3.0598,6.62,3H6.5&#xA;&#x9;V0H6.28v3L1.82,3.55l0,0C1.4201,3.6111,1.0965,3.9072,1,4.3C0.9688,4.4416,0.9688,4.5884,1,4.73l0,0l0.81,3.13l0,0&#xA;&#x9;c0.1012,0.3354,0.3706,0.5933,0.71,0.68c0.1513,0.0357,0.3087,0.0357,0.46,0H3l3.29-0.89v1.62l-3,0.74l0,0&#xA;&#x9;c-0.2761,0.0856-0.4306,0.3789-0.345,0.655c0.0856,0.2761,0.3789,0.4306,0.655,0.345c0.0566,0.0051,0.1134,0.0051,0.17,0l4-1&#xA;&#x9;c0.2761-0.0828,0.4328-0.3739,0.35-0.65C8.0372,9.0839,7.7461,8.9272,7.47,9.01L7.27,9L6.5,9.22V7.58l1.83-0.51l1.81,1.78l0,0&#xA;&#x9;c0.1758,0.213,0.4909,0.2432,0.7039,0.0674c0.213-0.1758,0.2432-0.4909,0.0674-0.7039C10.8956,8.1945,10.8784,8.1766,10.86,8.16&#xA;&#x9;H10.85z M6.28,6.61L4.21,7.07L3.5,4.33L6.28,4V6.61z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"playground-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M2,1.15c0.2091-0.8016,1.0284-1.2819,1.83-1.0729s1.2819,1.0284,1.0729,1.83C4.7026,2.6752,3.9386,3.1542,3.16,3&#xA;&#x9;C2.3474,2.839,1.8191,2.0498,1.98,1.2371C1.9858,1.2079,1.9925,1.1788,2,1.15z M13,12.32c0.1032,0.5426-0.2531,1.066-0.7956,1.1692&#xA;&#x9;c-0.0015,0.0003-0.0029,0.0006-0.0044,0.0008c-0.4252,0.086-0.8574-0.1119-1.07-0.49l0,0L9.45,9.63L8,9.92L7.78,10H7.72v2.15&#xA;&#x9;L8.34,12h0.14c0.2871,0.0054,0.5155,0.2425,0.5101,0.5297C8.9862,12.7361,8.8606,12.9207,8.67,13l-5,1l0,0&#xA;&#x9;c-0.0563,0.0095-0.1137,0.0095-0.17,0c-0.2872,0-0.52-0.2328-0.52-0.52c0-0.2099,0.1262-0.3993,0.32-0.48l0,0l4.15-0.83V10&#xA;&#x9;l-3.22,0.58l0,0c-0.164,0.0423-0.336,0.0423-0.5,0c-0.3394-0.0867-0.6088-0.3446-0.71-0.68H3L2,5.83l0,0&#xA;&#x9;C1.9688,5.6884,1.9688,5.5416,2,5.4c0.0936-0.387,0.4078-0.6815,0.8-0.75l0,0l4.7-0.52V0h0.22v4.1h0.06L8,4.08L8.4,4h0.21&#xA;&#x9;c0.2673,0.0643,0.4326,0.3323,0.37,0.6C8.9361,4.835,8.729,5.0041,8.49,5L8,5.08H7.78H7.72v2.86h0.06L8,7.88l1.81-0.36l0,0l0,0&#xA;&#x9;c0.4275-0.0352,0.8299,0.2062,1,0.6l0,0l2,3.94l0,0C12.887,12.1358,12.9511,12.2236,13,12.32z M7.5,5.13L5,5.4l0.74,2.94L7.5,8V5.13&#xA;&#x9;z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"police-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"circle4929\" d=\"M4.5,0.5l0.5,1h3&#xA;&#x9;l0.5-1H4.5z M5,2v1c0,0.8284,0.6716,1.5,1.5,1.5S8,3.8284,8,3V2H5z M1.75,3C1,3,1,3.75,1,3.75v3&#xA;&#x9;c0.0006,0.506,0.4918,0.8663,0.9746,0.7148L4,6.8262V10l4-5H5c0,0-0.1945,0-0.4238,0.0723L2.5,5.7266V3.75C2.5,3.75,2.5,3,1.75,3z&#xA;&#x9; M8.7715,5.3887L5,10h4V6C9,5.7648,8.9064,5.5591,8.7715,5.3887z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"police-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"rect4718\" d=\"M5.5,1L6,2h5l0.5-1H5.5z M6,2.5v1.25c0,0,0,2.75,2.5,2.75S11,3.75,11,3.75V2.5H6z M1.9844,3.9863&#xA;&#x9;C1.4329,3.9949,0.9924,4.4485,1,5v4c-0.0001,0.6398,0.5922,1.1152,1.2168,0.9766L5,9.3574V14l5.8789-6.9297&#xA;&#x9;C10.7391,7.0294,10.5947,7,10.4414,7H6.5L3,7.7539V5C3.0077,4.4362,2.5481,3.9775,1.9844,3.9863z M11.748,7.7109L6.4121,14H12&#xA;&#x9;V8.5586C12,8.2451,11.9061,7.9548,11.748,7.7109z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"post-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M10,5.5V9c0,0.5523-0.4477,1-1,1H2c-0.5523,0-1-0.4477-1-1V5.5C1,5.2239,1.2239,5,1.5,5c0.0692-0.0152,0.1408-0.0152,0.21,0&#xA;&#x9;l0,0L5.5,7l3.8-2l0,0c0.066-0.0138,0.134-0.0138,0.2,0C9.7761,5,10,5.2239,10,5.5z M1.25,2.92L1.25,2.92L1.33,3L5.5,5l4.19-2l0,0&#xA;&#x9;h0.06l0,0C9.9296,2.9019,10.0292,2.7025,10,2.5C10,2.2239,9.7761,2,9.5,2h-8C1.2239,2,1,2.2239,1,2.5&#xA;&#x9;C1.0026,2.6745,1.0978,2.8345,1.25,2.92z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"post-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M14,6.5V12c0,0.5523-0.4477,1-1,1H2c-0.5523,0-1-0.4477-1-1V6.5C1,6.2239,1.2239,6,1.5,6&#xA;&#x9;c0.0692-0.0152,0.1408-0.0152,0.21,0l0,0l5.79,4l5.8-4l0,0c0.066-0.0138,0.134-0.0138,0.2,0C13.7761,6,14,6.2239,14,6.5z M1.25,3.92&#xA;&#x9;L1.25,3.92L1.33,4L7.5,8l6.19-4l0,0h0.06l0,0c0.1796-0.0981,0.2792-0.2975,0.25-0.5C14,3.2239,13.7761,3,13.5,3h-12&#xA;&#x9;C1.2239,3,1,3.2239,1,3.5C1.0026,3.6745,1.0978,3.8345,1.25,3.92z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"prison-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"rect3607\" d=\"M2,1v9h7V1H2z M3,2h1v3H3V2z M5,2h1v3H5V2z M7,2h1v2H7V2z M7.5,5C7.7761,5,8,5.2239,8,5.5S7.7761,6,7.5,6&#xA;&#x9;S7,5.7761,7,5.5S7.2239,5,7.5,5z M3,6h1v3H3V6z M5,6h1v3H5V6z M7,7h1v2H7V7z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"prison-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"rect3607\" d=\"M3.5,1v13H12V1H3.5z M9.5,2H11v3.5H9.5V2z M4.5,2.0547H6V7H4.5V2.0547z M7,2.0547h1.5V7H7V2.0547z M10.25,6.5&#xA;&#x9;C10.6642,6.5,11,6.8358,11,7.25S10.6642,8,10.25,8l0,0C9.8358,8,9.5,7.6642,9.5,7.25l0,0C9.5,6.8358,9.8358,6.5,10.25,6.5z M7,8&#xA;&#x9;h1.4727L8.5,13H7.0273L7,8z M4.5,8.166H6V13H4.5V8.166z M9.5,9H11v4H9.5V9z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"rail-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9,10.5C9,10.7761,8.7761,11,8.5,11c-0.1824-0.0029-0.3481-0.107-0.43-0.27l0,0L7.69,10H3.31l-0.37,0.74l0,0&#xA;&#x9;C2.8537,10.9023,2.6838,11.0027,2.5,11C2.2239,11,2,10.7761,2,10.5c0.0022-0.0847,0.0263-0.1674,0.07-0.24l0,0l1-2l0,0&#xA;&#x9;C3.1546,8.1008,3.3198,8.001,3.5,8c0.2751-0.0235,0.5172,0.1805,0.5407,0.4556C4.0479,8.5392,4.0339,8.6233,4,8.7L3.81,9h3.38L7,8.7&#xA;&#x9;C6.8991,8.443,7.0256,8.1528,7.2826,8.0518C7.514,7.9609,7.7771,8.0539,7.9,8.27l0,0l1,2l0,0C8.9527,10.3367,8.9872,10.416,9,10.5z&#xA;&#x9; M8,0H3C2.4477,0,2,0.4477,2,1v5c0,0.5523,0.4477,1,1,1h5c0.5523,0,1-0.4477,1-1V1C9,0.4477,8.5523,0,8,0z M3.5,6&#xA;&#x9;C3.2239,6,3,5.7761,3,5.5S3.2239,5,3.5,5S4,5.2239,4,5.5S3.7761,6,3.5,6z M3.5,4C3.2239,4,3,3.7761,3,3.5v-2&#xA;&#x9;C3,1.2239,3.2239,1,3.5,1h1.79v3H3.5z M7.5,6C7.2239,6,7,5.7761,7,5.5S7.2239,5,7.5,5S8,5.2239,8,5.5S7.7761,6,7.5,6z M8,3.5&#xA;&#x9;C8,3.7761,7.7761,4,7.5,4H5.69V1H7.5C7.7761,1,8,1.2239,8,1.5V3.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" id=\"rail-15\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M 3 1 C 2.4477 1 2 1.4477 2 2 L 2 10 C 2 10.5523 2.4477 11 3 11 L 12 11 C 12.5523 11 13 10.5523 13 10 L 13 2 C 13 1.4477 12.5523 1 12 1 L 3 1 z M 5.75 1.5 L 5.7597656 1.5 L 9.2597656 1.5 C 9.3978656 1.5 9.5097656 1.6119 9.5097656 1.75 C 9.5097656 1.8881 9.3978656 2 9.2597656 2 L 5.75 2 C 5.6119 2 5.5 1.8881 5.5 1.75 C 5.5 1.6119 5.6119 1.5 5.75 1.5 z M 3.5 3 L 7 3 L 7 7 L 3.5 7 C 3.2239 7 3 6.7761 3 6.5 L 3 3.5 C 3 3.2239 3.2239 3 3.5 3 z M 8 3 L 11.5 3 C 11.7761 3 12 3.2239 12 3.5 L 12 6.5 C 12 6.7761 11.7761 7 11.5 7 L 8 7 L 8 3 z M 5 8 C 5.5523 8 6 8.4477 6 9 C 6 9.5523 5.5523 10 5 10 C 4.4477 10 4 9.5523 4 9 C 4 8.4477 4.4477 8 5 8 z M 10 8 C 10.5523 8 11 8.4477 11 9 C 11 9.5523 10.5523 10 10 10 C 9.4477 10 9 9.5523 9 9 C 9 8.4477 9.4477 8 10 8 z M 10.445312 11.994141 C 10.380597 11.999652 10.314981 12.018581 10.253906 12.050781 C 10.030606 12.168381 9.9302313 12.433922 10.019531 12.669922 L 10.189453 13 L 4.8105469 13 L 4.9394531 12.730469 C 5.0371531 12.472169 4.9067375 12.183637 4.6484375 12.085938 C 4.4124375 11.996738 4.1468969 12.097113 4.0292969 12.320312 L 3.0292969 14.320312 C 3.0080969 14.377912 2.9986 14.4387 3 14.5 C 3 14.7761 3.2239 15 3.5 15 C 3.6802 14.999 3.8450875 14.899434 3.9296875 14.740234 L 3.9296875 14.689453 L 4 14.689453 L 4.3105469 14 L 10.689453 14 L 11 14.689453 L 11 14.740234 C 11.0846 14.899434 11.249488 14.999 11.429688 15 C 11.705787 15 11.929688 14.7761 11.929688 14.5 C 11.949587 14.4212 11.949587 14.338566 11.929688 14.259766 L 10.929688 12.259766 C 10.833163 12.076541 10.639459 11.977608 10.445312 11.994141 z \" id=\"path3\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"rail-light-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path14245\" d=\"M4,0&#xA;&#x9;C3.5,0,3.5,0.5,3.5,0.5S3.5,1,4,1h1v0.9707L4,2c0,0-1,0-1,1v3c0,2,2,2,2,2h1c0,0,2,0,2-2V3c0-1-1-1-1-1H6V1h1c0.5,0,0.5-0.5,0.5-0.5&#xA;&#x9;S7.5,0,7,0H4z M5.5,3L7,3.5V5H5.5H4V3.5L5.5,3z M5.5,6C5.777,6,6,6.223,6,6.5S5.777,7,5.5,7S5,6.777,5,6.5S5.223,6,5.5,6z&#xA;&#x9; M2.834,8.5L2,11h1.5l0.334-1h3.332L7.5,11H9L8.166,8.5H6.668L6.834,9H4.166l0.166-0.5H2.834z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"rail-light-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path14245\" d=\"M5.5,0C5,0,5,0.5,5,0.5v1C5,1.777,5.223,2,5.5,2S6,1.777,6,1.5V1h1v2H6c0,0-2,0-2,2v3c0,3,3,3,3,3h1&#xA;&#x9;c0,0,3,0,3-3V5c0-2-2-2-2-2H8V1h1v0.5C9,1.777,9.223,2,9.5,2S10,1.777,10,1.5v-1C10,0,9.5,0,9.5,0H5.5z M7.5,4l2.0449,0.7734L10,6.5&#xA;&#x9;C10.1316,7,9.5,7,9.5,7h-4c0,0-0.6316,0-0.5-0.5l0.4551-1.7266L7.5,4z M7.5,8C7.7761,8,8,8.2239,8,8.5S7.7761,9,7.5,9&#xA;&#x9;S7,8.7761,7,8.5S7.2239,8,7.5,8z M4.125,12L3,15h1.5l0.375-1h5.25l0.375,1H12l-1.125-3h-1.5l0.375,1h-4.5l0.375-1H4.125z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"rail-metro-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path14200\" d=\"M3.5,0C3,0,3,0.5,3,0.5L2,5v1c0,1.0244,1,1,1,1h5c0,0,1,0,1-1V5L8,0.5C8,0.5,8,0,7.5,0H3.5z M4,1h3l0.5,3h-4&#xA;&#x9;L4,1z M3.5,5C3.7761,5,4,5.2239,4,5.5S3.7761,6,3.5,6S3,5.7761,3,5.5S3.2239,5,3.5,5z M5.25,5h0.5C5.8885,5,6,5.1115,6,5.25&#xA;&#x9;S5.8885,5.5,5.75,5.5h-0.5C5.1115,5.5,5,5.3885,5,5.25S5.1115,5,5.25,5z M7.5,5C7.7761,5,8,5.2239,8,5.5S7.7761,6,7.5,6&#xA;&#x9;S7,5.7761,7,5.5S7.2239,5,7.5,5z M3,8l-1,3h1.5l0.334-1h3.332L7.5,11H9L8,8H6.5l0.334,1H4.166L4.5,8H3z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"rail-metro-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path5258\" d=\"M5.5,0c0,0-0.75,0-1,1L3,6.5V10c0,1,1,1,1,1h7c0,0,1,0,1-1V6.5L10.5,1c-0.2727-1-1-1-1-1H5.5z M6.5,1.5h2&#xA;&#x9;c0,0,0.5357,0,0.75,1L10,6c0.2146,1.0017-1,1-1,1H6c0,0-1.2146,0.0017-1-1l0.75-3.5C5.9643,1.5,6.5,1.5,6.5,1.5z M5,8&#xA;&#x9;c0.5523,0,1,0.4477,1,1s-0.4477,1-1,1S4,9.5523,4,9S4.4477,8,5,8z M6.75,8h1.5C8.3885,8,8.5,8.1115,8.5,8.25S8.3885,8.5,8.25,8.5&#xA;&#x9;h-1.5C6.6115,8.5,6.5,8.3885,6.5,8.25S6.6115,8,6.75,8z M10,8c0.5523,0,1,0.4477,1,1s-0.4477,1-1,1S9,9.5523,9,9S9.4477,8,10,8z&#xA;&#x9; M4.125,12L3,15h1.5l0.375-1h5.25l0.375,1H12l-1.125-3h-1.5l0.375,1h-4.5l0.375-1H4.125z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"ranger-station-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"rect4911\" d=\"M6.334,0L5,1v3L1,6.0547V10h3V7&#xA;&#x9;h3v3h3V6.0547L6,4V2.25L6.334,2l1.332,1L9,2V0L7.666,1L6.334,0z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"ranger-station-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"rect4911\" d=\"M9,0.5l-2,1v3.7734L2,8v6h4v-4h3&#xA;&#x9;v4h4V8L8,5.2734V4l1-0.5l2,1l2-1v-3l-2,1L9,0.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"recycling-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.5,8.5C8.953,9.019,7.84,8.935,7,9v1L4.5,8.5L7,7v1h1c0.634,0,0.83,0,1.054-0.127&#xA;&#x9;c0.3524-0.1763,0.5267-0.5807,0.413-0.958C9.3824,6.5569,9.8667,6.4902,9.952,6.8C10.1235,7.4067,9.9502,8.0586,9.5,8.5z&#xA;&#x9; M1.9482,5.0922C1.9479,5.0928,1.9473,5.0934,1.947,5.094c-0.4,0.743-1.065,1.637-0.921,2.377&#xA;&#x9;c0.1311,0.6165,0.5882,1.1123,1.192,1.293c0.3722,0.1203,0.4663-0.3954,0.161-0.472C2.0002,8.1852,1.753,7.8215,1.793,7.43&#xA;&#x9;c0.012-0.258,0.122-0.42,0.461-0.956c0.134-0.211,0.309-0.485,0.537-0.843c0.0003-0.0004,0.0005-0.0008,0.0008-0.0012L3.635,6.167&#xA;&#x9;l0.078-2.914L1.105,4.555L1.9482,5.0922z M4.884,1.914c0.2504-0.3036,0.6828-0.3834,1.025-0.189C6.14,1.84,6.245,2.006,6.598,2.532&#xA;&#x9;c0.14,0.208,0.32,0.479,0.555,0.832l0.0001,0.0001L6.322,3.919l2.636,1.246L8.817,2.253L7.9843,2.8091&#xA;&#x9;C7.4644,2.1472,6.9173,1.1786,6.188,1.014C5.5701,0.8809,4.9288,1.0965,4.517,1.576C4.2529,1.9137,4.7157,2.1216,4.884,1.914z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"recycling-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M2.4556,8.6134C2.118,9.2112,1.501,10.3021,2.593,11.0312c0.3432,0.2268,0.7275,0.3836,1.131,0.4614&#xA;&#x9;C4.0314,11.5382,4.0466,12.0111,3.6855,12c-0.3849-0.0193-2.2596-0.1934-2.5606-1.5995c-0.1556-0.8213,0.0204-1.5571,0.504-2.3556&#xA;&#x9;L2.3263,6.812L1.0196,6.0688L4.5,4v4L3.1941,7.3057L2.4556,8.6134z M6.7,2.034c1.155-0.628,1.823,0.43,2.191,1.007l0.8059,1.2631&#xA;&#x9;L8.431,5.112L12,6.986L11.803,2.96l-1.2639,0.8066L9.779,2.578C9.2572,1.8321,8.875,1.2812,7.944,1.033&#xA;&#x9;C6.307,0.7203,5.3007,2.6194,5.311,2.607c-0.1639,0.2871,0.2156,0.5399,0.451,0.21C6.0202,2.4969,6.339,2.2309,6.7,2.034z&#xA;&#x9; M13.294,8.221c-0.0877-0.1897-0.5487-0.1413-0.419,0.267c0.1312,0.3892,0.1845,0.8003,0.157,1.21C12.939,11.01,11.684,11,11,11H9.5&#xA;&#x9;V9.5l-3.5,2l3.488,2.025L9.4926,12H11c0.8906,0.0153,1.5999-0.1759,2.2-0.713C14.4,10.226,13.294,8.221,13.294,8.221z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\" id=\"religious-buddhist-11\">\n  <path d=\"M11.0016,5.8008v-0.5H9.9895C9.93427,4.28235,9.53269,3.31335,8.8513,2.5544l0.8271-0.8271l-0.354-0.3541L8.5012,2.2&#xA;&#x9;c-0.75994-0.68207-1.73031-1.08369-2.75-1.1382V0h-0.5v1.0622c-0.99761,0.05474-1.94816,0.442-2.7,1.1l-0.876-0.886L1.32,1.6282&#xA;&#x9;L2.19,2.5C1.48299,3.26753,1.06626,4.25789,1.0118,5.3H0v0.5h1.0121C1.06715,6.81867,1.46863,7.78795,2.15,8.5472L1.3229,9.3743&#xA;&#x9;l0.3543,0.3541L2.5,8.9013c0.75994,0.68207,1.73031,1.08369,2.75,1.1382v0.9621h0.5v-0.9621&#xA;&#x9;C6.77029,9.98353,7.74071,9.58012,8.5,8.8963l0.82,0.8311l0.3551-0.3521L8.8553,8.5412c0.67858-0.75782,1.07864-1.72428,1.1342-2.74&#xA;&#x9;h1.0121V5.8008z M9.5624,5.3008H6.1009l2.4483-2.4444C9.15109,3.53478,9.50787,4.39554,9.5624,5.3008z M8.1952,2.5L5.7508,4.9467&#xA;&#x9;V1.4892C6.65579,1.54295,7.51655,1.89889,8.1952,2.5z M5.2508,1.4892v3.4L2.85,2.4614C3.5221,1.88298,4.36561,1.5414,5.2508,1.4892z&#xA;&#x9; M2.4914,2.8092l2.46,2.4914H1.4392c0.05523-0.92636,0.42665-1.80572,1.0522-2.4912L2.4914,2.8092z M1.4392,5.8008h3.4615&#xA;&#x9;L2.4524,8.2452C1.85051,7.56682,1.49373,6.70606,1.4392,5.8008z M2.8064,8.6008l2.4444-2.4469v3.4575&#xA;&#x9;C4.34592,9.55774,3.4852,9.20206,2.8064,8.6013V8.6008z M5.7508,9.6108V6.1109l2.45,2.4814&#xA;&#x9;c-0.67905,0.60519-1.54206,0.96416-2.45,1.0191V9.6108z M8.5508,8.2366L6.1479,5.8008h3.4145&#xA;&#x9;C9.5079,6.70256,9.15336,7.56019,8.5552,8.2372h-0.004L8.5508,8.2366z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\" id=\"religious-buddhist-15\">\n  <path d=\"M13.4978,6.9989h-0.5329c-0.09997-1.10708-0.53528-2.15731-1.2478-3.0105l0.378-0.3784&#xA;&#x9;c0.19605-0.19447,0.19733-0.51105,0.00286-0.7071C11.90698,2.71037,11.59733,2.70518,11.4,2.8912l0,0l-0.0123,0.0123L11.01,3.2815&#xA;&#x9;c-0.85331-0.71298-1.90385-1.14864-3.0113-1.2488V1.5c0-0.27614-0.22386-0.5-0.5-0.5s-0.5,0.22386-0.5,0.5v0.5327&#xA;&#x9;C5.8916,2.13306,4.84144,2.56871,3.9884,3.2815L3.61,2.9C3.41007,2.70952,3.09358,2.71717,2.9031,2.9171&#xA;&#x9;c-0.184,0.19312-0.184,0.49668,0,0.6898l0.3784,0.3775C2.56787,4.83856,2.13216,5.89031,2.0327,6.9989H1.5&#xA;&#x9;c-0.27614,0-0.5,0.22386-0.5,0.5s0.22386,0.5,0.5,0.5h0.5327c0.09987,1.10695,0.535,2.15711,1.2473,3.0103l-0.3779,0.3779&#xA;&#x9;c-0.19538,0.19514-0.19557,0.51173-0.00043,0.70711c0.19053,0.19076,0.49798,0.19611,0.69503,0.01209L3.609,12.094l0.3779-0.3779&#xA;&#x9;c0.8533,0.71312,1.90395,1.1488,3.0115,1.2488v0.5329c0,0.27614,0.22386,0.5,0.5,0.5s0.5-0.22386,0.5-0.5v-0.5329&#xA;&#x9;c1.10719-0.10026,2.15744-0.53592,3.0105-1.2488l0.3779,0.3779c0.19514,0.19538,0.51173,0.19557,0.70711,0.00043&#xA;&#x9;c0.19076-0.19053,0.19611-0.49798,0.01209-0.69503l-0.0123-0.0123l0,0l-0.3779-0.3779c0.71283-0.8531,1.14848-1.90333,1.2488-3.0105&#xA;&#x9;h0.5329c0.27609-0.00544,0.49549-0.23366,0.49006-0.50975C13.98227,7.22064,13.76611,7.00435,13.4978,6.9989z M7.9987,3.0505&#xA;&#x9;c0.83871,0.09248,1.63383,0.42154,2.2926,0.9488l-2.15,2.15c-0.04663-0.0218-0.09436-0.04116-0.143-0.058V3.0505H7.9987z&#xA;&#x9; M6.9987,3.0505V6.091c-0.04864,0.01684-0.09637,0.0362-0.143,0.058l-2.15-2.15c0.65897-0.52726,1.45431-0.85622,2.2932-0.9485&#xA;&#x9;H6.9987z M3.9987,4.7062l2.15,2.15c-0.0218,0.04663-0.04116,0.09436-0.058,0.143H3.0505&#xA;&#x9;c0.09243-0.83886,0.42154-1.63413,0.9489-2.293L3.9987,4.7062z M3.0505,7.9987H6.091c0.01687,0.04863,0.03623,0.09636,0.058,0.143&#xA;&#x9;l-2.15,2.15C3.47173,9.63281,3.14276,8.83753,3.0505,7.9987z M6.9989,11.9471c-0.83871-0.09248-1.63383-0.42154-2.2926-0.9488&#xA;&#x9;l2.15-2.15c0.04663,0.0218,0.09436,0.04116,0.143,0.058v3.0405L6.9989,11.9471z M7.9989,11.9471V8.9066&#xA;&#x9;c0.04864-0.01683,0.09638-0.03619,0.143-0.058l2.15,2.15c-0.65895,0.5273-1.4543,0.85627-2.2932,0.9485H7.9989z M10.9989,10.2914&#xA;&#x9;l-2.15-2.15c0.02177-0.04664,0.04113-0.09437,0.058-0.143h3.0415c-0.09276,0.83901-0.42232,1.6343-0.9502,2.293H10.9989z&#xA;&#x9; M8.9066,6.9989c-0.01684-0.04864-0.0362-0.09637-0.058-0.143l2.15-2.15c0.52726,0.65877,0.85632,1.45389,0.9488,2.2926H8.9066&#xA;&#x9;V6.9989z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"religious-christian-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"rect3338\" d=\"M4.5,0v3H2v2h2.5v6h2V5H9V3H6.5V0H4.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"religious-christian-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"rect3338\" d=\"M6,0.9552V4H3v3h3v8h3V7h3V4H9V1&#xA;&#x9;c0-1-0.9776-1-0.9776-1H6.9887C6.9887,0,6,0,6,0.9552z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"religious-jewish-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M11,8H7.1l-1.6,3L3.9,8H0l1.95-2.5L0,3h3.9l1.6-3l1.6,3H11L9.05,5.5L11,8z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"religious-jewish-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M15,12H9.78L7.5,15l-2.26-3H0l2.7-4L0,4h5.3l2.2-4l2.34,4H15l-2.56,4L15,12z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"religious-muslim-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path16908\" d=\"M4.9,0C2.2,0,0,2.2,0,4.9&#xA;&#x9;s2.2,4.9,4.9,4.9c0.9,0,1.7-0.2,2.4-0.6H6.7c-2.4,0-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3h0.6C6.5,0.2,5.8,0,4.9,0z M8.5,2L7.6845,3.7&#xA;&#x9;L6,4l1,1.5L6.5,7l2-1l2,1L10,5.5L11,4L9.5,3.7L8.5,2z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"religious-muslim-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path7552-2-1\" d=\"M6.7941,0C3,0,0,3,0,6.7941&#xA;&#x9;s3,6.7941,6.7941,6.7941c2.1176,0,4.4118-0.7059,5.6471-2.2941C11.6471,11.8235,10.1471,12.4412,9,12.4412&#xA;&#x9;c-2.9118,0-5.1176-2.9118-5.1176-5.8235S6.0882,1.1471,9,1.1471c1.0588,0,2.5588,0.6176,3.4412,1.1471&#xA;&#x9;C11.2059,0.7059,8.9118,0,6.7941,0z M11,3l-1,2.5H7L9.5,7l-1,3L11,8.5l2.5,1.5l-1-3L15,5.5h-3L11,3z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"residential-community-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M8.8,8C9.5,7.9,10,7.2,10,6.5C10,5.7,9.3,5,8.5,5S7,5.7,7,6.5C7,7.2,7.5,7.9,8.2,8v1.5H6.4H6V1H2v8.5H1V10h1h4.4h1.9h0.5H10&#xA;&#x9;V9.5H8.8V8z M3,2h2v1H3V2z M3,4h2v1H3V4z M3,6h2v1H3V6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"residential-community-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M11.8,13.5V11c0.7-0.1,1.2-0.7,1.2-1.5S12.3,8,11.5,8S10,8.7,10,9.5c0,0.7,0.5,1.4,1.2,1.5v2.5H7V2H2v11.5H1V14h13v-0.5&#xA;&#x9;H11.8z M6,11H3v-1h3V11z M6,9H3V8h3V9z M6,7H3V6h3V7z M6,5H3V4h3V5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"restaurant-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path11193\" d=\"M2.25,0l-0.5,3.5C1.6793,3.995,2.9908,4.9001,3,5.5V11h1V5.5c0-0.6,1.3207-1.505,1.25-2L4.75,0h-0.5&#xA;&#x9;L4.5,2.75l-0.75,0.5V0h-0.5v3.25L2.5,2.75L2.75,0H2.25z M9,0C7.5,0,7.0064,1.7242,7,3v3h1v5h1V0z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"restaurant-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path11774\" d=\"M3.5,0l-1,5.5c-0.1464,0.805,1.7815,1.181,1.75,2L4,14c-0.0384,0.9993,1,1,1,1s1.0384-0.0007,1-1L5.75,7.5&#xA;&#x9;c-0.0314-0.8176,1.7334-1.1808,1.75-2L6.5,0H6l0.25,4L5.5,4.5L5.25,0h-0.5L4.5,4.5L3.75,4L4,0H3.5z M12,0&#xA;&#x9;c-0.7364,0-1.9642,0.6549-2.4551,1.6367C9.1358,2.3731,9,4.0182,9,5v2.5c0,0.8182,1.0909,1,1.5,1L10,14c-0.0905,0.9959,1,1,1,1&#xA;&#x9;s1,0,1-1V0z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"restaurant-noodle-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <g id=\"restaurant-noodle-11\">\n    <path d=\"M3.4688,8.81,1,6.625V6h9v.625L7.5156,8.8259ZM2.9934,1.7137a.3324.3324,0,0,0-.6648,0v.88l-1.0979.24a.25.25,0,0,0,.0928.4913L2.3286,3.148V3.58L1.25,3.6019a.25.25,0,1,0,0,.5l1.0786.0221V5.3249h.6648ZM9.5,3.3519l-.4912.1932-4.1764.046V2.6652l4.0543-.7879.5192.1141A.5.5,0,1,0,9.22,1.0088L8.7751,1.28l-3.9427.8471V1.7137a.3324.3324,0,0,0-.6648,0v.5575l-.6259.1368v.4788l.6259-.11v.8208L3.5417,3.61v.4863l5.4566.0394L9.5,4.3519a.5.5,0,1,0,0-1ZM7.5313,9.7435H3.4531V9.988H7.5313Z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"restaurant-noodle-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <g id=\"restaurant-noodle-15\">\n    <path d=\"M4.457,11.9892,1,8V7H14V8l-3.4961,3.9891ZM3.9882,2.5a.5.5,0,0,0-1,0v.5671l-1.7969.3675a.25.25,0,1,0,.094.4911l1.7029-.2776v.5662l-1.75.0357a.25.25,0,0,0,0,.5l1.75.0357V5.998h1Zm9.5,1.5-7.5.2625V2.9951l7.594-1.0737a.5.5,0,0,0-.1881-.9822L5.9792,2.4555a.4963.4963,0,0,0-.991.0445v.2276l-.493.1009V3.18l.493-.08V4.2974l-.493.01v.4608L13.4882,5a.5.5,0,0,0,0-1ZM10,13H5v.5757h5Z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"restaurant-pizza-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <g id=\"restaurant-pizza-11\">\n    <path d=\"M1.9366,6.5067,1.0224,6.1A10.038,10.038,0,0,1,6.1,1.0224l.4064.9144h0a9.0333,9.0333,0,0,0-4.57,4.57ZM9.62,9.9471,2.897,6.9594A8.03,8.03,0,0,1,6.9594,2.897h0l.391.88a.7476.7476,0,0,0-.6288.7318.7578.7578,0,0,0,.7578.7578.7424.7424,0,0,0,.4578-.1694l2.01,4.5223A.2482.2482,0,0,1,9.62,9.9471ZM6.2524,6.4955a.75.75,0,1,0-.75.75A.75.75,0,0,0,6.2524,6.4955Zm1.9841,1.006a.74.74,0,1,0-.74.74A.74.74,0,0,0,8.2365,7.5015Z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"restaurant-pizza-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <g id=\"restaurant-pizza-15\">\n    <path d=\"M2.3926,8.9315,1.0245,8.3148A14.0478,14.0478,0,0,1,8.7637.9994l.027.07L9.3022,2.4l-.0037.0013a12.6131,12.6131,0,0,0-6.9057,6.53Zm10.9631,4.96L3.42,9.413a11.6038,11.6038,0,0,1,6.354-6.0088l.0033-.0013.8163,2.1222c-.0281-.0022-.0521-.0162-.0808-.0162a1.062,1.062,0,1,0,.7642,1.7932L13.69,13.575A.2487.2487,0,0,1,13.3557,13.891Zm-4.93-5.3727a.9245.9245,0,1,0-.9245.9244A.9245.9245,0,0,0,8.4255,8.5183Zm3.0169,2.03a.9252.9252,0,1,0-.9252.9252A.9252.9252,0,0,0,11.4424,10.5478Z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"restaurant-seafood-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <g id=\"restaurant-seafood-11\">\n    <path d=\"M8.478,7.1855H9.9722v.6H8.6465A3.3857,3.3857,0,0,1,9.6982,9.3311L9.13,9.5244A2.7584,2.7584,0,0,0,7.87,7.9763L6.3715,8.9914,4.53,8.9744,3.0376,8.0105A2.7482,2.7482,0,0,0,1.832,9.5244l-.5683-.1933A3.3857,3.3857,0,0,1,2.3154,7.7852H.99v-.6H2.4882a.539.539,0,0,1,.0727-.081l.7122-.6387-.7-1.1433c-.0146,0-.0246.0048-.04.0048,0,0-1.5334,0-1.5334-1.4445A4.9644,4.9644,0,0,1,2.5334.994L2,3V4H3l.9918-2.006v2a1.4231,1.4231,0,0,1-.7024,1.159l.5132.838.132-.1184a2.5517,2.5517,0,0,1,3.11,0l.116.1043.5148-.8381A1.4264,1.4264,0,0,1,7.0072,3.994v-2L8,4H9V3L8.4656.994A4.9682,4.9682,0,0,1,9.994,3.8828c0,1.4445-1.5284,1.4445-1.5284,1.4445-.0294,0-.05-.0083-.0777-.0094L7.6907,6.4531l.6729.6049A.5511.5511,0,0,1,8.478,7.1855Z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"restaurant-seafood-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <g id=\"restaurant-seafood-15\">\n    <path d=\"M11.433,10.0889h2.49v.75H11.8525A4.81,4.81,0,0,1,13.4751,13.14l-.71.2422a4.01,4.01,0,0,0-1.74-2.1971,1.7775,1.7775,0,0,1-1.0352.4538L8.4374,12.9852H6.5188L4.9839,11.623a2.0222,2.0222,0,0,1-1.0929-.44,4.0093,4.0093,0,0,0-1.7426,2.1988l-.71-.2422a4.8146,4.8146,0,0,1,1.622-2.3007H.99v-.75H3.4839l.8633-.6764L3.3329,7.7567a2.2738,2.2738,0,0,1-.269.0293,2.0192,2.0192,0,0,1-2.0532-2.08c0-2.08,1.979-4.16,1.979-4.16L2.2531,5.9931l1.7255-.0012L4.9913,2.9852l0,2.9956a2.0936,2.0936,0,0,1-.6993,1.4121l.8536,1.3936L5.23,8.7208a3.8669,3.8669,0,0,1,4.4784,0l.0605.0474.869-1.4152a2.1177,2.1177,0,0,1-.6433-1.3722l0-2.9956.9836,3.0067,1.7547.0012-.7367-4.4466s1.982,2.08,1.982,4.16a2.0211,2.0211,0,0,1-2.0562,2.08,2.3125,2.3125,0,0,1-.3441-.0376L10.5676,9.3945l.8407.6593C11.4212,10.0638,11.4218,10.0782,11.433,10.0889Z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"roadblock-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"g12530\" d=\"M5.5,0C2.4624,0,0,2.4624,0,5.5S2.4624,11,5.5,11S11,8.5376,11,5.5S8.5376,0,5.5,0z M2,4.5h7v2H2V4.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"roadblock-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"roadblock-24\" d=\"M7.5,0C3.3579,0,0,3.3579,0,7.5S3.3579,15,7.5,15S15,11.6421,15,7.5S11.6421,0,7.5,0z M3,6h9v3H3V6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"rocket-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path7143\" d=\"M9,1C7.488,1,5.4077,2.1459,4.0488,4H3C2.1988,4,1.8162,4.3675,1.5,5L1,6h1h1l1,1l1,1v1v1l1-0.5&#xA;&#x9;C6.6325,9.1838,7,8.8012,7,8V6.9512C8.8541,5.5923,10,3.512,10,2V1H9z M7.5,3C7.7761,3,8,3.2239,8,3.5S7.7761,4,7.5,4&#xA;&#x9;S7,3.7761,7,3.5S7.2239,3,7.5,3z M2.75,7.25L2.5,7.5C2,8,2,9,2,9s0.9448,0.0552,1.5-0.5l0.25-0.25L2.75,7.25z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"rocket-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path7143\" d=\"M12.5547,1c-2.1441,0-5.0211,1.471-6.9531,4H4&#xA;&#x9;C2.8427,5,2.1794,5.8638,1.7227,6.7773L1.1113,8h1.4434H4l1.5,1.5L7,11v1.4453v1.4434l1.2227-0.6113&#xA;&#x9;C9.1362,12.8206,10,12.1573,10,11V9.3984c2.529-1.932,4-4.809,4-6.9531V1H12.5547z M10,4c0.5523,0,1,0.4477,1,1l0,0&#xA;&#x9;c0,0.5523-0.4477,1-1,1l0,0C9.4477,6,9,5.5523,9,5v0C9,4.4477,9.4477,4,10,4L10,4z M3.5,10L3,10.5C2.2778,11.2222,2,13,2,13&#xA;&#x9;s1.698-0.198,2.5-1L5,11.5L3.5,10z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"school-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M8.5,9V8H10V6H7.5V5H10V3H8.5V2H10V1H6v9h4V9H8.5z M4,7H1V1h3V7z M4,8l-1.5,2L1,8H4z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"school-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M11,13v-1h2v-1H9.5v-1H13V9h-2V8h2V7h-2V6h2V5H9.5V4H13V3h-2V2h2V1H8v13h5v-1H11z M6,11H2V1h4V11z M6,12l-2,2l-2-2H6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"scooter-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M1,9H3a.979.979,0,0,1-1,1A.979.979,0,0,1,1,9ZM9.753,4H9V3h.351a.282.282,0,0,0,.223-.148l.268-.536a.333.333,0,0,0,.009-.066A.25.25,0,0,0,9.6,2H9V1.5H6.25a.25.25,0,0,0,0,.5H8V4.5L5,7H4V5.5A.5.5,0,0,0,3.5,5H3V4H4.75A.25.25,0,0,0,5,3.75a.245.245,0,0,0-.223-.239V3.5L1.25,3A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4H2V5H1.5a.5.5,0,0,0-.5.5V8H6.172a1,1,0,0,0,.709-.294L7.3,7.292A1,1,0,0,1,8,7H9.752A.248.248,0,0,0,10,6.752v-2.5A.247.247,0,0,0,9.753,4ZM9,8a1,1,0,1,0,1,1A1,1,0,0,0,9,8Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"scooter-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M4.908,12a1.5,1.5,0,1,1-2.816,0Zm8.65-6C13.539,6,13,6,13,6V3h.351a.282.282,0,0,0,.223-.148l.268-.536a.334.334,0,0,0,.009-.066A.25.25,0,0,0,13.6,2H13V1.7a.215.215,0,0,0-.2-.2H9.25a.25.25,0,0,0,0,.5H12V6.6L7.6,10H6V7.5A.5.5,0,0,0,5.5,7H5V5H6.75a.25.25,0,0,0,0-.5L2.266,4.034c-.006,0-.01-.007-.016-.007a.25.25,0,0,0-.25.25V4.75A.25.25,0,0,0,2.25,5H3V7H2.5A1.538,1.538,0,0,0,1,8.5v2a.472.472,0,0,0,.442.5C1.461,11,7.5,11,7.5,11L10,10h3.5a.472.472,0,0,0,.5-.442C14,9.539,14,6.5,14,6.5A.472.472,0,0,0,13.558,6ZM12.5,11A1.5,1.5,0,1,0,14,12.5,1.538,1.538,0,0,0,12.5,11Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"shelter-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M4,5v3h6v2H2l0,0l0,0V5.67L1,6V4l9-3v2L4,5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"shelter-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M4,7v5h9.5v2H2l0,0l0,0V7.78L1,8.16V6l13-5v2.14L4,7z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"shoe-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <g>\n    <path d=\"M7.5,5L5.8046,3.9827L4.8011,2.6763c-0.1514-0.1979-0.4349-0.2345-0.6275-0.083c-0.124,0.0961-0.1756,0.2449-0.164,0.3913&#xA;&#x9;&#x9;H4.0024V4H2V3.5C2,3.2238,1.7761,3,1.5,3S1,3.2238,1,3.5V4v1v1h3.5C5.5,6,6,7,7,7c1.0385,0,3,0,3,0l0.0038-0.5&#xA;&#x9;&#x9;C10.0038,5.9456,7.5,5,7.5,5z\"/>\n    <path d=\"M5.5273,7.584C5.1172,7.3101,4.6514,7,4,7H1v1.4707C1,8.763,1.237,9,1.5293,9h1.9414C3.763,9,4,8.763,4,8.4707V8&#xA;&#x9;&#x9;c0.3486,0,0.6377,0.1924,0.9727,0.416C5.3828,8.6895,5.8486,9,6.5,9h3C9.7764,9,10,8.7764,10,8.5V8H6.5&#xA;&#x9;&#x9;C6.1514,8,5.8623,7.8071,5.5273,7.584z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"shoe-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <g>\n    <path d=\"M9.5,7C9.086,6.7652,8.6109,6.4041,8.1848,6.0524l-2.1743-2.831C5.8204,2.9729,5.4644,2.927,5.2227,3.1172&#xA;&#x9;&#x9;C5.0977,3.214,5.0262,3.3536,5.0097,3.5H5V5H3.2087C3.0751,5,2.9469,4.9469,2.8524,4.8524C2.8524,4.8524,2.5,4,2,4&#xA;&#x9;&#x9;S1.4997,4,1.4997,4C1.2238,4,1,4.2237,1,4.4997V6.25v0.634V9h5.5c1.5,0,2,1,3.5,1s4,0,4,0V9.5C14,8,10.5469,7.5938,9.5,7z\"/>\n    <path d=\"M9.5,11c-0.6318,0-1.0469-0.207-1.5264-0.4473C7.4556,10.2939,6.8682,10,6,10H1.5004H1v1.4996&#xA;&#x9;&#x9;C1,11.7759,1.224,12,1.5004,12h3.9993C5.776,12,6,11.7759,6,11.4996V11c0.6318,0,1.0464,0.207,1.5264,0.4473&#xA;&#x9;&#x9;C8.0449,11.7061,8.6318,12,9.5,12h4c0.2764,0,0.5-0.2236,0.5-0.5V11H9.5z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"shop-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.6,4H8.49L8.2,2.27C8.0832,1.7303,7.6738,1.3015,7.14,1.16C6.8794,1.0669,6.6064,1.013,6.33,1H4.67&#xA;&#x9;c-0.2721,0.0075-0.5416,0.0547-0.8,0.14C3.3269,1.2815,2.9117,1.7199,2.8,2.27L2.51,4H1.34&#xA;&#x9;C1.1357,4.0055,0.9746,4.1755,0.9801,4.3798C0.9811,4.4173,0.9878,4.4545,1,4.49l1.21,4.7l0,0C2.3454,9.6605,2.7706,9.9885,3.26,10&#xA;&#x9;h4.48C8.2331,9.9928,8.6635,9.6639,8.8,9.19l0,0l1.2-4.7c0.0682-0.1926-0.0326-0.4041-0.2252-0.4723&#xA;&#x9;C9.7188,3.9978,9.6588,3.9918,9.6,4z M3.27,4l0.27-1.61c0.061-0.2688,0.2782-0.4741,0.55-0.52c0.1846-0.0591,0.3763-0.0928,0.57-0.1&#xA;&#x9;h1.67c0.1937,0.0072,0.3854,0.0409,0.57,0.1c0.2718,0.0459,0.489,0.2512,0.55,0.52L7.73,4H3.27z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"shop-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M13.33,6H11.5l-0.39-2.33c-0.1601-0.7182-0.7017-1.2905-1.41-1.49C9.3507,2.0676,8.9869,2.007,8.62,2H6.38&#xA;&#x9;C6.0131,2.007,5.6493,2.0676,5.3,2.18C4.5917,2.3795,4.0501,2.9518,3.89,3.67L3.5,6H1.67C1.3939,5.9983,1.1687,6.2208,1.167,6.497&#xA;&#x9;C1.1667,6.5489,1.1744,6.6005,1.19,6.65l1.88,6.3l0,0C3.2664,13.5746,3.8453,13.9996,4.5,14h6c0.651-0.0047,1.2247-0.4289,1.42-1.05&#xA;&#x9;l0,0l1.88-6.3c0.0829-0.2634-0.0635-0.5441-0.3269-0.627C13.4268,6.0084,13.3786,6.0007,13.33,6z M4.52,6l0.36-2.17&#xA;&#x9;c0.0807-0.3625,0.3736-0.6395,0.74-0.7C5.8663,3.0524,6.1219,3.0087,6.38,3h2.24c0.2614,0.0078,0.5205,0.0515,0.77,0.13&#xA;&#x9;c0.3664,0.0605,0.6593,0.3375,0.74,0.7L10.48,6h-6H4.52z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"skateboard-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path id=\"icon_concepts:_sports_leisure\" d=\"M8,6H3A2.0024,2.0024,0,0,1,1,4H2A1.001,1.001,0,0,0,3,5H8A1.001,1.001,0,0,0,9,4h1A2.0024,2.0024,0,0,1,8,6ZM8,7A1,1,0,1,0,9,8,1,1,0,0,0,8,7ZM3,7A1,1,0,1,0,4,8,1,1,0,0,0,3,7Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"skateboard-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path id=\"icon_concepts:_sports_leisure\" d=\"M11,8H4A2.0024,2.0024,0,0,1,2,6H3A1.001,1.001,0,0,0,4,7h7a1.001,1.001,0,0,0,1-1h1A2.0024,2.0024,0,0,1,11,8Zm0,1a1,1,0,1,0,1,1A1,1,0,0,0,11,9ZM4,9a1,1,0,1,0,1,1A1,1,0,0,0,4,9Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"skiing-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M11,3.68c-0.0021,0.602-0.4917,1.0883-1.0937,1.0863C9.3043,4.7642,8.818,4.2745,8.82,3.6726&#xA;&#x9;c0.0021-0.602,0.4917-1.0883,1.0937-1.0863C9.9425,2.5864,9.9713,2.5876,10,2.59C10.5666,2.6369,11.0019,3.1115,11,3.68z M10.17,9&#xA;&#x9;c-0.0623-0.1197-0.2083-0.1684-0.33-0.11C9.3623,9.1811,8.7807,9.247,8.25,9.07L3.69,6.81l1.9-1V3.68l1.09,0.55v2.18L7.77,7&#xA;&#x9;l1.09-0.55L7.77,5.86V2.59L5.59,1.5L4.5,2v3.32l-1.9,1l-2-1C0.4757,5.2592,0.3258,5.3107,0.265,5.435&#xA;&#x9;C0.2042,5.5593,0.2557,5.7092,0.38,5.77l0,0L8,9.54c0.2402,0.1011,0.4995,0.1489,0.76,0.14c0.4466-0.0082,0.8851-0.1212,1.28-0.33&#xA;&#x9;c0.1286-0.0502,0.1922-0.1951,0.142-0.3238C10.1785,9.0173,10.1745,9.0085,10.17,9z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"skiing-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M15,4.5C15,5.3284,14.3284,6,13.5,6S12,5.3284,12,4.5S12.6716,3,13.5,3S15,3.6716,15,4.5z M13.72,11.89&#xA;&#x9;c-0.0623-0.1197-0.2083-0.1684-0.33-0.11c-0.6846,0.4194-1.5208,0.5111-2.28,0.25L4.78,8.86L7.5,7.5v-3L9,5.25v3L10.5,9L12,8.25&#xA;&#x9;L10.5,7.5V3l-3-1.5L6,2.25v4.5L3.28,8.11L0.61,6.78C0.4857,6.7192,0.3358,6.7707,0.275,6.895C0.2142,7.0193,0.2657,7.1692,0.39,7.23&#xA;&#x9;l10.5,5.25c0.3156,0.135,0.6568,0.1998,1,0.19c0.5998-0.0103,1.1889-0.161,1.72-0.44c0.1236-0.0615,0.174-0.2116,0.1125-0.3352&#xA;&#x9;C13.7217,11.8932,13.7208,11.8916,13.72,11.89z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"slaughterhouse-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M11,5.75v.241C11,7,10,6.5,10,6.5H8A3.081,3.081,0,0,1,7,8a2.848,2.848,0,0,1-.416.9.26.26,0,0,0-.05.242l.458,1.55A.227.227,0,0,1,7,10.75a.25.25,0,0,1-.25.25.259.259,0,0,1-.244-.173L6,9V8.5H2.75l-.21.42a.25.25,0,0,0-.02.168L3,10.75a.25.25,0,0,1-.25.25.26.26,0,0,1-.237-.172L2,9V8.5a4.013,4.013,0,0,1-.843-.139,1.383,1.383,0,0,1-.5,1.045.242.242,0,0,0-.094.282l.414.99a.213.213,0,0,1,.011.072.25.25,0,0,1-.25.25.253.253,0,0,1-.228-.148L0,9.5a6.031,6.031,0,0,0,0-2v-2A1.486,1.486,0,0,1,2,4.1s.768.132,1.1.154A2.457,2.457,0,0,0,4,4.087,1.666,1.666,0,0,1,4.5,4a1.648,1.648,0,0,1,.844.257,3.166,3.166,0,0,0,.9.23L7,4.5s.966-.484,1-.5V3.5l.5.5A1.474,1.474,0,0,1,10,3.5.914.914,0,0,0,9,4l1,1,.68.529a.425.425,0,0,1,.07-.029A.238.238,0,0,1,11,5.75Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"slaughterhouse-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M15,8.1c0,1.376-1.363.694-1.363.694L12.5,9H11a5.309,5.309,0,0,1-1.5,2,3.272,3.272,0,0,1-.523,1.125c-.077.091-.061.2-.068.33L9,14.755a.264.264,0,0,1-.266.25A.242.242,0,0,1,8.5,14.8L8,11.5H4v3.253A.247.247,0,0,1,3.753,15h0a.25.25,0,0,1-.241-.2L3,12v-.5a8.2,8.2,0,0,1-1.426-.1A1.886,1.886,0,0,1,.9,12.826c-.128.083-.148.211-.133.386,0,0,.19,1.532.19,1.538a.25.25,0,0,1-.25.25.238.238,0,0,1-.23-.174l-.427-1.7a.35.35,0,0,1,.055-.3c.437-.68-.049-2.55-.049-2.55A1.354,1.354,0,0,1,0,9.922V7.5A2.027,2.027,0,0,1,2.736,5.586s.1.03.142.049a15.15,15.15,0,0,0,3.814.038l.179-.062a1.842,1.842,0,0,1,1.26,0,.972.972,0,0,1,.227.089,1.994,1.994,0,0,1,.287.171A1.8,1.8,0,0,0,9.5,6h1V5l.5.5c.5-1.5,2.5-1,2.5-1a1.687,1.687,0,0,0-1.5,1l2.5,2a.613.613,0,0,1,.186-.069A.318.318,0,0,1,15,7.752V8.1Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"slipway-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <g id=\"slipway-final\">\n    <path d=\"M1.0417,8l8,1.3794V10h-8Zm8-4-1,1v.625L3.7345,4.01l.0777-.2852.86-.8447H5.5a.35.35,0,0,0,0-.6992H4.529a.3478.3478,0,0,0-.2451.1L3.2546,3.291a.3566.3566,0,0,0-.0928.1582l-.0856.3137L1.0417,3C1.0948,4,1,5.5094,3,5.8844,3.9829,6.0687,8.0948,7,8.0948,7l1.9469-2Z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"slipway-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <g id=\"slipway-final\">\n    <path d=\"M1.0417,11l12,1.495V13h-12Zm12-4-1,1v.5833L4.2381,5.3318l.0624-.1248L5.652,3.8447h.8311a.35.35,0,0,0,0-.6992H5.5065a.3518.3518,0,0,0-.248.1025L3.7643,4.7529a.3714.3714,0,0,0-.0654.0909l-.109.218L1.0417,4c0,2-.0293,3.9578,2.8595,4.4994C5.321,8.7656,12.0417,10,12.0417,10l2-2Z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\" id=\"snowmobile-11\">\n  <path d=\"M4,8.5a.5.5,0,0,1-.5.5H.5a.5.5,0,0,1,0-1h3A.5.5,0,0,1,4,8.5Zm7-3a.5.5,0,0,0-.5-.5.9289.9289,0,0,0-.0969.0094L6,6H5.5A.5.5,0,0,1,5,5.5v-3a.5.5,0,0,0-.9314-.2528L3,4,.3118,5.038A.4989.4989,0,0,0,0,5.5a.5209.5209,0,0,0,.0864.2809L1,7l2.4113.0007a.4876.4876,0,0,1,.314.1149L5.7234,8.7709A.9964.9964,0,0,0,6.3591,9H9.4949a.5045.5045,0,0,0,.4512-.73L9,7l1.7792-1.0852A.5033.5033,0,0,0,11,5.5Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" id=\"snowmobile-15\">\n  <path d=\"M15,11a1,1,0,0,1-1,1l0,0v0H9.4142a1,1,0,0,1-.7071-.2929L7.146,10.146A.4984.4984,0,0,0,6.7935,10H3.3343a1.0023,1.0023,0,0,1-.6015-.2006L1.3857,8.7888A1.0134,1.0134,0,0,1,1,8a.9953.9953,0,0,1,.4719-.8444L5,5,6.0385,3.3076h0A.5.5,0,0,1,7,3.5V7L8,8H9l5.4115-.9922a.5.5,0,0,1,.3555.915L13,9l1.6313,1.2243A.99.99,0,0,1,15,11ZM5.5,11H3.2247a3.0035,3.0035,0,0,1-1.44-.3679L.74,10.0612a.5.5,0,0,0-.48.8775l1.2687.6934A3.0032,3.0032,0,0,0,2.969,12H5.5a.5.5,0,0,0,0-1Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"soccer-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9,1.25C8.9996,1.9404,8.4397,2.4997,7.7494,2.4994S6.4996,1.9391,6.5,1.2487C6.5004,0.5584,7.0603-0.001,7.7506-0.0006&#xA;&#x9;C7.7638-0.0006,7.7769-0.0004,7.79,0C8.4647,0.0216,9.0003,0.575,9,1.25z M9,8.48c-0.5523,0-1,0.4477-1,1s0.4477,1,1,1s1-0.4477,1-1&#xA;&#x9;S9.5523,8.48,9,8.48z M10.81,5.09L8.94,3.18l0,0C8.8477,3.0648,8.7076,2.9984,8.56,3H1.51c-0.2761,0-0.5,0.2239-0.5,0.5&#xA;&#x9;S1.2339,4,1.51,4H5L2.07,8.3l0,0c-0.0138,0.066-0.0138,0.134,0,0.2C2.012,8.7761,2.1889,9.047,2.465,9.105&#xA;&#x9;C2.7411,9.163,3.012,8.9861,3.07,8.71H3L4.16,7H6l-1.93,3.24l0,0C4.0228,10.3184,3.9986,10.4085,4,10.5&#xA;&#x9;c-0.0552,0.2761,0.1239,0.5448,0.4,0.6c0.2761,0.0552,0.5448-0.1239,0.6-0.4l0,0l3.67-6.38l1.48,1.48&#xA;&#x9;c0.1812,0.2084,0.497,0.2305,0.7054,0.0493c0.2084-0.1812,0.2305-0.497,0.0493-0.7054C10.8879,5.1246,10.8696,5.1065,10.85,5.09&#xA;&#x9;L10.81,5.09z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"soccer-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M11,1.5C11,2.3284,10.3284,3,9.5,3S8,2.3284,8,1.5S8.6716,0,9.5,0S11,0.6716,11,1.5z M11,11c-0.5523,0-1,0.4477-1,1&#xA;&#x9;s0.4477,1,1,1s1-0.4477,1-1S11.5523,11,11,11z M12.84,6.09l-1.91-1.91l0,0C10.8399,4.0675,10.7041,4.0014,10.56,4H3.5&#xA;&#x9;C3.2239,4,3,4.2239,3,4.5S3.2239,5,3.5,5h2.7L3,11.3l0,0c-0.0138,0.066-0.0138,0.134,0,0.2c-0.058,0.2761,0.1189,0.547,0.395,0.605&#xA;&#x9;C3.6711,12.163,3.942,11.9861,4,11.71l0,0L5,10h2l-1.93,4.24l0,0C5.0228,14.3184,4.9986,14.4085,5,14.5&#xA;&#x9;c-0.0552,0.2761,0.1239,0.5448,0.4,0.6c0.2761,0.0552,0.5448-0.1239,0.6-0.4l0,0l4.7-9.38l1.44,1.48&#xA;&#x9;c0.211,0.1782,0.5264,0.1516,0.7046-0.0593C13.0037,6.5523,13.0018,6.2761,12.84,6.09z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"square-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9,10H2c-0.5523,0-1-0.4477-1-1V2c0-0.5523,0.4477-1,1-1h7c0.5523,0,1,0.4477,1,1v7C10,9.5523,9.5523,10,9,10z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"square-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M13,14H2c-0.5523,0-1-0.4477-1-1V2c0-0.5523,0.4477-1,1-1h11c0.5523,0,1,0.4477,1,1v11C14,13.5523,13.5523,14,13,14z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"square-stroked-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.19,1H1.81C1.3626,1,1,1.3626,1,1.81v7.38C1,9.6374,1.3626,10,1.81,10c0,0,0,0,0,0h7.38C9.6374,10,10,9.6374,10,9.19v0&#xA;&#x9;V1.81C10,1.3626,9.6374,1,9.19,1L9.19,1L9.19,1z M2,2h7v7H2V2z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"square-stroked-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M12.7,2.3v10.4H2.3V2.3H12.7 M13,1H2C1.4477,1,1,1.4477,1,2v11c0,0.5523,0.4477,1,1,1h11c0.5523,0,1-0.4477,1-1V2&#xA;&#x9;C14,1.4477,13.5523,1,13,1L13,1z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"stadium-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path4177\" d=\"M5,0v3v0.0117&#xA;&#x9;C2.7922,3.1089,1.0876,3.8182,1,4.6816c0,0,0,2.4594,0,3.6816C0.9995,9.2672,3.0143,10,5.5,10s4.5005-0.7328,4.5-1.6367V4.6816&#xA;&#x9;C9.9122,3.8177,8.2093,3.1082,6,3.0117V2.5723L8.5,1.5L5,0z M1.8184,5.752C2.1366,5.9302,2.5373,6.0838,3,6.2051v2.459&#xA;&#x9;C2.2493,8.4283,1.8213,8.0972,1.8184,7.75V5.752z M9.1816,5.7559V7.75C9.1803,8.0979,8.7521,8.4298,8,8.666V6.2031&#xA;&#x9;C8.4614,6.0836,8.862,5.932,9.1816,5.7559z M4,6.3984C4.4815,6.4652,4.9888,6.4995,5.5,6.5C6.0112,6.4995,6.5185,6.4652,7,6.3984&#xA;&#x9;v2.4922C6.5282,8.9624,6.0171,8.9997,5.5,9C4.9829,8.9997,4.4718,8.9624,4,8.8906V6.3984z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"stadium-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path4177\" d=\"M7,1v2v1.5v0.5098C4.1695,5.1037,2.0021,5.9665,2,7v4.5c0,1.1046,2.4624,2,5.5,2s5.5-0.8954,5.5-2V7&#xA;&#x9;c-0.0021-1.0335-2.1695-1.8963-5-1.9902V4.0625L11,2.75L7,1z M3,8.1465c0.5148,0.2671,1.2014,0.4843,2,0.6328v2.9668&#xA;&#x9;C3.7948,11.477,3,11.0199,3,10.5V8.1465z M12,8.1484V10.5c0,0.5199-0.7948,0.977-2,1.2461V8.7812&#xA;&#x9;C10.7986,8.6328,11.4852,8.4155,12,8.1484z M6,8.9219C6.4877,8.973,6.9925,8.9992,7.5,9C8.0073,8.9999,8.5121,8.9743,9,8.9238&#xA;&#x9;v2.9844C8.5287,11.964,8.0288,12,7.5,12S6.4713,11.964,6,11.9082V8.9219z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"star-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path4749-2-8-2\" d=\"M5.4,0L4,3.5H0l3,3L1.5,11l3.9-2.6&#xA;&#x9;L9.5,11L8,6.5l3-3H7L5.4,0z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"star-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path4749-2-8-2\" d=\"M7.5,0l-2,5h-5l4,3.5l-2,6l5-3.5&#xA;&#x9;l5,3.5l-2-6l4-3.5h-5L7.5,0z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"star-stroked-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path4749-2-8-2\" d=\"M5.5,2.69l0.59,1.47l0.25,0.63h1.81l-1,0.9l-0.5,0.44l0.18,0.63l0.56,1.69L6.07,7.53L5.5,7.12&#xA;&#x9;l-0.57,0.4L3.62,8.44l0.55-1.68l0.21-0.63L3.88,5.7l-1-0.9h1.78l0.25-0.63L5.5,2.69 M5.5,0L4,3.79H0.19l3,2.66L1.71,11L5.5,8.34&#xA;&#x9;L9.29,11L7.78,6.45l3-2.66H7L5.5,0L5.5,0z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"star-stroked-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path4749-2-8-2\" d=\"M7.5,3.19l1.07,2.68L8.82,6.5h3l-2,1.75l-0.5,0.44l0.23,0.63l1,3.13l-2.48-1.77&#xA;&#x9;l-0.57-0.4l-0.57,0.4l-2.52,1.77l1-3.13l0.21-0.63l-0.5-0.44l-2-1.75h3l0.25-0.63L7.5,3.19 M7.5,0.5l-2,5h-5l4,3.5l-2,6l5-3.5l5,3.5&#xA;&#x9;l-2-6l4-3.5h-5L7.5,0.5L7.5,0.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"suitcase-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path17\" d=\"M8,3V1.578L7.3601,1H3.6399&#xA;&#x9;L3,1.7477V3H1.5L1,3.5v6L1.5,10h8L10,9.5v-6L9.5,3H8z M4,2h3v1H4V2z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"suitcase-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path17\" d=\"M11,4V2c0-1-1-1-1-1H5.0497&#xA;&#x9;c0,0-1.1039,0.0015-1.0497,1v2H2c0,0-1,0-1,1v7c0,1,1,1,1,1h11c0,0,1,0,1-1V5c0-1-1-1-1-1H11z M5.5,2.5h4V4h-4V2.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"sushi-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path4999\" d=\"M3.5,2.5C3.2,2.5,3,2.6,3,2.9l0,0H2.1c-1.1,0-2,0.8-2,1.9c0,0.5,0.3,1,0.7,1.4&#xA;&#x9;C0.3,6.5,0,6.9,0,7.5C0,8.3,0.7,9,1.6,9h1.9h2h1.9C8.3,9,9,8.3,9,7.5c0-0.2,0-0.4-0.1-0.6l1,0.5c0.4,0.2,0.8,0,1-0.3&#xA;&#x9;c0.2-0.4-0.053-0.7941-0.3427-0.9442L9.8,5.8l0.5-0.1c0.4-0.1,0.7-0.4,0.6-0.8c-0.1-0.4-0.4-0.6-0.8-0.6l0,0H10L8.4,4.6&#xA;&#x9;C8,3.9,7.3,3.1,6,3c0,0,0-0.5-0.5-0.5l0,0H3.5z M4,3.5h1v4.4l0,0l0,0H4l0,0l0,0V3.5z M7,5.9c0.2,0,0.3,0.1,0.4,0.3l0.1-0.1&#xA;&#x9;C7.6,5.9,7.8,5.9,8,6s0.2,0.3,0.1,0.5L7.8,7C7.9,7.1,8,7.2,8,7.4c0,0.3-0.2,0.5-0.6,0.5H6v-1h0.7V6.3C6.7,6.1,6.8,5.9,7,5.9z M1.9,6&#xA;&#x9;C2,6,2.2,6,2.3,6.2l0.1,0.2c0.1-0.1,0.2-0.1,0.3-0.1C2.9,6.3,3,6.5,3,6.6v0.8l0,0v0.5H1.6C1.2,7.9,1,7.7,1,7.4s0.2-0.5,0.6-0.5h0.3&#xA;&#x9;L1.7,6.5c-0.1-0.2,0-0.4,0.1-0.5C1.8,6,1.8,6,1.9,6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"sushi-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path4999\" d=\"M5.5,3C5.2239,3,5,3.2239,5,3.5H2.75C1.2265,3.5,0,4.7265,0,6.25c0,0.8274,0.3687,1.5592,0.9434,2.0625&#xA;&#x9;C0.3803,8.6675,0,9.2893,0,10c0,1.0994,0.9006,2,2,2h3.5h2H10c1.0994,0,2-0.9006,2-2c0-0.4883-0.1863-0.9294-0.4805-1.2773&#xA;&#x9;l2.1777,0.9629c0.3716,0.1831,0.8213,0.0303,1.0044-0.3413c0.1831-0.3716,0.0303-0.8213-0.3413-1.0044&#xA;&#x9;c-0.0188-0.0093-0.038-0.0178-0.0576-0.0254l-1.8105-0.8027l1.6309-0.2715c0.4099-0.0599,0.6936-0.4408,0.6337-0.8507&#xA;&#x9;c-0.0544-0.3724-0.3765-0.6469-0.7528-0.6415c-0.0426,0.0003-0.085,0.0042-0.127,0.0117l-2.1309,0.3555&#xA;&#x9;C11.2595,4.9521,10.0387,3.7837,8,3.5488V3.5C8,3.2239,7.7761,3,7.5,3H5.5z M6,4h1v5v2H6V9V4z M9.5,8&#xA;&#x9;c0.259,0,0.4638,0.1974,0.4902,0.4492l0.0762-0.1328c0.1385-0.2399,0.4437-0.3201,0.6836-0.1816s0.3201,0.4418,0.1816,0.6816&#xA;&#x9;l-0.2578,0.4473C10.8727,9.445,11,9.7021,11,10c0,0.5626-0.4374,1-1,1H8V9h1V8.5C9,8.223,9.223,8,9.5,8z M2.4395,8.0703&#xA;&#x9;c0.1934-0.0242,0.3903,0.0662,0.4941,0.2461l0.2012,0.3477C3.226,8.5647,3.3538,8.5,3.5,8.5C3.777,8.5,4,8.723,4,9h1v2H2&#xA;&#x9;c-0.5626,0-1-0.4374-1-1s0.4374-1,1-1h0.1738L2.0684,8.8164C1.9299,8.5765,2.0101,8.2733,2.25,8.1348&#xA;&#x9;C2.31,8.1001,2.375,8.0784,2.4395,8.0703z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"swimming-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path8421-9-1-0-7\" d=\"M8.0039,0.4941l-0.6992,0.502L4.6035,2.5977&#xA;&#x9;C4.3036,2.6967,4.2042,3.1962,4.4023,3.4961l0.5996,1.002l-2.5,2l1,1.002l2-1.002L7.5039,7.5l1-1.002l-3.002-3.502l3.002-1.5v-1.002&#xA;&#x9;C8.5039,0.4941,8.0039,0.4941,8.0039,0.4941z M9.0059,2.9961c-0.553,0-1.002,0.4489-1.002,1.002s0.4489,1,1.002,1&#xA;&#x9;c0.553,0,1-0.447,1-1S9.5589,2.9961,9.0059,2.9961z M2,7.998L0,9v1l2-1l1.5,1l2-1l2,1L9,9l2,1V9L9,7.998L7.5,9l-2-1.002L3.5,9&#xA;&#x9;L2,7.998z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"swimming-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path16388\" d=\"M10.1113,2C9.9989,2,9.6758,2.1465,9.6758,2.1465L6.3535,3.8262&#xA;&#x9;C5.9111,4.0024,5.7358,4.7081,6.002,5.0605l0.9707,1.4082L3.002,8.498L5,9.998l2.502-1.5l2.5,1.5l1.002-1.002l-3-4l2.5566-1.5293&#xA;&#x9;c0.5286-0.2662,0.4434-0.7045,0.4434-0.9707C10.9999,2.2861,10.6437,2,10.1113,2z M12.252,5C11.2847,5,10.5,5.7827,10.5,6.75&#xA;&#x9;s0.7847,1.752,1.752,1.752s1.75-0.7847,1.75-1.752S13.2192,5,12.252,5z M2.5,10L0,11.5V13l2.5-1.5L5,13l2.502-1.5l2.5,1.5L12,11.5&#xA;&#x9;l3,1.5v-1.5L12,10l-1.998,1.5l-2.5-1.5L5,11.5L2.5,10z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"table-tennis-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path id=\"icon_concepts:_sports_leisure\" d=\"M8.5928,7.2324a2.6052,2.6052,0,0,1-1.1448.642L3.1149,3.5413a2.604,2.604,0,0,1,.6419-1.1448C5.3189.8451,7.33.4386,8.9459,2.0541,10.5507,3.659,10.1549,5.6811,8.5928,7.2324ZM3,5.2531a2.5994,2.5994,0,0,1-.0135,1.1555,2.7324,2.7324,0,0,1-.3638.77C1.8845,8.0455,1.05,8.5163,1.05,8.8266A2.3857,2.3857,0,0,0,2.1734,9.95c.31,0,.77-.8024,1.6583-1.5621a2.5178,2.5178,0,0,1,.8024-.3959A2.6735,2.6735,0,0,1,5.7255,8Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"table-tennis-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path id=\"icon_concepts:_sports_leisure\" d=\"M11.9676,10.2275a3.8116,3.8116,0,0,1-1.9122.9831L3.7678,4.9338A4.0283,4.0283,0,0,1,4.7725,3.0324C7.03.7745,9.98.2235,12.3781,2.6219S14.2255,7.97,11.9676,10.2275Zm-6.987,1.6093A3.8422,3.8422,0,0,1,6.149,11.278,4.5328,4.5328,0,0,1,8,11.4452L3.5456,7a4.4126,4.4126,0,0,1,.1572,1.9223,3.6639,3.6639,0,0,1-.5208,1.1159c-1.072,1.263-2.132,1.727-2.132,2.1879A1.8378,1.8378,0,0,0,2.7739,13.95C3.2348,13.95,3.6917,12.9368,4.9806,11.8368Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"teahouse-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M6.2,4C7.4,3.7,8,3.7,8,2.5c0-0.6-0.4-0.8-1.6-1.3C5.6,0.9,5.3,0.9,5.3,0.1C5,1,5.2,1.3,6.1,1.8C8.1,2.8,6.2,4,6.2,4z&#xA;&#x9; M3.9,4C4.6,3.8,5,3.8,5,3.1C5,2.7,4.7,2.6,4,2.2C3.5,2,3.3,1.5,3.3,1C3.1,1.6,3.2,2.3,3.8,2.6C5,3.2,3.9,4,3.9,4z M9,5H2l1,3&#xA;&#x9;c0.3,0.4,0.6,0.7,1,1v2h3V9c0.4-0.3,0.7-0.6,1-1L9,5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"teahouse-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M11,7c-0.2,1.4-0.5,2.7-1,4c-0.3,0.4-0.6,0.7-1,1v2H6v-2c-0.4-0.3-0.7-0.6-1-1C4.5,9.7,4.2,8.4,4,7H11z M8.1,5.7&#xA;&#x9;c1.2-0.3,1.7-0.3,1.8-1.5c0-0.6-0.4-0.8-1.5-1.4C7.5,2.4,7.1,1.8,7.2,1C6.8,1.9,7,3,8,3.5C10,4.5,8.1,5.7,8.1,5.7z M5.8,6&#xA;&#x9;c0.7-0.2,1.1-0.2,1.1-0.9c0-0.4-0.3-0.5-0.9-0.9C5.4,4,5.1,3.5,5.2,3C4.9,3.6,5.1,4.3,5.7,4.6C6.9,5.2,5.8,6,5.8,6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\" id=\"telephone-11\">\n  <path d=\"M3,9.4a0.73,0.73,0,0,0,1,0l0.74-.74a0.73,0.73,0,0,0,0-1ZM7.56,4.8a0.73,0.73,0,0,0,1,0l0.71-.71a0.73,0.73,0,0,0,0-1ZM5.88,3.57L3.57,5.88a0.37,0.37,0,0,0,0,.52L4,6.84,2.26,8.6a2.27,2.27,0,0,1-.73-1.34v-1a1.3452,1.3452,0,0,1,.52-1L5.26,2.05a1.3452,1.3452,0,0,1,1-.52h1a2.27,2.27,0,0,1,1.34.73L6.84,4,6.4,3.57a0.37,0.37,0,0,0-.52,0\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" id=\"telephone-15\">\n  <path d=\"M4.51,8.88a0.51,0.51,0,0,0,0,.72l0.72,0.72L3.07,12.5,2.7,12.13A2.24,2.24,0,0,1,2,10.69V9.24a2.24,2.24,0,0,1,.7-1.45L7.77,2.72A2.24,2.24,0,0,1,9.22,2h1.45a2.24,2.24,0,0,1,1.45.72l0.36,0.36L10.31,5.26,9.58,4.53a0.51,0.51,0,0,0-.72,0ZM4.13,13.6a1,1,0,0,0,1.4137.0363Q5.5623,13.6186,5.58,13.6l0.72-.72a1,1,0,0,0,.0363-1.4137Q6.3186,11.4477,6.3,11.43Zm7.25-7.28a1,1,0,0,0,1.4137.0363C12.8061,6.3445,13.55,5.6,13.55,5.6a1,1,0,0,0,.0363-1.4137Q13.5686,4.1677,13.55,4.15Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"tennis-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.38,1.63C8.5569.7765,6.6118.8078,5.24,2.24A4.26,4.26,0,0,0,4.05,5a4.1491,4.1491,0,0,1-.5,2.07.62.62,0,0,0-.67.12L1.19,8.88a.61.61,0,0,0,0,.85l.09.09a.5941.5941,0,0,0,.84.01l.01-.01L3.82,8.13a.5994.5994,0,0,0,.12-.67,5.8237,5.8237,0,0,1,2.21-.49A3.9655,3.9655,0,0,0,8.77,5.78C10.09,4.46,10.3421,2.6276,9.38,1.63ZM6.15,6.47a1.6589,1.6589,0,0,1-1.17-.44,1.923,1.923,0,0,1-.31-1.98L6.95,6.33A2.5434,2.5434,0,0,1,6.15,6.47Zm1.06-.23L4.77,3.8a3.72,3.72,0,0,1,.7-1.07L8.28,5.55A3.5558,3.5558,0,0,1,7.21,6.24Zm1.25-.87L5.64,2.54a3.9241,3.9241,0,0,1,1.04-.71h.01l2.5,2.5A3.578,3.578,0,0,1,8.46,5.37Zm.83-1.29L6.94,1.72a2.76,2.76,0,0,1,.92-.17,1.6156,1.6156,0,0,1,1.17.44,1.7156,1.7156,0,0,1,.41,1.52A3,3,0,0,1,9.29,4.08Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"tennis-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M13.1284,1.87c-1.5418-1.5406-4.5535-.7759-6.28,1.05a6.8282,6.8282,0,0,0-1.88,4.4,5.7275,5.7275,0,0,1-.57,2.72.6814.6814,0,0,0-.67.17l-2.49,2.5a.6941.6941,0,0,0,0,.98l.07.07a.7051.7051,0,0,0,.98,0l2.5-2.49a.683.683,0,0,0,.18-.66,8.5694,8.5694,0,0,1,3.12-.58,6.5487,6.5487,0,0,0,3.99-1.87C14.1084,6.13,14.579,3.3194,13.1284,1.87Zm-2.2-.04a2.3071,2.3071,0,0,1,1.64.61,2.548,2.548,0,0,1,.5,2.44l-2.95-2.96A3.8648,3.8648,0,0,1,10.9284,1.83Zm-4.57,6.81a2.6485,2.6485,0,0,1-.48-2.55l3.04,3.04A2.8522,2.8522,0,0,1,6.3584,8.64Zm2.88.39-3.26-3.27a5.1623,5.1623,0,0,1,.49-1.08l3.85,3.85A5.5093,5.5093,0,0,1,9.2384,9.03Zm1.34-.66-3.94-3.95a5.2032,5.2032,0,0,1,.74-.9l4.1,4.1A5.6869,5.6869,0,0,1,10.5784,8.37Zm1.11-.96-4.1-4.1a5.5714,5.5714,0,0,1,.84-.65l3.92,3.92A5.7187,5.7187,0,0,1,11.6884,7.41Zm.82-1.09L8.6984,2.5a4.1707,4.1707,0,0,1,1.09-.48l3.2,3.2A5.5656,5.5656,0,0,1,12.5084,6.32Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"theatre-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"path6370\" d=\"M0.6055,0.6992C0.3027,0.6992,0,1.0019,0,1.3047v3.7344C0,6.4519,0.578,8,3,8h0.5V6.1836L1.2109,6.1758&#xA;&#x9;c0,0,0.3026-1.1367,1.8164-1.1367c0.3028,0,0.4036,0.0006,0.6055,0.1016V3.7266c0-0.6055,0.2018-1.0078,0.6055-1.3105&#xA;&#x9;C4.541,2.1133,4.789,2,5.3945,2H6V1.3945c0-0.3028-0.1972-0.6582-0.5-0.6582c-0.6055,0-1.1607,0.5684-2.4727,0.5684&#xA;&#x9;C2.0182,1.3047,1.211,0.6992,0.6055,0.6992z M1.75,2.5c0.4142,0,0.75,0.3358,0.75,0.75S2.1642,4,1.75,4S1,3.6642,1,3.25&#xA;&#x9;S1.3358,2.5,1.75,2.5z M5.5,3C5.1972,3,4.9453,3.4238,4.9453,3.7266v3.7344c0,1.4128,0.6053,3.0273,3.0273,3.0273&#xA;&#x9;S11,8.7729,11,7.4609V3.7266C11,3.4238,10.8028,3,10.5,3C9.8945,3,8.9083,3.5,8,3.5S6.1055,3,5.5,3z M6.75,5&#xA;&#x9;C7.1642,5,7.5,5.3358,7.5,5.75S7.1642,6.5,6.75,6.5S6,6.1642,6,5.75S6.3358,5,6.75,5z M9.25,5C9.6642,5,10,5.3358,10,5.75&#xA;&#x9;S9.6642,6.5,9.25,6.5S8.5,6.1642,8.5,5.75S8.8358,5,9.25,5z M6.1562,8.0664h3.7344c0,0-0.3026,1.2109-1.8164,1.2109&#xA;&#x9;S6.1562,8.0664,6.1562,8.0664z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"theatre-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path6342-3\" d=\"M2,1c0,0-1,0-1,1v5.1582C1,8.8885,1.354,11,4.5,11H5V8L2.5,9c0,0,0-2.5,2.5-2.5V5&#xA;&#x9;c0-0.7078,0.0868-1.3209,0.5-1.7754C5.8815,2.805,6.5046,1.9674,8.1562,2.7539L9,3.3027V2c0,0,0-1-1-1C7.2922,1,6.0224,2,5,2&#xA;&#x9;S2.7865,1,2,1z M3,3c0.5523,0,1,0.4477,1,1S3.5523,5,3,5S2,4.5523,2,4S2.4477,3,3,3z M7,4c0,0-1,0-1,1v5c0,2,1,4,4,4s4-2,4-4V5&#xA;&#x9;c0-1-1-1-1-1c-0.7078,0-1.9776,1-3,1S7.7865,4,7,4z M8,6c0.5523,0,1,0.4477,1,1S8.5523,8,8,8S7,7.5523,7,7S7.4477,6,8,6z M12,6&#xA;&#x9;c0.5523,0,1,0.4477,1,1s-0.4477,1-1,1s-1-0.4477-1-1S11.4477,6,12,6z M7.5,10H10h2.5c0,0,0,2.5-2.5,2.5S7.5,10,7.5,10z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"toilet-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M3.33,2.19c-0.6075,0-1.1-0.4925-1.1-1.1s0.4925-1.1,1.1-1.1s1.1,0.4925,1.1,1.1v0C4.43,1.6975,3.9375,2.19,3.33,2.19z&#xA;&#x9; M10.27,1.09c0-0.6075-0.4925-1.1-1.1-1.1c-0.6075,0-1.1,0.4925-1.1,1.1s0.4925,1.1,1.1,1.1c0.6036,0,1.0945-0.4864,1.1-1.09V1.09z&#xA;&#x9; M6.51,4.93L6.51,4.93L4.7,3.12l0,0C4.6306,3.0442,4.5328,3.0008,4.43,3H2.22C2.1271,3.0008,2.0378,3.0365,1.97,3.1H2L0.14,4.93&#xA;&#x9;c-0.1709,0.1218-0.2107,0.3591-0.0889,0.53s0.3591,0.2107,0.53,0.0889C0.6155,5.5244,0.6455,5.4944,0.67,5.46l1.58-1.58L0.77,8h1.46&#xA;&#x9;v2.51c-0.0055,0.0365-0.0055,0.0735,0,0.11c0.0339,0.2071,0.2293,0.3475,0.4364,0.3136C2.8274,10.9072,2.9536,10.781,2.98,10.62H3V8&#xA;&#x9;h0.69v2.63l0,0c0.0339,0.2071,0.2293,0.3475,0.4364,0.3136C4.2874,10.9172,4.4136,10.791,4.44,10.63&#xA;&#x9;c0.0055-0.0365,0.0055-0.0735,0-0.11V8h1.44L4.41,3.88L6,5.46l0,0c0.0718,0.0783,0.1738,0.1221,0.28,0.12&#xA;&#x9;c0.2099,0,0.38-0.1701,0.38-0.38l0,0C6.6518,5.0924,6.597,4.9938,6.51,4.93z M8.62,7v3.63&#xA;&#x9;c-0.0335,0.2016,0.1028,0.3921,0.3044,0.4256c0.2016,0.0335,0.3921-0.1028,0.4256-0.3044c0.0067-0.0401,0.0067-0.0811,0-0.1212V7H11&#xA;&#x9;V3.37C11,3.1657,10.8343,3,10.63,3H7.71C7.5057,3,7.34,3.1657,7.34,3.37V7H8.62z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"toilet-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M4.5,3C3.6716,3,3,2.3284,3,1.5S3.6716,0,4.5,0S6,0.6716,6,1.5S5.3284,3,4.5,3z M14,1.5C14,0.6716,13.3284,0,12.5,0&#xA;&#x9;S11,0.6716,11,1.5S11.6716,3,12.5,3S14,2.3284,14,1.5z M8.86,6.64L8.86,6.64L6.38,4.15l0,0C6.2798,4.0492,6.142,3.9949,6,4H3&#xA;&#x9;C2.8697,4.0003,2.7445,4.0503,2.65,4.14l0,0L0.14,6.63c-0.2261,0.177-0.2659,0.5039-0.0889,0.73s0.5039,0.2659,0.73,0.0889&#xA;&#x9;C0.8142,7.423,0.8441,7.3931,0.87,7.36L3,5.2L1,11h2v3.33c-0.0075,0.0497-0.0075,0.1003,0,0.15&#xA;&#x9;c0.0555,0.2761,0.3244,0.455,0.6005,0.3995C3.802,14.839,3.9595,14.6815,4,14.48l0,0V11h1v3.5l0,0&#xA;&#x9;c0.0555,0.2761,0.3244,0.455,0.6005,0.3995C5.802,14.859,5.9595,14.7015,6,14.5c0.0075-0.0497,0.0075-0.1003,0-0.15V11h2L6,5.2&#xA;&#x9;l2.14,2.16l0,0c0.0967,0.1081,0.2349,0.17,0.38,0.17C8.7954,7.5088,9.0061,7.2761,9,7C9.0023,6.8663,8.9521,6.737,8.86,6.64z&#xA;&#x9; M14.5,4h-4C10.2239,4,10,4.2239,10,4.5v5c0,0.2761,0.2239,0.5,0.5,0.5S11,9.7761,11,9.5v5c0,0.2761,0.2239,0.5,0.5,0.5&#xA;&#x9;s0.5-0.2239,0.5-0.5v-5h1v5c0,0.2761,0.2239,0.5,0.5,0.5s0.5-0.2239,0.5-0.5v-5c0,0.2761,0.2239,0.5,0.5,0.5S15,9.7761,15,9.5v-5&#xA;&#x9;C15,4.2239,14.7761,4,14.5,4z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"town-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M3.695,1.1a.256.256,0,0,0-.4,0L1.055,3.931A.254.254,0,0,0,1,4.088V9.75a.25.25,0,0,0,.25.25h1.5A.25.25,0,0,0,3,9.75V8H4V9.75a.25.25,0,0,0,.25.25H5V5.5a.615.615,0,0,1,.147-.4L6,4ZM3,7H2V6H3ZM3,5H2V4H3ZM8.194,3.742a.248.248,0,0,0-.387,0L6.054,5.932A.249.249,0,0,0,6,6.087V9.752A.248.248,0,0,0,6.248,10h3.5A.248.248,0,0,0,10,9.756h0V6.087a.249.249,0,0,0-.054-.155ZM7,6H8V7H7ZM9,9H8V8H9Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"town-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M10.651,7.121a.251.251,0,0,0-.314,0L8.092,8.929A.247.247,0,0,0,8,9.122v4.625A.253.253,0,0,0,8.253,14H9.747A.253.253,0,0,0,10,13.747h0V12h1v1.747a.253.253,0,0,0,.253.253h1.494A.253.253,0,0,0,13,13.747h0V9.12a.25.25,0,0,0-.094-.2ZM10,11H9V10h1Zm2,0H11V10h1ZM5.71,1.815a.252.252,0,0,0-.42,0L2.042,5.936A.252.252,0,0,0,2,6.076v7.671A.252.252,0,0,0,2.251,14h2.5A.252.252,0,0,0,5,13.748V12H6v1.748A.252.252,0,0,0,6.252,14H7V8a.5.5,0,0,1,.188-.391L9,6C9,5.95,5.71,1.815,5.71,1.815ZM4,10H3V9H4ZM4,7H3V6H4Zm2,3H5V9H6ZM6,7H5V6H6Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"town-hall-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M5.5,0L1,2v1h9V2L5.5,0z M2,4v4L1,9v1h9V9L9,8V4H2z M3,5h1v3H3V5z M5,5h1v3H5V5z M7,5h1v3H7V5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"town-hall-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path7509\" d=\"M7.5,0L1,3.4453V4h13V3.4453L7.5,0z M2,5v5l-1,1.5547V13h13v-1.4453L13,10V5H2z M4,6h1v5.5H4V6z M7,6h1v5.5H7&#xA;&#x9;V6z M10,6h1v5.5h-1V6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"triangle-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"rect3338\" d=\"M5.5174,1.2315&#xA;&#x9;C5.3163,1.2253,5.1276,1.328,5.024,1.5l-4,6.6598C0.8013,8.5293,1.0679,8.9999,1.5,9h8c0.4321-0.0001,0.6987-0.4707,0.476-0.8402&#xA;&#x9;l-4-6.6598C5.8787,1.3386,5.706,1.2375,5.5174,1.2315z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"triangle-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path21090-9\" d=\"M7.5385,2&#xA;&#x9;C7.2437,2,7.0502,2.1772,6.9231,2.3846l-5.8462,9.5385C1,12,1,12.1538,1,12.3077C1,12.8462,1.3846,13,1.6923,13h11.6154&#xA;&#x9;C13.6923,13,14,12.8462,14,12.3077c0-0.1538,0-0.2308-0.0769-0.3846L8.1538,2.3846C8.028,2.1765,7.7882,2,7.5385,2z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"triangle-stroked-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"rect3338\" d=\"M5.5174,1.2315&#xA;&#x9;C5.3163,1.2253,5.1276,1.328,5.024,1.5l-4,6.6598C0.8013,8.5293,1.0679,8.9999,1.5,9h8c0.4321-0.0001,0.6987-0.4707,0.476-0.8402&#xA;&#x9;l-4-6.6598C5.8787,1.3386,5.706,1.2375,5.5174,1.2315z M5.5,2.8627l3.0191,5.0286H2.4809L5.5,2.8627z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"triangle-stroked-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"rect3338\" d=\"M7.5243,1.5004&#xA;&#x9;C7.2429,1.4913,6.9787,1.6423,6.8336,1.8952l-5.5,9.8692C1.0218,12.3078,1.395,12.9999,2,13h11&#xA;&#x9;c0.605-0.0001,0.9782-0.6922,0.6664-1.2355l-5.5-9.8692C8.0302,1.6579,7.7884,1.5092,7.5243,1.5004z M7.5,3.8993l4.1267,7.4704&#xA;&#x9;H3.3733L7.5,3.8993z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"veterinary-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M5.5,4.32C4.2852,4.3446,3.3204,5.3493,3.345,6.5641C3.3464,6.6363,3.3515,6.7083,3.36,6.78l0,0&#xA;&#x9;C2.9264,6.9258,2.5181,7.1384,2.15,7.41C1.5186,7.8752,1.384,8.7642,1.8492,9.3955C1.8528,9.4004,1.8564,9.4052,1.86,9.41&#xA;&#x9;c0.4895,0.6043,1.3633,0.7267,2,0.28C4.3412,9.3542,4.9132,9.1728,5.5,9.17c0.5836-0.006,1.1554,0.1648,1.64,0.49&#xA;&#x9;c0.6009,0.4953,1.4896,0.4096,1.9848-0.1913C9.1299,9.4625,9.135,9.4563,9.14,9.45c0.5003-0.5528,0.4578-1.4065-0.095-1.9068&#xA;&#x9;C9.0084,7.51,8.97,7.4789,8.93,7.45L8.85,7.41C8.4703,7.1575,8.0646,6.9463,7.64,6.78l0,0c0.1438-1.2065-0.7176-2.3011-1.9241-2.445&#xA;&#x9;C5.6442,4.3265,5.5722,4.3215,5.5,4.32z M1.63,3.12C1.0889,3.3737,0.8458,4.0102,1.08,4.56c0.0427,0.5931,0.5567,1.0401,1.15,1&#xA;&#x9;c0.5411-0.2537,0.7842-0.8902,0.55-1.44C2.7373,3.5269,2.2233,3.0799,1.63,3.12z M9.37,3.12c0.5411,0.2537,0.7842,0.8902,0.55,1.44&#xA;&#x9;c-0.0427,0.5931-0.5567,1.0401-1.15,1C8.2289,5.3063,7.9858,4.6698,8.22,4.12C8.2627,3.5269,8.7767,3.0799,9.37,3.12z M3.77,1&#xA;&#x9;C3.257,1.2045,3.0069,1.7862,3.2115,2.2992C3.2142,2.3062,3.2171,2.3131,3.22,2.32c0.0792,0.5925,0.5637,1.0478,1.16,1.09&#xA;&#x9;c0.513-0.2045,0.7631-0.7862,0.5585-1.2992C4.9358,2.1038,4.9329,2.0969,4.93,2.09C4.8508,1.4975,4.3663,1.0422,3.77,1z M7.23,1&#xA;&#x9;c0.513,0.2045,0.7631,0.7862,0.5585,1.2992C7.7858,2.3062,7.7829,2.3131,7.78,2.32C7.7008,2.9125,7.2163,3.3678,6.62,3.41&#xA;&#x9;C6.107,3.2055,5.8569,2.6238,6.0615,2.1108C6.0642,2.1038,6.0671,2.0969,6.07,2.09C6.1492,1.4975,6.6337,1.0422,7.23,1z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"veterinary-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path3340\" d=\"M7.5,6c-2.5,0-3,2.28-3,3.47l0,0c-0.6097,0.2059-1.1834,0.5062-1.7,0.89&#xA;&#x9;c-0.871,0.6614-1.0492,1.8998-0.4,2.78c0.6799,0.8542,1.9081,1.0297,2.8,0.4c0.6779-0.4601,1.4808-0.701,2.3-0.69&#xA;&#x9;c0.8192-0.011,1.6221,0.2299,2.3,0.69c0.8575,0.6854,2.1072,0.5515,2.8-0.3c0.6888-0.8134,0.5878-2.0313-0.2256-2.7201&#xA;&#x9;c-0.0243-0.0206-0.0491-0.0406-0.0744-0.0599l-0.1-0.1c-0.5333-0.3564-1.1032-0.6548-1.7-0.89l0,0C10.5,8.29,10,6,7.5,6z\"/>\n  <path id=\"ellipse4153\" d=\"M2.08,4.3c-0.7348,0.3676-1.0652,1.2371-0.76,2c0.064,0.8282,0.7809,1.4517,1.61,1.4&#xA;&#x9;c0.7348-0.3676,1.0652-1.2371,0.76-2C3.626,4.8718,2.9091,4.2483,2.08,4.3z\"/>\n  <path id=\"ellipse4163\" d=\"M12.93,4.3c0.7348,0.3676,1.0653,1.2371,0.76,2c-0.064,0.8282-0.7809,1.4517-1.61,1.4&#xA;&#x9;c-0.7348-0.3676-1.0653-1.2371-0.76-2C11.384,4.8718,12.1009,4.2483,12.93,4.3z\"/>\n  <path id=\"ellipse4165\" d=\"M5.08,1.3c-0.68,0.09-1,0.94-0.76,1.87C4.4301,3.9951,5.1003,4.6321,5.93,4.7c0.68-0.09,1-0.94,0.76-1.87&#xA;&#x9;C6.5799,2.0049,5.9097,1.3679,5.08,1.3z\"/>\n  <path id=\"ellipse4167\" d=\"M9.93,1.3c0.68,0.09,1,0.94,0.76,1.87C10.5791,3.9986,9.9036,4.6365,9.07,4.7c-0.68-0.08-1-0.94-0.76-1.87&#xA;&#x9;C8.4209,2.0014,9.0964,1.3634,9.93,1.3z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"viewpoint-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path id=\"e46c0471-5704-47b4-a95f-3ffb079cac96\" d=\"M4.4029,5.7765a.852.852,0,0,0-.183.2151L.75,3.3215a5.78,5.78,0,0,1,1.1-1.11ZM9.15,2.2216,6.6059,5.7824a1.3786,1.3786,0,0,1,.1841.1992l3.47-2.66A5.78,5.78,0,0,0,9.15,2.2216ZM5.37,7.0087a1,1,0,1,0,1.122.8609A1,1,0,0,0,5.37,7.0087ZM4.72,1.0216a5.7742,5.7742,0,0,0-1.52.41L4.9676,5.4353a.815.815,0,0,1,.2382-.0618Zm1.56.01L5.8265,5.3853a.7611.7611,0,0,1,.2059.0441L7.79,1.4315A5.5185,5.5185,0,0,0,6.28,1.0316Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"viewpoint-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path id=\"cf3b542b-d2af-4732-9b92-9e3dc05e460f\" d=\"M6.02,8.425a2.3859,2.3859,0,0,0-.46.44l-4.55-3.5a7.9976,7.9976,0,0,1,1.51-1.51Zm6.46-4.56-3.5,4.55a2.3971,2.3971,0,0,1,.45.45l4.56-3.5A7.945,7.945,0,0,0,12.48,3.865ZM7.3042,10.0129a1.5,1.5,0,1,0,1.6829,1.2914h0A1.5,1.5,0,0,0,7.3042,10.0129ZM6.43,2.235a7.9329,7.9329,0,0,0-2.06.55l2.2,5.32a2.0438,2.0438,0,0,1,.61-.17Zm2.14.01-.75,5.69a2.49,2.49,0,0,1,.61.16l2.2-5.3A7.2129,7.2129,0,0,0,8.57,2.245Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"village-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M2.777,2.3.3,5.6a.272.272,0,0,0-.05.15A.25.25,0,0,0,.5,6H1V9.745A.255.255,0,0,0,1.255,10h2.49A.255.255,0,0,0,4,9.745H4V5.467A.253.253,0,0,1,4.064,5.3L5,4.5,3.2,2.316A.255.255,0,0,0,2.777,2.3ZM3,7H2V6H3ZM9.75,3h-.5A.25.25,0,0,0,9,3.25V5.2L7.658,4.126a.253.253,0,0,0-.316,0L5.1,5.926a.253.253,0,0,0-.095.2V9.747A.253.253,0,0,0,5.253,10H6.747A.253.253,0,0,0,7,9.747H7V8H8V9.747A.253.253,0,0,0,8.253,10H9.747A.253.253,0,0,0,10,9.747h0V3.25A.25.25,0,0,0,9.75,3ZM7,7H6V6H7ZM9,7H8V6H9Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"village-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M6.176,4.176a.249.249,0,0,0-.352,0l-4.4,4.4A.25.25,0,0,0,1.6,9H3v4.751A.249.249,0,0,0,3.249,14h3.5A.249.249,0,0,0,7,13.753H7V8.323a.249.249,0,0,1,.073-.176L8.5,6.5ZM6,12H5V11H6Zm0-2H5V9H6Zm6.75-4h-.5a.25.25,0,0,0-.25.25V8L10.676,6.176a.249.249,0,0,0-.352,0L8.056,8.932A.246.246,0,0,0,8,9.088v4.66A.249.249,0,0,0,8.246,14h1.5A.253.253,0,0,0,10,13.748h0V12h1v1.747a.253.253,0,0,0,.253.253h1.5A.25.25,0,0,0,13,13.751V6.25A.25.25,0,0,0,12.75,6ZM10,11H9V10h1Zm2,0H11V10h1Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"volcano-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path id=\"rect3338\" d=\"M3,1l1.5,3h2L8,3V2L6,3V1H5.5L5,2.5L3.5,1H3z M3.5215,5l-2.498,4.1602C0.8007,9.5296,1.0679,9.9999,1.5,10h8&#xA;&#x9;c0.4321-0.0001,0.6993-0.4704,0.4766-0.8398L7.4785,5H7v0.5C7,5.777,6.777,6,6.5,6S6,5.777,6,5.5C6,5.2239,5.7761,5,5.5,5&#xA;&#x9;S5,5.2239,5,5.5v2C5,7.777,4.777,8,4.5,8S4,7.777,4,7.5V5H3.5215z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"volcano-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path6447\" d=\"M8.4844,1.0002&#xA;&#x9;c-0.1464,0.005-0.2835,0.0731-0.375,0.1875L6.4492,3.2619L4.8438,1.7385C4.4079,1.3374,3.7599,1.893,4.0899,2.385l1.666,2.4004&#xA;&#x9;C5.9472,5.061,6.3503,5.0737,6.5586,4.8108C6.7249,4.6009,7,4.133,7.5,4.133s0.7929,0.4907,0.9414,0.6777&#xA;&#x9;c0.175,0.2204,0.4973,0.2531,0.7129,0.0723l1.668-1.4004c0.4408-0.3741,0.0006-1.0735-0.5273-0.8379L9,3.2268V1.5002&#xA;&#x9;C9.0002,1.2179,8.7666,0.9915,8.4844,1.0002L8.4844,1.0002z M5,6.0002L2.0762,11.924C1.9993,12.0009,2,12.155,2,12.3088&#xA;&#x9;c0,0.5385,0.3837,0.6914,0.6914,0.6914h9.6172c0.3846,0,0.6914-0.153,0.6914-0.6914c0-0.1538,0.0008-0.2309-0.0762-0.3848L10,6.0002&#xA;&#x9;c-0.5,0-1,0.5-1,1v0.5c0,0.277-0.223,0.5-0.5,0.5S8,7.7772,8,7.5002v-0.5c0-0.2761-0.2238-0.5-0.5-0.5S7,6.7241,7,7.0002v2&#xA;&#x9;c0,0.277-0.223,0.5-0.5,0.5S6,9.2772,6,9.0002v-2C6,6.5002,5.5,6.0002,5,6.0002z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"volleyball-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.99,5.73a3.6572,3.6572,0,0,1-.1.74A6.3224,6.3224,0,0,0,7.44,5.05a5.9537,5.9537,0,0,0-1.32-.27c-.03,0-.07-.01-.11-.01A4.6052,4.6052,0,0,1,5.5,3.64a1.0563,1.0563,0,0,1-.06-.24h.12a4.8784,4.8784,0,0,1,1.01.11,5.0388,5.0388,0,0,1,1.14.36,4.8341,4.8341,0,0,1,.94.53A5.1356,5.1356,0,0,1,9.99,5.73ZM9.33,7.31a5.1964,5.1964,0,0,0-1.36-.97c-.05.1-.11.19-.17.29a5.8645,5.8645,0,0,1-.59.82,7.1807,7.1807,0,0,1-.78.78,6.72,6.72,0,0,1-.93.65,6.3643,6.3643,0,0,1-1.86.72,4.524,4.524,0,0,0,3.72,0,4.1584,4.1584,0,0,0,1.25-.86,3.1983,3.1983,0,0,0,.43-.47,3.7473,3.7473,0,0,0,.48-.76A1.1915,1.1915,0,0,0,9.33,7.31ZM8.68,2.32a4.5077,4.5077,0,0,0-1.24-.88,3.979,3.979,0,0,0-.75-.28,4.3423,4.3423,0,0,0-1.03-.15,1.2787,1.2787,0,0,0-.32,0A5.3628,5.3628,0,0,0,5.25,2c0,.14.01.28.02.41a1.6165,1.6165,0,0,1,.22-.01,1.9237,1.9237,0,0,1,.24.01,6.6508,6.6508,0,0,1,1,.11,5.6947,5.6947,0,0,1,1,.28,6.7814,6.7814,0,0,1,1.02.47,6.6645,6.6645,0,0,1,.98.69A4.5655,4.5655,0,0,0,8.68,2.32ZM3.03,6.34a5.808,5.808,0,0,1-.4-.92,5.7849,5.7849,0,0,1-.28-1.03,6.86,6.86,0,0,1-.1-1.12V3.25a5.656,5.656,0,0,1,.07-.93A4.3939,4.3939,0,0,0,1.27,3.97,4.3206,4.3206,0,0,0,1,5.5a1.7671,1.7671,0,0,0,.01.23,4.4161,4.4161,0,0,0,.09.73,4.0749,4.0749,0,0,0,.31.91,1.0685,1.0685,0,0,0,.27-.07A5.0679,5.0679,0,0,0,3.2,6.63C3.14,6.53,3.08,6.44,3.03,6.34Zm3.88-.4a5.4992,5.4992,0,0,0-1.35-.19c-.02.03-.04.05-.06.08a6.2466,6.2466,0,0,1-.91,1.01,5.8334,5.8334,0,0,1-.8.61,6.5727,6.5727,0,0,1-1.83.82,3.1983,3.1983,0,0,0,.43.47,5.1724,5.1724,0,0,0,2.18-.51,5.4146,5.4146,0,0,0,.93-.55,5.5958,5.5958,0,0,0,.91-.84A4.8049,4.8049,0,0,0,7,6.01a.0517.0517,0,0,0,.02-.04A.2283.2283,0,0,0,6.91,5.94ZM4.88,4.78a5.6391,5.6391,0,0,1-.45-1.27,6.3861,6.3861,0,0,1-.16-.99c-.01-.17-.02-.35-.02-.52a5.83,5.83,0,0,1,.06-.84,3.9815,3.9815,0,0,0-.75.28A5.5806,5.5806,0,0,0,3.27,2.8c-.01.15-.02.3-.02.45a4.2153,4.2153,0,0,0,.04.62,4.7107,4.7107,0,0,0,.27,1.18,5.0984,5.0984,0,0,0,.42.92A.0517.0517,0,0,0,4,6.01a.1778.1778,0,0,0,.08-.07h.01a5.6817,5.6817,0,0,0,.84-1.06A.3131.3131,0,0,1,4.88,4.78Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"volleyball-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path id=\"e086ca83-8703-4df5-a97c-5939eb32113a\" d=\"M13.91,7.94a5.9086,5.9086,0,0,1-.13.94,8.8218,8.8218,0,0,0-2.17-1.49,8.89,8.89,0,0,0-1.4-.56,8.6142,8.6142,0,0,0-1.82-.35.221.221,0,0,0-.08-.01A7.32,7.32,0,0,1,7.5,4.59c-.01-.01-.01-.01,0-.02a7.7573,7.7573,0,0,1,1.52.15,7.0987,7.0987,0,0,1,1.56.5,6.8585,6.8585,0,0,1,1.4.78A7.4165,7.4165,0,0,1,13.91,7.94Zm-1.87-5a6.2232,6.2232,0,0,0-1.85-1.27,4.2725,4.2725,0,0,0-.98-.36,5.6412,5.6412,0,0,0-1.55-.23,1.2882,1.2882,0,0,0-.32,0A7.4263,7.4263,0,0,0,7.21,2.5c0,.2.01.39.02.58a2.28,2.28,0,0,1,.26-.01,2.6438,2.6438,0,0,1,.28.01,8.2865,8.2865,0,0,1,1.49.16,8.9879,8.9879,0,0,1,1.35.37,8.7922,8.7922,0,0,1,1.53.7,10.18,10.18,0,0,1,1.39.97A6.4588,6.4588,0,0,0,12.04,2.94ZM4.01,8.76a9.4084,9.4084,0,0,1-.62-1.37,9.1038,9.1038,0,0,1-.37-1.41,9.1748,9.1748,0,0,1-.16-1.67V4.28a8.455,8.455,0,0,1,.1-1.34A6.28,6.28,0,0,0,1.47,5.3a6.2222,6.2222,0,0,0-.4,2.2c0,.15.01.3.02.44a5.9086,5.9086,0,0,0,.13.94,5.7343,5.7343,0,0,0,.41,1.23c.22-.05.44-.11.65-.17a8.0188,8.0188,0,0,0,1.9-.88C4.12,8.96,4.06,8.86,4.01,8.76Zm2.6-2.28a9,9,0,0,1-.63-1.76,9.135,9.135,0,0,1-.24-1.48c-.02-.25-.03-.49-.03-.74a9.3777,9.3777,0,0,1,.08-1.19,4.2725,4.2725,0,0,0-.98.36,7.7038,7.7038,0,0,0-.42,1.94c-.02.22-.03.44-.03.67a7.2659,7.2659,0,0,0,.06.93,7.4258,7.4258,0,0,0,.37,1.63,6.4705,6.4705,0,0,0,.59,1.28A8.0174,8.0174,0,0,0,6.65,6.55.2522.2522,0,0,1,6.61,6.48ZM12.7,9.93s0-.01-.01,0a7.0128,7.0128,0,0,0-1.7-1.16c-.06.1-.11.19-.17.29a8.783,8.783,0,0,1-.88,1.22,8.9125,8.9125,0,0,1-1.06,1.07,10.4181,10.4181,0,0,1-1.38.98,8.9933,8.9933,0,0,1-2.64,1.02,6.2985,6.2985,0,0,0,5.28,0,5.9674,5.9674,0,0,0,2.42-1.89,4.8258,4.8258,0,0,0,.65-1.03A6.0315,6.0315,0,0,0,12.7,9.93Zm-5.17-2c-.01.01-.02.03-.03.04a9.26,9.26,0,0,1-1.25,1.4,9.5925,9.5925,0,0,1-1.19.91,9.2683,9.2683,0,0,1-2.62,1.18,6.0989,6.0989,0,0,0,.53.61,7.7353,7.7353,0,0,0,3.15-.72,7.3839,7.3839,0,0,0,1.38-.82A7.6429,7.6429,0,0,0,8.75,9.37a7.7441,7.7441,0,0,0,.82-1.15A7.3414,7.3414,0,0,0,7.53,7.93Z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"warehouse-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M3,11H0V8h3V11z M7,8H4v3h3V8z M11,8H8v3h3V8z M5,4H2v3h3V4z M9,4H6v3h3V4z M10.44,3.24&#xA;&#x9;c0.1349-0.2403,0.0499-0.5444-0.19-0.68l-4.5-2.5c-0.1521-0.0855-0.3379-0.0855-0.49,0l-4.5,2.5&#xA;&#x9;C0.5272,2.7085,0.4588,3.0176,0.6073,3.2504C0.7444,3.4654,1.0213,3.5428,1.25,3.43L5.5,1.07l4.26,2.37&#xA;&#x9;c0.2421,0.1328,0.546,0.0442,0.6789-0.1979C10.4392,3.2414,10.4396,3.2407,10.44,3.24z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"warehouse-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M13.5,5c-0.0762,0.0003-0.1514-0.0168-0.22-0.05L7.5,2L1.72,4.93C1.4632,5.0515,1.1565,4.9418,1.035,4.685&#xA;&#x9;S1.0232,4.1215,1.28,4L7.5,0.92L13.72,4c0.2761,0.0608,0.4508,0.3339,0.39,0.61C14.0492,4.8861,13.7761,5.0608,13.5,5z M5,10H2v3h3&#xA;&#x9;V10z M9,10H6v3h3V10z M13,10h-3v3h3V10z M11,6H8v3h3V6z M7,6H4v3h3V6z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"waste-basket-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9,4l-1.17,7H3.17L2,4H9z M9.25,2.25C9.25,2.3881,9.1381,2.5,9,2.5H2c-0.1381,0-0.25-0.1119-0.25-0.25S1.8619,2,2,2h2V0h3&#xA;&#x9;v0.5l0,0V2h2C9.1381,2,9.25,2.1119,9.25,2.25z M6.5,2V0.5h-2V2H6.5z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"waste-basket-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M12.41,5.58l-1.34,8c-0.0433,0.2368-0.2493,0.4091-0.49,0.41H4.42c-0.2407-0.0009-0.4467-0.1732-0.49-0.41l-1.34-8&#xA;&#x9;C2.5458,5.3074,2.731,5.0506,3.0035,5.0064C3.0288,5.0023,3.0544,5.0002,3.08,5h8.83c0.2761-0.0036,0.5028,0.2174,0.5064,0.4935&#xA;&#x9;C12.4168,5.5225,12.4146,5.5514,12.41,5.58z M13,3.5C13,3.7761,12.7761,4,12.5,4h-10C2.2239,4,2,3.7761,2,3.5S2.2239,3,2.5,3H5V1.5&#xA;&#x9;C5,1.2239,5.2239,1,5.5,1h4C9.7761,1,10,1.2239,10,1.5V3h2.5C12.7761,3,13,3.2239,13,3.5z M9,3V2H6v1H9z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"watch-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <g>\n    <path d=\"M9.0769,5.1538H8.9651C8.8412,3.9112,8.0789,2.8648,7,2.3497V1H4v1.3497C2.8208,2.9127,2,4.1062,2,5.5&#xA;&#x9;&#x9;s0.8208,2.5873,2,3.1503V10h3V8.6503c1.0789-0.5151,1.8413-1.5615,1.9651-2.8041h0.1118c0.1912,0,0.3462-0.155,0.3462-0.3461&#xA;&#x9;&#x9;S9.2681,5.1538,9.0769,5.1538z M5.5,8C4.1193,8,3,6.8807,3,5.5C3,4.1193,4.1193,3,5.5,3S8,4.1193,8,5.5C8,6.8807,6.8807,8,5.5,8z\"/>\n    <path d=\"M6.5,5H6V4c0-0.2762-0.2239-0.5-0.5-0.5S5,3.7238,5,4v1.5C5,5.7761,5.2239,6,5.5,6h1C6.7761,6,7,5.7761,7,5.5&#xA;&#x9;&#x9;C7,5.2238,6.7761,5,6.5,5z\"/>\n  </g>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"watch-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M12.5,7H12c-0.0175,0-0.0323,0.0082-0.0494,0.0099C11.8021,5.6575,11.0757,4.4804,10,3.7599V1.4977&#xA;&#x9;&#x9;C10,1.2228,9.7772,1,9.5023,1H5.4977C5.2228,1,5,1.2228,5,1.4977v2.2621C3.7946,4.5673,3,5.9402,3,7.5s0.7946,2.9327,2,3.7401&#xA;&#x9;&#x9;v2.2621C5,13.7771,5.2228,14,5.4977,14h4.0045C9.7772,14,10,13.7771,10,13.5022v-2.2621c1.0757-0.7205,1.8021-1.8976,1.9506-3.2501&#xA;&#x9;&#x9;C11.9677,7.9918,11.9825,8,12,8h0.5C12.7761,8,13,7.7761,13,7.5C13,7.2238,12.7761,7,12.5,7z M7.5,11C5.567,11,4,9.433,4,7.5&#xA;&#x9;&#x9;S5.567,4,7.5,4S11,5.567,11,7.5S9.433,11,7.5,11z\"/>\n  <path d=\"M9,7H8V5.5C8,5.2238,7.7761,5,7.5,5S7,5.2238,7,5.5v2C7,7.7761,7.2239,8,7.5,8H9c0.2761,0,0.5-0.2239,0.5-0.5&#xA;&#x9;&#x9;C9.5,7.2238,9.2761,7,9,7z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"water-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M5.5,11C3.59,11,2,9,2,7s2.61-5.81,3.5-7C6.39,1.19,9,5,9,7S7.41,11,5.5,11z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"water-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M7.49,15C4.5288,14.827,2.1676,12.4615,2,9.5C2,6.6,6.25,1.66,7.49,0c1.24,1.66,5,6.59,5,9.49S10.17,15,7.49,15z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"waterfall-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"11\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.9,2H11V1H4C2.4,1,1,2.2,1,3.9c0,0,0,0,0,0c0,0,0,3.4,0,3.4C0,7.8-0.3,9,0.3,10c0.6,1,1.8,1.3,2.7,0.7&#xA;&#x9;c0.7,0.4,1.7,0.3,2.3-0.2c1.4,0.9,3.2,0.6,4.2-0.8c0.9-1.4,0.6-3.2-0.8-4.2C8.5,5.4,8.2,5.3,8,5.2V4C8,2.9,8.8,2,9.9,2z M9,8&#xA;&#x9;c0,1.1-0.9,2-2,2c-1,0-1.1-0.3-1.3-0.5H4.9C4.7,9.7,4.5,10,4,10S3.3,9.8,3.2,9.5H2.8C2.7,9.8,2.4,10,2,10c-0.6,0-1-0.4-1-1&#xA;&#x9;s0.4-1,1-1V7V5c0,0,0-0.5,0.5-0.5S3,5,3,5v2.5C3,7.5,3,8,3.5,8S4,7.5,4,7.5V6c0,0,0-0.5,0.5-0.5S5,6,5,6v1.5C5,7.5,5,8,5.5,8&#xA;&#x9;S6,7.5,6,7.5V5c0,0,0-0.5,0.5-0.5S7,5,7,5v1C8.1,6,9,6.9,9,8z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"waterfall-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\">\n  <path d=\"M12.9,3H15V1H5c0,0-4,0-4,4v5.5h0c-1.1,0.8-1.3,2.4-0.5,3.5s2.4,1.3,3.5,0.5c1,0.8,2.5,0.6,3.4-0.4C8,14.7,8.9,15,9.8,15&#xA;&#x9;c2.1,0,3.7-1.6,3.8-3.7c0-1.6-1-3-2.5-3.5V5C11,3.9,11.8,3,12.9,3z M10,8v0.5c1.5,0.1,2.6,1.5,2.5,3c-0.1,1.4-1.3,2.5-2.7,2.5&#xA;&#x9;c-1.1,0.1-1.8-0.6-2.1-1H6.9c-0.1,0.2-0.4,1-1.4,1s-1.3-0.6-1.4-1H3.9c-0.2,0.4-0.5,0.8-0.9,0.9c-0.9,0.3-1.7-0.2-1.9-1&#xA;&#x9;c-0.2-0.8,0.2-1.6,0.9-1.8V6c0-0.5,0.4-1,1-1c0,0,0,0,0,0h0c0.5,0,1,0.4,1,1c0,0,0,0,0,0c0,0,0,0,0,0v4.5C4,10.8,4.2,11,4.5,11&#xA;&#x9;S5,10.8,5,10.5V7c0-0.6,0.4-1,1-1s1,0.4,1,1v3.5C7,10.8,7.2,11,7.5,11S8,10.8,8,10.5V6c0-0.6,0.4-1,1-1s1,0.4,1,1V8z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"watermill-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9.9874,4.375C9.9216,2.5436,8.4563,1.0784,6.625,1.0126V1h-0.25v0.0126C5.274,1.0521,4.3123,1.6034,3.7004,2.4301L2.5059,1&#xA;&#x9;L0,4h1v4l1.8-1l1.8,1l1.1202-0.6218C5.2513,7.2512,4.825,7.021,4.4765,6.7003L6.252,4.9247c0.0385,0.0226,0.0788,0.0383,0.123,0.05&#xA;&#x9;v2.0399L6.4014,7L6.625,7.1243V4.9747c0.0442-0.0117,0.0845-0.0274,0.123-0.05l1.7755,1.7755&#xA;&#x9;C8.1429,7.0505,7.6736,7.3016,7.1526,7.4177l0.5937,0.3301C9.0195,7.2596,9.9359,6.0602,9.9874,4.625H10v-0.25H9.9874z&#xA;&#x9; M4.2997,6.5235C3.8347,6.0182,3.5435,5.3568,3.5126,4.625h2.5126c0.0117,0.0442,0.0274,0.0845,0.05,0.123L4.2997,6.5235z&#xA;&#x9; M6.0253,4.375H3.5126c0.0308-0.7318,0.3221-1.3932,0.7871-1.8985L6.0753,4.252C6.0527,4.2905,6.037,4.3308,6.0253,4.375z&#xA;&#x9; M6.375,4.0253c-0.0442,0.0117-0.0845,0.0274-0.123,0.05L4.4765,2.2997c0.5053-0.465,1.1667-0.7563,1.8985-0.7871V4.0253z&#xA;&#x9; M6.625,4.0253V1.5126c0.7318,0.0308,1.3932,0.3221,1.8985,0.7871L6.748,4.0753C6.7095,4.0527,6.6692,4.037,6.625,4.0253z&#xA;&#x9; M8.7003,6.5235L6.9247,4.748c0.0226-0.0385,0.0383-0.0788,0.05-0.123h2.5126C9.4565,5.3568,9.1653,6.0182,8.7003,6.5235z&#xA;&#x9; M6.9747,4.375c-0.0117-0.0442-0.0274-0.0845-0.05-0.123l1.7755-1.7755c0.465,0.5053,0.7563,1.1667,0.7871,1.8985H6.9747z M6.4014,8&#xA;&#x9;L4.6,9L3.808,8.56l0,0L2.8,8L1.792,8.56l0,0L1,9v1l1.8-1l1.8,1l1.8014-1L8.2,10L10,9V8L8.2,9L6.4014,8z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"watermill-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M2,10.2L4,9l2.5,1.5l1.4659-0.8788C7.6592,9.4698,7.3716,9.285,7.1231,9.0536l1.4131-1.4131&#xA;&#x9;C8.7672,7.836,9.0557,7.9606,9.375,7.9874V9.224l0.25,0.1501V7.9874c0.3193-0.0268,0.6078-0.1514,0.8388-0.3469l1.4131,1.4131&#xA;&#x9;c-0.4059,0.3781-0.9044,0.6492-1.4528,0.8003L11.5,10.5l0.6984-0.4191C13.2863,9.2595,14,7.9682,14,6.5C14,4.0147,11.9853,2,9.5,2&#xA;&#x9;C8.1917,2,7.0241,2.5674,6.2018,3.4587L4.5,2L1,5h1V10.2z M12.0536,8.8769l-1.4131-1.4131c0.1954-0.231,0.3201-0.5196,0.3469-0.8388&#xA;&#x9;h1.9999C12.956,7.4946,12.6089,8.2806,12.0536,8.8769z M12.9874,6.375h-1.9999c-0.0268-0.3193-0.1514-0.6078-0.3469-0.8388&#xA;&#x9;l1.4131-1.4131C12.6089,4.7193,12.956,5.5054,12.9874,6.375z M9.625,3.0126c0.8696,0.0314,1.6557,0.3784,2.2519,0.9337&#xA;&#x9;l-1.4131,1.4131c-0.231-0.1954-0.5196-0.32-0.8388-0.3468C9.625,5.0126,9.625,3.0126,9.625,3.0126z M9.375,3.0126v1.9999&#xA;&#x9;C9.0558,5.0394,8.7672,5.164,8.5362,5.3594L7.1231,3.9463C7.7193,3.3911,8.5054,3.044,9.375,3.0126z M6.9464,4.1231l1.4131,1.4131&#xA;&#x9;C8.164,5.7672,8.0394,6.0557,8.0126,6.375h-2C6.044,5.5054,6.3911,4.7193,6.9464,4.1231z M8.0126,6.625&#xA;&#x9;c0.0268,0.3192,0.1515,0.6078,0.3469,0.8388L6.9464,8.8769C6.3911,8.2807,6.044,7.4946,6.0126,6.625H8.0126z M9.002,10L6.5,11.5&#xA;&#x9;L4,10l-2.5,1.5V13L4,11.5L6.5,13l2.502-1.5L11.5,13l2.5-1.5V10l-2.5,1.5L9.002,10z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"wetland-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M1.11,3.33C1.4171,3.0907,1.8016,2.9732,2.19,3C3.0659,2.9354,3.8483,3.5449,4,4.41L4.57,7.8&#xA;&#x9;c-0.455-0.219-0.985-0.219-1.44,0L2.56,4.41C2.3459,3.7852,1.7699,3.3562,1.11,3.33z M5.45,8.21&#xA;&#x9;c0.276-0.2223,0.5966-0.3826,0.94-0.47l0.9-5.5c0.2141-0.6248,0.7901-1.0538,1.45-1.08C8.4346,0.9076,8.0456,0.7791,7.65,0.8&#xA;&#x9;C6.7643,0.7373,5.978,1.3629,5.84,2.24L4.9,7.88C5.0968,7.9658,5.2817,8.0767,5.45,8.21z M8.58,7.85L8.58,7.85&#xA;&#x9;C8.6925,7.7563,8.8129,7.6727,8.94,7.6l0.5-3.21c0.2108-0.6287,0.7875-1.0622,1.45-1.09c-0.3054-0.2524-0.6944-0.3809-1.09-0.36&#xA;&#x9;C8.9147,2.8833,8.1331,3.5129,8,4.39l-0.48,3c0.3812,0.0689,0.7409,0.2264,1.05,0.46H8.58z M10.14,8.75L10.14,8.75&#xA;&#x9;c-0.3136-0.0079-0.6193,0.0988-0.86,0.3l-0.34,0.3c-0.2017,0.1717-0.4983,0.1717-0.7,0L7.91,9.07&#xA;&#x9;c-0.5123-0.4282-1.2577-0.4282-1.77,0L5.8,9.37c-0.2,0.1661-0.49,0.1661-0.69,0L4.77,9.05C4.2553,8.6247,3.5099,8.6289,3,9.06&#xA;&#x9;C2.89,9.15,2.79,9.25,2.68,9.34C2.6141,9.3899,2.5395,9.4272,2.46,9.45C2.2484,9.4973,2.0276,9.4288,1.88,9.27&#xA;&#x9;C1.7014,9.1151,1.5108,8.9747,1.31,8.85C1.1537,8.7667,0.9762,8.7318,0.8,8.75l0,0c-0.1988,0-0.36,0.1612-0.36,0.36&#xA;&#x9;c0,0.1988,0.1612,0.36,0.36,0.36l0,0C0.9778,9.4824,1.1434,9.5652,1.26,9.7l0.22,0.2c0.4962,0.3888,1.1938,0.3888,1.69,0&#xA;&#x9;c0.14-0.1,0.26-0.23,0.4-0.34c0.2034-0.1775,0.5066-0.1775,0.71,0l0.25,0.29c0.514,0.4338,1.266,0.4338,1.78,0&#xA;&#x9;c0.11-0.08,0.2-0.18,0.3-0.27c0.2185-0.2174,0.5715-0.2174,0.79,0l0.29,0.3c0.3601,0.3115,0.8561,0.4138,1.31,0.27&#xA;&#x9;c0.2642-0.0794,0.5024-0.2278,0.69-0.43c0.1208-0.1486,0.2987-0.2394,0.49-0.25l0,0c0.2016-0.0138,0.3538-0.1884,0.34-0.39&#xA;&#x9;s-0.1884-0.3538-0.39-0.34L10.14,8.75z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"wetland-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M1.48,4.5C1.905,4.1467,2.4483,3.968,3,4c1.2273-0.0869,2.3154,0.7836,2.5,2l0.78,4.68c-0.6394-0.2893-1.3759-0.2709-2,0.05&#xA;&#x9;L3.48,6C3.1874,5.1347,2.3926,4.5387,1.48,4.5z M7.48,11.24c0.3816-0.3076,0.825-0.5293,1.3-0.65L10,3&#xA;&#x9;c0.2926-0.8653,1.0874-1.4613,2-1.5c-0.4198-0.3485-0.955-0.5269-1.5-0.5C9.2727,0.9131,8.1846,1.7836,8,3l-1.3,7.79&#xA;&#x9;C6.9786,10.9052,7.2408,11.0565,7.48,11.24z M11.8,10.74L11.8,10.74c0.1565-0.1277,0.3238-0.2414,0.5-0.34L13,6&#xA;&#x9;c0.2926-0.8653,1.0874-1.4613,2-1.5c-0.4198-0.3485-0.955-0.5269-1.5-0.5c-1.2273-0.0869-2.3154,0.7836-2.5,2l-0.67,4&#xA;&#x9;C10.8731,10.123,11.3778,10.377,11.8,10.74z M14,12L14,12c-0.4346-0.01-0.8579,0.1394-1.19,0.42l-0.47,0.41&#xA;&#x9;c-0.2847,0.2546-0.7153,0.2546-1,0c-0.15-0.12-0.29-0.26-0.44-0.39c-0.7076-0.5968-1.7424-0.5968-2.45,0&#xA;&#x9;c-0.16,0.13-0.31,0.28-0.47,0.41c-0.2847,0.2546-0.7153,0.2546-1,0c-0.16-0.13-0.31-0.28-0.47-0.41&#xA;&#x9;c-0.7059-0.5912-1.7341-0.5912-2.44,0c-0.15,0.13-0.29,0.27-0.44,0.39c-0.0892,0.0715-0.1909,0.1258-0.3,0.16&#xA;&#x9;c-0.2922,0.0652-0.5969-0.0301-0.8-0.25c-0.2475-0.214-0.5117-0.4079-0.79-0.58C1.5336,12.0421,1.2974,11.9865,1.06,12H1&#xA;&#x9;c-0.2761,0-0.5,0.2239-0.5,0.5S0.7239,13,1,13l0,0c0.246,0.0145,0.4762,0.126,0.64,0.31L2,13.57&#xA;&#x9;c0.6717,0.55,1.6308,0.5747,2.33,0.06c0.19-0.14,0.36-0.32,0.55-0.47c0.2847-0.2546,0.7153-0.2546,1,0l0.39,0.35&#xA;&#x9;c0.6937,0.6189,1.7322,0.6484,2.46,0.07c0.15-0.11,0.27-0.25,0.42-0.37c0.2976-0.3038,0.7851-0.3087,1.0889-0.0111&#xA;&#x9;c0.0037,0.0037,0.0074,0.0074,0.0111,0.0111l0.39,0.35c0.4866,0.4124,1.1485,0.5516,1.76,0.37c0.3825-0.1036,0.7286-0.3113,1-0.6&#xA;&#x9;c0.1549-0.1772,0.3674-0.294,0.6-0.33l0,0c0.2761,0,0.5-0.2239,0.5-0.5S14.2761,12,14,12z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"wheelchair-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M9,2c0,0.5523-0.4477,1-1,1S7,2.5523,7,2s0.4477-1,1-1S9,1.4477,9,2z M2.5,4c0.0595,0.0109,0.1205,0.0109,0.18,0l0,0&#xA;&#x9;l1.79-0.83l0.46,0.48L4.39,4.5c0.7851,0.1244,1.5102,0.4957,2.07,1.06l0.44-0.8c0.1914-0.2972,0.1057-0.6932-0.1915-0.8846&#xA;&#x9;C6.7057,3.8736,6.7029,3.8718,6.7,3.87L4.85,2.15l0,0C4.7176,1.9875,4.4965,1.9272,4.3,2l0,0l-2,1l0,0&#xA;&#x9;C2.0239,3.0552,1.8448,3.3239,1.9,3.6S2.2239,4.0552,2.5,4z M6.59,8.2C6.5854,8.7633,6.4074,9.3115,6.08,9.77&#xA;&#x9;c-0.1844,0.2837-0.4263,0.5256-0.71,0.71C4.9099,10.8129,4.3578,10.9946,3.79,11C2.2475,10.9945,1,9.7425,1,8.2&#xA;&#x9;c0.0054-0.5678,0.1871-1.1199,0.52-1.58c0.2059-0.2655,0.4445-0.5041,0.71-0.71C2.6857,5.5846,3.2301,5.4066,3.79,5.4&#xA;&#x9;C5.3364,5.4,6.59,6.6536,6.59,8.2L6.59,8.2z M5.19,8.89C5.3032,8.6772,5.3648,8.4409,5.37,8.2C5.3645,7.3313,4.6587,6.63,3.79,6.63&#xA;&#x9;C3.5491,6.6352,3.3127,6.6968,3.1,6.81c-0.2885,0.1742-0.5317,0.414-0.71,0.7c-0.1147,0.2158-0.1764,0.4557-0.18,0.7&#xA;&#x9;c0.0055,0.8687,0.7113,1.57,1.58,1.57c0.2443-0.0036,0.4843-0.0653,0.7-0.18C4.7824,9.4299,5.024,9.1848,5.19,8.89z M9,6.4&#xA;&#x9;C8.9544,6.149,8.7238,5.9751,8.47,6H6.82c0.223,0.3051,0.3983,0.6423,0.52,1H8l1,2.59c0.0475,0.2328,0.2524,0.4,0.49,0.4h0.1&#xA;&#x9;c0.2725-0.0445,0.4574-0.3015,0.4129-0.5741C10.002,9.4106,10.001,9.4053,10,9.4L9,6.4z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"wheelchair-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M12,1.5C12,2.3284,11.3284,3,10.5,3S9,2.3284,9,1.5S9.6716,0,10.5,0S12,0.6716,12,1.5z M2.82,4.87l1.74-1.71l1.85,1.29&#xA;&#x9;L5.67,5.7c1.0747,0.3341,2.0207,0.9904,2.71,1.88l0.88-1.5c0.2295-0.4158,0.0785-0.939-0.3373-1.1685&#xA;&#x9;C8.9218,4.911,8.9209,4.9105,8.92,4.91L8.3,4.54L4.79,2.1C4.5927,1.9594,4.3231,1.9805,4.15,2.15l-2,2&#xA;&#x9;C1.9852,4.3716,2.0312,4.6848,2.2528,4.8496C2.4193,4.9735,2.645,4.9816,2.82,4.87z M8.13,10.94&#xA;&#x9;c-0.0143,1.2308-0.5794,2.3904-1.54,3.16c-0.7118,0.5804-1.6016,0.8982-2.52,0.9C1.8261,15,0.0055,13.1839,0,10.94&#xA;&#x9;c0.0023-0.9231,0.3238-1.8169,0.91-2.53c0.1868-0.232,0.398-0.4432,0.63-0.63c0.7131-0.5862,1.6069-0.9077,2.53-0.91&#xA;&#x9;C6.3139,6.8755,8.13,8.6961,8.13,10.94z M6,12.21C6.7679,11.2051,6.5758,9.7679,5.5709,9C4.7501,8.3727,3.6109,8.3727,2.79,9&#xA;&#x9;C2.5283,9.151,2.311,9.3683,2.16,9.63c-0.6923,1.0584-0.3956,2.4777,0.6628,3.17c0.7615,0.4981,1.7457,0.4981,2.5072,0&#xA;&#x9;C5.5805,12.6365,5.8061,12.4378,6,12.21z M14.2,13.21l-2.49-5C11.5906,7.9251,11.3088,7.7425,11,7.75H8.51&#xA;&#x9;c0.3293,0.4578,0.5856,0.9638,0.76,1.5h1.26l2.29,4.58c0.185,0.3728,0.6372,0.525,1.01,0.34c0.3728-0.185,0.525-0.6372,0.34-1.01&#xA;&#x9;L14.2,13.21z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"windmill-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M6.375,3.9375L5.9375,3.5L6.375,3.0625h0.4375L9,0.875L8.125,0L5.9375,2.1875V2.625L5.5,3.0625L5.0625,2.625V2.1875L2.875,0&#xA;&#x9;L2,0.875l2.1875,2.1875H4.625L5.0625,3.5L4.625,3.9375H4.1875L2,6.125L2.875,7l2.1875-2.1875V4.375L5.5,3.9375L5.9375,4.375v0.4375&#xA;&#x9;L8.125,7L9,6.125L6.8125,3.9375H6.375z M8.5,10H8L7,7.5L5.5,6L4,7.5L3,10H2.5C2.2239,10,2,10.2238,2,10.5&#xA;&#x9;C2,10.7761,2.2239,11,2.5,11h6C8.7761,11,9,10.7761,9,10.5C9,10.2238,8.7761,10,8.5,10z M6,9.9717C6,9.9873,5.9874,10,5.9717,10&#xA;&#x9;H5.0283C5.0126,10,5,9.9873,5,9.9717v-0.972C5,8.7238,5.2238,8.5,5.4998,8.5C5.7761,8.5,6,8.7239,6,9.0002V9.9717z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"windmill-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path d=\"M6,5L3.5,7.5l1,1L7,6V5.5L7.5,5L8,5.5V6l2.5,2.5l1-1L9,5H8.5L8,4.5L8.5,4H9l2.5-2.5l-1-1L8,3v0.5L7.5,4L7,3.5V3L4.5,0.5&#xA;&#x9;l-1,1L6,4h0.5L7,4.5L6.5,5H6z M11.5,13h-1l-1-4l-2-2l-2,2l-1,4h-1C3.2239,13,3,13.2238,3,13.5C3,13.7761,3.2239,14,3.5,14h8&#xA;&#x9;c0.2761,0,0.5-0.2239,0.5-0.5C12,13.2238,11.7761,13,11.5,13z M8,13H7v-1.5024C7,11.2228,7.2228,11,7.4976,11&#xA;&#x9;C7.7751,11,8,11.2249,8,11.5024V13z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"zoo-11\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11px\" height=\"11px\" viewBox=\"0 0 11 11\">\n  <path d=\"M8,2C7.1,2,6.5,2.5,6.2,3.1C6.2,3.1,5.5,4,5,4H3C2.5,4,2,4.5,2,4.5l-2,2V7h0.5l1.2-1.2L1.9,6&#xA;&#x9;C1.9,6,1,7.7,1,9c0,0.5,0.5,0.5,0.5,0.5H2c0,0,0.2,0,0-0.2L1.8,9.1c0-0.5,0.8-1.4,1.2-1.9c0,0,0,0.8,0,1.4&#xA;&#x9;c0,0.3,0.1111,0.9,0.4111,0.9h0.5c0,0,0.2,0,0-0.2l-0.2-0.2C3.5111,8.7,4.3,7.5,4.3,7.5h1.8L6.6,9c0.2,0.5,0.5,0.5,0.5,0.5h1&#xA;&#x9;c0.2,0,0.7-0.2,0.2-0.5L8.1,8.8V7l0,0c1,0,1.1-1.3,1.5-1.7l0.7-0.1c0.2,0,0.8-0.2,0.8-0.8V4L9.9,3l0,0C9.4,2.4,8.7,2,8,2z\"/>\n</svg>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg version=\"1.1\" id=\"zoo-15\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15px\" height=\"15px\" viewBox=\"0 0 15 15\">\n  <path id=\"path17499\" d=\"&#xA;&#x9;M8.3879,3.8928C8.3879,3.8928,7.6818,5,7,5H4.5C3.8182,5,3.2016,5.4086,2.7273,5.8636L0.5,8C0.231,8.258,0.0072,8.7681,0,9&#xA;&#x9;c-0.0156,0.5,0,1,0,1s1,0,1-1V8.5l1-1h0.5l0.158,0.2892c0,0-0.9535,1.8244-0.9535,3.5289C1.7046,12,2.3864,12,2.3864,12h0.6818&#xA;&#x9;c0,0,0.3409,0,0-0.3409l-0.3409-0.3409C2.7273,10.6364,3.5002,9.6667,4,9c0,0,0.0168,1.1579,0,2c-0.008,0.4096,0.2721,1,0.6818,1&#xA;&#x9;h0.6818c0,0,0.3409,0,0-0.3409l-0.3409-0.3409C4.7105,10.7495,5.5,8.5,5.5,8.5C6.7716,8.5,7,9,8.5,9l0.3636,2.3182&#xA;&#x9;C8.975,12.0282,9.5,12,9.5,12H11c0.3409,0,0.9611-0.3115,0.3409-0.7736L11,11V9c1.2142-0.1722,2-1,2-2h1c0.3214,0,1,0,1-0.5v-1&#xA;&#x9;l-1.7045-1.6818C12.5444,3.0772,12,2.5,11,2.5C9.5469,2.5,8.8636,3.0688,8.3879,3.8928z\"/>\n</svg>"];

/***/ }),

/***/ "./node_modules/@elastic/maki/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@elastic/maki/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

module.exports = {
  layouts: {
    all: __webpack_require__(/*! ./layouts/all.json */ "./node_modules/@elastic/maki/layouts/all.json")
  },
  svgArray: __webpack_require__(/*! ./dist/svgicons.json */ "./node_modules/@elastic/maki/dist/svgicons.json"),
  spritesheet: {
    1: __webpack_require__(/*! ./dist/sprite@1.json */ "./node_modules/@elastic/maki/dist/sprite@1.json"),
    2: __webpack_require__(/*! ./dist/sprite@2.json */ "./node_modules/@elastic/maki/dist/sprite@2.json"),
    4: __webpack_require__(/*! ./dist/sprite@4.json */ "./node_modules/@elastic/maki/dist/sprite@4.json")
  }
};


/***/ }),

/***/ "./node_modules/@elastic/maki/layouts/all.json":
/*!*****************************************************!*\
  !*** ./node_modules/@elastic/maki/layouts/all.json ***!
  \*****************************************************/
/*! exports provided: all, default */
/***/ (function(module) {

module.exports = {"all":["aerialway","airfield","airport","alcohol-shop","american-football","amusement-park","aquarium","arrow-es","art-gallery","attraction","bakery","bank","bar","barrier","baseball","basketball","bbq","beach","beer","bicycle","bicycle-share","blood-bank","boat-es","bowling-alley","bridge","building","building-alt1","bus","cafe","campsite","car","car-rental","car-repair","car-top-es","casino","castle","cemetery","charging-station","cinema","circle","circle-stroked","city","clothing-store","college","commercial","communications-tower","confectionery","convenience","cricket","cross","dam","danger","defibrillator","dentist","doctor","dog-park","drinking-water","embassy","emergency-phone","entrance","entrance-alt1","farm","fast-food","fence","ferry","fire-station","fitness-centre","florist","fuel","furniture","gaming","garden","garden-centre","gift","globe","golf","grocery","hairdresser","harbor","hardware","heart","heliport","home","horse-riding","hospital","ice-cream","industry","information","jewelry-store","karaoke","landmark","landuse","laundry","library","lighthouse","lodging","logging","marker","marker-stroked","mobile-phone","monument","mountain","museum","music","natural","optician","paint","park","park-alt1","parking","parking-garage","pharmacy","picnic-site","pitch","place-of-worship","playground","police","post","prison","rail","rail-light","rail-metro","ranger-station","recycling","religious-buddhist","religious-christian","religious-jewish","religious-muslim","residential-community","restaurant","restaurant-noodle","restaurant-pizza","restaurant-seafood","roadblock","rocket","school","scooter","shelter","shoe","shop","skateboard","skiing","slaughterhouse","slipway","snowmobile","soccer","square","square-stroked","stadium","star","star-stroked","suitcase","sushi","swimming","table-tennis","teahouse","telephone","tennis","theatre","toilet","town","town-hall","triangle","triangle-stroked","veterinary","viewpoint","village","volcano","volleyball","warehouse","waste-basket","watch","water","waterfall","watermill","wetland","wheelchair","windmill","zoo"]};

/***/ }),

/***/ "./node_modules/@turf/helpers/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@turf/helpers/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module helpers
 */
/**
 * Earth Radius used with the Harvesine formula and approximates using a spherical (non-ellipsoid) Earth.
 *
 * @memberof helpers
 * @type {number}
 */
exports.earthRadius = 6371008.8;
/**
 * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 *
 * @memberof helpers
 * @type {Object}
 */
exports.factors = {
    centimeters: exports.earthRadius * 100,
    centimetres: exports.earthRadius * 100,
    degrees: exports.earthRadius / 111325,
    feet: exports.earthRadius * 3.28084,
    inches: exports.earthRadius * 39.370,
    kilometers: exports.earthRadius / 1000,
    kilometres: exports.earthRadius / 1000,
    meters: exports.earthRadius,
    metres: exports.earthRadius,
    miles: exports.earthRadius / 1609.344,
    millimeters: exports.earthRadius * 1000,
    millimetres: exports.earthRadius * 1000,
    nauticalmiles: exports.earthRadius / 1852,
    radians: 1,
    yards: exports.earthRadius / 1.0936,
};
/**
 * Units of measurement factors based on 1 meter.
 *
 * @memberof helpers
 * @type {Object}
 */
exports.unitsFactors = {
    centimeters: 100,
    centimetres: 100,
    degrees: 1 / 111325,
    feet: 3.28084,
    inches: 39.370,
    kilometers: 1 / 1000,
    kilometres: 1 / 1000,
    meters: 1,
    metres: 1,
    miles: 1 / 1609.344,
    millimeters: 1000,
    millimetres: 1000,
    nauticalmiles: 1 / 1852,
    radians: 1 / exports.earthRadius,
    yards: 1 / 1.0936,
};
/**
 * Area of measurement factors based on 1 square meter.
 *
 * @memberof helpers
 * @type {Object}
 */
exports.areaFactors = {
    acres: 0.000247105,
    centimeters: 10000,
    centimetres: 10000,
    feet: 10.763910417,
    inches: 1550.003100006,
    kilometers: 0.000001,
    kilometres: 0.000001,
    meters: 1,
    metres: 1,
    miles: 3.86e-7,
    millimeters: 1000000,
    millimetres: 1000000,
    yards: 1.195990046,
};
/**
 * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
 *
 * @name feature
 * @param {Geometry} geometry input geometry
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature} a GeoJSON Feature
 * @example
 * var geometry = {
 *   "type": "Point",
 *   "coordinates": [110, 50]
 * };
 *
 * var feature = turf.feature(geometry);
 *
 * //=feature
 */
function feature(geom, properties, options) {
    if (options === void 0) { options = {}; }
    var feat = { type: "Feature" };
    if (options.id === 0 || options.id) {
        feat.id = options.id;
    }
    if (options.bbox) {
        feat.bbox = options.bbox;
    }
    feat.properties = properties || {};
    feat.geometry = geom;
    return feat;
}
exports.feature = feature;
/**
 * Creates a GeoJSON {@link Geometry} from a Geometry string type & coordinates.
 * For GeometryCollection type use `helpers.geometryCollection`
 *
 * @name geometry
 * @param {string} type Geometry Type
 * @param {Array<any>} coordinates Coordinates
 * @param {Object} [options={}] Optional Parameters
 * @returns {Geometry} a GeoJSON Geometry
 * @example
 * var type = "Point";
 * var coordinates = [110, 50];
 * var geometry = turf.geometry(type, coordinates);
 * // => geometry
 */
function geometry(type, coordinates, options) {
    if (options === void 0) { options = {}; }
    switch (type) {
        case "Point": return point(coordinates).geometry;
        case "LineString": return lineString(coordinates).geometry;
        case "Polygon": return polygon(coordinates).geometry;
        case "MultiPoint": return multiPoint(coordinates).geometry;
        case "MultiLineString": return multiLineString(coordinates).geometry;
        case "MultiPolygon": return multiPolygon(coordinates).geometry;
        default: throw new Error(type + " is invalid");
    }
}
exports.geometry = geometry;
/**
 * Creates a {@link Point} {@link Feature} from a Position.
 *
 * @name point
 * @param {Array<number>} coordinates longitude, latitude position (each in decimal degrees)
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Point>} a Point feature
 * @example
 * var point = turf.point([-75.343, 39.984]);
 *
 * //=point
 */
function point(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "Point",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.point = point;
/**
 * Creates a {@link Point} {@link FeatureCollection} from an Array of Point coordinates.
 *
 * @name points
 * @param {Array<Array<number>>} coordinates an array of Points
 * @param {Object} [properties={}] Translate these properties to each Feature
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Point>} Point Feature
 * @example
 * var points = turf.points([
 *   [-75, 39],
 *   [-80, 45],
 *   [-78, 50]
 * ]);
 *
 * //=points
 */
function points(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return point(coords, properties);
    }), options);
}
exports.points = points;
/**
 * Creates a {@link Polygon} {@link Feature} from an Array of LinearRings.
 *
 * @name polygon
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Polygon>} Polygon Feature
 * @example
 * var polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' });
 *
 * //=polygon
 */
function polygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    for (var _i = 0, coordinates_1 = coordinates; _i < coordinates_1.length; _i++) {
        var ring = coordinates_1[_i];
        if (ring.length < 4) {
            throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
        }
        for (var j = 0; j < ring[ring.length - 1].length; j++) {
            // Check if first point of Polygon contains two numbers
            if (ring[ring.length - 1][j] !== ring[0][j]) {
                throw new Error("First and last Position are not equivalent.");
            }
        }
    }
    var geom = {
        type: "Polygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.polygon = polygon;
/**
 * Creates a {@link Polygon} {@link FeatureCollection} from an Array of Polygon coordinates.
 *
 * @name polygons
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygon coordinates
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Polygon>} Polygon FeatureCollection
 * @example
 * var polygons = turf.polygons([
 *   [[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]],
 *   [[[-15, 42], [-14, 46], [-12, 41], [-17, 44], [-15, 42]]],
 * ]);
 *
 * //=polygons
 */
function polygons(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return polygon(coords, properties);
    }), options);
}
exports.polygons = polygons;
/**
 * Creates a {@link LineString} {@link Feature} from an Array of Positions.
 *
 * @name lineString
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<LineString>} LineString Feature
 * @example
 * var linestring1 = turf.lineString([[-24, 63], [-23, 60], [-25, 65], [-20, 69]], {name: 'line 1'});
 * var linestring2 = turf.lineString([[-14, 43], [-13, 40], [-15, 45], [-10, 49]], {name: 'line 2'});
 *
 * //=linestring1
 * //=linestring2
 */
function lineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    if (coordinates.length < 2) {
        throw new Error("coordinates must be an array of two or more positions");
    }
    var geom = {
        type: "LineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.lineString = lineString;
/**
 * Creates a {@link LineString} {@link FeatureCollection} from an Array of LineString coordinates.
 *
 * @name lineStrings
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<LineString>} LineString FeatureCollection
 * @example
 * var linestrings = turf.lineStrings([
 *   [[-24, 63], [-23, 60], [-25, 65], [-20, 69]],
 *   [[-14, 43], [-13, 40], [-15, 45], [-10, 49]]
 * ]);
 *
 * //=linestrings
 */
function lineStrings(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return lineString(coords, properties);
    }), options);
}
exports.lineStrings = lineStrings;
/**
 * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
 *
 * @name featureCollection
 * @param {Feature[]} features input features
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {FeatureCollection} FeatureCollection of Features
 * @example
 * var locationA = turf.point([-75.343, 39.984], {name: 'Location A'});
 * var locationB = turf.point([-75.833, 39.284], {name: 'Location B'});
 * var locationC = turf.point([-75.534, 39.123], {name: 'Location C'});
 *
 * var collection = turf.featureCollection([
 *   locationA,
 *   locationB,
 *   locationC
 * ]);
 *
 * //=collection
 */
function featureCollection(features, options) {
    if (options === void 0) { options = {}; }
    var fc = { type: "FeatureCollection" };
    if (options.id) {
        fc.id = options.id;
    }
    if (options.bbox) {
        fc.bbox = options.bbox;
    }
    fc.features = features;
    return fc;
}
exports.featureCollection = featureCollection;
/**
 * Creates a {@link Feature<MultiLineString>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiLineString
 * @param {Array<Array<Array<number>>>} coordinates an array of LineStrings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiLineString>} a MultiLineString feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiLine = turf.multiLineString([[[0,0],[10,10]]]);
 *
 * //=multiLine
 */
function multiLineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiLineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.multiLineString = multiLineString;
/**
 * Creates a {@link Feature<MultiPoint>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPoint
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPoint>} a MultiPoint feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPt = turf.multiPoint([[0,0],[10,10]]);
 *
 * //=multiPt
 */
function multiPoint(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPoint",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.multiPoint = multiPoint;
/**
 * Creates a {@link Feature<MultiPolygon>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPolygon
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygons
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPolygon>} a multipolygon feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPoly = turf.multiPolygon([[[[0,0],[0,10],[10,10],[10,0],[0,0]]]]);
 *
 * //=multiPoly
 *
 */
function multiPolygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPolygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.multiPolygon = multiPolygon;
/**
 * Creates a {@link Feature<GeometryCollection>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name geometryCollection
 * @param {Array<Geometry>} geometries an array of GeoJSON Geometries
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<GeometryCollection>} a GeoJSON GeometryCollection Feature
 * @example
 * var pt = turf.geometry("Point", [100, 0]);
 * var line = turf.geometry("LineString", [[101, 0], [102, 1]]);
 * var collection = turf.geometryCollection([pt, line]);
 *
 * // => collection
 */
function geometryCollection(geometries, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "GeometryCollection",
        geometries: geometries,
    };
    return feature(geom, properties, options);
}
exports.geometryCollection = geometryCollection;
/**
 * Round number to precision
 *
 * @param {number} num Number
 * @param {number} [precision=0] Precision
 * @returns {number} rounded number
 * @example
 * turf.round(120.4321)
 * //=120
 *
 * turf.round(120.4321, 2)
 * //=120.43
 */
function round(num, precision) {
    if (precision === void 0) { precision = 0; }
    if (precision && !(precision >= 0)) {
        throw new Error("precision must be a positive number");
    }
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(num * multiplier) / multiplier;
}
exports.round = round;
/**
 * Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name radiansToLength
 * @param {number} radians in radians across the sphere
 * @param {string} [units="kilometers"] can be degrees, radians, miles, or kilometers inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} distance
 */
function radiansToLength(radians, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = exports.factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return radians * factor;
}
exports.radiansToLength = radiansToLength;
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name lengthToRadians
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, or kilometers inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} radians
 */
function lengthToRadians(distance, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = exports.factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return distance / factor;
}
exports.lengthToRadians = lengthToRadians;
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into degrees
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, centimeters, kilometres, feet
 *
 * @name lengthToDegrees
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, or kilometers inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} degrees
 */
function lengthToDegrees(distance, units) {
    return radiansToDegrees(lengthToRadians(distance, units));
}
exports.lengthToDegrees = lengthToDegrees;
/**
 * Converts any bearing angle from the north line direction (positive clockwise)
 * and returns an angle between 0-360 degrees (positive clockwise), 0 being the north line
 *
 * @name bearingToAzimuth
 * @param {number} bearing angle, between -180 and +180 degrees
 * @returns {number} angle between 0 and 360 degrees
 */
function bearingToAzimuth(bearing) {
    var angle = bearing % 360;
    if (angle < 0) {
        angle += 360;
    }
    return angle;
}
exports.bearingToAzimuth = bearingToAzimuth;
/**
 * Converts an angle in radians to degrees
 *
 * @name radiansToDegrees
 * @param {number} radians angle in radians
 * @returns {number} degrees between 0 and 360 degrees
 */
function radiansToDegrees(radians) {
    var degrees = radians % (2 * Math.PI);
    return degrees * 180 / Math.PI;
}
exports.radiansToDegrees = radiansToDegrees;
/**
 * Converts an angle in degrees to radians
 *
 * @name degreesToRadians
 * @param {number} degrees angle between 0 and 360 degrees
 * @returns {number} angle in radians
 */
function degreesToRadians(degrees) {
    var radians = degrees % 360;
    return radians * Math.PI / 180;
}
exports.degreesToRadians = degreesToRadians;
/**
 * Converts a length to the requested unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @param {number} length to be converted
 * @param {Units} [originalUnit="kilometers"] of the length
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted length
 */
function convertLength(length, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "kilometers"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(length >= 0)) {
        throw new Error("length must be a positive number");
    }
    return radiansToLength(lengthToRadians(length, originalUnit), finalUnit);
}
exports.convertLength = convertLength;
/**
 * Converts a area to the requested unit.
 * Valid units: kilometers, kilometres, meters, metres, centimetres, millimeters, acres, miles, yards, feet, inches
 * @param {number} area to be converted
 * @param {Units} [originalUnit="meters"] of the distance
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted distance
 */
function convertArea(area, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "meters"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(area >= 0)) {
        throw new Error("area must be a positive number");
    }
    var startFactor = exports.areaFactors[originalUnit];
    if (!startFactor) {
        throw new Error("invalid original units");
    }
    var finalFactor = exports.areaFactors[finalUnit];
    if (!finalFactor) {
        throw new Error("invalid final units");
    }
    return (area / startFactor) * finalFactor;
}
exports.convertArea = convertArea;
/**
 * isNumber
 *
 * @param {*} num Number to validate
 * @returns {boolean} true/false
 * @example
 * turf.isNumber(123)
 * //=true
 * turf.isNumber('foo')
 * //=false
 */
function isNumber(num) {
    return !isNaN(num) && num !== null && !Array.isArray(num) && !/^\s*$/.test(num);
}
exports.isNumber = isNumber;
/**
 * isObject
 *
 * @param {*} input variable to validate
 * @returns {boolean} true/false
 * @example
 * turf.isObject({elevation: 10})
 * //=true
 * turf.isObject('foo')
 * //=false
 */
function isObject(input) {
    return (!!input) && (input.constructor === Object);
}
exports.isObject = isObject;
/**
 * Validate BBox
 *
 * @private
 * @param {Array<number>} bbox BBox to validate
 * @returns {void}
 * @throws Error if BBox is not valid
 * @example
 * validateBBox([-180, -40, 110, 50])
 * //=OK
 * validateBBox([-180, -40])
 * //=Error
 * validateBBox('Foo')
 * //=Error
 * validateBBox(5)
 * //=Error
 * validateBBox(null)
 * //=Error
 * validateBBox(undefined)
 * //=Error
 */
function validateBBox(bbox) {
    if (!bbox) {
        throw new Error("bbox is required");
    }
    if (!Array.isArray(bbox)) {
        throw new Error("bbox must be an Array");
    }
    if (bbox.length !== 4 && bbox.length !== 6) {
        throw new Error("bbox must be an Array of 4 or 6 numbers");
    }
    bbox.forEach(function (num) {
        if (!isNumber(num)) {
            throw new Error("bbox must only contain numbers");
        }
    });
}
exports.validateBBox = validateBBox;
/**
 * Validate Id
 *
 * @private
 * @param {string|number} id Id to validate
 * @returns {void}
 * @throws Error if Id is not valid
 * @example
 * validateId([-180, -40, 110, 50])
 * //=Error
 * validateId([-180, -40])
 * //=Error
 * validateId('Foo')
 * //=OK
 * validateId(5)
 * //=OK
 * validateId(null)
 * //=Error
 * validateId(undefined)
 * //=Error
 */
function validateId(id) {
    if (!id) {
        throw new Error("id is required");
    }
    if (["string", "number"].indexOf(typeof id) === -1) {
        throw new Error("id must be a number or a string");
    }
}
exports.validateId = validateId;
// Deprecated methods
function radians2degrees() {
    throw new Error("method has been renamed to `radiansToDegrees`");
}
exports.radians2degrees = radians2degrees;
function degrees2radians() {
    throw new Error("method has been renamed to `degreesToRadians`");
}
exports.degrees2radians = degrees2radians;
function distanceToDegrees() {
    throw new Error("method has been renamed to `lengthToDegrees`");
}
exports.distanceToDegrees = distanceToDegrees;
function distanceToRadians() {
    throw new Error("method has been renamed to `lengthToRadians`");
}
exports.distanceToRadians = distanceToRadians;
function radiansToDistance() {
    throw new Error("method has been renamed to `radiansToLength`");
}
exports.radiansToDistance = radiansToDistance;
function bearingToAngle() {
    throw new Error("method has been renamed to `bearingToAzimuth`");
}
exports.bearingToAngle = bearingToAngle;
function convertDistance() {
    throw new Error("method has been renamed to `convertLength`");
}
exports.convertDistance = convertDistance;


/***/ }),

/***/ "./node_modules/@turf/meta/index.js":
/*!******************************************!*\
  !*** ./node_modules/@turf/meta/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var helpers = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/index.js");

/**
 * Callback for coordEach
 *
 * @callback coordEachCallback
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */

/**
 * Iterate over coordinates in any GeoJSON object, similar to Array.forEach()
 *
 * @name coordEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentCoord, coordIndex, featureIndex, multiFeatureIndex)
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordEach(features, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
function coordEach(geojson, callback, excludeWrapCoord) {
    // Handles null Geometry -- Skips this GeoJSON
    if (geojson === null) return;
    var j, k, l, geometry, stopG, coords,
        geometryMaybeCollection,
        wrapShrink = 0,
        coordIndex = 0,
        isGeometryCollection,
        type = geojson.type,
        isFeatureCollection = type === 'FeatureCollection',
        isFeature = type === 'Feature',
        stop = isFeatureCollection ? geojson.features.length : 1;

    // This logic may look a little weird. The reason why it is that way
    // is because it's trying to be fast. GeoJSON supports multiple kinds
    // of objects at its root: FeatureCollection, Features, Geometries.
    // This function has the responsibility of handling all of them, and that
    // means that some of the `for` loops you see below actually just don't apply
    // to certain inputs. For instance, if you give this just a
    // Point geometry, then both loops are short-circuited and all we do
    // is gradually rename the input until it's called 'geometry'.
    //
    // This also aims to allocate as few resources as possible: just a
    // few numbers and booleans, rather than any temporary arrays as would
    // be required with the normalization approach.
    for (var featureIndex = 0; featureIndex < stop; featureIndex++) {
        geometryMaybeCollection = (isFeatureCollection ? geojson.features[featureIndex].geometry :
            (isFeature ? geojson.geometry : geojson));
        isGeometryCollection = (geometryMaybeCollection) ? geometryMaybeCollection.type === 'GeometryCollection' : false;
        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

        for (var geomIndex = 0; geomIndex < stopG; geomIndex++) {
            var multiFeatureIndex = 0;
            var geometryIndex = 0;
            geometry = isGeometryCollection ?
                geometryMaybeCollection.geometries[geomIndex] : geometryMaybeCollection;

            // Handles null Geometry -- Skips this geometry
            if (geometry === null) continue;
            coords = geometry.coordinates;
            var geomType = geometry.type;

            wrapShrink = (excludeWrapCoord && (geomType === 'Polygon' || geomType === 'MultiPolygon')) ? 1 : 0;

            switch (geomType) {
            case null:
                break;
            case 'Point':
                if (callback(coords, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                coordIndex++;
                multiFeatureIndex++;
                break;
            case 'LineString':
            case 'MultiPoint':
                for (j = 0; j < coords.length; j++) {
                    if (callback(coords[j], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                    coordIndex++;
                    if (geomType === 'MultiPoint') multiFeatureIndex++;
                }
                if (geomType === 'LineString') multiFeatureIndex++;
                break;
            case 'Polygon':
            case 'MultiLineString':
                for (j = 0; j < coords.length; j++) {
                    for (k = 0; k < coords[j].length - wrapShrink; k++) {
                        if (callback(coords[j][k], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                        coordIndex++;
                    }
                    if (geomType === 'MultiLineString') multiFeatureIndex++;
                    if (geomType === 'Polygon') geometryIndex++;
                }
                if (geomType === 'Polygon') multiFeatureIndex++;
                break;
            case 'MultiPolygon':
                for (j = 0; j < coords.length; j++) {
                    geometryIndex = 0;
                    for (k = 0; k < coords[j].length; k++) {
                        for (l = 0; l < coords[j][k].length - wrapShrink; l++) {
                            if (callback(coords[j][k][l], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                            coordIndex++;
                        }
                        geometryIndex++;
                    }
                    multiFeatureIndex++;
                }
                break;
            case 'GeometryCollection':
                for (j = 0; j < geometry.geometries.length; j++)
                    if (coordEach(geometry.geometries[j], callback, excludeWrapCoord) === false) return false;
                break;
            default:
                throw new Error('Unknown Geometry Type');
            }
        }
    }
}

/**
 * Callback for coordReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback coordReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */

/**
 * Reduce coordinates in any GeoJSON object, similar to Array.reduce()
 *
 * @name coordReduce
 * @param {FeatureCollection|Geometry|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentCoord, coordIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordReduce(features, function (previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentCoord;
 * });
 */
function coordReduce(geojson, callback, initialValue, excludeWrapCoord) {
    var previousValue = initialValue;
    coordEach(geojson, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
        if (coordIndex === 0 && initialValue === undefined) previousValue = currentCoord;
        else previousValue = callback(previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
    }, excludeWrapCoord);
    return previousValue;
}

/**
 * Callback for propEach
 *
 * @callback propEachCallback
 * @param {Object} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Iterate over properties in any GeoJSON object, similar to Array.forEach()
 *
 * @name propEach
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentProperties, featureIndex)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propEach(features, function (currentProperties, featureIndex) {
 *   //=currentProperties
 *   //=featureIndex
 * });
 */
function propEach(geojson, callback) {
    var i;
    switch (geojson.type) {
    case 'FeatureCollection':
        for (i = 0; i < geojson.features.length; i++) {
            if (callback(geojson.features[i].properties, i) === false) break;
        }
        break;
    case 'Feature':
        callback(geojson.properties, 0);
        break;
    }
}


/**
 * Callback for propReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback propReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {*} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Reduce properties in any GeoJSON object into a single value,
 * similar to how Array.reduce works. However, in this case we lazily run
 * the reduction, so an array of all properties is unnecessary.
 *
 * @name propReduce
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentProperties, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propReduce(features, function (previousValue, currentProperties, featureIndex) {
 *   //=previousValue
 *   //=currentProperties
 *   //=featureIndex
 *   return currentProperties
 * });
 */
function propReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    propEach(geojson, function (currentProperties, featureIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentProperties;
        else previousValue = callback(previousValue, currentProperties, featureIndex);
    });
    return previousValue;
}

/**
 * Callback for featureEach
 *
 * @callback featureEachCallback
 * @param {Feature<any>} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Iterate over features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name featureEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.featureEach(features, function (currentFeature, featureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 * });
 */
function featureEach(geojson, callback) {
    if (geojson.type === 'Feature') {
        callback(geojson, 0);
    } else if (geojson.type === 'FeatureCollection') {
        for (var i = 0; i < geojson.features.length; i++) {
            if (callback(geojson.features[i], i) === false) break;
        }
    }
}

/**
 * Callback for featureReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback featureReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name featureReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.featureReduce(features, function (previousValue, currentFeature, featureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   return currentFeature
 * });
 */
function featureReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    featureEach(geojson, function (currentFeature, featureIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentFeature;
        else previousValue = callback(previousValue, currentFeature, featureIndex);
    });
    return previousValue;
}

/**
 * Get all coordinates from any GeoJSON object.
 *
 * @name coordAll
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @returns {Array<Array<number>>} coordinate position array
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * var coords = turf.coordAll(features);
 * //= [[26, 37], [36, 53]]
 */
function coordAll(geojson) {
    var coords = [];
    coordEach(geojson, function (coord) {
        coords.push(coord);
    });
    return coords;
}

/**
 * Callback for geomEach
 *
 * @callback geomEachCallback
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */

/**
 * Iterate over each geometry in any GeoJSON object, similar to Array.forEach()
 *
 * @name geomEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomEach(features, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 * });
 */
function geomEach(geojson, callback) {
    var i, j, g, geometry, stopG,
        geometryMaybeCollection,
        isGeometryCollection,
        featureProperties,
        featureBBox,
        featureId,
        featureIndex = 0,
        isFeatureCollection = geojson.type === 'FeatureCollection',
        isFeature = geojson.type === 'Feature',
        stop = isFeatureCollection ? geojson.features.length : 1;

    // This logic may look a little weird. The reason why it is that way
    // is because it's trying to be fast. GeoJSON supports multiple kinds
    // of objects at its root: FeatureCollection, Features, Geometries.
    // This function has the responsibility of handling all of them, and that
    // means that some of the `for` loops you see below actually just don't apply
    // to certain inputs. For instance, if you give this just a
    // Point geometry, then both loops are short-circuited and all we do
    // is gradually rename the input until it's called 'geometry'.
    //
    // This also aims to allocate as few resources as possible: just a
    // few numbers and booleans, rather than any temporary arrays as would
    // be required with the normalization approach.
    for (i = 0; i < stop; i++) {

        geometryMaybeCollection = (isFeatureCollection ? geojson.features[i].geometry :
            (isFeature ? geojson.geometry : geojson));
        featureProperties = (isFeatureCollection ? geojson.features[i].properties :
            (isFeature ? geojson.properties : {}));
        featureBBox = (isFeatureCollection ? geojson.features[i].bbox :
            (isFeature ? geojson.bbox : undefined));
        featureId = (isFeatureCollection ? geojson.features[i].id :
            (isFeature ? geojson.id : undefined));
        isGeometryCollection = (geometryMaybeCollection) ? geometryMaybeCollection.type === 'GeometryCollection' : false;
        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

        for (g = 0; g < stopG; g++) {
            geometry = isGeometryCollection ?
                geometryMaybeCollection.geometries[g] : geometryMaybeCollection;

            // Handle null Geometry
            if (geometry === null) {
                if (callback(null, featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                continue;
            }
            switch (geometry.type) {
            case 'Point':
            case 'LineString':
            case 'MultiPoint':
            case 'Polygon':
            case 'MultiLineString':
            case 'MultiPolygon': {
                if (callback(geometry, featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                break;
            }
            case 'GeometryCollection': {
                for (j = 0; j < geometry.geometries.length; j++) {
                    if (callback(geometry.geometries[j], featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                }
                break;
            }
            default:
                throw new Error('Unknown Geometry Type');
            }
        }
        // Only increase `featureIndex` per each feature
        featureIndex++;
    }
}

/**
 * Callback for geomReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback geomReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */

/**
 * Reduce geometry in any GeoJSON object, similar to Array.reduce().
 *
 * @name geomReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomReduce(features, function (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=previousValue
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 *   return currentGeometry
 * });
 */
function geomReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    geomEach(geojson, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentGeometry;
        else previousValue = callback(previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId);
    });
    return previousValue;
}

/**
 * Callback for flattenEach
 *
 * @callback flattenEachCallback
 * @param {Feature} currentFeature The current flattened feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */

/**
 * Iterate over flattened features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name flattenEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex, multiFeatureIndex)
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenEach(features, function (currentFeature, featureIndex, multiFeatureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 * });
 */
function flattenEach(geojson, callback) {
    geomEach(geojson, function (geometry, featureIndex, properties, bbox, id) {
        // Callback for single geometry
        var type = (geometry === null) ? null : geometry.type;
        switch (type) {
        case null:
        case 'Point':
        case 'LineString':
        case 'Polygon':
            if (callback(helpers.feature(geometry, properties, {bbox: bbox, id: id}), featureIndex, 0) === false) return false;
            return;
        }

        var geomType;

        // Callback for multi-geometry
        switch (type) {
        case 'MultiPoint':
            geomType = 'Point';
            break;
        case 'MultiLineString':
            geomType = 'LineString';
            break;
        case 'MultiPolygon':
            geomType = 'Polygon';
            break;
        }

        for (var multiFeatureIndex = 0; multiFeatureIndex < geometry.coordinates.length; multiFeatureIndex++) {
            var coordinate = geometry.coordinates[multiFeatureIndex];
            var geom = {
                type: geomType,
                coordinates: coordinate
            };
            if (callback(helpers.feature(geom, properties), featureIndex, multiFeatureIndex) === false) return false;
        }
    });
}

/**
 * Callback for flattenReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback flattenReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */

/**
 * Reduce flattened features in any GeoJSON object, similar to Array.reduce().
 *
 * @name flattenReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex, multiFeatureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenReduce(features, function (previousValue, currentFeature, featureIndex, multiFeatureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   return currentFeature
 * });
 */
function flattenReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    flattenEach(geojson, function (currentFeature, featureIndex, multiFeatureIndex) {
        if (featureIndex === 0 && multiFeatureIndex === 0 && initialValue === undefined) previousValue = currentFeature;
        else previousValue = callback(previousValue, currentFeature, featureIndex, multiFeatureIndex);
    });
    return previousValue;
}

/**
 * Callback for segmentEach
 *
 * @callback segmentEachCallback
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 * @returns {void}
 */

/**
 * Iterate over 2-vertex line segment in any GeoJSON object, similar to Array.forEach()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex)
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentEach(polygon, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //=currentSegment
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   //=segmentIndex
 * });
 *
 * // Calculate the total number of segments
 * var total = 0;
 * turf.segmentEach(polygon, function () {
 *     total++;
 * });
 */
function segmentEach(geojson, callback) {
    flattenEach(geojson, function (feature, featureIndex, multiFeatureIndex) {
        var segmentIndex = 0;

        // Exclude null Geometries
        if (!feature.geometry) return;
        // (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
        var type = feature.geometry.type;
        if (type === 'Point' || type === 'MultiPoint') return;

        // Generate 2-vertex line segments
        var previousCoords;
        var previousFeatureIndex = 0;
        var previousMultiIndex = 0;
        var prevGeomIndex = 0;
        if (coordEach(feature, function (currentCoord, coordIndex, featureIndexCoord, multiPartIndexCoord, geometryIndex) {
            // Simulating a meta.coordReduce() since `reduce` operations cannot be stopped by returning `false`
            if (previousCoords === undefined || featureIndex > previousFeatureIndex || multiPartIndexCoord > previousMultiIndex || geometryIndex > prevGeomIndex) {
                previousCoords = currentCoord;
                previousFeatureIndex = featureIndex;
                previousMultiIndex = multiPartIndexCoord;
                prevGeomIndex = geometryIndex;
                segmentIndex = 0;
                return;
            }
            var currentSegment = helpers.lineString([previousCoords, currentCoord], feature.properties);
            if (callback(currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) === false) return false;
            segmentIndex++;
            previousCoords = currentCoord;
        }) === false) return false;
    });
}

/**
 * Callback for segmentReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback segmentReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 */

/**
 * Reduce 2-vertex line segment in any GeoJSON object, similar to Array.reduce()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (previousValue, currentSegment, currentIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentReduce(polygon, function (previousSegment, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //= previousSegment
 *   //= currentSegment
 *   //= featureIndex
 *   //= multiFeatureIndex
 *   //= geometryIndex
 *   //= segmentInex
 *   return currentSegment
 * });
 *
 * // Calculate the total number of segments
 * var initialValue = 0
 * var total = turf.segmentReduce(polygon, function (previousValue) {
 *     previousValue++;
 *     return previousValue;
 * }, initialValue);
 */
function segmentReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    var started = false;
    segmentEach(geojson, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
        if (started === false && initialValue === undefined) previousValue = currentSegment;
        else previousValue = callback(previousValue, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex);
        started = true;
    });
    return previousValue;
}

/**
 * Callback for lineEach
 *
 * @callback lineEachCallback
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */

/**
 * Iterate over line or ring coordinates in LineString, Polygon, MultiLineString, MultiPolygon Features or Geometries,
 * similar to Array.forEach.
 *
 * @name lineEach
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @example
 * var multiLine = turf.multiLineString([
 *   [[26, 37], [35, 45]],
 *   [[36, 53], [38, 50], [41, 55]]
 * ]);
 *
 * turf.lineEach(multiLine, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
function lineEach(geojson, callback) {
    // validation
    if (!geojson) throw new Error('geojson is required');

    flattenEach(geojson, function (feature, featureIndex, multiFeatureIndex) {
        if (feature.geometry === null) return;
        var type = feature.geometry.type;
        var coords = feature.geometry.coordinates;
        switch (type) {
        case 'LineString':
            if (callback(feature, featureIndex, multiFeatureIndex, 0, 0) === false) return false;
            break;
        case 'Polygon':
            for (var geometryIndex = 0; geometryIndex < coords.length; geometryIndex++) {
                if (callback(helpers.lineString(coords[geometryIndex], feature.properties), featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
            }
            break;
        }
    });
}

/**
 * Callback for lineReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback lineReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed.
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */

/**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name lineReduce
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var multiPoly = turf.multiPolygon([
 *   turf.polygon([[[12,48],[2,41],[24,38],[12,48]], [[9,44],[13,41],[13,45],[9,44]]]),
 *   turf.polygon([[[5, 5], [0, 0], [2, 2], [4, 4], [5, 5]]])
 * ]);
 *
 * turf.lineReduce(multiPoly, function (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentLine
 * });
 */
function lineReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    lineEach(geojson, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentLine;
        else previousValue = callback(previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex);
    });
    return previousValue;
}

/**
 * Finds a particular 2-vertex LineString Segment from a GeoJSON using `@turf/meta` indexes.
 *
 * Negative indexes are permitted.
 * Point & MultiPoint will always return null.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.featureIndex=0] Feature Index
 * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
 * @param {number} [options.geometryIndex=0] Geometry Index
 * @param {number} [options.segmentIndex=0] Segment Index
 * @param {Object} [options.properties={}] Translate Properties to output LineString
 * @param {BBox} [options.bbox={}] Translate BBox to output LineString
 * @param {number|string} [options.id={}] Translate Id to output LineString
 * @returns {Feature<LineString>} 2-vertex GeoJSON Feature LineString
 * @example
 * var multiLine = turf.multiLineString([
 *     [[10, 10], [50, 30], [30, 40]],
 *     [[-10, -10], [-50, -30], [-30, -40]]
 * ]);
 *
 * // First Segment (defaults are 0)
 * turf.findSegment(multiLine);
 * // => Feature<LineString<[[10, 10], [50, 30]]>>
 *
 * // First Segment of 2nd Multi Feature
 * turf.findSegment(multiLine, {multiFeatureIndex: 1});
 * // => Feature<LineString<[[-10, -10], [-50, -30]]>>
 *
 * // Last Segment of Last Multi Feature
 * turf.findSegment(multiLine, {multiFeatureIndex: -1, segmentIndex: -1});
 * // => Feature<LineString<[[-50, -30], [-30, -40]]>>
 */
function findSegment(geojson, options) {
    // Optional Parameters
    options = options || {};
    if (!helpers.isObject(options)) throw new Error('options is invalid');
    var featureIndex = options.featureIndex || 0;
    var multiFeatureIndex = options.multiFeatureIndex || 0;
    var geometryIndex = options.geometryIndex || 0;
    var segmentIndex = options.segmentIndex || 0;

    // Find FeatureIndex
    var properties = options.properties;
    var geometry;

    switch (geojson.type) {
    case 'FeatureCollection':
        if (featureIndex < 0) featureIndex = geojson.features.length + featureIndex;
        properties = properties || geojson.features[featureIndex].properties;
        geometry = geojson.features[featureIndex].geometry;
        break;
    case 'Feature':
        properties = properties || geojson.properties;
        geometry = geojson.geometry;
        break;
    case 'Point':
    case 'MultiPoint':
        return null;
    case 'LineString':
    case 'Polygon':
    case 'MultiLineString':
    case 'MultiPolygon':
        geometry = geojson;
        break;
    default:
        throw new Error('geojson is invalid');
    }

    // Find SegmentIndex
    if (geometry === null) return null;
    var coords = geometry.coordinates;
    switch (geometry.type) {
    case 'Point':
    case 'MultiPoint':
        return null;
    case 'LineString':
        if (segmentIndex < 0) segmentIndex = coords.length + segmentIndex - 1;
        return helpers.lineString([coords[segmentIndex], coords[segmentIndex + 1]], properties, options);
    case 'Polygon':
        if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
        if (segmentIndex < 0) segmentIndex = coords[geometryIndex].length + segmentIndex - 1;
        return helpers.lineString([coords[geometryIndex][segmentIndex], coords[geometryIndex][segmentIndex + 1]], properties, options);
    case 'MultiLineString':
        if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
        if (segmentIndex < 0) segmentIndex = coords[multiFeatureIndex].length + segmentIndex - 1;
        return helpers.lineString([coords[multiFeatureIndex][segmentIndex], coords[multiFeatureIndex][segmentIndex + 1]], properties, options);
    case 'MultiPolygon':
        if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
        if (geometryIndex < 0) geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
        if (segmentIndex < 0) segmentIndex = coords[multiFeatureIndex][geometryIndex].length - segmentIndex - 1;
        return helpers.lineString([coords[multiFeatureIndex][geometryIndex][segmentIndex], coords[multiFeatureIndex][geometryIndex][segmentIndex + 1]], properties, options);
    }
    throw new Error('geojson is invalid');
}

/**
 * Finds a particular Point from a GeoJSON using `@turf/meta` indexes.
 *
 * Negative indexes are permitted.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.featureIndex=0] Feature Index
 * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
 * @param {number} [options.geometryIndex=0] Geometry Index
 * @param {number} [options.coordIndex=0] Coord Index
 * @param {Object} [options.properties={}] Translate Properties to output Point
 * @param {BBox} [options.bbox={}] Translate BBox to output Point
 * @param {number|string} [options.id={}] Translate Id to output Point
 * @returns {Feature<Point>} 2-vertex GeoJSON Feature Point
 * @example
 * var multiLine = turf.multiLineString([
 *     [[10, 10], [50, 30], [30, 40]],
 *     [[-10, -10], [-50, -30], [-30, -40]]
 * ]);
 *
 * // First Segment (defaults are 0)
 * turf.findPoint(multiLine);
 * // => Feature<Point<[10, 10]>>
 *
 * // First Segment of the 2nd Multi-Feature
 * turf.findPoint(multiLine, {multiFeatureIndex: 1});
 * // => Feature<Point<[-10, -10]>>
 *
 * // Last Segment of last Multi-Feature
 * turf.findPoint(multiLine, {multiFeatureIndex: -1, coordIndex: -1});
 * // => Feature<Point<[-30, -40]>>
 */
function findPoint(geojson, options) {
    // Optional Parameters
    options = options || {};
    if (!helpers.isObject(options)) throw new Error('options is invalid');
    var featureIndex = options.featureIndex || 0;
    var multiFeatureIndex = options.multiFeatureIndex || 0;
    var geometryIndex = options.geometryIndex || 0;
    var coordIndex = options.coordIndex || 0;

    // Find FeatureIndex
    var properties = options.properties;
    var geometry;

    switch (geojson.type) {
    case 'FeatureCollection':
        if (featureIndex < 0) featureIndex = geojson.features.length + featureIndex;
        properties = properties || geojson.features[featureIndex].properties;
        geometry = geojson.features[featureIndex].geometry;
        break;
    case 'Feature':
        properties = properties || geojson.properties;
        geometry = geojson.geometry;
        break;
    case 'Point':
    case 'MultiPoint':
        return null;
    case 'LineString':
    case 'Polygon':
    case 'MultiLineString':
    case 'MultiPolygon':
        geometry = geojson;
        break;
    default:
        throw new Error('geojson is invalid');
    }

    // Find Coord Index
    if (geometry === null) return null;
    var coords = geometry.coordinates;
    switch (geometry.type) {
    case 'Point':
        return helpers.point(coords, properties, options);
    case 'MultiPoint':
        if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
        return helpers.point(coords[multiFeatureIndex], properties, options);
    case 'LineString':
        if (coordIndex < 0) coordIndex = coords.length + coordIndex;
        return helpers.point(coords[coordIndex], properties, options);
    case 'Polygon':
        if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
        if (coordIndex < 0) coordIndex = coords[geometryIndex].length + coordIndex;
        return helpers.point(coords[geometryIndex][coordIndex], properties, options);
    case 'MultiLineString':
        if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
        if (coordIndex < 0) coordIndex = coords[multiFeatureIndex].length + coordIndex;
        return helpers.point(coords[multiFeatureIndex][coordIndex], properties, options);
    case 'MultiPolygon':
        if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
        if (geometryIndex < 0) geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
        if (coordIndex < 0) coordIndex = coords[multiFeatureIndex][geometryIndex].length - coordIndex;
        return helpers.point(coords[multiFeatureIndex][geometryIndex][coordIndex], properties, options);
    }
    throw new Error('geojson is invalid');
}

exports.coordEach = coordEach;
exports.coordReduce = coordReduce;
exports.propEach = propEach;
exports.propReduce = propReduce;
exports.featureEach = featureEach;
exports.featureReduce = featureReduce;
exports.coordAll = coordAll;
exports.geomEach = geomEach;
exports.geomReduce = geomReduce;
exports.flattenEach = flattenEach;
exports.flattenReduce = flattenReduce;
exports.segmentEach = segmentEach;
exports.segmentReduce = segmentReduce;
exports.lineEach = lineEach;
exports.lineReduce = lineReduce;
exports.findSegment = findSegment;
exports.findPoint = findPoint;


/***/ }),

/***/ "./node_modules/@turf/random/index.js":
/*!********************************************!*\
  !*** ./node_modules/@turf/random/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/index.js");
/**
 * Returns a random position within a {@link bounding box}.
 *
 * @name randomPosition
 * @param {Array<number>} [bbox=[-180, -90, 180, 90]] a bounding box inside of which positions are placed.
 * @returns {Array<number>} Position [longitude, latitude]
 * @example
 * var position = turf.randomPosition([-180, -90, 180, 90])
 * // => position
 */
function randomPosition(bbox) {
    if (Array.isArray(bbox)) {
        return coordInBBox(bbox);
    }
    if (bbox && bbox.bbox) {
        return coordInBBox(bbox.bbox);
    }
    return [lon(), lat()];
}
exports.randomPosition = randomPosition;
/**
 * Returns a random {@link point}.
 *
 * @name randomPoint
 * @param {number} [count=1] how many geometries will be generated
 * @param {Object} [options={}] Optional parameters
 * @param {Array<number>} [options.bbox=[-180, -90, 180, 90]] a bounding box inside of which geometries are placed.
 * @returns {FeatureCollection<Point>} GeoJSON FeatureCollection of points
 * @example
 * var points = turf.randomPoint(25, {bbox: [-180, -90, 180, 90]})
 * // => points
 */
function randomPoint(count, options) {
    if (options === void 0) { options = {}; }
    if (count === undefined || count === null) {
        count = 1;
    }
    var features = [];
    for (var i = 0; i < count; i++) {
        features.push(helpers_1.point(randomPosition(options.bbox)));
    }
    return helpers_1.featureCollection(features);
}
exports.randomPoint = randomPoint;
/**
 * Returns a random {@link polygon}.
 *
 * @name randomPolygon
 * @param {number} [count=1] how many geometries will be generated
 * @param {Object} [options={}] Optional parameters
 * @param {Array<number>} [options.bbox=[-180, -90, 180, 90]] a bounding box inside of which geometries are placed.
 * @param {number} [options.num_vertices=10] is how many coordinates each LineString will contain.
 * @param {number} [options.max_radial_length=10] is the maximum number of decimal degrees latitude or longitude that a
 * vertex can reach out of the center of the Polygon.
 * @returns {FeatureCollection<Polygon>} GeoJSON FeatureCollection of polygons
 * @example
 * var polygons = turf.randomPolygon(25, {bbox: [-180, -90, 180, 90]})
 * // => polygons
 */
function randomPolygon(count, options) {
    if (options === void 0) { options = {}; }
    // Default param
    if (count === undefined || count === null) {
        count = 1;
    }
    if (!helpers_1.isNumber(options.num_vertices) || options.num_vertices === undefined) {
        options.num_vertices = 10;
    }
    if (!helpers_1.isNumber(options.max_radial_length) || options.max_radial_length === undefined) {
        options.max_radial_length = 10;
    }
    var features = [];
    var _loop_1 = function (i) {
        var vertices = [];
        var circleOffsets = Array.apply(null, new Array(options.num_vertices + 1)).map(Math.random);
        // Sum Offsets
        circleOffsets.forEach(function (cur, index, arr) {
            arr[index] = (index > 0) ? cur + arr[index - 1] : cur;
        });
        // scaleOffsets
        circleOffsets.forEach(function (cur) {
            cur = cur * 2 * Math.PI / circleOffsets[circleOffsets.length - 1];
            var radialScaler = Math.random();
            vertices.push([
                radialScaler * (options.max_radial_length || 10) * Math.sin(cur),
                radialScaler * (options.max_radial_length || 10) * Math.cos(cur),
            ]);
        });
        vertices[vertices.length - 1] = vertices[0]; // close the ring
        // center the polygon around something
        vertices = vertices.map(vertexToCoordinate(randomPosition(options.bbox)));
        features.push(helpers_1.polygon([vertices]));
    };
    for (var i = 0; i < count; i++) {
        _loop_1(i);
    }
    return helpers_1.featureCollection(features);
}
exports.randomPolygon = randomPolygon;
/**
 * Returns a random {@link linestring}.
 *
 * @name randomLineString
 * @param {number} [count=1] how many geometries will be generated
 * @param {Object} [options={}] Optional parameters
 * @param {Array<number>} [options.bbox=[-180, -90, 180, 90]] a bounding box inside of which geometries are placed.
 * @param {number} [options.num_vertices=10] is how many coordinates each LineString will contain.
 * @param {number} [options.max_length=0.0001] is the maximum number of decimal degrees that a
 * vertex can be from its predecessor
 * @param {number} [options.max_rotation=Math.PI / 8] is the maximum number of radians that a
 * line segment can turn from the previous segment.
 * @returns {FeatureCollection<LineString>} GeoJSON FeatureCollection of linestrings
 * @example
 * var lineStrings = turf.randomLineString(25, {bbox: [-180, -90, 180, 90]})
 * // => lineStrings
 */
function randomLineString(count, options) {
    if (options === void 0) { options = {}; }
    // Optional parameters
    options = options || {};
    if (!helpers_1.isObject(options)) {
        throw new Error("options is invalid");
    }
    var bbox = options.bbox;
    var num_vertices = options.num_vertices;
    var max_length = options.max_length;
    var max_rotation = options.max_rotation;
    if (count === undefined || count === null) {
        count = 1;
    }
    // Default parameters
    if (!helpers_1.isNumber(num_vertices) || num_vertices === undefined || num_vertices < 2) {
        num_vertices = 10;
    }
    if (!helpers_1.isNumber(max_length) || max_length === undefined) {
        max_length = 0.0001;
    }
    if (!helpers_1.isNumber(max_rotation) || max_rotation === undefined) {
        max_rotation = Math.PI / 8;
    }
    var features = [];
    for (var i = 0; i < count; i++) {
        var startingPoint = randomPosition(bbox);
        var vertices = [startingPoint];
        for (var j = 0; j < num_vertices - 1; j++) {
            var priorAngle = (j === 0) ?
                Math.random() * 2 * Math.PI :
                Math.tan((vertices[j][1] - vertices[j - 1][1]) /
                    (vertices[j][0] - vertices[j - 1][0]));
            var angle = priorAngle + (Math.random() - 0.5) * max_rotation * 2;
            var distance = Math.random() * max_length;
            vertices.push([
                vertices[j][0] + distance * Math.cos(angle),
                vertices[j][1] + distance * Math.sin(angle),
            ]);
        }
        features.push(helpers_1.lineString(vertices));
    }
    return helpers_1.featureCollection(features);
}
exports.randomLineString = randomLineString;
function vertexToCoordinate(hub) {
    return function (cur) {
        return [cur[0] + hub[0], cur[1] + hub[1]];
    };
}
function rnd() { return Math.random() - 0.5; }
function lon() { return rnd() * 360; }
function lat() { return rnd() * 180; }
function coordInBBox(bbox) {
    return [
        (Math.random() * (bbox[2] - bbox[0])) + bbox[0],
        (Math.random() * (bbox[3] - bbox[1])) + bbox[1]
    ];
}


/***/ }),

/***/ "./node_modules/assert/assert.js":
/*!***************************************!*\
  !*** ./node_modules/assert/assert.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(/*! util/ */ "./node_modules/util/util.js");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elastic_maki__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/maki */ "./node_modules/@elastic/maki/index.js");
/* harmony import */ var _elastic_maki__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_maki__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_maki_dist_sprite_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/maki/dist/sprite@2.png */ "./node_modules/@elastic/maki/dist/sprite@2.png");
/* harmony import */ var _elastic_maki_dist_sprite_2_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_maki_dist_sprite_2_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/image */ "./src/utils/image.js");
/* harmony import */ var _turf_random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @turf/random */ "./node_modules/@turf/random/index.js");
/* harmony import */ var _turf_random__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_turf_random__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _turf_meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @turf/meta */ "./node_modules/@turf/meta/index.js");
/* harmony import */ var _turf_meta__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_turf_meta__WEBPACK_IMPORTED_MODULE_4__);





var map = new mapboxgl.Map({
  container: 'map',
  style: 'https://tiles.maps.elastic.co/styles/dark-matter/style.json'
});
var spriteData = _elastic_maki__WEBPACK_IMPORTED_MODULE_0__["spritesheet"]['2'];
var icons = Object.keys(spriteData).filter(function (sprite) {
  return sprite.endsWith('-15');
});
var points = Object(_turf_random__WEBPACK_IMPORTED_MODULE_3__["randomPoint"])(1000);
Object(_turf_meta__WEBPACK_IMPORTED_MODULE_4__["propEach"])(points, function (cur, i) {
  cur.icon = icons[Math.floor(Math.random() * (icons.length - 1))];
  cur.color = '#' + Math.random().toString(16).substr(-6);
  cur.halo_color = '#' + Math.random().toString(16).substr(-6);
  cur.orientation = Math.random() * (360 - 0) + 0;
  cur.size = Math.random() * (3 - 1) + 1;
});
map.on('load', function () {
  var image = new Image();

  image.onload = function (el) {
    var imageData = getImageData(el.currentTarget);

    for (var id in spriteData) {
      var _spriteData$id = spriteData[id],
          width = _spriteData$id.width,
          height = _spriteData$id.height,
          x = _spriteData$id.x,
          y = _spriteData$id.y,
          sdf = _spriteData$id.sdf,
          pixelRatio = _spriteData$id.pixelRatio;
      var data = new _utils_image__WEBPACK_IMPORTED_MODULE_2__["RGBAImage"]({
        width: width,
        height: height
      });
      _utils_image__WEBPACK_IMPORTED_MODULE_2__["RGBAImage"].copy(imageData, data, {
        x: x,
        y: y
      }, {
        x: 0,
        y: 0
      }, {
        width: width,
        height: height
      }); // result[id] = { data, pixelRatio, sdf };

      map.addImage(id, data, {
        pixelRatio: pixelRatio,
        sdf: sdf
      });
    }
  };

  image.src = _elastic_maki_dist_sprite_2_png__WEBPACK_IMPORTED_MODULE_1___default.a;
  map.addLayer({
    id: 'points',
    type: 'symbol',
    source: {
      type: 'geojson',
      data: points
    },
    layout: {
      'icon-image': ['get', 'icon'],
      'icon-size': ['get', 'size'],
      'icon-rotate': ['get', 'orientation'],
      'icon-allow-overlap': false
    },
    paint: {
      'icon-color': ['get', 'color'],
      'icon-halo-width': ['get', 'size'],
      'icon-halo-color': ['get', 'halo_color']
    }
  });
});

function getImageData(img) {
  var canvas = window.document.createElement('canvas');
  var context = canvas.getContext('2d');

  if (!context) {
    throw new Error('failed to create canvas 2d context');
  }

  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0, img.width, img.height);
  return context.getImageData(0, 0, img.width, img.height);
}

/***/ }),

/***/ "./src/utils/image.js":
/*!****************************!*\
  !*** ./src/utils/image.js ***!
  \****************************/
/*! exports provided: AlphaImage, RGBAImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaImage", function() { return AlphaImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBAImage", function() { return RGBAImage; });
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Copied from https://github.com/mapbox/mapbox-gl-js/blob/master/src/util/image.js


function createImage(image, _ref, channels, data) {
  var width = _ref.width,
      height = _ref.height;

  if (!data) {
    data = new Uint8Array(width * height * channels);
  } else if (data instanceof Uint8ClampedArray) {
    data = new Uint8Array(data.buffer);
  } else if (data.length !== width * height * channels) {
    throw new RangeError('mismatched image size');
  }

  image.width = width;
  image.height = height;
  image.data = data;
  return image;
}

function resizeImage(image, _ref2, channels) {
  var width = _ref2.width,
      height = _ref2.height;

  if (width === image.width && height === image.height) {
    return;
  }

  var newImage = createImage({}, {
    width: width,
    height: height
  }, channels);
  copyImage(image, newImage, {
    x: 0,
    y: 0
  }, {
    x: 0,
    y: 0
  }, {
    width: Math.min(image.width, width),
    height: Math.min(image.height, height)
  }, channels);
  image.width = width;
  image.height = height;
  image.data = newImage.data;
}

function copyImage(srcImg, dstImg, srcPt, dstPt, size, channels) {
  if (size.width === 0 || size.height === 0) {
    return dstImg;
  }

  if (size.width > srcImg.width || size.height > srcImg.height || srcPt.x > srcImg.width - size.width || srcPt.y > srcImg.height - size.height) {
    throw new RangeError('out of range source coordinates for image copy');
  }

  if (size.width > dstImg.width || size.height > dstImg.height || dstPt.x > dstImg.width - size.width || dstPt.y > dstImg.height - size.height) {
    throw new RangeError('out of range destination coordinates for image copy');
  }

  var srcData = srcImg.data;
  var dstData = dstImg.data;
  assert__WEBPACK_IMPORTED_MODULE_0___default()(srcData !== dstData);

  for (var y = 0; y < size.height; y++) {
    var srcOffset = ((srcPt.y + y) * srcImg.width + srcPt.x) * channels;
    var dstOffset = ((dstPt.y + y) * dstImg.width + dstPt.x) * channels;

    for (var i = 0; i < size.width * channels; i++) {
      dstData[dstOffset + i] = srcData[srcOffset + i];
    }
  }

  return dstImg;
}

var AlphaImage =
/*#__PURE__*/
function () {
  function AlphaImage(size, data) {
    _classCallCheck(this, AlphaImage);

    createImage(this, size, 1, data);
  }

  _createClass(AlphaImage, [{
    key: "resize",
    value: function resize(size) {
      resizeImage(this, size, 1);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new AlphaImage({
        width: this.width,
        height: this.height
      }, new Uint8Array(this.data));
    }
  }], [{
    key: "copy",
    value: function copy(srcImg, dstImg, srcPt, dstPt, size) {
      copyImage(srcImg, dstImg, srcPt, dstPt, size, 1);
    }
  }]);

  return AlphaImage;
}(); // Not premultiplied, because ImageData is not premultiplied.
// UNPACK_PREMULTIPLY_ALPHA_WEBGL must be used when uploading to a texture.

var RGBAImage =
/*#__PURE__*/
function () {
  // data must be a Uint8Array instead of Uint8ClampedArray because texImage2D does not
  // support Uint8ClampedArray in all browsers
  function RGBAImage(size, data) {
    _classCallCheck(this, RGBAImage);

    createImage(this, size, 4, data);
  }

  _createClass(RGBAImage, [{
    key: "resize",
    value: function resize(size) {
      resizeImage(this, size, 4);
    }
  }, {
    key: "replace",
    value: function replace(data, copy) {
      if (copy) {
        this.data.set(data);
      } else if (data instanceof Uint8ClampedArray) {
        this.data = new Uint8Array(data.buffer);
      } else {
        this.data = data;
      }
    }
  }, {
    key: "clone",
    value: function clone() {
      return new RGBAImage({
        width: this.width,
        height: this.height
      }, new Uint8Array(this.data));
    }
  }], [{
    key: "copy",
    value: function copy(srcImg, dstImg, srcPt, dstPt, size) {
      copyImage(srcImg, dstImg, srcPt, dstPt, size, 4);
    }
  }]);

  return RGBAImage;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbGFzdGljL21ha2kvZGlzdC9zcHJpdGVAMi5wbmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbGFzdGljL21ha2kvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0dXJmL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0dXJmL21ldGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0dXJmL3JhbmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXNzZXJ0L2Fzc2VydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW1hZ2UuanMiXSwibmFtZXMiOlsibWFwIiwibWFwYm94Z2wiLCJNYXAiLCJjb250YWluZXIiLCJzdHlsZSIsInNwcml0ZURhdGEiLCJzcHJpdGVzaGVldCIsImljb25zIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsInNwcml0ZSIsImVuZHNXaXRoIiwicG9pbnRzIiwicmFuZG9tUG9pbnQiLCJwcm9wRWFjaCIsImN1ciIsImkiLCJpY29uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY29sb3IiLCJ0b1N0cmluZyIsInN1YnN0ciIsImhhbG9fY29sb3IiLCJvcmllbnRhdGlvbiIsInNpemUiLCJvbiIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJlbCIsImltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJzZGYiLCJwaXhlbFJhdGlvIiwiZGF0YSIsIlJHQkFJbWFnZSIsImNvcHkiLCJhZGRJbWFnZSIsInNyYyIsInNwcml0ZXMiLCJhZGRMYXllciIsInR5cGUiLCJzb3VyY2UiLCJsYXlvdXQiLCJwYWludCIsImltZyIsImNhbnZhcyIsIndpbmRvdyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiRXJyb3IiLCJkcmF3SW1hZ2UiLCJjcmVhdGVJbWFnZSIsImNoYW5uZWxzIiwiVWludDhBcnJheSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiYnVmZmVyIiwiUmFuZ2VFcnJvciIsInJlc2l6ZUltYWdlIiwibmV3SW1hZ2UiLCJjb3B5SW1hZ2UiLCJtaW4iLCJzcmNJbWciLCJkc3RJbWciLCJzcmNQdCIsImRzdFB0Iiwic3JjRGF0YSIsImRzdERhdGEiLCJhc3NlcnQiLCJzcmNPZmZzZXQiLCJkc3RPZmZzZXQiLCJBbHBoYUltYWdlIiwic2V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0Msb0JBQW9COztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDemZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixzQkFBc0I7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDekZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLE1BQU07QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsOEJBQThCO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxvQkFBb0I7QUFDOUI7QUFDQTs7QUFFQTtBQUNBLFVBQVUsVUFBVTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLHNCQUFzQjtBQUNyRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN1NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLEtBQUs7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsbUJBQU8sQ0FBQywwRUFBb0I7O0FBRS9DO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQywrRUFBVTs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLG1CQUFtQixzQkFBc0I7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VTtBQUNOLGFBQUtGLElBQUwsQ0FBVXdDLEdBQVYsQ0FBY3hDLElBQWQ7QUFDSCxPQUZELE1BRU8sSUFBSUEsSUFBSSxZQUFZdUIsaUJBQXBCLEVBQXVDO0FBQzFDLGFBQUt2QixJQUFMLEdBQVksSUFBSXNCLFVBQUosQ0FBZXRCLElBQUksQ0FBQ3dCLE1BQXBCLENBQVo7QUFDSCxPQUZNLE1BRUE7QUFDSCxhQUFLeEIsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7QUFDSjtBQXJCTDtBQUFBO0FBQUEsNEJBdUJZO0FBQ0osYUFBTyxJQUFJQyxTQUFKLENBQWM7QUFBQ1AsYUFBSyxFQUFFLEtBQUtBLEtBQWI7QUFBb0JDLGNBQU0sRUFBRSxLQUFLQTtBQUFqQyxPQUFkLEVBQXdELElBQUkyQixVQUFKLENBQWUsS0FBS3RCLElBQXBCLENBQXhELENBQVA7QUFDSDtBQXpCTDtBQUFBO0FBQUEseUJBMkJnQjhCLE1BM0JoQixFQTJCd0JDLE1BM0J4QixFQTJCZ0NDLEtBM0JoQyxFQTJCdUNDLEtBM0J2QyxFQTJCOENqRCxJQTNCOUMsRUEyQm9EO0FBQzVDNEMsZUFBUyxDQUFDRSxNQUFELEVBQVNDLE1BQVQsRUFBaUJDLEtBQWpCLEVBQXdCQyxLQUF4QixFQUErQmpELElBQS9CLEVBQXFDLENBQXJDLENBQVQ7QUFDSDtBQTdCTDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjdjOGIyMzQyYzZiZjM1MGMxMjUxYTEyNjE1N2VjMDgucG5nXCI7IiwiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxheW91dHM6IHtcbiAgICBhbGw6IHJlcXVpcmUoJy4vbGF5b3V0cy9hbGwuanNvbicpXG4gIH0sXG4gIHN2Z0FycmF5OiByZXF1aXJlKCcuL2Rpc3Qvc3ZnaWNvbnMuanNvbicpLFxuICBzcHJpdGVzaGVldDoge1xuICAgIDE6IHJlcXVpcmUoJy4vZGlzdC9zcHJpdGVAMS5qc29uJyksXG4gICAgMjogcmVxdWlyZSgnLi9kaXN0L3Nwcml0ZUAyLmpzb24nKSxcbiAgICA0OiByZXF1aXJlKCcuL2Rpc3Qvc3ByaXRlQDQuanNvbicpXG4gIH1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogQG1vZHVsZSBoZWxwZXJzXG4gKi9cbi8qKlxuICogRWFydGggUmFkaXVzIHVzZWQgd2l0aCB0aGUgSGFydmVzaW5lIGZvcm11bGEgYW5kIGFwcHJveGltYXRlcyB1c2luZyBhIHNwaGVyaWNhbCAobm9uLWVsbGlwc29pZCkgRWFydGguXG4gKlxuICogQG1lbWJlcm9mIGhlbHBlcnNcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmV4cG9ydHMuZWFydGhSYWRpdXMgPSA2MzcxMDA4Ljg7XG4vKipcbiAqIFVuaXQgb2YgbWVhc3VyZW1lbnQgZmFjdG9ycyB1c2luZyBhIHNwaGVyaWNhbCAobm9uLWVsbGlwc29pZCkgZWFydGggcmFkaXVzLlxuICpcbiAqIEBtZW1iZXJvZiBoZWxwZXJzXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5leHBvcnRzLmZhY3RvcnMgPSB7XG4gICAgY2VudGltZXRlcnM6IGV4cG9ydHMuZWFydGhSYWRpdXMgKiAxMDAsXG4gICAgY2VudGltZXRyZXM6IGV4cG9ydHMuZWFydGhSYWRpdXMgKiAxMDAsXG4gICAgZGVncmVlczogZXhwb3J0cy5lYXJ0aFJhZGl1cyAvIDExMTMyNSxcbiAgICBmZWV0OiBleHBvcnRzLmVhcnRoUmFkaXVzICogMy4yODA4NCxcbiAgICBpbmNoZXM6IGV4cG9ydHMuZWFydGhSYWRpdXMgKiAzOS4zNzAsXG4gICAga2lsb21ldGVyczogZXhwb3J0cy5lYXJ0aFJhZGl1cyAvIDEwMDAsXG4gICAga2lsb21ldHJlczogZXhwb3J0cy5lYXJ0aFJhZGl1cyAvIDEwMDAsXG4gICAgbWV0ZXJzOiBleHBvcnRzLmVhcnRoUmFkaXVzLFxuICAgIG1ldHJlczogZXhwb3J0cy5lYXJ0aFJhZGl1cyxcbiAgICBtaWxlczogZXhwb3J0cy5lYXJ0aFJhZGl1cyAvIDE2MDkuMzQ0LFxuICAgIG1pbGxpbWV0ZXJzOiBleHBvcnRzLmVhcnRoUmFkaXVzICogMTAwMCxcbiAgICBtaWxsaW1ldHJlczogZXhwb3J0cy5lYXJ0aFJhZGl1cyAqIDEwMDAsXG4gICAgbmF1dGljYWxtaWxlczogZXhwb3J0cy5lYXJ0aFJhZGl1cyAvIDE4NTIsXG4gICAgcmFkaWFuczogMSxcbiAgICB5YXJkczogZXhwb3J0cy5lYXJ0aFJhZGl1cyAvIDEuMDkzNixcbn07XG4vKipcbiAqIFVuaXRzIG9mIG1lYXN1cmVtZW50IGZhY3RvcnMgYmFzZWQgb24gMSBtZXRlci5cbiAqXG4gKiBAbWVtYmVyb2YgaGVscGVyc1xuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy51bml0c0ZhY3RvcnMgPSB7XG4gICAgY2VudGltZXRlcnM6IDEwMCxcbiAgICBjZW50aW1ldHJlczogMTAwLFxuICAgIGRlZ3JlZXM6IDEgLyAxMTEzMjUsXG4gICAgZmVldDogMy4yODA4NCxcbiAgICBpbmNoZXM6IDM5LjM3MCxcbiAgICBraWxvbWV0ZXJzOiAxIC8gMTAwMCxcbiAgICBraWxvbWV0cmVzOiAxIC8gMTAwMCxcbiAgICBtZXRlcnM6IDEsXG4gICAgbWV0cmVzOiAxLFxuICAgIG1pbGVzOiAxIC8gMTYwOS4zNDQsXG4gICAgbWlsbGltZXRlcnM6IDEwMDAsXG4gICAgbWlsbGltZXRyZXM6IDEwMDAsXG4gICAgbmF1dGljYWxtaWxlczogMSAvIDE4NTIsXG4gICAgcmFkaWFuczogMSAvIGV4cG9ydHMuZWFydGhSYWRpdXMsXG4gICAgeWFyZHM6IDEgLyAxLjA5MzYsXG59O1xuLyoqXG4gKiBBcmVhIG9mIG1lYXN1cmVtZW50IGZhY3RvcnMgYmFzZWQgb24gMSBzcXVhcmUgbWV0ZXIuXG4gKlxuICogQG1lbWJlcm9mIGhlbHBlcnNcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmV4cG9ydHMuYXJlYUZhY3RvcnMgPSB7XG4gICAgYWNyZXM6IDAuMDAwMjQ3MTA1LFxuICAgIGNlbnRpbWV0ZXJzOiAxMDAwMCxcbiAgICBjZW50aW1ldHJlczogMTAwMDAsXG4gICAgZmVldDogMTAuNzYzOTEwNDE3LFxuICAgIGluY2hlczogMTU1MC4wMDMxMDAwMDYsXG4gICAga2lsb21ldGVyczogMC4wMDAwMDEsXG4gICAga2lsb21ldHJlczogMC4wMDAwMDEsXG4gICAgbWV0ZXJzOiAxLFxuICAgIG1ldHJlczogMSxcbiAgICBtaWxlczogMy44NmUtNyxcbiAgICBtaWxsaW1ldGVyczogMTAwMDAwMCxcbiAgICBtaWxsaW1ldHJlczogMTAwMDAwMCxcbiAgICB5YXJkczogMS4xOTU5OTAwNDYsXG59O1xuLyoqXG4gKiBXcmFwcyBhIEdlb0pTT04ge0BsaW5rIEdlb21ldHJ5fSBpbiBhIEdlb0pTT04ge0BsaW5rIEZlYXR1cmV9LlxuICpcbiAqIEBuYW1lIGZlYXR1cmVcbiAqIEBwYXJhbSB7R2VvbWV0cnl9IGdlb21ldHJ5IGlucHV0IGdlb21ldHJ5XG4gKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXM9e31dIGFuIE9iamVjdCBvZiBrZXktdmFsdWUgcGFpcnMgdG8gYWRkIGFzIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgUGFyYW1ldGVyc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3B0aW9ucy5iYm94XSBCb3VuZGluZyBCb3ggQXJyYXkgW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF0gYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvcHRpb25zLmlkXSBJZGVudGlmaWVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHJldHVybnMge0ZlYXR1cmV9IGEgR2VvSlNPTiBGZWF0dXJlXG4gKiBAZXhhbXBsZVxuICogdmFyIGdlb21ldHJ5ID0ge1xuICogICBcInR5cGVcIjogXCJQb2ludFwiLFxuICogICBcImNvb3JkaW5hdGVzXCI6IFsxMTAsIDUwXVxuICogfTtcbiAqXG4gKiB2YXIgZmVhdHVyZSA9IHR1cmYuZmVhdHVyZShnZW9tZXRyeSk7XG4gKlxuICogLy89ZmVhdHVyZVxuICovXG5mdW5jdGlvbiBmZWF0dXJlKGdlb20sIHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBmZWF0ID0geyB0eXBlOiBcIkZlYXR1cmVcIiB9O1xuICAgIGlmIChvcHRpb25zLmlkID09PSAwIHx8IG9wdGlvbnMuaWQpIHtcbiAgICAgICAgZmVhdC5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmJib3gpIHtcbiAgICAgICAgZmVhdC5iYm94ID0gb3B0aW9ucy5iYm94O1xuICAgIH1cbiAgICBmZWF0LnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9O1xuICAgIGZlYXQuZ2VvbWV0cnkgPSBnZW9tO1xuICAgIHJldHVybiBmZWF0O1xufVxuZXhwb3J0cy5mZWF0dXJlID0gZmVhdHVyZTtcbi8qKlxuICogQ3JlYXRlcyBhIEdlb0pTT04ge0BsaW5rIEdlb21ldHJ5fSBmcm9tIGEgR2VvbWV0cnkgc3RyaW5nIHR5cGUgJiBjb29yZGluYXRlcy5cbiAqIEZvciBHZW9tZXRyeUNvbGxlY3Rpb24gdHlwZSB1c2UgYGhlbHBlcnMuZ2VvbWV0cnlDb2xsZWN0aW9uYFxuICpcbiAqIEBuYW1lIGdlb21ldHJ5XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBHZW9tZXRyeSBUeXBlXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IGNvb3JkaW5hdGVzIENvb3JkaW5hdGVzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIFBhcmFtZXRlcnNcbiAqIEByZXR1cm5zIHtHZW9tZXRyeX0gYSBHZW9KU09OIEdlb21ldHJ5XG4gKiBAZXhhbXBsZVxuICogdmFyIHR5cGUgPSBcIlBvaW50XCI7XG4gKiB2YXIgY29vcmRpbmF0ZXMgPSBbMTEwLCA1MF07XG4gKiB2YXIgZ2VvbWV0cnkgPSB0dXJmLmdlb21ldHJ5KHR5cGUsIGNvb3JkaW5hdGVzKTtcbiAqIC8vID0+IGdlb21ldHJ5XG4gKi9cbmZ1bmN0aW9uIGdlb21ldHJ5KHR5cGUsIGNvb3JkaW5hdGVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcIlBvaW50XCI6IHJldHVybiBwb2ludChjb29yZGluYXRlcykuZ2VvbWV0cnk7XG4gICAgICAgIGNhc2UgXCJMaW5lU3RyaW5nXCI6IHJldHVybiBsaW5lU3RyaW5nKGNvb3JkaW5hdGVzKS5nZW9tZXRyeTtcbiAgICAgICAgY2FzZSBcIlBvbHlnb25cIjogcmV0dXJuIHBvbHlnb24oY29vcmRpbmF0ZXMpLmdlb21ldHJ5O1xuICAgICAgICBjYXNlIFwiTXVsdGlQb2ludFwiOiByZXR1cm4gbXVsdGlQb2ludChjb29yZGluYXRlcykuZ2VvbWV0cnk7XG4gICAgICAgIGNhc2UgXCJNdWx0aUxpbmVTdHJpbmdcIjogcmV0dXJuIG11bHRpTGluZVN0cmluZyhjb29yZGluYXRlcykuZ2VvbWV0cnk7XG4gICAgICAgIGNhc2UgXCJNdWx0aVBvbHlnb25cIjogcmV0dXJuIG11bHRpUG9seWdvbihjb29yZGluYXRlcykuZ2VvbWV0cnk7XG4gICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcih0eXBlICsgXCIgaXMgaW52YWxpZFwiKTtcbiAgICB9XG59XG5leHBvcnRzLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgUG9pbnR9IHtAbGluayBGZWF0dXJlfSBmcm9tIGEgUG9zaXRpb24uXG4gKlxuICogQG5hbWUgcG9pbnRcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY29vcmRpbmF0ZXMgbG9uZ2l0dWRlLCBsYXRpdHVkZSBwb3NpdGlvbiAoZWFjaCBpbiBkZWNpbWFsIGRlZ3JlZXMpXG4gKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXM9e31dIGFuIE9iamVjdCBvZiBrZXktdmFsdWUgcGFpcnMgdG8gYWRkIGFzIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgUGFyYW1ldGVyc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3B0aW9ucy5iYm94XSBCb3VuZGluZyBCb3ggQXJyYXkgW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF0gYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvcHRpb25zLmlkXSBJZGVudGlmaWVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHJldHVybnMge0ZlYXR1cmU8UG9pbnQ+fSBhIFBvaW50IGZlYXR1cmVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcG9pbnQgPSB0dXJmLnBvaW50KFstNzUuMzQzLCAzOS45ODRdKTtcbiAqXG4gKiAvLz1wb2ludFxuICovXG5mdW5jdGlvbiBwb2ludChjb29yZGluYXRlcywgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIGdlb20gPSB7XG4gICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzLFxuICAgIH07XG4gICAgcmV0dXJuIGZlYXR1cmUoZ2VvbSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBvaW50ID0gcG9pbnQ7XG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgUG9pbnR9IHtAbGluayBGZWF0dXJlQ29sbGVjdGlvbn0gZnJvbSBhbiBBcnJheSBvZiBQb2ludCBjb29yZGluYXRlcy5cbiAqXG4gKiBAbmFtZSBwb2ludHNcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGNvb3JkaW5hdGVzIGFuIGFycmF5IG9mIFBvaW50c1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBUcmFuc2xhdGUgdGhlc2UgcHJvcGVydGllcyB0byBlYWNoIEZlYXR1cmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgUGFyYW1ldGVyc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3B0aW9ucy5iYm94XSBCb3VuZGluZyBCb3ggQXJyYXkgW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF1cbiAqIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZUNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW29wdGlvbnMuaWRdIElkZW50aWZpZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlQ29sbGVjdGlvblxuICogQHJldHVybnMge0ZlYXR1cmVDb2xsZWN0aW9uPFBvaW50Pn0gUG9pbnQgRmVhdHVyZVxuICogQGV4YW1wbGVcbiAqIHZhciBwb2ludHMgPSB0dXJmLnBvaW50cyhbXG4gKiAgIFstNzUsIDM5XSxcbiAqICAgWy04MCwgNDVdLFxuICogICBbLTc4LCA1MF1cbiAqIF0pO1xuICpcbiAqIC8vPXBvaW50c1xuICovXG5mdW5jdGlvbiBwb2ludHMoY29vcmRpbmF0ZXMsIHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBmZWF0dXJlQ29sbGVjdGlvbihjb29yZGluYXRlcy5tYXAoZnVuY3Rpb24gKGNvb3Jkcykge1xuICAgICAgICByZXR1cm4gcG9pbnQoY29vcmRzLCBwcm9wZXJ0aWVzKTtcbiAgICB9KSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBvaW50cyA9IHBvaW50cztcbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBQb2x5Z29ufSB7QGxpbmsgRmVhdHVyZX0gZnJvbSBhbiBBcnJheSBvZiBMaW5lYXJSaW5ncy5cbiAqXG4gKiBAbmFtZSBwb2x5Z29uXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PEFycmF5PG51bWJlcj4+Pn0gY29vcmRpbmF0ZXMgYW4gYXJyYXkgb2YgTGluZWFyUmluZ3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3hdIEJvdW5kaW5nIEJveCBBcnJheSBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXSBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW29wdGlvbnMuaWRdIElkZW50aWZpZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcmV0dXJucyB7RmVhdHVyZTxQb2x5Z29uPn0gUG9seWdvbiBGZWF0dXJlXG4gKiBAZXhhbXBsZVxuICogdmFyIHBvbHlnb24gPSB0dXJmLnBvbHlnb24oW1tbLTUsIDUyXSwgWy00LCA1Nl0sIFstMiwgNTFdLCBbLTcsIDU0XSwgWy01LCA1Ml1dXSwgeyBuYW1lOiAncG9seTEnIH0pO1xuICpcbiAqIC8vPXBvbHlnb25cbiAqL1xuZnVuY3Rpb24gcG9seWdvbihjb29yZGluYXRlcywgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgZm9yICh2YXIgX2kgPSAwLCBjb29yZGluYXRlc18xID0gY29vcmRpbmF0ZXM7IF9pIDwgY29vcmRpbmF0ZXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHJpbmcgPSBjb29yZGluYXRlc18xW19pXTtcbiAgICAgICAgaWYgKHJpbmcubGVuZ3RoIDwgNCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRWFjaCBMaW5lYXJSaW5nIG9mIGEgUG9seWdvbiBtdXN0IGhhdmUgNCBvciBtb3JlIFBvc2l0aW9ucy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByaW5nW3JpbmcubGVuZ3RoIC0gMV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGZpcnN0IHBvaW50IG9mIFBvbHlnb24gY29udGFpbnMgdHdvIG51bWJlcnNcbiAgICAgICAgICAgIGlmIChyaW5nW3JpbmcubGVuZ3RoIC0gMV1bal0gIT09IHJpbmdbMF1bal0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaXJzdCBhbmQgbGFzdCBQb3NpdGlvbiBhcmUgbm90IGVxdWl2YWxlbnQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBnZW9tID0ge1xuICAgICAgICB0eXBlOiBcIlBvbHlnb25cIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzLFxuICAgIH07XG4gICAgcmV0dXJuIGZlYXR1cmUoZ2VvbSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBvbHlnb24gPSBwb2x5Z29uO1xuLyoqXG4gKiBDcmVhdGVzIGEge0BsaW5rIFBvbHlnb259IHtAbGluayBGZWF0dXJlQ29sbGVjdGlvbn0gZnJvbSBhbiBBcnJheSBvZiBQb2x5Z29uIGNvb3JkaW5hdGVzLlxuICpcbiAqIEBuYW1lIHBvbHlnb25zXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PEFycmF5PEFycmF5PG51bWJlcj4+Pj59IGNvb3JkaW5hdGVzIGFuIGFycmF5IG9mIFBvbHlnb24gY29vcmRpbmF0ZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3hdIEJvdW5kaW5nIEJveCBBcnJheSBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXSBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW29wdGlvbnMuaWRdIElkZW50aWZpZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlQ29sbGVjdGlvblxuICogQHJldHVybnMge0ZlYXR1cmVDb2xsZWN0aW9uPFBvbHlnb24+fSBQb2x5Z29uIEZlYXR1cmVDb2xsZWN0aW9uXG4gKiBAZXhhbXBsZVxuICogdmFyIHBvbHlnb25zID0gdHVyZi5wb2x5Z29ucyhbXG4gKiAgIFtbWy01LCA1Ml0sIFstNCwgNTZdLCBbLTIsIDUxXSwgWy03LCA1NF0sIFstNSwgNTJdXV0sXG4gKiAgIFtbWy0xNSwgNDJdLCBbLTE0LCA0Nl0sIFstMTIsIDQxXSwgWy0xNywgNDRdLCBbLTE1LCA0Ml1dXSxcbiAqIF0pO1xuICpcbiAqIC8vPXBvbHlnb25zXG4gKi9cbmZ1bmN0aW9uIHBvbHlnb25zKGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gZmVhdHVyZUNvbGxlY3Rpb24oY29vcmRpbmF0ZXMubWFwKGZ1bmN0aW9uIChjb29yZHMpIHtcbiAgICAgICAgcmV0dXJuIHBvbHlnb24oY29vcmRzLCBwcm9wZXJ0aWVzKTtcbiAgICB9KSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBvbHlnb25zID0gcG9seWdvbnM7XG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgTGluZVN0cmluZ30ge0BsaW5rIEZlYXR1cmV9IGZyb20gYW4gQXJyYXkgb2YgUG9zaXRpb25zLlxuICpcbiAqIEBuYW1lIGxpbmVTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGNvb3JkaW5hdGVzIGFuIGFycmF5IG9mIFBvc2l0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIFBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW29wdGlvbnMuYmJveF0gQm91bmRpbmcgQm94IEFycmF5IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3B0aW9ucy5pZF0gSWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEByZXR1cm5zIHtGZWF0dXJlPExpbmVTdHJpbmc+fSBMaW5lU3RyaW5nIEZlYXR1cmVcbiAqIEBleGFtcGxlXG4gKiB2YXIgbGluZXN0cmluZzEgPSB0dXJmLmxpbmVTdHJpbmcoW1stMjQsIDYzXSwgWy0yMywgNjBdLCBbLTI1LCA2NV0sIFstMjAsIDY5XV0sIHtuYW1lOiAnbGluZSAxJ30pO1xuICogdmFyIGxpbmVzdHJpbmcyID0gdHVyZi5saW5lU3RyaW5nKFtbLTE0LCA0M10sIFstMTMsIDQwXSwgWy0xNSwgNDVdLCBbLTEwLCA0OV1dLCB7bmFtZTogJ2xpbmUgMid9KTtcbiAqXG4gKiAvLz1saW5lc3RyaW5nMVxuICogLy89bGluZXN0cmluZzJcbiAqL1xuZnVuY3Rpb24gbGluZVN0cmluZyhjb29yZGluYXRlcywgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgaWYgKGNvb3JkaW5hdGVzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29vcmRpbmF0ZXMgbXVzdCBiZSBhbiBhcnJheSBvZiB0d28gb3IgbW9yZSBwb3NpdGlvbnNcIik7XG4gICAgfVxuICAgIHZhciBnZW9tID0ge1xuICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzLFxuICAgIH07XG4gICAgcmV0dXJuIGZlYXR1cmUoZ2VvbSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG59XG5leHBvcnRzLmxpbmVTdHJpbmcgPSBsaW5lU3RyaW5nO1xuLyoqXG4gKiBDcmVhdGVzIGEge0BsaW5rIExpbmVTdHJpbmd9IHtAbGluayBGZWF0dXJlQ29sbGVjdGlvbn0gZnJvbSBhbiBBcnJheSBvZiBMaW5lU3RyaW5nIGNvb3JkaW5hdGVzLlxuICpcbiAqIEBuYW1lIGxpbmVTdHJpbmdzXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PEFycmF5PG51bWJlcj4+Pn0gY29vcmRpbmF0ZXMgYW4gYXJyYXkgb2YgTGluZWFyUmluZ3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3hdIEJvdW5kaW5nIEJveCBBcnJheSBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXVxuICogYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlQ29sbGVjdGlvblxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3B0aW9ucy5pZF0gSWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVDb2xsZWN0aW9uXG4gKiBAcmV0dXJucyB7RmVhdHVyZUNvbGxlY3Rpb248TGluZVN0cmluZz59IExpbmVTdHJpbmcgRmVhdHVyZUNvbGxlY3Rpb25cbiAqIEBleGFtcGxlXG4gKiB2YXIgbGluZXN0cmluZ3MgPSB0dXJmLmxpbmVTdHJpbmdzKFtcbiAqICAgW1stMjQsIDYzXSwgWy0yMywgNjBdLCBbLTI1LCA2NV0sIFstMjAsIDY5XV0sXG4gKiAgIFtbLTE0LCA0M10sIFstMTMsIDQwXSwgWy0xNSwgNDVdLCBbLTEwLCA0OV1dXG4gKiBdKTtcbiAqXG4gKiAvLz1saW5lc3RyaW5nc1xuICovXG5mdW5jdGlvbiBsaW5lU3RyaW5ncyhjb29yZGluYXRlcywgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIGZlYXR1cmVDb2xsZWN0aW9uKGNvb3JkaW5hdGVzLm1hcChmdW5jdGlvbiAoY29vcmRzKSB7XG4gICAgICAgIHJldHVybiBsaW5lU3RyaW5nKGNvb3JkcywgcHJvcGVydGllcyk7XG4gICAgfSksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5saW5lU3RyaW5ncyA9IGxpbmVTdHJpbmdzO1xuLyoqXG4gKiBUYWtlcyBvbmUgb3IgbW9yZSB7QGxpbmsgRmVhdHVyZXxGZWF0dXJlc30gYW5kIGNyZWF0ZXMgYSB7QGxpbmsgRmVhdHVyZUNvbGxlY3Rpb259LlxuICpcbiAqIEBuYW1lIGZlYXR1cmVDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0ZlYXR1cmVbXX0gZmVhdHVyZXMgaW5wdXQgZmVhdHVyZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgUGFyYW1ldGVyc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3B0aW9ucy5iYm94XSBCb3VuZGluZyBCb3ggQXJyYXkgW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF0gYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvcHRpb25zLmlkXSBJZGVudGlmaWVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHJldHVybnMge0ZlYXR1cmVDb2xsZWN0aW9ufSBGZWF0dXJlQ29sbGVjdGlvbiBvZiBGZWF0dXJlc1xuICogQGV4YW1wbGVcbiAqIHZhciBsb2NhdGlvbkEgPSB0dXJmLnBvaW50KFstNzUuMzQzLCAzOS45ODRdLCB7bmFtZTogJ0xvY2F0aW9uIEEnfSk7XG4gKiB2YXIgbG9jYXRpb25CID0gdHVyZi5wb2ludChbLTc1LjgzMywgMzkuMjg0XSwge25hbWU6ICdMb2NhdGlvbiBCJ30pO1xuICogdmFyIGxvY2F0aW9uQyA9IHR1cmYucG9pbnQoWy03NS41MzQsIDM5LjEyM10sIHtuYW1lOiAnTG9jYXRpb24gQyd9KTtcbiAqXG4gKiB2YXIgY29sbGVjdGlvbiA9IHR1cmYuZmVhdHVyZUNvbGxlY3Rpb24oW1xuICogICBsb2NhdGlvbkEsXG4gKiAgIGxvY2F0aW9uQixcbiAqICAgbG9jYXRpb25DXG4gKiBdKTtcbiAqXG4gKiAvLz1jb2xsZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGZlYXR1cmVDb2xsZWN0aW9uKGZlYXR1cmVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgZmMgPSB7IHR5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIiB9O1xuICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICAgIGZjLmlkID0gb3B0aW9ucy5pZDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYmJveCkge1xuICAgICAgICBmYy5iYm94ID0gb3B0aW9ucy5iYm94O1xuICAgIH1cbiAgICBmYy5mZWF0dXJlcyA9IGZlYXR1cmVzO1xuICAgIHJldHVybiBmYztcbn1cbmV4cG9ydHMuZmVhdHVyZUNvbGxlY3Rpb24gPSBmZWF0dXJlQ29sbGVjdGlvbjtcbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBGZWF0dXJlPE11bHRpTGluZVN0cmluZz59IGJhc2VkIG9uIGFcbiAqIGNvb3JkaW5hdGUgYXJyYXkuIFByb3BlcnRpZXMgY2FuIGJlIGFkZGVkIG9wdGlvbmFsbHkuXG4gKlxuICogQG5hbWUgbXVsdGlMaW5lU3RyaW5nXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PEFycmF5PG51bWJlcj4+Pn0gY29vcmRpbmF0ZXMgYW4gYXJyYXkgb2YgTGluZVN0cmluZ3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3hdIEJvdW5kaW5nIEJveCBBcnJheSBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXSBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW29wdGlvbnMuaWRdIElkZW50aWZpZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcmV0dXJucyB7RmVhdHVyZTxNdWx0aUxpbmVTdHJpbmc+fSBhIE11bHRpTGluZVN0cmluZyBmZWF0dXJlXG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgbm8gY29vcmRpbmF0ZXMgYXJlIHBhc3NlZFxuICogQGV4YW1wbGVcbiAqIHZhciBtdWx0aUxpbmUgPSB0dXJmLm11bHRpTGluZVN0cmluZyhbW1swLDBdLFsxMCwxMF1dXSk7XG4gKlxuICogLy89bXVsdGlMaW5lXG4gKi9cbmZ1bmN0aW9uIG11bHRpTGluZVN0cmluZyhjb29yZGluYXRlcywgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIGdlb20gPSB7XG4gICAgICAgIHR5cGU6IFwiTXVsdGlMaW5lU3RyaW5nXCIsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBjb29yZGluYXRlcyxcbiAgICB9O1xuICAgIHJldHVybiBmZWF0dXJlKGdlb20sIHByb3BlcnRpZXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tdWx0aUxpbmVTdHJpbmcgPSBtdWx0aUxpbmVTdHJpbmc7XG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgRmVhdHVyZTxNdWx0aVBvaW50Pn0gYmFzZWQgb24gYVxuICogY29vcmRpbmF0ZSBhcnJheS4gUHJvcGVydGllcyBjYW4gYmUgYWRkZWQgb3B0aW9uYWxseS5cbiAqXG4gKiBAbmFtZSBtdWx0aVBvaW50XG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBjb29yZGluYXRlcyBhbiBhcnJheSBvZiBQb3NpdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3hdIEJvdW5kaW5nIEJveCBBcnJheSBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXSBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW29wdGlvbnMuaWRdIElkZW50aWZpZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcmV0dXJucyB7RmVhdHVyZTxNdWx0aVBvaW50Pn0gYSBNdWx0aVBvaW50IGZlYXR1cmVcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiBubyBjb29yZGluYXRlcyBhcmUgcGFzc2VkXG4gKiBAZXhhbXBsZVxuICogdmFyIG11bHRpUHQgPSB0dXJmLm11bHRpUG9pbnQoW1swLDBdLFsxMCwxMF1dKTtcbiAqXG4gKiAvLz1tdWx0aVB0XG4gKi9cbmZ1bmN0aW9uIG11bHRpUG9pbnQoY29vcmRpbmF0ZXMsIHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBnZW9tID0ge1xuICAgICAgICB0eXBlOiBcIk11bHRpUG9pbnRcIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzLFxuICAgIH07XG4gICAgcmV0dXJuIGZlYXR1cmUoZ2VvbSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm11bHRpUG9pbnQgPSBtdWx0aVBvaW50O1xuLyoqXG4gKiBDcmVhdGVzIGEge0BsaW5rIEZlYXR1cmU8TXVsdGlQb2x5Z29uPn0gYmFzZWQgb24gYVxuICogY29vcmRpbmF0ZSBhcnJheS4gUHJvcGVydGllcyBjYW4gYmUgYWRkZWQgb3B0aW9uYWxseS5cbiAqXG4gKiBAbmFtZSBtdWx0aVBvbHlnb25cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8QXJyYXk8QXJyYXk8bnVtYmVyPj4+Pn0gY29vcmRpbmF0ZXMgYW4gYXJyYXkgb2YgUG9seWdvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3hdIEJvdW5kaW5nIEJveCBBcnJheSBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXSBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW29wdGlvbnMuaWRdIElkZW50aWZpZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcmV0dXJucyB7RmVhdHVyZTxNdWx0aVBvbHlnb24+fSBhIG11bHRpcG9seWdvbiBmZWF0dXJlXG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgbm8gY29vcmRpbmF0ZXMgYXJlIHBhc3NlZFxuICogQGV4YW1wbGVcbiAqIHZhciBtdWx0aVBvbHkgPSB0dXJmLm11bHRpUG9seWdvbihbW1tbMCwwXSxbMCwxMF0sWzEwLDEwXSxbMTAsMF0sWzAsMF1dXV0pO1xuICpcbiAqIC8vPW11bHRpUG9seVxuICpcbiAqL1xuZnVuY3Rpb24gbXVsdGlQb2x5Z29uKGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgZ2VvbSA9IHtcbiAgICAgICAgdHlwZTogXCJNdWx0aVBvbHlnb25cIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzLFxuICAgIH07XG4gICAgcmV0dXJuIGZlYXR1cmUoZ2VvbSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm11bHRpUG9seWdvbiA9IG11bHRpUG9seWdvbjtcbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBGZWF0dXJlPEdlb21ldHJ5Q29sbGVjdGlvbj59IGJhc2VkIG9uIGFcbiAqIGNvb3JkaW5hdGUgYXJyYXkuIFByb3BlcnRpZXMgY2FuIGJlIGFkZGVkIG9wdGlvbmFsbHkuXG4gKlxuICogQG5hbWUgZ2VvbWV0cnlDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5PEdlb21ldHJ5Pn0gZ2VvbWV0cmllcyBhbiBhcnJheSBvZiBHZW9KU09OIEdlb21ldHJpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3hdIEJvdW5kaW5nIEJveCBBcnJheSBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXSBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW29wdGlvbnMuaWRdIElkZW50aWZpZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcmV0dXJucyB7RmVhdHVyZTxHZW9tZXRyeUNvbGxlY3Rpb24+fSBhIEdlb0pTT04gR2VvbWV0cnlDb2xsZWN0aW9uIEZlYXR1cmVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcHQgPSB0dXJmLmdlb21ldHJ5KFwiUG9pbnRcIiwgWzEwMCwgMF0pO1xuICogdmFyIGxpbmUgPSB0dXJmLmdlb21ldHJ5KFwiTGluZVN0cmluZ1wiLCBbWzEwMSwgMF0sIFsxMDIsIDFdXSk7XG4gKiB2YXIgY29sbGVjdGlvbiA9IHR1cmYuZ2VvbWV0cnlDb2xsZWN0aW9uKFtwdCwgbGluZV0pO1xuICpcbiAqIC8vID0+IGNvbGxlY3Rpb25cbiAqL1xuZnVuY3Rpb24gZ2VvbWV0cnlDb2xsZWN0aW9uKGdlb21ldHJpZXMsIHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBnZW9tID0ge1xuICAgICAgICB0eXBlOiBcIkdlb21ldHJ5Q29sbGVjdGlvblwiLFxuICAgICAgICBnZW9tZXRyaWVzOiBnZW9tZXRyaWVzLFxuICAgIH07XG4gICAgcmV0dXJuIGZlYXR1cmUoZ2VvbSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG59XG5leHBvcnRzLmdlb21ldHJ5Q29sbGVjdGlvbiA9IGdlb21ldHJ5Q29sbGVjdGlvbjtcbi8qKlxuICogUm91bmQgbnVtYmVyIHRvIHByZWNpc2lvblxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW0gTnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gW3ByZWNpc2lvbj0wXSBQcmVjaXNpb25cbiAqIEByZXR1cm5zIHtudW1iZXJ9IHJvdW5kZWQgbnVtYmVyXG4gKiBAZXhhbXBsZVxuICogdHVyZi5yb3VuZCgxMjAuNDMyMSlcbiAqIC8vPTEyMFxuICpcbiAqIHR1cmYucm91bmQoMTIwLjQzMjEsIDIpXG4gKiAvLz0xMjAuNDNcbiAqL1xuZnVuY3Rpb24gcm91bmQobnVtLCBwcmVjaXNpb24pIHtcbiAgICBpZiAocHJlY2lzaW9uID09PSB2b2lkIDApIHsgcHJlY2lzaW9uID0gMDsgfVxuICAgIGlmIChwcmVjaXNpb24gJiYgIShwcmVjaXNpb24gPj0gMCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJlY2lzaW9uIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIik7XG4gICAgfVxuICAgIHZhciBtdWx0aXBsaWVyID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbiB8fCAwKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBtdWx0aXBsaWVyKSAvIG11bHRpcGxpZXI7XG59XG5leHBvcnRzLnJvdW5kID0gcm91bmQ7XG4vKipcbiAqIENvbnZlcnQgYSBkaXN0YW5jZSBtZWFzdXJlbWVudCAoYXNzdW1pbmcgYSBzcGhlcmljYWwgRWFydGgpIGZyb20gcmFkaWFucyB0byBhIG1vcmUgZnJpZW5kbHkgdW5pdC5cbiAqIFZhbGlkIHVuaXRzOiBtaWxlcywgbmF1dGljYWxtaWxlcywgaW5jaGVzLCB5YXJkcywgbWV0ZXJzLCBtZXRyZXMsIGtpbG9tZXRlcnMsIGNlbnRpbWV0ZXJzLCBmZWV0XG4gKlxuICogQG5hbWUgcmFkaWFuc1RvTGVuZ3RoXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFucyBpbiByYWRpYW5zIGFjcm9zcyB0aGUgc3BoZXJlXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VuaXRzPVwia2lsb21ldGVyc1wiXSBjYW4gYmUgZGVncmVlcywgcmFkaWFucywgbWlsZXMsIG9yIGtpbG9tZXRlcnMgaW5jaGVzLCB5YXJkcywgbWV0cmVzLFxuICogbWV0ZXJzLCBraWxvbWV0cmVzLCBraWxvbWV0ZXJzLlxuICogQHJldHVybnMge251bWJlcn0gZGlzdGFuY2VcbiAqL1xuZnVuY3Rpb24gcmFkaWFuc1RvTGVuZ3RoKHJhZGlhbnMsIHVuaXRzKSB7XG4gICAgaWYgKHVuaXRzID09PSB2b2lkIDApIHsgdW5pdHMgPSBcImtpbG9tZXRlcnNcIjsgfVxuICAgIHZhciBmYWN0b3IgPSBleHBvcnRzLmZhY3RvcnNbdW5pdHNdO1xuICAgIGlmICghZmFjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcih1bml0cyArIFwiIHVuaXRzIGlzIGludmFsaWRcIik7XG4gICAgfVxuICAgIHJldHVybiByYWRpYW5zICogZmFjdG9yO1xufVxuZXhwb3J0cy5yYWRpYW5zVG9MZW5ndGggPSByYWRpYW5zVG9MZW5ndGg7XG4vKipcbiAqIENvbnZlcnQgYSBkaXN0YW5jZSBtZWFzdXJlbWVudCAoYXNzdW1pbmcgYSBzcGhlcmljYWwgRWFydGgpIGZyb20gYSByZWFsLXdvcmxkIHVuaXQgaW50byByYWRpYW5zXG4gKiBWYWxpZCB1bml0czogbWlsZXMsIG5hdXRpY2FsbWlsZXMsIGluY2hlcywgeWFyZHMsIG1ldGVycywgbWV0cmVzLCBraWxvbWV0ZXJzLCBjZW50aW1ldGVycywgZmVldFxuICpcbiAqIEBuYW1lIGxlbmd0aFRvUmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGRpc3RhbmNlIGluIHJlYWwgdW5pdHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdW5pdHM9XCJraWxvbWV0ZXJzXCJdIGNhbiBiZSBkZWdyZWVzLCByYWRpYW5zLCBtaWxlcywgb3Iga2lsb21ldGVycyBpbmNoZXMsIHlhcmRzLCBtZXRyZXMsXG4gKiBtZXRlcnMsIGtpbG9tZXRyZXMsIGtpbG9tZXRlcnMuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSByYWRpYW5zXG4gKi9cbmZ1bmN0aW9uIGxlbmd0aFRvUmFkaWFucyhkaXN0YW5jZSwgdW5pdHMpIHtcbiAgICBpZiAodW5pdHMgPT09IHZvaWQgMCkgeyB1bml0cyA9IFwia2lsb21ldGVyc1wiOyB9XG4gICAgdmFyIGZhY3RvciA9IGV4cG9ydHMuZmFjdG9yc1t1bml0c107XG4gICAgaWYgKCFmYWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVuaXRzICsgXCIgdW5pdHMgaXMgaW52YWxpZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3RhbmNlIC8gZmFjdG9yO1xufVxuZXhwb3J0cy5sZW5ndGhUb1JhZGlhbnMgPSBsZW5ndGhUb1JhZGlhbnM7XG4vKipcbiAqIENvbnZlcnQgYSBkaXN0YW5jZSBtZWFzdXJlbWVudCAoYXNzdW1pbmcgYSBzcGhlcmljYWwgRWFydGgpIGZyb20gYSByZWFsLXdvcmxkIHVuaXQgaW50byBkZWdyZWVzXG4gKiBWYWxpZCB1bml0czogbWlsZXMsIG5hdXRpY2FsbWlsZXMsIGluY2hlcywgeWFyZHMsIG1ldGVycywgbWV0cmVzLCBjZW50aW1ldGVycywga2lsb21ldHJlcywgZmVldFxuICpcbiAqIEBuYW1lIGxlbmd0aFRvRGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IGRpc3RhbmNlIGluIHJlYWwgdW5pdHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdW5pdHM9XCJraWxvbWV0ZXJzXCJdIGNhbiBiZSBkZWdyZWVzLCByYWRpYW5zLCBtaWxlcywgb3Iga2lsb21ldGVycyBpbmNoZXMsIHlhcmRzLCBtZXRyZXMsXG4gKiBtZXRlcnMsIGtpbG9tZXRyZXMsIGtpbG9tZXRlcnMuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBkZWdyZWVzXG4gKi9cbmZ1bmN0aW9uIGxlbmd0aFRvRGVncmVlcyhkaXN0YW5jZSwgdW5pdHMpIHtcbiAgICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhsZW5ndGhUb1JhZGlhbnMoZGlzdGFuY2UsIHVuaXRzKSk7XG59XG5leHBvcnRzLmxlbmd0aFRvRGVncmVlcyA9IGxlbmd0aFRvRGVncmVlcztcbi8qKlxuICogQ29udmVydHMgYW55IGJlYXJpbmcgYW5nbGUgZnJvbSB0aGUgbm9ydGggbGluZSBkaXJlY3Rpb24gKHBvc2l0aXZlIGNsb2Nrd2lzZSlcbiAqIGFuZCByZXR1cm5zIGFuIGFuZ2xlIGJldHdlZW4gMC0zNjAgZGVncmVlcyAocG9zaXRpdmUgY2xvY2t3aXNlKSwgMCBiZWluZyB0aGUgbm9ydGggbGluZVxuICpcbiAqIEBuYW1lIGJlYXJpbmdUb0F6aW11dGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWFyaW5nIGFuZ2xlLCBiZXR3ZWVuIC0xODAgYW5kICsxODAgZGVncmVlc1xuICogQHJldHVybnMge251bWJlcn0gYW5nbGUgYmV0d2VlbiAwIGFuZCAzNjAgZGVncmVlc1xuICovXG5mdW5jdGlvbiBiZWFyaW5nVG9BemltdXRoKGJlYXJpbmcpIHtcbiAgICB2YXIgYW5nbGUgPSBiZWFyaW5nICUgMzYwO1xuICAgIGlmIChhbmdsZSA8IDApIHtcbiAgICAgICAgYW5nbGUgKz0gMzYwO1xuICAgIH1cbiAgICByZXR1cm4gYW5nbGU7XG59XG5leHBvcnRzLmJlYXJpbmdUb0F6aW11dGggPSBiZWFyaW5nVG9BemltdXRoO1xuLyoqXG4gKiBDb252ZXJ0cyBhbiBhbmdsZSBpbiByYWRpYW5zIHRvIGRlZ3JlZXNcbiAqXG4gKiBAbmFtZSByYWRpYW5zVG9EZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFucyBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBkZWdyZWVzIGJldHdlZW4gMCBhbmQgMzYwIGRlZ3JlZXNcbiAqL1xuZnVuY3Rpb24gcmFkaWFuc1RvRGVncmVlcyhyYWRpYW5zKSB7XG4gICAgdmFyIGRlZ3JlZXMgPSByYWRpYW5zICUgKDIgKiBNYXRoLlBJKTtcbiAgICByZXR1cm4gZGVncmVlcyAqIDE4MCAvIE1hdGguUEk7XG59XG5leHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSByYWRpYW5zVG9EZWdyZWVzO1xuLyoqXG4gKiBDb252ZXJ0cyBhbiBhbmdsZSBpbiBkZWdyZWVzIHRvIHJhZGlhbnNcbiAqXG4gKiBAbmFtZSBkZWdyZWVzVG9SYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlcyBhbmdsZSBiZXR3ZWVuIDAgYW5kIDM2MCBkZWdyZWVzXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBhbmdsZSBpbiByYWRpYW5zXG4gKi9cbmZ1bmN0aW9uIGRlZ3JlZXNUb1JhZGlhbnMoZGVncmVlcykge1xuICAgIHZhciByYWRpYW5zID0gZGVncmVlcyAlIDM2MDtcbiAgICByZXR1cm4gcmFkaWFucyAqIE1hdGguUEkgLyAxODA7XG59XG5leHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBkZWdyZWVzVG9SYWRpYW5zO1xuLyoqXG4gKiBDb252ZXJ0cyBhIGxlbmd0aCB0byB0aGUgcmVxdWVzdGVkIHVuaXQuXG4gKiBWYWxpZCB1bml0czogbWlsZXMsIG5hdXRpY2FsbWlsZXMsIGluY2hlcywgeWFyZHMsIG1ldGVycywgbWV0cmVzLCBraWxvbWV0ZXJzLCBjZW50aW1ldGVycywgZmVldFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggdG8gYmUgY29udmVydGVkXG4gKiBAcGFyYW0ge1VuaXRzfSBbb3JpZ2luYWxVbml0PVwia2lsb21ldGVyc1wiXSBvZiB0aGUgbGVuZ3RoXG4gKiBAcGFyYW0ge1VuaXRzfSBbZmluYWxVbml0PVwia2lsb21ldGVyc1wiXSByZXR1cm5lZCB1bml0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgY29udmVydGVkIGxlbmd0aFxuICovXG5mdW5jdGlvbiBjb252ZXJ0TGVuZ3RoKGxlbmd0aCwgb3JpZ2luYWxVbml0LCBmaW5hbFVuaXQpIHtcbiAgICBpZiAob3JpZ2luYWxVbml0ID09PSB2b2lkIDApIHsgb3JpZ2luYWxVbml0ID0gXCJraWxvbWV0ZXJzXCI7IH1cbiAgICBpZiAoZmluYWxVbml0ID09PSB2b2lkIDApIHsgZmluYWxVbml0ID0gXCJraWxvbWV0ZXJzXCI7IH1cbiAgICBpZiAoIShsZW5ndGggPj0gMCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibGVuZ3RoIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIik7XG4gICAgfVxuICAgIHJldHVybiByYWRpYW5zVG9MZW5ndGgobGVuZ3RoVG9SYWRpYW5zKGxlbmd0aCwgb3JpZ2luYWxVbml0KSwgZmluYWxVbml0KTtcbn1cbmV4cG9ydHMuY29udmVydExlbmd0aCA9IGNvbnZlcnRMZW5ndGg7XG4vKipcbiAqIENvbnZlcnRzIGEgYXJlYSB0byB0aGUgcmVxdWVzdGVkIHVuaXQuXG4gKiBWYWxpZCB1bml0czoga2lsb21ldGVycywga2lsb21ldHJlcywgbWV0ZXJzLCBtZXRyZXMsIGNlbnRpbWV0cmVzLCBtaWxsaW1ldGVycywgYWNyZXMsIG1pbGVzLCB5YXJkcywgZmVldCwgaW5jaGVzXG4gKiBAcGFyYW0ge251bWJlcn0gYXJlYSB0byBiZSBjb252ZXJ0ZWRcbiAqIEBwYXJhbSB7VW5pdHN9IFtvcmlnaW5hbFVuaXQ9XCJtZXRlcnNcIl0gb2YgdGhlIGRpc3RhbmNlXG4gKiBAcGFyYW0ge1VuaXRzfSBbZmluYWxVbml0PVwia2lsb21ldGVyc1wiXSByZXR1cm5lZCB1bml0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgY29udmVydGVkIGRpc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRBcmVhKGFyZWEsIG9yaWdpbmFsVW5pdCwgZmluYWxVbml0KSB7XG4gICAgaWYgKG9yaWdpbmFsVW5pdCA9PT0gdm9pZCAwKSB7IG9yaWdpbmFsVW5pdCA9IFwibWV0ZXJzXCI7IH1cbiAgICBpZiAoZmluYWxVbml0ID09PSB2b2lkIDApIHsgZmluYWxVbml0ID0gXCJraWxvbWV0ZXJzXCI7IH1cbiAgICBpZiAoIShhcmVhID49IDApKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFyZWEgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcbiAgICB9XG4gICAgdmFyIHN0YXJ0RmFjdG9yID0gZXhwb3J0cy5hcmVhRmFjdG9yc1tvcmlnaW5hbFVuaXRdO1xuICAgIGlmICghc3RhcnRGYWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBvcmlnaW5hbCB1bml0c1wiKTtcbiAgICB9XG4gICAgdmFyIGZpbmFsRmFjdG9yID0gZXhwb3J0cy5hcmVhRmFjdG9yc1tmaW5hbFVuaXRdO1xuICAgIGlmICghZmluYWxGYWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBmaW5hbCB1bml0c1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIChhcmVhIC8gc3RhcnRGYWN0b3IpICogZmluYWxGYWN0b3I7XG59XG5leHBvcnRzLmNvbnZlcnRBcmVhID0gY29udmVydEFyZWE7XG4vKipcbiAqIGlzTnVtYmVyXG4gKlxuICogQHBhcmFtIHsqfSBudW0gTnVtYmVyIHRvIHZhbGlkYXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZS9mYWxzZVxuICogQGV4YW1wbGVcbiAqIHR1cmYuaXNOdW1iZXIoMTIzKVxuICogLy89dHJ1ZVxuICogdHVyZi5pc051bWJlcignZm9vJylcbiAqIC8vPWZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKG51bSkge1xuICAgIHJldHVybiAhaXNOYU4obnVtKSAmJiBudW0gIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkobnVtKSAmJiAhL15cXHMqJC8udGVzdChudW0pO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuLyoqXG4gKiBpc09iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gaW5wdXQgdmFyaWFibGUgdG8gdmFsaWRhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlL2ZhbHNlXG4gKiBAZXhhbXBsZVxuICogdHVyZi5pc09iamVjdCh7ZWxldmF0aW9uOiAxMH0pXG4gKiAvLz10cnVlXG4gKiB0dXJmLmlzT2JqZWN0KCdmb28nKVxuICogLy89ZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoaW5wdXQpIHtcbiAgICByZXR1cm4gKCEhaW5wdXQpICYmIChpbnB1dC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KTtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcbi8qKlxuICogVmFsaWRhdGUgQkJveFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGJib3ggQkJveCB0byB2YWxpZGF0ZVxuICogQHJldHVybnMge3ZvaWR9XG4gKiBAdGhyb3dzIEVycm9yIGlmIEJCb3ggaXMgbm90IHZhbGlkXG4gKiBAZXhhbXBsZVxuICogdmFsaWRhdGVCQm94KFstMTgwLCAtNDAsIDExMCwgNTBdKVxuICogLy89T0tcbiAqIHZhbGlkYXRlQkJveChbLTE4MCwgLTQwXSlcbiAqIC8vPUVycm9yXG4gKiB2YWxpZGF0ZUJCb3goJ0ZvbycpXG4gKiAvLz1FcnJvclxuICogdmFsaWRhdGVCQm94KDUpXG4gKiAvLz1FcnJvclxuICogdmFsaWRhdGVCQm94KG51bGwpXG4gKiAvLz1FcnJvclxuICogdmFsaWRhdGVCQm94KHVuZGVmaW5lZClcbiAqIC8vPUVycm9yXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlQkJveChiYm94KSB7XG4gICAgaWYgKCFiYm94KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImJib3ggaXMgcmVxdWlyZWRcIik7XG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShiYm94KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJiYm94IG11c3QgYmUgYW4gQXJyYXlcIik7XG4gICAgfVxuICAgIGlmIChiYm94Lmxlbmd0aCAhPT0gNCAmJiBiYm94Lmxlbmd0aCAhPT0gNikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJiYm94IG11c3QgYmUgYW4gQXJyYXkgb2YgNCBvciA2IG51bWJlcnNcIik7XG4gICAgfVxuICAgIGJib3guZm9yRWFjaChmdW5jdGlvbiAobnVtKSB7XG4gICAgICAgIGlmICghaXNOdW1iZXIobnVtKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmJveCBtdXN0IG9ubHkgY29udGFpbiBudW1iZXJzXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnZhbGlkYXRlQkJveCA9IHZhbGlkYXRlQkJveDtcbi8qKlxuICogVmFsaWRhdGUgSWRcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBJZCB0byB2YWxpZGF0ZVxuICogQHJldHVybnMge3ZvaWR9XG4gKiBAdGhyb3dzIEVycm9yIGlmIElkIGlzIG5vdCB2YWxpZFxuICogQGV4YW1wbGVcbiAqIHZhbGlkYXRlSWQoWy0xODAsIC00MCwgMTEwLCA1MF0pXG4gKiAvLz1FcnJvclxuICogdmFsaWRhdGVJZChbLTE4MCwgLTQwXSlcbiAqIC8vPUVycm9yXG4gKiB2YWxpZGF0ZUlkKCdGb28nKVxuICogLy89T0tcbiAqIHZhbGlkYXRlSWQoNSlcbiAqIC8vPU9LXG4gKiB2YWxpZGF0ZUlkKG51bGwpXG4gKiAvLz1FcnJvclxuICogdmFsaWRhdGVJZCh1bmRlZmluZWQpXG4gKiAvLz1FcnJvclxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUlkKGlkKSB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpZCBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKFtcInN0cmluZ1wiLCBcIm51bWJlclwiXS5pbmRleE9mKHR5cGVvZiBpZCkgPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImlkIG11c3QgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmdcIik7XG4gICAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZUlkID0gdmFsaWRhdGVJZDtcbi8vIERlcHJlY2F0ZWQgbWV0aG9kc1xuZnVuY3Rpb24gcmFkaWFuczJkZWdyZWVzKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm1ldGhvZCBoYXMgYmVlbiByZW5hbWVkIHRvIGByYWRpYW5zVG9EZWdyZWVzYFwiKTtcbn1cbmV4cG9ydHMucmFkaWFuczJkZWdyZWVzID0gcmFkaWFuczJkZWdyZWVzO1xuZnVuY3Rpb24gZGVncmVlczJyYWRpYW5zKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm1ldGhvZCBoYXMgYmVlbiByZW5hbWVkIHRvIGBkZWdyZWVzVG9SYWRpYW5zYFwiKTtcbn1cbmV4cG9ydHMuZGVncmVlczJyYWRpYW5zID0gZGVncmVlczJyYWRpYW5zO1xuZnVuY3Rpb24gZGlzdGFuY2VUb0RlZ3JlZXMoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibWV0aG9kIGhhcyBiZWVuIHJlbmFtZWQgdG8gYGxlbmd0aFRvRGVncmVlc2BcIik7XG59XG5leHBvcnRzLmRpc3RhbmNlVG9EZWdyZWVzID0gZGlzdGFuY2VUb0RlZ3JlZXM7XG5mdW5jdGlvbiBkaXN0YW5jZVRvUmFkaWFucygpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJtZXRob2QgaGFzIGJlZW4gcmVuYW1lZCB0byBgbGVuZ3RoVG9SYWRpYW5zYFwiKTtcbn1cbmV4cG9ydHMuZGlzdGFuY2VUb1JhZGlhbnMgPSBkaXN0YW5jZVRvUmFkaWFucztcbmZ1bmN0aW9uIHJhZGlhbnNUb0Rpc3RhbmNlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm1ldGhvZCBoYXMgYmVlbiByZW5hbWVkIHRvIGByYWRpYW5zVG9MZW5ndGhgXCIpO1xufVxuZXhwb3J0cy5yYWRpYW5zVG9EaXN0YW5jZSA9IHJhZGlhbnNUb0Rpc3RhbmNlO1xuZnVuY3Rpb24gYmVhcmluZ1RvQW5nbGUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibWV0aG9kIGhhcyBiZWVuIHJlbmFtZWQgdG8gYGJlYXJpbmdUb0F6aW11dGhgXCIpO1xufVxuZXhwb3J0cy5iZWFyaW5nVG9BbmdsZSA9IGJlYXJpbmdUb0FuZ2xlO1xuZnVuY3Rpb24gY29udmVydERpc3RhbmNlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm1ldGhvZCBoYXMgYmVlbiByZW5hbWVkIHRvIGBjb252ZXJ0TGVuZ3RoYFwiKTtcbn1cbmV4cG9ydHMuY29udmVydERpc3RhbmNlID0gY29udmVydERpc3RhbmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgaGVscGVycyA9IHJlcXVpcmUoJ0B0dXJmL2hlbHBlcnMnKTtcblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgY29vcmRFYWNoXG4gKlxuICogQGNhbGxiYWNrIGNvb3JkRWFjaENhbGxiYWNrXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGN1cnJlbnRDb29yZCBUaGUgY3VycmVudCBjb29yZGluYXRlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb29yZEluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBjb29yZGluYXRlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IG11bHRpRmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBNdWx0aS1GZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBnZW9tZXRyeUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBHZW9tZXRyeSBiZWluZyBwcm9jZXNzZWQuXG4gKi9cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgY29vcmRpbmF0ZXMgaW4gYW55IEdlb0pTT04gb2JqZWN0LCBzaW1pbGFyIHRvIEFycmF5LmZvckVhY2goKVxuICpcbiAqIEBuYW1lIGNvb3JkRWFjaFxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIGFueSBHZW9KU09OIG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAoY3VycmVudENvb3JkLCBjb29yZEluZGV4LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4KVxuICogQHBhcmFtIHtib29sZWFufSBbZXhjbHVkZVdyYXBDb29yZD1mYWxzZV0gd2hldGhlciBvciBub3QgdG8gaW5jbHVkZSB0aGUgZmluYWwgY29vcmRpbmF0ZSBvZiBMaW5lYXJSaW5ncyB0aGF0IHdyYXBzIHRoZSByaW5nIGluIGl0cyBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBleGFtcGxlXG4gKiB2YXIgZmVhdHVyZXMgPSB0dXJmLmZlYXR1cmVDb2xsZWN0aW9uKFtcbiAqICAgdHVyZi5wb2ludChbMjYsIDM3XSwge1wiZm9vXCI6IFwiYmFyXCJ9KSxcbiAqICAgdHVyZi5wb2ludChbMzYsIDUzXSwge1wiaGVsbG9cIjogXCJ3b3JsZFwifSlcbiAqIF0pO1xuICpcbiAqIHR1cmYuY29vcmRFYWNoKGZlYXR1cmVzLCBmdW5jdGlvbiAoY3VycmVudENvb3JkLCBjb29yZEluZGV4LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4KSB7XG4gKiAgIC8vPWN1cnJlbnRDb29yZFxuICogICAvLz1jb29yZEluZGV4XG4gKiAgIC8vPWZlYXR1cmVJbmRleFxuICogICAvLz1tdWx0aUZlYXR1cmVJbmRleFxuICogICAvLz1nZW9tZXRyeUluZGV4XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gY29vcmRFYWNoKGdlb2pzb24sIGNhbGxiYWNrLCBleGNsdWRlV3JhcENvb3JkKSB7XG4gICAgLy8gSGFuZGxlcyBudWxsIEdlb21ldHJ5IC0tIFNraXBzIHRoaXMgR2VvSlNPTlxuICAgIGlmIChnZW9qc29uID09PSBudWxsKSByZXR1cm47XG4gICAgdmFyIGosIGssIGwsIGdlb21ldHJ5LCBzdG9wRywgY29vcmRzLFxuICAgICAgICBnZW9tZXRyeU1heWJlQ29sbGVjdGlvbixcbiAgICAgICAgd3JhcFNocmluayA9IDAsXG4gICAgICAgIGNvb3JkSW5kZXggPSAwLFxuICAgICAgICBpc0dlb21ldHJ5Q29sbGVjdGlvbixcbiAgICAgICAgdHlwZSA9IGdlb2pzb24udHlwZSxcbiAgICAgICAgaXNGZWF0dXJlQ29sbGVjdGlvbiA9IHR5cGUgPT09ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgIGlzRmVhdHVyZSA9IHR5cGUgPT09ICdGZWF0dXJlJyxcbiAgICAgICAgc3RvcCA9IGlzRmVhdHVyZUNvbGxlY3Rpb24gPyBnZW9qc29uLmZlYXR1cmVzLmxlbmd0aCA6IDE7XG5cbiAgICAvLyBUaGlzIGxvZ2ljIG1heSBsb29rIGEgbGl0dGxlIHdlaXJkLiBUaGUgcmVhc29uIHdoeSBpdCBpcyB0aGF0IHdheVxuICAgIC8vIGlzIGJlY2F1c2UgaXQncyB0cnlpbmcgdG8gYmUgZmFzdC4gR2VvSlNPTiBzdXBwb3J0cyBtdWx0aXBsZSBraW5kc1xuICAgIC8vIG9mIG9iamVjdHMgYXQgaXRzIHJvb3Q6IEZlYXR1cmVDb2xsZWN0aW9uLCBGZWF0dXJlcywgR2VvbWV0cmllcy5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGhhcyB0aGUgcmVzcG9uc2liaWxpdHkgb2YgaGFuZGxpbmcgYWxsIG9mIHRoZW0sIGFuZCB0aGF0XG4gICAgLy8gbWVhbnMgdGhhdCBzb21lIG9mIHRoZSBgZm9yYCBsb29wcyB5b3Ugc2VlIGJlbG93IGFjdHVhbGx5IGp1c3QgZG9uJ3QgYXBwbHlcbiAgICAvLyB0byBjZXJ0YWluIGlucHV0cy4gRm9yIGluc3RhbmNlLCBpZiB5b3UgZ2l2ZSB0aGlzIGp1c3QgYVxuICAgIC8vIFBvaW50IGdlb21ldHJ5LCB0aGVuIGJvdGggbG9vcHMgYXJlIHNob3J0LWNpcmN1aXRlZCBhbmQgYWxsIHdlIGRvXG4gICAgLy8gaXMgZ3JhZHVhbGx5IHJlbmFtZSB0aGUgaW5wdXQgdW50aWwgaXQncyBjYWxsZWQgJ2dlb21ldHJ5Jy5cbiAgICAvL1xuICAgIC8vIFRoaXMgYWxzbyBhaW1zIHRvIGFsbG9jYXRlIGFzIGZldyByZXNvdXJjZXMgYXMgcG9zc2libGU6IGp1c3QgYVxuICAgIC8vIGZldyBudW1iZXJzIGFuZCBib29sZWFucywgcmF0aGVyIHRoYW4gYW55IHRlbXBvcmFyeSBhcnJheXMgYXMgd291bGRcbiAgICAvLyBiZSByZXF1aXJlZCB3aXRoIHRoZSBub3JtYWxpemF0aW9uIGFwcHJvYWNoLlxuICAgIGZvciAodmFyIGZlYXR1cmVJbmRleCA9IDA7IGZlYXR1cmVJbmRleCA8IHN0b3A7IGZlYXR1cmVJbmRleCsrKSB7XG4gICAgICAgIGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uID0gKGlzRmVhdHVyZUNvbGxlY3Rpb24gPyBnZW9qc29uLmZlYXR1cmVzW2ZlYXR1cmVJbmRleF0uZ2VvbWV0cnkgOlxuICAgICAgICAgICAgKGlzRmVhdHVyZSA/IGdlb2pzb24uZ2VvbWV0cnkgOiBnZW9qc29uKSk7XG4gICAgICAgIGlzR2VvbWV0cnlDb2xsZWN0aW9uID0gKGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uKSA/IGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uLnR5cGUgPT09ICdHZW9tZXRyeUNvbGxlY3Rpb24nIDogZmFsc2U7XG4gICAgICAgIHN0b3BHID0gaXNHZW9tZXRyeUNvbGxlY3Rpb24gPyBnZW9tZXRyeU1heWJlQ29sbGVjdGlvbi5nZW9tZXRyaWVzLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgZm9yICh2YXIgZ2VvbUluZGV4ID0gMDsgZ2VvbUluZGV4IDwgc3RvcEc7IGdlb21JbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgbXVsdGlGZWF0dXJlSW5kZXggPSAwO1xuICAgICAgICAgICAgdmFyIGdlb21ldHJ5SW5kZXggPSAwO1xuICAgICAgICAgICAgZ2VvbWV0cnkgPSBpc0dlb21ldHJ5Q29sbGVjdGlvbiA/XG4gICAgICAgICAgICAgICAgZ2VvbWV0cnlNYXliZUNvbGxlY3Rpb24uZ2VvbWV0cmllc1tnZW9tSW5kZXhdIDogZ2VvbWV0cnlNYXliZUNvbGxlY3Rpb247XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZXMgbnVsbCBHZW9tZXRyeSAtLSBTa2lwcyB0aGlzIGdlb21ldHJ5XG4gICAgICAgICAgICBpZiAoZ2VvbWV0cnkgPT09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29vcmRzID0gZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XG4gICAgICAgICAgICB2YXIgZ2VvbVR5cGUgPSBnZW9tZXRyeS50eXBlO1xuXG4gICAgICAgICAgICB3cmFwU2hyaW5rID0gKGV4Y2x1ZGVXcmFwQ29vcmQgJiYgKGdlb21UeXBlID09PSAnUG9seWdvbicgfHwgZ2VvbVR5cGUgPT09ICdNdWx0aVBvbHlnb24nKSkgPyAxIDogMDtcblxuICAgICAgICAgICAgc3dpdGNoIChnZW9tVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUG9pbnQnOlxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayhjb29yZHMsIGNvb3JkSW5kZXgsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvb3JkSW5kZXgrKztcbiAgICAgICAgICAgICAgICBtdWx0aUZlYXR1cmVJbmRleCsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTGluZVN0cmluZyc6XG4gICAgICAgICAgICBjYXNlICdNdWx0aVBvaW50JzpcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY29vcmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayhjb29yZHNbal0sIGNvb3JkSW5kZXgsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjb29yZEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnZW9tVHlwZSA9PT0gJ011bHRpUG9pbnQnKSBtdWx0aUZlYXR1cmVJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ2VvbVR5cGUgPT09ICdMaW5lU3RyaW5nJykgbXVsdGlGZWF0dXJlSW5kZXgrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1BvbHlnb24nOlxuICAgICAgICAgICAgY2FzZSAnTXVsdGlMaW5lU3RyaW5nJzpcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY29vcmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBjb29yZHNbal0ubGVuZ3RoIC0gd3JhcFNocmluazsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2soY29vcmRzW2pdW2tdLCBjb29yZEluZGV4LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4KSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2VvbVR5cGUgPT09ICdNdWx0aUxpbmVTdHJpbmcnKSBtdWx0aUZlYXR1cmVJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2VvbVR5cGUgPT09ICdQb2x5Z29uJykgZ2VvbWV0cnlJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ2VvbVR5cGUgPT09ICdQb2x5Z29uJykgbXVsdGlGZWF0dXJlSW5kZXgrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ011bHRpUG9seWdvbic6XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvb3Jkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGNvb3Jkc1tqXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsID0gMDsgbCA8IGNvb3Jkc1tqXVtrXS5sZW5ndGggLSB3cmFwU2hyaW5rOyBsKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2soY29vcmRzW2pdW2tdW2xdLCBjb29yZEluZGV4LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4KSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeUluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbXVsdGlGZWF0dXJlSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdHZW9tZXRyeUNvbGxlY3Rpb24nOlxuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBnZW9tZXRyeS5nZW9tZXRyaWVzLmxlbmd0aDsgaisrKVxuICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRFYWNoKGdlb21ldHJ5Lmdlb21ldHJpZXNbal0sIGNhbGxiYWNrLCBleGNsdWRlV3JhcENvb3JkKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIEdlb21ldHJ5IFR5cGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgY29vcmRSZWR1Y2VcbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgdmFsdWVzIHByb3ZpZGVkIGFzIGFyZ3VtZW50cyBkZXBlbmRcbiAqIG9uIHdoZXRoZXIgdGhlIHJlZHVjZSBtZXRob2QgaGFzIGFuIGluaXRpYWxWYWx1ZSBhcmd1bWVudC5cbiAqXG4gKiBJZiBhbiBpbml0aWFsVmFsdWUgaXMgcHJvdmlkZWQgdG8gdGhlIHJlZHVjZSBtZXRob2Q6XG4gKiAgLSBUaGUgcHJldmlvdXNWYWx1ZSBhcmd1bWVudCBpcyBpbml0aWFsVmFsdWUuXG4gKiAgLSBUaGUgY3VycmVudFZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqXG4gKiBJZiBhbiBpbml0aWFsVmFsdWUgaXMgbm90IHByb3ZpZGVkOlxuICogIC0gVGhlIHByZXZpb3VzVmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICogIC0gVGhlIGN1cnJlbnRWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICpcbiAqIEBjYWxsYmFjayBjb29yZFJlZHVjZUNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzVmFsdWUgVGhlIGFjY3VtdWxhdGVkIHZhbHVlIHByZXZpb3VzbHkgcmV0dXJuZWQgaW4gdGhlIGxhc3QgaW52b2NhdGlvblxuICogb2YgdGhlIGNhbGxiYWNrLCBvciBpbml0aWFsVmFsdWUsIGlmIHN1cHBsaWVkLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjdXJyZW50Q29vcmQgVGhlIGN1cnJlbnQgY29vcmRpbmF0ZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gY29vcmRJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgY29vcmRpbmF0ZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBTdGFydHMgYXQgaW5kZXggMCwgaWYgYW4gaW5pdGlhbFZhbHVlIGlzIHByb3ZpZGVkLCBhbmQgYXQgaW5kZXggMSBvdGhlcndpc2UuXG4gKiBAcGFyYW0ge251bWJlcn0gZmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBGZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtdWx0aUZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgTXVsdGktRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZ2VvbWV0cnlJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgR2VvbWV0cnkgYmVpbmcgcHJvY2Vzc2VkLlxuICovXG5cbi8qKlxuICogUmVkdWNlIGNvb3JkaW5hdGVzIGluIGFueSBHZW9KU09OIG9iamVjdCwgc2ltaWxhciB0byBBcnJheS5yZWR1Y2UoKVxuICpcbiAqIEBuYW1lIGNvb3JkUmVkdWNlXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEdlb21ldHJ5fEZlYXR1cmV9IGdlb2pzb24gYW55IEdlb0pTT04gb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50Q29vcmQsIGNvb3JkSW5kZXgpXG4gKiBAcGFyYW0geyp9IFtpbml0aWFsVmFsdWVdIFZhbHVlIHRvIHVzZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGZpcnN0IGNhbGwgb2YgdGhlIGNhbGxiYWNrLlxuICogQHBhcmFtIHtib29sZWFufSBbZXhjbHVkZVdyYXBDb29yZD1mYWxzZV0gd2hldGhlciBvciBub3QgdG8gaW5jbHVkZSB0aGUgZmluYWwgY29vcmRpbmF0ZSBvZiBMaW5lYXJSaW5ncyB0aGF0IHdyYXBzIHRoZSByaW5nIGluIGl0cyBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHZhbHVlIHRoYXQgcmVzdWx0cyBmcm9tIHRoZSByZWR1Y3Rpb24uXG4gKiBAZXhhbXBsZVxuICogdmFyIGZlYXR1cmVzID0gdHVyZi5mZWF0dXJlQ29sbGVjdGlvbihbXG4gKiAgIHR1cmYucG9pbnQoWzI2LCAzN10sIHtcImZvb1wiOiBcImJhclwifSksXG4gKiAgIHR1cmYucG9pbnQoWzM2LCA1M10sIHtcImhlbGxvXCI6IFwid29ybGRcIn0pXG4gKiBdKTtcbiAqXG4gKiB0dXJmLmNvb3JkUmVkdWNlKGZlYXR1cmVzLCBmdW5jdGlvbiAocHJldmlvdXNWYWx1ZSwgY3VycmVudENvb3JkLCBjb29yZEluZGV4LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4KSB7XG4gKiAgIC8vPXByZXZpb3VzVmFsdWVcbiAqICAgLy89Y3VycmVudENvb3JkXG4gKiAgIC8vPWNvb3JkSW5kZXhcbiAqICAgLy89ZmVhdHVyZUluZGV4XG4gKiAgIC8vPW11bHRpRmVhdHVyZUluZGV4XG4gKiAgIC8vPWdlb21ldHJ5SW5kZXhcbiAqICAgcmV0dXJuIGN1cnJlbnRDb29yZDtcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBjb29yZFJlZHVjZShnZW9qc29uLCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlLCBleGNsdWRlV3JhcENvb3JkKSB7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgY29vcmRFYWNoKGdlb2pzb24sIGZ1bmN0aW9uIChjdXJyZW50Q29vcmQsIGNvb3JkSW5kZXgsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgpIHtcbiAgICAgICAgaWYgKGNvb3JkSW5kZXggPT09IDAgJiYgaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQpIHByZXZpb3VzVmFsdWUgPSBjdXJyZW50Q29vcmQ7XG4gICAgICAgIGVsc2UgcHJldmlvdXNWYWx1ZSA9IGNhbGxiYWNrKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRDb29yZCwgY29vcmRJbmRleCwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCwgZ2VvbWV0cnlJbmRleCk7XG4gICAgfSwgZXhjbHVkZVdyYXBDb29yZCk7XG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG59XG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIHByb3BFYWNoXG4gKlxuICogQGNhbGxiYWNrIHByb3BFYWNoQ2FsbGJhY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBjdXJyZW50UHJvcGVydGllcyBUaGUgY3VycmVudCBQcm9wZXJ0aWVzIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICovXG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIHByb3BlcnRpZXMgaW4gYW55IEdlb0pTT04gb2JqZWN0LCBzaW1pbGFyIHRvIEFycmF5LmZvckVhY2goKVxuICpcbiAqIEBuYW1lIHByb3BFYWNoXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV9IGdlb2pzb24gYW55IEdlb0pTT04gb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChjdXJyZW50UHJvcGVydGllcywgZmVhdHVyZUluZGV4KVxuICogQHJldHVybnMge3ZvaWR9XG4gKiBAZXhhbXBsZVxuICogdmFyIGZlYXR1cmVzID0gdHVyZi5mZWF0dXJlQ29sbGVjdGlvbihbXG4gKiAgICAgdHVyZi5wb2ludChbMjYsIDM3XSwge2ZvbzogJ2Jhcid9KSxcbiAqICAgICB0dXJmLnBvaW50KFszNiwgNTNdLCB7aGVsbG86ICd3b3JsZCd9KVxuICogXSk7XG4gKlxuICogdHVyZi5wcm9wRWFjaChmZWF0dXJlcywgZnVuY3Rpb24gKGN1cnJlbnRQcm9wZXJ0aWVzLCBmZWF0dXJlSW5kZXgpIHtcbiAqICAgLy89Y3VycmVudFByb3BlcnRpZXNcbiAqICAgLy89ZmVhdHVyZUluZGV4XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gcHJvcEVhY2goZ2VvanNvbiwgY2FsbGJhY2spIHtcbiAgICB2YXIgaTtcbiAgICBzd2l0Y2ggKGdlb2pzb24udHlwZSkge1xuICAgIGNhc2UgJ0ZlYXR1cmVDb2xsZWN0aW9uJzpcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGdlb2pzb24uZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayhnZW9qc29uLmZlYXR1cmVzW2ldLnByb3BlcnRpZXMsIGkpID09PSBmYWxzZSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRmVhdHVyZSc6XG4gICAgICAgIGNhbGxiYWNrKGdlb2pzb24ucHJvcGVydGllcywgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIENhbGxiYWNrIGZvciBwcm9wUmVkdWNlXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIHZhbHVlcyBwcm92aWRlZCBhcyBhcmd1bWVudHMgZGVwZW5kXG4gKiBvbiB3aGV0aGVyIHRoZSByZWR1Y2UgbWV0aG9kIGhhcyBhbiBpbml0aWFsVmFsdWUgYXJndW1lbnQuXG4gKlxuICogSWYgYW4gaW5pdGlhbFZhbHVlIGlzIHByb3ZpZGVkIHRvIHRoZSByZWR1Y2UgbWV0aG9kOlxuICogIC0gVGhlIHByZXZpb3VzVmFsdWUgYXJndW1lbnQgaXMgaW5pdGlhbFZhbHVlLlxuICogIC0gVGhlIGN1cnJlbnRWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKlxuICogSWYgYW4gaW5pdGlhbFZhbHVlIGlzIG5vdCBwcm92aWRlZDpcbiAqICAtIFRoZSBwcmV2aW91c1ZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqICAtIFRoZSBjdXJyZW50VmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqXG4gKiBAY2FsbGJhY2sgcHJvcFJlZHVjZUNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzVmFsdWUgVGhlIGFjY3VtdWxhdGVkIHZhbHVlIHByZXZpb3VzbHkgcmV0dXJuZWQgaW4gdGhlIGxhc3QgaW52b2NhdGlvblxuICogb2YgdGhlIGNhbGxiYWNrLCBvciBpbml0aWFsVmFsdWUsIGlmIHN1cHBsaWVkLlxuICogQHBhcmFtIHsqfSBjdXJyZW50UHJvcGVydGllcyBUaGUgY3VycmVudCBQcm9wZXJ0aWVzIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICovXG5cbi8qKlxuICogUmVkdWNlIHByb3BlcnRpZXMgaW4gYW55IEdlb0pTT04gb2JqZWN0IGludG8gYSBzaW5nbGUgdmFsdWUsXG4gKiBzaW1pbGFyIHRvIGhvdyBBcnJheS5yZWR1Y2Ugd29ya3MuIEhvd2V2ZXIsIGluIHRoaXMgY2FzZSB3ZSBsYXppbHkgcnVuXG4gKiB0aGUgcmVkdWN0aW9uLCBzbyBhbiBhcnJheSBvZiBhbGwgcHJvcGVydGllcyBpcyB1bm5lY2Vzc2FyeS5cbiAqXG4gKiBAbmFtZSBwcm9wUmVkdWNlXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV9IGdlb2pzb24gYW55IEdlb0pTT04gb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50UHJvcGVydGllcywgZmVhdHVyZUluZGV4KVxuICogQHBhcmFtIHsqfSBbaW5pdGlhbFZhbHVlXSBWYWx1ZSB0byB1c2UgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBmaXJzdCBjYWxsIG9mIHRoZSBjYWxsYmFjay5cbiAqIEByZXR1cm5zIHsqfSBUaGUgdmFsdWUgdGhhdCByZXN1bHRzIGZyb20gdGhlIHJlZHVjdGlvbi5cbiAqIEBleGFtcGxlXG4gKiB2YXIgZmVhdHVyZXMgPSB0dXJmLmZlYXR1cmVDb2xsZWN0aW9uKFtcbiAqICAgICB0dXJmLnBvaW50KFsyNiwgMzddLCB7Zm9vOiAnYmFyJ30pLFxuICogICAgIHR1cmYucG9pbnQoWzM2LCA1M10sIHtoZWxsbzogJ3dvcmxkJ30pXG4gKiBdKTtcbiAqXG4gKiB0dXJmLnByb3BSZWR1Y2UoZmVhdHVyZXMsIGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50UHJvcGVydGllcywgZmVhdHVyZUluZGV4KSB7XG4gKiAgIC8vPXByZXZpb3VzVmFsdWVcbiAqICAgLy89Y3VycmVudFByb3BlcnRpZXNcbiAqICAgLy89ZmVhdHVyZUluZGV4XG4gKiAgIHJldHVybiBjdXJyZW50UHJvcGVydGllc1xuICogfSk7XG4gKi9cbmZ1bmN0aW9uIHByb3BSZWR1Y2UoZ2VvanNvbiwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHZhciBwcmV2aW91c1ZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgIHByb3BFYWNoKGdlb2pzb24sIGZ1bmN0aW9uIChjdXJyZW50UHJvcGVydGllcywgZmVhdHVyZUluZGV4KSB7XG4gICAgICAgIGlmIChmZWF0dXJlSW5kZXggPT09IDAgJiYgaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQpIHByZXZpb3VzVmFsdWUgPSBjdXJyZW50UHJvcGVydGllcztcbiAgICAgICAgZWxzZSBwcmV2aW91c1ZhbHVlID0gY2FsbGJhY2socHJldmlvdXNWYWx1ZSwgY3VycmVudFByb3BlcnRpZXMsIGZlYXR1cmVJbmRleCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG59XG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIGZlYXR1cmVFYWNoXG4gKlxuICogQGNhbGxiYWNrIGZlYXR1cmVFYWNoQ2FsbGJhY2tcbiAqIEBwYXJhbSB7RmVhdHVyZTxhbnk+fSBjdXJyZW50RmVhdHVyZSBUaGUgY3VycmVudCBGZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICovXG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGZlYXR1cmVzIGluIGFueSBHZW9KU09OIG9iamVjdCwgc2ltaWxhciB0b1xuICogQXJyYXkuZm9yRWFjaC5cbiAqXG4gKiBAbmFtZSBmZWF0dXJlRWFjaFxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIGFueSBHZW9KU09OIG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAoY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleClcbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQGV4YW1wbGVcbiAqIHZhciBmZWF0dXJlcyA9IHR1cmYuZmVhdHVyZUNvbGxlY3Rpb24oW1xuICogICB0dXJmLnBvaW50KFsyNiwgMzddLCB7Zm9vOiAnYmFyJ30pLFxuICogICB0dXJmLnBvaW50KFszNiwgNTNdLCB7aGVsbG86ICd3b3JsZCd9KVxuICogXSk7XG4gKlxuICogdHVyZi5mZWF0dXJlRWFjaChmZWF0dXJlcywgZnVuY3Rpb24gKGN1cnJlbnRGZWF0dXJlLCBmZWF0dXJlSW5kZXgpIHtcbiAqICAgLy89Y3VycmVudEZlYXR1cmVcbiAqICAgLy89ZmVhdHVyZUluZGV4XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gZmVhdHVyZUVhY2goZ2VvanNvbiwgY2FsbGJhY2spIHtcbiAgICBpZiAoZ2VvanNvbi50eXBlID09PSAnRmVhdHVyZScpIHtcbiAgICAgICAgY2FsbGJhY2soZ2VvanNvbiwgMCk7XG4gICAgfSBlbHNlIGlmIChnZW9qc29uLnR5cGUgPT09ICdGZWF0dXJlQ29sbGVjdGlvbicpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnZW9qc29uLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2soZ2VvanNvbi5mZWF0dXJlc1tpXSwgaSkgPT09IGZhbHNlKSBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgZmVhdHVyZVJlZHVjZVxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYXMgYXJndW1lbnRzIGRlcGVuZFxuICogb24gd2hldGhlciB0aGUgcmVkdWNlIG1ldGhvZCBoYXMgYW4gaW5pdGlhbFZhbHVlIGFyZ3VtZW50LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBwcm92aWRlZCB0byB0aGUgcmVkdWNlIG1ldGhvZDpcbiAqICAtIFRoZSBwcmV2aW91c1ZhbHVlIGFyZ3VtZW50IGlzIGluaXRpYWxWYWx1ZS5cbiAqICAtIFRoZSBjdXJyZW50VmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBub3QgcHJvdmlkZWQ6XG4gKiAgLSBUaGUgcHJldmlvdXNWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKiAgLSBUaGUgY3VycmVudFZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kIGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKlxuICogQGNhbGxiYWNrIGZlYXR1cmVSZWR1Y2VDYWxsYmFja1xuICogQHBhcmFtIHsqfSBwcmV2aW91c1ZhbHVlIFRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBwcmV2aW91c2x5IHJldHVybmVkIGluIHRoZSBsYXN0IGludm9jYXRpb25cbiAqIG9mIHRoZSBjYWxsYmFjaywgb3IgaW5pdGlhbFZhbHVlLCBpZiBzdXBwbGllZC5cbiAqIEBwYXJhbSB7RmVhdHVyZX0gY3VycmVudEZlYXR1cmUgVGhlIGN1cnJlbnQgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBGZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqL1xuXG4vKipcbiAqIFJlZHVjZSBmZWF0dXJlcyBpbiBhbnkgR2VvSlNPTiBvYmplY3QsIHNpbWlsYXIgdG8gQXJyYXkucmVkdWNlKCkuXG4gKlxuICogQG5hbWUgZmVhdHVyZVJlZHVjZVxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIGFueSBHZW9KU09OIG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAocHJldmlvdXNWYWx1ZSwgY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleClcbiAqIEBwYXJhbSB7Kn0gW2luaXRpYWxWYWx1ZV0gVmFsdWUgdG8gdXNlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgZmlyc3QgY2FsbCBvZiB0aGUgY2FsbGJhY2suXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHZhbHVlIHRoYXQgcmVzdWx0cyBmcm9tIHRoZSByZWR1Y3Rpb24uXG4gKiBAZXhhbXBsZVxuICogdmFyIGZlYXR1cmVzID0gdHVyZi5mZWF0dXJlQ29sbGVjdGlvbihbXG4gKiAgIHR1cmYucG9pbnQoWzI2LCAzN10sIHtcImZvb1wiOiBcImJhclwifSksXG4gKiAgIHR1cmYucG9pbnQoWzM2LCA1M10sIHtcImhlbGxvXCI6IFwid29ybGRcIn0pXG4gKiBdKTtcbiAqXG4gKiB0dXJmLmZlYXR1cmVSZWR1Y2UoZmVhdHVyZXMsIGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50RmVhdHVyZSwgZmVhdHVyZUluZGV4KSB7XG4gKiAgIC8vPXByZXZpb3VzVmFsdWVcbiAqICAgLy89Y3VycmVudEZlYXR1cmVcbiAqICAgLy89ZmVhdHVyZUluZGV4XG4gKiAgIHJldHVybiBjdXJyZW50RmVhdHVyZVxuICogfSk7XG4gKi9cbmZ1bmN0aW9uIGZlYXR1cmVSZWR1Y2UoZ2VvanNvbiwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHZhciBwcmV2aW91c1ZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgIGZlYXR1cmVFYWNoKGdlb2pzb24sIGZ1bmN0aW9uIChjdXJyZW50RmVhdHVyZSwgZmVhdHVyZUluZGV4KSB7XG4gICAgICAgIGlmIChmZWF0dXJlSW5kZXggPT09IDAgJiYgaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQpIHByZXZpb3VzVmFsdWUgPSBjdXJyZW50RmVhdHVyZTtcbiAgICAgICAgZWxzZSBwcmV2aW91c1ZhbHVlID0gY2FsbGJhY2socHJldmlvdXNWYWx1ZSwgY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG59XG5cbi8qKlxuICogR2V0IGFsbCBjb29yZGluYXRlcyBmcm9tIGFueSBHZW9KU09OIG9iamVjdC5cbiAqXG4gKiBAbmFtZSBjb29yZEFsbFxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIGFueSBHZW9KU09OIG9iamVjdFxuICogQHJldHVybnMge0FycmF5PEFycmF5PG51bWJlcj4+fSBjb29yZGluYXRlIHBvc2l0aW9uIGFycmF5XG4gKiBAZXhhbXBsZVxuICogdmFyIGZlYXR1cmVzID0gdHVyZi5mZWF0dXJlQ29sbGVjdGlvbihbXG4gKiAgIHR1cmYucG9pbnQoWzI2LCAzN10sIHtmb286ICdiYXInfSksXG4gKiAgIHR1cmYucG9pbnQoWzM2LCA1M10sIHtoZWxsbzogJ3dvcmxkJ30pXG4gKiBdKTtcbiAqXG4gKiB2YXIgY29vcmRzID0gdHVyZi5jb29yZEFsbChmZWF0dXJlcyk7XG4gKiAvLz0gW1syNiwgMzddLCBbMzYsIDUzXV1cbiAqL1xuZnVuY3Rpb24gY29vcmRBbGwoZ2VvanNvbikge1xuICAgIHZhciBjb29yZHMgPSBbXTtcbiAgICBjb29yZEVhY2goZ2VvanNvbiwgZnVuY3Rpb24gKGNvb3JkKSB7XG4gICAgICAgIGNvb3Jkcy5wdXNoKGNvb3JkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29vcmRzO1xufVxuXG4vKipcbiAqIENhbGxiYWNrIGZvciBnZW9tRWFjaFxuICpcbiAqIEBjYWxsYmFjayBnZW9tRWFjaENhbGxiYWNrXG4gKiBAcGFyYW0ge0dlb21ldHJ5fSBjdXJyZW50R2VvbWV0cnkgVGhlIGN1cnJlbnQgR2VvbWV0cnkgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gZmVhdHVyZVByb3BlcnRpZXMgVGhlIGN1cnJlbnQgRmVhdHVyZSBQcm9wZXJ0aWVzIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmVhdHVyZUJCb3ggVGhlIGN1cnJlbnQgRmVhdHVyZSBCQm94IGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gZmVhdHVyZUlkIFRoZSBjdXJyZW50IEZlYXR1cmUgSWQgYmVpbmcgcHJvY2Vzc2VkLlxuICovXG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGVhY2ggZ2VvbWV0cnkgaW4gYW55IEdlb0pTT04gb2JqZWN0LCBzaW1pbGFyIHRvIEFycmF5LmZvckVhY2goKVxuICpcbiAqIEBuYW1lIGdlb21FYWNoXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV8R2VvbWV0cnl9IGdlb2pzb24gYW55IEdlb0pTT04gb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChjdXJyZW50R2VvbWV0cnksIGZlYXR1cmVJbmRleCwgZmVhdHVyZVByb3BlcnRpZXMsIGZlYXR1cmVCQm94LCBmZWF0dXJlSWQpXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBleGFtcGxlXG4gKiB2YXIgZmVhdHVyZXMgPSB0dXJmLmZlYXR1cmVDb2xsZWN0aW9uKFtcbiAqICAgICB0dXJmLnBvaW50KFsyNiwgMzddLCB7Zm9vOiAnYmFyJ30pLFxuICogICAgIHR1cmYucG9pbnQoWzM2LCA1M10sIHtoZWxsbzogJ3dvcmxkJ30pXG4gKiBdKTtcbiAqXG4gKiB0dXJmLmdlb21FYWNoKGZlYXR1cmVzLCBmdW5jdGlvbiAoY3VycmVudEdlb21ldHJ5LCBmZWF0dXJlSW5kZXgsIGZlYXR1cmVQcm9wZXJ0aWVzLCBmZWF0dXJlQkJveCwgZmVhdHVyZUlkKSB7XG4gKiAgIC8vPWN1cnJlbnRHZW9tZXRyeVxuICogICAvLz1mZWF0dXJlSW5kZXhcbiAqICAgLy89ZmVhdHVyZVByb3BlcnRpZXNcbiAqICAgLy89ZmVhdHVyZUJCb3hcbiAqICAgLy89ZmVhdHVyZUlkXG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gZ2VvbUVhY2goZ2VvanNvbiwgY2FsbGJhY2spIHtcbiAgICB2YXIgaSwgaiwgZywgZ2VvbWV0cnksIHN0b3BHLFxuICAgICAgICBnZW9tZXRyeU1heWJlQ29sbGVjdGlvbixcbiAgICAgICAgaXNHZW9tZXRyeUNvbGxlY3Rpb24sXG4gICAgICAgIGZlYXR1cmVQcm9wZXJ0aWVzLFxuICAgICAgICBmZWF0dXJlQkJveCxcbiAgICAgICAgZmVhdHVyZUlkLFxuICAgICAgICBmZWF0dXJlSW5kZXggPSAwLFxuICAgICAgICBpc0ZlYXR1cmVDb2xsZWN0aW9uID0gZ2VvanNvbi50eXBlID09PSAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgICBpc0ZlYXR1cmUgPSBnZW9qc29uLnR5cGUgPT09ICdGZWF0dXJlJyxcbiAgICAgICAgc3RvcCA9IGlzRmVhdHVyZUNvbGxlY3Rpb24gPyBnZW9qc29uLmZlYXR1cmVzLmxlbmd0aCA6IDE7XG5cbiAgICAvLyBUaGlzIGxvZ2ljIG1heSBsb29rIGEgbGl0dGxlIHdlaXJkLiBUaGUgcmVhc29uIHdoeSBpdCBpcyB0aGF0IHdheVxuICAgIC8vIGlzIGJlY2F1c2UgaXQncyB0cnlpbmcgdG8gYmUgZmFzdC4gR2VvSlNPTiBzdXBwb3J0cyBtdWx0aXBsZSBraW5kc1xuICAgIC8vIG9mIG9iamVjdHMgYXQgaXRzIHJvb3Q6IEZlYXR1cmVDb2xsZWN0aW9uLCBGZWF0dXJlcywgR2VvbWV0cmllcy5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGhhcyB0aGUgcmVzcG9uc2liaWxpdHkgb2YgaGFuZGxpbmcgYWxsIG9mIHRoZW0sIGFuZCB0aGF0XG4gICAgLy8gbWVhbnMgdGhhdCBzb21lIG9mIHRoZSBgZm9yYCBsb29wcyB5b3Ugc2VlIGJlbG93IGFjdHVhbGx5IGp1c3QgZG9uJ3QgYXBwbHlcbiAgICAvLyB0byBjZXJ0YWluIGlucHV0cy4gRm9yIGluc3RhbmNlLCBpZiB5b3UgZ2l2ZSB0aGlzIGp1c3QgYVxuICAgIC8vIFBvaW50IGdlb21ldHJ5LCB0aGVuIGJvdGggbG9vcHMgYXJlIHNob3J0LWNpcmN1aXRlZCBhbmQgYWxsIHdlIGRvXG4gICAgLy8gaXMgZ3JhZHVhbGx5IHJlbmFtZSB0aGUgaW5wdXQgdW50aWwgaXQncyBjYWxsZWQgJ2dlb21ldHJ5Jy5cbiAgICAvL1xuICAgIC8vIFRoaXMgYWxzbyBhaW1zIHRvIGFsbG9jYXRlIGFzIGZldyByZXNvdXJjZXMgYXMgcG9zc2libGU6IGp1c3QgYVxuICAgIC8vIGZldyBudW1iZXJzIGFuZCBib29sZWFucywgcmF0aGVyIHRoYW4gYW55IHRlbXBvcmFyeSBhcnJheXMgYXMgd291bGRcbiAgICAvLyBiZSByZXF1aXJlZCB3aXRoIHRoZSBub3JtYWxpemF0aW9uIGFwcHJvYWNoLlxuICAgIGZvciAoaSA9IDA7IGkgPCBzdG9wOyBpKyspIHtcblxuICAgICAgICBnZW9tZXRyeU1heWJlQ29sbGVjdGlvbiA9IChpc0ZlYXR1cmVDb2xsZWN0aW9uID8gZ2VvanNvbi5mZWF0dXJlc1tpXS5nZW9tZXRyeSA6XG4gICAgICAgICAgICAoaXNGZWF0dXJlID8gZ2VvanNvbi5nZW9tZXRyeSA6IGdlb2pzb24pKTtcbiAgICAgICAgZmVhdHVyZVByb3BlcnRpZXMgPSAoaXNGZWF0dXJlQ29sbGVjdGlvbiA/IGdlb2pzb24uZmVhdHVyZXNbaV0ucHJvcGVydGllcyA6XG4gICAgICAgICAgICAoaXNGZWF0dXJlID8gZ2VvanNvbi5wcm9wZXJ0aWVzIDoge30pKTtcbiAgICAgICAgZmVhdHVyZUJCb3ggPSAoaXNGZWF0dXJlQ29sbGVjdGlvbiA/IGdlb2pzb24uZmVhdHVyZXNbaV0uYmJveCA6XG4gICAgICAgICAgICAoaXNGZWF0dXJlID8gZ2VvanNvbi5iYm94IDogdW5kZWZpbmVkKSk7XG4gICAgICAgIGZlYXR1cmVJZCA9IChpc0ZlYXR1cmVDb2xsZWN0aW9uID8gZ2VvanNvbi5mZWF0dXJlc1tpXS5pZCA6XG4gICAgICAgICAgICAoaXNGZWF0dXJlID8gZ2VvanNvbi5pZCA6IHVuZGVmaW5lZCkpO1xuICAgICAgICBpc0dlb21ldHJ5Q29sbGVjdGlvbiA9IChnZW9tZXRyeU1heWJlQ29sbGVjdGlvbikgPyBnZW9tZXRyeU1heWJlQ29sbGVjdGlvbi50eXBlID09PSAnR2VvbWV0cnlDb2xsZWN0aW9uJyA6IGZhbHNlO1xuICAgICAgICBzdG9wRyA9IGlzR2VvbWV0cnlDb2xsZWN0aW9uID8gZ2VvbWV0cnlNYXliZUNvbGxlY3Rpb24uZ2VvbWV0cmllcy5sZW5ndGggOiAxO1xuXG4gICAgICAgIGZvciAoZyA9IDA7IGcgPCBzdG9wRzsgZysrKSB7XG4gICAgICAgICAgICBnZW9tZXRyeSA9IGlzR2VvbWV0cnlDb2xsZWN0aW9uID9cbiAgICAgICAgICAgICAgICBnZW9tZXRyeU1heWJlQ29sbGVjdGlvbi5nZW9tZXRyaWVzW2ddIDogZ2VvbWV0cnlNYXliZUNvbGxlY3Rpb247XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBudWxsIEdlb21ldHJ5XG4gICAgICAgICAgICBpZiAoZ2VvbWV0cnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sobnVsbCwgZmVhdHVyZUluZGV4LCBmZWF0dXJlUHJvcGVydGllcywgZmVhdHVyZUJCb3gsIGZlYXR1cmVJZCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKGdlb21ldHJ5LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ1BvaW50JzpcbiAgICAgICAgICAgIGNhc2UgJ0xpbmVTdHJpbmcnOlxuICAgICAgICAgICAgY2FzZSAnTXVsdGlQb2ludCc6XG4gICAgICAgICAgICBjYXNlICdQb2x5Z29uJzpcbiAgICAgICAgICAgIGNhc2UgJ011bHRpTGluZVN0cmluZyc6XG4gICAgICAgICAgICBjYXNlICdNdWx0aVBvbHlnb24nOiB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGdlb21ldHJ5LCBmZWF0dXJlSW5kZXgsIGZlYXR1cmVQcm9wZXJ0aWVzLCBmZWF0dXJlQkJveCwgZmVhdHVyZUlkKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0dlb21ldHJ5Q29sbGVjdGlvbic6IHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZ2VvbWV0cnkuZ2VvbWV0cmllcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2soZ2VvbWV0cnkuZ2VvbWV0cmllc1tqXSwgZmVhdHVyZUluZGV4LCBmZWF0dXJlUHJvcGVydGllcywgZmVhdHVyZUJCb3gsIGZlYXR1cmVJZCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gR2VvbWV0cnkgVHlwZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE9ubHkgaW5jcmVhc2UgYGZlYXR1cmVJbmRleGAgcGVyIGVhY2ggZmVhdHVyZVxuICAgICAgICBmZWF0dXJlSW5kZXgrKztcbiAgICB9XG59XG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIGdlb21SZWR1Y2VcbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgdmFsdWVzIHByb3ZpZGVkIGFzIGFyZ3VtZW50cyBkZXBlbmRcbiAqIG9uIHdoZXRoZXIgdGhlIHJlZHVjZSBtZXRob2QgaGFzIGFuIGluaXRpYWxWYWx1ZSBhcmd1bWVudC5cbiAqXG4gKiBJZiBhbiBpbml0aWFsVmFsdWUgaXMgcHJvdmlkZWQgdG8gdGhlIHJlZHVjZSBtZXRob2Q6XG4gKiAgLSBUaGUgcHJldmlvdXNWYWx1ZSBhcmd1bWVudCBpcyBpbml0aWFsVmFsdWUuXG4gKiAgLSBUaGUgY3VycmVudFZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqXG4gKiBJZiBhbiBpbml0aWFsVmFsdWUgaXMgbm90IHByb3ZpZGVkOlxuICogIC0gVGhlIHByZXZpb3VzVmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICogIC0gVGhlIGN1cnJlbnRWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICpcbiAqIEBjYWxsYmFjayBnZW9tUmVkdWNlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXNWYWx1ZSBUaGUgYWNjdW11bGF0ZWQgdmFsdWUgcHJldmlvdXNseSByZXR1cm5lZCBpbiB0aGUgbGFzdCBpbnZvY2F0aW9uXG4gKiBvZiB0aGUgY2FsbGJhY2ssIG9yIGluaXRpYWxWYWx1ZSwgaWYgc3VwcGxpZWQuXG4gKiBAcGFyYW0ge0dlb21ldHJ5fSBjdXJyZW50R2VvbWV0cnkgVGhlIGN1cnJlbnQgR2VvbWV0cnkgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gZmVhdHVyZVByb3BlcnRpZXMgVGhlIGN1cnJlbnQgRmVhdHVyZSBQcm9wZXJ0aWVzIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmVhdHVyZUJCb3ggVGhlIGN1cnJlbnQgRmVhdHVyZSBCQm94IGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gZmVhdHVyZUlkIFRoZSBjdXJyZW50IEZlYXR1cmUgSWQgYmVpbmcgcHJvY2Vzc2VkLlxuICovXG5cbi8qKlxuICogUmVkdWNlIGdlb21ldHJ5IGluIGFueSBHZW9KU09OIG9iamVjdCwgc2ltaWxhciB0byBBcnJheS5yZWR1Y2UoKS5cbiAqXG4gKiBAbmFtZSBnZW9tUmVkdWNlXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV8R2VvbWV0cnl9IGdlb2pzb24gYW55IEdlb0pTT04gb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50R2VvbWV0cnksIGZlYXR1cmVJbmRleCwgZmVhdHVyZVByb3BlcnRpZXMsIGZlYXR1cmVCQm94LCBmZWF0dXJlSWQpXG4gKiBAcGFyYW0geyp9IFtpbml0aWFsVmFsdWVdIFZhbHVlIHRvIHVzZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGZpcnN0IGNhbGwgb2YgdGhlIGNhbGxiYWNrLlxuICogQHJldHVybnMgeyp9IFRoZSB2YWx1ZSB0aGF0IHJlc3VsdHMgZnJvbSB0aGUgcmVkdWN0aW9uLlxuICogQGV4YW1wbGVcbiAqIHZhciBmZWF0dXJlcyA9IHR1cmYuZmVhdHVyZUNvbGxlY3Rpb24oW1xuICogICAgIHR1cmYucG9pbnQoWzI2LCAzN10sIHtmb286ICdiYXInfSksXG4gKiAgICAgdHVyZi5wb2ludChbMzYsIDUzXSwge2hlbGxvOiAnd29ybGQnfSlcbiAqIF0pO1xuICpcbiAqIHR1cmYuZ2VvbVJlZHVjZShmZWF0dXJlcywgZnVuY3Rpb24gKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRHZW9tZXRyeSwgZmVhdHVyZUluZGV4LCBmZWF0dXJlUHJvcGVydGllcywgZmVhdHVyZUJCb3gsIGZlYXR1cmVJZCkge1xuICogICAvLz1wcmV2aW91c1ZhbHVlXG4gKiAgIC8vPWN1cnJlbnRHZW9tZXRyeVxuICogICAvLz1mZWF0dXJlSW5kZXhcbiAqICAgLy89ZmVhdHVyZVByb3BlcnRpZXNcbiAqICAgLy89ZmVhdHVyZUJCb3hcbiAqICAgLy89ZmVhdHVyZUlkXG4gKiAgIHJldHVybiBjdXJyZW50R2VvbWV0cnlcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBnZW9tUmVkdWNlKGdlb2pzb24sIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICBnZW9tRWFjaChnZW9qc29uLCBmdW5jdGlvbiAoY3VycmVudEdlb21ldHJ5LCBmZWF0dXJlSW5kZXgsIGZlYXR1cmVQcm9wZXJ0aWVzLCBmZWF0dXJlQkJveCwgZmVhdHVyZUlkKSB7XG4gICAgICAgIGlmIChmZWF0dXJlSW5kZXggPT09IDAgJiYgaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQpIHByZXZpb3VzVmFsdWUgPSBjdXJyZW50R2VvbWV0cnk7XG4gICAgICAgIGVsc2UgcHJldmlvdXNWYWx1ZSA9IGNhbGxiYWNrKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRHZW9tZXRyeSwgZmVhdHVyZUluZGV4LCBmZWF0dXJlUHJvcGVydGllcywgZmVhdHVyZUJCb3gsIGZlYXR1cmVJZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG59XG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIGZsYXR0ZW5FYWNoXG4gKlxuICogQGNhbGxiYWNrIGZsYXR0ZW5FYWNoQ2FsbGJhY2tcbiAqIEBwYXJhbSB7RmVhdHVyZX0gY3VycmVudEZlYXR1cmUgVGhlIGN1cnJlbnQgZmxhdHRlbmVkIGZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbXVsdGlGZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIE11bHRpLUZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICovXG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGZsYXR0ZW5lZCBmZWF0dXJlcyBpbiBhbnkgR2VvSlNPTiBvYmplY3QsIHNpbWlsYXIgdG9cbiAqIEFycmF5LmZvckVhY2guXG4gKlxuICogQG5hbWUgZmxhdHRlbkVhY2hcbiAqIEBwYXJhbSB7RmVhdHVyZUNvbGxlY3Rpb258RmVhdHVyZXxHZW9tZXRyeX0gZ2VvanNvbiBhbnkgR2VvSlNPTiBvYmplY3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGEgbWV0aG9kIHRoYXQgdGFrZXMgKGN1cnJlbnRGZWF0dXJlLCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4KVxuICogQGV4YW1wbGVcbiAqIHZhciBmZWF0dXJlcyA9IHR1cmYuZmVhdHVyZUNvbGxlY3Rpb24oW1xuICogICAgIHR1cmYucG9pbnQoWzI2LCAzN10sIHtmb286ICdiYXInfSksXG4gKiAgICAgdHVyZi5tdWx0aVBvaW50KFtbNDAsIDMwXSwgWzM2LCA1M11dLCB7aGVsbG86ICd3b3JsZCd9KVxuICogXSk7XG4gKlxuICogdHVyZi5mbGF0dGVuRWFjaChmZWF0dXJlcywgZnVuY3Rpb24gKGN1cnJlbnRGZWF0dXJlLCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4KSB7XG4gKiAgIC8vPWN1cnJlbnRGZWF0dXJlXG4gKiAgIC8vPWZlYXR1cmVJbmRleFxuICogICAvLz1tdWx0aUZlYXR1cmVJbmRleFxuICogfSk7XG4gKi9cbmZ1bmN0aW9uIGZsYXR0ZW5FYWNoKGdlb2pzb24sIGNhbGxiYWNrKSB7XG4gICAgZ2VvbUVhY2goZ2VvanNvbiwgZnVuY3Rpb24gKGdlb21ldHJ5LCBmZWF0dXJlSW5kZXgsIHByb3BlcnRpZXMsIGJib3gsIGlkKSB7XG4gICAgICAgIC8vIENhbGxiYWNrIGZvciBzaW5nbGUgZ2VvbWV0cnlcbiAgICAgICAgdmFyIHR5cGUgPSAoZ2VvbWV0cnkgPT09IG51bGwpID8gbnVsbCA6IGdlb21ldHJ5LnR5cGU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgIGNhc2UgJ1BvaW50JzpcbiAgICAgICAgY2FzZSAnTGluZVN0cmluZyc6XG4gICAgICAgIGNhc2UgJ1BvbHlnb24nOlxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGhlbHBlcnMuZmVhdHVyZShnZW9tZXRyeSwgcHJvcGVydGllcywge2Jib3g6IGJib3gsIGlkOiBpZH0pLCBmZWF0dXJlSW5kZXgsIDApID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGdlb21UeXBlO1xuXG4gICAgICAgIC8vIENhbGxiYWNrIGZvciBtdWx0aS1nZW9tZXRyeVxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnTXVsdGlQb2ludCc6XG4gICAgICAgICAgICBnZW9tVHlwZSA9ICdQb2ludCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTXVsdGlMaW5lU3RyaW5nJzpcbiAgICAgICAgICAgIGdlb21UeXBlID0gJ0xpbmVTdHJpbmcnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ011bHRpUG9seWdvbic6XG4gICAgICAgICAgICBnZW9tVHlwZSA9ICdQb2x5Z29uJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgbXVsdGlGZWF0dXJlSW5kZXggPSAwOyBtdWx0aUZlYXR1cmVJbmRleCA8IGdlb21ldHJ5LmNvb3JkaW5hdGVzLmxlbmd0aDsgbXVsdGlGZWF0dXJlSW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIGNvb3JkaW5hdGUgPSBnZW9tZXRyeS5jb29yZGluYXRlc1ttdWx0aUZlYXR1cmVJbmRleF07XG4gICAgICAgICAgICB2YXIgZ2VvbSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBnZW9tVHlwZSxcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayhoZWxwZXJzLmZlYXR1cmUoZ2VvbSwgcHJvcGVydGllcyksIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIGZsYXR0ZW5SZWR1Y2VcbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgdmFsdWVzIHByb3ZpZGVkIGFzIGFyZ3VtZW50cyBkZXBlbmRcbiAqIG9uIHdoZXRoZXIgdGhlIHJlZHVjZSBtZXRob2QgaGFzIGFuIGluaXRpYWxWYWx1ZSBhcmd1bWVudC5cbiAqXG4gKiBJZiBhbiBpbml0aWFsVmFsdWUgaXMgcHJvdmlkZWQgdG8gdGhlIHJlZHVjZSBtZXRob2Q6XG4gKiAgLSBUaGUgcHJldmlvdXNWYWx1ZSBhcmd1bWVudCBpcyBpbml0aWFsVmFsdWUuXG4gKiAgLSBUaGUgY3VycmVudFZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqXG4gKiBJZiBhbiBpbml0aWFsVmFsdWUgaXMgbm90IHByb3ZpZGVkOlxuICogIC0gVGhlIHByZXZpb3VzVmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICogIC0gVGhlIGN1cnJlbnRWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICpcbiAqIEBjYWxsYmFjayBmbGF0dGVuUmVkdWNlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXNWYWx1ZSBUaGUgYWNjdW11bGF0ZWQgdmFsdWUgcHJldmlvdXNseSByZXR1cm5lZCBpbiB0aGUgbGFzdCBpbnZvY2F0aW9uXG4gKiBvZiB0aGUgY2FsbGJhY2ssIG9yIGluaXRpYWxWYWx1ZSwgaWYgc3VwcGxpZWQuXG4gKiBAcGFyYW0ge0ZlYXR1cmV9IGN1cnJlbnRGZWF0dXJlIFRoZSBjdXJyZW50IEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbXVsdGlGZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIE11bHRpLUZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICovXG5cbi8qKlxuICogUmVkdWNlIGZsYXR0ZW5lZCBmZWF0dXJlcyBpbiBhbnkgR2VvSlNPTiBvYmplY3QsIHNpbWlsYXIgdG8gQXJyYXkucmVkdWNlKCkuXG4gKlxuICogQG5hbWUgZmxhdHRlblJlZHVjZVxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIGFueSBHZW9KU09OIG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAocHJldmlvdXNWYWx1ZSwgY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgpXG4gKiBAcGFyYW0geyp9IFtpbml0aWFsVmFsdWVdIFZhbHVlIHRvIHVzZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGZpcnN0IGNhbGwgb2YgdGhlIGNhbGxiYWNrLlxuICogQHJldHVybnMgeyp9IFRoZSB2YWx1ZSB0aGF0IHJlc3VsdHMgZnJvbSB0aGUgcmVkdWN0aW9uLlxuICogQGV4YW1wbGVcbiAqIHZhciBmZWF0dXJlcyA9IHR1cmYuZmVhdHVyZUNvbGxlY3Rpb24oW1xuICogICAgIHR1cmYucG9pbnQoWzI2LCAzN10sIHtmb286ICdiYXInfSksXG4gKiAgICAgdHVyZi5tdWx0aVBvaW50KFtbNDAsIDMwXSwgWzM2LCA1M11dLCB7aGVsbG86ICd3b3JsZCd9KVxuICogXSk7XG4gKlxuICogdHVyZi5mbGF0dGVuUmVkdWNlKGZlYXR1cmVzLCBmdW5jdGlvbiAocHJldmlvdXNWYWx1ZSwgY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgpIHtcbiAqICAgLy89cHJldmlvdXNWYWx1ZVxuICogICAvLz1jdXJyZW50RmVhdHVyZVxuICogICAvLz1mZWF0dXJlSW5kZXhcbiAqICAgLy89bXVsdGlGZWF0dXJlSW5kZXhcbiAqICAgcmV0dXJuIGN1cnJlbnRGZWF0dXJlXG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gZmxhdHRlblJlZHVjZShnZW9qc29uLCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgZmxhdHRlbkVhY2goZ2VvanNvbiwgZnVuY3Rpb24gKGN1cnJlbnRGZWF0dXJlLCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4KSB7XG4gICAgICAgIGlmIChmZWF0dXJlSW5kZXggPT09IDAgJiYgbXVsdGlGZWF0dXJlSW5kZXggPT09IDAgJiYgaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQpIHByZXZpb3VzVmFsdWUgPSBjdXJyZW50RmVhdHVyZTtcbiAgICAgICAgZWxzZSBwcmV2aW91c1ZhbHVlID0gY2FsbGJhY2socHJldmlvdXNWYWx1ZSwgY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgpO1xuICAgIH0pO1xuICAgIHJldHVybiBwcmV2aW91c1ZhbHVlO1xufVxuXG4vKipcbiAqIENhbGxiYWNrIGZvciBzZWdtZW50RWFjaFxuICpcbiAqIEBjYWxsYmFjayBzZWdtZW50RWFjaENhbGxiYWNrXG4gKiBAcGFyYW0ge0ZlYXR1cmU8TGluZVN0cmluZz59IGN1cnJlbnRTZWdtZW50IFRoZSBjdXJyZW50IFNlZ21lbnQgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbXVsdGlGZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIE11bHRpLUZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGdlb21ldHJ5SW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEdlb21ldHJ5IGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzZWdtZW50SW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIFNlZ21lbnQgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgMi12ZXJ0ZXggbGluZSBzZWdtZW50IGluIGFueSBHZW9KU09OIG9iamVjdCwgc2ltaWxhciB0byBBcnJheS5mb3JFYWNoKClcbiAqIChNdWx0aSlQb2ludCBnZW9tZXRyaWVzIGRvIG5vdCBjb250YWluIHNlZ21lbnRzIHRoZXJlZm9yZSB0aGV5IGFyZSBpZ25vcmVkIGR1cmluZyB0aGlzIG9wZXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV8R2VvbWV0cnl9IGdlb2pzb24gYW55IEdlb0pTT05cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGEgbWV0aG9kIHRoYXQgdGFrZXMgKGN1cnJlbnRTZWdtZW50LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4LCBzZWdtZW50SW5kZXgpXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBleGFtcGxlXG4gKiB2YXIgcG9seWdvbiA9IHR1cmYucG9seWdvbihbW1stNTAsIDVdLCBbLTQwLCAtMTBdLCBbLTUwLCAtMTBdLCBbLTQwLCA1XSwgWy01MCwgNV1dXSk7XG4gKlxuICogLy8gSXRlcmF0ZSBvdmVyIEdlb0pTT04gYnkgMi12ZXJ0ZXggc2VnbWVudHNcbiAqIHR1cmYuc2VnbWVudEVhY2gocG9seWdvbiwgZnVuY3Rpb24gKGN1cnJlbnRTZWdtZW50LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4LCBzZWdtZW50SW5kZXgpIHtcbiAqICAgLy89Y3VycmVudFNlZ21lbnRcbiAqICAgLy89ZmVhdHVyZUluZGV4XG4gKiAgIC8vPW11bHRpRmVhdHVyZUluZGV4XG4gKiAgIC8vPWdlb21ldHJ5SW5kZXhcbiAqICAgLy89c2VnbWVudEluZGV4XG4gKiB9KTtcbiAqXG4gKiAvLyBDYWxjdWxhdGUgdGhlIHRvdGFsIG51bWJlciBvZiBzZWdtZW50c1xuICogdmFyIHRvdGFsID0gMDtcbiAqIHR1cmYuc2VnbWVudEVhY2gocG9seWdvbiwgZnVuY3Rpb24gKCkge1xuICogICAgIHRvdGFsKys7XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gc2VnbWVudEVhY2goZ2VvanNvbiwgY2FsbGJhY2spIHtcbiAgICBmbGF0dGVuRWFjaChnZW9qc29uLCBmdW5jdGlvbiAoZmVhdHVyZSwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCkge1xuICAgICAgICB2YXIgc2VnbWVudEluZGV4ID0gMDtcblxuICAgICAgICAvLyBFeGNsdWRlIG51bGwgR2VvbWV0cmllc1xuICAgICAgICBpZiAoIWZlYXR1cmUuZ2VvbWV0cnkpIHJldHVybjtcbiAgICAgICAgLy8gKE11bHRpKVBvaW50IGdlb21ldHJpZXMgZG8gbm90IGNvbnRhaW4gc2VnbWVudHMgdGhlcmVmb3JlIHRoZXkgYXJlIGlnbm9yZWQgZHVyaW5nIHRoaXMgb3BlcmF0aW9uLlxuICAgICAgICB2YXIgdHlwZSA9IGZlYXR1cmUuZ2VvbWV0cnkudHlwZTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdQb2ludCcgfHwgdHlwZSA9PT0gJ011bHRpUG9pbnQnKSByZXR1cm47XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgMi12ZXJ0ZXggbGluZSBzZWdtZW50c1xuICAgICAgICB2YXIgcHJldmlvdXNDb29yZHM7XG4gICAgICAgIHZhciBwcmV2aW91c0ZlYXR1cmVJbmRleCA9IDA7XG4gICAgICAgIHZhciBwcmV2aW91c011bHRpSW5kZXggPSAwO1xuICAgICAgICB2YXIgcHJldkdlb21JbmRleCA9IDA7XG4gICAgICAgIGlmIChjb29yZEVhY2goZmVhdHVyZSwgZnVuY3Rpb24gKGN1cnJlbnRDb29yZCwgY29vcmRJbmRleCwgZmVhdHVyZUluZGV4Q29vcmQsIG11bHRpUGFydEluZGV4Q29vcmQsIGdlb21ldHJ5SW5kZXgpIHtcbiAgICAgICAgICAgIC8vIFNpbXVsYXRpbmcgYSBtZXRhLmNvb3JkUmVkdWNlKCkgc2luY2UgYHJlZHVjZWAgb3BlcmF0aW9ucyBjYW5ub3QgYmUgc3RvcHBlZCBieSByZXR1cm5pbmcgYGZhbHNlYFxuICAgICAgICAgICAgaWYgKHByZXZpb3VzQ29vcmRzID09PSB1bmRlZmluZWQgfHwgZmVhdHVyZUluZGV4ID4gcHJldmlvdXNGZWF0dXJlSW5kZXggfHwgbXVsdGlQYXJ0SW5kZXhDb29yZCA+IHByZXZpb3VzTXVsdGlJbmRleCB8fCBnZW9tZXRyeUluZGV4ID4gcHJldkdlb21JbmRleCkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzQ29vcmRzID0gY3VycmVudENvb3JkO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzRmVhdHVyZUluZGV4ID0gZmVhdHVyZUluZGV4O1xuICAgICAgICAgICAgICAgIHByZXZpb3VzTXVsdGlJbmRleCA9IG11bHRpUGFydEluZGV4Q29vcmQ7XG4gICAgICAgICAgICAgICAgcHJldkdlb21JbmRleCA9IGdlb21ldHJ5SW5kZXg7XG4gICAgICAgICAgICAgICAgc2VnbWVudEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY3VycmVudFNlZ21lbnQgPSBoZWxwZXJzLmxpbmVTdHJpbmcoW3ByZXZpb3VzQ29vcmRzLCBjdXJyZW50Q29vcmRdLCBmZWF0dXJlLnByb3BlcnRpZXMpO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGN1cnJlbnRTZWdtZW50LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4LCBzZWdtZW50SW5kZXgpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgc2VnbWVudEluZGV4Kys7XG4gICAgICAgICAgICBwcmV2aW91c0Nvb3JkcyA9IGN1cnJlbnRDb29yZDtcbiAgICAgICAgfSkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG59XG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIHNlZ21lbnRSZWR1Y2VcbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgdmFsdWVzIHByb3ZpZGVkIGFzIGFyZ3VtZW50cyBkZXBlbmRcbiAqIG9uIHdoZXRoZXIgdGhlIHJlZHVjZSBtZXRob2QgaGFzIGFuIGluaXRpYWxWYWx1ZSBhcmd1bWVudC5cbiAqXG4gKiBJZiBhbiBpbml0aWFsVmFsdWUgaXMgcHJvdmlkZWQgdG8gdGhlIHJlZHVjZSBtZXRob2Q6XG4gKiAgLSBUaGUgcHJldmlvdXNWYWx1ZSBhcmd1bWVudCBpcyBpbml0aWFsVmFsdWUuXG4gKiAgLSBUaGUgY3VycmVudFZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqXG4gKiBJZiBhbiBpbml0aWFsVmFsdWUgaXMgbm90IHByb3ZpZGVkOlxuICogIC0gVGhlIHByZXZpb3VzVmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICogIC0gVGhlIGN1cnJlbnRWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICpcbiAqIEBjYWxsYmFjayBzZWdtZW50UmVkdWNlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXNWYWx1ZSBUaGUgYWNjdW11bGF0ZWQgdmFsdWUgcHJldmlvdXNseSByZXR1cm5lZCBpbiB0aGUgbGFzdCBpbnZvY2F0aW9uXG4gKiBvZiB0aGUgY2FsbGJhY2ssIG9yIGluaXRpYWxWYWx1ZSwgaWYgc3VwcGxpZWQuXG4gKiBAcGFyYW0ge0ZlYXR1cmU8TGluZVN0cmluZz59IGN1cnJlbnRTZWdtZW50IFRoZSBjdXJyZW50IFNlZ21lbnQgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbXVsdGlGZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIE11bHRpLUZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGdlb21ldHJ5SW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEdlb21ldHJ5IGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzZWdtZW50SW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIFNlZ21lbnQgYmVpbmcgcHJvY2Vzc2VkLlxuICovXG5cbi8qKlxuICogUmVkdWNlIDItdmVydGV4IGxpbmUgc2VnbWVudCBpbiBhbnkgR2VvSlNPTiBvYmplY3QsIHNpbWlsYXIgdG8gQXJyYXkucmVkdWNlKClcbiAqIChNdWx0aSlQb2ludCBnZW9tZXRyaWVzIGRvIG5vdCBjb250YWluIHNlZ21lbnRzIHRoZXJlZm9yZSB0aGV5IGFyZSBpZ25vcmVkIGR1cmluZyB0aGlzIG9wZXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV8R2VvbWV0cnl9IGdlb2pzb24gYW55IEdlb0pTT05cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGEgbWV0aG9kIHRoYXQgdGFrZXMgKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRTZWdtZW50LCBjdXJyZW50SW5kZXgpXG4gKiBAcGFyYW0geyp9IFtpbml0aWFsVmFsdWVdIFZhbHVlIHRvIHVzZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGZpcnN0IGNhbGwgb2YgdGhlIGNhbGxiYWNrLlxuICogQHJldHVybnMge3ZvaWR9XG4gKiBAZXhhbXBsZVxuICogdmFyIHBvbHlnb24gPSB0dXJmLnBvbHlnb24oW1tbLTUwLCA1XSwgWy00MCwgLTEwXSwgWy01MCwgLTEwXSwgWy00MCwgNV0sIFstNTAsIDVdXV0pO1xuICpcbiAqIC8vIEl0ZXJhdGUgb3ZlciBHZW9KU09OIGJ5IDItdmVydGV4IHNlZ21lbnRzXG4gKiB0dXJmLnNlZ21lbnRSZWR1Y2UocG9seWdvbiwgZnVuY3Rpb24gKHByZXZpb3VzU2VnbWVudCwgY3VycmVudFNlZ21lbnQsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgsIHNlZ21lbnRJbmRleCkge1xuICogICAvLz0gcHJldmlvdXNTZWdtZW50XG4gKiAgIC8vPSBjdXJyZW50U2VnbWVudFxuICogICAvLz0gZmVhdHVyZUluZGV4XG4gKiAgIC8vPSBtdWx0aUZlYXR1cmVJbmRleFxuICogICAvLz0gZ2VvbWV0cnlJbmRleFxuICogICAvLz0gc2VnbWVudEluZXhcbiAqICAgcmV0dXJuIGN1cnJlbnRTZWdtZW50XG4gKiB9KTtcbiAqXG4gKiAvLyBDYWxjdWxhdGUgdGhlIHRvdGFsIG51bWJlciBvZiBzZWdtZW50c1xuICogdmFyIGluaXRpYWxWYWx1ZSA9IDBcbiAqIHZhciB0b3RhbCA9IHR1cmYuc2VnbWVudFJlZHVjZShwb2x5Z29uLCBmdW5jdGlvbiAocHJldmlvdXNWYWx1ZSkge1xuICogICAgIHByZXZpb3VzVmFsdWUrKztcbiAqICAgICByZXR1cm4gcHJldmlvdXNWYWx1ZTtcbiAqIH0sIGluaXRpYWxWYWx1ZSk7XG4gKi9cbmZ1bmN0aW9uIHNlZ21lbnRSZWR1Y2UoZ2VvanNvbiwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHZhciBwcmV2aW91c1ZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgIHZhciBzdGFydGVkID0gZmFsc2U7XG4gICAgc2VnbWVudEVhY2goZ2VvanNvbiwgZnVuY3Rpb24gKGN1cnJlbnRTZWdtZW50LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4LCBzZWdtZW50SW5kZXgpIHtcbiAgICAgICAgaWYgKHN0YXJ0ZWQgPT09IGZhbHNlICYmIGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkKSBwcmV2aW91c1ZhbHVlID0gY3VycmVudFNlZ21lbnQ7XG4gICAgICAgIGVsc2UgcHJldmlvdXNWYWx1ZSA9IGNhbGxiYWNrKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRTZWdtZW50LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4LCBzZWdtZW50SW5kZXgpO1xuICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZTtcbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgbGluZUVhY2hcbiAqXG4gKiBAY2FsbGJhY2sgbGluZUVhY2hDYWxsYmFja1xuICogQHBhcmFtIHtGZWF0dXJlPExpbmVTdHJpbmc+fSBjdXJyZW50TGluZSBUaGUgY3VycmVudCBMaW5lU3RyaW5nfExpbmVhclJpbmcgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge251bWJlcn0gZmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBGZWF0dXJlIGJlaW5nIHByb2Nlc3NlZFxuICogQHBhcmFtIHtudW1iZXJ9IG11bHRpRmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBNdWx0aS1GZWF0dXJlIGJlaW5nIHByb2Nlc3NlZFxuICogQHBhcmFtIHtudW1iZXJ9IGdlb21ldHJ5SW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEdlb21ldHJ5IGJlaW5nIHByb2Nlc3NlZFxuICovXG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGxpbmUgb3IgcmluZyBjb29yZGluYXRlcyBpbiBMaW5lU3RyaW5nLCBQb2x5Z29uLCBNdWx0aUxpbmVTdHJpbmcsIE11bHRpUG9seWdvbiBGZWF0dXJlcyBvciBHZW9tZXRyaWVzLFxuICogc2ltaWxhciB0byBBcnJheS5mb3JFYWNoLlxuICpcbiAqIEBuYW1lIGxpbmVFYWNoXG4gKiBAcGFyYW0ge0dlb21ldHJ5fEZlYXR1cmU8TGluZVN0cmluZ3xQb2x5Z29ufE11bHRpTGluZVN0cmluZ3xNdWx0aVBvbHlnb24+fSBnZW9qc29uIG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAoY3VycmVudExpbmUsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgpXG4gKiBAZXhhbXBsZVxuICogdmFyIG11bHRpTGluZSA9IHR1cmYubXVsdGlMaW5lU3RyaW5nKFtcbiAqICAgW1syNiwgMzddLCBbMzUsIDQ1XV0sXG4gKiAgIFtbMzYsIDUzXSwgWzM4LCA1MF0sIFs0MSwgNTVdXVxuICogXSk7XG4gKlxuICogdHVyZi5saW5lRWFjaChtdWx0aUxpbmUsIGZ1bmN0aW9uIChjdXJyZW50TGluZSwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCwgZ2VvbWV0cnlJbmRleCkge1xuICogICAvLz1jdXJyZW50TGluZVxuICogICAvLz1mZWF0dXJlSW5kZXhcbiAqICAgLy89bXVsdGlGZWF0dXJlSW5kZXhcbiAqICAgLy89Z2VvbWV0cnlJbmRleFxuICogfSk7XG4gKi9cbmZ1bmN0aW9uIGxpbmVFYWNoKGdlb2pzb24sIGNhbGxiYWNrKSB7XG4gICAgLy8gdmFsaWRhdGlvblxuICAgIGlmICghZ2VvanNvbikgdGhyb3cgbmV3IEVycm9yKCdnZW9qc29uIGlzIHJlcXVpcmVkJyk7XG5cbiAgICBmbGF0dGVuRWFjaChnZW9qc29uLCBmdW5jdGlvbiAoZmVhdHVyZSwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCkge1xuICAgICAgICBpZiAoZmVhdHVyZS5nZW9tZXRyeSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB2YXIgdHlwZSA9IGZlYXR1cmUuZ2VvbWV0cnkudHlwZTtcbiAgICAgICAgdmFyIGNvb3JkcyA9IGZlYXR1cmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdMaW5lU3RyaW5nJzpcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayhmZWF0dXJlLCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCAwLCAwKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQb2x5Z29uJzpcbiAgICAgICAgICAgIGZvciAodmFyIGdlb21ldHJ5SW5kZXggPSAwOyBnZW9tZXRyeUluZGV4IDwgY29vcmRzLmxlbmd0aDsgZ2VvbWV0cnlJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGhlbHBlcnMubGluZVN0cmluZyhjb29yZHNbZ2VvbWV0cnlJbmRleF0sIGZlYXR1cmUucHJvcGVydGllcyksIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgbGluZVJlZHVjZVxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYXMgYXJndW1lbnRzIGRlcGVuZFxuICogb24gd2hldGhlciB0aGUgcmVkdWNlIG1ldGhvZCBoYXMgYW4gaW5pdGlhbFZhbHVlIGFyZ3VtZW50LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBwcm92aWRlZCB0byB0aGUgcmVkdWNlIG1ldGhvZDpcbiAqICAtIFRoZSBwcmV2aW91c1ZhbHVlIGFyZ3VtZW50IGlzIGluaXRpYWxWYWx1ZS5cbiAqICAtIFRoZSBjdXJyZW50VmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBub3QgcHJvdmlkZWQ6XG4gKiAgLSBUaGUgcHJldmlvdXNWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKiAgLSBUaGUgY3VycmVudFZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kIGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKlxuICogQGNhbGxiYWNrIGxpbmVSZWR1Y2VDYWxsYmFja1xuICogQHBhcmFtIHsqfSBwcmV2aW91c1ZhbHVlIFRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBwcmV2aW91c2x5IHJldHVybmVkIGluIHRoZSBsYXN0IGludm9jYXRpb25cbiAqIG9mIHRoZSBjYWxsYmFjaywgb3IgaW5pdGlhbFZhbHVlLCBpZiBzdXBwbGllZC5cbiAqIEBwYXJhbSB7RmVhdHVyZTxMaW5lU3RyaW5nPn0gY3VycmVudExpbmUgVGhlIGN1cnJlbnQgTGluZVN0cmluZ3xMaW5lYXJSaW5nIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge251bWJlcn0gbXVsdGlGZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIE11bHRpLUZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge251bWJlcn0gZ2VvbWV0cnlJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgR2VvbWV0cnkgYmVpbmcgcHJvY2Vzc2VkXG4gKi9cblxuLyoqXG4gKiBSZWR1Y2UgZmVhdHVyZXMgaW4gYW55IEdlb0pTT04gb2JqZWN0LCBzaW1pbGFyIHRvIEFycmF5LnJlZHVjZSgpLlxuICpcbiAqIEBuYW1lIGxpbmVSZWR1Y2VcbiAqIEBwYXJhbSB7R2VvbWV0cnl8RmVhdHVyZTxMaW5lU3RyaW5nfFBvbHlnb258TXVsdGlMaW5lU3RyaW5nfE11bHRpUG9seWdvbj59IGdlb2pzb24gb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50TGluZSwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCwgZ2VvbWV0cnlJbmRleClcbiAqIEBwYXJhbSB7Kn0gW2luaXRpYWxWYWx1ZV0gVmFsdWUgdG8gdXNlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgZmlyc3QgY2FsbCBvZiB0aGUgY2FsbGJhY2suXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHZhbHVlIHRoYXQgcmVzdWx0cyBmcm9tIHRoZSByZWR1Y3Rpb24uXG4gKiBAZXhhbXBsZVxuICogdmFyIG11bHRpUG9seSA9IHR1cmYubXVsdGlQb2x5Z29uKFtcbiAqICAgdHVyZi5wb2x5Z29uKFtbWzEyLDQ4XSxbMiw0MV0sWzI0LDM4XSxbMTIsNDhdXSwgW1s5LDQ0XSxbMTMsNDFdLFsxMyw0NV0sWzksNDRdXV0pLFxuICogICB0dXJmLnBvbHlnb24oW1tbNSwgNV0sIFswLCAwXSwgWzIsIDJdLCBbNCwgNF0sIFs1LCA1XV1dKVxuICogXSk7XG4gKlxuICogdHVyZi5saW5lUmVkdWNlKG11bHRpUG9seSwgZnVuY3Rpb24gKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRMaW5lLCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4KSB7XG4gKiAgIC8vPXByZXZpb3VzVmFsdWVcbiAqICAgLy89Y3VycmVudExpbmVcbiAqICAgLy89ZmVhdHVyZUluZGV4XG4gKiAgIC8vPW11bHRpRmVhdHVyZUluZGV4XG4gKiAgIC8vPWdlb21ldHJ5SW5kZXhcbiAqICAgcmV0dXJuIGN1cnJlbnRMaW5lXG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gbGluZVJlZHVjZShnZW9qc29uLCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgbGluZUVhY2goZ2VvanNvbiwgZnVuY3Rpb24gKGN1cnJlbnRMaW5lLCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4KSB7XG4gICAgICAgIGlmIChmZWF0dXJlSW5kZXggPT09IDAgJiYgaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQpIHByZXZpb3VzVmFsdWUgPSBjdXJyZW50TGluZTtcbiAgICAgICAgZWxzZSBwcmV2aW91c1ZhbHVlID0gY2FsbGJhY2socHJldmlvdXNWYWx1ZSwgY3VycmVudExpbmUsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgpO1xuICAgIH0pO1xuICAgIHJldHVybiBwcmV2aW91c1ZhbHVlO1xufVxuXG4vKipcbiAqIEZpbmRzIGEgcGFydGljdWxhciAyLXZlcnRleCBMaW5lU3RyaW5nIFNlZ21lbnQgZnJvbSBhIEdlb0pTT04gdXNpbmcgYEB0dXJmL21ldGFgIGluZGV4ZXMuXG4gKlxuICogTmVnYXRpdmUgaW5kZXhlcyBhcmUgcGVybWl0dGVkLlxuICogUG9pbnQgJiBNdWx0aVBvaW50IHdpbGwgYWx3YXlzIHJldHVybiBudWxsLlxuICpcbiAqIEBwYXJhbSB7RmVhdHVyZUNvbGxlY3Rpb258RmVhdHVyZXxHZW9tZXRyeX0gZ2VvanNvbiBBbnkgR2VvSlNPTiBGZWF0dXJlIG9yIEdlb21ldHJ5XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5mZWF0dXJlSW5kZXg9MF0gRmVhdHVyZSBJbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm11bHRpRmVhdHVyZUluZGV4PTBdIE11bHRpLUZlYXR1cmUgSW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5nZW9tZXRyeUluZGV4PTBdIEdlb21ldHJ5IEluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuc2VnbWVudEluZGV4PTBdIFNlZ21lbnQgSW5kZXhcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wcm9wZXJ0aWVzPXt9XSBUcmFuc2xhdGUgUHJvcGVydGllcyB0byBvdXRwdXQgTGluZVN0cmluZ1xuICogQHBhcmFtIHtCQm94fSBbb3B0aW9ucy5iYm94PXt9XSBUcmFuc2xhdGUgQkJveCB0byBvdXRwdXQgTGluZVN0cmluZ1xuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBbb3B0aW9ucy5pZD17fV0gVHJhbnNsYXRlIElkIHRvIG91dHB1dCBMaW5lU3RyaW5nXG4gKiBAcmV0dXJucyB7RmVhdHVyZTxMaW5lU3RyaW5nPn0gMi12ZXJ0ZXggR2VvSlNPTiBGZWF0dXJlIExpbmVTdHJpbmdcbiAqIEBleGFtcGxlXG4gKiB2YXIgbXVsdGlMaW5lID0gdHVyZi5tdWx0aUxpbmVTdHJpbmcoW1xuICogICAgIFtbMTAsIDEwXSwgWzUwLCAzMF0sIFszMCwgNDBdXSxcbiAqICAgICBbWy0xMCwgLTEwXSwgWy01MCwgLTMwXSwgWy0zMCwgLTQwXV1cbiAqIF0pO1xuICpcbiAqIC8vIEZpcnN0IFNlZ21lbnQgKGRlZmF1bHRzIGFyZSAwKVxuICogdHVyZi5maW5kU2VnbWVudChtdWx0aUxpbmUpO1xuICogLy8gPT4gRmVhdHVyZTxMaW5lU3RyaW5nPFtbMTAsIDEwXSwgWzUwLCAzMF1dPj5cbiAqXG4gKiAvLyBGaXJzdCBTZWdtZW50IG9mIDJuZCBNdWx0aSBGZWF0dXJlXG4gKiB0dXJmLmZpbmRTZWdtZW50KG11bHRpTGluZSwge211bHRpRmVhdHVyZUluZGV4OiAxfSk7XG4gKiAvLyA9PiBGZWF0dXJlPExpbmVTdHJpbmc8W1stMTAsIC0xMF0sIFstNTAsIC0zMF1dPj5cbiAqXG4gKiAvLyBMYXN0IFNlZ21lbnQgb2YgTGFzdCBNdWx0aSBGZWF0dXJlXG4gKiB0dXJmLmZpbmRTZWdtZW50KG11bHRpTGluZSwge211bHRpRmVhdHVyZUluZGV4OiAtMSwgc2VnbWVudEluZGV4OiAtMX0pO1xuICogLy8gPT4gRmVhdHVyZTxMaW5lU3RyaW5nPFtbLTUwLCAtMzBdLCBbLTMwLCAtNDBdXT4+XG4gKi9cbmZ1bmN0aW9uIGZpbmRTZWdtZW50KGdlb2pzb24sIG9wdGlvbnMpIHtcbiAgICAvLyBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKCFoZWxwZXJzLmlzT2JqZWN0KG9wdGlvbnMpKSB0aHJvdyBuZXcgRXJyb3IoJ29wdGlvbnMgaXMgaW52YWxpZCcpO1xuICAgIHZhciBmZWF0dXJlSW5kZXggPSBvcHRpb25zLmZlYXR1cmVJbmRleCB8fCAwO1xuICAgIHZhciBtdWx0aUZlYXR1cmVJbmRleCA9IG9wdGlvbnMubXVsdGlGZWF0dXJlSW5kZXggfHwgMDtcbiAgICB2YXIgZ2VvbWV0cnlJbmRleCA9IG9wdGlvbnMuZ2VvbWV0cnlJbmRleCB8fCAwO1xuICAgIHZhciBzZWdtZW50SW5kZXggPSBvcHRpb25zLnNlZ21lbnRJbmRleCB8fCAwO1xuXG4gICAgLy8gRmluZCBGZWF0dXJlSW5kZXhcbiAgICB2YXIgcHJvcGVydGllcyA9IG9wdGlvbnMucHJvcGVydGllcztcbiAgICB2YXIgZ2VvbWV0cnk7XG5cbiAgICBzd2l0Y2ggKGdlb2pzb24udHlwZSkge1xuICAgIGNhc2UgJ0ZlYXR1cmVDb2xsZWN0aW9uJzpcbiAgICAgICAgaWYgKGZlYXR1cmVJbmRleCA8IDApIGZlYXR1cmVJbmRleCA9IGdlb2pzb24uZmVhdHVyZXMubGVuZ3RoICsgZmVhdHVyZUluZGV4O1xuICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCBnZW9qc29uLmZlYXR1cmVzW2ZlYXR1cmVJbmRleF0ucHJvcGVydGllcztcbiAgICAgICAgZ2VvbWV0cnkgPSBnZW9qc29uLmZlYXR1cmVzW2ZlYXR1cmVJbmRleF0uZ2VvbWV0cnk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0ZlYXR1cmUnOlxuICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCBnZW9qc29uLnByb3BlcnRpZXM7XG4gICAgICAgIGdlb21ldHJ5ID0gZ2VvanNvbi5nZW9tZXRyeTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUG9pbnQnOlxuICAgIGNhc2UgJ011bHRpUG9pbnQnOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBjYXNlICdMaW5lU3RyaW5nJzpcbiAgICBjYXNlICdQb2x5Z29uJzpcbiAgICBjYXNlICdNdWx0aUxpbmVTdHJpbmcnOlxuICAgIGNhc2UgJ011bHRpUG9seWdvbic6XG4gICAgICAgIGdlb21ldHJ5ID0gZ2VvanNvbjtcbiAgICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZW9qc29uIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICAvLyBGaW5kIFNlZ21lbnRJbmRleFxuICAgIGlmIChnZW9tZXRyeSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGNvb3JkcyA9IGdlb21ldHJ5LmNvb3JkaW5hdGVzO1xuICAgIHN3aXRjaCAoZ2VvbWV0cnkudHlwZSkge1xuICAgIGNhc2UgJ1BvaW50JzpcbiAgICBjYXNlICdNdWx0aVBvaW50JzpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgY2FzZSAnTGluZVN0cmluZyc6XG4gICAgICAgIGlmIChzZWdtZW50SW5kZXggPCAwKSBzZWdtZW50SW5kZXggPSBjb29yZHMubGVuZ3RoICsgc2VnbWVudEluZGV4IC0gMTtcbiAgICAgICAgcmV0dXJuIGhlbHBlcnMubGluZVN0cmluZyhbY29vcmRzW3NlZ21lbnRJbmRleF0sIGNvb3Jkc1tzZWdtZW50SW5kZXggKyAxXV0sIHByb3BlcnRpZXMsIG9wdGlvbnMpO1xuICAgIGNhc2UgJ1BvbHlnb24nOlxuICAgICAgICBpZiAoZ2VvbWV0cnlJbmRleCA8IDApIGdlb21ldHJ5SW5kZXggPSBjb29yZHMubGVuZ3RoICsgZ2VvbWV0cnlJbmRleDtcbiAgICAgICAgaWYgKHNlZ21lbnRJbmRleCA8IDApIHNlZ21lbnRJbmRleCA9IGNvb3Jkc1tnZW9tZXRyeUluZGV4XS5sZW5ndGggKyBzZWdtZW50SW5kZXggLSAxO1xuICAgICAgICByZXR1cm4gaGVscGVycy5saW5lU3RyaW5nKFtjb29yZHNbZ2VvbWV0cnlJbmRleF1bc2VnbWVudEluZGV4XSwgY29vcmRzW2dlb21ldHJ5SW5kZXhdW3NlZ21lbnRJbmRleCArIDFdXSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG4gICAgY2FzZSAnTXVsdGlMaW5lU3RyaW5nJzpcbiAgICAgICAgaWYgKG11bHRpRmVhdHVyZUluZGV4IDwgMCkgbXVsdGlGZWF0dXJlSW5kZXggPSBjb29yZHMubGVuZ3RoICsgbXVsdGlGZWF0dXJlSW5kZXg7XG4gICAgICAgIGlmIChzZWdtZW50SW5kZXggPCAwKSBzZWdtZW50SW5kZXggPSBjb29yZHNbbXVsdGlGZWF0dXJlSW5kZXhdLmxlbmd0aCArIHNlZ21lbnRJbmRleCAtIDE7XG4gICAgICAgIHJldHVybiBoZWxwZXJzLmxpbmVTdHJpbmcoW2Nvb3Jkc1ttdWx0aUZlYXR1cmVJbmRleF1bc2VnbWVudEluZGV4XSwgY29vcmRzW211bHRpRmVhdHVyZUluZGV4XVtzZWdtZW50SW5kZXggKyAxXV0sIHByb3BlcnRpZXMsIG9wdGlvbnMpO1xuICAgIGNhc2UgJ011bHRpUG9seWdvbic6XG4gICAgICAgIGlmIChtdWx0aUZlYXR1cmVJbmRleCA8IDApIG11bHRpRmVhdHVyZUluZGV4ID0gY29vcmRzLmxlbmd0aCArIG11bHRpRmVhdHVyZUluZGV4O1xuICAgICAgICBpZiAoZ2VvbWV0cnlJbmRleCA8IDApIGdlb21ldHJ5SW5kZXggPSBjb29yZHNbbXVsdGlGZWF0dXJlSW5kZXhdLmxlbmd0aCArIGdlb21ldHJ5SW5kZXg7XG4gICAgICAgIGlmIChzZWdtZW50SW5kZXggPCAwKSBzZWdtZW50SW5kZXggPSBjb29yZHNbbXVsdGlGZWF0dXJlSW5kZXhdW2dlb21ldHJ5SW5kZXhdLmxlbmd0aCAtIHNlZ21lbnRJbmRleCAtIDE7XG4gICAgICAgIHJldHVybiBoZWxwZXJzLmxpbmVTdHJpbmcoW2Nvb3Jkc1ttdWx0aUZlYXR1cmVJbmRleF1bZ2VvbWV0cnlJbmRleF1bc2VnbWVudEluZGV4XSwgY29vcmRzW211bHRpRmVhdHVyZUluZGV4XVtnZW9tZXRyeUluZGV4XVtzZWdtZW50SW5kZXggKyAxXV0sIHByb3BlcnRpZXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dlb2pzb24gaXMgaW52YWxpZCcpO1xufVxuXG4vKipcbiAqIEZpbmRzIGEgcGFydGljdWxhciBQb2ludCBmcm9tIGEgR2VvSlNPTiB1c2luZyBgQHR1cmYvbWV0YWAgaW5kZXhlcy5cbiAqXG4gKiBOZWdhdGl2ZSBpbmRleGVzIGFyZSBwZXJtaXR0ZWQuXG4gKlxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIEFueSBHZW9KU09OIEZlYXR1cmUgb3IgR2VvbWV0cnlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmZlYXR1cmVJbmRleD0wXSBGZWF0dXJlIEluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubXVsdGlGZWF0dXJlSW5kZXg9MF0gTXVsdGktRmVhdHVyZSBJbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmdlb21ldHJ5SW5kZXg9MF0gR2VvbWV0cnkgSW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5jb29yZEluZGV4PTBdIENvb3JkIEluZGV4XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucHJvcGVydGllcz17fV0gVHJhbnNsYXRlIFByb3BlcnRpZXMgdG8gb3V0cHV0IFBvaW50XG4gKiBAcGFyYW0ge0JCb3h9IFtvcHRpb25zLmJib3g9e31dIFRyYW5zbGF0ZSBCQm94IHRvIG91dHB1dCBQb2ludFxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBbb3B0aW9ucy5pZD17fV0gVHJhbnNsYXRlIElkIHRvIG91dHB1dCBQb2ludFxuICogQHJldHVybnMge0ZlYXR1cmU8UG9pbnQ+fSAyLXZlcnRleCBHZW9KU09OIEZlYXR1cmUgUG9pbnRcbiAqIEBleGFtcGxlXG4gKiB2YXIgbXVsdGlMaW5lID0gdHVyZi5tdWx0aUxpbmVTdHJpbmcoW1xuICogICAgIFtbMTAsIDEwXSwgWzUwLCAzMF0sIFszMCwgNDBdXSxcbiAqICAgICBbWy0xMCwgLTEwXSwgWy01MCwgLTMwXSwgWy0zMCwgLTQwXV1cbiAqIF0pO1xuICpcbiAqIC8vIEZpcnN0IFNlZ21lbnQgKGRlZmF1bHRzIGFyZSAwKVxuICogdHVyZi5maW5kUG9pbnQobXVsdGlMaW5lKTtcbiAqIC8vID0+IEZlYXR1cmU8UG9pbnQ8WzEwLCAxMF0+PlxuICpcbiAqIC8vIEZpcnN0IFNlZ21lbnQgb2YgdGhlIDJuZCBNdWx0aS1GZWF0dXJlXG4gKiB0dXJmLmZpbmRQb2ludChtdWx0aUxpbmUsIHttdWx0aUZlYXR1cmVJbmRleDogMX0pO1xuICogLy8gPT4gRmVhdHVyZTxQb2ludDxbLTEwLCAtMTBdPj5cbiAqXG4gKiAvLyBMYXN0IFNlZ21lbnQgb2YgbGFzdCBNdWx0aS1GZWF0dXJlXG4gKiB0dXJmLmZpbmRQb2ludChtdWx0aUxpbmUsIHttdWx0aUZlYXR1cmVJbmRleDogLTEsIGNvb3JkSW5kZXg6IC0xfSk7XG4gKiAvLyA9PiBGZWF0dXJlPFBvaW50PFstMzAsIC00MF0+PlxuICovXG5mdW5jdGlvbiBmaW5kUG9pbnQoZ2VvanNvbiwgb3B0aW9ucykge1xuICAgIC8vIE9wdGlvbmFsIFBhcmFtZXRlcnNcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIWhlbHBlcnMuaXNPYmplY3Qob3B0aW9ucykpIHRocm93IG5ldyBFcnJvcignb3B0aW9ucyBpcyBpbnZhbGlkJyk7XG4gICAgdmFyIGZlYXR1cmVJbmRleCA9IG9wdGlvbnMuZmVhdHVyZUluZGV4IHx8IDA7XG4gICAgdmFyIG11bHRpRmVhdHVyZUluZGV4ID0gb3B0aW9ucy5tdWx0aUZlYXR1cmVJbmRleCB8fCAwO1xuICAgIHZhciBnZW9tZXRyeUluZGV4ID0gb3B0aW9ucy5nZW9tZXRyeUluZGV4IHx8IDA7XG4gICAgdmFyIGNvb3JkSW5kZXggPSBvcHRpb25zLmNvb3JkSW5kZXggfHwgMDtcblxuICAgIC8vIEZpbmQgRmVhdHVyZUluZGV4XG4gICAgdmFyIHByb3BlcnRpZXMgPSBvcHRpb25zLnByb3BlcnRpZXM7XG4gICAgdmFyIGdlb21ldHJ5O1xuXG4gICAgc3dpdGNoIChnZW9qc29uLnR5cGUpIHtcbiAgICBjYXNlICdGZWF0dXJlQ29sbGVjdGlvbic6XG4gICAgICAgIGlmIChmZWF0dXJlSW5kZXggPCAwKSBmZWF0dXJlSW5kZXggPSBnZW9qc29uLmZlYXR1cmVzLmxlbmd0aCArIGZlYXR1cmVJbmRleDtcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwgZ2VvanNvbi5mZWF0dXJlc1tmZWF0dXJlSW5kZXhdLnByb3BlcnRpZXM7XG4gICAgICAgIGdlb21ldHJ5ID0gZ2VvanNvbi5mZWF0dXJlc1tmZWF0dXJlSW5kZXhdLmdlb21ldHJ5O1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICdGZWF0dXJlJzpcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwgZ2VvanNvbi5wcm9wZXJ0aWVzO1xuICAgICAgICBnZW9tZXRyeSA9IGdlb2pzb24uZ2VvbWV0cnk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BvaW50JzpcbiAgICBjYXNlICdNdWx0aVBvaW50JzpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgY2FzZSAnTGluZVN0cmluZyc6XG4gICAgY2FzZSAnUG9seWdvbic6XG4gICAgY2FzZSAnTXVsdGlMaW5lU3RyaW5nJzpcbiAgICBjYXNlICdNdWx0aVBvbHlnb24nOlxuICAgICAgICBnZW9tZXRyeSA9IGdlb2pzb247XG4gICAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2VvanNvbiBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgLy8gRmluZCBDb29yZCBJbmRleFxuICAgIGlmIChnZW9tZXRyeSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGNvb3JkcyA9IGdlb21ldHJ5LmNvb3JkaW5hdGVzO1xuICAgIHN3aXRjaCAoZ2VvbWV0cnkudHlwZSkge1xuICAgIGNhc2UgJ1BvaW50JzpcbiAgICAgICAgcmV0dXJuIGhlbHBlcnMucG9pbnQoY29vcmRzLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcbiAgICBjYXNlICdNdWx0aVBvaW50JzpcbiAgICAgICAgaWYgKG11bHRpRmVhdHVyZUluZGV4IDwgMCkgbXVsdGlGZWF0dXJlSW5kZXggPSBjb29yZHMubGVuZ3RoICsgbXVsdGlGZWF0dXJlSW5kZXg7XG4gICAgICAgIHJldHVybiBoZWxwZXJzLnBvaW50KGNvb3Jkc1ttdWx0aUZlYXR1cmVJbmRleF0sIHByb3BlcnRpZXMsIG9wdGlvbnMpO1xuICAgIGNhc2UgJ0xpbmVTdHJpbmcnOlxuICAgICAgICBpZiAoY29vcmRJbmRleCA8IDApIGNvb3JkSW5kZXggPSBjb29yZHMubGVuZ3RoICsgY29vcmRJbmRleDtcbiAgICAgICAgcmV0dXJuIGhlbHBlcnMucG9pbnQoY29vcmRzW2Nvb3JkSW5kZXhdLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcbiAgICBjYXNlICdQb2x5Z29uJzpcbiAgICAgICAgaWYgKGdlb21ldHJ5SW5kZXggPCAwKSBnZW9tZXRyeUluZGV4ID0gY29vcmRzLmxlbmd0aCArIGdlb21ldHJ5SW5kZXg7XG4gICAgICAgIGlmIChjb29yZEluZGV4IDwgMCkgY29vcmRJbmRleCA9IGNvb3Jkc1tnZW9tZXRyeUluZGV4XS5sZW5ndGggKyBjb29yZEluZGV4O1xuICAgICAgICByZXR1cm4gaGVscGVycy5wb2ludChjb29yZHNbZ2VvbWV0cnlJbmRleF1bY29vcmRJbmRleF0sIHByb3BlcnRpZXMsIG9wdGlvbnMpO1xuICAgIGNhc2UgJ011bHRpTGluZVN0cmluZyc6XG4gICAgICAgIGlmIChtdWx0aUZlYXR1cmVJbmRleCA8IDApIG11bHRpRmVhdHVyZUluZGV4ID0gY29vcmRzLmxlbmd0aCArIG11bHRpRmVhdHVyZUluZGV4O1xuICAgICAgICBpZiAoY29vcmRJbmRleCA8IDApIGNvb3JkSW5kZXggPSBjb29yZHNbbXVsdGlGZWF0dXJlSW5kZXhdLmxlbmd0aCArIGNvb3JkSW5kZXg7XG4gICAgICAgIHJldHVybiBoZWxwZXJzLnBvaW50KGNvb3Jkc1ttdWx0aUZlYXR1cmVJbmRleF1bY29vcmRJbmRleF0sIHByb3BlcnRpZXMsIG9wdGlvbnMpO1xuICAgIGNhc2UgJ011bHRpUG9seWdvbic6XG4gICAgICAgIGlmIChtdWx0aUZlYXR1cmVJbmRleCA8IDApIG11bHRpRmVhdHVyZUluZGV4ID0gY29vcmRzLmxlbmd0aCArIG11bHRpRmVhdHVyZUluZGV4O1xuICAgICAgICBpZiAoZ2VvbWV0cnlJbmRleCA8IDApIGdlb21ldHJ5SW5kZXggPSBjb29yZHNbbXVsdGlGZWF0dXJlSW5kZXhdLmxlbmd0aCArIGdlb21ldHJ5SW5kZXg7XG4gICAgICAgIGlmIChjb29yZEluZGV4IDwgMCkgY29vcmRJbmRleCA9IGNvb3Jkc1ttdWx0aUZlYXR1cmVJbmRleF1bZ2VvbWV0cnlJbmRleF0ubGVuZ3RoIC0gY29vcmRJbmRleDtcbiAgICAgICAgcmV0dXJuIGhlbHBlcnMucG9pbnQoY29vcmRzW211bHRpRmVhdHVyZUluZGV4XVtnZW9tZXRyeUluZGV4XVtjb29yZEluZGV4XSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignZ2VvanNvbiBpcyBpbnZhbGlkJyk7XG59XG5cbmV4cG9ydHMuY29vcmRFYWNoID0gY29vcmRFYWNoO1xuZXhwb3J0cy5jb29yZFJlZHVjZSA9IGNvb3JkUmVkdWNlO1xuZXhwb3J0cy5wcm9wRWFjaCA9IHByb3BFYWNoO1xuZXhwb3J0cy5wcm9wUmVkdWNlID0gcHJvcFJlZHVjZTtcbmV4cG9ydHMuZmVhdHVyZUVhY2ggPSBmZWF0dXJlRWFjaDtcbmV4cG9ydHMuZmVhdHVyZVJlZHVjZSA9IGZlYXR1cmVSZWR1Y2U7XG5leHBvcnRzLmNvb3JkQWxsID0gY29vcmRBbGw7XG5leHBvcnRzLmdlb21FYWNoID0gZ2VvbUVhY2g7XG5leHBvcnRzLmdlb21SZWR1Y2UgPSBnZW9tUmVkdWNlO1xuZXhwb3J0cy5mbGF0dGVuRWFjaCA9IGZsYXR0ZW5FYWNoO1xuZXhwb3J0cy5mbGF0dGVuUmVkdWNlID0gZmxhdHRlblJlZHVjZTtcbmV4cG9ydHMuc2VnbWVudEVhY2ggPSBzZWdtZW50RWFjaDtcbmV4cG9ydHMuc2VnbWVudFJlZHVjZSA9IHNlZ21lbnRSZWR1Y2U7XG5leHBvcnRzLmxpbmVFYWNoID0gbGluZUVhY2g7XG5leHBvcnRzLmxpbmVSZWR1Y2UgPSBsaW5lUmVkdWNlO1xuZXhwb3J0cy5maW5kU2VnbWVudCA9IGZpbmRTZWdtZW50O1xuZXhwb3J0cy5maW5kUG9pbnQgPSBmaW5kUG9pbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiQHR1cmYvaGVscGVyc1wiKTtcbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBwb3NpdGlvbiB3aXRoaW4gYSB7QGxpbmsgYm91bmRpbmcgYm94fS5cbiAqXG4gKiBAbmFtZSByYW5kb21Qb3NpdGlvblxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbYmJveD1bLTE4MCwgLTkwLCAxODAsIDkwXV0gYSBib3VuZGluZyBib3ggaW5zaWRlIG9mIHdoaWNoIHBvc2l0aW9ucyBhcmUgcGxhY2VkLlxuICogQHJldHVybnMge0FycmF5PG51bWJlcj59IFBvc2l0aW9uIFtsb25naXR1ZGUsIGxhdGl0dWRlXVxuICogQGV4YW1wbGVcbiAqIHZhciBwb3NpdGlvbiA9IHR1cmYucmFuZG9tUG9zaXRpb24oWy0xODAsIC05MCwgMTgwLCA5MF0pXG4gKiAvLyA9PiBwb3NpdGlvblxuICovXG5mdW5jdGlvbiByYW5kb21Qb3NpdGlvbihiYm94KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYmJveCkpIHtcbiAgICAgICAgcmV0dXJuIGNvb3JkSW5CQm94KGJib3gpO1xuICAgIH1cbiAgICBpZiAoYmJveCAmJiBiYm94LmJib3gpIHtcbiAgICAgICAgcmV0dXJuIGNvb3JkSW5CQm94KGJib3guYmJveCk7XG4gICAgfVxuICAgIHJldHVybiBbbG9uKCksIGxhdCgpXTtcbn1cbmV4cG9ydHMucmFuZG9tUG9zaXRpb24gPSByYW5kb21Qb3NpdGlvbjtcbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSB7QGxpbmsgcG9pbnR9LlxuICpcbiAqIEBuYW1lIHJhbmRvbVBvaW50XG4gKiBAcGFyYW0ge251bWJlcn0gW2NvdW50PTFdIGhvdyBtYW55IGdlb21ldHJpZXMgd2lsbCBiZSBnZW5lcmF0ZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3B0aW9ucy5iYm94PVstMTgwLCAtOTAsIDE4MCwgOTBdXSBhIGJvdW5kaW5nIGJveCBpbnNpZGUgb2Ygd2hpY2ggZ2VvbWV0cmllcyBhcmUgcGxhY2VkLlxuICogQHJldHVybnMge0ZlYXR1cmVDb2xsZWN0aW9uPFBvaW50Pn0gR2VvSlNPTiBGZWF0dXJlQ29sbGVjdGlvbiBvZiBwb2ludHNcbiAqIEBleGFtcGxlXG4gKiB2YXIgcG9pbnRzID0gdHVyZi5yYW5kb21Qb2ludCgyNSwge2Jib3g6IFstMTgwLCAtOTAsIDE4MCwgOTBdfSlcbiAqIC8vID0+IHBvaW50c1xuICovXG5mdW5jdGlvbiByYW5kb21Qb2ludChjb3VudCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgaWYgKGNvdW50ID09PSB1bmRlZmluZWQgfHwgY291bnQgPT09IG51bGwpIHtcbiAgICAgICAgY291bnQgPSAxO1xuICAgIH1cbiAgICB2YXIgZmVhdHVyZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgZmVhdHVyZXMucHVzaChoZWxwZXJzXzEucG9pbnQocmFuZG9tUG9zaXRpb24ob3B0aW9ucy5iYm94KSkpO1xuICAgIH1cbiAgICByZXR1cm4gaGVscGVyc18xLmZlYXR1cmVDb2xsZWN0aW9uKGZlYXR1cmVzKTtcbn1cbmV4cG9ydHMucmFuZG9tUG9pbnQgPSByYW5kb21Qb2ludDtcbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSB7QGxpbmsgcG9seWdvbn0uXG4gKlxuICogQG5hbWUgcmFuZG9tUG9seWdvblxuICogQHBhcmFtIHtudW1iZXJ9IFtjb3VudD0xXSBob3cgbWFueSBnZW9tZXRyaWVzIHdpbGwgYmUgZ2VuZXJhdGVkXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW29wdGlvbnMuYmJveD1bLTE4MCwgLTkwLCAxODAsIDkwXV0gYSBib3VuZGluZyBib3ggaW5zaWRlIG9mIHdoaWNoIGdlb21ldHJpZXMgYXJlIHBsYWNlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5udW1fdmVydGljZXM9MTBdIGlzIGhvdyBtYW55IGNvb3JkaW5hdGVzIGVhY2ggTGluZVN0cmluZyB3aWxsIGNvbnRhaW4uXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4X3JhZGlhbF9sZW5ndGg9MTBdIGlzIHRoZSBtYXhpbXVtIG51bWJlciBvZiBkZWNpbWFsIGRlZ3JlZXMgbGF0aXR1ZGUgb3IgbG9uZ2l0dWRlIHRoYXQgYVxuICogdmVydGV4IGNhbiByZWFjaCBvdXQgb2YgdGhlIGNlbnRlciBvZiB0aGUgUG9seWdvbi5cbiAqIEByZXR1cm5zIHtGZWF0dXJlQ29sbGVjdGlvbjxQb2x5Z29uPn0gR2VvSlNPTiBGZWF0dXJlQ29sbGVjdGlvbiBvZiBwb2x5Z29uc1xuICogQGV4YW1wbGVcbiAqIHZhciBwb2x5Z29ucyA9IHR1cmYucmFuZG9tUG9seWdvbigyNSwge2Jib3g6IFstMTgwLCAtOTAsIDE4MCwgOTBdfSlcbiAqIC8vID0+IHBvbHlnb25zXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbVBvbHlnb24oY291bnQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIC8vIERlZmF1bHQgcGFyYW1cbiAgICBpZiAoY291bnQgPT09IHVuZGVmaW5lZCB8fCBjb3VudCA9PT0gbnVsbCkge1xuICAgICAgICBjb3VudCA9IDE7XG4gICAgfVxuICAgIGlmICghaGVscGVyc18xLmlzTnVtYmVyKG9wdGlvbnMubnVtX3ZlcnRpY2VzKSB8fCBvcHRpb25zLm51bV92ZXJ0aWNlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wdGlvbnMubnVtX3ZlcnRpY2VzID0gMTA7XG4gICAgfVxuICAgIGlmICghaGVscGVyc18xLmlzTnVtYmVyKG9wdGlvbnMubWF4X3JhZGlhbF9sZW5ndGgpIHx8IG9wdGlvbnMubWF4X3JhZGlhbF9sZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvcHRpb25zLm1heF9yYWRpYWxfbGVuZ3RoID0gMTA7XG4gICAgfVxuICAgIHZhciBmZWF0dXJlcyA9IFtdO1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIHZlcnRpY2VzID0gW107XG4gICAgICAgIHZhciBjaXJjbGVPZmZzZXRzID0gQXJyYXkuYXBwbHkobnVsbCwgbmV3IEFycmF5KG9wdGlvbnMubnVtX3ZlcnRpY2VzICsgMSkpLm1hcChNYXRoLnJhbmRvbSk7XG4gICAgICAgIC8vIFN1bSBPZmZzZXRzXG4gICAgICAgIGNpcmNsZU9mZnNldHMuZm9yRWFjaChmdW5jdGlvbiAoY3VyLCBpbmRleCwgYXJyKSB7XG4gICAgICAgICAgICBhcnJbaW5kZXhdID0gKGluZGV4ID4gMCkgPyBjdXIgKyBhcnJbaW5kZXggLSAxXSA6IGN1cjtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHNjYWxlT2Zmc2V0c1xuICAgICAgICBjaXJjbGVPZmZzZXRzLmZvckVhY2goZnVuY3Rpb24gKGN1cikge1xuICAgICAgICAgICAgY3VyID0gY3VyICogMiAqIE1hdGguUEkgLyBjaXJjbGVPZmZzZXRzW2NpcmNsZU9mZnNldHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB2YXIgcmFkaWFsU2NhbGVyID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2goW1xuICAgICAgICAgICAgICAgIHJhZGlhbFNjYWxlciAqIChvcHRpb25zLm1heF9yYWRpYWxfbGVuZ3RoIHx8IDEwKSAqIE1hdGguc2luKGN1ciksXG4gICAgICAgICAgICAgICAgcmFkaWFsU2NhbGVyICogKG9wdGlvbnMubWF4X3JhZGlhbF9sZW5ndGggfHwgMTApICogTWF0aC5jb3MoY3VyKSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmVydGljZXNbdmVydGljZXMubGVuZ3RoIC0gMV0gPSB2ZXJ0aWNlc1swXTsgLy8gY2xvc2UgdGhlIHJpbmdcbiAgICAgICAgLy8gY2VudGVyIHRoZSBwb2x5Z29uIGFyb3VuZCBzb21ldGhpbmdcbiAgICAgICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5tYXAodmVydGV4VG9Db29yZGluYXRlKHJhbmRvbVBvc2l0aW9uKG9wdGlvbnMuYmJveCkpKTtcbiAgICAgICAgZmVhdHVyZXMucHVzaChoZWxwZXJzXzEucG9seWdvbihbdmVydGljZXNdKSk7XG4gICAgfTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgX2xvb3BfMShpKTtcbiAgICB9XG4gICAgcmV0dXJuIGhlbHBlcnNfMS5mZWF0dXJlQ29sbGVjdGlvbihmZWF0dXJlcyk7XG59XG5leHBvcnRzLnJhbmRvbVBvbHlnb24gPSByYW5kb21Qb2x5Z29uO1xuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIHtAbGluayBsaW5lc3RyaW5nfS5cbiAqXG4gKiBAbmFtZSByYW5kb21MaW5lU3RyaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gW2NvdW50PTFdIGhvdyBtYW55IGdlb21ldHJpZXMgd2lsbCBiZSBnZW5lcmF0ZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3B0aW9ucy5iYm94PVstMTgwLCAtOTAsIDE4MCwgOTBdXSBhIGJvdW5kaW5nIGJveCBpbnNpZGUgb2Ygd2hpY2ggZ2VvbWV0cmllcyBhcmUgcGxhY2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm51bV92ZXJ0aWNlcz0xMF0gaXMgaG93IG1hbnkgY29vcmRpbmF0ZXMgZWFjaCBMaW5lU3RyaW5nIHdpbGwgY29udGFpbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhfbGVuZ3RoPTAuMDAwMV0gaXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGRlY2ltYWwgZGVncmVlcyB0aGF0IGFcbiAqIHZlcnRleCBjYW4gYmUgZnJvbSBpdHMgcHJlZGVjZXNzb3JcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhfcm90YXRpb249TWF0aC5QSSAvIDhdIGlzIHRoZSBtYXhpbXVtIG51bWJlciBvZiByYWRpYW5zIHRoYXQgYVxuICogbGluZSBzZWdtZW50IGNhbiB0dXJuIGZyb20gdGhlIHByZXZpb3VzIHNlZ21lbnQuXG4gKiBAcmV0dXJucyB7RmVhdHVyZUNvbGxlY3Rpb248TGluZVN0cmluZz59IEdlb0pTT04gRmVhdHVyZUNvbGxlY3Rpb24gb2YgbGluZXN0cmluZ3NcbiAqIEBleGFtcGxlXG4gKiB2YXIgbGluZVN0cmluZ3MgPSB0dXJmLnJhbmRvbUxpbmVTdHJpbmcoMjUsIHtiYm94OiBbLTE4MCwgLTkwLCAxODAsIDkwXX0pXG4gKiAvLyA9PiBsaW5lU3RyaW5nc1xuICovXG5mdW5jdGlvbiByYW5kb21MaW5lU3RyaW5nKGNvdW50LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKCFoZWxwZXJzXzEuaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwib3B0aW9ucyBpcyBpbnZhbGlkXCIpO1xuICAgIH1cbiAgICB2YXIgYmJveCA9IG9wdGlvbnMuYmJveDtcbiAgICB2YXIgbnVtX3ZlcnRpY2VzID0gb3B0aW9ucy5udW1fdmVydGljZXM7XG4gICAgdmFyIG1heF9sZW5ndGggPSBvcHRpb25zLm1heF9sZW5ndGg7XG4gICAgdmFyIG1heF9yb3RhdGlvbiA9IG9wdGlvbnMubWF4X3JvdGF0aW9uO1xuICAgIGlmIChjb3VudCA9PT0gdW5kZWZpbmVkIHx8IGNvdW50ID09PSBudWxsKSB7XG4gICAgICAgIGNvdW50ID0gMTtcbiAgICB9XG4gICAgLy8gRGVmYXVsdCBwYXJhbWV0ZXJzXG4gICAgaWYgKCFoZWxwZXJzXzEuaXNOdW1iZXIobnVtX3ZlcnRpY2VzKSB8fCBudW1fdmVydGljZXMgPT09IHVuZGVmaW5lZCB8fCBudW1fdmVydGljZXMgPCAyKSB7XG4gICAgICAgIG51bV92ZXJ0aWNlcyA9IDEwO1xuICAgIH1cbiAgICBpZiAoIWhlbHBlcnNfMS5pc051bWJlcihtYXhfbGVuZ3RoKSB8fCBtYXhfbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWF4X2xlbmd0aCA9IDAuMDAwMTtcbiAgICB9XG4gICAgaWYgKCFoZWxwZXJzXzEuaXNOdW1iZXIobWF4X3JvdGF0aW9uKSB8fCBtYXhfcm90YXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtYXhfcm90YXRpb24gPSBNYXRoLlBJIC8gODtcbiAgICB9XG4gICAgdmFyIGZlYXR1cmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIHZhciBzdGFydGluZ1BvaW50ID0gcmFuZG9tUG9zaXRpb24oYmJveCk7XG4gICAgICAgIHZhciB2ZXJ0aWNlcyA9IFtzdGFydGluZ1BvaW50XTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBudW1fdmVydGljZXMgLSAxOyBqKyspIHtcbiAgICAgICAgICAgIHZhciBwcmlvckFuZ2xlID0gKGogPT09IDApID9cbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEkgOlxuICAgICAgICAgICAgICAgIE1hdGgudGFuKCh2ZXJ0aWNlc1tqXVsxXSAtIHZlcnRpY2VzW2ogLSAxXVsxXSkgL1xuICAgICAgICAgICAgICAgICAgICAodmVydGljZXNbal1bMF0gLSB2ZXJ0aWNlc1tqIC0gMV1bMF0pKTtcbiAgICAgICAgICAgIHZhciBhbmdsZSA9IHByaW9yQW5nbGUgKyAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBtYXhfcm90YXRpb24gKiAyO1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5yYW5kb20oKSAqIG1heF9sZW5ndGg7XG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKFtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNlc1tqXVswXSArIGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgICAgIHZlcnRpY2VzW2pdWzFdICsgZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgICBmZWF0dXJlcy5wdXNoKGhlbHBlcnNfMS5saW5lU3RyaW5nKHZlcnRpY2VzKSk7XG4gICAgfVxuICAgIHJldHVybiBoZWxwZXJzXzEuZmVhdHVyZUNvbGxlY3Rpb24oZmVhdHVyZXMpO1xufVxuZXhwb3J0cy5yYW5kb21MaW5lU3RyaW5nID0gcmFuZG9tTGluZVN0cmluZztcbmZ1bmN0aW9uIHZlcnRleFRvQ29vcmRpbmF0ZShodWIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGN1cikge1xuICAgICAgICByZXR1cm4gW2N1clswXSArIGh1YlswXSwgY3VyWzFdICsgaHViWzFdXTtcbiAgICB9O1xufVxuZnVuY3Rpb24gcm5kKCkgeyByZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTsgfVxuZnVuY3Rpb24gbG9uKCkgeyByZXR1cm4gcm5kKCkgKiAzNjA7IH1cbmZ1bmN0aW9uIGxhdCgpIHsgcmV0dXJuIHJuZCgpICogMTgwOyB9XG5mdW5jdGlvbiBjb29yZEluQkJveChiYm94KSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgKE1hdGgucmFuZG9tKCkgKiAoYmJveFsyXSAtIGJib3hbMF0pKSArIGJib3hbMF0sXG4gICAgICAgIChNYXRoLnJhbmRvbSgpICogKGJib3hbM10gLSBiYm94WzFdKSkgKyBiYm94WzFdXG4gICAgXTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gY29tcGFyZSBhbmQgaXNCdWZmZXIgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9ibG9iLzY4MGU5ZTVlNDg4ZjIyYWFjMjc1OTlhNTdkYzg0NGE2MzE1OTI4ZGQvaW5kZXguanNcbi8vIG9yaWdpbmFsIG5vdGljZTpcblxuLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICB2YXIgeCA9IGEubGVuZ3RoO1xuICB2YXIgeSA9IGIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldO1xuICAgICAgeSA9IGJbaV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKHkgPCB4KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5mdW5jdGlvbiBpc0J1ZmZlcihiKSB7XG4gIGlmIChnbG9iYWwuQnVmZmVyICYmIHR5cGVvZiBnbG9iYWwuQnVmZmVyLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGdsb2JhbC5CdWZmZXIuaXNCdWZmZXIoYik7XG4gIH1cbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcik7XG59XG5cbi8vIGJhc2VkIG9uIG5vZGUgYXNzZXJ0LCBvcmlnaW5hbCBub3RpY2U6XG4vLyBOQjogVGhlIFVSTCB0byB0aGUgQ29tbW9uSlMgc3BlYyBpcyBrZXB0IGp1c3QgZm9yIHRyYWRpdGlvbi5cbi8vICAgICBub2RlLWFzc2VydCBoYXMgZXZvbHZlZCBhIGxvdCBzaW5jZSB0aGVuLCBib3RoIGluIEFQSSBhbmQgYmVoYXZpb3IuXG5cbi8vIGh0dHA6Ly93aWtpLmNvbW1vbmpzLm9yZy93aWtpL1VuaXRfVGVzdGluZy8xLjBcbi8vXG4vLyBUSElTIElTIE5PVCBURVNURUQgTk9SIExJS0VMWSBUTyBXT1JLIE9VVFNJREUgVjghXG4vL1xuLy8gT3JpZ2luYWxseSBmcm9tIG5hcndoYWwuanMgKGh0dHA6Ly9uYXJ3aGFsanMub3JnKVxuLy8gQ29weXJpZ2h0IChjKSAyMDA5IFRob21hcyBSb2JpbnNvbiA8Mjgwbm9ydGguY29tPlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlICdTb2Z0d2FyZScpLCB0b1xuLy8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbi8vIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuLy8gc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAnQVMgSVMnLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbi8vIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cbi8vIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwvJyk7XG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgZnVuY3Rpb25zSGF2ZU5hbWVzID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZvbygpIHt9Lm5hbWUgPT09ICdmb28nO1xufSgpKTtcbmZ1bmN0aW9uIHBUb1N0cmluZyAob2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbn1cbmZ1bmN0aW9uIGlzVmlldyhhcnJidWYpIHtcbiAgaWYgKGlzQnVmZmVyKGFycmJ1ZikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBnbG9iYWwuQXJyYXlCdWZmZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQXJyYXlCdWZmZXIuaXNWaWV3KGFycmJ1Zik7XG4gIH1cbiAgaWYgKCFhcnJidWYpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGFycmJ1ZiBpbnN0YW5jZW9mIERhdGFWaWV3KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGFycmJ1Zi5idWZmZXIgJiYgYXJyYnVmLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuLy8gMS4gVGhlIGFzc2VydCBtb2R1bGUgcHJvdmlkZXMgZnVuY3Rpb25zIHRoYXQgdGhyb3dcbi8vIEFzc2VydGlvbkVycm9yJ3Mgd2hlbiBwYXJ0aWN1bGFyIGNvbmRpdGlvbnMgYXJlIG5vdCBtZXQuIFRoZVxuLy8gYXNzZXJ0IG1vZHVsZSBtdXN0IGNvbmZvcm0gdG8gdGhlIGZvbGxvd2luZyBpbnRlcmZhY2UuXG5cbnZhciBhc3NlcnQgPSBtb2R1bGUuZXhwb3J0cyA9IG9rO1xuXG4vLyAyLiBUaGUgQXNzZXJ0aW9uRXJyb3IgaXMgZGVmaW5lZCBpbiBhc3NlcnQuXG4vLyBuZXcgYXNzZXJ0LkFzc2VydGlvbkVycm9yKHsgbWVzc2FnZTogbWVzc2FnZSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IGFjdHVhbCxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogZXhwZWN0ZWQgfSlcblxudmFyIHJlZ2V4ID0gL1xccypmdW5jdGlvblxccysoW15cXChcXHNdKilcXHMqLztcbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvZnVuY3Rpb24ucHJvdG90eXBlLm5hbWUvYmxvYi9hZGVlZWVjOGJmY2M2MDY4YjE4N2Q3ZDlmYjNkNWJiMWQzYTMwODk5L2ltcGxlbWVudGF0aW9uLmpzXG5mdW5jdGlvbiBnZXROYW1lKGZ1bmMpIHtcbiAgaWYgKCF1dGlsLmlzRnVuY3Rpb24oZnVuYykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGZ1bmN0aW9uc0hhdmVOYW1lcykge1xuICAgIHJldHVybiBmdW5jLm5hbWU7XG4gIH1cbiAgdmFyIHN0ciA9IGZ1bmMudG9TdHJpbmcoKTtcbiAgdmFyIG1hdGNoID0gc3RyLm1hdGNoKHJlZ2V4KTtcbiAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdO1xufVxuYXNzZXJ0LkFzc2VydGlvbkVycm9yID0gZnVuY3Rpb24gQXNzZXJ0aW9uRXJyb3Iob3B0aW9ucykge1xuICB0aGlzLm5hbWUgPSAnQXNzZXJ0aW9uRXJyb3InO1xuICB0aGlzLmFjdHVhbCA9IG9wdGlvbnMuYWN0dWFsO1xuICB0aGlzLmV4cGVjdGVkID0gb3B0aW9ucy5leHBlY3RlZDtcbiAgdGhpcy5vcGVyYXRvciA9IG9wdGlvbnMub3BlcmF0b3I7XG4gIGlmIChvcHRpb25zLm1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBvcHRpb25zLm1lc3NhZ2U7XG4gICAgdGhpcy5nZW5lcmF0ZWRNZXNzYWdlID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5tZXNzYWdlID0gZ2V0TWVzc2FnZSh0aGlzKTtcbiAgICB0aGlzLmdlbmVyYXRlZE1lc3NhZ2UgPSB0cnVlO1xuICB9XG4gIHZhciBzdGFja1N0YXJ0RnVuY3Rpb24gPSBvcHRpb25zLnN0YWNrU3RhcnRGdW5jdGlvbiB8fCBmYWlsO1xuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBzdGFja1N0YXJ0RnVuY3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIC8vIG5vbiB2OCBicm93c2VycyBzbyB3ZSBjYW4gaGF2ZSBhIHN0YWNrdHJhY2VcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCk7XG4gICAgaWYgKGVyci5zdGFjaykge1xuICAgICAgdmFyIG91dCA9IGVyci5zdGFjaztcblxuICAgICAgLy8gdHJ5IHRvIHN0cmlwIHVzZWxlc3MgZnJhbWVzXG4gICAgICB2YXIgZm5fbmFtZSA9IGdldE5hbWUoc3RhY2tTdGFydEZ1bmN0aW9uKTtcbiAgICAgIHZhciBpZHggPSBvdXQuaW5kZXhPZignXFxuJyArIGZuX25hbWUpO1xuICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgIC8vIG9uY2Ugd2UgaGF2ZSBsb2NhdGVkIHRoZSBmdW5jdGlvbiBmcmFtZVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHN0cmlwIG91dCBldmVyeXRoaW5nIGJlZm9yZSBpdCAoYW5kIGl0cyBsaW5lKVxuICAgICAgICB2YXIgbmV4dF9saW5lID0gb3V0LmluZGV4T2YoJ1xcbicsIGlkeCArIDEpO1xuICAgICAgICBvdXQgPSBvdXQuc3Vic3RyaW5nKG5leHRfbGluZSArIDEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YWNrID0gb3V0O1xuICAgIH1cbiAgfVxufTtcblxuLy8gYXNzZXJ0LkFzc2VydGlvbkVycm9yIGluc3RhbmNlb2YgRXJyb3JcbnV0aWwuaW5oZXJpdHMoYXNzZXJ0LkFzc2VydGlvbkVycm9yLCBFcnJvcik7XG5cbmZ1bmN0aW9uIHRydW5jYXRlKHMsIG4pIHtcbiAgaWYgKHR5cGVvZiBzID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzLmxlbmd0aCA8IG4gPyBzIDogcy5zbGljZSgwLCBuKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcztcbiAgfVxufVxuZnVuY3Rpb24gaW5zcGVjdChzb21ldGhpbmcpIHtcbiAgaWYgKGZ1bmN0aW9uc0hhdmVOYW1lcyB8fCAhdXRpbC5pc0Z1bmN0aW9uKHNvbWV0aGluZykpIHtcbiAgICByZXR1cm4gdXRpbC5pbnNwZWN0KHNvbWV0aGluZyk7XG4gIH1cbiAgdmFyIHJhd25hbWUgPSBnZXROYW1lKHNvbWV0aGluZyk7XG4gIHZhciBuYW1lID0gcmF3bmFtZSA/ICc6ICcgKyByYXduYW1lIDogJyc7XG4gIHJldHVybiAnW0Z1bmN0aW9uJyArICBuYW1lICsgJ10nO1xufVxuZnVuY3Rpb24gZ2V0TWVzc2FnZShzZWxmKSB7XG4gIHJldHVybiB0cnVuY2F0ZShpbnNwZWN0KHNlbGYuYWN0dWFsKSwgMTI4KSArICcgJyArXG4gICAgICAgICBzZWxmLm9wZXJhdG9yICsgJyAnICtcbiAgICAgICAgIHRydW5jYXRlKGluc3BlY3Qoc2VsZi5leHBlY3RlZCksIDEyOCk7XG59XG5cbi8vIEF0IHByZXNlbnQgb25seSB0aGUgdGhyZWUga2V5cyBtZW50aW9uZWQgYWJvdmUgYXJlIHVzZWQgYW5kXG4vLyB1bmRlcnN0b29kIGJ5IHRoZSBzcGVjLiBJbXBsZW1lbnRhdGlvbnMgb3Igc3ViIG1vZHVsZXMgY2FuIHBhc3Ncbi8vIG90aGVyIGtleXMgdG8gdGhlIEFzc2VydGlvbkVycm9yJ3MgY29uc3RydWN0b3IgLSB0aGV5IHdpbGwgYmVcbi8vIGlnbm9yZWQuXG5cbi8vIDMuIEFsbCBvZiB0aGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBtdXN0IHRocm93IGFuIEFzc2VydGlvbkVycm9yXG4vLyB3aGVuIGEgY29ycmVzcG9uZGluZyBjb25kaXRpb24gaXMgbm90IG1ldCwgd2l0aCBhIG1lc3NhZ2UgdGhhdFxuLy8gbWF5IGJlIHVuZGVmaW5lZCBpZiBub3QgcHJvdmlkZWQuICBBbGwgYXNzZXJ0aW9uIG1ldGhvZHMgcHJvdmlkZVxuLy8gYm90aCB0aGUgYWN0dWFsIGFuZCBleHBlY3RlZCB2YWx1ZXMgdG8gdGhlIGFzc2VydGlvbiBlcnJvciBmb3Jcbi8vIGRpc3BsYXkgcHVycG9zZXMuXG5cbmZ1bmN0aW9uIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgb3BlcmF0b3IsIHN0YWNrU3RhcnRGdW5jdGlvbikge1xuICB0aHJvdyBuZXcgYXNzZXJ0LkFzc2VydGlvbkVycm9yKHtcbiAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgIGFjdHVhbDogYWN0dWFsLFxuICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICBvcGVyYXRvcjogb3BlcmF0b3IsXG4gICAgc3RhY2tTdGFydEZ1bmN0aW9uOiBzdGFja1N0YXJ0RnVuY3Rpb25cbiAgfSk7XG59XG5cbi8vIEVYVEVOU0lPTiEgYWxsb3dzIGZvciB3ZWxsIGJlaGF2ZWQgZXJyb3JzIGRlZmluZWQgZWxzZXdoZXJlLlxuYXNzZXJ0LmZhaWwgPSBmYWlsO1xuXG4vLyA0LiBQdXJlIGFzc2VydGlvbiB0ZXN0cyB3aGV0aGVyIGEgdmFsdWUgaXMgdHJ1dGh5LCBhcyBkZXRlcm1pbmVkXG4vLyBieSAhIWd1YXJkLlxuLy8gYXNzZXJ0Lm9rKGd1YXJkLCBtZXNzYWdlX29wdCk7XG4vLyBUaGlzIHN0YXRlbWVudCBpcyBlcXVpdmFsZW50IHRvIGFzc2VydC5lcXVhbCh0cnVlLCAhIWd1YXJkLFxuLy8gbWVzc2FnZV9vcHQpOy4gVG8gdGVzdCBzdHJpY3RseSBmb3IgdGhlIHZhbHVlIHRydWUsIHVzZVxuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKHRydWUsIGd1YXJkLCBtZXNzYWdlX29wdCk7LlxuXG5mdW5jdGlvbiBvayh2YWx1ZSwgbWVzc2FnZSkge1xuICBpZiAoIXZhbHVlKSBmYWlsKHZhbHVlLCB0cnVlLCBtZXNzYWdlLCAnPT0nLCBhc3NlcnQub2spO1xufVxuYXNzZXJ0Lm9rID0gb2s7XG5cbi8vIDUuIFRoZSBlcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgc2hhbGxvdywgY29lcmNpdmUgZXF1YWxpdHkgd2l0aFxuLy8gPT0uXG4vLyBhc3NlcnQuZXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQuZXF1YWwgPSBmdW5jdGlvbiBlcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgIT0gZXhwZWN0ZWQpIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJz09JywgYXNzZXJ0LmVxdWFsKTtcbn07XG5cbi8vIDYuIFRoZSBub24tZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIGZvciB3aGV0aGVyIHR3byBvYmplY3RzIGFyZSBub3QgZXF1YWxcbi8vIHdpdGggIT0gYXNzZXJ0Lm5vdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0Lm5vdEVxdWFsID0gZnVuY3Rpb24gbm90RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsID09IGV4cGVjdGVkKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnIT0nLCBhc3NlcnQubm90RXF1YWwpO1xuICB9XG59O1xuXG4vLyA3LiBUaGUgZXF1aXZhbGVuY2UgYXNzZXJ0aW9uIHRlc3RzIGEgZGVlcCBlcXVhbGl0eSByZWxhdGlvbi5cbi8vIGFzc2VydC5kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQuZGVlcEVxdWFsID0gZnVuY3Rpb24gZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIGZhbHNlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ2RlZXBFcXVhbCcsIGFzc2VydC5kZWVwRXF1YWwpO1xuICB9XG59O1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsID0gZnVuY3Rpb24gZGVlcFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIHRydWUpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnZGVlcFN0cmljdEVxdWFsJywgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgc3RyaWN0LCBtZW1vcykge1xuICAvLyA3LjEuIEFsbCBpZGVudGljYWwgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbiAgaWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0J1ZmZlcihhY3R1YWwpICYmIGlzQnVmZmVyKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBjb21wYXJlKGFjdHVhbCwgZXhwZWN0ZWQpID09PSAwO1xuXG4gIC8vIDcuMi4gSWYgdGhlIGV4cGVjdGVkIHZhbHVlIGlzIGEgRGF0ZSBvYmplY3QsIHRoZSBhY3R1YWwgdmFsdWUgaXNcbiAgLy8gZXF1aXZhbGVudCBpZiBpdCBpcyBhbHNvIGEgRGF0ZSBvYmplY3QgdGhhdCByZWZlcnMgdG8gdGhlIHNhbWUgdGltZS5cbiAgfSBlbHNlIGlmICh1dGlsLmlzRGF0ZShhY3R1YWwpICYmIHV0aWwuaXNEYXRlKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBhY3R1YWwuZ2V0VGltZSgpID09PSBleHBlY3RlZC5nZXRUaW1lKCk7XG5cbiAgLy8gNy4zIElmIHRoZSBleHBlY3RlZCB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3QsIHRoZSBhY3R1YWwgdmFsdWUgaXNcbiAgLy8gZXF1aXZhbGVudCBpZiBpdCBpcyBhbHNvIGEgUmVnRXhwIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNvdXJjZSBhbmRcbiAgLy8gcHJvcGVydGllcyAoYGdsb2JhbGAsIGBtdWx0aWxpbmVgLCBgbGFzdEluZGV4YCwgYGlnbm9yZUNhc2VgKS5cbiAgfSBlbHNlIGlmICh1dGlsLmlzUmVnRXhwKGFjdHVhbCkgJiYgdXRpbC5pc1JlZ0V4cChleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gYWN0dWFsLnNvdXJjZSA9PT0gZXhwZWN0ZWQuc291cmNlICYmXG4gICAgICAgICAgIGFjdHVhbC5nbG9iYWwgPT09IGV4cGVjdGVkLmdsb2JhbCAmJlxuICAgICAgICAgICBhY3R1YWwubXVsdGlsaW5lID09PSBleHBlY3RlZC5tdWx0aWxpbmUgJiZcbiAgICAgICAgICAgYWN0dWFsLmxhc3RJbmRleCA9PT0gZXhwZWN0ZWQubGFzdEluZGV4ICYmXG4gICAgICAgICAgIGFjdHVhbC5pZ25vcmVDYXNlID09PSBleHBlY3RlZC5pZ25vcmVDYXNlO1xuXG4gIC8vIDcuNC4gT3RoZXIgcGFpcnMgdGhhdCBkbyBub3QgYm90aCBwYXNzIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyxcbiAgLy8gZXF1aXZhbGVuY2UgaXMgZGV0ZXJtaW5lZCBieSA9PS5cbiAgfSBlbHNlIGlmICgoYWN0dWFsID09PSBudWxsIHx8IHR5cGVvZiBhY3R1YWwgIT09ICdvYmplY3QnKSAmJlxuICAgICAgICAgICAgIChleHBlY3RlZCA9PT0gbnVsbCB8fCB0eXBlb2YgZXhwZWN0ZWQgIT09ICdvYmplY3QnKSkge1xuICAgIHJldHVybiBzdHJpY3QgPyBhY3R1YWwgPT09IGV4cGVjdGVkIDogYWN0dWFsID09IGV4cGVjdGVkO1xuXG4gIC8vIElmIGJvdGggdmFsdWVzIGFyZSBpbnN0YW5jZXMgb2YgdHlwZWQgYXJyYXlzLCB3cmFwIHRoZWlyIHVuZGVybHlpbmdcbiAgLy8gQXJyYXlCdWZmZXJzIGluIGEgQnVmZmVyIGVhY2ggdG8gaW5jcmVhc2UgcGVyZm9ybWFuY2VcbiAgLy8gVGhpcyBvcHRpbWl6YXRpb24gcmVxdWlyZXMgdGhlIGFycmF5cyB0byBoYXZlIHRoZSBzYW1lIHR5cGUgYXMgY2hlY2tlZCBieVxuICAvLyBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nIChha2EgcFRvU3RyaW5nKS4gTmV2ZXIgcGVyZm9ybSBiaW5hcnlcbiAgLy8gY29tcGFyaXNvbnMgZm9yIEZsb2F0KkFycmF5cywgdGhvdWdoLCBzaW5jZSBlLmcuICswID09PSAtMCBidXQgdGhlaXJcbiAgLy8gYml0IHBhdHRlcm5zIGFyZSBub3QgaWRlbnRpY2FsLlxuICB9IGVsc2UgaWYgKGlzVmlldyhhY3R1YWwpICYmIGlzVmlldyhleHBlY3RlZCkgJiZcbiAgICAgICAgICAgICBwVG9TdHJpbmcoYWN0dWFsKSA9PT0gcFRvU3RyaW5nKGV4cGVjdGVkKSAmJlxuICAgICAgICAgICAgICEoYWN0dWFsIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5IHx8XG4gICAgICAgICAgICAgICBhY3R1YWwgaW5zdGFuY2VvZiBGbG9hdDY0QXJyYXkpKSB7XG4gICAgcmV0dXJuIGNvbXBhcmUobmV3IFVpbnQ4QXJyYXkoYWN0dWFsLmJ1ZmZlciksXG4gICAgICAgICAgICAgICAgICAgbmV3IFVpbnQ4QXJyYXkoZXhwZWN0ZWQuYnVmZmVyKSkgPT09IDA7XG5cbiAgLy8gNy41IEZvciBhbGwgb3RoZXIgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXkgb2JqZWN0cywgZXF1aXZhbGVuY2UgaXNcbiAgLy8gZGV0ZXJtaW5lZCBieSBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGFzIHZlcmlmaWVkXG4gIC8vIHdpdGggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKSwgdGhlIHNhbWUgc2V0IG9mIGtleXNcbiAgLy8gKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeVxuICAvLyBjb3JyZXNwb25kaW5nIGtleSwgYW5kIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS4gTm90ZTogdGhpc1xuICAvLyBhY2NvdW50cyBmb3IgYm90aCBuYW1lZCBhbmQgaW5kZXhlZCBwcm9wZXJ0aWVzIG9uIEFycmF5cy5cbiAgfSBlbHNlIGlmIChpc0J1ZmZlcihhY3R1YWwpICE9PSBpc0J1ZmZlcihleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgbWVtb3MgPSBtZW1vcyB8fCB7YWN0dWFsOiBbXSwgZXhwZWN0ZWQ6IFtdfTtcblxuICAgIHZhciBhY3R1YWxJbmRleCA9IG1lbW9zLmFjdHVhbC5pbmRleE9mKGFjdHVhbCk7XG4gICAgaWYgKGFjdHVhbEluZGV4ICE9PSAtMSkge1xuICAgICAgaWYgKGFjdHVhbEluZGV4ID09PSBtZW1vcy5leHBlY3RlZC5pbmRleE9mKGV4cGVjdGVkKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vcy5hY3R1YWwucHVzaChhY3R1YWwpO1xuICAgIG1lbW9zLmV4cGVjdGVkLnB1c2goZXhwZWN0ZWQpO1xuXG4gICAgcmV0dXJuIG9iakVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQsIHN0cmljdCwgbWVtb3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIHN0cmljdCwgYWN0dWFsVmlzaXRlZE9iamVjdHMpIHtcbiAgaWYgKGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IG51bGwgfHwgYiA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy8gaWYgb25lIGlzIGEgcHJpbWl0aXZlLCB0aGUgb3RoZXIgbXVzdCBiZSBzYW1lXG4gIGlmICh1dGlsLmlzUHJpbWl0aXZlKGEpIHx8IHV0aWwuaXNQcmltaXRpdmUoYikpXG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIGlmIChzdHJpY3QgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGEpICE9PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYikpXG4gICAgcmV0dXJuIGZhbHNlO1xuICB2YXIgYUlzQXJncyA9IGlzQXJndW1lbnRzKGEpO1xuICB2YXIgYklzQXJncyA9IGlzQXJndW1lbnRzKGIpO1xuICBpZiAoKGFJc0FyZ3MgJiYgIWJJc0FyZ3MpIHx8ICghYUlzQXJncyAmJiBiSXNBcmdzKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIGlmIChhSXNBcmdzKSB7XG4gICAgYSA9IHBTbGljZS5jYWxsKGEpO1xuICAgIGIgPSBwU2xpY2UuY2FsbChiKTtcbiAgICByZXR1cm4gX2RlZXBFcXVhbChhLCBiLCBzdHJpY3QpO1xuICB9XG4gIHZhciBrYSA9IG9iamVjdEtleXMoYSk7XG4gIHZhciBrYiA9IG9iamVjdEtleXMoYik7XG4gIHZhciBrZXksIGk7XG4gIC8vIGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoa2V5cyBpbmNvcnBvcmF0ZXNcbiAgLy8gaGFzT3duUHJvcGVydHkpXG4gIGlmIChrYS5sZW5ndGggIT09IGtiLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vdGhlIHNhbWUgc2V0IG9mIGtleXMgKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksXG4gIGthLnNvcnQoKTtcbiAga2Iuc29ydCgpO1xuICAvL35+fmNoZWFwIGtleSB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGthW2ldICE9PSBrYltpXSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL2VxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleSwgYW5kXG4gIC8vfn5+cG9zc2libHkgZXhwZW5zaXZlIGRlZXAgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghX2RlZXBFcXVhbChhW2tleV0sIGJba2V5XSwgc3RyaWN0LCBhY3R1YWxWaXNpdGVkT2JqZWN0cykpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIDguIFRoZSBub24tZXF1aXZhbGVuY2UgYXNzZXJ0aW9uIHRlc3RzIGZvciBhbnkgZGVlcCBpbmVxdWFsaXR5LlxuLy8gYXNzZXJ0Lm5vdERlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5ub3REZWVwRXF1YWwgPSBmdW5jdGlvbiBub3REZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBmYWxzZSkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICdub3REZWVwRXF1YWwnLCBhc3NlcnQubm90RGVlcEVxdWFsKTtcbiAgfVxufTtcblxuYXNzZXJ0Lm5vdERlZXBTdHJpY3RFcXVhbCA9IG5vdERlZXBTdHJpY3RFcXVhbDtcbmZ1bmN0aW9uIG5vdERlZXBTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIHRydWUpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnbm90RGVlcFN0cmljdEVxdWFsJywgbm90RGVlcFN0cmljdEVxdWFsKTtcbiAgfVxufVxuXG5cbi8vIDkuIFRoZSBzdHJpY3QgZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIHN0cmljdCBlcXVhbGl0eSwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4vLyBhc3NlcnQuc3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBzdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgIT09IGV4cGVjdGVkKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnPT09JywgYXNzZXJ0LnN0cmljdEVxdWFsKTtcbiAgfVxufTtcblxuLy8gMTAuIFRoZSBzdHJpY3Qgbm9uLWVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBmb3Igc3RyaWN0IGluZXF1YWxpdHksIGFzXG4vLyBkZXRlcm1pbmVkIGJ5ICE9PS4gIGFzc2VydC5ub3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5ub3RTdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIG5vdFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICchPT0nLCBhc3NlcnQubm90U3RyaWN0RXF1YWwpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBleHBlY3RlZEV4Y2VwdGlvbihhY3R1YWwsIGV4cGVjdGVkKSB7XG4gIGlmICghYWN0dWFsIHx8ICFleHBlY3RlZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZXhwZWN0ZWQpID09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgcmV0dXJuIGV4cGVjdGVkLnRlc3QoYWN0dWFsKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGFjdHVhbCBpbnN0YW5jZW9mIGV4cGVjdGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJZ25vcmUuICBUaGUgaW5zdGFuY2VvZiBjaGVjayBkb2Vzbid0IHdvcmsgZm9yIGFycm93IGZ1bmN0aW9ucy5cbiAgfVxuXG4gIGlmIChFcnJvci5pc1Byb3RvdHlwZU9mKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBleHBlY3RlZC5jYWxsKHt9LCBhY3R1YWwpID09PSB0cnVlO1xufVxuXG5mdW5jdGlvbiBfdHJ5QmxvY2soYmxvY2spIHtcbiAgdmFyIGVycm9yO1xuICB0cnkge1xuICAgIGJsb2NrKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBlcnJvciA9IGU7XG4gIH1cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5mdW5jdGlvbiBfdGhyb3dzKHNob3VsZFRocm93LCBibG9jaywgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGFjdHVhbDtcblxuICBpZiAodHlwZW9mIGJsb2NrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJibG9ja1wiIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBleHBlY3RlZCA9PT0gJ3N0cmluZycpIHtcbiAgICBtZXNzYWdlID0gZXhwZWN0ZWQ7XG4gICAgZXhwZWN0ZWQgPSBudWxsO1xuICB9XG5cbiAgYWN0dWFsID0gX3RyeUJsb2NrKGJsb2NrKTtcblxuICBtZXNzYWdlID0gKGV4cGVjdGVkICYmIGV4cGVjdGVkLm5hbWUgPyAnICgnICsgZXhwZWN0ZWQubmFtZSArICcpLicgOiAnLicpICtcbiAgICAgICAgICAgIChtZXNzYWdlID8gJyAnICsgbWVzc2FnZSA6ICcuJyk7XG5cbiAgaWYgKHNob3VsZFRocm93ICYmICFhY3R1YWwpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsICdNaXNzaW5nIGV4cGVjdGVkIGV4Y2VwdGlvbicgKyBtZXNzYWdlKTtcbiAgfVxuXG4gIHZhciB1c2VyUHJvdmlkZWRNZXNzYWdlID0gdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnO1xuICB2YXIgaXNVbndhbnRlZEV4Y2VwdGlvbiA9ICFzaG91bGRUaHJvdyAmJiB1dGlsLmlzRXJyb3IoYWN0dWFsKTtcbiAgdmFyIGlzVW5leHBlY3RlZEV4Y2VwdGlvbiA9ICFzaG91bGRUaHJvdyAmJiBhY3R1YWwgJiYgIWV4cGVjdGVkO1xuXG4gIGlmICgoaXNVbndhbnRlZEV4Y2VwdGlvbiAmJlxuICAgICAgdXNlclByb3ZpZGVkTWVzc2FnZSAmJlxuICAgICAgZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBleHBlY3RlZCkpIHx8XG4gICAgICBpc1VuZXhwZWN0ZWRFeGNlcHRpb24pIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsICdHb3QgdW53YW50ZWQgZXhjZXB0aW9uJyArIG1lc3NhZ2UpO1xuICB9XG5cbiAgaWYgKChzaG91bGRUaHJvdyAmJiBhY3R1YWwgJiYgZXhwZWN0ZWQgJiZcbiAgICAgICFleHBlY3RlZEV4Y2VwdGlvbihhY3R1YWwsIGV4cGVjdGVkKSkgfHwgKCFzaG91bGRUaHJvdyAmJiBhY3R1YWwpKSB7XG4gICAgdGhyb3cgYWN0dWFsO1xuICB9XG59XG5cbi8vIDExLiBFeHBlY3RlZCB0byB0aHJvdyBhbiBlcnJvcjpcbi8vIGFzc2VydC50aHJvd3MoYmxvY2ssIEVycm9yX29wdCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQudGhyb3dzID0gZnVuY3Rpb24oYmxvY2ssIC8qb3B0aW9uYWwqL2Vycm9yLCAvKm9wdGlvbmFsKi9tZXNzYWdlKSB7XG4gIF90aHJvd3ModHJ1ZSwgYmxvY2ssIGVycm9yLCBtZXNzYWdlKTtcbn07XG5cbi8vIEVYVEVOU0lPTiEgVGhpcyBpcyBhbm5veWluZyB0byB3cml0ZSBvdXRzaWRlIHRoaXMgbW9kdWxlLlxuYXNzZXJ0LmRvZXNOb3RUaHJvdyA9IGZ1bmN0aW9uKGJsb2NrLCAvKm9wdGlvbmFsKi9lcnJvciwgLypvcHRpb25hbCovbWVzc2FnZSkge1xuICBfdGhyb3dzKGZhbHNlLCBibG9jaywgZXJyb3IsIG1lc3NhZ2UpO1xufTtcblxuYXNzZXJ0LmlmRXJyb3IgPSBmdW5jdGlvbihlcnIpIHsgaWYgKGVycikgdGhyb3cgZXJyOyB9O1xuXG4vLyBFeHBvc2UgYSBzdHJpY3Qgb25seSB2YXJpYW50IG9mIGFzc2VydFxuZnVuY3Rpb24gc3RyaWN0KHZhbHVlLCBtZXNzYWdlKSB7XG4gIGlmICghdmFsdWUpIGZhaWwodmFsdWUsIHRydWUsIG1lc3NhZ2UsICc9PScsIHN0cmljdCk7XG59XG5hc3NlcnQuc3RyaWN0ID0gb2JqZWN0QXNzaWduKHN0cmljdCwgYXNzZXJ0LCB7XG4gIGVxdWFsOiBhc3NlcnQuc3RyaWN0RXF1YWwsXG4gIGRlZXBFcXVhbDogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCxcbiAgbm90RXF1YWw6IGFzc2VydC5ub3RTdHJpY3RFcXVhbCxcbiAgbm90RGVlcEVxdWFsOiBhc3NlcnQubm90RGVlcFN0cmljdEVxdWFsXG59KTtcbmFzc2VydC5zdHJpY3Quc3RyaWN0ID0gYXNzZXJ0LnN0cmljdDtcblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duLmNhbGwob2JqLCBrZXkpKSBrZXlzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn07XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fFxuICBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaikge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB2YXIgZGVzY3JpcHRvcnMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlc2NyaXB0b3JzW2tleXNbaV1dID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpcHRvcnM7XG4gIH07XG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxudmFyIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sKCd1dGlsLnByb21pc2lmeS5jdXN0b20nKSA6IHVuZGVmaW5lZDtcblxuZXhwb3J0cy5wcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgJiYgb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXSkge1xuICAgIHZhciBmbiA9IG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF07XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwidXRpbC5wcm9taXNpZnkuY3VzdG9tXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZuKCkge1xuICAgIHZhciBwcm9taXNlUmVzb2x2ZSwgcHJvbWlzZVJlamVjdDtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHByb21pc2VSZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG4gICAgYXJncy5wdXNoKGZ1bmN0aW9uIChlcnIsIHZhbHVlKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihmbiwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuICAgIGZuLFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpXG4gICk7XG59XG5cbmV4cG9ydHMucHJvbWlzaWZ5LmN1c3RvbSA9IGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbFxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeU9uUmVqZWN0ZWQocmVhc29uLCBjYikge1xuICAvLyBgIXJlYXNvbmAgZ3VhcmQgaW5zcGlyZWQgYnkgYmx1ZWJpcmQgKFJlZjogaHR0cHM6Ly9nb28uZ2wvdDVJUzZNKS5cbiAgLy8gQmVjYXVzZSBgbnVsbGAgaXMgYSBzcGVjaWFsIGVycm9yIHZhbHVlIGluIGNhbGxiYWNrcyB3aGljaCBtZWFucyBcIm5vIGVycm9yXG4gIC8vIG9jY3VycmVkXCIsIHdlIGVycm9yLXdyYXAgc28gdGhlIGNhbGxiYWNrIGNvbnN1bWVyIGNhbiBkaXN0aW5ndWlzaCBiZXR3ZWVuXG4gIC8vIFwidGhlIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBudWxsXCIgb3IgXCJ0aGUgcHJvbWlzZSBmdWxmaWxsZWQgd2l0aCB1bmRlZmluZWRcIi5cbiAgaWYgKCFyZWFzb24pIHtcbiAgICB2YXIgbmV3UmVhc29uID0gbmV3IEVycm9yKCdQcm9taXNlIHdhcyByZWplY3RlZCB3aXRoIGEgZmFsc3kgdmFsdWUnKTtcbiAgICBuZXdSZWFzb24ucmVhc29uID0gcmVhc29uO1xuICAgIHJlYXNvbiA9IG5ld1JlYXNvbjtcbiAgfVxuICByZXR1cm4gY2IocmVhc29uKTtcbn1cblxuZnVuY3Rpb24gY2FsbGJhY2tpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gIH1cblxuICAvLyBXZSBETyBOT1QgcmV0dXJuIHRoZSBwcm9taXNlIGFzIGl0IGdpdmVzIHRoZSB1c2VyIGEgZmFsc2Ugc2Vuc2UgdGhhdFxuICAvLyB0aGUgcHJvbWlzZSBpcyBhY3R1YWxseSBzb21laG93IHJlbGF0ZWQgdG8gdGhlIGNhbGxiYWNrJ3MgZXhlY3V0aW9uXG4gIC8vIGFuZCB0aGF0IHRoZSBjYWxsYmFjayB0aHJvd2luZyB3aWxsIHJlamVjdCB0aGUgcHJvbWlzZS5cbiAgZnVuY3Rpb24gY2FsbGJhY2tpZmllZCgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICB2YXIgbWF5YmVDYiA9IGFyZ3MucG9wKCk7XG4gICAgaWYgKHR5cGVvZiBtYXliZUNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGFzdCBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG1heWJlQ2IuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIC8vIEluIHRydWUgbm9kZSBzdHlsZSB3ZSBwcm9jZXNzIHRoZSBjYWxsYmFjayBvbiBgbmV4dFRpY2tgIHdpdGggYWxsIHRoZVxuICAgIC8vIGltcGxpY2F0aW9ucyAoc3RhY2ssIGB1bmNhdWdodEV4Y2VwdGlvbmAsIGBhc3luY19ob29rc2ApXG4gICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJldCkgeyBwcm9jZXNzLm5leHRUaWNrKGNiLCBudWxsLCByZXQpIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihyZWopIHsgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFja2lmeU9uUmVqZWN0ZWQsIHJlaiwgY2IpIH0pO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNhbGxiYWNraWZpZWQsIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjYWxsYmFja2lmaWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKSk7XG4gIHJldHVybiBjYWxsYmFja2lmaWVkO1xufVxuZXhwb3J0cy5jYWxsYmFja2lmeSA9IGNhbGxiYWNraWZ5O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHsgc3ByaXRlc2hlZXQgfSBmcm9tICdAZWxhc3RpYy9tYWtpJztcbmltcG9ydCBzcHJpdGVzIGZyb20gJ0BlbGFzdGljL21ha2kvZGlzdC9zcHJpdGVAMi5wbmcnO1xuaW1wb3J0IHsgUkdCQUltYWdlIH0gZnJvbSAnLi91dGlscy9pbWFnZSc7XG5pbXBvcnQgeyByYW5kb21Qb2ludCB9IGZyb20gJ0B0dXJmL3JhbmRvbSc7XG5pbXBvcnQgeyBwcm9wRWFjaCB9IGZyb20gJ0B0dXJmL21ldGEnO1xuXG52YXIgbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XG4gIGNvbnRhaW5lcjogJ21hcCcsXG4gIHN0eWxlOiAnaHR0cHM6Ly90aWxlcy5tYXBzLmVsYXN0aWMuY28vc3R5bGVzL2RhcmstbWF0dGVyL3N0eWxlLmpzb24nLFxufSk7XG5cbmNvbnN0IHNwcml0ZURhdGEgPSBzcHJpdGVzaGVldFsnMiddO1xuY29uc3QgaWNvbnMgPSBPYmplY3Qua2V5cyhzcHJpdGVEYXRhKS5maWx0ZXIoc3ByaXRlID0+IHtcbiAgcmV0dXJuIHNwcml0ZS5lbmRzV2l0aCgnLTE1Jyk7XG59KTtcbmNvbnN0IHBvaW50cyA9IHJhbmRvbVBvaW50KDEwMDApO1xucHJvcEVhY2gocG9pbnRzLCAoY3VyLCBpKSA9PiB7XG4gIGN1ci5pY29uID0gaWNvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGljb25zLmxlbmd0aC0xKSldO1xuICBjdXIuY29sb3IgPVxuICAgICcjJyArXG4gICAgTWF0aC5yYW5kb20oKVxuICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgLnN1YnN0cigtNik7XG4gIGN1ci5oYWxvX2NvbG9yID0gJyMnICtcbiAgTWF0aC5yYW5kb20oKVxuICAgIC50b1N0cmluZygxNilcbiAgICAuc3Vic3RyKC02KTtcbiAgY3VyLm9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSAqICgzNjAgLSAwKSArIDA7XG4gIGN1ci5zaXplID0gTWF0aC5yYW5kb20oKSAqICgzIC0gMSkgKyAxO1xufSk7XG5cbm1hcC5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5vbmxvYWQgPSAoZWwpID0+IHtcbiAgICBjb25zdCBpbWFnZURhdGEgPSBnZXRJbWFnZURhdGEoZWwuY3VycmVudFRhcmdldCk7XG4gICAgZm9yIChjb25zdCBpZCBpbiBzcHJpdGVEYXRhKSB7XG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHgsIHksIHNkZiwgcGl4ZWxSYXRpbyB9ID0gc3ByaXRlRGF0YVtpZF07XG4gICAgICBjb25zdCBkYXRhID0gbmV3IFJHQkFJbWFnZSh7IHdpZHRoLCBoZWlnaHQgfSk7XG4gICAgICBSR0JBSW1hZ2UuY29weShpbWFnZURhdGEsIGRhdGEsIHsgeCwgeSB9LCB7IHg6IDAsIHk6IDAgfSwgeyB3aWR0aCwgaGVpZ2h0IH0pO1xuICAgICAgLy8gcmVzdWx0W2lkXSA9IHsgZGF0YSwgcGl4ZWxSYXRpbywgc2RmIH07XG4gICAgICBtYXAuYWRkSW1hZ2UoaWQsIGRhdGEsICB7IHBpeGVsUmF0aW8sIHNkZiB9KTtcbiAgICB9XG4gIH07XG4gIGltYWdlLnNyYyA9IHNwcml0ZXM7XG5cbiAgbWFwLmFkZExheWVyKHtcbiAgICBpZDogJ3BvaW50cycsXG4gICAgdHlwZTogJ3N5bWJvbCcsXG4gICAgc291cmNlOiB7XG4gICAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgICBkYXRhOiBwb2ludHMsXG4gICAgfSxcbiAgICBsYXlvdXQ6IHtcbiAgICAgICdpY29uLWltYWdlJzogWydnZXQnLCAnaWNvbiddLFxuICAgICAgJ2ljb24tc2l6ZSc6IFsnZ2V0JywgJ3NpemUnXSxcbiAgICAgICdpY29uLXJvdGF0ZSc6IFsnZ2V0JywgJ29yaWVudGF0aW9uJ10sXG4gICAgICAnaWNvbi1hbGxvdy1vdmVybGFwJzogZmFsc2VcbiAgICB9LFxuICAgIHBhaW50OiB7XG4gICAgICAnaWNvbi1jb2xvcic6IFsnZ2V0JywgJ2NvbG9yJ10sXG4gICAgICAnaWNvbi1oYWxvLXdpZHRoJzogWydnZXQnLCAnc2l6ZSddLFxuICAgICAgJ2ljb24taGFsby1jb2xvcic6IFsnZ2V0JywgJ2hhbG9fY29sb3InXVxuICAgIH0sXG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGdldEltYWdlRGF0YShpbWcpIHtcbiAgY29uc3QgY2FudmFzID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkIHRvIGNyZWF0ZSBjYW52YXMgMmQgY29udGV4dCcpO1xuICB9XG4gIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0KTtcbiAgcmV0dXJuIGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG59XG4iLCIvLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWFwYm94L21hcGJveC1nbC1qcy9ibG9iL21hc3Rlci9zcmMvdXRpbC9pbWFnZS5qc1xuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5mdW5jdGlvbiBjcmVhdGVJbWFnZShpbWFnZSwge3dpZHRoLCBoZWlnaHR9LCBjaGFubmVscywgZGF0YSkge1xuICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiBjaGFubmVscyk7XG4gICAgfSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXkpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEubGVuZ3RoICE9PSB3aWR0aCAqIGhlaWdodCAqIGNoYW5uZWxzKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdtaXNtYXRjaGVkIGltYWdlIHNpemUnKTtcbiAgICB9XG4gICAgaW1hZ2Uud2lkdGggPSB3aWR0aDtcbiAgICBpbWFnZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgaW1hZ2UuZGF0YSA9IGRhdGE7XG4gICAgcmV0dXJuIGltYWdlO1xufVxuXG5mdW5jdGlvbiByZXNpemVJbWFnZShpbWFnZSwge3dpZHRoLCBoZWlnaHR9LCBjaGFubmVscykge1xuICAgIGlmICh3aWR0aCA9PT0gaW1hZ2Uud2lkdGggJiYgaGVpZ2h0ID09PSBpbWFnZS5oZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0ltYWdlID0gY3JlYXRlSW1hZ2Uoe30sIHt3aWR0aCwgaGVpZ2h0fSwgY2hhbm5lbHMpO1xuXG4gICAgY29weUltYWdlKGltYWdlLCBuZXdJbWFnZSwge3g6IDAsIHk6IDB9LCB7eDogMCwgeTogMH0sIHtcbiAgICAgICAgd2lkdGg6IE1hdGgubWluKGltYWdlLndpZHRoLCB3aWR0aCksXG4gICAgICAgIGhlaWdodDogTWF0aC5taW4oaW1hZ2UuaGVpZ2h0LCBoZWlnaHQpXG4gICAgfSwgY2hhbm5lbHMpO1xuXG4gICAgaW1hZ2Uud2lkdGggPSB3aWR0aDtcbiAgICBpbWFnZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgaW1hZ2UuZGF0YSA9IG5ld0ltYWdlLmRhdGE7XG59XG5cbmZ1bmN0aW9uIGNvcHlJbWFnZShzcmNJbWcsIGRzdEltZywgc3JjUHQsIGRzdFB0LCBzaXplLCBjaGFubmVscykge1xuICAgIGlmIChzaXplLndpZHRoID09PSAwIHx8IHNpemUuaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBkc3RJbWc7XG4gICAgfVxuXG4gICAgaWYgKHNpemUud2lkdGggPiBzcmNJbWcud2lkdGggfHxcbiAgICAgICAgc2l6ZS5oZWlnaHQgPiBzcmNJbWcuaGVpZ2h0IHx8XG4gICAgICAgIHNyY1B0LnggPiBzcmNJbWcud2lkdGggLSBzaXplLndpZHRoIHx8XG4gICAgICAgIHNyY1B0LnkgPiBzcmNJbWcuaGVpZ2h0IC0gc2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBzb3VyY2UgY29vcmRpbmF0ZXMgZm9yIGltYWdlIGNvcHknKTtcbiAgICB9XG5cbiAgICBpZiAoc2l6ZS53aWR0aCA+IGRzdEltZy53aWR0aCB8fFxuICAgICAgICBzaXplLmhlaWdodCA+IGRzdEltZy5oZWlnaHQgfHxcbiAgICAgICAgZHN0UHQueCA+IGRzdEltZy53aWR0aCAtIHNpemUud2lkdGggfHxcbiAgICAgICAgZHN0UHQueSA+IGRzdEltZy5oZWlnaHQgLSBzaXplLmhlaWdodCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGRlc3RpbmF0aW9uIGNvb3JkaW5hdGVzIGZvciBpbWFnZSBjb3B5Jyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3JjRGF0YSA9IHNyY0ltZy5kYXRhO1xuICAgIGNvbnN0IGRzdERhdGEgPSBkc3RJbWcuZGF0YTtcblxuICAgIGFzc2VydChzcmNEYXRhICE9PSBkc3REYXRhKTtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZS5oZWlnaHQ7IHkrKykge1xuICAgICAgICBjb25zdCBzcmNPZmZzZXQgPSAoKHNyY1B0LnkgKyB5KSAqIHNyY0ltZy53aWR0aCArIHNyY1B0LngpICogY2hhbm5lbHM7XG4gICAgICAgIGNvbnN0IGRzdE9mZnNldCA9ICgoZHN0UHQueSArIHkpICogZHN0SW1nLndpZHRoICsgZHN0UHQueCkgKiBjaGFubmVscztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLndpZHRoICogY2hhbm5lbHM7IGkrKykge1xuICAgICAgICAgICAgZHN0RGF0YVtkc3RPZmZzZXQgKyBpXSA9IHNyY0RhdGFbc3JjT2Zmc2V0ICsgaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZHN0SW1nO1xufVxuXG5leHBvcnQgY2xhc3MgQWxwaGFJbWFnZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihzaXplLCBkYXRhKSB7XG4gICAgICAgIGNyZWF0ZUltYWdlKHRoaXMsIHNpemUsIDEsIGRhdGEpO1xuICAgIH1cblxuICAgIHJlc2l6ZShzaXplKSB7XG4gICAgICAgIHJlc2l6ZUltYWdlKHRoaXMsIHNpemUsIDEpO1xuICAgIH1cblxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFscGhhSW1hZ2Uoe3dpZHRoOiB0aGlzLndpZHRoLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0fSwgbmV3IFVpbnQ4QXJyYXkodGhpcy5kYXRhKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvcHkoc3JjSW1nLCBkc3RJbWcsIHNyY1B0LCBkc3RQdCwgc2l6ZSkge1xuICAgICAgICBjb3B5SW1hZ2Uoc3JjSW1nLCBkc3RJbWcsIHNyY1B0LCBkc3RQdCwgc2l6ZSwgMSk7XG4gICAgfVxufVxuXG4vLyBOb3QgcHJlbXVsdGlwbGllZCwgYmVjYXVzZSBJbWFnZURhdGEgaXMgbm90IHByZW11bHRpcGxpZWQuXG4vLyBVTlBBQ0tfUFJFTVVMVElQTFlfQUxQSEFfV0VCR0wgbXVzdCBiZSB1c2VkIHdoZW4gdXBsb2FkaW5nIHRvIGEgdGV4dHVyZS5cbmV4cG9ydCBjbGFzcyBSR0JBSW1hZ2Uge1xuXG4gICAgLy8gZGF0YSBtdXN0IGJlIGEgVWludDhBcnJheSBpbnN0ZWFkIG9mIFVpbnQ4Q2xhbXBlZEFycmF5IGJlY2F1c2UgdGV4SW1hZ2UyRCBkb2VzIG5vdFxuICAgIC8vIHN1cHBvcnQgVWludDhDbGFtcGVkQXJyYXkgaW4gYWxsIGJyb3dzZXJzXG5cbiAgICBjb25zdHJ1Y3RvcihzaXplLCBkYXRhKSB7XG4gICAgICAgIGNyZWF0ZUltYWdlKHRoaXMsIHNpemUsIDQsIGRhdGEpO1xuICAgIH1cblxuICAgIHJlc2l6ZShzaXplKSB7XG4gICAgICAgIHJlc2l6ZUltYWdlKHRoaXMsIHNpemUsIDQpO1xuICAgIH1cblxuICAgIHJlcGxhY2UoZGF0YSwgY29weSkge1xuICAgICAgICBpZiAoY29weSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNldChkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSR0JBSW1hZ2Uoe3dpZHRoOiB0aGlzLndpZHRoLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0fSwgbmV3IFVpbnQ4QXJyYXkodGhpcy5kYXRhKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvcHkoc3JjSW1nLCBkc3RJbWcsIHNyY1B0LCBkc3RQdCwgc2l6ZSkge1xuICAgICAgICBjb3B5SW1hZ2Uoc3JjSW1nLCBkc3RJbWcsIHNyY1B0LCBkc3RQdCwgc2l6ZSwgNCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==