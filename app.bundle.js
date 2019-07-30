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
/*! exports provided: aerialway-15, airfield-15, airport-15, alcohol-shop-15, american-football-15, amusement-park-15, aquarium-15, arrow-15, art-gallery-15, attraction-15, bakery-15, bank-15, bar-15, barrier-15, baseball-15, basketball-15, bbq-15, beach-15, beer-15, bicycle-15, bicycle-share-15, blood-bank-15, boat-15, bowling-alley-15, bridge-15, building-15, building-alt1-15, bus-15, cafe-15, campsite-15, car-15, car-rental-15, car-repair-15, casino-15, castle-15, cemetery-15, charging-station-15, cinema-15, circle-15, circle-stroked-15, city-15, clothing-store-15, college-15, commercial-15, communications-tower-15, confectionery-15, convenience-15, cricket-15, cross-15, dam-15, danger-15, defibrillator-15, dentist-15, doctor-15, dog-park-15, drinking-water-15, embassy-15, emergency-phone-15, entrance-15, entrance-alt1-15, farm-15, fast-food-15, fence-15, ferry-15, fire-station-15, fitness-centre-15, florist-15, fuel-15, furniture-15, gaming-15, garden-15, garden-centre-15, gift-15, globe-15, golf-15, grocery-15, hairdresser-15, harbor-15, hardware-15, heart-15, heliport-15, home-15, horse-riding-15, hospital-15, ice-cream-15, industry-15, information-15, jewelry-store-15, karaoke-15, landmark-15, landuse-15, laundry-15, library-15, lighthouse-15, lodging-15, logging-15, marker-15, marker-stroked-15, mobile-phone-15, monument-15, mountain-15, museum-15, music-15, natural-15, optician-15, paint-15, park-15, park-alt1-15, parking-15, parking-garage-15, pharmacy-15, picnic-site-15, pitch-15, place-of-worship-15, playground-15, police-15, post-15, prison-15, rail-15, rail-light-15, rail-metro-15, ranger-station-15, recycling-15, religious-buddhist-15, religious-christian-15, religious-jewish-15, religious-muslim-15, residential-community-15, restaurant-15, restaurant-noodle-15, restaurant-pizza-15, restaurant-seafood-15, roadblock-15, rocket-15, school-15, scooter-15, shelter-15, shoe-15, shop-15, skateboard-15, skiing-15, slaughterhouse-15, slipway-15, snowmobile-15, soccer-15, square-15, square-stroked-15, stadium-15, star-15, star-stroked-15, suitcase-15, sushi-15, swimming-15, table-tennis-15, teahouse-15, telephone-15, tennis-15, theatre-15, toilet-15, town-15, town-hall-15, triangle-15, triangle-stroked-15, veterinary-15, viewpoint-15, village-15, volcano-15, volleyball-15, warehouse-15, waste-basket-15, watch-15, water-15, waterfall-15, watermill-15, wetland-15, wheelchair-15, windmill-15, zoo-15, aerialway-11, airfield-11, airport-11, alcohol-shop-11, american-football-11, amusement-park-11, aquarium-11, arrow-11, art-gallery-11, attraction-11, bakery-11, bank-11, bar-11, barrier-11, baseball-11, basketball-11, bbq-11, beach-11, beer-11, bicycle-11, bicycle-share-11, blood-bank-11, boat-11, bowling-alley-11, bridge-11, building-11, building-alt1-11, bus-11, cafe-11, campsite-11, car-11, car-rental-11, car-repair-11, casino-11, castle-11, cemetery-11, charging-station-11, cinema-11, circle-11, circle-stroked-11, city-11, clothing-store-11, college-11, commercial-11, communications-tower-11, confectionery-11, convenience-11, cricket-11, cross-11, dam-11, danger-11, defibrillator-11, dentist-11, doctor-11, dog-park-11, drinking-water-11, embassy-11, emergency-phone-11, entrance-11, entrance-alt1-11, farm-11, fast-food-11, fence-11, ferry-11, fire-station-11, fitness-centre-11, florist-11, fuel-11, furniture-11, gaming-11, garden-11, garden-centre-11, gift-11, globe-11, golf-11, grocery-11, hairdresser-11, harbor-11, hardware-11, heart-11, heliport-11, home-11, horse-riding-11, hospital-11, ice-cream-11, industry-11, information-11, jewelry-store-11, karaoke-11, landmark-11, landuse-11, laundry-11, library-11, lighthouse-11, lodging-11, logging-11, marker-11, marker-stroked-11, mobile-phone-11, monument-11, mountain-11, museum-11, music-11, natural-11, optician-11, paint-11, park-11, park-alt1-11, parking-11, parking-garage-11, pharmacy-11, picnic-site-11, pitch-11, place-of-worship-11, playground-11, police-11, post-11, prison-11, rail-11, rail-light-11, rail-metro-11, ranger-station-11, recycling-11, religious-buddhist-11, religious-christian-11, religious-jewish-11, religious-muslim-11, residential-community-11, restaurant-11, restaurant-noodle-11, restaurant-pizza-11, restaurant-seafood-11, roadblock-11, rocket-11, school-11, scooter-11, shelter-11, shoe-11, shop-11, skateboard-11, skiing-11, slaughterhouse-11, slipway-11, snowmobile-11, soccer-11, square-11, square-stroked-11, stadium-11, star-11, star-stroked-11, suitcase-11, sushi-11, swimming-11, table-tennis-11, teahouse-11, telephone-11, tennis-11, theatre-11, toilet-11, town-11, town-hall-11, triangle-11, triangle-stroked-11, veterinary-11, viewpoint-11, village-11, volcano-11, volleyball-11, warehouse-11, waste-basket-11, watch-11, water-11, waterfall-11, watermill-11, wetland-11, wheelchair-11, windmill-11, zoo-11, default */
/***/ (function(module) {

module.exports = {"aerialway-15":{"width":21,"height":21,"x":0,"y":0,"pixelRatio":1,"sdf":true},"airfield-15":{"width":21,"height":21,"x":21,"y":0,"pixelRatio":1,"sdf":true},"airport-15":{"width":21,"height":21,"x":0,"y":21,"pixelRatio":1,"sdf":true},"alcohol-shop-15":{"width":21,"height":21,"x":21,"y":21,"pixelRatio":1,"sdf":true},"american-football-15":{"width":21,"height":21,"x":42,"y":0,"pixelRatio":1,"sdf":true},"amusement-park-15":{"width":21,"height":21,"x":63,"y":0,"pixelRatio":1,"sdf":true},"aquarium-15":{"width":21,"height":21,"x":42,"y":21,"pixelRatio":1,"sdf":true},"arrow-15":{"width":21,"height":21,"x":63,"y":21,"pixelRatio":1,"sdf":true},"art-gallery-15":{"width":21,"height":21,"x":0,"y":42,"pixelRatio":1,"sdf":true},"attraction-15":{"width":21,"height":21,"x":21,"y":42,"pixelRatio":1,"sdf":true},"bakery-15":{"width":21,"height":21,"x":42,"y":42,"pixelRatio":1,"sdf":true},"bank-15":{"width":21,"height":21,"x":63,"y":42,"pixelRatio":1,"sdf":true},"bar-15":{"width":21,"height":21,"x":0,"y":63,"pixelRatio":1,"sdf":true},"barrier-15":{"width":21,"height":21,"x":21,"y":63,"pixelRatio":1,"sdf":true},"baseball-15":{"width":21,"height":21,"x":42,"y":63,"pixelRatio":1,"sdf":true},"basketball-15":{"width":21,"height":21,"x":63,"y":63,"pixelRatio":1,"sdf":true},"bbq-15":{"width":21,"height":21,"x":84,"y":0,"pixelRatio":1,"sdf":true},"beach-15":{"width":21,"height":21,"x":105,"y":0,"pixelRatio":1,"sdf":true},"beer-15":{"width":21,"height":21,"x":126,"y":0,"pixelRatio":1,"sdf":true},"bicycle-15":{"width":21,"height":21,"x":147,"y":0,"pixelRatio":1,"sdf":true},"bicycle-share-15":{"width":21,"height":21,"x":84,"y":21,"pixelRatio":1,"sdf":true},"blood-bank-15":{"width":21,"height":21,"x":105,"y":21,"pixelRatio":1,"sdf":true},"boat-15":{"width":21,"height":21,"x":126,"y":21,"pixelRatio":1,"sdf":true},"bowling-alley-15":{"width":21,"height":21,"x":147,"y":21,"pixelRatio":1,"sdf":true},"bridge-15":{"width":21,"height":21,"x":84,"y":42,"pixelRatio":1,"sdf":true},"building-15":{"width":21,"height":21,"x":105,"y":42,"pixelRatio":1,"sdf":true},"building-alt1-15":{"width":21,"height":21,"x":126,"y":42,"pixelRatio":1,"sdf":true},"bus-15":{"width":21,"height":21,"x":147,"y":42,"pixelRatio":1,"sdf":true},"cafe-15":{"width":21,"height":21,"x":84,"y":63,"pixelRatio":1,"sdf":true},"campsite-15":{"width":21,"height":21,"x":105,"y":63,"pixelRatio":1,"sdf":true},"car-15":{"width":21,"height":21,"x":126,"y":63,"pixelRatio":1,"sdf":true},"car-rental-15":{"width":21,"height":21,"x":147,"y":63,"pixelRatio":1,"sdf":true},"car-repair-15":{"width":21,"height":21,"x":0,"y":84,"pixelRatio":1,"sdf":true},"casino-15":{"width":21,"height":21,"x":21,"y":84,"pixelRatio":1,"sdf":true},"castle-15":{"width":21,"height":21,"x":42,"y":84,"pixelRatio":1,"sdf":true},"cemetery-15":{"width":21,"height":21,"x":63,"y":84,"pixelRatio":1,"sdf":true},"charging-station-15":{"width":21,"height":21,"x":84,"y":84,"pixelRatio":1,"sdf":true},"cinema-15":{"width":21,"height":21,"x":105,"y":84,"pixelRatio":1,"sdf":true},"circle-15":{"width":21,"height":21,"x":126,"y":84,"pixelRatio":1,"sdf":true},"circle-stroked-15":{"width":21,"height":21,"x":147,"y":84,"pixelRatio":1,"sdf":true},"city-15":{"width":21,"height":21,"x":0,"y":105,"pixelRatio":1,"sdf":true},"clothing-store-15":{"width":21,"height":21,"x":21,"y":105,"pixelRatio":1,"sdf":true},"college-15":{"width":21,"height":21,"x":42,"y":105,"pixelRatio":1,"sdf":true},"commercial-15":{"width":21,"height":21,"x":63,"y":105,"pixelRatio":1,"sdf":true},"communications-tower-15":{"width":21,"height":21,"x":84,"y":105,"pixelRatio":1,"sdf":true},"confectionery-15":{"width":21,"height":21,"x":105,"y":105,"pixelRatio":1,"sdf":true},"convenience-15":{"width":21,"height":21,"x":126,"y":105,"pixelRatio":1,"sdf":true},"cricket-15":{"width":21,"height":21,"x":147,"y":105,"pixelRatio":1,"sdf":true},"cross-15":{"width":21,"height":21,"x":0,"y":126,"pixelRatio":1,"sdf":true},"dam-15":{"width":21,"height":21,"x":21,"y":126,"pixelRatio":1,"sdf":true},"danger-15":{"width":21,"height":21,"x":42,"y":126,"pixelRatio":1,"sdf":true},"defibrillator-15":{"width":21,"height":21,"x":63,"y":126,"pixelRatio":1,"sdf":true},"dentist-15":{"width":21,"height":21,"x":84,"y":126,"pixelRatio":1,"sdf":true},"doctor-15":{"width":21,"height":21,"x":105,"y":126,"pixelRatio":1,"sdf":true},"dog-park-15":{"width":21,"height":21,"x":126,"y":126,"pixelRatio":1,"sdf":true},"drinking-water-15":{"width":21,"height":21,"x":147,"y":126,"pixelRatio":1,"sdf":true},"embassy-15":{"width":21,"height":21,"x":0,"y":147,"pixelRatio":1,"sdf":true},"emergency-phone-15":{"width":21,"height":21,"x":21,"y":147,"pixelRatio":1,"sdf":true},"entrance-15":{"width":21,"height":21,"x":42,"y":147,"pixelRatio":1,"sdf":true},"entrance-alt1-15":{"width":21,"height":21,"x":63,"y":147,"pixelRatio":1,"sdf":true},"farm-15":{"width":21,"height":21,"x":84,"y":147,"pixelRatio":1,"sdf":true},"fast-food-15":{"width":21,"height":21,"x":105,"y":147,"pixelRatio":1,"sdf":true},"fence-15":{"width":21,"height":21,"x":126,"y":147,"pixelRatio":1,"sdf":true},"ferry-15":{"width":21,"height":21,"x":147,"y":147,"pixelRatio":1,"sdf":true},"fire-station-15":{"width":21,"height":21,"x":168,"y":0,"pixelRatio":1,"sdf":true},"fitness-centre-15":{"width":21,"height":21,"x":189,"y":0,"pixelRatio":1,"sdf":true},"florist-15":{"width":21,"height":21,"x":210,"y":0,"pixelRatio":1,"sdf":true},"fuel-15":{"width":21,"height":21,"x":231,"y":0,"pixelRatio":1,"sdf":true},"furniture-15":{"width":21,"height":21,"x":252,"y":0,"pixelRatio":1,"sdf":true},"gaming-15":{"width":21,"height":21,"x":273,"y":0,"pixelRatio":1,"sdf":true},"garden-15":{"width":21,"height":21,"x":294,"y":0,"pixelRatio":1,"sdf":true},"garden-centre-15":{"width":21,"height":21,"x":315,"y":0,"pixelRatio":1,"sdf":true},"gift-15":{"width":21,"height":21,"x":168,"y":21,"pixelRatio":1,"sdf":true},"globe-15":{"width":21,"height":21,"x":189,"y":21,"pixelRatio":1,"sdf":true},"golf-15":{"width":21,"height":21,"x":210,"y":21,"pixelRatio":1,"sdf":true},"grocery-15":{"width":21,"height":21,"x":231,"y":21,"pixelRatio":1,"sdf":true},"hairdresser-15":{"width":21,"height":21,"x":252,"y":21,"pixelRatio":1,"sdf":true},"harbor-15":{"width":21,"height":21,"x":273,"y":21,"pixelRatio":1,"sdf":true},"hardware-15":{"width":21,"height":21,"x":294,"y":21,"pixelRatio":1,"sdf":true},"heart-15":{"width":21,"height":21,"x":315,"y":21,"pixelRatio":1,"sdf":true},"heliport-15":{"width":21,"height":21,"x":168,"y":42,"pixelRatio":1,"sdf":true},"home-15":{"width":21,"height":21,"x":189,"y":42,"pixelRatio":1,"sdf":true},"horse-riding-15":{"width":21,"height":21,"x":210,"y":42,"pixelRatio":1,"sdf":true},"hospital-15":{"width":21,"height":21,"x":231,"y":42,"pixelRatio":1,"sdf":true},"ice-cream-15":{"width":21,"height":21,"x":252,"y":42,"pixelRatio":1,"sdf":true},"industry-15":{"width":21,"height":21,"x":273,"y":42,"pixelRatio":1,"sdf":true},"information-15":{"width":21,"height":21,"x":294,"y":42,"pixelRatio":1,"sdf":true},"jewelry-store-15":{"width":21,"height":21,"x":315,"y":42,"pixelRatio":1,"sdf":true},"karaoke-15":{"width":21,"height":21,"x":168,"y":63,"pixelRatio":1,"sdf":true},"landmark-15":{"width":21,"height":21,"x":189,"y":63,"pixelRatio":1,"sdf":true},"landuse-15":{"width":21,"height":21,"x":210,"y":63,"pixelRatio":1,"sdf":true},"laundry-15":{"width":21,"height":21,"x":231,"y":63,"pixelRatio":1,"sdf":true},"library-15":{"width":21,"height":21,"x":252,"y":63,"pixelRatio":1,"sdf":true},"lighthouse-15":{"width":21,"height":21,"x":273,"y":63,"pixelRatio":1,"sdf":true},"lodging-15":{"width":21,"height":21,"x":294,"y":63,"pixelRatio":1,"sdf":true},"logging-15":{"width":21,"height":21,"x":315,"y":63,"pixelRatio":1,"sdf":true},"marker-15":{"width":21,"height":21,"x":168,"y":84,"pixelRatio":1,"sdf":true},"marker-stroked-15":{"width":21,"height":21,"x":189,"y":84,"pixelRatio":1,"sdf":true},"mobile-phone-15":{"width":21,"height":21,"x":210,"y":84,"pixelRatio":1,"sdf":true},"monument-15":{"width":21,"height":21,"x":231,"y":84,"pixelRatio":1,"sdf":true},"mountain-15":{"width":21,"height":21,"x":252,"y":84,"pixelRatio":1,"sdf":true},"museum-15":{"width":21,"height":21,"x":273,"y":84,"pixelRatio":1,"sdf":true},"music-15":{"width":21,"height":21,"x":294,"y":84,"pixelRatio":1,"sdf":true},"natural-15":{"width":21,"height":21,"x":315,"y":84,"pixelRatio":1,"sdf":true},"optician-15":{"width":21,"height":21,"x":168,"y":105,"pixelRatio":1,"sdf":true},"paint-15":{"width":21,"height":21,"x":189,"y":105,"pixelRatio":1,"sdf":true},"park-15":{"width":21,"height":21,"x":210,"y":105,"pixelRatio":1,"sdf":true},"park-alt1-15":{"width":21,"height":21,"x":231,"y":105,"pixelRatio":1,"sdf":true},"parking-15":{"width":21,"height":21,"x":252,"y":105,"pixelRatio":1,"sdf":true},"parking-garage-15":{"width":21,"height":21,"x":273,"y":105,"pixelRatio":1,"sdf":true},"pharmacy-15":{"width":21,"height":21,"x":294,"y":105,"pixelRatio":1,"sdf":true},"picnic-site-15":{"width":21,"height":21,"x":315,"y":105,"pixelRatio":1,"sdf":true},"pitch-15":{"width":21,"height":21,"x":168,"y":126,"pixelRatio":1,"sdf":true},"place-of-worship-15":{"width":21,"height":21,"x":189,"y":126,"pixelRatio":1,"sdf":true},"playground-15":{"width":21,"height":21,"x":210,"y":126,"pixelRatio":1,"sdf":true},"police-15":{"width":21,"height":21,"x":231,"y":126,"pixelRatio":1,"sdf":true},"post-15":{"width":21,"height":21,"x":252,"y":126,"pixelRatio":1,"sdf":true},"prison-15":{"width":21,"height":21,"x":273,"y":126,"pixelRatio":1,"sdf":true},"rail-15":{"width":21,"height":21,"x":294,"y":126,"pixelRatio":1,"sdf":true},"rail-light-15":{"width":21,"height":21,"x":315,"y":126,"pixelRatio":1,"sdf":true},"rail-metro-15":{"width":21,"height":21,"x":168,"y":147,"pixelRatio":1,"sdf":true},"ranger-station-15":{"width":21,"height":21,"x":189,"y":147,"pixelRatio":1,"sdf":true},"recycling-15":{"width":21,"height":21,"x":210,"y":147,"pixelRatio":1,"sdf":true},"religious-buddhist-15":{"width":21,"height":21,"x":231,"y":147,"pixelRatio":1,"sdf":true},"religious-christian-15":{"width":21,"height":21,"x":252,"y":147,"pixelRatio":1,"sdf":true},"religious-jewish-15":{"width":21,"height":21,"x":273,"y":147,"pixelRatio":1,"sdf":true},"religious-muslim-15":{"width":21,"height":21,"x":294,"y":147,"pixelRatio":1,"sdf":true},"residential-community-15":{"width":21,"height":21,"x":315,"y":147,"pixelRatio":1,"sdf":true},"restaurant-15":{"width":21,"height":21,"x":0,"y":168,"pixelRatio":1,"sdf":true},"restaurant-noodle-15":{"width":21,"height":21,"x":21,"y":168,"pixelRatio":1,"sdf":true},"restaurant-pizza-15":{"width":21,"height":21,"x":42,"y":168,"pixelRatio":1,"sdf":true},"restaurant-seafood-15":{"width":21,"height":21,"x":63,"y":168,"pixelRatio":1,"sdf":true},"roadblock-15":{"width":21,"height":21,"x":84,"y":168,"pixelRatio":1,"sdf":true},"rocket-15":{"width":21,"height":21,"x":105,"y":168,"pixelRatio":1,"sdf":true},"school-15":{"width":21,"height":21,"x":126,"y":168,"pixelRatio":1,"sdf":true},"scooter-15":{"width":21,"height":21,"x":147,"y":168,"pixelRatio":1,"sdf":true},"shelter-15":{"width":21,"height":21,"x":168,"y":168,"pixelRatio":1,"sdf":true},"shoe-15":{"width":21,"height":21,"x":189,"y":168,"pixelRatio":1,"sdf":true},"shop-15":{"width":21,"height":21,"x":210,"y":168,"pixelRatio":1,"sdf":true},"skateboard-15":{"width":21,"height":21,"x":231,"y":168,"pixelRatio":1,"sdf":true},"skiing-15":{"width":21,"height":21,"x":252,"y":168,"pixelRatio":1,"sdf":true},"slaughterhouse-15":{"width":21,"height":21,"x":273,"y":168,"pixelRatio":1,"sdf":true},"slipway-15":{"width":21,"height":21,"x":294,"y":168,"pixelRatio":1,"sdf":true},"snowmobile-15":{"width":21,"height":21,"x":315,"y":168,"pixelRatio":1,"sdf":true},"soccer-15":{"width":21,"height":21,"x":0,"y":189,"pixelRatio":1,"sdf":true},"square-15":{"width":21,"height":21,"x":21,"y":189,"pixelRatio":1,"sdf":true},"square-stroked-15":{"width":21,"height":21,"x":42,"y":189,"pixelRatio":1,"sdf":true},"stadium-15":{"width":21,"height":21,"x":63,"y":189,"pixelRatio":1,"sdf":true},"star-15":{"width":21,"height":21,"x":84,"y":189,"pixelRatio":1,"sdf":true},"star-stroked-15":{"width":21,"height":21,"x":105,"y":189,"pixelRatio":1,"sdf":true},"suitcase-15":{"width":21,"height":21,"x":126,"y":189,"pixelRatio":1,"sdf":true},"sushi-15":{"width":21,"height":21,"x":147,"y":189,"pixelRatio":1,"sdf":true},"swimming-15":{"width":21,"height":21,"x":168,"y":189,"pixelRatio":1,"sdf":true},"table-tennis-15":{"width":21,"height":21,"x":189,"y":189,"pixelRatio":1,"sdf":true},"teahouse-15":{"width":21,"height":21,"x":210,"y":189,"pixelRatio":1,"sdf":true},"telephone-15":{"width":21,"height":21,"x":231,"y":189,"pixelRatio":1,"sdf":true},"tennis-15":{"width":21,"height":21,"x":252,"y":189,"pixelRatio":1,"sdf":true},"theatre-15":{"width":21,"height":21,"x":273,"y":189,"pixelRatio":1,"sdf":true},"toilet-15":{"width":21,"height":21,"x":294,"y":189,"pixelRatio":1,"sdf":true},"town-15":{"width":21,"height":21,"x":315,"y":189,"pixelRatio":1,"sdf":true},"town-hall-15":{"width":21,"height":21,"x":0,"y":210,"pixelRatio":1,"sdf":true},"triangle-15":{"width":21,"height":21,"x":21,"y":210,"pixelRatio":1,"sdf":true},"triangle-stroked-15":{"width":21,"height":21,"x":42,"y":210,"pixelRatio":1,"sdf":true},"veterinary-15":{"width":21,"height":21,"x":63,"y":210,"pixelRatio":1,"sdf":true},"viewpoint-15":{"width":21,"height":21,"x":84,"y":210,"pixelRatio":1,"sdf":true},"village-15":{"width":21,"height":21,"x":105,"y":210,"pixelRatio":1,"sdf":true},"volcano-15":{"width":21,"height":21,"x":126,"y":210,"pixelRatio":1,"sdf":true},"volleyball-15":{"width":21,"height":21,"x":147,"y":210,"pixelRatio":1,"sdf":true},"warehouse-15":{"width":21,"height":21,"x":168,"y":210,"pixelRatio":1,"sdf":true},"waste-basket-15":{"width":21,"height":21,"x":189,"y":210,"pixelRatio":1,"sdf":true},"watch-15":{"width":21,"height":21,"x":210,"y":210,"pixelRatio":1,"sdf":true},"water-15":{"width":21,"height":21,"x":231,"y":210,"pixelRatio":1,"sdf":true},"waterfall-15":{"width":21,"height":21,"x":252,"y":210,"pixelRatio":1,"sdf":true},"watermill-15":{"width":21,"height":21,"x":273,"y":210,"pixelRatio":1,"sdf":true},"wetland-15":{"width":21,"height":21,"x":294,"y":210,"pixelRatio":1,"sdf":true},"wheelchair-15":{"width":21,"height":21,"x":315,"y":210,"pixelRatio":1,"sdf":true},"windmill-15":{"width":21,"height":21,"x":0,"y":231,"pixelRatio":1,"sdf":true},"zoo-15":{"width":21,"height":21,"x":21,"y":231,"pixelRatio":1,"sdf":true},"aerialway-11":{"width":17,"height":17,"x":42,"y":231,"pixelRatio":1,"sdf":true},"airfield-11":{"width":17,"height":17,"x":59,"y":231,"pixelRatio":1,"sdf":true},"airport-11":{"width":17,"height":17,"x":76,"y":231,"pixelRatio":1,"sdf":true},"alcohol-shop-11":{"width":17,"height":17,"x":93,"y":231,"pixelRatio":1,"sdf":true},"american-football-11":{"width":17,"height":17,"x":110,"y":231,"pixelRatio":1,"sdf":true},"amusement-park-11":{"width":17,"height":17,"x":127,"y":231,"pixelRatio":1,"sdf":true},"aquarium-11":{"width":17,"height":17,"x":144,"y":231,"pixelRatio":1,"sdf":true},"arrow-11":{"width":17,"height":17,"x":161,"y":231,"pixelRatio":1,"sdf":true},"art-gallery-11":{"width":17,"height":17,"x":178,"y":231,"pixelRatio":1,"sdf":true},"attraction-11":{"width":17,"height":17,"x":195,"y":231,"pixelRatio":1,"sdf":true},"bakery-11":{"width":17,"height":17,"x":212,"y":231,"pixelRatio":1,"sdf":true},"bank-11":{"width":17,"height":17,"x":229,"y":231,"pixelRatio":1,"sdf":true},"bar-11":{"width":17,"height":17,"x":246,"y":231,"pixelRatio":1,"sdf":true},"barrier-11":{"width":17,"height":17,"x":263,"y":231,"pixelRatio":1,"sdf":true},"baseball-11":{"width":17,"height":17,"x":280,"y":231,"pixelRatio":1,"sdf":true},"basketball-11":{"width":17,"height":17,"x":297,"y":231,"pixelRatio":1,"sdf":true},"bbq-11":{"width":17,"height":17,"x":314,"y":231,"pixelRatio":1,"sdf":true},"beach-11":{"width":17,"height":17,"x":0,"y":252,"pixelRatio":1,"sdf":true},"beer-11":{"width":17,"height":17,"x":17,"y":252,"pixelRatio":1,"sdf":true},"bicycle-11":{"width":17,"height":17,"x":34,"y":252,"pixelRatio":1,"sdf":true},"bicycle-share-11":{"width":17,"height":17,"x":51,"y":252,"pixelRatio":1,"sdf":true},"blood-bank-11":{"width":17,"height":17,"x":68,"y":252,"pixelRatio":1,"sdf":true},"boat-11":{"width":17,"height":17,"x":85,"y":252,"pixelRatio":1,"sdf":true},"bowling-alley-11":{"width":17,"height":17,"x":102,"y":252,"pixelRatio":1,"sdf":true},"bridge-11":{"width":17,"height":17,"x":119,"y":252,"pixelRatio":1,"sdf":true},"building-11":{"width":17,"height":17,"x":136,"y":252,"pixelRatio":1,"sdf":true},"building-alt1-11":{"width":17,"height":17,"x":153,"y":252,"pixelRatio":1,"sdf":true},"bus-11":{"width":17,"height":17,"x":170,"y":252,"pixelRatio":1,"sdf":true},"cafe-11":{"width":17,"height":17,"x":187,"y":252,"pixelRatio":1,"sdf":true},"campsite-11":{"width":17,"height":17,"x":204,"y":252,"pixelRatio":1,"sdf":true},"car-11":{"width":17,"height":17,"x":221,"y":252,"pixelRatio":1,"sdf":true},"car-rental-11":{"width":17,"height":17,"x":238,"y":252,"pixelRatio":1,"sdf":true},"car-repair-11":{"width":17,"height":17,"x":255,"y":252,"pixelRatio":1,"sdf":true},"casino-11":{"width":17,"height":17,"x":272,"y":252,"pixelRatio":1,"sdf":true},"castle-11":{"width":17,"height":17,"x":289,"y":252,"pixelRatio":1,"sdf":true},"cemetery-11":{"width":17,"height":17,"x":306,"y":252,"pixelRatio":1,"sdf":true},"charging-station-11":{"width":17,"height":17,"x":0,"y":269,"pixelRatio":1,"sdf":true},"cinema-11":{"width":17,"height":17,"x":17,"y":269,"pixelRatio":1,"sdf":true},"circle-11":{"width":17,"height":17,"x":34,"y":269,"pixelRatio":1,"sdf":true},"circle-stroked-11":{"width":17,"height":17,"x":51,"y":269,"pixelRatio":1,"sdf":true},"city-11":{"width":17,"height":17,"x":68,"y":269,"pixelRatio":1,"sdf":true},"clothing-store-11":{"width":17,"height":17,"x":85,"y":269,"pixelRatio":1,"sdf":true},"college-11":{"width":17,"height":17,"x":102,"y":269,"pixelRatio":1,"sdf":true},"commercial-11":{"width":17,"height":17,"x":119,"y":269,"pixelRatio":1,"sdf":true},"communications-tower-11":{"width":17,"height":17,"x":136,"y":269,"pixelRatio":1,"sdf":true},"confectionery-11":{"width":17,"height":17,"x":153,"y":269,"pixelRatio":1,"sdf":true},"convenience-11":{"width":17,"height":17,"x":170,"y":269,"pixelRatio":1,"sdf":true},"cricket-11":{"width":17,"height":17,"x":187,"y":269,"pixelRatio":1,"sdf":true},"cross-11":{"width":17,"height":17,"x":204,"y":269,"pixelRatio":1,"sdf":true},"dam-11":{"width":17,"height":17,"x":221,"y":269,"pixelRatio":1,"sdf":true},"danger-11":{"width":17,"height":17,"x":238,"y":269,"pixelRatio":1,"sdf":true},"defibrillator-11":{"width":17,"height":17,"x":255,"y":269,"pixelRatio":1,"sdf":true},"dentist-11":{"width":17,"height":17,"x":272,"y":269,"pixelRatio":1,"sdf":true},"doctor-11":{"width":17,"height":17,"x":289,"y":269,"pixelRatio":1,"sdf":true},"dog-park-11":{"width":17,"height":17,"x":306,"y":269,"pixelRatio":1,"sdf":true},"drinking-water-11":{"width":17,"height":17,"x":0,"y":286,"pixelRatio":1,"sdf":true},"embassy-11":{"width":17,"height":17,"x":17,"y":286,"pixelRatio":1,"sdf":true},"emergency-phone-11":{"width":17,"height":17,"x":34,"y":286,"pixelRatio":1,"sdf":true},"entrance-11":{"width":17,"height":17,"x":51,"y":286,"pixelRatio":1,"sdf":true},"entrance-alt1-11":{"width":17,"height":17,"x":68,"y":286,"pixelRatio":1,"sdf":true},"farm-11":{"width":17,"height":17,"x":85,"y":286,"pixelRatio":1,"sdf":true},"fast-food-11":{"width":17,"height":17,"x":102,"y":286,"pixelRatio":1,"sdf":true},"fence-11":{"width":17,"height":17,"x":119,"y":286,"pixelRatio":1,"sdf":true},"ferry-11":{"width":17,"height":17,"x":136,"y":286,"pixelRatio":1,"sdf":true},"fire-station-11":{"width":17,"height":17,"x":153,"y":286,"pixelRatio":1,"sdf":true},"fitness-centre-11":{"width":17,"height":17,"x":170,"y":286,"pixelRatio":1,"sdf":true},"florist-11":{"width":17,"height":17,"x":187,"y":286,"pixelRatio":1,"sdf":true},"fuel-11":{"width":17,"height":17,"x":204,"y":286,"pixelRatio":1,"sdf":true},"furniture-11":{"width":17,"height":17,"x":221,"y":286,"pixelRatio":1,"sdf":true},"gaming-11":{"width":17,"height":17,"x":238,"y":286,"pixelRatio":1,"sdf":true},"garden-11":{"width":17,"height":17,"x":255,"y":286,"pixelRatio":1,"sdf":true},"garden-centre-11":{"width":17,"height":17,"x":272,"y":286,"pixelRatio":1,"sdf":true},"gift-11":{"width":17,"height":17,"x":289,"y":286,"pixelRatio":1,"sdf":true},"globe-11":{"width":17,"height":17,"x":306,"y":286,"pixelRatio":1,"sdf":true},"golf-11":{"width":17,"height":17,"x":0,"y":303,"pixelRatio":1,"sdf":true},"grocery-11":{"width":17,"height":17,"x":17,"y":303,"pixelRatio":1,"sdf":true},"hairdresser-11":{"width":17,"height":17,"x":34,"y":303,"pixelRatio":1,"sdf":true},"harbor-11":{"width":17,"height":17,"x":51,"y":303,"pixelRatio":1,"sdf":true},"hardware-11":{"width":17,"height":17,"x":68,"y":303,"pixelRatio":1,"sdf":true},"heart-11":{"width":17,"height":17,"x":85,"y":303,"pixelRatio":1,"sdf":true},"heliport-11":{"width":17,"height":17,"x":102,"y":303,"pixelRatio":1,"sdf":true},"home-11":{"width":17,"height":17,"x":119,"y":303,"pixelRatio":1,"sdf":true},"horse-riding-11":{"width":17,"height":17,"x":136,"y":303,"pixelRatio":1,"sdf":true},"hospital-11":{"width":17,"height":17,"x":153,"y":303,"pixelRatio":1,"sdf":true},"ice-cream-11":{"width":17,"height":17,"x":170,"y":303,"pixelRatio":1,"sdf":true},"industry-11":{"width":17,"height":17,"x":187,"y":303,"pixelRatio":1,"sdf":true},"information-11":{"width":17,"height":17,"x":204,"y":303,"pixelRatio":1,"sdf":true},"jewelry-store-11":{"width":17,"height":17,"x":221,"y":303,"pixelRatio":1,"sdf":true},"karaoke-11":{"width":17,"height":17,"x":238,"y":303,"pixelRatio":1,"sdf":true},"landmark-11":{"width":17,"height":17,"x":255,"y":303,"pixelRatio":1,"sdf":true},"landuse-11":{"width":17,"height":17,"x":272,"y":303,"pixelRatio":1,"sdf":true},"laundry-11":{"width":17,"height":17,"x":289,"y":303,"pixelRatio":1,"sdf":true},"library-11":{"width":17,"height":17,"x":306,"y":303,"pixelRatio":1,"sdf":true},"lighthouse-11":{"width":17,"height":17,"x":323,"y":252,"pixelRatio":1,"sdf":true},"lodging-11":{"width":17,"height":17,"x":340,"y":252,"pixelRatio":1,"sdf":true},"logging-11":{"width":17,"height":17,"x":357,"y":252,"pixelRatio":1,"sdf":true},"marker-11":{"width":17,"height":17,"x":374,"y":252,"pixelRatio":1,"sdf":true},"marker-stroked-11":{"width":17,"height":17,"x":391,"y":252,"pixelRatio":1,"sdf":true},"mobile-phone-11":{"width":17,"height":17,"x":408,"y":252,"pixelRatio":1,"sdf":true},"monument-11":{"width":17,"height":17,"x":425,"y":252,"pixelRatio":1,"sdf":true},"mountain-11":{"width":17,"height":17,"x":442,"y":252,"pixelRatio":1,"sdf":true},"museum-11":{"width":17,"height":17,"x":459,"y":252,"pixelRatio":1,"sdf":true},"music-11":{"width":17,"height":17,"x":476,"y":252,"pixelRatio":1,"sdf":true},"natural-11":{"width":17,"height":17,"x":493,"y":252,"pixelRatio":1,"sdf":true},"optician-11":{"width":17,"height":17,"x":510,"y":252,"pixelRatio":1,"sdf":true},"paint-11":{"width":17,"height":17,"x":527,"y":252,"pixelRatio":1,"sdf":true},"park-11":{"width":17,"height":17,"x":544,"y":252,"pixelRatio":1,"sdf":true},"park-alt1-11":{"width":17,"height":17,"x":561,"y":252,"pixelRatio":1,"sdf":true},"parking-11":{"width":17,"height":17,"x":578,"y":252,"pixelRatio":1,"sdf":true},"parking-garage-11":{"width":17,"height":17,"x":595,"y":252,"pixelRatio":1,"sdf":true},"pharmacy-11":{"width":17,"height":17,"x":612,"y":252,"pixelRatio":1,"sdf":true},"picnic-site-11":{"width":17,"height":17,"x":629,"y":252,"pixelRatio":1,"sdf":true},"pitch-11":{"width":17,"height":17,"x":646,"y":252,"pixelRatio":1,"sdf":true},"place-of-worship-11":{"width":17,"height":17,"x":323,"y":269,"pixelRatio":1,"sdf":true},"playground-11":{"width":17,"height":17,"x":340,"y":269,"pixelRatio":1,"sdf":true},"police-11":{"width":17,"height":17,"x":357,"y":269,"pixelRatio":1,"sdf":true},"post-11":{"width":17,"height":17,"x":374,"y":269,"pixelRatio":1,"sdf":true},"prison-11":{"width":17,"height":17,"x":391,"y":269,"pixelRatio":1,"sdf":true},"rail-11":{"width":17,"height":17,"x":408,"y":269,"pixelRatio":1,"sdf":true},"rail-light-11":{"width":17,"height":17,"x":425,"y":269,"pixelRatio":1,"sdf":true},"rail-metro-11":{"width":17,"height":17,"x":442,"y":269,"pixelRatio":1,"sdf":true},"ranger-station-11":{"width":17,"height":17,"x":459,"y":269,"pixelRatio":1,"sdf":true},"recycling-11":{"width":17,"height":17,"x":476,"y":269,"pixelRatio":1,"sdf":true},"religious-buddhist-11":{"width":17,"height":17,"x":493,"y":269,"pixelRatio":1,"sdf":true},"religious-christian-11":{"width":17,"height":17,"x":510,"y":269,"pixelRatio":1,"sdf":true},"religious-jewish-11":{"width":17,"height":17,"x":527,"y":269,"pixelRatio":1,"sdf":true},"religious-muslim-11":{"width":17,"height":17,"x":544,"y":269,"pixelRatio":1,"sdf":true},"residential-community-11":{"width":17,"height":17,"x":561,"y":269,"pixelRatio":1,"sdf":true},"restaurant-11":{"width":17,"height":17,"x":578,"y":269,"pixelRatio":1,"sdf":true},"restaurant-noodle-11":{"width":17,"height":17,"x":595,"y":269,"pixelRatio":1,"sdf":true},"restaurant-pizza-11":{"width":17,"height":17,"x":612,"y":269,"pixelRatio":1,"sdf":true},"restaurant-seafood-11":{"width":17,"height":17,"x":629,"y":269,"pixelRatio":1,"sdf":true},"roadblock-11":{"width":17,"height":17,"x":646,"y":269,"pixelRatio":1,"sdf":true},"rocket-11":{"width":17,"height":17,"x":323,"y":286,"pixelRatio":1,"sdf":true},"school-11":{"width":17,"height":17,"x":340,"y":286,"pixelRatio":1,"sdf":true},"scooter-11":{"width":17,"height":17,"x":357,"y":286,"pixelRatio":1,"sdf":true},"shelter-11":{"width":17,"height":17,"x":374,"y":286,"pixelRatio":1,"sdf":true},"shoe-11":{"width":17,"height":17,"x":391,"y":286,"pixelRatio":1,"sdf":true},"shop-11":{"width":17,"height":17,"x":408,"y":286,"pixelRatio":1,"sdf":true},"skateboard-11":{"width":17,"height":17,"x":425,"y":286,"pixelRatio":1,"sdf":true},"skiing-11":{"width":17,"height":17,"x":442,"y":286,"pixelRatio":1,"sdf":true},"slaughterhouse-11":{"width":17,"height":17,"x":459,"y":286,"pixelRatio":1,"sdf":true},"slipway-11":{"width":17,"height":17,"x":476,"y":286,"pixelRatio":1,"sdf":true},"snowmobile-11":{"width":17,"height":17,"x":493,"y":286,"pixelRatio":1,"sdf":true},"soccer-11":{"width":17,"height":17,"x":510,"y":286,"pixelRatio":1,"sdf":true},"square-11":{"width":17,"height":17,"x":527,"y":286,"pixelRatio":1,"sdf":true},"square-stroked-11":{"width":17,"height":17,"x":544,"y":286,"pixelRatio":1,"sdf":true},"stadium-11":{"width":17,"height":17,"x":561,"y":286,"pixelRatio":1,"sdf":true},"star-11":{"width":17,"height":17,"x":578,"y":286,"pixelRatio":1,"sdf":true},"star-stroked-11":{"width":17,"height":17,"x":595,"y":286,"pixelRatio":1,"sdf":true},"suitcase-11":{"width":17,"height":17,"x":612,"y":286,"pixelRatio":1,"sdf":true},"sushi-11":{"width":17,"height":17,"x":629,"y":286,"pixelRatio":1,"sdf":true},"swimming-11":{"width":17,"height":17,"x":646,"y":286,"pixelRatio":1,"sdf":true},"table-tennis-11":{"width":17,"height":17,"x":323,"y":303,"pixelRatio":1,"sdf":true},"teahouse-11":{"width":17,"height":17,"x":340,"y":303,"pixelRatio":1,"sdf":true},"telephone-11":{"width":17,"height":17,"x":357,"y":303,"pixelRatio":1,"sdf":true},"tennis-11":{"width":17,"height":17,"x":374,"y":303,"pixelRatio":1,"sdf":true},"theatre-11":{"width":17,"height":17,"x":391,"y":303,"pixelRatio":1,"sdf":true},"toilet-11":{"width":17,"height":17,"x":408,"y":303,"pixelRatio":1,"sdf":true},"town-11":{"width":17,"height":17,"x":425,"y":303,"pixelRatio":1,"sdf":true},"town-hall-11":{"width":17,"height":17,"x":442,"y":303,"pixelRatio":1,"sdf":true},"triangle-11":{"width":17,"height":17,"x":459,"y":303,"pixelRatio":1,"sdf":true},"triangle-stroked-11":{"width":17,"height":17,"x":476,"y":303,"pixelRatio":1,"sdf":true},"veterinary-11":{"width":17,"height":17,"x":493,"y":303,"pixelRatio":1,"sdf":true},"viewpoint-11":{"width":17,"height":17,"x":510,"y":303,"pixelRatio":1,"sdf":true},"village-11":{"width":17,"height":17,"x":527,"y":303,"pixelRatio":1,"sdf":true},"volcano-11":{"width":17,"height":17,"x":544,"y":303,"pixelRatio":1,"sdf":true},"volleyball-11":{"width":17,"height":17,"x":561,"y":303,"pixelRatio":1,"sdf":true},"warehouse-11":{"width":17,"height":17,"x":578,"y":303,"pixelRatio":1,"sdf":true},"waste-basket-11":{"width":17,"height":17,"x":595,"y":303,"pixelRatio":1,"sdf":true},"watch-11":{"width":17,"height":17,"x":612,"y":303,"pixelRatio":1,"sdf":true},"water-11":{"width":17,"height":17,"x":629,"y":303,"pixelRatio":1,"sdf":true},"waterfall-11":{"width":17,"height":17,"x":646,"y":303,"pixelRatio":1,"sdf":true},"watermill-11":{"width":17,"height":17,"x":336,"y":0,"pixelRatio":1,"sdf":true},"wetland-11":{"width":17,"height":17,"x":353,"y":0,"pixelRatio":1,"sdf":true},"wheelchair-11":{"width":17,"height":17,"x":370,"y":0,"pixelRatio":1,"sdf":true},"windmill-11":{"width":17,"height":17,"x":387,"y":0,"pixelRatio":1,"sdf":true},"zoo-11":{"width":17,"height":17,"x":404,"y":0,"pixelRatio":1,"sdf":true}};

/***/ }),

/***/ "./node_modules/@elastic/maki/dist/sprite@1.png":
/*!******************************************************!*\
  !*** ./node_modules/@elastic/maki/dist/sprite@1.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "13f1cd755acb160c63f477bebaf5c796.png";

/***/ }),

/***/ "./node_modules/@elastic/maki/dist/sprite@2.json":
/*!*******************************************************!*\
  !*** ./node_modules/@elastic/maki/dist/sprite@2.json ***!
  \*******************************************************/
/*! exports provided: aerialway-15, airfield-15, airport-15, alcohol-shop-15, american-football-15, amusement-park-15, aquarium-15, arrow-15, art-gallery-15, attraction-15, bakery-15, bank-15, bar-15, barrier-15, baseball-15, basketball-15, bbq-15, beach-15, beer-15, bicycle-15, bicycle-share-15, blood-bank-15, boat-15, bowling-alley-15, bridge-15, building-15, building-alt1-15, bus-15, cafe-15, campsite-15, car-15, car-rental-15, car-repair-15, casino-15, castle-15, cemetery-15, charging-station-15, cinema-15, circle-15, circle-stroked-15, city-15, clothing-store-15, college-15, commercial-15, communications-tower-15, confectionery-15, convenience-15, cricket-15, cross-15, dam-15, danger-15, defibrillator-15, dentist-15, doctor-15, dog-park-15, drinking-water-15, embassy-15, emergency-phone-15, entrance-15, entrance-alt1-15, farm-15, fast-food-15, fence-15, ferry-15, fire-station-15, fitness-centre-15, florist-15, fuel-15, furniture-15, gaming-15, garden-15, garden-centre-15, gift-15, globe-15, golf-15, grocery-15, hairdresser-15, harbor-15, hardware-15, heart-15, heliport-15, home-15, horse-riding-15, hospital-15, ice-cream-15, industry-15, information-15, jewelry-store-15, karaoke-15, landmark-15, landuse-15, laundry-15, library-15, lighthouse-15, lodging-15, logging-15, marker-15, marker-stroked-15, mobile-phone-15, monument-15, mountain-15, museum-15, music-15, natural-15, optician-15, paint-15, park-15, park-alt1-15, parking-15, parking-garage-15, pharmacy-15, picnic-site-15, pitch-15, place-of-worship-15, playground-15, police-15, post-15, prison-15, rail-15, rail-light-15, rail-metro-15, ranger-station-15, recycling-15, religious-buddhist-15, religious-christian-15, religious-jewish-15, religious-muslim-15, residential-community-15, restaurant-15, restaurant-noodle-15, restaurant-pizza-15, restaurant-seafood-15, roadblock-15, rocket-15, school-15, scooter-15, shelter-15, shoe-15, shop-15, skateboard-15, skiing-15, slaughterhouse-15, slipway-15, snowmobile-15, soccer-15, square-15, square-stroked-15, stadium-15, star-15, star-stroked-15, suitcase-15, sushi-15, swimming-15, table-tennis-15, teahouse-15, telephone-15, tennis-15, theatre-15, toilet-15, town-15, town-hall-15, triangle-15, triangle-stroked-15, veterinary-15, viewpoint-15, village-15, volcano-15, volleyball-15, warehouse-15, waste-basket-15, watch-15, water-15, waterfall-15, watermill-15, wetland-15, wheelchair-15, windmill-15, zoo-15, aerialway-11, airfield-11, airport-11, alcohol-shop-11, american-football-11, amusement-park-11, aquarium-11, arrow-11, art-gallery-11, attraction-11, bakery-11, bank-11, bar-11, barrier-11, baseball-11, basketball-11, bbq-11, beach-11, beer-11, bicycle-11, bicycle-share-11, blood-bank-11, boat-11, bowling-alley-11, bridge-11, building-11, building-alt1-11, bus-11, cafe-11, campsite-11, car-11, car-rental-11, car-repair-11, casino-11, castle-11, cemetery-11, charging-station-11, cinema-11, circle-11, circle-stroked-11, city-11, clothing-store-11, college-11, commercial-11, communications-tower-11, confectionery-11, convenience-11, cricket-11, cross-11, dam-11, danger-11, defibrillator-11, dentist-11, doctor-11, dog-park-11, drinking-water-11, embassy-11, emergency-phone-11, entrance-11, entrance-alt1-11, farm-11, fast-food-11, fence-11, ferry-11, fire-station-11, fitness-centre-11, florist-11, fuel-11, furniture-11, gaming-11, garden-11, garden-centre-11, gift-11, globe-11, golf-11, grocery-11, hairdresser-11, harbor-11, hardware-11, heart-11, heliport-11, home-11, horse-riding-11, hospital-11, ice-cream-11, industry-11, information-11, jewelry-store-11, karaoke-11, landmark-11, landuse-11, laundry-11, library-11, lighthouse-11, lodging-11, logging-11, marker-11, marker-stroked-11, mobile-phone-11, monument-11, mountain-11, museum-11, music-11, natural-11, optician-11, paint-11, park-11, park-alt1-11, parking-11, parking-garage-11, pharmacy-11, picnic-site-11, pitch-11, place-of-worship-11, playground-11, police-11, post-11, prison-11, rail-11, rail-light-11, rail-metro-11, ranger-station-11, recycling-11, religious-buddhist-11, religious-christian-11, religious-jewish-11, religious-muslim-11, residential-community-11, restaurant-11, restaurant-noodle-11, restaurant-pizza-11, restaurant-seafood-11, roadblock-11, rocket-11, school-11, scooter-11, shelter-11, shoe-11, shop-11, skateboard-11, skiing-11, slaughterhouse-11, slipway-11, snowmobile-11, soccer-11, square-11, square-stroked-11, stadium-11, star-11, star-stroked-11, suitcase-11, sushi-11, swimming-11, table-tennis-11, teahouse-11, telephone-11, tennis-11, theatre-11, toilet-11, town-11, town-hall-11, triangle-11, triangle-stroked-11, veterinary-11, viewpoint-11, village-11, volcano-11, volleyball-11, warehouse-11, waste-basket-11, watch-11, water-11, waterfall-11, watermill-11, wetland-11, wheelchair-11, windmill-11, zoo-11, default */
/***/ (function(module) {

module.exports = {"aerialway-15":{"width":36,"height":36,"x":0,"y":0,"pixelRatio":2,"sdf":true},"airfield-15":{"width":36,"height":36,"x":36,"y":0,"pixelRatio":2,"sdf":true},"airport-15":{"width":36,"height":36,"x":0,"y":36,"pixelRatio":2,"sdf":true},"alcohol-shop-15":{"width":36,"height":36,"x":36,"y":36,"pixelRatio":2,"sdf":true},"american-football-15":{"width":36,"height":36,"x":72,"y":0,"pixelRatio":2,"sdf":true},"amusement-park-15":{"width":36,"height":36,"x":108,"y":0,"pixelRatio":2,"sdf":true},"aquarium-15":{"width":36,"height":36,"x":72,"y":36,"pixelRatio":2,"sdf":true},"arrow-15":{"width":36,"height":36,"x":108,"y":36,"pixelRatio":2,"sdf":true},"art-gallery-15":{"width":36,"height":36,"x":0,"y":72,"pixelRatio":2,"sdf":true},"attraction-15":{"width":36,"height":36,"x":36,"y":72,"pixelRatio":2,"sdf":true},"bakery-15":{"width":36,"height":36,"x":72,"y":72,"pixelRatio":2,"sdf":true},"bank-15":{"width":36,"height":36,"x":108,"y":72,"pixelRatio":2,"sdf":true},"bar-15":{"width":36,"height":36,"x":0,"y":108,"pixelRatio":2,"sdf":true},"barrier-15":{"width":36,"height":36,"x":36,"y":108,"pixelRatio":2,"sdf":true},"baseball-15":{"width":36,"height":36,"x":72,"y":108,"pixelRatio":2,"sdf":true},"basketball-15":{"width":36,"height":36,"x":108,"y":108,"pixelRatio":2,"sdf":true},"bbq-15":{"width":36,"height":36,"x":144,"y":0,"pixelRatio":2,"sdf":true},"beach-15":{"width":36,"height":36,"x":180,"y":0,"pixelRatio":2,"sdf":true},"beer-15":{"width":36,"height":36,"x":216,"y":0,"pixelRatio":2,"sdf":true},"bicycle-15":{"width":36,"height":36,"x":252,"y":0,"pixelRatio":2,"sdf":true},"bicycle-share-15":{"width":36,"height":36,"x":144,"y":36,"pixelRatio":2,"sdf":true},"blood-bank-15":{"width":36,"height":36,"x":180,"y":36,"pixelRatio":2,"sdf":true},"boat-15":{"width":36,"height":36,"x":216,"y":36,"pixelRatio":2,"sdf":true},"bowling-alley-15":{"width":36,"height":36,"x":252,"y":36,"pixelRatio":2,"sdf":true},"bridge-15":{"width":36,"height":36,"x":144,"y":72,"pixelRatio":2,"sdf":true},"building-15":{"width":36,"height":36,"x":180,"y":72,"pixelRatio":2,"sdf":true},"building-alt1-15":{"width":36,"height":36,"x":216,"y":72,"pixelRatio":2,"sdf":true},"bus-15":{"width":36,"height":36,"x":252,"y":72,"pixelRatio":2,"sdf":true},"cafe-15":{"width":36,"height":36,"x":144,"y":108,"pixelRatio":2,"sdf":true},"campsite-15":{"width":36,"height":36,"x":180,"y":108,"pixelRatio":2,"sdf":true},"car-15":{"width":36,"height":36,"x":216,"y":108,"pixelRatio":2,"sdf":true},"car-rental-15":{"width":36,"height":36,"x":252,"y":108,"pixelRatio":2,"sdf":true},"car-repair-15":{"width":36,"height":36,"x":0,"y":144,"pixelRatio":2,"sdf":true},"casino-15":{"width":36,"height":36,"x":36,"y":144,"pixelRatio":2,"sdf":true},"castle-15":{"width":36,"height":36,"x":72,"y":144,"pixelRatio":2,"sdf":true},"cemetery-15":{"width":36,"height":36,"x":108,"y":144,"pixelRatio":2,"sdf":true},"charging-station-15":{"width":36,"height":36,"x":144,"y":144,"pixelRatio":2,"sdf":true},"cinema-15":{"width":36,"height":36,"x":180,"y":144,"pixelRatio":2,"sdf":true},"circle-15":{"width":36,"height":36,"x":216,"y":144,"pixelRatio":2,"sdf":true},"circle-stroked-15":{"width":36,"height":36,"x":252,"y":144,"pixelRatio":2,"sdf":true},"city-15":{"width":36,"height":36,"x":0,"y":180,"pixelRatio":2,"sdf":true},"clothing-store-15":{"width":36,"height":36,"x":36,"y":180,"pixelRatio":2,"sdf":true},"college-15":{"width":36,"height":36,"x":72,"y":180,"pixelRatio":2,"sdf":true},"commercial-15":{"width":36,"height":36,"x":108,"y":180,"pixelRatio":2,"sdf":true},"communications-tower-15":{"width":36,"height":36,"x":144,"y":180,"pixelRatio":2,"sdf":true},"confectionery-15":{"width":36,"height":36,"x":180,"y":180,"pixelRatio":2,"sdf":true},"convenience-15":{"width":36,"height":36,"x":216,"y":180,"pixelRatio":2,"sdf":true},"cricket-15":{"width":36,"height":36,"x":252,"y":180,"pixelRatio":2,"sdf":true},"cross-15":{"width":36,"height":36,"x":0,"y":216,"pixelRatio":2,"sdf":true},"dam-15":{"width":36,"height":36,"x":36,"y":216,"pixelRatio":2,"sdf":true},"danger-15":{"width":36,"height":36,"x":72,"y":216,"pixelRatio":2,"sdf":true},"defibrillator-15":{"width":36,"height":36,"x":108,"y":216,"pixelRatio":2,"sdf":true},"dentist-15":{"width":36,"height":36,"x":144,"y":216,"pixelRatio":2,"sdf":true},"doctor-15":{"width":36,"height":36,"x":180,"y":216,"pixelRatio":2,"sdf":true},"dog-park-15":{"width":36,"height":36,"x":216,"y":216,"pixelRatio":2,"sdf":true},"drinking-water-15":{"width":36,"height":36,"x":252,"y":216,"pixelRatio":2,"sdf":true},"embassy-15":{"width":36,"height":36,"x":0,"y":252,"pixelRatio":2,"sdf":true},"emergency-phone-15":{"width":36,"height":36,"x":36,"y":252,"pixelRatio":2,"sdf":true},"entrance-15":{"width":36,"height":36,"x":72,"y":252,"pixelRatio":2,"sdf":true},"entrance-alt1-15":{"width":36,"height":36,"x":108,"y":252,"pixelRatio":2,"sdf":true},"farm-15":{"width":36,"height":36,"x":144,"y":252,"pixelRatio":2,"sdf":true},"fast-food-15":{"width":36,"height":36,"x":180,"y":252,"pixelRatio":2,"sdf":true},"fence-15":{"width":36,"height":36,"x":216,"y":252,"pixelRatio":2,"sdf":true},"ferry-15":{"width":36,"height":36,"x":252,"y":252,"pixelRatio":2,"sdf":true},"fire-station-15":{"width":36,"height":36,"x":288,"y":0,"pixelRatio":2,"sdf":true},"fitness-centre-15":{"width":36,"height":36,"x":324,"y":0,"pixelRatio":2,"sdf":true},"florist-15":{"width":36,"height":36,"x":360,"y":0,"pixelRatio":2,"sdf":true},"fuel-15":{"width":36,"height":36,"x":396,"y":0,"pixelRatio":2,"sdf":true},"furniture-15":{"width":36,"height":36,"x":432,"y":0,"pixelRatio":2,"sdf":true},"gaming-15":{"width":36,"height":36,"x":468,"y":0,"pixelRatio":2,"sdf":true},"garden-15":{"width":36,"height":36,"x":504,"y":0,"pixelRatio":2,"sdf":true},"garden-centre-15":{"width":36,"height":36,"x":540,"y":0,"pixelRatio":2,"sdf":true},"gift-15":{"width":36,"height":36,"x":288,"y":36,"pixelRatio":2,"sdf":true},"globe-15":{"width":36,"height":36,"x":324,"y":36,"pixelRatio":2,"sdf":true},"golf-15":{"width":36,"height":36,"x":360,"y":36,"pixelRatio":2,"sdf":true},"grocery-15":{"width":36,"height":36,"x":396,"y":36,"pixelRatio":2,"sdf":true},"hairdresser-15":{"width":36,"height":36,"x":432,"y":36,"pixelRatio":2,"sdf":true},"harbor-15":{"width":36,"height":36,"x":468,"y":36,"pixelRatio":2,"sdf":true},"hardware-15":{"width":36,"height":36,"x":504,"y":36,"pixelRatio":2,"sdf":true},"heart-15":{"width":36,"height":36,"x":540,"y":36,"pixelRatio":2,"sdf":true},"heliport-15":{"width":36,"height":36,"x":288,"y":72,"pixelRatio":2,"sdf":true},"home-15":{"width":36,"height":36,"x":324,"y":72,"pixelRatio":2,"sdf":true},"horse-riding-15":{"width":36,"height":36,"x":360,"y":72,"pixelRatio":2,"sdf":true},"hospital-15":{"width":36,"height":36,"x":396,"y":72,"pixelRatio":2,"sdf":true},"ice-cream-15":{"width":36,"height":36,"x":432,"y":72,"pixelRatio":2,"sdf":true},"industry-15":{"width":36,"height":36,"x":468,"y":72,"pixelRatio":2,"sdf":true},"information-15":{"width":36,"height":36,"x":504,"y":72,"pixelRatio":2,"sdf":true},"jewelry-store-15":{"width":36,"height":36,"x":540,"y":72,"pixelRatio":2,"sdf":true},"karaoke-15":{"width":36,"height":36,"x":288,"y":108,"pixelRatio":2,"sdf":true},"landmark-15":{"width":36,"height":36,"x":324,"y":108,"pixelRatio":2,"sdf":true},"landuse-15":{"width":36,"height":36,"x":360,"y":108,"pixelRatio":2,"sdf":true},"laundry-15":{"width":36,"height":36,"x":396,"y":108,"pixelRatio":2,"sdf":true},"library-15":{"width":36,"height":36,"x":432,"y":108,"pixelRatio":2,"sdf":true},"lighthouse-15":{"width":36,"height":36,"x":468,"y":108,"pixelRatio":2,"sdf":true},"lodging-15":{"width":36,"height":36,"x":504,"y":108,"pixelRatio":2,"sdf":true},"logging-15":{"width":36,"height":36,"x":540,"y":108,"pixelRatio":2,"sdf":true},"marker-15":{"width":36,"height":36,"x":288,"y":144,"pixelRatio":2,"sdf":true},"marker-stroked-15":{"width":36,"height":36,"x":324,"y":144,"pixelRatio":2,"sdf":true},"mobile-phone-15":{"width":36,"height":36,"x":360,"y":144,"pixelRatio":2,"sdf":true},"monument-15":{"width":36,"height":36,"x":396,"y":144,"pixelRatio":2,"sdf":true},"mountain-15":{"width":36,"height":36,"x":432,"y":144,"pixelRatio":2,"sdf":true},"museum-15":{"width":36,"height":36,"x":468,"y":144,"pixelRatio":2,"sdf":true},"music-15":{"width":36,"height":36,"x":504,"y":144,"pixelRatio":2,"sdf":true},"natural-15":{"width":36,"height":36,"x":540,"y":144,"pixelRatio":2,"sdf":true},"optician-15":{"width":36,"height":36,"x":288,"y":180,"pixelRatio":2,"sdf":true},"paint-15":{"width":36,"height":36,"x":324,"y":180,"pixelRatio":2,"sdf":true},"park-15":{"width":36,"height":36,"x":360,"y":180,"pixelRatio":2,"sdf":true},"park-alt1-15":{"width":36,"height":36,"x":396,"y":180,"pixelRatio":2,"sdf":true},"parking-15":{"width":36,"height":36,"x":432,"y":180,"pixelRatio":2,"sdf":true},"parking-garage-15":{"width":36,"height":36,"x":468,"y":180,"pixelRatio":2,"sdf":true},"pharmacy-15":{"width":36,"height":36,"x":504,"y":180,"pixelRatio":2,"sdf":true},"picnic-site-15":{"width":36,"height":36,"x":540,"y":180,"pixelRatio":2,"sdf":true},"pitch-15":{"width":36,"height":36,"x":288,"y":216,"pixelRatio":2,"sdf":true},"place-of-worship-15":{"width":36,"height":36,"x":324,"y":216,"pixelRatio":2,"sdf":true},"playground-15":{"width":36,"height":36,"x":360,"y":216,"pixelRatio":2,"sdf":true},"police-15":{"width":36,"height":36,"x":396,"y":216,"pixelRatio":2,"sdf":true},"post-15":{"width":36,"height":36,"x":432,"y":216,"pixelRatio":2,"sdf":true},"prison-15":{"width":36,"height":36,"x":468,"y":216,"pixelRatio":2,"sdf":true},"rail-15":{"width":36,"height":36,"x":504,"y":216,"pixelRatio":2,"sdf":true},"rail-light-15":{"width":36,"height":36,"x":540,"y":216,"pixelRatio":2,"sdf":true},"rail-metro-15":{"width":36,"height":36,"x":288,"y":252,"pixelRatio":2,"sdf":true},"ranger-station-15":{"width":36,"height":36,"x":324,"y":252,"pixelRatio":2,"sdf":true},"recycling-15":{"width":36,"height":36,"x":360,"y":252,"pixelRatio":2,"sdf":true},"religious-buddhist-15":{"width":36,"height":36,"x":396,"y":252,"pixelRatio":2,"sdf":true},"religious-christian-15":{"width":36,"height":36,"x":432,"y":252,"pixelRatio":2,"sdf":true},"religious-jewish-15":{"width":36,"height":36,"x":468,"y":252,"pixelRatio":2,"sdf":true},"religious-muslim-15":{"width":36,"height":36,"x":504,"y":252,"pixelRatio":2,"sdf":true},"residential-community-15":{"width":36,"height":36,"x":540,"y":252,"pixelRatio":2,"sdf":true},"restaurant-15":{"width":36,"height":36,"x":0,"y":288,"pixelRatio":2,"sdf":true},"restaurant-noodle-15":{"width":36,"height":36,"x":36,"y":288,"pixelRatio":2,"sdf":true},"restaurant-pizza-15":{"width":36,"height":36,"x":72,"y":288,"pixelRatio":2,"sdf":true},"restaurant-seafood-15":{"width":36,"height":36,"x":108,"y":288,"pixelRatio":2,"sdf":true},"roadblock-15":{"width":36,"height":36,"x":144,"y":288,"pixelRatio":2,"sdf":true},"rocket-15":{"width":36,"height":36,"x":180,"y":288,"pixelRatio":2,"sdf":true},"school-15":{"width":36,"height":36,"x":216,"y":288,"pixelRatio":2,"sdf":true},"scooter-15":{"width":36,"height":36,"x":252,"y":288,"pixelRatio":2,"sdf":true},"shelter-15":{"width":36,"height":36,"x":288,"y":288,"pixelRatio":2,"sdf":true},"shoe-15":{"width":36,"height":36,"x":324,"y":288,"pixelRatio":2,"sdf":true},"shop-15":{"width":36,"height":36,"x":360,"y":288,"pixelRatio":2,"sdf":true},"skateboard-15":{"width":36,"height":36,"x":396,"y":288,"pixelRatio":2,"sdf":true},"skiing-15":{"width":36,"height":36,"x":432,"y":288,"pixelRatio":2,"sdf":true},"slaughterhouse-15":{"width":36,"height":36,"x":468,"y":288,"pixelRatio":2,"sdf":true},"slipway-15":{"width":36,"height":36,"x":504,"y":288,"pixelRatio":2,"sdf":true},"snowmobile-15":{"width":36,"height":36,"x":540,"y":288,"pixelRatio":2,"sdf":true},"soccer-15":{"width":36,"height":36,"x":0,"y":324,"pixelRatio":2,"sdf":true},"square-15":{"width":36,"height":36,"x":36,"y":324,"pixelRatio":2,"sdf":true},"square-stroked-15":{"width":36,"height":36,"x":72,"y":324,"pixelRatio":2,"sdf":true},"stadium-15":{"width":36,"height":36,"x":108,"y":324,"pixelRatio":2,"sdf":true},"star-15":{"width":36,"height":36,"x":144,"y":324,"pixelRatio":2,"sdf":true},"star-stroked-15":{"width":36,"height":36,"x":180,"y":324,"pixelRatio":2,"sdf":true},"suitcase-15":{"width":36,"height":36,"x":216,"y":324,"pixelRatio":2,"sdf":true},"sushi-15":{"width":36,"height":36,"x":252,"y":324,"pixelRatio":2,"sdf":true},"swimming-15":{"width":36,"height":36,"x":288,"y":324,"pixelRatio":2,"sdf":true},"table-tennis-15":{"width":36,"height":36,"x":324,"y":324,"pixelRatio":2,"sdf":true},"teahouse-15":{"width":36,"height":36,"x":360,"y":324,"pixelRatio":2,"sdf":true},"telephone-15":{"width":36,"height":36,"x":396,"y":324,"pixelRatio":2,"sdf":true},"tennis-15":{"width":36,"height":36,"x":432,"y":324,"pixelRatio":2,"sdf":true},"theatre-15":{"width":36,"height":36,"x":468,"y":324,"pixelRatio":2,"sdf":true},"toilet-15":{"width":36,"height":36,"x":504,"y":324,"pixelRatio":2,"sdf":true},"town-15":{"width":36,"height":36,"x":540,"y":324,"pixelRatio":2,"sdf":true},"town-hall-15":{"width":36,"height":36,"x":0,"y":360,"pixelRatio":2,"sdf":true},"triangle-15":{"width":36,"height":36,"x":36,"y":360,"pixelRatio":2,"sdf":true},"triangle-stroked-15":{"width":36,"height":36,"x":72,"y":360,"pixelRatio":2,"sdf":true},"veterinary-15":{"width":36,"height":36,"x":108,"y":360,"pixelRatio":2,"sdf":true},"viewpoint-15":{"width":36,"height":36,"x":144,"y":360,"pixelRatio":2,"sdf":true},"village-15":{"width":36,"height":36,"x":180,"y":360,"pixelRatio":2,"sdf":true},"volcano-15":{"width":36,"height":36,"x":216,"y":360,"pixelRatio":2,"sdf":true},"volleyball-15":{"width":36,"height":36,"x":252,"y":360,"pixelRatio":2,"sdf":true},"warehouse-15":{"width":36,"height":36,"x":288,"y":360,"pixelRatio":2,"sdf":true},"waste-basket-15":{"width":36,"height":36,"x":324,"y":360,"pixelRatio":2,"sdf":true},"watch-15":{"width":36,"height":36,"x":360,"y":360,"pixelRatio":2,"sdf":true},"water-15":{"width":36,"height":36,"x":396,"y":360,"pixelRatio":2,"sdf":true},"waterfall-15":{"width":36,"height":36,"x":432,"y":360,"pixelRatio":2,"sdf":true},"watermill-15":{"width":36,"height":36,"x":468,"y":360,"pixelRatio":2,"sdf":true},"wetland-15":{"width":36,"height":36,"x":504,"y":360,"pixelRatio":2,"sdf":true},"wheelchair-15":{"width":36,"height":36,"x":540,"y":360,"pixelRatio":2,"sdf":true},"windmill-15":{"width":36,"height":36,"x":0,"y":396,"pixelRatio":2,"sdf":true},"zoo-15":{"width":36,"height":36,"x":36,"y":396,"pixelRatio":2,"sdf":true},"aerialway-11":{"width":28,"height":28,"x":72,"y":396,"pixelRatio":2,"sdf":true},"airfield-11":{"width":28,"height":28,"x":100,"y":396,"pixelRatio":2,"sdf":true},"airport-11":{"width":28,"height":28,"x":128,"y":396,"pixelRatio":2,"sdf":true},"alcohol-shop-11":{"width":28,"height":28,"x":156,"y":396,"pixelRatio":2,"sdf":true},"american-football-11":{"width":28,"height":28,"x":184,"y":396,"pixelRatio":2,"sdf":true},"amusement-park-11":{"width":28,"height":28,"x":212,"y":396,"pixelRatio":2,"sdf":true},"aquarium-11":{"width":28,"height":28,"x":240,"y":396,"pixelRatio":2,"sdf":true},"arrow-11":{"width":28,"height":28,"x":268,"y":396,"pixelRatio":2,"sdf":true},"art-gallery-11":{"width":28,"height":28,"x":296,"y":396,"pixelRatio":2,"sdf":true},"attraction-11":{"width":28,"height":28,"x":324,"y":396,"pixelRatio":2,"sdf":true},"bakery-11":{"width":28,"height":28,"x":352,"y":396,"pixelRatio":2,"sdf":true},"bank-11":{"width":28,"height":28,"x":380,"y":396,"pixelRatio":2,"sdf":true},"bar-11":{"width":28,"height":28,"x":408,"y":396,"pixelRatio":2,"sdf":true},"barrier-11":{"width":28,"height":28,"x":436,"y":396,"pixelRatio":2,"sdf":true},"baseball-11":{"width":28,"height":28,"x":464,"y":396,"pixelRatio":2,"sdf":true},"basketball-11":{"width":28,"height":28,"x":492,"y":396,"pixelRatio":2,"sdf":true},"bbq-11":{"width":28,"height":28,"x":520,"y":396,"pixelRatio":2,"sdf":true},"beach-11":{"width":28,"height":28,"x":548,"y":396,"pixelRatio":2,"sdf":true},"beer-11":{"width":28,"height":28,"x":0,"y":432,"pixelRatio":2,"sdf":true},"bicycle-11":{"width":28,"height":28,"x":28,"y":432,"pixelRatio":2,"sdf":true},"bicycle-share-11":{"width":28,"height":28,"x":56,"y":432,"pixelRatio":2,"sdf":true},"blood-bank-11":{"width":28,"height":28,"x":84,"y":432,"pixelRatio":2,"sdf":true},"boat-11":{"width":28,"height":28,"x":112,"y":432,"pixelRatio":2,"sdf":true},"bowling-alley-11":{"width":28,"height":28,"x":140,"y":432,"pixelRatio":2,"sdf":true},"bridge-11":{"width":28,"height":28,"x":168,"y":432,"pixelRatio":2,"sdf":true},"building-11":{"width":28,"height":28,"x":196,"y":432,"pixelRatio":2,"sdf":true},"building-alt1-11":{"width":28,"height":28,"x":224,"y":432,"pixelRatio":2,"sdf":true},"bus-11":{"width":28,"height":28,"x":252,"y":432,"pixelRatio":2,"sdf":true},"cafe-11":{"width":28,"height":28,"x":280,"y":432,"pixelRatio":2,"sdf":true},"campsite-11":{"width":28,"height":28,"x":308,"y":432,"pixelRatio":2,"sdf":true},"car-11":{"width":28,"height":28,"x":336,"y":432,"pixelRatio":2,"sdf":true},"car-rental-11":{"width":28,"height":28,"x":364,"y":432,"pixelRatio":2,"sdf":true},"car-repair-11":{"width":28,"height":28,"x":392,"y":432,"pixelRatio":2,"sdf":true},"casino-11":{"width":28,"height":28,"x":420,"y":432,"pixelRatio":2,"sdf":true},"castle-11":{"width":28,"height":28,"x":448,"y":432,"pixelRatio":2,"sdf":true},"cemetery-11":{"width":28,"height":28,"x":476,"y":432,"pixelRatio":2,"sdf":true},"charging-station-11":{"width":28,"height":28,"x":504,"y":432,"pixelRatio":2,"sdf":true},"cinema-11":{"width":28,"height":28,"x":532,"y":432,"pixelRatio":2,"sdf":true},"circle-11":{"width":28,"height":28,"x":0,"y":460,"pixelRatio":2,"sdf":true},"circle-stroked-11":{"width":28,"height":28,"x":28,"y":460,"pixelRatio":2,"sdf":true},"city-11":{"width":28,"height":28,"x":56,"y":460,"pixelRatio":2,"sdf":true},"clothing-store-11":{"width":28,"height":28,"x":84,"y":460,"pixelRatio":2,"sdf":true},"college-11":{"width":28,"height":28,"x":112,"y":460,"pixelRatio":2,"sdf":true},"commercial-11":{"width":28,"height":28,"x":140,"y":460,"pixelRatio":2,"sdf":true},"communications-tower-11":{"width":28,"height":28,"x":168,"y":460,"pixelRatio":2,"sdf":true},"confectionery-11":{"width":28,"height":28,"x":196,"y":460,"pixelRatio":2,"sdf":true},"convenience-11":{"width":28,"height":28,"x":224,"y":460,"pixelRatio":2,"sdf":true},"cricket-11":{"width":28,"height":28,"x":252,"y":460,"pixelRatio":2,"sdf":true},"cross-11":{"width":28,"height":28,"x":280,"y":460,"pixelRatio":2,"sdf":true},"dam-11":{"width":28,"height":28,"x":308,"y":460,"pixelRatio":2,"sdf":true},"danger-11":{"width":28,"height":28,"x":336,"y":460,"pixelRatio":2,"sdf":true},"defibrillator-11":{"width":28,"height":28,"x":364,"y":460,"pixelRatio":2,"sdf":true},"dentist-11":{"width":28,"height":28,"x":392,"y":460,"pixelRatio":2,"sdf":true},"doctor-11":{"width":28,"height":28,"x":420,"y":460,"pixelRatio":2,"sdf":true},"dog-park-11":{"width":28,"height":28,"x":448,"y":460,"pixelRatio":2,"sdf":true},"drinking-water-11":{"width":28,"height":28,"x":476,"y":460,"pixelRatio":2,"sdf":true},"embassy-11":{"width":28,"height":28,"x":504,"y":460,"pixelRatio":2,"sdf":true},"emergency-phone-11":{"width":28,"height":28,"x":532,"y":460,"pixelRatio":2,"sdf":true},"entrance-11":{"width":28,"height":28,"x":0,"y":488,"pixelRatio":2,"sdf":true},"entrance-alt1-11":{"width":28,"height":28,"x":28,"y":488,"pixelRatio":2,"sdf":true},"farm-11":{"width":28,"height":28,"x":56,"y":488,"pixelRatio":2,"sdf":true},"fast-food-11":{"width":28,"height":28,"x":84,"y":488,"pixelRatio":2,"sdf":true},"fence-11":{"width":28,"height":28,"x":112,"y":488,"pixelRatio":2,"sdf":true},"ferry-11":{"width":28,"height":28,"x":140,"y":488,"pixelRatio":2,"sdf":true},"fire-station-11":{"width":28,"height":28,"x":168,"y":488,"pixelRatio":2,"sdf":true},"fitness-centre-11":{"width":28,"height":28,"x":196,"y":488,"pixelRatio":2,"sdf":true},"florist-11":{"width":28,"height":28,"x":224,"y":488,"pixelRatio":2,"sdf":true},"fuel-11":{"width":28,"height":28,"x":252,"y":488,"pixelRatio":2,"sdf":true},"furniture-11":{"width":28,"height":28,"x":280,"y":488,"pixelRatio":2,"sdf":true},"gaming-11":{"width":28,"height":28,"x":308,"y":488,"pixelRatio":2,"sdf":true},"garden-11":{"width":28,"height":28,"x":336,"y":488,"pixelRatio":2,"sdf":true},"garden-centre-11":{"width":28,"height":28,"x":364,"y":488,"pixelRatio":2,"sdf":true},"gift-11":{"width":28,"height":28,"x":392,"y":488,"pixelRatio":2,"sdf":true},"globe-11":{"width":28,"height":28,"x":420,"y":488,"pixelRatio":2,"sdf":true},"golf-11":{"width":28,"height":28,"x":448,"y":488,"pixelRatio":2,"sdf":true},"grocery-11":{"width":28,"height":28,"x":476,"y":488,"pixelRatio":2,"sdf":true},"hairdresser-11":{"width":28,"height":28,"x":504,"y":488,"pixelRatio":2,"sdf":true},"harbor-11":{"width":28,"height":28,"x":532,"y":488,"pixelRatio":2,"sdf":true},"hardware-11":{"width":28,"height":28,"x":0,"y":516,"pixelRatio":2,"sdf":true},"heart-11":{"width":28,"height":28,"x":28,"y":516,"pixelRatio":2,"sdf":true},"heliport-11":{"width":28,"height":28,"x":56,"y":516,"pixelRatio":2,"sdf":true},"home-11":{"width":28,"height":28,"x":84,"y":516,"pixelRatio":2,"sdf":true},"horse-riding-11":{"width":28,"height":28,"x":112,"y":516,"pixelRatio":2,"sdf":true},"hospital-11":{"width":28,"height":28,"x":140,"y":516,"pixelRatio":2,"sdf":true},"ice-cream-11":{"width":28,"height":28,"x":168,"y":516,"pixelRatio":2,"sdf":true},"industry-11":{"width":28,"height":28,"x":196,"y":516,"pixelRatio":2,"sdf":true},"information-11":{"width":28,"height":28,"x":224,"y":516,"pixelRatio":2,"sdf":true},"jewelry-store-11":{"width":28,"height":28,"x":252,"y":516,"pixelRatio":2,"sdf":true},"karaoke-11":{"width":28,"height":28,"x":280,"y":516,"pixelRatio":2,"sdf":true},"landmark-11":{"width":28,"height":28,"x":308,"y":516,"pixelRatio":2,"sdf":true},"landuse-11":{"width":28,"height":28,"x":336,"y":516,"pixelRatio":2,"sdf":true},"laundry-11":{"width":28,"height":28,"x":364,"y":516,"pixelRatio":2,"sdf":true},"library-11":{"width":28,"height":28,"x":392,"y":516,"pixelRatio":2,"sdf":true},"lighthouse-11":{"width":28,"height":28,"x":420,"y":516,"pixelRatio":2,"sdf":true},"lodging-11":{"width":28,"height":28,"x":448,"y":516,"pixelRatio":2,"sdf":true},"logging-11":{"width":28,"height":28,"x":476,"y":516,"pixelRatio":2,"sdf":true},"marker-11":{"width":28,"height":28,"x":504,"y":516,"pixelRatio":2,"sdf":true},"marker-stroked-11":{"width":28,"height":28,"x":532,"y":516,"pixelRatio":2,"sdf":true},"mobile-phone-11":{"width":28,"height":28,"x":0,"y":544,"pixelRatio":2,"sdf":true},"monument-11":{"width":28,"height":28,"x":28,"y":544,"pixelRatio":2,"sdf":true},"mountain-11":{"width":28,"height":28,"x":56,"y":544,"pixelRatio":2,"sdf":true},"museum-11":{"width":28,"height":28,"x":84,"y":544,"pixelRatio":2,"sdf":true},"music-11":{"width":28,"height":28,"x":112,"y":544,"pixelRatio":2,"sdf":true},"natural-11":{"width":28,"height":28,"x":140,"y":544,"pixelRatio":2,"sdf":true},"optician-11":{"width":28,"height":28,"x":168,"y":544,"pixelRatio":2,"sdf":true},"paint-11":{"width":28,"height":28,"x":196,"y":544,"pixelRatio":2,"sdf":true},"park-11":{"width":28,"height":28,"x":224,"y":544,"pixelRatio":2,"sdf":true},"park-alt1-11":{"width":28,"height":28,"x":252,"y":544,"pixelRatio":2,"sdf":true},"parking-11":{"width":28,"height":28,"x":280,"y":544,"pixelRatio":2,"sdf":true},"parking-garage-11":{"width":28,"height":28,"x":308,"y":544,"pixelRatio":2,"sdf":true},"pharmacy-11":{"width":28,"height":28,"x":336,"y":544,"pixelRatio":2,"sdf":true},"picnic-site-11":{"width":28,"height":28,"x":364,"y":544,"pixelRatio":2,"sdf":true},"pitch-11":{"width":28,"height":28,"x":392,"y":544,"pixelRatio":2,"sdf":true},"place-of-worship-11":{"width":28,"height":28,"x":420,"y":544,"pixelRatio":2,"sdf":true},"playground-11":{"width":28,"height":28,"x":448,"y":544,"pixelRatio":2,"sdf":true},"police-11":{"width":28,"height":28,"x":476,"y":544,"pixelRatio":2,"sdf":true},"post-11":{"width":28,"height":28,"x":504,"y":544,"pixelRatio":2,"sdf":true},"prison-11":{"width":28,"height":28,"x":532,"y":544,"pixelRatio":2,"sdf":true},"rail-11":{"width":28,"height":28,"x":560,"y":432,"pixelRatio":2,"sdf":true},"rail-light-11":{"width":28,"height":28,"x":588,"y":432,"pixelRatio":2,"sdf":true},"rail-metro-11":{"width":28,"height":28,"x":616,"y":432,"pixelRatio":2,"sdf":true},"ranger-station-11":{"width":28,"height":28,"x":644,"y":432,"pixelRatio":2,"sdf":true},"recycling-11":{"width":28,"height":28,"x":672,"y":432,"pixelRatio":2,"sdf":true},"religious-buddhist-11":{"width":28,"height":28,"x":700,"y":432,"pixelRatio":2,"sdf":true},"religious-christian-11":{"width":28,"height":28,"x":728,"y":432,"pixelRatio":2,"sdf":true},"religious-jewish-11":{"width":28,"height":28,"x":756,"y":432,"pixelRatio":2,"sdf":true},"religious-muslim-11":{"width":28,"height":28,"x":784,"y":432,"pixelRatio":2,"sdf":true},"residential-community-11":{"width":28,"height":28,"x":812,"y":432,"pixelRatio":2,"sdf":true},"restaurant-11":{"width":28,"height":28,"x":840,"y":432,"pixelRatio":2,"sdf":true},"restaurant-noodle-11":{"width":28,"height":28,"x":868,"y":432,"pixelRatio":2,"sdf":true},"restaurant-pizza-11":{"width":28,"height":28,"x":896,"y":432,"pixelRatio":2,"sdf":true},"restaurant-seafood-11":{"width":28,"height":28,"x":924,"y":432,"pixelRatio":2,"sdf":true},"roadblock-11":{"width":28,"height":28,"x":952,"y":432,"pixelRatio":2,"sdf":true},"rocket-11":{"width":28,"height":28,"x":980,"y":432,"pixelRatio":2,"sdf":true},"school-11":{"width":28,"height":28,"x":1008,"y":432,"pixelRatio":2,"sdf":true},"scooter-11":{"width":28,"height":28,"x":1036,"y":432,"pixelRatio":2,"sdf":true},"shelter-11":{"width":28,"height":28,"x":1064,"y":432,"pixelRatio":2,"sdf":true},"shoe-11":{"width":28,"height":28,"x":1092,"y":432,"pixelRatio":2,"sdf":true},"shop-11":{"width":28,"height":28,"x":1120,"y":432,"pixelRatio":2,"sdf":true},"skateboard-11":{"width":28,"height":28,"x":560,"y":460,"pixelRatio":2,"sdf":true},"skiing-11":{"width":28,"height":28,"x":588,"y":460,"pixelRatio":2,"sdf":true},"slaughterhouse-11":{"width":28,"height":28,"x":616,"y":460,"pixelRatio":2,"sdf":true},"slipway-11":{"width":28,"height":28,"x":644,"y":460,"pixelRatio":2,"sdf":true},"snowmobile-11":{"width":28,"height":28,"x":672,"y":460,"pixelRatio":2,"sdf":true},"soccer-11":{"width":28,"height":28,"x":700,"y":460,"pixelRatio":2,"sdf":true},"square-11":{"width":28,"height":28,"x":728,"y":460,"pixelRatio":2,"sdf":true},"square-stroked-11":{"width":28,"height":28,"x":756,"y":460,"pixelRatio":2,"sdf":true},"stadium-11":{"width":28,"height":28,"x":784,"y":460,"pixelRatio":2,"sdf":true},"star-11":{"width":28,"height":28,"x":812,"y":460,"pixelRatio":2,"sdf":true},"star-stroked-11":{"width":28,"height":28,"x":840,"y":460,"pixelRatio":2,"sdf":true},"suitcase-11":{"width":28,"height":28,"x":868,"y":460,"pixelRatio":2,"sdf":true},"sushi-11":{"width":28,"height":28,"x":896,"y":460,"pixelRatio":2,"sdf":true},"swimming-11":{"width":28,"height":28,"x":924,"y":460,"pixelRatio":2,"sdf":true},"table-tennis-11":{"width":28,"height":28,"x":952,"y":460,"pixelRatio":2,"sdf":true},"teahouse-11":{"width":28,"height":28,"x":980,"y":460,"pixelRatio":2,"sdf":true},"telephone-11":{"width":28,"height":28,"x":1008,"y":460,"pixelRatio":2,"sdf":true},"tennis-11":{"width":28,"height":28,"x":1036,"y":460,"pixelRatio":2,"sdf":true},"theatre-11":{"width":28,"height":28,"x":1064,"y":460,"pixelRatio":2,"sdf":true},"toilet-11":{"width":28,"height":28,"x":1092,"y":460,"pixelRatio":2,"sdf":true},"town-11":{"width":28,"height":28,"x":1120,"y":460,"pixelRatio":2,"sdf":true},"town-hall-11":{"width":28,"height":28,"x":560,"y":488,"pixelRatio":2,"sdf":true},"triangle-11":{"width":28,"height":28,"x":588,"y":488,"pixelRatio":2,"sdf":true},"triangle-stroked-11":{"width":28,"height":28,"x":616,"y":488,"pixelRatio":2,"sdf":true},"veterinary-11":{"width":28,"height":28,"x":644,"y":488,"pixelRatio":2,"sdf":true},"viewpoint-11":{"width":28,"height":28,"x":672,"y":488,"pixelRatio":2,"sdf":true},"village-11":{"width":28,"height":28,"x":700,"y":488,"pixelRatio":2,"sdf":true},"volcano-11":{"width":28,"height":28,"x":728,"y":488,"pixelRatio":2,"sdf":true},"volleyball-11":{"width":28,"height":28,"x":756,"y":488,"pixelRatio":2,"sdf":true},"warehouse-11":{"width":28,"height":28,"x":784,"y":488,"pixelRatio":2,"sdf":true},"waste-basket-11":{"width":28,"height":28,"x":812,"y":488,"pixelRatio":2,"sdf":true},"watch-11":{"width":28,"height":28,"x":840,"y":488,"pixelRatio":2,"sdf":true},"water-11":{"width":28,"height":28,"x":868,"y":488,"pixelRatio":2,"sdf":true},"waterfall-11":{"width":28,"height":28,"x":896,"y":488,"pixelRatio":2,"sdf":true},"watermill-11":{"width":28,"height":28,"x":924,"y":488,"pixelRatio":2,"sdf":true},"wetland-11":{"width":28,"height":28,"x":952,"y":488,"pixelRatio":2,"sdf":true},"wheelchair-11":{"width":28,"height":28,"x":980,"y":488,"pixelRatio":2,"sdf":true},"windmill-11":{"width":28,"height":28,"x":1008,"y":488,"pixelRatio":2,"sdf":true},"zoo-11":{"width":28,"height":28,"x":1036,"y":488,"pixelRatio":2,"sdf":true}};

/***/ }),

/***/ "./node_modules/@elastic/maki/dist/sprite@4.json":
/*!*******************************************************!*\
  !*** ./node_modules/@elastic/maki/dist/sprite@4.json ***!
  \*******************************************************/
/*! exports provided: aerialway-15, airfield-15, airport-15, alcohol-shop-15, american-football-15, amusement-park-15, aquarium-15, arrow-15, art-gallery-15, attraction-15, bakery-15, bank-15, bar-15, barrier-15, baseball-15, basketball-15, bbq-15, beach-15, beer-15, bicycle-15, bicycle-share-15, blood-bank-15, boat-15, bowling-alley-15, bridge-15, building-15, building-alt1-15, bus-15, cafe-15, campsite-15, car-15, car-rental-15, car-repair-15, casino-15, castle-15, cemetery-15, charging-station-15, cinema-15, circle-15, circle-stroked-15, city-15, clothing-store-15, college-15, commercial-15, communications-tower-15, confectionery-15, convenience-15, cricket-15, cross-15, dam-15, danger-15, defibrillator-15, dentist-15, doctor-15, dog-park-15, drinking-water-15, embassy-15, emergency-phone-15, entrance-15, entrance-alt1-15, farm-15, fast-food-15, fence-15, ferry-15, fire-station-15, fitness-centre-15, florist-15, fuel-15, furniture-15, gaming-15, garden-15, garden-centre-15, gift-15, globe-15, golf-15, grocery-15, hairdresser-15, harbor-15, hardware-15, heart-15, heliport-15, home-15, horse-riding-15, hospital-15, ice-cream-15, industry-15, information-15, jewelry-store-15, karaoke-15, landmark-15, landuse-15, laundry-15, library-15, lighthouse-15, lodging-15, logging-15, marker-15, marker-stroked-15, mobile-phone-15, monument-15, mountain-15, museum-15, music-15, natural-15, optician-15, paint-15, park-15, park-alt1-15, parking-15, parking-garage-15, pharmacy-15, picnic-site-15, pitch-15, place-of-worship-15, playground-15, police-15, post-15, prison-15, rail-15, rail-light-15, rail-metro-15, ranger-station-15, recycling-15, religious-buddhist-15, religious-christian-15, religious-jewish-15, religious-muslim-15, residential-community-15, restaurant-15, restaurant-noodle-15, restaurant-pizza-15, restaurant-seafood-15, roadblock-15, rocket-15, school-15, scooter-15, shelter-15, shoe-15, shop-15, skateboard-15, skiing-15, slaughterhouse-15, slipway-15, snowmobile-15, soccer-15, square-15, square-stroked-15, stadium-15, star-15, star-stroked-15, suitcase-15, sushi-15, swimming-15, table-tennis-15, teahouse-15, telephone-15, tennis-15, theatre-15, toilet-15, town-15, town-hall-15, triangle-15, triangle-stroked-15, veterinary-15, viewpoint-15, village-15, volcano-15, volleyball-15, warehouse-15, waste-basket-15, watch-15, water-15, waterfall-15, watermill-15, wetland-15, wheelchair-15, windmill-15, zoo-15, aerialway-11, airfield-11, airport-11, alcohol-shop-11, american-football-11, amusement-park-11, aquarium-11, arrow-11, art-gallery-11, attraction-11, bakery-11, bank-11, bar-11, barrier-11, baseball-11, basketball-11, bbq-11, beach-11, beer-11, bicycle-11, bicycle-share-11, blood-bank-11, boat-11, bowling-alley-11, bridge-11, building-11, building-alt1-11, bus-11, cafe-11, campsite-11, car-11, car-rental-11, car-repair-11, casino-11, castle-11, cemetery-11, charging-station-11, cinema-11, circle-11, circle-stroked-11, city-11, clothing-store-11, college-11, commercial-11, communications-tower-11, confectionery-11, convenience-11, cricket-11, cross-11, dam-11, danger-11, defibrillator-11, dentist-11, doctor-11, dog-park-11, drinking-water-11, embassy-11, emergency-phone-11, entrance-11, entrance-alt1-11, farm-11, fast-food-11, fence-11, ferry-11, fire-station-11, fitness-centre-11, florist-11, fuel-11, furniture-11, gaming-11, garden-11, garden-centre-11, gift-11, globe-11, golf-11, grocery-11, hairdresser-11, harbor-11, hardware-11, heart-11, heliport-11, home-11, horse-riding-11, hospital-11, ice-cream-11, industry-11, information-11, jewelry-store-11, karaoke-11, landmark-11, landuse-11, laundry-11, library-11, lighthouse-11, lodging-11, logging-11, marker-11, marker-stroked-11, mobile-phone-11, monument-11, mountain-11, museum-11, music-11, natural-11, optician-11, paint-11, park-11, park-alt1-11, parking-11, parking-garage-11, pharmacy-11, picnic-site-11, pitch-11, place-of-worship-11, playground-11, police-11, post-11, prison-11, rail-11, rail-light-11, rail-metro-11, ranger-station-11, recycling-11, religious-buddhist-11, religious-christian-11, religious-jewish-11, religious-muslim-11, residential-community-11, restaurant-11, restaurant-noodle-11, restaurant-pizza-11, restaurant-seafood-11, roadblock-11, rocket-11, school-11, scooter-11, shelter-11, shoe-11, shop-11, skateboard-11, skiing-11, slaughterhouse-11, slipway-11, snowmobile-11, soccer-11, square-11, square-stroked-11, stadium-11, star-11, star-stroked-11, suitcase-11, sushi-11, swimming-11, table-tennis-11, teahouse-11, telephone-11, tennis-11, theatre-11, toilet-11, town-11, town-hall-11, triangle-11, triangle-stroked-11, veterinary-11, viewpoint-11, village-11, volcano-11, volleyball-11, warehouse-11, waste-basket-11, watch-11, water-11, waterfall-11, watermill-11, wetland-11, wheelchair-11, windmill-11, zoo-11, default */
/***/ (function(module) {

module.exports = {"aerialway-15":{"width":66,"height":66,"x":0,"y":0,"pixelRatio":4,"sdf":true},"airfield-15":{"width":66,"height":66,"x":66,"y":0,"pixelRatio":4,"sdf":true},"airport-15":{"width":66,"height":66,"x":0,"y":66,"pixelRatio":4,"sdf":true},"alcohol-shop-15":{"width":66,"height":66,"x":66,"y":66,"pixelRatio":4,"sdf":true},"american-football-15":{"width":66,"height":66,"x":132,"y":0,"pixelRatio":4,"sdf":true},"amusement-park-15":{"width":66,"height":66,"x":198,"y":0,"pixelRatio":4,"sdf":true},"aquarium-15":{"width":66,"height":66,"x":132,"y":66,"pixelRatio":4,"sdf":true},"arrow-15":{"width":66,"height":66,"x":198,"y":66,"pixelRatio":4,"sdf":true},"art-gallery-15":{"width":66,"height":66,"x":0,"y":132,"pixelRatio":4,"sdf":true},"attraction-15":{"width":66,"height":66,"x":66,"y":132,"pixelRatio":4,"sdf":true},"bakery-15":{"width":66,"height":66,"x":132,"y":132,"pixelRatio":4,"sdf":true},"bank-15":{"width":66,"height":66,"x":198,"y":132,"pixelRatio":4,"sdf":true},"bar-15":{"width":66,"height":66,"x":0,"y":198,"pixelRatio":4,"sdf":true},"barrier-15":{"width":66,"height":66,"x":66,"y":198,"pixelRatio":4,"sdf":true},"baseball-15":{"width":66,"height":66,"x":132,"y":198,"pixelRatio":4,"sdf":true},"basketball-15":{"width":66,"height":66,"x":198,"y":198,"pixelRatio":4,"sdf":true},"bbq-15":{"width":66,"height":66,"x":264,"y":0,"pixelRatio":4,"sdf":true},"beach-15":{"width":66,"height":66,"x":330,"y":0,"pixelRatio":4,"sdf":true},"beer-15":{"width":66,"height":66,"x":396,"y":0,"pixelRatio":4,"sdf":true},"bicycle-15":{"width":66,"height":66,"x":462,"y":0,"pixelRatio":4,"sdf":true},"bicycle-share-15":{"width":66,"height":66,"x":264,"y":66,"pixelRatio":4,"sdf":true},"blood-bank-15":{"width":66,"height":66,"x":330,"y":66,"pixelRatio":4,"sdf":true},"boat-15":{"width":66,"height":66,"x":396,"y":66,"pixelRatio":4,"sdf":true},"bowling-alley-15":{"width":66,"height":66,"x":462,"y":66,"pixelRatio":4,"sdf":true},"bridge-15":{"width":66,"height":66,"x":264,"y":132,"pixelRatio":4,"sdf":true},"building-15":{"width":66,"height":66,"x":330,"y":132,"pixelRatio":4,"sdf":true},"building-alt1-15":{"width":66,"height":66,"x":396,"y":132,"pixelRatio":4,"sdf":true},"bus-15":{"width":66,"height":66,"x":462,"y":132,"pixelRatio":4,"sdf":true},"cafe-15":{"width":66,"height":66,"x":264,"y":198,"pixelRatio":4,"sdf":true},"campsite-15":{"width":66,"height":66,"x":330,"y":198,"pixelRatio":4,"sdf":true},"car-15":{"width":66,"height":66,"x":396,"y":198,"pixelRatio":4,"sdf":true},"car-rental-15":{"width":66,"height":66,"x":462,"y":198,"pixelRatio":4,"sdf":true},"car-repair-15":{"width":66,"height":66,"x":0,"y":264,"pixelRatio":4,"sdf":true},"casino-15":{"width":66,"height":66,"x":66,"y":264,"pixelRatio":4,"sdf":true},"castle-15":{"width":66,"height":66,"x":132,"y":264,"pixelRatio":4,"sdf":true},"cemetery-15":{"width":66,"height":66,"x":198,"y":264,"pixelRatio":4,"sdf":true},"charging-station-15":{"width":66,"height":66,"x":264,"y":264,"pixelRatio":4,"sdf":true},"cinema-15":{"width":66,"height":66,"x":330,"y":264,"pixelRatio":4,"sdf":true},"circle-15":{"width":66,"height":66,"x":396,"y":264,"pixelRatio":4,"sdf":true},"circle-stroked-15":{"width":66,"height":66,"x":462,"y":264,"pixelRatio":4,"sdf":true},"city-15":{"width":66,"height":66,"x":0,"y":330,"pixelRatio":4,"sdf":true},"clothing-store-15":{"width":66,"height":66,"x":66,"y":330,"pixelRatio":4,"sdf":true},"college-15":{"width":66,"height":66,"x":132,"y":330,"pixelRatio":4,"sdf":true},"commercial-15":{"width":66,"height":66,"x":198,"y":330,"pixelRatio":4,"sdf":true},"communications-tower-15":{"width":66,"height":66,"x":264,"y":330,"pixelRatio":4,"sdf":true},"confectionery-15":{"width":66,"height":66,"x":330,"y":330,"pixelRatio":4,"sdf":true},"convenience-15":{"width":66,"height":66,"x":396,"y":330,"pixelRatio":4,"sdf":true},"cricket-15":{"width":66,"height":66,"x":462,"y":330,"pixelRatio":4,"sdf":true},"cross-15":{"width":66,"height":66,"x":0,"y":396,"pixelRatio":4,"sdf":true},"dam-15":{"width":66,"height":66,"x":66,"y":396,"pixelRatio":4,"sdf":true},"danger-15":{"width":66,"height":66,"x":132,"y":396,"pixelRatio":4,"sdf":true},"defibrillator-15":{"width":66,"height":66,"x":198,"y":396,"pixelRatio":4,"sdf":true},"dentist-15":{"width":66,"height":66,"x":264,"y":396,"pixelRatio":4,"sdf":true},"doctor-15":{"width":66,"height":66,"x":330,"y":396,"pixelRatio":4,"sdf":true},"dog-park-15":{"width":66,"height":66,"x":396,"y":396,"pixelRatio":4,"sdf":true},"drinking-water-15":{"width":66,"height":66,"x":462,"y":396,"pixelRatio":4,"sdf":true},"embassy-15":{"width":66,"height":66,"x":0,"y":462,"pixelRatio":4,"sdf":true},"emergency-phone-15":{"width":66,"height":66,"x":66,"y":462,"pixelRatio":4,"sdf":true},"entrance-15":{"width":66,"height":66,"x":132,"y":462,"pixelRatio":4,"sdf":true},"entrance-alt1-15":{"width":66,"height":66,"x":198,"y":462,"pixelRatio":4,"sdf":true},"farm-15":{"width":66,"height":66,"x":264,"y":462,"pixelRatio":4,"sdf":true},"fast-food-15":{"width":66,"height":66,"x":330,"y":462,"pixelRatio":4,"sdf":true},"fence-15":{"width":66,"height":66,"x":396,"y":462,"pixelRatio":4,"sdf":true},"ferry-15":{"width":66,"height":66,"x":462,"y":462,"pixelRatio":4,"sdf":true},"fire-station-15":{"width":66,"height":66,"x":528,"y":0,"pixelRatio":4,"sdf":true},"fitness-centre-15":{"width":66,"height":66,"x":594,"y":0,"pixelRatio":4,"sdf":true},"florist-15":{"width":66,"height":66,"x":660,"y":0,"pixelRatio":4,"sdf":true},"fuel-15":{"width":66,"height":66,"x":726,"y":0,"pixelRatio":4,"sdf":true},"furniture-15":{"width":66,"height":66,"x":792,"y":0,"pixelRatio":4,"sdf":true},"gaming-15":{"width":66,"height":66,"x":858,"y":0,"pixelRatio":4,"sdf":true},"garden-15":{"width":66,"height":66,"x":924,"y":0,"pixelRatio":4,"sdf":true},"garden-centre-15":{"width":66,"height":66,"x":990,"y":0,"pixelRatio":4,"sdf":true},"gift-15":{"width":66,"height":66,"x":528,"y":66,"pixelRatio":4,"sdf":true},"globe-15":{"width":66,"height":66,"x":594,"y":66,"pixelRatio":4,"sdf":true},"golf-15":{"width":66,"height":66,"x":660,"y":66,"pixelRatio":4,"sdf":true},"grocery-15":{"width":66,"height":66,"x":726,"y":66,"pixelRatio":4,"sdf":true},"hairdresser-15":{"width":66,"height":66,"x":792,"y":66,"pixelRatio":4,"sdf":true},"harbor-15":{"width":66,"height":66,"x":858,"y":66,"pixelRatio":4,"sdf":true},"hardware-15":{"width":66,"height":66,"x":924,"y":66,"pixelRatio":4,"sdf":true},"heart-15":{"width":66,"height":66,"x":990,"y":66,"pixelRatio":4,"sdf":true},"heliport-15":{"width":66,"height":66,"x":528,"y":132,"pixelRatio":4,"sdf":true},"home-15":{"width":66,"height":66,"x":594,"y":132,"pixelRatio":4,"sdf":true},"horse-riding-15":{"width":66,"height":66,"x":660,"y":132,"pixelRatio":4,"sdf":true},"hospital-15":{"width":66,"height":66,"x":726,"y":132,"pixelRatio":4,"sdf":true},"ice-cream-15":{"width":66,"height":66,"x":792,"y":132,"pixelRatio":4,"sdf":true},"industry-15":{"width":66,"height":66,"x":858,"y":132,"pixelRatio":4,"sdf":true},"information-15":{"width":66,"height":66,"x":924,"y":132,"pixelRatio":4,"sdf":true},"jewelry-store-15":{"width":66,"height":66,"x":990,"y":132,"pixelRatio":4,"sdf":true},"karaoke-15":{"width":66,"height":66,"x":528,"y":198,"pixelRatio":4,"sdf":true},"landmark-15":{"width":66,"height":66,"x":594,"y":198,"pixelRatio":4,"sdf":true},"landuse-15":{"width":66,"height":66,"x":660,"y":198,"pixelRatio":4,"sdf":true},"laundry-15":{"width":66,"height":66,"x":726,"y":198,"pixelRatio":4,"sdf":true},"library-15":{"width":66,"height":66,"x":792,"y":198,"pixelRatio":4,"sdf":true},"lighthouse-15":{"width":66,"height":66,"x":858,"y":198,"pixelRatio":4,"sdf":true},"lodging-15":{"width":66,"height":66,"x":924,"y":198,"pixelRatio":4,"sdf":true},"logging-15":{"width":66,"height":66,"x":990,"y":198,"pixelRatio":4,"sdf":true},"marker-15":{"width":66,"height":66,"x":528,"y":264,"pixelRatio":4,"sdf":true},"marker-stroked-15":{"width":66,"height":66,"x":594,"y":264,"pixelRatio":4,"sdf":true},"mobile-phone-15":{"width":66,"height":66,"x":660,"y":264,"pixelRatio":4,"sdf":true},"monument-15":{"width":66,"height":66,"x":726,"y":264,"pixelRatio":4,"sdf":true},"mountain-15":{"width":66,"height":66,"x":792,"y":264,"pixelRatio":4,"sdf":true},"museum-15":{"width":66,"height":66,"x":858,"y":264,"pixelRatio":4,"sdf":true},"music-15":{"width":66,"height":66,"x":924,"y":264,"pixelRatio":4,"sdf":true},"natural-15":{"width":66,"height":66,"x":990,"y":264,"pixelRatio":4,"sdf":true},"optician-15":{"width":66,"height":66,"x":528,"y":330,"pixelRatio":4,"sdf":true},"paint-15":{"width":66,"height":66,"x":594,"y":330,"pixelRatio":4,"sdf":true},"park-15":{"width":66,"height":66,"x":660,"y":330,"pixelRatio":4,"sdf":true},"park-alt1-15":{"width":66,"height":66,"x":726,"y":330,"pixelRatio":4,"sdf":true},"parking-15":{"width":66,"height":66,"x":792,"y":330,"pixelRatio":4,"sdf":true},"parking-garage-15":{"width":66,"height":66,"x":858,"y":330,"pixelRatio":4,"sdf":true},"pharmacy-15":{"width":66,"height":66,"x":924,"y":330,"pixelRatio":4,"sdf":true},"picnic-site-15":{"width":66,"height":66,"x":990,"y":330,"pixelRatio":4,"sdf":true},"pitch-15":{"width":66,"height":66,"x":528,"y":396,"pixelRatio":4,"sdf":true},"place-of-worship-15":{"width":66,"height":66,"x":594,"y":396,"pixelRatio":4,"sdf":true},"playground-15":{"width":66,"height":66,"x":660,"y":396,"pixelRatio":4,"sdf":true},"police-15":{"width":66,"height":66,"x":726,"y":396,"pixelRatio":4,"sdf":true},"post-15":{"width":66,"height":66,"x":792,"y":396,"pixelRatio":4,"sdf":true},"prison-15":{"width":66,"height":66,"x":858,"y":396,"pixelRatio":4,"sdf":true},"rail-15":{"width":66,"height":66,"x":924,"y":396,"pixelRatio":4,"sdf":true},"rail-light-15":{"width":66,"height":66,"x":990,"y":396,"pixelRatio":4,"sdf":true},"rail-metro-15":{"width":66,"height":66,"x":528,"y":462,"pixelRatio":4,"sdf":true},"ranger-station-15":{"width":66,"height":66,"x":594,"y":462,"pixelRatio":4,"sdf":true},"recycling-15":{"width":66,"height":66,"x":660,"y":462,"pixelRatio":4,"sdf":true},"religious-buddhist-15":{"width":66,"height":66,"x":726,"y":462,"pixelRatio":4,"sdf":true},"religious-christian-15":{"width":66,"height":66,"x":792,"y":462,"pixelRatio":4,"sdf":true},"religious-jewish-15":{"width":66,"height":66,"x":858,"y":462,"pixelRatio":4,"sdf":true},"religious-muslim-15":{"width":66,"height":66,"x":924,"y":462,"pixelRatio":4,"sdf":true},"residential-community-15":{"width":66,"height":66,"x":990,"y":462,"pixelRatio":4,"sdf":true},"restaurant-15":{"width":66,"height":66,"x":0,"y":528,"pixelRatio":4,"sdf":true},"restaurant-noodle-15":{"width":66,"height":66,"x":66,"y":528,"pixelRatio":4,"sdf":true},"restaurant-pizza-15":{"width":66,"height":66,"x":132,"y":528,"pixelRatio":4,"sdf":true},"restaurant-seafood-15":{"width":66,"height":66,"x":198,"y":528,"pixelRatio":4,"sdf":true},"roadblock-15":{"width":66,"height":66,"x":264,"y":528,"pixelRatio":4,"sdf":true},"rocket-15":{"width":66,"height":66,"x":330,"y":528,"pixelRatio":4,"sdf":true},"school-15":{"width":66,"height":66,"x":396,"y":528,"pixelRatio":4,"sdf":true},"scooter-15":{"width":66,"height":66,"x":462,"y":528,"pixelRatio":4,"sdf":true},"shelter-15":{"width":66,"height":66,"x":528,"y":528,"pixelRatio":4,"sdf":true},"shoe-15":{"width":66,"height":66,"x":594,"y":528,"pixelRatio":4,"sdf":true},"shop-15":{"width":66,"height":66,"x":660,"y":528,"pixelRatio":4,"sdf":true},"skateboard-15":{"width":66,"height":66,"x":726,"y":528,"pixelRatio":4,"sdf":true},"skiing-15":{"width":66,"height":66,"x":792,"y":528,"pixelRatio":4,"sdf":true},"slaughterhouse-15":{"width":66,"height":66,"x":858,"y":528,"pixelRatio":4,"sdf":true},"slipway-15":{"width":66,"height":66,"x":924,"y":528,"pixelRatio":4,"sdf":true},"snowmobile-15":{"width":66,"height":66,"x":990,"y":528,"pixelRatio":4,"sdf":true},"soccer-15":{"width":66,"height":66,"x":0,"y":594,"pixelRatio":4,"sdf":true},"square-15":{"width":66,"height":66,"x":66,"y":594,"pixelRatio":4,"sdf":true},"square-stroked-15":{"width":66,"height":66,"x":132,"y":594,"pixelRatio":4,"sdf":true},"stadium-15":{"width":66,"height":66,"x":198,"y":594,"pixelRatio":4,"sdf":true},"star-15":{"width":66,"height":66,"x":264,"y":594,"pixelRatio":4,"sdf":true},"star-stroked-15":{"width":66,"height":66,"x":330,"y":594,"pixelRatio":4,"sdf":true},"suitcase-15":{"width":66,"height":66,"x":396,"y":594,"pixelRatio":4,"sdf":true},"sushi-15":{"width":66,"height":66,"x":462,"y":594,"pixelRatio":4,"sdf":true},"swimming-15":{"width":66,"height":66,"x":528,"y":594,"pixelRatio":4,"sdf":true},"table-tennis-15":{"width":66,"height":66,"x":594,"y":594,"pixelRatio":4,"sdf":true},"teahouse-15":{"width":66,"height":66,"x":660,"y":594,"pixelRatio":4,"sdf":true},"telephone-15":{"width":66,"height":66,"x":726,"y":594,"pixelRatio":4,"sdf":true},"tennis-15":{"width":66,"height":66,"x":792,"y":594,"pixelRatio":4,"sdf":true},"theatre-15":{"width":66,"height":66,"x":858,"y":594,"pixelRatio":4,"sdf":true},"toilet-15":{"width":66,"height":66,"x":924,"y":594,"pixelRatio":4,"sdf":true},"town-15":{"width":66,"height":66,"x":990,"y":594,"pixelRatio":4,"sdf":true},"town-hall-15":{"width":66,"height":66,"x":0,"y":660,"pixelRatio":4,"sdf":true},"triangle-15":{"width":66,"height":66,"x":66,"y":660,"pixelRatio":4,"sdf":true},"triangle-stroked-15":{"width":66,"height":66,"x":132,"y":660,"pixelRatio":4,"sdf":true},"veterinary-15":{"width":66,"height":66,"x":198,"y":660,"pixelRatio":4,"sdf":true},"viewpoint-15":{"width":66,"height":66,"x":264,"y":660,"pixelRatio":4,"sdf":true},"village-15":{"width":66,"height":66,"x":330,"y":660,"pixelRatio":4,"sdf":true},"volcano-15":{"width":66,"height":66,"x":396,"y":660,"pixelRatio":4,"sdf":true},"volleyball-15":{"width":66,"height":66,"x":462,"y":660,"pixelRatio":4,"sdf":true},"warehouse-15":{"width":66,"height":66,"x":528,"y":660,"pixelRatio":4,"sdf":true},"waste-basket-15":{"width":66,"height":66,"x":594,"y":660,"pixelRatio":4,"sdf":true},"watch-15":{"width":66,"height":66,"x":660,"y":660,"pixelRatio":4,"sdf":true},"water-15":{"width":66,"height":66,"x":726,"y":660,"pixelRatio":4,"sdf":true},"waterfall-15":{"width":66,"height":66,"x":792,"y":660,"pixelRatio":4,"sdf":true},"watermill-15":{"width":66,"height":66,"x":858,"y":660,"pixelRatio":4,"sdf":true},"wetland-15":{"width":66,"height":66,"x":924,"y":660,"pixelRatio":4,"sdf":true},"wheelchair-15":{"width":66,"height":66,"x":990,"y":660,"pixelRatio":4,"sdf":true},"windmill-15":{"width":66,"height":66,"x":0,"y":726,"pixelRatio":4,"sdf":true},"zoo-15":{"width":66,"height":66,"x":66,"y":726,"pixelRatio":4,"sdf":true},"aerialway-11":{"width":50,"height":50,"x":132,"y":726,"pixelRatio":4,"sdf":true},"airfield-11":{"width":50,"height":50,"x":182,"y":726,"pixelRatio":4,"sdf":true},"airport-11":{"width":50,"height":50,"x":232,"y":726,"pixelRatio":4,"sdf":true},"alcohol-shop-11":{"width":50,"height":50,"x":282,"y":726,"pixelRatio":4,"sdf":true},"american-football-11":{"width":50,"height":50,"x":332,"y":726,"pixelRatio":4,"sdf":true},"amusement-park-11":{"width":50,"height":50,"x":382,"y":726,"pixelRatio":4,"sdf":true},"aquarium-11":{"width":50,"height":50,"x":432,"y":726,"pixelRatio":4,"sdf":true},"arrow-11":{"width":50,"height":50,"x":482,"y":726,"pixelRatio":4,"sdf":true},"art-gallery-11":{"width":50,"height":50,"x":532,"y":726,"pixelRatio":4,"sdf":true},"attraction-11":{"width":50,"height":50,"x":582,"y":726,"pixelRatio":4,"sdf":true},"bakery-11":{"width":50,"height":50,"x":632,"y":726,"pixelRatio":4,"sdf":true},"bank-11":{"width":50,"height":50,"x":682,"y":726,"pixelRatio":4,"sdf":true},"bar-11":{"width":50,"height":50,"x":732,"y":726,"pixelRatio":4,"sdf":true},"barrier-11":{"width":50,"height":50,"x":782,"y":726,"pixelRatio":4,"sdf":true},"baseball-11":{"width":50,"height":50,"x":832,"y":726,"pixelRatio":4,"sdf":true},"basketball-11":{"width":50,"height":50,"x":882,"y":726,"pixelRatio":4,"sdf":true},"bbq-11":{"width":50,"height":50,"x":932,"y":726,"pixelRatio":4,"sdf":true},"beach-11":{"width":50,"height":50,"x":982,"y":726,"pixelRatio":4,"sdf":true},"beer-11":{"width":50,"height":50,"x":0,"y":792,"pixelRatio":4,"sdf":true},"bicycle-11":{"width":50,"height":50,"x":50,"y":792,"pixelRatio":4,"sdf":true},"bicycle-share-11":{"width":50,"height":50,"x":100,"y":792,"pixelRatio":4,"sdf":true},"blood-bank-11":{"width":50,"height":50,"x":150,"y":792,"pixelRatio":4,"sdf":true},"boat-11":{"width":50,"height":50,"x":200,"y":792,"pixelRatio":4,"sdf":true},"bowling-alley-11":{"width":50,"height":50,"x":250,"y":792,"pixelRatio":4,"sdf":true},"bridge-11":{"width":50,"height":50,"x":300,"y":792,"pixelRatio":4,"sdf":true},"building-11":{"width":50,"height":50,"x":350,"y":792,"pixelRatio":4,"sdf":true},"building-alt1-11":{"width":50,"height":50,"x":400,"y":792,"pixelRatio":4,"sdf":true},"bus-11":{"width":50,"height":50,"x":450,"y":792,"pixelRatio":4,"sdf":true},"cafe-11":{"width":50,"height":50,"x":500,"y":792,"pixelRatio":4,"sdf":true},"campsite-11":{"width":50,"height":50,"x":550,"y":792,"pixelRatio":4,"sdf":true},"car-11":{"width":50,"height":50,"x":600,"y":792,"pixelRatio":4,"sdf":true},"car-rental-11":{"width":50,"height":50,"x":650,"y":792,"pixelRatio":4,"sdf":true},"car-repair-11":{"width":50,"height":50,"x":700,"y":792,"pixelRatio":4,"sdf":true},"casino-11":{"width":50,"height":50,"x":750,"y":792,"pixelRatio":4,"sdf":true},"castle-11":{"width":50,"height":50,"x":800,"y":792,"pixelRatio":4,"sdf":true},"cemetery-11":{"width":50,"height":50,"x":850,"y":792,"pixelRatio":4,"sdf":true},"charging-station-11":{"width":50,"height":50,"x":900,"y":792,"pixelRatio":4,"sdf":true},"cinema-11":{"width":50,"height":50,"x":950,"y":792,"pixelRatio":4,"sdf":true},"circle-11":{"width":50,"height":50,"x":1000,"y":792,"pixelRatio":4,"sdf":true},"circle-stroked-11":{"width":50,"height":50,"x":0,"y":842,"pixelRatio":4,"sdf":true},"city-11":{"width":50,"height":50,"x":50,"y":842,"pixelRatio":4,"sdf":true},"clothing-store-11":{"width":50,"height":50,"x":100,"y":842,"pixelRatio":4,"sdf":true},"college-11":{"width":50,"height":50,"x":150,"y":842,"pixelRatio":4,"sdf":true},"commercial-11":{"width":50,"height":50,"x":200,"y":842,"pixelRatio":4,"sdf":true},"communications-tower-11":{"width":50,"height":50,"x":250,"y":842,"pixelRatio":4,"sdf":true},"confectionery-11":{"width":50,"height":50,"x":300,"y":842,"pixelRatio":4,"sdf":true},"convenience-11":{"width":50,"height":50,"x":350,"y":842,"pixelRatio":4,"sdf":true},"cricket-11":{"width":50,"height":50,"x":400,"y":842,"pixelRatio":4,"sdf":true},"cross-11":{"width":50,"height":50,"x":450,"y":842,"pixelRatio":4,"sdf":true},"dam-11":{"width":50,"height":50,"x":500,"y":842,"pixelRatio":4,"sdf":true},"danger-11":{"width":50,"height":50,"x":550,"y":842,"pixelRatio":4,"sdf":true},"defibrillator-11":{"width":50,"height":50,"x":600,"y":842,"pixelRatio":4,"sdf":true},"dentist-11":{"width":50,"height":50,"x":650,"y":842,"pixelRatio":4,"sdf":true},"doctor-11":{"width":50,"height":50,"x":700,"y":842,"pixelRatio":4,"sdf":true},"dog-park-11":{"width":50,"height":50,"x":750,"y":842,"pixelRatio":4,"sdf":true},"drinking-water-11":{"width":50,"height":50,"x":800,"y":842,"pixelRatio":4,"sdf":true},"embassy-11":{"width":50,"height":50,"x":850,"y":842,"pixelRatio":4,"sdf":true},"emergency-phone-11":{"width":50,"height":50,"x":900,"y":842,"pixelRatio":4,"sdf":true},"entrance-11":{"width":50,"height":50,"x":950,"y":842,"pixelRatio":4,"sdf":true},"entrance-alt1-11":{"width":50,"height":50,"x":1000,"y":842,"pixelRatio":4,"sdf":true},"farm-11":{"width":50,"height":50,"x":0,"y":892,"pixelRatio":4,"sdf":true},"fast-food-11":{"width":50,"height":50,"x":50,"y":892,"pixelRatio":4,"sdf":true},"fence-11":{"width":50,"height":50,"x":100,"y":892,"pixelRatio":4,"sdf":true},"ferry-11":{"width":50,"height":50,"x":150,"y":892,"pixelRatio":4,"sdf":true},"fire-station-11":{"width":50,"height":50,"x":200,"y":892,"pixelRatio":4,"sdf":true},"fitness-centre-11":{"width":50,"height":50,"x":250,"y":892,"pixelRatio":4,"sdf":true},"florist-11":{"width":50,"height":50,"x":300,"y":892,"pixelRatio":4,"sdf":true},"fuel-11":{"width":50,"height":50,"x":350,"y":892,"pixelRatio":4,"sdf":true},"furniture-11":{"width":50,"height":50,"x":400,"y":892,"pixelRatio":4,"sdf":true},"gaming-11":{"width":50,"height":50,"x":450,"y":892,"pixelRatio":4,"sdf":true},"garden-11":{"width":50,"height":50,"x":500,"y":892,"pixelRatio":4,"sdf":true},"garden-centre-11":{"width":50,"height":50,"x":550,"y":892,"pixelRatio":4,"sdf":true},"gift-11":{"width":50,"height":50,"x":600,"y":892,"pixelRatio":4,"sdf":true},"globe-11":{"width":50,"height":50,"x":650,"y":892,"pixelRatio":4,"sdf":true},"golf-11":{"width":50,"height":50,"x":700,"y":892,"pixelRatio":4,"sdf":true},"grocery-11":{"width":50,"height":50,"x":750,"y":892,"pixelRatio":4,"sdf":true},"hairdresser-11":{"width":50,"height":50,"x":800,"y":892,"pixelRatio":4,"sdf":true},"harbor-11":{"width":50,"height":50,"x":850,"y":892,"pixelRatio":4,"sdf":true},"hardware-11":{"width":50,"height":50,"x":900,"y":892,"pixelRatio":4,"sdf":true},"heart-11":{"width":50,"height":50,"x":950,"y":892,"pixelRatio":4,"sdf":true},"heliport-11":{"width":50,"height":50,"x":1000,"y":892,"pixelRatio":4,"sdf":true},"home-11":{"width":50,"height":50,"x":0,"y":942,"pixelRatio":4,"sdf":true},"horse-riding-11":{"width":50,"height":50,"x":50,"y":942,"pixelRatio":4,"sdf":true},"hospital-11":{"width":50,"height":50,"x":100,"y":942,"pixelRatio":4,"sdf":true},"ice-cream-11":{"width":50,"height":50,"x":150,"y":942,"pixelRatio":4,"sdf":true},"industry-11":{"width":50,"height":50,"x":200,"y":942,"pixelRatio":4,"sdf":true},"information-11":{"width":50,"height":50,"x":250,"y":942,"pixelRatio":4,"sdf":true},"jewelry-store-11":{"width":50,"height":50,"x":300,"y":942,"pixelRatio":4,"sdf":true},"karaoke-11":{"width":50,"height":50,"x":350,"y":942,"pixelRatio":4,"sdf":true},"landmark-11":{"width":50,"height":50,"x":400,"y":942,"pixelRatio":4,"sdf":true},"landuse-11":{"width":50,"height":50,"x":450,"y":942,"pixelRatio":4,"sdf":true},"laundry-11":{"width":50,"height":50,"x":500,"y":942,"pixelRatio":4,"sdf":true},"library-11":{"width":50,"height":50,"x":550,"y":942,"pixelRatio":4,"sdf":true},"lighthouse-11":{"width":50,"height":50,"x":600,"y":942,"pixelRatio":4,"sdf":true},"lodging-11":{"width":50,"height":50,"x":650,"y":942,"pixelRatio":4,"sdf":true},"logging-11":{"width":50,"height":50,"x":700,"y":942,"pixelRatio":4,"sdf":true},"marker-11":{"width":50,"height":50,"x":750,"y":942,"pixelRatio":4,"sdf":true},"marker-stroked-11":{"width":50,"height":50,"x":800,"y":942,"pixelRatio":4,"sdf":true},"mobile-phone-11":{"width":50,"height":50,"x":850,"y":942,"pixelRatio":4,"sdf":true},"monument-11":{"width":50,"height":50,"x":900,"y":942,"pixelRatio":4,"sdf":true},"mountain-11":{"width":50,"height":50,"x":950,"y":942,"pixelRatio":4,"sdf":true},"museum-11":{"width":50,"height":50,"x":1000,"y":942,"pixelRatio":4,"sdf":true},"music-11":{"width":50,"height":50,"x":0,"y":992,"pixelRatio":4,"sdf":true},"natural-11":{"width":50,"height":50,"x":50,"y":992,"pixelRatio":4,"sdf":true},"optician-11":{"width":50,"height":50,"x":100,"y":992,"pixelRatio":4,"sdf":true},"paint-11":{"width":50,"height":50,"x":150,"y":992,"pixelRatio":4,"sdf":true},"park-11":{"width":50,"height":50,"x":200,"y":992,"pixelRatio":4,"sdf":true},"park-alt1-11":{"width":50,"height":50,"x":250,"y":992,"pixelRatio":4,"sdf":true},"parking-11":{"width":50,"height":50,"x":300,"y":992,"pixelRatio":4,"sdf":true},"parking-garage-11":{"width":50,"height":50,"x":350,"y":992,"pixelRatio":4,"sdf":true},"pharmacy-11":{"width":50,"height":50,"x":400,"y":992,"pixelRatio":4,"sdf":true},"picnic-site-11":{"width":50,"height":50,"x":450,"y":992,"pixelRatio":4,"sdf":true},"pitch-11":{"width":50,"height":50,"x":500,"y":992,"pixelRatio":4,"sdf":true},"place-of-worship-11":{"width":50,"height":50,"x":550,"y":992,"pixelRatio":4,"sdf":true},"playground-11":{"width":50,"height":50,"x":600,"y":992,"pixelRatio":4,"sdf":true},"police-11":{"width":50,"height":50,"x":650,"y":992,"pixelRatio":4,"sdf":true},"post-11":{"width":50,"height":50,"x":700,"y":992,"pixelRatio":4,"sdf":true},"prison-11":{"width":50,"height":50,"x":750,"y":992,"pixelRatio":4,"sdf":true},"rail-11":{"width":50,"height":50,"x":800,"y":992,"pixelRatio":4,"sdf":true},"rail-light-11":{"width":50,"height":50,"x":850,"y":992,"pixelRatio":4,"sdf":true},"rail-metro-11":{"width":50,"height":50,"x":900,"y":992,"pixelRatio":4,"sdf":true},"ranger-station-11":{"width":50,"height":50,"x":950,"y":992,"pixelRatio":4,"sdf":true},"recycling-11":{"width":50,"height":50,"x":1000,"y":992,"pixelRatio":4,"sdf":true},"religious-buddhist-11":{"width":50,"height":50,"x":1050,"y":792,"pixelRatio":4,"sdf":true},"religious-christian-11":{"width":50,"height":50,"x":1100,"y":792,"pixelRatio":4,"sdf":true},"religious-jewish-11":{"width":50,"height":50,"x":1150,"y":792,"pixelRatio":4,"sdf":true},"religious-muslim-11":{"width":50,"height":50,"x":1200,"y":792,"pixelRatio":4,"sdf":true},"residential-community-11":{"width":50,"height":50,"x":1250,"y":792,"pixelRatio":4,"sdf":true},"restaurant-11":{"width":50,"height":50,"x":1300,"y":792,"pixelRatio":4,"sdf":true},"restaurant-noodle-11":{"width":50,"height":50,"x":1350,"y":792,"pixelRatio":4,"sdf":true},"restaurant-pizza-11":{"width":50,"height":50,"x":1400,"y":792,"pixelRatio":4,"sdf":true},"restaurant-seafood-11":{"width":50,"height":50,"x":1450,"y":792,"pixelRatio":4,"sdf":true},"roadblock-11":{"width":50,"height":50,"x":1500,"y":792,"pixelRatio":4,"sdf":true},"rocket-11":{"width":50,"height":50,"x":1550,"y":792,"pixelRatio":4,"sdf":true},"school-11":{"width":50,"height":50,"x":1600,"y":792,"pixelRatio":4,"sdf":true},"scooter-11":{"width":50,"height":50,"x":1650,"y":792,"pixelRatio":4,"sdf":true},"shelter-11":{"width":50,"height":50,"x":1700,"y":792,"pixelRatio":4,"sdf":true},"shoe-11":{"width":50,"height":50,"x":1750,"y":792,"pixelRatio":4,"sdf":true},"shop-11":{"width":50,"height":50,"x":1800,"y":792,"pixelRatio":4,"sdf":true},"skateboard-11":{"width":50,"height":50,"x":1850,"y":792,"pixelRatio":4,"sdf":true},"skiing-11":{"width":50,"height":50,"x":1900,"y":792,"pixelRatio":4,"sdf":true},"slaughterhouse-11":{"width":50,"height":50,"x":1950,"y":792,"pixelRatio":4,"sdf":true},"slipway-11":{"width":50,"height":50,"x":2000,"y":792,"pixelRatio":4,"sdf":true},"snowmobile-11":{"width":50,"height":50,"x":2050,"y":792,"pixelRatio":4,"sdf":true},"soccer-11":{"width":50,"height":50,"x":1050,"y":842,"pixelRatio":4,"sdf":true},"square-11":{"width":50,"height":50,"x":1100,"y":842,"pixelRatio":4,"sdf":true},"square-stroked-11":{"width":50,"height":50,"x":1150,"y":842,"pixelRatio":4,"sdf":true},"stadium-11":{"width":50,"height":50,"x":1200,"y":842,"pixelRatio":4,"sdf":true},"star-11":{"width":50,"height":50,"x":1250,"y":842,"pixelRatio":4,"sdf":true},"star-stroked-11":{"width":50,"height":50,"x":1300,"y":842,"pixelRatio":4,"sdf":true},"suitcase-11":{"width":50,"height":50,"x":1350,"y":842,"pixelRatio":4,"sdf":true},"sushi-11":{"width":50,"height":50,"x":1400,"y":842,"pixelRatio":4,"sdf":true},"swimming-11":{"width":50,"height":50,"x":1450,"y":842,"pixelRatio":4,"sdf":true},"table-tennis-11":{"width":50,"height":50,"x":1500,"y":842,"pixelRatio":4,"sdf":true},"teahouse-11":{"width":50,"height":50,"x":1550,"y":842,"pixelRatio":4,"sdf":true},"telephone-11":{"width":50,"height":50,"x":1600,"y":842,"pixelRatio":4,"sdf":true},"tennis-11":{"width":50,"height":50,"x":1650,"y":842,"pixelRatio":4,"sdf":true},"theatre-11":{"width":50,"height":50,"x":1700,"y":842,"pixelRatio":4,"sdf":true},"toilet-11":{"width":50,"height":50,"x":1750,"y":842,"pixelRatio":4,"sdf":true},"town-11":{"width":50,"height":50,"x":1800,"y":842,"pixelRatio":4,"sdf":true},"town-hall-11":{"width":50,"height":50,"x":1850,"y":842,"pixelRatio":4,"sdf":true},"triangle-11":{"width":50,"height":50,"x":1900,"y":842,"pixelRatio":4,"sdf":true},"triangle-stroked-11":{"width":50,"height":50,"x":1950,"y":842,"pixelRatio":4,"sdf":true},"veterinary-11":{"width":50,"height":50,"x":2000,"y":842,"pixelRatio":4,"sdf":true},"viewpoint-11":{"width":50,"height":50,"x":2050,"y":842,"pixelRatio":4,"sdf":true},"village-11":{"width":50,"height":50,"x":1050,"y":892,"pixelRatio":4,"sdf":true},"volcano-11":{"width":50,"height":50,"x":1100,"y":892,"pixelRatio":4,"sdf":true},"volleyball-11":{"width":50,"height":50,"x":1150,"y":892,"pixelRatio":4,"sdf":true},"warehouse-11":{"width":50,"height":50,"x":1200,"y":892,"pixelRatio":4,"sdf":true},"waste-basket-11":{"width":50,"height":50,"x":1250,"y":892,"pixelRatio":4,"sdf":true},"watch-11":{"width":50,"height":50,"x":1300,"y":892,"pixelRatio":4,"sdf":true},"water-11":{"width":50,"height":50,"x":1350,"y":892,"pixelRatio":4,"sdf":true},"waterfall-11":{"width":50,"height":50,"x":1400,"y":892,"pixelRatio":4,"sdf":true},"watermill-11":{"width":50,"height":50,"x":1450,"y":892,"pixelRatio":4,"sdf":true},"wetland-11":{"width":50,"height":50,"x":1500,"y":892,"pixelRatio":4,"sdf":true},"wheelchair-11":{"width":50,"height":50,"x":1550,"y":892,"pixelRatio":4,"sdf":true},"windmill-11":{"width":50,"height":50,"x":1600,"y":892,"pixelRatio":4,"sdf":true},"zoo-11":{"width":50,"height":50,"x":1650,"y":892,"pixelRatio":4,"sdf":true}};

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

module.exports = {"all":["aerialway","airfield","airport","alcohol-shop","american-football","amusement-park","aquarium","arrow","art-gallery","attraction","bakery","bank","bar","barrier","baseball","basketball","bbq","beach","beer","bicycle","bicycle-share","blood-bank","boat","bowling-alley","bridge","building","building-alt1","bus","cafe","campsite","car","car-rental","car-repair","casino","castle","cemetery","charging-station","cinema","circle","circle-stroked","city","clothing-store","college","commercial","communications-tower","confectionery","convenience","cricket","cross","dam","danger","defibrillator","dentist","doctor","dog-park","drinking-water","embassy","emergency-phone","entrance","entrance-alt1","farm","fast-food","fence","ferry","fire-station","fitness-centre","florist","fuel","furniture","gaming","garden","garden-centre","gift","globe","golf","grocery","hairdresser","harbor","hardware","heart","heliport","home","horse-riding","hospital","ice-cream","industry","information","jewelry-store","karaoke","landmark","landuse","laundry","library","lighthouse","lodging","logging","marker","marker-stroked","mobile-phone","monument","mountain","museum","music","natural","optician","paint","park","park-alt1","parking","parking-garage","pharmacy","picnic-site","pitch","place-of-worship","playground","police","post","prison","rail","rail-light","rail-metro","ranger-station","recycling","religious-buddhist","religious-christian","religious-jewish","religious-muslim","residential-community","restaurant","restaurant-noodle","restaurant-pizza","restaurant-seafood","roadblock","rocket","school","scooter","shelter","shoe","shop","skateboard","skiing","slaughterhouse","slipway","snowmobile","soccer","square","square-stroked","stadium","star","star-stroked","suitcase","sushi","swimming","table-tennis","teahouse","telephone","tennis","theatre","toilet","town","town-hall","triangle","triangle-stroked","veterinary","viewpoint","village","volcano","volleyball","warehouse","waste-basket","watch","water","waterfall","watermill","wetland","wheelchair","windmill","zoo"]};

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
/* harmony import */ var _elastic_maki_dist_sprite_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/maki/dist/sprite@1.png */ "./node_modules/@elastic/maki/dist/sprite@1.png");
/* harmony import */ var _elastic_maki_dist_sprite_1_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_maki_dist_sprite_1_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/image */ "./src/utils/image.js");
/* harmony import */ var _turf_random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @turf/random */ "./node_modules/@turf/random/index.js");
/* harmony import */ var _turf_random__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_turf_random__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _turf_meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @turf/meta */ "./node_modules/@turf/meta/index.js");
/* harmony import */ var _turf_meta__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_turf_meta__WEBPACK_IMPORTED_MODULE_4__);





var map = new mapboxgl.Map({
  container: 'map',
  style: 'https://tiles.maps.elastic.co/styles/dark-matter/style.json'
});
var spriteData = _elastic_maki__WEBPACK_IMPORTED_MODULE_0__["spritesheet"]['1'];
var icons = Object.keys(spriteData).filter(function (sprite) {
  return sprite.endsWith('-15');
});
var points = Object(_turf_random__WEBPACK_IMPORTED_MODULE_3__["randomPoint"])(2000);
Object(_turf_meta__WEBPACK_IMPORTED_MODULE_4__["propEach"])(points, function (cur, i) {
  cur.icon = icons[Math.floor(Math.random() * (icons.length - 1))];
  cur.color = '#' + Math.random().toString(16).substr(-6);
  cur.orientation = Math.random() * (360 - 0) + 0;
  cur.size = Math.random() * (2.5 - 0.5) + 0.5;
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

  image.src = _elastic_maki_dist_sprite_1_png__WEBPACK_IMPORTED_MODULE_1___default.a;
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
      'icon-allow-overlap': true
    },
    paint: {
      'icon-color': ['get', 'color']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbGFzdGljL21ha2kvZGlzdC9zcHJpdGVAMS5wbmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbGFzdGljL21ha2kvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0dXJmL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0dXJmL21ldGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0dXJmL3JhbmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXNzZXJ0L2Fzc2VydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW1hZ2UuanMiXSwibmFtZXMiOlsibWFwIiwibWFwYm94Z2wiLCJNYXAiLCJjb250YWluZXIiLCJzdHlsZSIsInNwcml0ZURhdGEiLCJzcHJpdGVzaGVldCIsImljb25zIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsInNwcml0ZSIsImVuZHNXaXRoIiwicG9pbnRzIiwicmFuZG9tUG9pbnQiLCJwcm9wRWFjaCIsImN1ciIsImkiLCJpY29uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY29sb3IiLCJ0b1N0cmluZyIsInN1YnN0ciIsIm9yaWVudGF0aW9uIiwic2l6ZSIsIm9uIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsImVsIiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiY3VycmVudFRhcmdldCIsImlkIiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsInNkZiIsInBpeGVsUmF0aW8iLCJkYXRhIiwiUkdCQUltYWdlIiwiY29weSIsImFkZEltYWdlIiwic3JjIiwic3ByaXRlcyIsImFkZExheWVyIiwidHlwZSIsInNvdXJjZSIsImxheW91dCIsInBhaW50IiwiaW1nIiwiY2FudmFzIiwid2luZG93IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJFcnJvciIsImRyYXdJbWFnZSIsImNyZWF0ZUltYWdlIiwiY2hhbm5lbHMiLCJVaW50OEFycmF5IiwiVWludDhDbGFtcGVkQXJyYXkiLCJidWZmZXIiLCJSYW5nZUVycm9yIiwicmVzaXplSW1hZ2UiLCJuZXdJbWFnZSIsImNvcHlJbWFnZSIsIm1pbiIsInNyY0ltZyIsImRzdEltZyIsInNyY1B0IiwiZHN0UHQiLCJzcmNEYXRhIiwiZHN0RGF0YSIsImFzc2VydCIsInNyY09mZnNldCIsImRzdE9mZnNldCIsIkFscGhhSW1hZ2UiLCJzZXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFF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Q0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdTQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxLQUFLOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7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Q0osYUFBTyxJQUFJQyxTQUFKLENBQWM7QUFBQ1AsYUFBSyxFQUFFLEtBQUtBLEtBQWI7QUFBb0JDLGNBQU0sRUFBRSxLQUFLQTtBQUFqQyxPQUFkLEVBQXdELElBQUkyQixVQUFKLENBQWUsS0FBS3RCLElBQXBCLENBQXhELENBQVA7QUFDSDtBQXpCTDtBQUFBO0FBQUEseUJBMkJnQjhCLE1BM0JoQixFQTJCd0JDLE1BM0J4QixFQTJCZ0NDLEtBM0JoQyxFQTJCdUNDLEtBM0J2QyxFQTJCOENqRCxJQTNCOUMsRUEyQm9EO0FBQzVDNEMsZUFBUyxDQUFDRSxNQUFELEVBQVNDLE1BQVQsRUFBaUJDLEtBQWpCLEVBQXdCQyxLQUF4QixFQUErQmpELElBQS9CLEVBQXFDLENBQXJDLENBQVQ7QUFDSDtBQTdCTDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTNmMWNkNzU1YWNiMTYwYzYzZjQ3N2JlYmFmNWM3OTYucG5nXCI7IiwiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxheW91dHM6IHtcbiAgICBhbGw6IHJlcXVpcmUoJy4vbGF5b3V0cy9hbGwuanNvbicpXG4gIH0sXG4gIHNwcml0ZXNoZWV0OiB7XG4gICAgMTogcmVxdWlyZSgnLi9kaXN0L3Nwcml0ZUAxLmpzb24nKSxcbiAgICAyOiByZXF1aXJlKCcuL2Rpc3Qvc3ByaXRlQDIuanNvbicpLFxuICAgIDQ6IHJlcXVpcmUoJy4vZGlzdC9zcHJpdGVANC5qc29uJylcbiAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBAbW9kdWxlIGhlbHBlcnNcbiAqL1xuLyoqXG4gKiBFYXJ0aCBSYWRpdXMgdXNlZCB3aXRoIHRoZSBIYXJ2ZXNpbmUgZm9ybXVsYSBhbmQgYXBwcm94aW1hdGVzIHVzaW5nIGEgc3BoZXJpY2FsIChub24tZWxsaXBzb2lkKSBFYXJ0aC5cbiAqXG4gKiBAbWVtYmVyb2YgaGVscGVyc1xuICogQHR5cGUge251bWJlcn1cbiAqL1xuZXhwb3J0cy5lYXJ0aFJhZGl1cyA9IDYzNzEwMDguODtcbi8qKlxuICogVW5pdCBvZiBtZWFzdXJlbWVudCBmYWN0b3JzIHVzaW5nIGEgc3BoZXJpY2FsIChub24tZWxsaXBzb2lkKSBlYXJ0aCByYWRpdXMuXG4gKlxuICogQG1lbWJlcm9mIGhlbHBlcnNcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmV4cG9ydHMuZmFjdG9ycyA9IHtcbiAgICBjZW50aW1ldGVyczogZXhwb3J0cy5lYXJ0aFJhZGl1cyAqIDEwMCxcbiAgICBjZW50aW1ldHJlczogZXhwb3J0cy5lYXJ0aFJhZGl1cyAqIDEwMCxcbiAgICBkZWdyZWVzOiBleHBvcnRzLmVhcnRoUmFkaXVzIC8gMTExMzI1LFxuICAgIGZlZXQ6IGV4cG9ydHMuZWFydGhSYWRpdXMgKiAzLjI4MDg0LFxuICAgIGluY2hlczogZXhwb3J0cy5lYXJ0aFJhZGl1cyAqIDM5LjM3MCxcbiAgICBraWxvbWV0ZXJzOiBleHBvcnRzLmVhcnRoUmFkaXVzIC8gMTAwMCxcbiAgICBraWxvbWV0cmVzOiBleHBvcnRzLmVhcnRoUmFkaXVzIC8gMTAwMCxcbiAgICBtZXRlcnM6IGV4cG9ydHMuZWFydGhSYWRpdXMsXG4gICAgbWV0cmVzOiBleHBvcnRzLmVhcnRoUmFkaXVzLFxuICAgIG1pbGVzOiBleHBvcnRzLmVhcnRoUmFkaXVzIC8gMTYwOS4zNDQsXG4gICAgbWlsbGltZXRlcnM6IGV4cG9ydHMuZWFydGhSYWRpdXMgKiAxMDAwLFxuICAgIG1pbGxpbWV0cmVzOiBleHBvcnRzLmVhcnRoUmFkaXVzICogMTAwMCxcbiAgICBuYXV0aWNhbG1pbGVzOiBleHBvcnRzLmVhcnRoUmFkaXVzIC8gMTg1MixcbiAgICByYWRpYW5zOiAxLFxuICAgIHlhcmRzOiBleHBvcnRzLmVhcnRoUmFkaXVzIC8gMS4wOTM2LFxufTtcbi8qKlxuICogVW5pdHMgb2YgbWVhc3VyZW1lbnQgZmFjdG9ycyBiYXNlZCBvbiAxIG1ldGVyLlxuICpcbiAqIEBtZW1iZXJvZiBoZWxwZXJzXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5leHBvcnRzLnVuaXRzRmFjdG9ycyA9IHtcbiAgICBjZW50aW1ldGVyczogMTAwLFxuICAgIGNlbnRpbWV0cmVzOiAxMDAsXG4gICAgZGVncmVlczogMSAvIDExMTMyNSxcbiAgICBmZWV0OiAzLjI4MDg0LFxuICAgIGluY2hlczogMzkuMzcwLFxuICAgIGtpbG9tZXRlcnM6IDEgLyAxMDAwLFxuICAgIGtpbG9tZXRyZXM6IDEgLyAxMDAwLFxuICAgIG1ldGVyczogMSxcbiAgICBtZXRyZXM6IDEsXG4gICAgbWlsZXM6IDEgLyAxNjA5LjM0NCxcbiAgICBtaWxsaW1ldGVyczogMTAwMCxcbiAgICBtaWxsaW1ldHJlczogMTAwMCxcbiAgICBuYXV0aWNhbG1pbGVzOiAxIC8gMTg1MixcbiAgICByYWRpYW5zOiAxIC8gZXhwb3J0cy5lYXJ0aFJhZGl1cyxcbiAgICB5YXJkczogMSAvIDEuMDkzNixcbn07XG4vKipcbiAqIEFyZWEgb2YgbWVhc3VyZW1lbnQgZmFjdG9ycyBiYXNlZCBvbiAxIHNxdWFyZSBtZXRlci5cbiAqXG4gKiBAbWVtYmVyb2YgaGVscGVyc1xuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5hcmVhRmFjdG9ycyA9IHtcbiAgICBhY3JlczogMC4wMDAyNDcxMDUsXG4gICAgY2VudGltZXRlcnM6IDEwMDAwLFxuICAgIGNlbnRpbWV0cmVzOiAxMDAwMCxcbiAgICBmZWV0OiAxMC43NjM5MTA0MTcsXG4gICAgaW5jaGVzOiAxNTUwLjAwMzEwMDAwNixcbiAgICBraWxvbWV0ZXJzOiAwLjAwMDAwMSxcbiAgICBraWxvbWV0cmVzOiAwLjAwMDAwMSxcbiAgICBtZXRlcnM6IDEsXG4gICAgbWV0cmVzOiAxLFxuICAgIG1pbGVzOiAzLjg2ZS03LFxuICAgIG1pbGxpbWV0ZXJzOiAxMDAwMDAwLFxuICAgIG1pbGxpbWV0cmVzOiAxMDAwMDAwLFxuICAgIHlhcmRzOiAxLjE5NTk5MDA0Nixcbn07XG4vKipcbiAqIFdyYXBzIGEgR2VvSlNPTiB7QGxpbmsgR2VvbWV0cnl9IGluIGEgR2VvSlNPTiB7QGxpbmsgRmVhdHVyZX0uXG4gKlxuICogQG5hbWUgZmVhdHVyZVxuICogQHBhcmFtIHtHZW9tZXRyeX0gZ2VvbWV0cnkgaW5wdXQgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3hdIEJvdW5kaW5nIEJveCBBcnJheSBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXSBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW29wdGlvbnMuaWRdIElkZW50aWZpZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcmV0dXJucyB7RmVhdHVyZX0gYSBHZW9KU09OIEZlYXR1cmVcbiAqIEBleGFtcGxlXG4gKiB2YXIgZ2VvbWV0cnkgPSB7XG4gKiAgIFwidHlwZVwiOiBcIlBvaW50XCIsXG4gKiAgIFwiY29vcmRpbmF0ZXNcIjogWzExMCwgNTBdXG4gKiB9O1xuICpcbiAqIHZhciBmZWF0dXJlID0gdHVyZi5mZWF0dXJlKGdlb21ldHJ5KTtcbiAqXG4gKiAvLz1mZWF0dXJlXG4gKi9cbmZ1bmN0aW9uIGZlYXR1cmUoZ2VvbSwgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIGZlYXQgPSB7IHR5cGU6IFwiRmVhdHVyZVwiIH07XG4gICAgaWYgKG9wdGlvbnMuaWQgPT09IDAgfHwgb3B0aW9ucy5pZCkge1xuICAgICAgICBmZWF0LmlkID0gb3B0aW9ucy5pZDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYmJveCkge1xuICAgICAgICBmZWF0LmJib3ggPSBvcHRpb25zLmJib3g7XG4gICAgfVxuICAgIGZlYXQucHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XG4gICAgZmVhdC5nZW9tZXRyeSA9IGdlb207XG4gICAgcmV0dXJuIGZlYXQ7XG59XG5leHBvcnRzLmZlYXR1cmUgPSBmZWF0dXJlO1xuLyoqXG4gKiBDcmVhdGVzIGEgR2VvSlNPTiB7QGxpbmsgR2VvbWV0cnl9IGZyb20gYSBHZW9tZXRyeSBzdHJpbmcgdHlwZSAmIGNvb3JkaW5hdGVzLlxuICogRm9yIEdlb21ldHJ5Q29sbGVjdGlvbiB0eXBlIHVzZSBgaGVscGVycy5nZW9tZXRyeUNvbGxlY3Rpb25gXG4gKlxuICogQG5hbWUgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIEdlb21ldHJ5IFR5cGVcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gY29vcmRpbmF0ZXMgQ29vcmRpbmF0ZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgUGFyYW1ldGVyc1xuICogQHJldHVybnMge0dlb21ldHJ5fSBhIEdlb0pTT04gR2VvbWV0cnlcbiAqIEBleGFtcGxlXG4gKiB2YXIgdHlwZSA9IFwiUG9pbnRcIjtcbiAqIHZhciBjb29yZGluYXRlcyA9IFsxMTAsIDUwXTtcbiAqIHZhciBnZW9tZXRyeSA9IHR1cmYuZ2VvbWV0cnkodHlwZSwgY29vcmRpbmF0ZXMpO1xuICogLy8gPT4gZ2VvbWV0cnlcbiAqL1xuZnVuY3Rpb24gZ2VvbWV0cnkodHlwZSwgY29vcmRpbmF0ZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwiUG9pbnRcIjogcmV0dXJuIHBvaW50KGNvb3JkaW5hdGVzKS5nZW9tZXRyeTtcbiAgICAgICAgY2FzZSBcIkxpbmVTdHJpbmdcIjogcmV0dXJuIGxpbmVTdHJpbmcoY29vcmRpbmF0ZXMpLmdlb21ldHJ5O1xuICAgICAgICBjYXNlIFwiUG9seWdvblwiOiByZXR1cm4gcG9seWdvbihjb29yZGluYXRlcykuZ2VvbWV0cnk7XG4gICAgICAgIGNhc2UgXCJNdWx0aVBvaW50XCI6IHJldHVybiBtdWx0aVBvaW50KGNvb3JkaW5hdGVzKS5nZW9tZXRyeTtcbiAgICAgICAgY2FzZSBcIk11bHRpTGluZVN0cmluZ1wiOiByZXR1cm4gbXVsdGlMaW5lU3RyaW5nKGNvb3JkaW5hdGVzKS5nZW9tZXRyeTtcbiAgICAgICAgY2FzZSBcIk11bHRpUG9seWdvblwiOiByZXR1cm4gbXVsdGlQb2x5Z29uKGNvb3JkaW5hdGVzKS5nZW9tZXRyeTtcbiAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKHR5cGUgKyBcIiBpcyBpbnZhbGlkXCIpO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2VvbWV0cnkgPSBnZW9tZXRyeTtcbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBQb2ludH0ge0BsaW5rIEZlYXR1cmV9IGZyb20gYSBQb3NpdGlvbi5cbiAqXG4gKiBAbmFtZSBwb2ludFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb29yZGluYXRlcyBsb25naXR1ZGUsIGxhdGl0dWRlIHBvc2l0aW9uIChlYWNoIGluIGRlY2ltYWwgZGVncmVlcylcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3hdIEJvdW5kaW5nIEJveCBBcnJheSBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXSBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW29wdGlvbnMuaWRdIElkZW50aWZpZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcmV0dXJucyB7RmVhdHVyZTxQb2ludD59IGEgUG9pbnQgZmVhdHVyZVxuICogQGV4YW1wbGVcbiAqIHZhciBwb2ludCA9IHR1cmYucG9pbnQoWy03NS4zNDMsIDM5Ljk4NF0pO1xuICpcbiAqIC8vPXBvaW50XG4gKi9cbmZ1bmN0aW9uIHBvaW50KGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgZ2VvbSA9IHtcbiAgICAgICAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXMsXG4gICAgfTtcbiAgICByZXR1cm4gZmVhdHVyZShnZW9tLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucG9pbnQgPSBwb2ludDtcbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBQb2ludH0ge0BsaW5rIEZlYXR1cmVDb2xsZWN0aW9ufSBmcm9tIGFuIEFycmF5IG9mIFBvaW50IGNvb3JkaW5hdGVzLlxuICpcbiAqIEBuYW1lIHBvaW50c1xuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gY29vcmRpbmF0ZXMgYW4gYXJyYXkgb2YgUG9pbnRzXG4gKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXM9e31dIFRyYW5zbGF0ZSB0aGVzZSBwcm9wZXJ0aWVzIHRvIGVhY2ggRmVhdHVyZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3hdIEJvdW5kaW5nIEJveCBBcnJheSBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXVxuICogYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlQ29sbGVjdGlvblxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3B0aW9ucy5pZF0gSWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVDb2xsZWN0aW9uXG4gKiBAcmV0dXJucyB7RmVhdHVyZUNvbGxlY3Rpb248UG9pbnQ+fSBQb2ludCBGZWF0dXJlXG4gKiBAZXhhbXBsZVxuICogdmFyIHBvaW50cyA9IHR1cmYucG9pbnRzKFtcbiAqICAgWy03NSwgMzldLFxuICogICBbLTgwLCA0NV0sXG4gKiAgIFstNzgsIDUwXVxuICogXSk7XG4gKlxuICogLy89cG9pbnRzXG4gKi9cbmZ1bmN0aW9uIHBvaW50cyhjb29yZGluYXRlcywgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIGZlYXR1cmVDb2xsZWN0aW9uKGNvb3JkaW5hdGVzLm1hcChmdW5jdGlvbiAoY29vcmRzKSB7XG4gICAgICAgIHJldHVybiBwb2ludChjb29yZHMsIHByb3BlcnRpZXMpO1xuICAgIH0pLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucG9pbnRzID0gcG9pbnRzO1xuLyoqXG4gKiBDcmVhdGVzIGEge0BsaW5rIFBvbHlnb259IHtAbGluayBGZWF0dXJlfSBmcm9tIGFuIEFycmF5IG9mIExpbmVhclJpbmdzLlxuICpcbiAqIEBuYW1lIHBvbHlnb25cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8QXJyYXk8bnVtYmVyPj4+fSBjb29yZGluYXRlcyBhbiBhcnJheSBvZiBMaW5lYXJSaW5nc1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIFBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW29wdGlvbnMuYmJveF0gQm91bmRpbmcgQm94IEFycmF5IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3B0aW9ucy5pZF0gSWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEByZXR1cm5zIHtGZWF0dXJlPFBvbHlnb24+fSBQb2x5Z29uIEZlYXR1cmVcbiAqIEBleGFtcGxlXG4gKiB2YXIgcG9seWdvbiA9IHR1cmYucG9seWdvbihbW1stNSwgNTJdLCBbLTQsIDU2XSwgWy0yLCA1MV0sIFstNywgNTRdLCBbLTUsIDUyXV1dLCB7IG5hbWU6ICdwb2x5MScgfSk7XG4gKlxuICogLy89cG9seWdvblxuICovXG5mdW5jdGlvbiBwb2x5Z29uKGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBmb3IgKHZhciBfaSA9IDAsIGNvb3JkaW5hdGVzXzEgPSBjb29yZGluYXRlczsgX2kgPCBjb29yZGluYXRlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgcmluZyA9IGNvb3JkaW5hdGVzXzFbX2ldO1xuICAgICAgICBpZiAocmluZy5sZW5ndGggPCA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFYWNoIExpbmVhclJpbmcgb2YgYSBQb2x5Z29uIG11c3QgaGF2ZSA0IG9yIG1vcmUgUG9zaXRpb25zLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJpbmdbcmluZy5sZW5ndGggLSAxXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZmlyc3QgcG9pbnQgb2YgUG9seWdvbiBjb250YWlucyB0d28gbnVtYmVyc1xuICAgICAgICAgICAgaWYgKHJpbmdbcmluZy5sZW5ndGggLSAxXVtqXSAhPT0gcmluZ1swXVtqXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZpcnN0IGFuZCBsYXN0IFBvc2l0aW9uIGFyZSBub3QgZXF1aXZhbGVudC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGdlb20gPSB7XG4gICAgICAgIHR5cGU6IFwiUG9seWdvblwiLFxuICAgICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXMsXG4gICAgfTtcbiAgICByZXR1cm4gZmVhdHVyZShnZW9tLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucG9seWdvbiA9IHBvbHlnb247XG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgUG9seWdvbn0ge0BsaW5rIEZlYXR1cmVDb2xsZWN0aW9ufSBmcm9tIGFuIEFycmF5IG9mIFBvbHlnb24gY29vcmRpbmF0ZXMuXG4gKlxuICogQG5hbWUgcG9seWdvbnNcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8QXJyYXk8QXJyYXk8bnVtYmVyPj4+Pn0gY29vcmRpbmF0ZXMgYW4gYXJyYXkgb2YgUG9seWdvbiBjb29yZGluYXRlc1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIFBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW29wdGlvbnMuYmJveF0gQm91bmRpbmcgQm94IEFycmF5IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3B0aW9ucy5pZF0gSWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVDb2xsZWN0aW9uXG4gKiBAcmV0dXJucyB7RmVhdHVyZUNvbGxlY3Rpb248UG9seWdvbj59IFBvbHlnb24gRmVhdHVyZUNvbGxlY3Rpb25cbiAqIEBleGFtcGxlXG4gKiB2YXIgcG9seWdvbnMgPSB0dXJmLnBvbHlnb25zKFtcbiAqICAgW1tbLTUsIDUyXSwgWy00LCA1Nl0sIFstMiwgNTFdLCBbLTcsIDU0XSwgWy01LCA1Ml1dXSxcbiAqICAgW1tbLTE1LCA0Ml0sIFstMTQsIDQ2XSwgWy0xMiwgNDFdLCBbLTE3LCA0NF0sIFstMTUsIDQyXV1dLFxuICogXSk7XG4gKlxuICogLy89cG9seWdvbnNcbiAqL1xuZnVuY3Rpb24gcG9seWdvbnMoY29vcmRpbmF0ZXMsIHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBmZWF0dXJlQ29sbGVjdGlvbihjb29yZGluYXRlcy5tYXAoZnVuY3Rpb24gKGNvb3Jkcykge1xuICAgICAgICByZXR1cm4gcG9seWdvbihjb29yZHMsIHByb3BlcnRpZXMpO1xuICAgIH0pLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucG9seWdvbnMgPSBwb2x5Z29ucztcbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBMaW5lU3RyaW5nfSB7QGxpbmsgRmVhdHVyZX0gZnJvbSBhbiBBcnJheSBvZiBQb3NpdGlvbnMuXG4gKlxuICogQG5hbWUgbGluZVN0cmluZ1xuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gY29vcmRpbmF0ZXMgYW4gYXJyYXkgb2YgUG9zaXRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXM9e31dIGFuIE9iamVjdCBvZiBrZXktdmFsdWUgcGFpcnMgdG8gYWRkIGFzIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgUGFyYW1ldGVyc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3B0aW9ucy5iYm94XSBCb3VuZGluZyBCb3ggQXJyYXkgW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF0gYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvcHRpb25zLmlkXSBJZGVudGlmaWVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHJldHVybnMge0ZlYXR1cmU8TGluZVN0cmluZz59IExpbmVTdHJpbmcgRmVhdHVyZVxuICogQGV4YW1wbGVcbiAqIHZhciBsaW5lc3RyaW5nMSA9IHR1cmYubGluZVN0cmluZyhbWy0yNCwgNjNdLCBbLTIzLCA2MF0sIFstMjUsIDY1XSwgWy0yMCwgNjldXSwge25hbWU6ICdsaW5lIDEnfSk7XG4gKiB2YXIgbGluZXN0cmluZzIgPSB0dXJmLmxpbmVTdHJpbmcoW1stMTQsIDQzXSwgWy0xMywgNDBdLCBbLTE1LCA0NV0sIFstMTAsIDQ5XV0sIHtuYW1lOiAnbGluZSAyJ30pO1xuICpcbiAqIC8vPWxpbmVzdHJpbmcxXG4gKiAvLz1saW5lc3RyaW5nMlxuICovXG5mdW5jdGlvbiBsaW5lU3RyaW5nKGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBpZiAoY29vcmRpbmF0ZXMubGVuZ3RoIDwgMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb29yZGluYXRlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHR3byBvciBtb3JlIHBvc2l0aW9uc1wiKTtcbiAgICB9XG4gICAgdmFyIGdlb20gPSB7XG4gICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxuICAgICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXMsXG4gICAgfTtcbiAgICByZXR1cm4gZmVhdHVyZShnZW9tLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubGluZVN0cmluZyA9IGxpbmVTdHJpbmc7XG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgTGluZVN0cmluZ30ge0BsaW5rIEZlYXR1cmVDb2xsZWN0aW9ufSBmcm9tIGFuIEFycmF5IG9mIExpbmVTdHJpbmcgY29vcmRpbmF0ZXMuXG4gKlxuICogQG5hbWUgbGluZVN0cmluZ3NcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8QXJyYXk8bnVtYmVyPj4+fSBjb29yZGluYXRlcyBhbiBhcnJheSBvZiBMaW5lYXJSaW5nc1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIFBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW29wdGlvbnMuYmJveF0gQm91bmRpbmcgQm94IEFycmF5IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdXG4gKiBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvcHRpb25zLmlkXSBJZGVudGlmaWVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZUNvbGxlY3Rpb25cbiAqIEByZXR1cm5zIHtGZWF0dXJlQ29sbGVjdGlvbjxMaW5lU3RyaW5nPn0gTGluZVN0cmluZyBGZWF0dXJlQ29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqIHZhciBsaW5lc3RyaW5ncyA9IHR1cmYubGluZVN0cmluZ3MoW1xuICogICBbWy0yNCwgNjNdLCBbLTIzLCA2MF0sIFstMjUsIDY1XSwgWy0yMCwgNjldXSxcbiAqICAgW1stMTQsIDQzXSwgWy0xMywgNDBdLCBbLTE1LCA0NV0sIFstMTAsIDQ5XV1cbiAqIF0pO1xuICpcbiAqIC8vPWxpbmVzdHJpbmdzXG4gKi9cbmZ1bmN0aW9uIGxpbmVTdHJpbmdzKGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gZmVhdHVyZUNvbGxlY3Rpb24oY29vcmRpbmF0ZXMubWFwKGZ1bmN0aW9uIChjb29yZHMpIHtcbiAgICAgICAgcmV0dXJuIGxpbmVTdHJpbmcoY29vcmRzLCBwcm9wZXJ0aWVzKTtcbiAgICB9KSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmxpbmVTdHJpbmdzID0gbGluZVN0cmluZ3M7XG4vKipcbiAqIFRha2VzIG9uZSBvciBtb3JlIHtAbGluayBGZWF0dXJlfEZlYXR1cmVzfSBhbmQgY3JlYXRlcyBhIHtAbGluayBGZWF0dXJlQ29sbGVjdGlvbn0uXG4gKlxuICogQG5hbWUgZmVhdHVyZUNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7RmVhdHVyZVtdfSBmZWF0dXJlcyBpbnB1dCBmZWF0dXJlc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3hdIEJvdW5kaW5nIEJveCBBcnJheSBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXSBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW29wdGlvbnMuaWRdIElkZW50aWZpZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcmV0dXJucyB7RmVhdHVyZUNvbGxlY3Rpb259IEZlYXR1cmVDb2xsZWN0aW9uIG9mIEZlYXR1cmVzXG4gKiBAZXhhbXBsZVxuICogdmFyIGxvY2F0aW9uQSA9IHR1cmYucG9pbnQoWy03NS4zNDMsIDM5Ljk4NF0sIHtuYW1lOiAnTG9jYXRpb24gQSd9KTtcbiAqIHZhciBsb2NhdGlvbkIgPSB0dXJmLnBvaW50KFstNzUuODMzLCAzOS4yODRdLCB7bmFtZTogJ0xvY2F0aW9uIEInfSk7XG4gKiB2YXIgbG9jYXRpb25DID0gdHVyZi5wb2ludChbLTc1LjUzNCwgMzkuMTIzXSwge25hbWU6ICdMb2NhdGlvbiBDJ30pO1xuICpcbiAqIHZhciBjb2xsZWN0aW9uID0gdHVyZi5mZWF0dXJlQ29sbGVjdGlvbihbXG4gKiAgIGxvY2F0aW9uQSxcbiAqICAgbG9jYXRpb25CLFxuICogICBsb2NhdGlvbkNcbiAqIF0pO1xuICpcbiAqIC8vPWNvbGxlY3Rpb25cbiAqL1xuZnVuY3Rpb24gZmVhdHVyZUNvbGxlY3Rpb24oZmVhdHVyZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBmYyA9IHsgdHlwZTogXCJGZWF0dXJlQ29sbGVjdGlvblwiIH07XG4gICAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICAgICAgZmMuaWQgPSBvcHRpb25zLmlkO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5iYm94KSB7XG4gICAgICAgIGZjLmJib3ggPSBvcHRpb25zLmJib3g7XG4gICAgfVxuICAgIGZjLmZlYXR1cmVzID0gZmVhdHVyZXM7XG4gICAgcmV0dXJuIGZjO1xufVxuZXhwb3J0cy5mZWF0dXJlQ29sbGVjdGlvbiA9IGZlYXR1cmVDb2xsZWN0aW9uO1xuLyoqXG4gKiBDcmVhdGVzIGEge0BsaW5rIEZlYXR1cmU8TXVsdGlMaW5lU3RyaW5nPn0gYmFzZWQgb24gYVxuICogY29vcmRpbmF0ZSBhcnJheS4gUHJvcGVydGllcyBjYW4gYmUgYWRkZWQgb3B0aW9uYWxseS5cbiAqXG4gKiBAbmFtZSBtdWx0aUxpbmVTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8QXJyYXk8bnVtYmVyPj4+fSBjb29yZGluYXRlcyBhbiBhcnJheSBvZiBMaW5lU3RyaW5nc1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIFBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW29wdGlvbnMuYmJveF0gQm91bmRpbmcgQm94IEFycmF5IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3B0aW9ucy5pZF0gSWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEByZXR1cm5zIHtGZWF0dXJlPE11bHRpTGluZVN0cmluZz59IGEgTXVsdGlMaW5lU3RyaW5nIGZlYXR1cmVcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiBubyBjb29yZGluYXRlcyBhcmUgcGFzc2VkXG4gKiBAZXhhbXBsZVxuICogdmFyIG11bHRpTGluZSA9IHR1cmYubXVsdGlMaW5lU3RyaW5nKFtbWzAsMF0sWzEwLDEwXV1dKTtcbiAqXG4gKiAvLz1tdWx0aUxpbmVcbiAqL1xuZnVuY3Rpb24gbXVsdGlMaW5lU3RyaW5nKGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgZ2VvbSA9IHtcbiAgICAgICAgdHlwZTogXCJNdWx0aUxpbmVTdHJpbmdcIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzLFxuICAgIH07XG4gICAgcmV0dXJuIGZlYXR1cmUoZ2VvbSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm11bHRpTGluZVN0cmluZyA9IG11bHRpTGluZVN0cmluZztcbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBGZWF0dXJlPE11bHRpUG9pbnQ+fSBiYXNlZCBvbiBhXG4gKiBjb29yZGluYXRlIGFycmF5LiBQcm9wZXJ0aWVzIGNhbiBiZSBhZGRlZCBvcHRpb25hbGx5LlxuICpcbiAqIEBuYW1lIG11bHRpUG9pbnRcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGNvb3JkaW5hdGVzIGFuIGFycmF5IG9mIFBvc2l0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIFBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW29wdGlvbnMuYmJveF0gQm91bmRpbmcgQm94IEFycmF5IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3B0aW9ucy5pZF0gSWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEByZXR1cm5zIHtGZWF0dXJlPE11bHRpUG9pbnQ+fSBhIE11bHRpUG9pbnQgZmVhdHVyZVxuICogQHRocm93cyB7RXJyb3J9IGlmIG5vIGNvb3JkaW5hdGVzIGFyZSBwYXNzZWRcbiAqIEBleGFtcGxlXG4gKiB2YXIgbXVsdGlQdCA9IHR1cmYubXVsdGlQb2ludChbWzAsMF0sWzEwLDEwXV0pO1xuICpcbiAqIC8vPW11bHRpUHRcbiAqL1xuZnVuY3Rpb24gbXVsdGlQb2ludChjb29yZGluYXRlcywgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIGdlb20gPSB7XG4gICAgICAgIHR5cGU6IFwiTXVsdGlQb2ludFwiLFxuICAgICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXMsXG4gICAgfTtcbiAgICByZXR1cm4gZmVhdHVyZShnZW9tLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubXVsdGlQb2ludCA9IG11bHRpUG9pbnQ7XG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgRmVhdHVyZTxNdWx0aVBvbHlnb24+fSBiYXNlZCBvbiBhXG4gKiBjb29yZGluYXRlIGFycmF5LiBQcm9wZXJ0aWVzIGNhbiBiZSBhZGRlZCBvcHRpb25hbGx5LlxuICpcbiAqIEBuYW1lIG11bHRpUG9seWdvblxuICogQHBhcmFtIHtBcnJheTxBcnJheTxBcnJheTxBcnJheTxudW1iZXI+Pj4+fSBjb29yZGluYXRlcyBhbiBhcnJheSBvZiBQb2x5Z29uc1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIFBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW29wdGlvbnMuYmJveF0gQm91bmRpbmcgQm94IEFycmF5IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3B0aW9ucy5pZF0gSWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEByZXR1cm5zIHtGZWF0dXJlPE11bHRpUG9seWdvbj59IGEgbXVsdGlwb2x5Z29uIGZlYXR1cmVcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiBubyBjb29yZGluYXRlcyBhcmUgcGFzc2VkXG4gKiBAZXhhbXBsZVxuICogdmFyIG11bHRpUG9seSA9IHR1cmYubXVsdGlQb2x5Z29uKFtbW1swLDBdLFswLDEwXSxbMTAsMTBdLFsxMCwwXSxbMCwwXV1dXSk7XG4gKlxuICogLy89bXVsdGlQb2x5XG4gKlxuICovXG5mdW5jdGlvbiBtdWx0aVBvbHlnb24oY29vcmRpbmF0ZXMsIHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBnZW9tID0ge1xuICAgICAgICB0eXBlOiBcIk11bHRpUG9seWdvblwiLFxuICAgICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXMsXG4gICAgfTtcbiAgICByZXR1cm4gZmVhdHVyZShnZW9tLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubXVsdGlQb2x5Z29uID0gbXVsdGlQb2x5Z29uO1xuLyoqXG4gKiBDcmVhdGVzIGEge0BsaW5rIEZlYXR1cmU8R2VvbWV0cnlDb2xsZWN0aW9uPn0gYmFzZWQgb24gYVxuICogY29vcmRpbmF0ZSBhcnJheS4gUHJvcGVydGllcyBjYW4gYmUgYWRkZWQgb3B0aW9uYWxseS5cbiAqXG4gKiBAbmFtZSBnZW9tZXRyeUNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXk8R2VvbWV0cnk+fSBnZW9tZXRyaWVzIGFuIGFycmF5IG9mIEdlb0pTT04gR2VvbWV0cmllc1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIFBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW29wdGlvbnMuYmJveF0gQm91bmRpbmcgQm94IEFycmF5IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3B0aW9ucy5pZF0gSWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEByZXR1cm5zIHtGZWF0dXJlPEdlb21ldHJ5Q29sbGVjdGlvbj59IGEgR2VvSlNPTiBHZW9tZXRyeUNvbGxlY3Rpb24gRmVhdHVyZVxuICogQGV4YW1wbGVcbiAqIHZhciBwdCA9IHR1cmYuZ2VvbWV0cnkoXCJQb2ludFwiLCBbMTAwLCAwXSk7XG4gKiB2YXIgbGluZSA9IHR1cmYuZ2VvbWV0cnkoXCJMaW5lU3RyaW5nXCIsIFtbMTAxLCAwXSwgWzEwMiwgMV1dKTtcbiAqIHZhciBjb2xsZWN0aW9uID0gdHVyZi5nZW9tZXRyeUNvbGxlY3Rpb24oW3B0LCBsaW5lXSk7XG4gKlxuICogLy8gPT4gY29sbGVjdGlvblxuICovXG5mdW5jdGlvbiBnZW9tZXRyeUNvbGxlY3Rpb24oZ2VvbWV0cmllcywgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIGdlb20gPSB7XG4gICAgICAgIHR5cGU6IFwiR2VvbWV0cnlDb2xsZWN0aW9uXCIsXG4gICAgICAgIGdlb21ldHJpZXM6IGdlb21ldHJpZXMsXG4gICAgfTtcbiAgICByZXR1cm4gZmVhdHVyZShnZW9tLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZ2VvbWV0cnlDb2xsZWN0aW9uID0gZ2VvbWV0cnlDb2xsZWN0aW9uO1xuLyoqXG4gKiBSb3VuZCBudW1iZXIgdG8gcHJlY2lzaW9uXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bSBOdW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcHJlY2lzaW9uPTBdIFByZWNpc2lvblxuICogQHJldHVybnMge251bWJlcn0gcm91bmRlZCBudW1iZXJcbiAqIEBleGFtcGxlXG4gKiB0dXJmLnJvdW5kKDEyMC40MzIxKVxuICogLy89MTIwXG4gKlxuICogdHVyZi5yb3VuZCgxMjAuNDMyMSwgMilcbiAqIC8vPTEyMC40M1xuICovXG5mdW5jdGlvbiByb3VuZChudW0sIHByZWNpc2lvbikge1xuICAgIGlmIChwcmVjaXNpb24gPT09IHZvaWQgMCkgeyBwcmVjaXNpb24gPSAwOyB9XG4gICAgaWYgKHByZWNpc2lvbiAmJiAhKHByZWNpc2lvbiA+PSAwKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcmVjaXNpb24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcbiAgICB9XG4gICAgdmFyIG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uIHx8IDApO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIG11bHRpcGxpZXIpIC8gbXVsdGlwbGllcjtcbn1cbmV4cG9ydHMucm91bmQgPSByb3VuZDtcbi8qKlxuICogQ29udmVydCBhIGRpc3RhbmNlIG1lYXN1cmVtZW50IChhc3N1bWluZyBhIHNwaGVyaWNhbCBFYXJ0aCkgZnJvbSByYWRpYW5zIHRvIGEgbW9yZSBmcmllbmRseSB1bml0LlxuICogVmFsaWQgdW5pdHM6IG1pbGVzLCBuYXV0aWNhbG1pbGVzLCBpbmNoZXMsIHlhcmRzLCBtZXRlcnMsIG1ldHJlcywga2lsb21ldGVycywgY2VudGltZXRlcnMsIGZlZXRcbiAqXG4gKiBAbmFtZSByYWRpYW5zVG9MZW5ndGhcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYW5zIGluIHJhZGlhbnMgYWNyb3NzIHRoZSBzcGhlcmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdW5pdHM9XCJraWxvbWV0ZXJzXCJdIGNhbiBiZSBkZWdyZWVzLCByYWRpYW5zLCBtaWxlcywgb3Iga2lsb21ldGVycyBpbmNoZXMsIHlhcmRzLCBtZXRyZXMsXG4gKiBtZXRlcnMsIGtpbG9tZXRyZXMsIGtpbG9tZXRlcnMuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBkaXN0YW5jZVxuICovXG5mdW5jdGlvbiByYWRpYW5zVG9MZW5ndGgocmFkaWFucywgdW5pdHMpIHtcbiAgICBpZiAodW5pdHMgPT09IHZvaWQgMCkgeyB1bml0cyA9IFwia2lsb21ldGVyc1wiOyB9XG4gICAgdmFyIGZhY3RvciA9IGV4cG9ydHMuZmFjdG9yc1t1bml0c107XG4gICAgaWYgKCFmYWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVuaXRzICsgXCIgdW5pdHMgaXMgaW52YWxpZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhZGlhbnMgKiBmYWN0b3I7XG59XG5leHBvcnRzLnJhZGlhbnNUb0xlbmd0aCA9IHJhZGlhbnNUb0xlbmd0aDtcbi8qKlxuICogQ29udmVydCBhIGRpc3RhbmNlIG1lYXN1cmVtZW50IChhc3N1bWluZyBhIHNwaGVyaWNhbCBFYXJ0aCkgZnJvbSBhIHJlYWwtd29ybGQgdW5pdCBpbnRvIHJhZGlhbnNcbiAqIFZhbGlkIHVuaXRzOiBtaWxlcywgbmF1dGljYWxtaWxlcywgaW5jaGVzLCB5YXJkcywgbWV0ZXJzLCBtZXRyZXMsIGtpbG9tZXRlcnMsIGNlbnRpbWV0ZXJzLCBmZWV0XG4gKlxuICogQG5hbWUgbGVuZ3RoVG9SYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gZGlzdGFuY2UgaW4gcmVhbCB1bml0c1xuICogQHBhcmFtIHtzdHJpbmd9IFt1bml0cz1cImtpbG9tZXRlcnNcIl0gY2FuIGJlIGRlZ3JlZXMsIHJhZGlhbnMsIG1pbGVzLCBvciBraWxvbWV0ZXJzIGluY2hlcywgeWFyZHMsIG1ldHJlcyxcbiAqIG1ldGVycywga2lsb21ldHJlcywga2lsb21ldGVycy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IHJhZGlhbnNcbiAqL1xuZnVuY3Rpb24gbGVuZ3RoVG9SYWRpYW5zKGRpc3RhbmNlLCB1bml0cykge1xuICAgIGlmICh1bml0cyA9PT0gdm9pZCAwKSB7IHVuaXRzID0gXCJraWxvbWV0ZXJzXCI7IH1cbiAgICB2YXIgZmFjdG9yID0gZXhwb3J0cy5mYWN0b3JzW3VuaXRzXTtcbiAgICBpZiAoIWZhY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodW5pdHMgKyBcIiB1bml0cyBpcyBpbnZhbGlkXCIpO1xuICAgIH1cbiAgICByZXR1cm4gZGlzdGFuY2UgLyBmYWN0b3I7XG59XG5leHBvcnRzLmxlbmd0aFRvUmFkaWFucyA9IGxlbmd0aFRvUmFkaWFucztcbi8qKlxuICogQ29udmVydCBhIGRpc3RhbmNlIG1lYXN1cmVtZW50IChhc3N1bWluZyBhIHNwaGVyaWNhbCBFYXJ0aCkgZnJvbSBhIHJlYWwtd29ybGQgdW5pdCBpbnRvIGRlZ3JlZXNcbiAqIFZhbGlkIHVuaXRzOiBtaWxlcywgbmF1dGljYWxtaWxlcywgaW5jaGVzLCB5YXJkcywgbWV0ZXJzLCBtZXRyZXMsIGNlbnRpbWV0ZXJzLCBraWxvbWV0cmVzLCBmZWV0XG4gKlxuICogQG5hbWUgbGVuZ3RoVG9EZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gZGlzdGFuY2UgaW4gcmVhbCB1bml0c1xuICogQHBhcmFtIHtzdHJpbmd9IFt1bml0cz1cImtpbG9tZXRlcnNcIl0gY2FuIGJlIGRlZ3JlZXMsIHJhZGlhbnMsIG1pbGVzLCBvciBraWxvbWV0ZXJzIGluY2hlcywgeWFyZHMsIG1ldHJlcyxcbiAqIG1ldGVycywga2lsb21ldHJlcywga2lsb21ldGVycy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IGRlZ3JlZXNcbiAqL1xuZnVuY3Rpb24gbGVuZ3RoVG9EZWdyZWVzKGRpc3RhbmNlLCB1bml0cykge1xuICAgIHJldHVybiByYWRpYW5zVG9EZWdyZWVzKGxlbmd0aFRvUmFkaWFucyhkaXN0YW5jZSwgdW5pdHMpKTtcbn1cbmV4cG9ydHMubGVuZ3RoVG9EZWdyZWVzID0gbGVuZ3RoVG9EZWdyZWVzO1xuLyoqXG4gKiBDb252ZXJ0cyBhbnkgYmVhcmluZyBhbmdsZSBmcm9tIHRoZSBub3J0aCBsaW5lIGRpcmVjdGlvbiAocG9zaXRpdmUgY2xvY2t3aXNlKVxuICogYW5kIHJldHVybnMgYW4gYW5nbGUgYmV0d2VlbiAwLTM2MCBkZWdyZWVzIChwb3NpdGl2ZSBjbG9ja3dpc2UpLCAwIGJlaW5nIHRoZSBub3J0aCBsaW5lXG4gKlxuICogQG5hbWUgYmVhcmluZ1RvQXppbXV0aFxuICogQHBhcmFtIHtudW1iZXJ9IGJlYXJpbmcgYW5nbGUsIGJldHdlZW4gLTE4MCBhbmQgKzE4MCBkZWdyZWVzXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBhbmdsZSBiZXR3ZWVuIDAgYW5kIDM2MCBkZWdyZWVzXG4gKi9cbmZ1bmN0aW9uIGJlYXJpbmdUb0F6aW11dGgoYmVhcmluZykge1xuICAgIHZhciBhbmdsZSA9IGJlYXJpbmcgJSAzNjA7XG4gICAgaWYgKGFuZ2xlIDwgMCkge1xuICAgICAgICBhbmdsZSArPSAzNjA7XG4gICAgfVxuICAgIHJldHVybiBhbmdsZTtcbn1cbmV4cG9ydHMuYmVhcmluZ1RvQXppbXV0aCA9IGJlYXJpbmdUb0F6aW11dGg7XG4vKipcbiAqIENvbnZlcnRzIGFuIGFuZ2xlIGluIHJhZGlhbnMgdG8gZGVncmVlc1xuICpcbiAqIEBuYW1lIHJhZGlhbnNUb0RlZ3JlZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYW5zIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGRlZ3JlZXMgYmV0d2VlbiAwIGFuZCAzNjAgZGVncmVlc1xuICovXG5mdW5jdGlvbiByYWRpYW5zVG9EZWdyZWVzKHJhZGlhbnMpIHtcbiAgICB2YXIgZGVncmVlcyA9IHJhZGlhbnMgJSAoMiAqIE1hdGguUEkpO1xuICAgIHJldHVybiBkZWdyZWVzICogMTgwIC8gTWF0aC5QSTtcbn1cbmV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IHJhZGlhbnNUb0RlZ3JlZXM7XG4vKipcbiAqIENvbnZlcnRzIGFuIGFuZ2xlIGluIGRlZ3JlZXMgdG8gcmFkaWFuc1xuICpcbiAqIEBuYW1lIGRlZ3JlZXNUb1JhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWdyZWVzIGFuZ2xlIGJldHdlZW4gMCBhbmQgMzYwIGRlZ3JlZXNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGFuZ2xlIGluIHJhZGlhbnNcbiAqL1xuZnVuY3Rpb24gZGVncmVlc1RvUmFkaWFucyhkZWdyZWVzKSB7XG4gICAgdmFyIHJhZGlhbnMgPSBkZWdyZWVzICUgMzYwO1xuICAgIHJldHVybiByYWRpYW5zICogTWF0aC5QSSAvIDE4MDtcbn1cbmV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGRlZ3JlZXNUb1JhZGlhbnM7XG4vKipcbiAqIENvbnZlcnRzIGEgbGVuZ3RoIHRvIHRoZSByZXF1ZXN0ZWQgdW5pdC5cbiAqIFZhbGlkIHVuaXRzOiBtaWxlcywgbmF1dGljYWxtaWxlcywgaW5jaGVzLCB5YXJkcywgbWV0ZXJzLCBtZXRyZXMsIGtpbG9tZXRlcnMsIGNlbnRpbWV0ZXJzLCBmZWV0XG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCB0byBiZSBjb252ZXJ0ZWRcbiAqIEBwYXJhbSB7VW5pdHN9IFtvcmlnaW5hbFVuaXQ9XCJraWxvbWV0ZXJzXCJdIG9mIHRoZSBsZW5ndGhcbiAqIEBwYXJhbSB7VW5pdHN9IFtmaW5hbFVuaXQ9XCJraWxvbWV0ZXJzXCJdIHJldHVybmVkIHVuaXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBjb252ZXJ0ZWQgbGVuZ3RoXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRMZW5ndGgobGVuZ3RoLCBvcmlnaW5hbFVuaXQsIGZpbmFsVW5pdCkge1xuICAgIGlmIChvcmlnaW5hbFVuaXQgPT09IHZvaWQgMCkgeyBvcmlnaW5hbFVuaXQgPSBcImtpbG9tZXRlcnNcIjsgfVxuICAgIGlmIChmaW5hbFVuaXQgPT09IHZvaWQgMCkgeyBmaW5hbFVuaXQgPSBcImtpbG9tZXRlcnNcIjsgfVxuICAgIGlmICghKGxlbmd0aCA+PSAwKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJsZW5ndGggbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhZGlhbnNUb0xlbmd0aChsZW5ndGhUb1JhZGlhbnMobGVuZ3RoLCBvcmlnaW5hbFVuaXQpLCBmaW5hbFVuaXQpO1xufVxuZXhwb3J0cy5jb252ZXJ0TGVuZ3RoID0gY29udmVydExlbmd0aDtcbi8qKlxuICogQ29udmVydHMgYSBhcmVhIHRvIHRoZSByZXF1ZXN0ZWQgdW5pdC5cbiAqIFZhbGlkIHVuaXRzOiBraWxvbWV0ZXJzLCBraWxvbWV0cmVzLCBtZXRlcnMsIG1ldHJlcywgY2VudGltZXRyZXMsIG1pbGxpbWV0ZXJzLCBhY3JlcywgbWlsZXMsIHlhcmRzLCBmZWV0LCBpbmNoZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBhcmVhIHRvIGJlIGNvbnZlcnRlZFxuICogQHBhcmFtIHtVbml0c30gW29yaWdpbmFsVW5pdD1cIm1ldGVyc1wiXSBvZiB0aGUgZGlzdGFuY2VcbiAqIEBwYXJhbSB7VW5pdHN9IFtmaW5hbFVuaXQ9XCJraWxvbWV0ZXJzXCJdIHJldHVybmVkIHVuaXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBjb252ZXJ0ZWQgZGlzdGFuY2VcbiAqL1xuZnVuY3Rpb24gY29udmVydEFyZWEoYXJlYSwgb3JpZ2luYWxVbml0LCBmaW5hbFVuaXQpIHtcbiAgICBpZiAob3JpZ2luYWxVbml0ID09PSB2b2lkIDApIHsgb3JpZ2luYWxVbml0ID0gXCJtZXRlcnNcIjsgfVxuICAgIGlmIChmaW5hbFVuaXQgPT09IHZvaWQgMCkgeyBmaW5hbFVuaXQgPSBcImtpbG9tZXRlcnNcIjsgfVxuICAgIGlmICghKGFyZWEgPj0gMCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXJlYSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCIpO1xuICAgIH1cbiAgICB2YXIgc3RhcnRGYWN0b3IgPSBleHBvcnRzLmFyZWFGYWN0b3JzW29yaWdpbmFsVW5pdF07XG4gICAgaWYgKCFzdGFydEZhY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIG9yaWdpbmFsIHVuaXRzXCIpO1xuICAgIH1cbiAgICB2YXIgZmluYWxGYWN0b3IgPSBleHBvcnRzLmFyZWFGYWN0b3JzW2ZpbmFsVW5pdF07XG4gICAgaWYgKCFmaW5hbEZhY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGZpbmFsIHVuaXRzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gKGFyZWEgLyBzdGFydEZhY3RvcikgKiBmaW5hbEZhY3Rvcjtcbn1cbmV4cG9ydHMuY29udmVydEFyZWEgPSBjb252ZXJ0QXJlYTtcbi8qKlxuICogaXNOdW1iZXJcbiAqXG4gKiBAcGFyYW0geyp9IG51bSBOdW1iZXIgdG8gdmFsaWRhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlL2ZhbHNlXG4gKiBAZXhhbXBsZVxuICogdHVyZi5pc051bWJlcigxMjMpXG4gKiAvLz10cnVlXG4gKiB0dXJmLmlzTnVtYmVyKCdmb28nKVxuICogLy89ZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIobnVtKSB7XG4gICAgcmV0dXJuICFpc05hTihudW0pICYmIG51bSAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheShudW0pICYmICEvXlxccyokLy50ZXN0KG51bSk7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG4vKipcbiAqIGlzT2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBpbnB1dCB2YXJpYWJsZSB0byB2YWxpZGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUvZmFsc2VcbiAqIEBleGFtcGxlXG4gKiB0dXJmLmlzT2JqZWN0KHtlbGV2YXRpb246IDEwfSlcbiAqIC8vPXRydWVcbiAqIHR1cmYuaXNPYmplY3QoJ2ZvbycpXG4gKiAvLz1mYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdChpbnB1dCkge1xuICAgIHJldHVybiAoISFpbnB1dCkgJiYgKGlucHV0LmNvbnN0cnVjdG9yID09PSBPYmplY3QpO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuLyoqXG4gKiBWYWxpZGF0ZSBCQm94XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYmJveCBCQm94IHRvIHZhbGlkYXRlXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEB0aHJvd3MgRXJyb3IgaWYgQkJveCBpcyBub3QgdmFsaWRcbiAqIEBleGFtcGxlXG4gKiB2YWxpZGF0ZUJCb3goWy0xODAsIC00MCwgMTEwLCA1MF0pXG4gKiAvLz1PS1xuICogdmFsaWRhdGVCQm94KFstMTgwLCAtNDBdKVxuICogLy89RXJyb3JcbiAqIHZhbGlkYXRlQkJveCgnRm9vJylcbiAqIC8vPUVycm9yXG4gKiB2YWxpZGF0ZUJCb3goNSlcbiAqIC8vPUVycm9yXG4gKiB2YWxpZGF0ZUJCb3gobnVsbClcbiAqIC8vPUVycm9yXG4gKiB2YWxpZGF0ZUJCb3godW5kZWZpbmVkKVxuICogLy89RXJyb3JcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVCQm94KGJib3gpIHtcbiAgICBpZiAoIWJib3gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmJveCBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGJib3gpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImJib3ggbXVzdCBiZSBhbiBBcnJheVwiKTtcbiAgICB9XG4gICAgaWYgKGJib3gubGVuZ3RoICE9PSA0ICYmIGJib3gubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImJib3ggbXVzdCBiZSBhbiBBcnJheSBvZiA0IG9yIDYgbnVtYmVyc1wiKTtcbiAgICB9XG4gICAgYmJveC5mb3JFYWNoKGZ1bmN0aW9uIChudW0pIHtcbiAgICAgICAgaWYgKCFpc051bWJlcihudW0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJiYm94IG11c3Qgb25seSBjb250YWluIG51bWJlcnNcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudmFsaWRhdGVCQm94ID0gdmFsaWRhdGVCQm94O1xuLyoqXG4gKiBWYWxpZGF0ZSBJZFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGlkIElkIHRvIHZhbGlkYXRlXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEB0aHJvd3MgRXJyb3IgaWYgSWQgaXMgbm90IHZhbGlkXG4gKiBAZXhhbXBsZVxuICogdmFsaWRhdGVJZChbLTE4MCwgLTQwLCAxMTAsIDUwXSlcbiAqIC8vPUVycm9yXG4gKiB2YWxpZGF0ZUlkKFstMTgwLCAtNDBdKVxuICogLy89RXJyb3JcbiAqIHZhbGlkYXRlSWQoJ0ZvbycpXG4gKiAvLz1PS1xuICogdmFsaWRhdGVJZCg1KVxuICogLy89T0tcbiAqIHZhbGlkYXRlSWQobnVsbClcbiAqIC8vPUVycm9yXG4gKiB2YWxpZGF0ZUlkKHVuZGVmaW5lZClcbiAqIC8vPUVycm9yXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlSWQoaWQpIHtcbiAgICBpZiAoIWlkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImlkIGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cbiAgICBpZiAoW1wic3RyaW5nXCIsIFwibnVtYmVyXCJdLmluZGV4T2YodHlwZW9mIGlkKSA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWQgbXVzdCBiZSBhIG51bWJlciBvciBhIHN0cmluZ1wiKTtcbiAgICB9XG59XG5leHBvcnRzLnZhbGlkYXRlSWQgPSB2YWxpZGF0ZUlkO1xuLy8gRGVwcmVjYXRlZCBtZXRob2RzXG5mdW5jdGlvbiByYWRpYW5zMmRlZ3JlZXMoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibWV0aG9kIGhhcyBiZWVuIHJlbmFtZWQgdG8gYHJhZGlhbnNUb0RlZ3JlZXNgXCIpO1xufVxuZXhwb3J0cy5yYWRpYW5zMmRlZ3JlZXMgPSByYWRpYW5zMmRlZ3JlZXM7XG5mdW5jdGlvbiBkZWdyZWVzMnJhZGlhbnMoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibWV0aG9kIGhhcyBiZWVuIHJlbmFtZWQgdG8gYGRlZ3JlZXNUb1JhZGlhbnNgXCIpO1xufVxuZXhwb3J0cy5kZWdyZWVzMnJhZGlhbnMgPSBkZWdyZWVzMnJhZGlhbnM7XG5mdW5jdGlvbiBkaXN0YW5jZVRvRGVncmVlcygpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJtZXRob2QgaGFzIGJlZW4gcmVuYW1lZCB0byBgbGVuZ3RoVG9EZWdyZWVzYFwiKTtcbn1cbmV4cG9ydHMuZGlzdGFuY2VUb0RlZ3JlZXMgPSBkaXN0YW5jZVRvRGVncmVlcztcbmZ1bmN0aW9uIGRpc3RhbmNlVG9SYWRpYW5zKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm1ldGhvZCBoYXMgYmVlbiByZW5hbWVkIHRvIGBsZW5ndGhUb1JhZGlhbnNgXCIpO1xufVxuZXhwb3J0cy5kaXN0YW5jZVRvUmFkaWFucyA9IGRpc3RhbmNlVG9SYWRpYW5zO1xuZnVuY3Rpb24gcmFkaWFuc1RvRGlzdGFuY2UoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibWV0aG9kIGhhcyBiZWVuIHJlbmFtZWQgdG8gYHJhZGlhbnNUb0xlbmd0aGBcIik7XG59XG5leHBvcnRzLnJhZGlhbnNUb0Rpc3RhbmNlID0gcmFkaWFuc1RvRGlzdGFuY2U7XG5mdW5jdGlvbiBiZWFyaW5nVG9BbmdsZSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJtZXRob2QgaGFzIGJlZW4gcmVuYW1lZCB0byBgYmVhcmluZ1RvQXppbXV0aGBcIik7XG59XG5leHBvcnRzLmJlYXJpbmdUb0FuZ2xlID0gYmVhcmluZ1RvQW5nbGU7XG5mdW5jdGlvbiBjb252ZXJ0RGlzdGFuY2UoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibWV0aG9kIGhhcyBiZWVuIHJlbmFtZWQgdG8gYGNvbnZlcnRMZW5ndGhgXCIpO1xufVxuZXhwb3J0cy5jb252ZXJ0RGlzdGFuY2UgPSBjb252ZXJ0RGlzdGFuY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBoZWxwZXJzID0gcmVxdWlyZSgnQHR1cmYvaGVscGVycycpO1xuXG4vKipcbiAqIENhbGxiYWNrIGZvciBjb29yZEVhY2hcbiAqXG4gKiBAY2FsbGJhY2sgY29vcmRFYWNoQ2FsbGJhY2tcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY3VycmVudENvb3JkIFRoZSBjdXJyZW50IGNvb3JkaW5hdGUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvb3JkSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIGNvb3JkaW5hdGUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbXVsdGlGZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIE11bHRpLUZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGdlb21ldHJ5SW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEdlb21ldHJ5IGJlaW5nIHByb2Nlc3NlZC5cbiAqL1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBjb29yZGluYXRlcyBpbiBhbnkgR2VvSlNPTiBvYmplY3QsIHNpbWlsYXIgdG8gQXJyYXkuZm9yRWFjaCgpXG4gKlxuICogQG5hbWUgY29vcmRFYWNoXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV8R2VvbWV0cnl9IGdlb2pzb24gYW55IEdlb0pTT04gb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChjdXJyZW50Q29vcmQsIGNvb3JkSW5kZXgsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgpXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtleGNsdWRlV3JhcENvb3JkPWZhbHNlXSB3aGV0aGVyIG9yIG5vdCB0byBpbmNsdWRlIHRoZSBmaW5hbCBjb29yZGluYXRlIG9mIExpbmVhclJpbmdzIHRoYXQgd3JhcHMgdGhlIHJpbmcgaW4gaXRzIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQGV4YW1wbGVcbiAqIHZhciBmZWF0dXJlcyA9IHR1cmYuZmVhdHVyZUNvbGxlY3Rpb24oW1xuICogICB0dXJmLnBvaW50KFsyNiwgMzddLCB7XCJmb29cIjogXCJiYXJcIn0pLFxuICogICB0dXJmLnBvaW50KFszNiwgNTNdLCB7XCJoZWxsb1wiOiBcIndvcmxkXCJ9KVxuICogXSk7XG4gKlxuICogdHVyZi5jb29yZEVhY2goZmVhdHVyZXMsIGZ1bmN0aW9uIChjdXJyZW50Q29vcmQsIGNvb3JkSW5kZXgsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgpIHtcbiAqICAgLy89Y3VycmVudENvb3JkXG4gKiAgIC8vPWNvb3JkSW5kZXhcbiAqICAgLy89ZmVhdHVyZUluZGV4XG4gKiAgIC8vPW11bHRpRmVhdHVyZUluZGV4XG4gKiAgIC8vPWdlb21ldHJ5SW5kZXhcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBjb29yZEVhY2goZ2VvanNvbiwgY2FsbGJhY2ssIGV4Y2x1ZGVXcmFwQ29vcmQpIHtcbiAgICAvLyBIYW5kbGVzIG51bGwgR2VvbWV0cnkgLS0gU2tpcHMgdGhpcyBHZW9KU09OXG4gICAgaWYgKGdlb2pzb24gPT09IG51bGwpIHJldHVybjtcbiAgICB2YXIgaiwgaywgbCwgZ2VvbWV0cnksIHN0b3BHLCBjb29yZHMsXG4gICAgICAgIGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uLFxuICAgICAgICB3cmFwU2hyaW5rID0gMCxcbiAgICAgICAgY29vcmRJbmRleCA9IDAsXG4gICAgICAgIGlzR2VvbWV0cnlDb2xsZWN0aW9uLFxuICAgICAgICB0eXBlID0gZ2VvanNvbi50eXBlLFxuICAgICAgICBpc0ZlYXR1cmVDb2xsZWN0aW9uID0gdHlwZSA9PT0gJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgaXNGZWF0dXJlID0gdHlwZSA9PT0gJ0ZlYXR1cmUnLFxuICAgICAgICBzdG9wID0gaXNGZWF0dXJlQ29sbGVjdGlvbiA/IGdlb2pzb24uZmVhdHVyZXMubGVuZ3RoIDogMTtcblxuICAgIC8vIFRoaXMgbG9naWMgbWF5IGxvb2sgYSBsaXR0bGUgd2VpcmQuIFRoZSByZWFzb24gd2h5IGl0IGlzIHRoYXQgd2F5XG4gICAgLy8gaXMgYmVjYXVzZSBpdCdzIHRyeWluZyB0byBiZSBmYXN0LiBHZW9KU09OIHN1cHBvcnRzIG11bHRpcGxlIGtpbmRzXG4gICAgLy8gb2Ygb2JqZWN0cyBhdCBpdHMgcm9vdDogRmVhdHVyZUNvbGxlY3Rpb24sIEZlYXR1cmVzLCBHZW9tZXRyaWVzLlxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaGFzIHRoZSByZXNwb25zaWJpbGl0eSBvZiBoYW5kbGluZyBhbGwgb2YgdGhlbSwgYW5kIHRoYXRcbiAgICAvLyBtZWFucyB0aGF0IHNvbWUgb2YgdGhlIGBmb3JgIGxvb3BzIHlvdSBzZWUgYmVsb3cgYWN0dWFsbHkganVzdCBkb24ndCBhcHBseVxuICAgIC8vIHRvIGNlcnRhaW4gaW5wdXRzLiBGb3IgaW5zdGFuY2UsIGlmIHlvdSBnaXZlIHRoaXMganVzdCBhXG4gICAgLy8gUG9pbnQgZ2VvbWV0cnksIHRoZW4gYm90aCBsb29wcyBhcmUgc2hvcnQtY2lyY3VpdGVkIGFuZCBhbGwgd2UgZG9cbiAgICAvLyBpcyBncmFkdWFsbHkgcmVuYW1lIHRoZSBpbnB1dCB1bnRpbCBpdCdzIGNhbGxlZCAnZ2VvbWV0cnknLlxuICAgIC8vXG4gICAgLy8gVGhpcyBhbHNvIGFpbXMgdG8gYWxsb2NhdGUgYXMgZmV3IHJlc291cmNlcyBhcyBwb3NzaWJsZToganVzdCBhXG4gICAgLy8gZmV3IG51bWJlcnMgYW5kIGJvb2xlYW5zLCByYXRoZXIgdGhhbiBhbnkgdGVtcG9yYXJ5IGFycmF5cyBhcyB3b3VsZFxuICAgIC8vIGJlIHJlcXVpcmVkIHdpdGggdGhlIG5vcm1hbGl6YXRpb24gYXBwcm9hY2guXG4gICAgZm9yICh2YXIgZmVhdHVyZUluZGV4ID0gMDsgZmVhdHVyZUluZGV4IDwgc3RvcDsgZmVhdHVyZUluZGV4KyspIHtcbiAgICAgICAgZ2VvbWV0cnlNYXliZUNvbGxlY3Rpb24gPSAoaXNGZWF0dXJlQ29sbGVjdGlvbiA/IGdlb2pzb24uZmVhdHVyZXNbZmVhdHVyZUluZGV4XS5nZW9tZXRyeSA6XG4gICAgICAgICAgICAoaXNGZWF0dXJlID8gZ2VvanNvbi5nZW9tZXRyeSA6IGdlb2pzb24pKTtcbiAgICAgICAgaXNHZW9tZXRyeUNvbGxlY3Rpb24gPSAoZ2VvbWV0cnlNYXliZUNvbGxlY3Rpb24pID8gZ2VvbWV0cnlNYXliZUNvbGxlY3Rpb24udHlwZSA9PT0gJ0dlb21ldHJ5Q29sbGVjdGlvbicgOiBmYWxzZTtcbiAgICAgICAgc3RvcEcgPSBpc0dlb21ldHJ5Q29sbGVjdGlvbiA/IGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uLmdlb21ldHJpZXMubGVuZ3RoIDogMTtcblxuICAgICAgICBmb3IgKHZhciBnZW9tSW5kZXggPSAwOyBnZW9tSW5kZXggPCBzdG9wRzsgZ2VvbUluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBtdWx0aUZlYXR1cmVJbmRleCA9IDA7XG4gICAgICAgICAgICB2YXIgZ2VvbWV0cnlJbmRleCA9IDA7XG4gICAgICAgICAgICBnZW9tZXRyeSA9IGlzR2VvbWV0cnlDb2xsZWN0aW9uID9cbiAgICAgICAgICAgICAgICBnZW9tZXRyeU1heWJlQ29sbGVjdGlvbi5nZW9tZXRyaWVzW2dlb21JbmRleF0gOiBnZW9tZXRyeU1heWJlQ29sbGVjdGlvbjtcblxuICAgICAgICAgICAgLy8gSGFuZGxlcyBudWxsIEdlb21ldHJ5IC0tIFNraXBzIHRoaXMgZ2VvbWV0cnlcbiAgICAgICAgICAgIGlmIChnZW9tZXRyeSA9PT0gbnVsbCkgY29udGludWU7XG4gICAgICAgICAgICBjb29yZHMgPSBnZW9tZXRyeS5jb29yZGluYXRlcztcbiAgICAgICAgICAgIHZhciBnZW9tVHlwZSA9IGdlb21ldHJ5LnR5cGU7XG5cbiAgICAgICAgICAgIHdyYXBTaHJpbmsgPSAoZXhjbHVkZVdyYXBDb29yZCAmJiAoZ2VvbVR5cGUgPT09ICdQb2x5Z29uJyB8fCBnZW9tVHlwZSA9PT0gJ011bHRpUG9seWdvbicpKSA/IDEgOiAwO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGdlb21UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQb2ludCc6XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGNvb3JkcywgY29vcmRJbmRleCwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCwgZ2VvbWV0cnlJbmRleCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29vcmRJbmRleCsrO1xuICAgICAgICAgICAgICAgIG11bHRpRmVhdHVyZUluZGV4Kys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMaW5lU3RyaW5nJzpcbiAgICAgICAgICAgIGNhc2UgJ011bHRpUG9pbnQnOlxuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjb29yZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGNvb3Jkc1tqXSwgY29vcmRJbmRleCwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCwgZ2VvbWV0cnlJbmRleCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdlb21UeXBlID09PSAnTXVsdGlQb2ludCcpIG11bHRpRmVhdHVyZUluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChnZW9tVHlwZSA9PT0gJ0xpbmVTdHJpbmcnKSBtdWx0aUZlYXR1cmVJbmRleCsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUG9seWdvbic6XG4gICAgICAgICAgICBjYXNlICdNdWx0aUxpbmVTdHJpbmcnOlxuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjb29yZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGNvb3Jkc1tqXS5sZW5ndGggLSB3cmFwU2hyaW5rOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayhjb29yZHNbal1ba10sIGNvb3JkSW5kZXgsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChnZW9tVHlwZSA9PT0gJ011bHRpTGluZVN0cmluZycpIG11bHRpRmVhdHVyZUluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnZW9tVHlwZSA9PT0gJ1BvbHlnb24nKSBnZW9tZXRyeUluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChnZW9tVHlwZSA9PT0gJ1BvbHlnb24nKSBtdWx0aUZlYXR1cmVJbmRleCsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTXVsdGlQb2x5Z29uJzpcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY29vcmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgY29vcmRzW2pdLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGwgPSAwOyBsIDwgY29vcmRzW2pdW2tdLmxlbmd0aCAtIHdyYXBTaHJpbms7IGwrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayhjb29yZHNbal1ba11bbF0sIGNvb3JkSW5kZXgsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5SW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtdWx0aUZlYXR1cmVJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0dlb21ldHJ5Q29sbGVjdGlvbic6XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGdlb21ldHJ5Lmdlb21ldHJpZXMubGVuZ3RoOyBqKyspXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29yZEVhY2goZ2VvbWV0cnkuZ2VvbWV0cmllc1tqXSwgY2FsbGJhY2ssIGV4Y2x1ZGVXcmFwQ29vcmQpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gR2VvbWV0cnkgVHlwZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIENhbGxiYWNrIGZvciBjb29yZFJlZHVjZVxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYXMgYXJndW1lbnRzIGRlcGVuZFxuICogb24gd2hldGhlciB0aGUgcmVkdWNlIG1ldGhvZCBoYXMgYW4gaW5pdGlhbFZhbHVlIGFyZ3VtZW50LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBwcm92aWRlZCB0byB0aGUgcmVkdWNlIG1ldGhvZDpcbiAqICAtIFRoZSBwcmV2aW91c1ZhbHVlIGFyZ3VtZW50IGlzIGluaXRpYWxWYWx1ZS5cbiAqICAtIFRoZSBjdXJyZW50VmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBub3QgcHJvdmlkZWQ6XG4gKiAgLSBUaGUgcHJldmlvdXNWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKiAgLSBUaGUgY3VycmVudFZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kIGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKlxuICogQGNhbGxiYWNrIGNvb3JkUmVkdWNlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXNWYWx1ZSBUaGUgYWNjdW11bGF0ZWQgdmFsdWUgcHJldmlvdXNseSByZXR1cm5lZCBpbiB0aGUgbGFzdCBpbnZvY2F0aW9uXG4gKiBvZiB0aGUgY2FsbGJhY2ssIG9yIGluaXRpYWxWYWx1ZSwgaWYgc3VwcGxpZWQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGN1cnJlbnRDb29yZCBUaGUgY3VycmVudCBjb29yZGluYXRlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb29yZEluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBjb29yZGluYXRlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIFN0YXJ0cyBhdCBpbmRleCAwLCBpZiBhbiBpbml0aWFsVmFsdWUgaXMgcHJvdmlkZWQsIGFuZCBhdCBpbmRleCAxIG90aGVyd2lzZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IG11bHRpRmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBNdWx0aS1GZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBnZW9tZXRyeUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBHZW9tZXRyeSBiZWluZyBwcm9jZXNzZWQuXG4gKi9cblxuLyoqXG4gKiBSZWR1Y2UgY29vcmRpbmF0ZXMgaW4gYW55IEdlb0pTT04gb2JqZWN0LCBzaW1pbGFyIHRvIEFycmF5LnJlZHVjZSgpXG4gKlxuICogQG5hbWUgY29vcmRSZWR1Y2VcbiAqIEBwYXJhbSB7RmVhdHVyZUNvbGxlY3Rpb258R2VvbWV0cnl8RmVhdHVyZX0gZ2VvanNvbiBhbnkgR2VvSlNPTiBvYmplY3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGEgbWV0aG9kIHRoYXQgdGFrZXMgKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRDb29yZCwgY29vcmRJbmRleClcbiAqIEBwYXJhbSB7Kn0gW2luaXRpYWxWYWx1ZV0gVmFsdWUgdG8gdXNlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgZmlyc3QgY2FsbCBvZiB0aGUgY2FsbGJhY2suXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtleGNsdWRlV3JhcENvb3JkPWZhbHNlXSB3aGV0aGVyIG9yIG5vdCB0byBpbmNsdWRlIHRoZSBmaW5hbCBjb29yZGluYXRlIG9mIExpbmVhclJpbmdzIHRoYXQgd3JhcHMgdGhlIHJpbmcgaW4gaXRzIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHsqfSBUaGUgdmFsdWUgdGhhdCByZXN1bHRzIGZyb20gdGhlIHJlZHVjdGlvbi5cbiAqIEBleGFtcGxlXG4gKiB2YXIgZmVhdHVyZXMgPSB0dXJmLmZlYXR1cmVDb2xsZWN0aW9uKFtcbiAqICAgdHVyZi5wb2ludChbMjYsIDM3XSwge1wiZm9vXCI6IFwiYmFyXCJ9KSxcbiAqICAgdHVyZi5wb2ludChbMzYsIDUzXSwge1wiaGVsbG9cIjogXCJ3b3JsZFwifSlcbiAqIF0pO1xuICpcbiAqIHR1cmYuY29vcmRSZWR1Y2UoZmVhdHVyZXMsIGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50Q29vcmQsIGNvb3JkSW5kZXgsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgpIHtcbiAqICAgLy89cHJldmlvdXNWYWx1ZVxuICogICAvLz1jdXJyZW50Q29vcmRcbiAqICAgLy89Y29vcmRJbmRleFxuICogICAvLz1mZWF0dXJlSW5kZXhcbiAqICAgLy89bXVsdGlGZWF0dXJlSW5kZXhcbiAqICAgLy89Z2VvbWV0cnlJbmRleFxuICogICByZXR1cm4gY3VycmVudENvb3JkO1xuICogfSk7XG4gKi9cbmZ1bmN0aW9uIGNvb3JkUmVkdWNlKGdlb2pzb24sIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUsIGV4Y2x1ZGVXcmFwQ29vcmQpIHtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICBjb29yZEVhY2goZ2VvanNvbiwgZnVuY3Rpb24gKGN1cnJlbnRDb29yZCwgY29vcmRJbmRleCwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCwgZ2VvbWV0cnlJbmRleCkge1xuICAgICAgICBpZiAoY29vcmRJbmRleCA9PT0gMCAmJiBpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCkgcHJldmlvdXNWYWx1ZSA9IGN1cnJlbnRDb29yZDtcbiAgICAgICAgZWxzZSBwcmV2aW91c1ZhbHVlID0gY2FsbGJhY2socHJldmlvdXNWYWx1ZSwgY3VycmVudENvb3JkLCBjb29yZEluZGV4LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4KTtcbiAgICB9LCBleGNsdWRlV3JhcENvb3JkKTtcbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZTtcbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgcHJvcEVhY2hcbiAqXG4gKiBAY2FsbGJhY2sgcHJvcEVhY2hDYWxsYmFja1xuICogQHBhcmFtIHtPYmplY3R9IGN1cnJlbnRQcm9wZXJ0aWVzIFRoZSBjdXJyZW50IFByb3BlcnRpZXMgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKi9cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgcHJvcGVydGllcyBpbiBhbnkgR2VvSlNPTiBvYmplY3QsIHNpbWlsYXIgdG8gQXJyYXkuZm9yRWFjaCgpXG4gKlxuICogQG5hbWUgcHJvcEVhY2hcbiAqIEBwYXJhbSB7RmVhdHVyZUNvbGxlY3Rpb258RmVhdHVyZX0gZ2VvanNvbiBhbnkgR2VvSlNPTiBvYmplY3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGEgbWV0aG9kIHRoYXQgdGFrZXMgKGN1cnJlbnRQcm9wZXJ0aWVzLCBmZWF0dXJlSW5kZXgpXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBleGFtcGxlXG4gKiB2YXIgZmVhdHVyZXMgPSB0dXJmLmZlYXR1cmVDb2xsZWN0aW9uKFtcbiAqICAgICB0dXJmLnBvaW50KFsyNiwgMzddLCB7Zm9vOiAnYmFyJ30pLFxuICogICAgIHR1cmYucG9pbnQoWzM2LCA1M10sIHtoZWxsbzogJ3dvcmxkJ30pXG4gKiBdKTtcbiAqXG4gKiB0dXJmLnByb3BFYWNoKGZlYXR1cmVzLCBmdW5jdGlvbiAoY3VycmVudFByb3BlcnRpZXMsIGZlYXR1cmVJbmRleCkge1xuICogICAvLz1jdXJyZW50UHJvcGVydGllc1xuICogICAvLz1mZWF0dXJlSW5kZXhcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBwcm9wRWFjaChnZW9qc29uLCBjYWxsYmFjaykge1xuICAgIHZhciBpO1xuICAgIHN3aXRjaCAoZ2VvanNvbi50eXBlKSB7XG4gICAgY2FzZSAnRmVhdHVyZUNvbGxlY3Rpb24nOlxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZ2VvanNvbi5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGdlb2pzb24uZmVhdHVyZXNbaV0ucHJvcGVydGllcywgaSkgPT09IGZhbHNlKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICBjYXNlICdGZWF0dXJlJzpcbiAgICAgICAgY2FsbGJhY2soZ2VvanNvbi5wcm9wZXJ0aWVzLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIHByb3BSZWR1Y2VcbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgdmFsdWVzIHByb3ZpZGVkIGFzIGFyZ3VtZW50cyBkZXBlbmRcbiAqIG9uIHdoZXRoZXIgdGhlIHJlZHVjZSBtZXRob2QgaGFzIGFuIGluaXRpYWxWYWx1ZSBhcmd1bWVudC5cbiAqXG4gKiBJZiBhbiBpbml0aWFsVmFsdWUgaXMgcHJvdmlkZWQgdG8gdGhlIHJlZHVjZSBtZXRob2Q6XG4gKiAgLSBUaGUgcHJldmlvdXNWYWx1ZSBhcmd1bWVudCBpcyBpbml0aWFsVmFsdWUuXG4gKiAgLSBUaGUgY3VycmVudFZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqXG4gKiBJZiBhbiBpbml0aWFsVmFsdWUgaXMgbm90IHByb3ZpZGVkOlxuICogIC0gVGhlIHByZXZpb3VzVmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICogIC0gVGhlIGN1cnJlbnRWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICpcbiAqIEBjYWxsYmFjayBwcm9wUmVkdWNlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXNWYWx1ZSBUaGUgYWNjdW11bGF0ZWQgdmFsdWUgcHJldmlvdXNseSByZXR1cm5lZCBpbiB0aGUgbGFzdCBpbnZvY2F0aW9uXG4gKiBvZiB0aGUgY2FsbGJhY2ssIG9yIGluaXRpYWxWYWx1ZSwgaWYgc3VwcGxpZWQuXG4gKiBAcGFyYW0geyp9IGN1cnJlbnRQcm9wZXJ0aWVzIFRoZSBjdXJyZW50IFByb3BlcnRpZXMgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKi9cblxuLyoqXG4gKiBSZWR1Y2UgcHJvcGVydGllcyBpbiBhbnkgR2VvSlNPTiBvYmplY3QgaW50byBhIHNpbmdsZSB2YWx1ZSxcbiAqIHNpbWlsYXIgdG8gaG93IEFycmF5LnJlZHVjZSB3b3Jrcy4gSG93ZXZlciwgaW4gdGhpcyBjYXNlIHdlIGxhemlseSBydW5cbiAqIHRoZSByZWR1Y3Rpb24sIHNvIGFuIGFycmF5IG9mIGFsbCBwcm9wZXJ0aWVzIGlzIHVubmVjZXNzYXJ5LlxuICpcbiAqIEBuYW1lIHByb3BSZWR1Y2VcbiAqIEBwYXJhbSB7RmVhdHVyZUNvbGxlY3Rpb258RmVhdHVyZX0gZ2VvanNvbiBhbnkgR2VvSlNPTiBvYmplY3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGEgbWV0aG9kIHRoYXQgdGFrZXMgKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRQcm9wZXJ0aWVzLCBmZWF0dXJlSW5kZXgpXG4gKiBAcGFyYW0geyp9IFtpbml0aWFsVmFsdWVdIFZhbHVlIHRvIHVzZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGZpcnN0IGNhbGwgb2YgdGhlIGNhbGxiYWNrLlxuICogQHJldHVybnMgeyp9IFRoZSB2YWx1ZSB0aGF0IHJlc3VsdHMgZnJvbSB0aGUgcmVkdWN0aW9uLlxuICogQGV4YW1wbGVcbiAqIHZhciBmZWF0dXJlcyA9IHR1cmYuZmVhdHVyZUNvbGxlY3Rpb24oW1xuICogICAgIHR1cmYucG9pbnQoWzI2LCAzN10sIHtmb286ICdiYXInfSksXG4gKiAgICAgdHVyZi5wb2ludChbMzYsIDUzXSwge2hlbGxvOiAnd29ybGQnfSlcbiAqIF0pO1xuICpcbiAqIHR1cmYucHJvcFJlZHVjZShmZWF0dXJlcywgZnVuY3Rpb24gKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRQcm9wZXJ0aWVzLCBmZWF0dXJlSW5kZXgpIHtcbiAqICAgLy89cHJldmlvdXNWYWx1ZVxuICogICAvLz1jdXJyZW50UHJvcGVydGllc1xuICogICAvLz1mZWF0dXJlSW5kZXhcbiAqICAgcmV0dXJuIGN1cnJlbnRQcm9wZXJ0aWVzXG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gcHJvcFJlZHVjZShnZW9qc29uLCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgcHJvcEVhY2goZ2VvanNvbiwgZnVuY3Rpb24gKGN1cnJlbnRQcm9wZXJ0aWVzLCBmZWF0dXJlSW5kZXgpIHtcbiAgICAgICAgaWYgKGZlYXR1cmVJbmRleCA9PT0gMCAmJiBpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCkgcHJldmlvdXNWYWx1ZSA9IGN1cnJlbnRQcm9wZXJ0aWVzO1xuICAgICAgICBlbHNlIHByZXZpb3VzVmFsdWUgPSBjYWxsYmFjayhwcmV2aW91c1ZhbHVlLCBjdXJyZW50UHJvcGVydGllcywgZmVhdHVyZUluZGV4KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZTtcbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgZmVhdHVyZUVhY2hcbiAqXG4gKiBAY2FsbGJhY2sgZmVhdHVyZUVhY2hDYWxsYmFja1xuICogQHBhcmFtIHtGZWF0dXJlPGFueT59IGN1cnJlbnRGZWF0dXJlIFRoZSBjdXJyZW50IEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKi9cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgZmVhdHVyZXMgaW4gYW55IEdlb0pTT04gb2JqZWN0LCBzaW1pbGFyIHRvXG4gKiBBcnJheS5mb3JFYWNoLlxuICpcbiAqIEBuYW1lIGZlYXR1cmVFYWNoXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV8R2VvbWV0cnl9IGdlb2pzb24gYW55IEdlb0pTT04gb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChjdXJyZW50RmVhdHVyZSwgZmVhdHVyZUluZGV4KVxuICogQHJldHVybnMge3ZvaWR9XG4gKiBAZXhhbXBsZVxuICogdmFyIGZlYXR1cmVzID0gdHVyZi5mZWF0dXJlQ29sbGVjdGlvbihbXG4gKiAgIHR1cmYucG9pbnQoWzI2LCAzN10sIHtmb286ICdiYXInfSksXG4gKiAgIHR1cmYucG9pbnQoWzM2LCA1M10sIHtoZWxsbzogJ3dvcmxkJ30pXG4gKiBdKTtcbiAqXG4gKiB0dXJmLmZlYXR1cmVFYWNoKGZlYXR1cmVzLCBmdW5jdGlvbiAoY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleCkge1xuICogICAvLz1jdXJyZW50RmVhdHVyZVxuICogICAvLz1mZWF0dXJlSW5kZXhcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBmZWF0dXJlRWFjaChnZW9qc29uLCBjYWxsYmFjaykge1xuICAgIGlmIChnZW9qc29uLnR5cGUgPT09ICdGZWF0dXJlJykge1xuICAgICAgICBjYWxsYmFjayhnZW9qc29uLCAwKTtcbiAgICB9IGVsc2UgaWYgKGdlb2pzb24udHlwZSA9PT0gJ0ZlYXR1cmVDb2xsZWN0aW9uJykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdlb2pzb24uZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayhnZW9qc29uLmZlYXR1cmVzW2ldLCBpKSA9PT0gZmFsc2UpIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIENhbGxiYWNrIGZvciBmZWF0dXJlUmVkdWNlXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIHZhbHVlcyBwcm92aWRlZCBhcyBhcmd1bWVudHMgZGVwZW5kXG4gKiBvbiB3aGV0aGVyIHRoZSByZWR1Y2UgbWV0aG9kIGhhcyBhbiBpbml0aWFsVmFsdWUgYXJndW1lbnQuXG4gKlxuICogSWYgYW4gaW5pdGlhbFZhbHVlIGlzIHByb3ZpZGVkIHRvIHRoZSByZWR1Y2UgbWV0aG9kOlxuICogIC0gVGhlIHByZXZpb3VzVmFsdWUgYXJndW1lbnQgaXMgaW5pdGlhbFZhbHVlLlxuICogIC0gVGhlIGN1cnJlbnRWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKlxuICogSWYgYW4gaW5pdGlhbFZhbHVlIGlzIG5vdCBwcm92aWRlZDpcbiAqICAtIFRoZSBwcmV2aW91c1ZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqICAtIFRoZSBjdXJyZW50VmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqXG4gKiBAY2FsbGJhY2sgZmVhdHVyZVJlZHVjZUNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzVmFsdWUgVGhlIGFjY3VtdWxhdGVkIHZhbHVlIHByZXZpb3VzbHkgcmV0dXJuZWQgaW4gdGhlIGxhc3QgaW52b2NhdGlvblxuICogb2YgdGhlIGNhbGxiYWNrLCBvciBpbml0aWFsVmFsdWUsIGlmIHN1cHBsaWVkLlxuICogQHBhcmFtIHtGZWF0dXJlfSBjdXJyZW50RmVhdHVyZSBUaGUgY3VycmVudCBGZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICovXG5cbi8qKlxuICogUmVkdWNlIGZlYXR1cmVzIGluIGFueSBHZW9KU09OIG9iamVjdCwgc2ltaWxhciB0byBBcnJheS5yZWR1Y2UoKS5cbiAqXG4gKiBAbmFtZSBmZWF0dXJlUmVkdWNlXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV8R2VvbWV0cnl9IGdlb2pzb24gYW55IEdlb0pTT04gb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50RmVhdHVyZSwgZmVhdHVyZUluZGV4KVxuICogQHBhcmFtIHsqfSBbaW5pdGlhbFZhbHVlXSBWYWx1ZSB0byB1c2UgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBmaXJzdCBjYWxsIG9mIHRoZSBjYWxsYmFjay5cbiAqIEByZXR1cm5zIHsqfSBUaGUgdmFsdWUgdGhhdCByZXN1bHRzIGZyb20gdGhlIHJlZHVjdGlvbi5cbiAqIEBleGFtcGxlXG4gKiB2YXIgZmVhdHVyZXMgPSB0dXJmLmZlYXR1cmVDb2xsZWN0aW9uKFtcbiAqICAgdHVyZi5wb2ludChbMjYsIDM3XSwge1wiZm9vXCI6IFwiYmFyXCJ9KSxcbiAqICAgdHVyZi5wb2ludChbMzYsIDUzXSwge1wiaGVsbG9cIjogXCJ3b3JsZFwifSlcbiAqIF0pO1xuICpcbiAqIHR1cmYuZmVhdHVyZVJlZHVjZShmZWF0dXJlcywgZnVuY3Rpb24gKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRGZWF0dXJlLCBmZWF0dXJlSW5kZXgpIHtcbiAqICAgLy89cHJldmlvdXNWYWx1ZVxuICogICAvLz1jdXJyZW50RmVhdHVyZVxuICogICAvLz1mZWF0dXJlSW5kZXhcbiAqICAgcmV0dXJuIGN1cnJlbnRGZWF0dXJlXG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gZmVhdHVyZVJlZHVjZShnZW9qc29uLCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgZmVhdHVyZUVhY2goZ2VvanNvbiwgZnVuY3Rpb24gKGN1cnJlbnRGZWF0dXJlLCBmZWF0dXJlSW5kZXgpIHtcbiAgICAgICAgaWYgKGZlYXR1cmVJbmRleCA9PT0gMCAmJiBpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCkgcHJldmlvdXNWYWx1ZSA9IGN1cnJlbnRGZWF0dXJlO1xuICAgICAgICBlbHNlIHByZXZpb3VzVmFsdWUgPSBjYWxsYmFjayhwcmV2aW91c1ZhbHVlLCBjdXJyZW50RmVhdHVyZSwgZmVhdHVyZUluZGV4KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZTtcbn1cblxuLyoqXG4gKiBHZXQgYWxsIGNvb3JkaW5hdGVzIGZyb20gYW55IEdlb0pTT04gb2JqZWN0LlxuICpcbiAqIEBuYW1lIGNvb3JkQWxsXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV8R2VvbWV0cnl9IGdlb2pzb24gYW55IEdlb0pTT04gb2JqZWN0XG4gKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGNvb3JkaW5hdGUgcG9zaXRpb24gYXJyYXlcbiAqIEBleGFtcGxlXG4gKiB2YXIgZmVhdHVyZXMgPSB0dXJmLmZlYXR1cmVDb2xsZWN0aW9uKFtcbiAqICAgdHVyZi5wb2ludChbMjYsIDM3XSwge2ZvbzogJ2Jhcid9KSxcbiAqICAgdHVyZi5wb2ludChbMzYsIDUzXSwge2hlbGxvOiAnd29ybGQnfSlcbiAqIF0pO1xuICpcbiAqIHZhciBjb29yZHMgPSB0dXJmLmNvb3JkQWxsKGZlYXR1cmVzKTtcbiAqIC8vPSBbWzI2LCAzN10sIFszNiwgNTNdXVxuICovXG5mdW5jdGlvbiBjb29yZEFsbChnZW9qc29uKSB7XG4gICAgdmFyIGNvb3JkcyA9IFtdO1xuICAgIGNvb3JkRWFjaChnZW9qc29uLCBmdW5jdGlvbiAoY29vcmQpIHtcbiAgICAgICAgY29vcmRzLnB1c2goY29vcmQpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb29yZHM7XG59XG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIGdlb21FYWNoXG4gKlxuICogQGNhbGxiYWNrIGdlb21FYWNoQ2FsbGJhY2tcbiAqIEBwYXJhbSB7R2VvbWV0cnl9IGN1cnJlbnRHZW9tZXRyeSBUaGUgY3VycmVudCBHZW9tZXRyeSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBGZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBmZWF0dXJlUHJvcGVydGllcyBUaGUgY3VycmVudCBGZWF0dXJlIFByb3BlcnRpZXMgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmZWF0dXJlQkJveCBUaGUgY3VycmVudCBGZWF0dXJlIEJCb3ggYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBmZWF0dXJlSWQgVGhlIGN1cnJlbnQgRmVhdHVyZSBJZCBiZWluZyBwcm9jZXNzZWQuXG4gKi9cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgZWFjaCBnZW9tZXRyeSBpbiBhbnkgR2VvSlNPTiBvYmplY3QsIHNpbWlsYXIgdG8gQXJyYXkuZm9yRWFjaCgpXG4gKlxuICogQG5hbWUgZ2VvbUVhY2hcbiAqIEBwYXJhbSB7RmVhdHVyZUNvbGxlY3Rpb258RmVhdHVyZXxHZW9tZXRyeX0gZ2VvanNvbiBhbnkgR2VvSlNPTiBvYmplY3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGEgbWV0aG9kIHRoYXQgdGFrZXMgKGN1cnJlbnRHZW9tZXRyeSwgZmVhdHVyZUluZGV4LCBmZWF0dXJlUHJvcGVydGllcywgZmVhdHVyZUJCb3gsIGZlYXR1cmVJZClcbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQGV4YW1wbGVcbiAqIHZhciBmZWF0dXJlcyA9IHR1cmYuZmVhdHVyZUNvbGxlY3Rpb24oW1xuICogICAgIHR1cmYucG9pbnQoWzI2LCAzN10sIHtmb286ICdiYXInfSksXG4gKiAgICAgdHVyZi5wb2ludChbMzYsIDUzXSwge2hlbGxvOiAnd29ybGQnfSlcbiAqIF0pO1xuICpcbiAqIHR1cmYuZ2VvbUVhY2goZmVhdHVyZXMsIGZ1bmN0aW9uIChjdXJyZW50R2VvbWV0cnksIGZlYXR1cmVJbmRleCwgZmVhdHVyZVByb3BlcnRpZXMsIGZlYXR1cmVCQm94LCBmZWF0dXJlSWQpIHtcbiAqICAgLy89Y3VycmVudEdlb21ldHJ5XG4gKiAgIC8vPWZlYXR1cmVJbmRleFxuICogICAvLz1mZWF0dXJlUHJvcGVydGllc1xuICogICAvLz1mZWF0dXJlQkJveFxuICogICAvLz1mZWF0dXJlSWRcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBnZW9tRWFjaChnZW9qc29uLCBjYWxsYmFjaykge1xuICAgIHZhciBpLCBqLCBnLCBnZW9tZXRyeSwgc3RvcEcsXG4gICAgICAgIGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uLFxuICAgICAgICBpc0dlb21ldHJ5Q29sbGVjdGlvbixcbiAgICAgICAgZmVhdHVyZVByb3BlcnRpZXMsXG4gICAgICAgIGZlYXR1cmVCQm94LFxuICAgICAgICBmZWF0dXJlSWQsXG4gICAgICAgIGZlYXR1cmVJbmRleCA9IDAsXG4gICAgICAgIGlzRmVhdHVyZUNvbGxlY3Rpb24gPSBnZW9qc29uLnR5cGUgPT09ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgIGlzRmVhdHVyZSA9IGdlb2pzb24udHlwZSA9PT0gJ0ZlYXR1cmUnLFxuICAgICAgICBzdG9wID0gaXNGZWF0dXJlQ29sbGVjdGlvbiA/IGdlb2pzb24uZmVhdHVyZXMubGVuZ3RoIDogMTtcblxuICAgIC8vIFRoaXMgbG9naWMgbWF5IGxvb2sgYSBsaXR0bGUgd2VpcmQuIFRoZSByZWFzb24gd2h5IGl0IGlzIHRoYXQgd2F5XG4gICAgLy8gaXMgYmVjYXVzZSBpdCdzIHRyeWluZyB0byBiZSBmYXN0LiBHZW9KU09OIHN1cHBvcnRzIG11bHRpcGxlIGtpbmRzXG4gICAgLy8gb2Ygb2JqZWN0cyBhdCBpdHMgcm9vdDogRmVhdHVyZUNvbGxlY3Rpb24sIEZlYXR1cmVzLCBHZW9tZXRyaWVzLlxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaGFzIHRoZSByZXNwb25zaWJpbGl0eSBvZiBoYW5kbGluZyBhbGwgb2YgdGhlbSwgYW5kIHRoYXRcbiAgICAvLyBtZWFucyB0aGF0IHNvbWUgb2YgdGhlIGBmb3JgIGxvb3BzIHlvdSBzZWUgYmVsb3cgYWN0dWFsbHkganVzdCBkb24ndCBhcHBseVxuICAgIC8vIHRvIGNlcnRhaW4gaW5wdXRzLiBGb3IgaW5zdGFuY2UsIGlmIHlvdSBnaXZlIHRoaXMganVzdCBhXG4gICAgLy8gUG9pbnQgZ2VvbWV0cnksIHRoZW4gYm90aCBsb29wcyBhcmUgc2hvcnQtY2lyY3VpdGVkIGFuZCBhbGwgd2UgZG9cbiAgICAvLyBpcyBncmFkdWFsbHkgcmVuYW1lIHRoZSBpbnB1dCB1bnRpbCBpdCdzIGNhbGxlZCAnZ2VvbWV0cnknLlxuICAgIC8vXG4gICAgLy8gVGhpcyBhbHNvIGFpbXMgdG8gYWxsb2NhdGUgYXMgZmV3IHJlc291cmNlcyBhcyBwb3NzaWJsZToganVzdCBhXG4gICAgLy8gZmV3IG51bWJlcnMgYW5kIGJvb2xlYW5zLCByYXRoZXIgdGhhbiBhbnkgdGVtcG9yYXJ5IGFycmF5cyBhcyB3b3VsZFxuICAgIC8vIGJlIHJlcXVpcmVkIHdpdGggdGhlIG5vcm1hbGl6YXRpb24gYXBwcm9hY2guXG4gICAgZm9yIChpID0gMDsgaSA8IHN0b3A7IGkrKykge1xuXG4gICAgICAgIGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uID0gKGlzRmVhdHVyZUNvbGxlY3Rpb24gPyBnZW9qc29uLmZlYXR1cmVzW2ldLmdlb21ldHJ5IDpcbiAgICAgICAgICAgIChpc0ZlYXR1cmUgPyBnZW9qc29uLmdlb21ldHJ5IDogZ2VvanNvbikpO1xuICAgICAgICBmZWF0dXJlUHJvcGVydGllcyA9IChpc0ZlYXR1cmVDb2xsZWN0aW9uID8gZ2VvanNvbi5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzIDpcbiAgICAgICAgICAgIChpc0ZlYXR1cmUgPyBnZW9qc29uLnByb3BlcnRpZXMgOiB7fSkpO1xuICAgICAgICBmZWF0dXJlQkJveCA9IChpc0ZlYXR1cmVDb2xsZWN0aW9uID8gZ2VvanNvbi5mZWF0dXJlc1tpXS5iYm94IDpcbiAgICAgICAgICAgIChpc0ZlYXR1cmUgPyBnZW9qc29uLmJib3ggOiB1bmRlZmluZWQpKTtcbiAgICAgICAgZmVhdHVyZUlkID0gKGlzRmVhdHVyZUNvbGxlY3Rpb24gPyBnZW9qc29uLmZlYXR1cmVzW2ldLmlkIDpcbiAgICAgICAgICAgIChpc0ZlYXR1cmUgPyBnZW9qc29uLmlkIDogdW5kZWZpbmVkKSk7XG4gICAgICAgIGlzR2VvbWV0cnlDb2xsZWN0aW9uID0gKGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uKSA/IGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uLnR5cGUgPT09ICdHZW9tZXRyeUNvbGxlY3Rpb24nIDogZmFsc2U7XG4gICAgICAgIHN0b3BHID0gaXNHZW9tZXRyeUNvbGxlY3Rpb24gPyBnZW9tZXRyeU1heWJlQ29sbGVjdGlvbi5nZW9tZXRyaWVzLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgZm9yIChnID0gMDsgZyA8IHN0b3BHOyBnKyspIHtcbiAgICAgICAgICAgIGdlb21ldHJ5ID0gaXNHZW9tZXRyeUNvbGxlY3Rpb24gP1xuICAgICAgICAgICAgICAgIGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uLmdlb21ldHJpZXNbZ10gOiBnZW9tZXRyeU1heWJlQ29sbGVjdGlvbjtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIG51bGwgR2VvbWV0cnlcbiAgICAgICAgICAgIGlmIChnZW9tZXRyeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayhudWxsLCBmZWF0dXJlSW5kZXgsIGZlYXR1cmVQcm9wZXJ0aWVzLCBmZWF0dXJlQkJveCwgZmVhdHVyZUlkKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoZ2VvbWV0cnkudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnUG9pbnQnOlxuICAgICAgICAgICAgY2FzZSAnTGluZVN0cmluZyc6XG4gICAgICAgICAgICBjYXNlICdNdWx0aVBvaW50JzpcbiAgICAgICAgICAgIGNhc2UgJ1BvbHlnb24nOlxuICAgICAgICAgICAgY2FzZSAnTXVsdGlMaW5lU3RyaW5nJzpcbiAgICAgICAgICAgIGNhc2UgJ011bHRpUG9seWdvbic6IHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2soZ2VvbWV0cnksIGZlYXR1cmVJbmRleCwgZmVhdHVyZVByb3BlcnRpZXMsIGZlYXR1cmVCQm94LCBmZWF0dXJlSWQpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnR2VvbWV0cnlDb2xsZWN0aW9uJzoge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBnZW9tZXRyeS5nZW9tZXRyaWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayhnZW9tZXRyeS5nZW9tZXRyaWVzW2pdLCBmZWF0dXJlSW5kZXgsIGZlYXR1cmVQcm9wZXJ0aWVzLCBmZWF0dXJlQkJveCwgZmVhdHVyZUlkKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBHZW9tZXRyeSBUeXBlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gT25seSBpbmNyZWFzZSBgZmVhdHVyZUluZGV4YCBwZXIgZWFjaCBmZWF0dXJlXG4gICAgICAgIGZlYXR1cmVJbmRleCsrO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgZ2VvbVJlZHVjZVxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYXMgYXJndW1lbnRzIGRlcGVuZFxuICogb24gd2hldGhlciB0aGUgcmVkdWNlIG1ldGhvZCBoYXMgYW4gaW5pdGlhbFZhbHVlIGFyZ3VtZW50LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBwcm92aWRlZCB0byB0aGUgcmVkdWNlIG1ldGhvZDpcbiAqICAtIFRoZSBwcmV2aW91c1ZhbHVlIGFyZ3VtZW50IGlzIGluaXRpYWxWYWx1ZS5cbiAqICAtIFRoZSBjdXJyZW50VmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBub3QgcHJvdmlkZWQ6XG4gKiAgLSBUaGUgcHJldmlvdXNWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKiAgLSBUaGUgY3VycmVudFZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kIGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKlxuICogQGNhbGxiYWNrIGdlb21SZWR1Y2VDYWxsYmFja1xuICogQHBhcmFtIHsqfSBwcmV2aW91c1ZhbHVlIFRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBwcmV2aW91c2x5IHJldHVybmVkIGluIHRoZSBsYXN0IGludm9jYXRpb25cbiAqIG9mIHRoZSBjYWxsYmFjaywgb3IgaW5pdGlhbFZhbHVlLCBpZiBzdXBwbGllZC5cbiAqIEBwYXJhbSB7R2VvbWV0cnl9IGN1cnJlbnRHZW9tZXRyeSBUaGUgY3VycmVudCBHZW9tZXRyeSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBGZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBmZWF0dXJlUHJvcGVydGllcyBUaGUgY3VycmVudCBGZWF0dXJlIFByb3BlcnRpZXMgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmZWF0dXJlQkJveCBUaGUgY3VycmVudCBGZWF0dXJlIEJCb3ggYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBmZWF0dXJlSWQgVGhlIGN1cnJlbnQgRmVhdHVyZSBJZCBiZWluZyBwcm9jZXNzZWQuXG4gKi9cblxuLyoqXG4gKiBSZWR1Y2UgZ2VvbWV0cnkgaW4gYW55IEdlb0pTT04gb2JqZWN0LCBzaW1pbGFyIHRvIEFycmF5LnJlZHVjZSgpLlxuICpcbiAqIEBuYW1lIGdlb21SZWR1Y2VcbiAqIEBwYXJhbSB7RmVhdHVyZUNvbGxlY3Rpb258RmVhdHVyZXxHZW9tZXRyeX0gZ2VvanNvbiBhbnkgR2VvSlNPTiBvYmplY3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGEgbWV0aG9kIHRoYXQgdGFrZXMgKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRHZW9tZXRyeSwgZmVhdHVyZUluZGV4LCBmZWF0dXJlUHJvcGVydGllcywgZmVhdHVyZUJCb3gsIGZlYXR1cmVJZClcbiAqIEBwYXJhbSB7Kn0gW2luaXRpYWxWYWx1ZV0gVmFsdWUgdG8gdXNlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgZmlyc3QgY2FsbCBvZiB0aGUgY2FsbGJhY2suXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHZhbHVlIHRoYXQgcmVzdWx0cyBmcm9tIHRoZSByZWR1Y3Rpb24uXG4gKiBAZXhhbXBsZVxuICogdmFyIGZlYXR1cmVzID0gdHVyZi5mZWF0dXJlQ29sbGVjdGlvbihbXG4gKiAgICAgdHVyZi5wb2ludChbMjYsIDM3XSwge2ZvbzogJ2Jhcid9KSxcbiAqICAgICB0dXJmLnBvaW50KFszNiwgNTNdLCB7aGVsbG86ICd3b3JsZCd9KVxuICogXSk7XG4gKlxuICogdHVyZi5nZW9tUmVkdWNlKGZlYXR1cmVzLCBmdW5jdGlvbiAocHJldmlvdXNWYWx1ZSwgY3VycmVudEdlb21ldHJ5LCBmZWF0dXJlSW5kZXgsIGZlYXR1cmVQcm9wZXJ0aWVzLCBmZWF0dXJlQkJveCwgZmVhdHVyZUlkKSB7XG4gKiAgIC8vPXByZXZpb3VzVmFsdWVcbiAqICAgLy89Y3VycmVudEdlb21ldHJ5XG4gKiAgIC8vPWZlYXR1cmVJbmRleFxuICogICAvLz1mZWF0dXJlUHJvcGVydGllc1xuICogICAvLz1mZWF0dXJlQkJveFxuICogICAvLz1mZWF0dXJlSWRcbiAqICAgcmV0dXJuIGN1cnJlbnRHZW9tZXRyeVxuICogfSk7XG4gKi9cbmZ1bmN0aW9uIGdlb21SZWR1Y2UoZ2VvanNvbiwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHZhciBwcmV2aW91c1ZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgIGdlb21FYWNoKGdlb2pzb24sIGZ1bmN0aW9uIChjdXJyZW50R2VvbWV0cnksIGZlYXR1cmVJbmRleCwgZmVhdHVyZVByb3BlcnRpZXMsIGZlYXR1cmVCQm94LCBmZWF0dXJlSWQpIHtcbiAgICAgICAgaWYgKGZlYXR1cmVJbmRleCA9PT0gMCAmJiBpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCkgcHJldmlvdXNWYWx1ZSA9IGN1cnJlbnRHZW9tZXRyeTtcbiAgICAgICAgZWxzZSBwcmV2aW91c1ZhbHVlID0gY2FsbGJhY2socHJldmlvdXNWYWx1ZSwgY3VycmVudEdlb21ldHJ5LCBmZWF0dXJlSW5kZXgsIGZlYXR1cmVQcm9wZXJ0aWVzLCBmZWF0dXJlQkJveCwgZmVhdHVyZUlkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZTtcbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgZmxhdHRlbkVhY2hcbiAqXG4gKiBAY2FsbGJhY2sgZmxhdHRlbkVhY2hDYWxsYmFja1xuICogQHBhcmFtIHtGZWF0dXJlfSBjdXJyZW50RmVhdHVyZSBUaGUgY3VycmVudCBmbGF0dGVuZWQgZmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBGZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtdWx0aUZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgTXVsdGktRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKi9cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgZmxhdHRlbmVkIGZlYXR1cmVzIGluIGFueSBHZW9KU09OIG9iamVjdCwgc2ltaWxhciB0b1xuICogQXJyYXkuZm9yRWFjaC5cbiAqXG4gKiBAbmFtZSBmbGF0dGVuRWFjaFxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIGFueSBHZW9KU09OIG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAoY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgpXG4gKiBAZXhhbXBsZVxuICogdmFyIGZlYXR1cmVzID0gdHVyZi5mZWF0dXJlQ29sbGVjdGlvbihbXG4gKiAgICAgdHVyZi5wb2ludChbMjYsIDM3XSwge2ZvbzogJ2Jhcid9KSxcbiAqICAgICB0dXJmLm11bHRpUG9pbnQoW1s0MCwgMzBdLCBbMzYsIDUzXV0sIHtoZWxsbzogJ3dvcmxkJ30pXG4gKiBdKTtcbiAqXG4gKiB0dXJmLmZsYXR0ZW5FYWNoKGZlYXR1cmVzLCBmdW5jdGlvbiAoY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgpIHtcbiAqICAgLy89Y3VycmVudEZlYXR1cmVcbiAqICAgLy89ZmVhdHVyZUluZGV4XG4gKiAgIC8vPW11bHRpRmVhdHVyZUluZGV4XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gZmxhdHRlbkVhY2goZ2VvanNvbiwgY2FsbGJhY2spIHtcbiAgICBnZW9tRWFjaChnZW9qc29uLCBmdW5jdGlvbiAoZ2VvbWV0cnksIGZlYXR1cmVJbmRleCwgcHJvcGVydGllcywgYmJveCwgaWQpIHtcbiAgICAgICAgLy8gQ2FsbGJhY2sgZm9yIHNpbmdsZSBnZW9tZXRyeVxuICAgICAgICB2YXIgdHlwZSA9IChnZW9tZXRyeSA9PT0gbnVsbCkgPyBudWxsIDogZ2VvbWV0cnkudHlwZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgY2FzZSAnUG9pbnQnOlxuICAgICAgICBjYXNlICdMaW5lU3RyaW5nJzpcbiAgICAgICAgY2FzZSAnUG9seWdvbic6XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2soaGVscGVycy5mZWF0dXJlKGdlb21ldHJ5LCBwcm9wZXJ0aWVzLCB7YmJveDogYmJveCwgaWQ6IGlkfSksIGZlYXR1cmVJbmRleCwgMCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZ2VvbVR5cGU7XG5cbiAgICAgICAgLy8gQ2FsbGJhY2sgZm9yIG11bHRpLWdlb21ldHJ5XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdNdWx0aVBvaW50JzpcbiAgICAgICAgICAgIGdlb21UeXBlID0gJ1BvaW50JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNdWx0aUxpbmVTdHJpbmcnOlxuICAgICAgICAgICAgZ2VvbVR5cGUgPSAnTGluZVN0cmluZyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTXVsdGlQb2x5Z29uJzpcbiAgICAgICAgICAgIGdlb21UeXBlID0gJ1BvbHlnb24nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBtdWx0aUZlYXR1cmVJbmRleCA9IDA7IG11bHRpRmVhdHVyZUluZGV4IDwgZ2VvbWV0cnkuY29vcmRpbmF0ZXMubGVuZ3RoOyBtdWx0aUZlYXR1cmVJbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgY29vcmRpbmF0ZSA9IGdlb21ldHJ5LmNvb3JkaW5hdGVzW211bHRpRmVhdHVyZUluZGV4XTtcbiAgICAgICAgICAgIHZhciBnZW9tID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IGdlb21UeXBlLFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjb29yZGluYXRlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGhlbHBlcnMuZmVhdHVyZShnZW9tLCBwcm9wZXJ0aWVzKSwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgZmxhdHRlblJlZHVjZVxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYXMgYXJndW1lbnRzIGRlcGVuZFxuICogb24gd2hldGhlciB0aGUgcmVkdWNlIG1ldGhvZCBoYXMgYW4gaW5pdGlhbFZhbHVlIGFyZ3VtZW50LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBwcm92aWRlZCB0byB0aGUgcmVkdWNlIG1ldGhvZDpcbiAqICAtIFRoZSBwcmV2aW91c1ZhbHVlIGFyZ3VtZW50IGlzIGluaXRpYWxWYWx1ZS5cbiAqICAtIFRoZSBjdXJyZW50VmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBub3QgcHJvdmlkZWQ6XG4gKiAgLSBUaGUgcHJldmlvdXNWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKiAgLSBUaGUgY3VycmVudFZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kIGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKlxuICogQGNhbGxiYWNrIGZsYXR0ZW5SZWR1Y2VDYWxsYmFja1xuICogQHBhcmFtIHsqfSBwcmV2aW91c1ZhbHVlIFRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBwcmV2aW91c2x5IHJldHVybmVkIGluIHRoZSBsYXN0IGludm9jYXRpb25cbiAqIG9mIHRoZSBjYWxsYmFjaywgb3IgaW5pdGlhbFZhbHVlLCBpZiBzdXBwbGllZC5cbiAqIEBwYXJhbSB7RmVhdHVyZX0gY3VycmVudEZlYXR1cmUgVGhlIGN1cnJlbnQgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBGZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtdWx0aUZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgTXVsdGktRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKi9cblxuLyoqXG4gKiBSZWR1Y2UgZmxhdHRlbmVkIGZlYXR1cmVzIGluIGFueSBHZW9KU09OIG9iamVjdCwgc2ltaWxhciB0byBBcnJheS5yZWR1Y2UoKS5cbiAqXG4gKiBAbmFtZSBmbGF0dGVuUmVkdWNlXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV8R2VvbWV0cnl9IGdlb2pzb24gYW55IEdlb0pTT04gb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50RmVhdHVyZSwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleClcbiAqIEBwYXJhbSB7Kn0gW2luaXRpYWxWYWx1ZV0gVmFsdWUgdG8gdXNlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgZmlyc3QgY2FsbCBvZiB0aGUgY2FsbGJhY2suXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHZhbHVlIHRoYXQgcmVzdWx0cyBmcm9tIHRoZSByZWR1Y3Rpb24uXG4gKiBAZXhhbXBsZVxuICogdmFyIGZlYXR1cmVzID0gdHVyZi5mZWF0dXJlQ29sbGVjdGlvbihbXG4gKiAgICAgdHVyZi5wb2ludChbMjYsIDM3XSwge2ZvbzogJ2Jhcid9KSxcbiAqICAgICB0dXJmLm11bHRpUG9pbnQoW1s0MCwgMzBdLCBbMzYsIDUzXV0sIHtoZWxsbzogJ3dvcmxkJ30pXG4gKiBdKTtcbiAqXG4gKiB0dXJmLmZsYXR0ZW5SZWR1Y2UoZmVhdHVyZXMsIGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50RmVhdHVyZSwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCkge1xuICogICAvLz1wcmV2aW91c1ZhbHVlXG4gKiAgIC8vPWN1cnJlbnRGZWF0dXJlXG4gKiAgIC8vPWZlYXR1cmVJbmRleFxuICogICAvLz1tdWx0aUZlYXR1cmVJbmRleFxuICogICByZXR1cm4gY3VycmVudEZlYXR1cmVcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBmbGF0dGVuUmVkdWNlKGdlb2pzb24sIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICBmbGF0dGVuRWFjaChnZW9qc29uLCBmdW5jdGlvbiAoY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgpIHtcbiAgICAgICAgaWYgKGZlYXR1cmVJbmRleCA9PT0gMCAmJiBtdWx0aUZlYXR1cmVJbmRleCA9PT0gMCAmJiBpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCkgcHJldmlvdXNWYWx1ZSA9IGN1cnJlbnRGZWF0dXJlO1xuICAgICAgICBlbHNlIHByZXZpb3VzVmFsdWUgPSBjYWxsYmFjayhwcmV2aW91c1ZhbHVlLCBjdXJyZW50RmVhdHVyZSwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG59XG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIHNlZ21lbnRFYWNoXG4gKlxuICogQGNhbGxiYWNrIHNlZ21lbnRFYWNoQ2FsbGJhY2tcbiAqIEBwYXJhbSB7RmVhdHVyZTxMaW5lU3RyaW5nPn0gY3VycmVudFNlZ21lbnQgVGhlIGN1cnJlbnQgU2VnbWVudCBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBGZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtdWx0aUZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgTXVsdGktRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZ2VvbWV0cnlJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgR2VvbWV0cnkgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IHNlZ21lbnRJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgU2VnbWVudCBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciAyLXZlcnRleCBsaW5lIHNlZ21lbnQgaW4gYW55IEdlb0pTT04gb2JqZWN0LCBzaW1pbGFyIHRvIEFycmF5LmZvckVhY2goKVxuICogKE11bHRpKVBvaW50IGdlb21ldHJpZXMgZG8gbm90IGNvbnRhaW4gc2VnbWVudHMgdGhlcmVmb3JlIHRoZXkgYXJlIGlnbm9yZWQgZHVyaW5nIHRoaXMgb3BlcmF0aW9uLlxuICpcbiAqIEBwYXJhbSB7RmVhdHVyZUNvbGxlY3Rpb258RmVhdHVyZXxHZW9tZXRyeX0gZ2VvanNvbiBhbnkgR2VvSlNPTlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAoY3VycmVudFNlZ21lbnQsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgsIHNlZ21lbnRJbmRleClcbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQGV4YW1wbGVcbiAqIHZhciBwb2x5Z29uID0gdHVyZi5wb2x5Z29uKFtbWy01MCwgNV0sIFstNDAsIC0xMF0sIFstNTAsIC0xMF0sIFstNDAsIDVdLCBbLTUwLCA1XV1dKTtcbiAqXG4gKiAvLyBJdGVyYXRlIG92ZXIgR2VvSlNPTiBieSAyLXZlcnRleCBzZWdtZW50c1xuICogdHVyZi5zZWdtZW50RWFjaChwb2x5Z29uLCBmdW5jdGlvbiAoY3VycmVudFNlZ21lbnQsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgsIHNlZ21lbnRJbmRleCkge1xuICogICAvLz1jdXJyZW50U2VnbWVudFxuICogICAvLz1mZWF0dXJlSW5kZXhcbiAqICAgLy89bXVsdGlGZWF0dXJlSW5kZXhcbiAqICAgLy89Z2VvbWV0cnlJbmRleFxuICogICAvLz1zZWdtZW50SW5kZXhcbiAqIH0pO1xuICpcbiAqIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgbnVtYmVyIG9mIHNlZ21lbnRzXG4gKiB2YXIgdG90YWwgPSAwO1xuICogdHVyZi5zZWdtZW50RWFjaChwb2x5Z29uLCBmdW5jdGlvbiAoKSB7XG4gKiAgICAgdG90YWwrKztcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBzZWdtZW50RWFjaChnZW9qc29uLCBjYWxsYmFjaykge1xuICAgIGZsYXR0ZW5FYWNoKGdlb2pzb24sIGZ1bmN0aW9uIChmZWF0dXJlLCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4KSB7XG4gICAgICAgIHZhciBzZWdtZW50SW5kZXggPSAwO1xuXG4gICAgICAgIC8vIEV4Y2x1ZGUgbnVsbCBHZW9tZXRyaWVzXG4gICAgICAgIGlmICghZmVhdHVyZS5nZW9tZXRyeSkgcmV0dXJuO1xuICAgICAgICAvLyAoTXVsdGkpUG9pbnQgZ2VvbWV0cmllcyBkbyBub3QgY29udGFpbiBzZWdtZW50cyB0aGVyZWZvcmUgdGhleSBhcmUgaWdub3JlZCBkdXJpbmcgdGhpcyBvcGVyYXRpb24uXG4gICAgICAgIHZhciB0eXBlID0gZmVhdHVyZS5nZW9tZXRyeS50eXBlO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ1BvaW50JyB8fCB0eXBlID09PSAnTXVsdGlQb2ludCcpIHJldHVybjtcblxuICAgICAgICAvLyBHZW5lcmF0ZSAyLXZlcnRleCBsaW5lIHNlZ21lbnRzXG4gICAgICAgIHZhciBwcmV2aW91c0Nvb3JkcztcbiAgICAgICAgdmFyIHByZXZpb3VzRmVhdHVyZUluZGV4ID0gMDtcbiAgICAgICAgdmFyIHByZXZpb3VzTXVsdGlJbmRleCA9IDA7XG4gICAgICAgIHZhciBwcmV2R2VvbUluZGV4ID0gMDtcbiAgICAgICAgaWYgKGNvb3JkRWFjaChmZWF0dXJlLCBmdW5jdGlvbiAoY3VycmVudENvb3JkLCBjb29yZEluZGV4LCBmZWF0dXJlSW5kZXhDb29yZCwgbXVsdGlQYXJ0SW5kZXhDb29yZCwgZ2VvbWV0cnlJbmRleCkge1xuICAgICAgICAgICAgLy8gU2ltdWxhdGluZyBhIG1ldGEuY29vcmRSZWR1Y2UoKSBzaW5jZSBgcmVkdWNlYCBvcGVyYXRpb25zIGNhbm5vdCBiZSBzdG9wcGVkIGJ5IHJldHVybmluZyBgZmFsc2VgXG4gICAgICAgICAgICBpZiAocHJldmlvdXNDb29yZHMgPT09IHVuZGVmaW5lZCB8fCBmZWF0dXJlSW5kZXggPiBwcmV2aW91c0ZlYXR1cmVJbmRleCB8fCBtdWx0aVBhcnRJbmRleENvb3JkID4gcHJldmlvdXNNdWx0aUluZGV4IHx8IGdlb21ldHJ5SW5kZXggPiBwcmV2R2VvbUluZGV4KSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNDb29yZHMgPSBjdXJyZW50Q29vcmQ7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNGZWF0dXJlSW5kZXggPSBmZWF0dXJlSW5kZXg7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNNdWx0aUluZGV4ID0gbXVsdGlQYXJ0SW5kZXhDb29yZDtcbiAgICAgICAgICAgICAgICBwcmV2R2VvbUluZGV4ID0gZ2VvbWV0cnlJbmRleDtcbiAgICAgICAgICAgICAgICBzZWdtZW50SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjdXJyZW50U2VnbWVudCA9IGhlbHBlcnMubGluZVN0cmluZyhbcHJldmlvdXNDb29yZHMsIGN1cnJlbnRDb29yZF0sIGZlYXR1cmUucHJvcGVydGllcyk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2soY3VycmVudFNlZ21lbnQsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgsIHNlZ21lbnRJbmRleCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBzZWdtZW50SW5kZXgrKztcbiAgICAgICAgICAgIHByZXZpb3VzQ29vcmRzID0gY3VycmVudENvb3JkO1xuICAgICAgICB9KSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3Igc2VnbWVudFJlZHVjZVxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYXMgYXJndW1lbnRzIGRlcGVuZFxuICogb24gd2hldGhlciB0aGUgcmVkdWNlIG1ldGhvZCBoYXMgYW4gaW5pdGlhbFZhbHVlIGFyZ3VtZW50LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBwcm92aWRlZCB0byB0aGUgcmVkdWNlIG1ldGhvZDpcbiAqICAtIFRoZSBwcmV2aW91c1ZhbHVlIGFyZ3VtZW50IGlzIGluaXRpYWxWYWx1ZS5cbiAqICAtIFRoZSBjdXJyZW50VmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBub3QgcHJvdmlkZWQ6XG4gKiAgLSBUaGUgcHJldmlvdXNWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKiAgLSBUaGUgY3VycmVudFZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kIGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKlxuICogQGNhbGxiYWNrIHNlZ21lbnRSZWR1Y2VDYWxsYmFja1xuICogQHBhcmFtIHsqfSBwcmV2aW91c1ZhbHVlIFRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBwcmV2aW91c2x5IHJldHVybmVkIGluIHRoZSBsYXN0IGludm9jYXRpb25cbiAqIG9mIHRoZSBjYWxsYmFjaywgb3IgaW5pdGlhbFZhbHVlLCBpZiBzdXBwbGllZC5cbiAqIEBwYXJhbSB7RmVhdHVyZTxMaW5lU3RyaW5nPn0gY3VycmVudFNlZ21lbnQgVGhlIGN1cnJlbnQgU2VnbWVudCBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBGZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtdWx0aUZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgTXVsdGktRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZ2VvbWV0cnlJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgR2VvbWV0cnkgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IHNlZ21lbnRJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgU2VnbWVudCBiZWluZyBwcm9jZXNzZWQuXG4gKi9cblxuLyoqXG4gKiBSZWR1Y2UgMi12ZXJ0ZXggbGluZSBzZWdtZW50IGluIGFueSBHZW9KU09OIG9iamVjdCwgc2ltaWxhciB0byBBcnJheS5yZWR1Y2UoKVxuICogKE11bHRpKVBvaW50IGdlb21ldHJpZXMgZG8gbm90IGNvbnRhaW4gc2VnbWVudHMgdGhlcmVmb3JlIHRoZXkgYXJlIGlnbm9yZWQgZHVyaW5nIHRoaXMgb3BlcmF0aW9uLlxuICpcbiAqIEBwYXJhbSB7RmVhdHVyZUNvbGxlY3Rpb258RmVhdHVyZXxHZW9tZXRyeX0gZ2VvanNvbiBhbnkgR2VvSlNPTlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAocHJldmlvdXNWYWx1ZSwgY3VycmVudFNlZ21lbnQsIGN1cnJlbnRJbmRleClcbiAqIEBwYXJhbSB7Kn0gW2luaXRpYWxWYWx1ZV0gVmFsdWUgdG8gdXNlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgZmlyc3QgY2FsbCBvZiB0aGUgY2FsbGJhY2suXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBleGFtcGxlXG4gKiB2YXIgcG9seWdvbiA9IHR1cmYucG9seWdvbihbW1stNTAsIDVdLCBbLTQwLCAtMTBdLCBbLTUwLCAtMTBdLCBbLTQwLCA1XSwgWy01MCwgNV1dXSk7XG4gKlxuICogLy8gSXRlcmF0ZSBvdmVyIEdlb0pTT04gYnkgMi12ZXJ0ZXggc2VnbWVudHNcbiAqIHR1cmYuc2VnbWVudFJlZHVjZShwb2x5Z29uLCBmdW5jdGlvbiAocHJldmlvdXNTZWdtZW50LCBjdXJyZW50U2VnbWVudCwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCwgZ2VvbWV0cnlJbmRleCwgc2VnbWVudEluZGV4KSB7XG4gKiAgIC8vPSBwcmV2aW91c1NlZ21lbnRcbiAqICAgLy89IGN1cnJlbnRTZWdtZW50XG4gKiAgIC8vPSBmZWF0dXJlSW5kZXhcbiAqICAgLy89IG11bHRpRmVhdHVyZUluZGV4XG4gKiAgIC8vPSBnZW9tZXRyeUluZGV4XG4gKiAgIC8vPSBzZWdtZW50SW5leFxuICogICByZXR1cm4gY3VycmVudFNlZ21lbnRcbiAqIH0pO1xuICpcbiAqIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgbnVtYmVyIG9mIHNlZ21lbnRzXG4gKiB2YXIgaW5pdGlhbFZhbHVlID0gMFxuICogdmFyIHRvdGFsID0gdHVyZi5zZWdtZW50UmVkdWNlKHBvbHlnb24sIGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlKSB7XG4gKiAgICAgcHJldmlvdXNWYWx1ZSsrO1xuICogICAgIHJldHVybiBwcmV2aW91c1ZhbHVlO1xuICogfSwgaW5pdGlhbFZhbHVlKTtcbiAqL1xuZnVuY3Rpb24gc2VnbWVudFJlZHVjZShnZW9qc29uLCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgdmFyIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBzZWdtZW50RWFjaChnZW9qc29uLCBmdW5jdGlvbiAoY3VycmVudFNlZ21lbnQsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgsIHNlZ21lbnRJbmRleCkge1xuICAgICAgICBpZiAoc3RhcnRlZCA9PT0gZmFsc2UgJiYgaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQpIHByZXZpb3VzVmFsdWUgPSBjdXJyZW50U2VnbWVudDtcbiAgICAgICAgZWxzZSBwcmV2aW91c1ZhbHVlID0gY2FsbGJhY2socHJldmlvdXNWYWx1ZSwgY3VycmVudFNlZ21lbnQsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgsIHNlZ21lbnRJbmRleCk7XG4gICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIHJldHVybiBwcmV2aW91c1ZhbHVlO1xufVxuXG4vKipcbiAqIENhbGxiYWNrIGZvciBsaW5lRWFjaFxuICpcbiAqIEBjYWxsYmFjayBsaW5lRWFjaENhbGxiYWNrXG4gKiBAcGFyYW0ge0ZlYXR1cmU8TGluZVN0cmluZz59IGN1cnJlbnRMaW5lIFRoZSBjdXJyZW50IExpbmVTdHJpbmd8TGluZWFyUmluZyBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBmZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge251bWJlcn0gbXVsdGlGZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIE11bHRpLUZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge251bWJlcn0gZ2VvbWV0cnlJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgR2VvbWV0cnkgYmVpbmcgcHJvY2Vzc2VkXG4gKi9cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgbGluZSBvciByaW5nIGNvb3JkaW5hdGVzIGluIExpbmVTdHJpbmcsIFBvbHlnb24sIE11bHRpTGluZVN0cmluZywgTXVsdGlQb2x5Z29uIEZlYXR1cmVzIG9yIEdlb21ldHJpZXMsXG4gKiBzaW1pbGFyIHRvIEFycmF5LmZvckVhY2guXG4gKlxuICogQG5hbWUgbGluZUVhY2hcbiAqIEBwYXJhbSB7R2VvbWV0cnl8RmVhdHVyZTxMaW5lU3RyaW5nfFBvbHlnb258TXVsdGlMaW5lU3RyaW5nfE11bHRpUG9seWdvbj59IGdlb2pzb24gb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChjdXJyZW50TGluZSwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCwgZ2VvbWV0cnlJbmRleClcbiAqIEBleGFtcGxlXG4gKiB2YXIgbXVsdGlMaW5lID0gdHVyZi5tdWx0aUxpbmVTdHJpbmcoW1xuICogICBbWzI2LCAzN10sIFszNSwgNDVdXSxcbiAqICAgW1szNiwgNTNdLCBbMzgsIDUwXSwgWzQxLCA1NV1dXG4gKiBdKTtcbiAqXG4gKiB0dXJmLmxpbmVFYWNoKG11bHRpTGluZSwgZnVuY3Rpb24gKGN1cnJlbnRMaW5lLCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4KSB7XG4gKiAgIC8vPWN1cnJlbnRMaW5lXG4gKiAgIC8vPWZlYXR1cmVJbmRleFxuICogICAvLz1tdWx0aUZlYXR1cmVJbmRleFxuICogICAvLz1nZW9tZXRyeUluZGV4XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gbGluZUVhY2goZ2VvanNvbiwgY2FsbGJhY2spIHtcbiAgICAvLyB2YWxpZGF0aW9uXG4gICAgaWYgKCFnZW9qc29uKSB0aHJvdyBuZXcgRXJyb3IoJ2dlb2pzb24gaXMgcmVxdWlyZWQnKTtcblxuICAgIGZsYXR0ZW5FYWNoKGdlb2pzb24sIGZ1bmN0aW9uIChmZWF0dXJlLCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4KSB7XG4gICAgICAgIGlmIChmZWF0dXJlLmdlb21ldHJ5ID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIHZhciB0eXBlID0gZmVhdHVyZS5nZW9tZXRyeS50eXBlO1xuICAgICAgICB2YXIgY29vcmRzID0gZmVhdHVyZS5nZW9tZXRyeS5jb29yZGluYXRlcztcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ0xpbmVTdHJpbmcnOlxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGZlYXR1cmUsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIDAsIDApID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BvbHlnb24nOlxuICAgICAgICAgICAgZm9yICh2YXIgZ2VvbWV0cnlJbmRleCA9IDA7IGdlb21ldHJ5SW5kZXggPCBjb29yZHMubGVuZ3RoOyBnZW9tZXRyeUluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2soaGVscGVycy5saW5lU3RyaW5nKGNvb3Jkc1tnZW9tZXRyeUluZGV4XSwgZmVhdHVyZS5wcm9wZXJ0aWVzKSwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCwgZ2VvbWV0cnlJbmRleCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIENhbGxiYWNrIGZvciBsaW5lUmVkdWNlXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIHZhbHVlcyBwcm92aWRlZCBhcyBhcmd1bWVudHMgZGVwZW5kXG4gKiBvbiB3aGV0aGVyIHRoZSByZWR1Y2UgbWV0aG9kIGhhcyBhbiBpbml0aWFsVmFsdWUgYXJndW1lbnQuXG4gKlxuICogSWYgYW4gaW5pdGlhbFZhbHVlIGlzIHByb3ZpZGVkIHRvIHRoZSByZWR1Y2UgbWV0aG9kOlxuICogIC0gVGhlIHByZXZpb3VzVmFsdWUgYXJndW1lbnQgaXMgaW5pdGlhbFZhbHVlLlxuICogIC0gVGhlIGN1cnJlbnRWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKlxuICogSWYgYW4gaW5pdGlhbFZhbHVlIGlzIG5vdCBwcm92aWRlZDpcbiAqICAtIFRoZSBwcmV2aW91c1ZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqICAtIFRoZSBjdXJyZW50VmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqXG4gKiBAY2FsbGJhY2sgbGluZVJlZHVjZUNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzVmFsdWUgVGhlIGFjY3VtdWxhdGVkIHZhbHVlIHByZXZpb3VzbHkgcmV0dXJuZWQgaW4gdGhlIGxhc3QgaW52b2NhdGlvblxuICogb2YgdGhlIGNhbGxiYWNrLCBvciBpbml0aWFsVmFsdWUsIGlmIHN1cHBsaWVkLlxuICogQHBhcmFtIHtGZWF0dXJlPExpbmVTdHJpbmc+fSBjdXJyZW50TGluZSBUaGUgY3VycmVudCBMaW5lU3RyaW5nfExpbmVhclJpbmcgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBtdWx0aUZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgTXVsdGktRmVhdHVyZSBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBnZW9tZXRyeUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBHZW9tZXRyeSBiZWluZyBwcm9jZXNzZWRcbiAqL1xuXG4vKipcbiAqIFJlZHVjZSBmZWF0dXJlcyBpbiBhbnkgR2VvSlNPTiBvYmplY3QsIHNpbWlsYXIgdG8gQXJyYXkucmVkdWNlKCkuXG4gKlxuICogQG5hbWUgbGluZVJlZHVjZVxuICogQHBhcmFtIHtHZW9tZXRyeXxGZWF0dXJlPExpbmVTdHJpbmd8UG9seWdvbnxNdWx0aUxpbmVTdHJpbmd8TXVsdGlQb2x5Z29uPn0gZ2VvanNvbiBvYmplY3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGEgbWV0aG9kIHRoYXQgdGFrZXMgKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRMaW5lLCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4KVxuICogQHBhcmFtIHsqfSBbaW5pdGlhbFZhbHVlXSBWYWx1ZSB0byB1c2UgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBmaXJzdCBjYWxsIG9mIHRoZSBjYWxsYmFjay5cbiAqIEByZXR1cm5zIHsqfSBUaGUgdmFsdWUgdGhhdCByZXN1bHRzIGZyb20gdGhlIHJlZHVjdGlvbi5cbiAqIEBleGFtcGxlXG4gKiB2YXIgbXVsdGlQb2x5ID0gdHVyZi5tdWx0aVBvbHlnb24oW1xuICogICB0dXJmLnBvbHlnb24oW1tbMTIsNDhdLFsyLDQxXSxbMjQsMzhdLFsxMiw0OF1dLCBbWzksNDRdLFsxMyw0MV0sWzEzLDQ1XSxbOSw0NF1dXSksXG4gKiAgIHR1cmYucG9seWdvbihbW1s1LCA1XSwgWzAsIDBdLCBbMiwgMl0sIFs0LCA0XSwgWzUsIDVdXV0pXG4gKiBdKTtcbiAqXG4gKiB0dXJmLmxpbmVSZWR1Y2UobXVsdGlQb2x5LCBmdW5jdGlvbiAocHJldmlvdXNWYWx1ZSwgY3VycmVudExpbmUsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgpIHtcbiAqICAgLy89cHJldmlvdXNWYWx1ZVxuICogICAvLz1jdXJyZW50TGluZVxuICogICAvLz1mZWF0dXJlSW5kZXhcbiAqICAgLy89bXVsdGlGZWF0dXJlSW5kZXhcbiAqICAgLy89Z2VvbWV0cnlJbmRleFxuICogICByZXR1cm4gY3VycmVudExpbmVcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBsaW5lUmVkdWNlKGdlb2pzb24sIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICBsaW5lRWFjaChnZW9qc29uLCBmdW5jdGlvbiAoY3VycmVudExpbmUsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIGdlb21ldHJ5SW5kZXgpIHtcbiAgICAgICAgaWYgKGZlYXR1cmVJbmRleCA9PT0gMCAmJiBpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCkgcHJldmlvdXNWYWx1ZSA9IGN1cnJlbnRMaW5lO1xuICAgICAgICBlbHNlIHByZXZpb3VzVmFsdWUgPSBjYWxsYmFjayhwcmV2aW91c1ZhbHVlLCBjdXJyZW50TGluZSwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCwgZ2VvbWV0cnlJbmRleCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG59XG5cbi8qKlxuICogRmluZHMgYSBwYXJ0aWN1bGFyIDItdmVydGV4IExpbmVTdHJpbmcgU2VnbWVudCBmcm9tIGEgR2VvSlNPTiB1c2luZyBgQHR1cmYvbWV0YWAgaW5kZXhlcy5cbiAqXG4gKiBOZWdhdGl2ZSBpbmRleGVzIGFyZSBwZXJtaXR0ZWQuXG4gKiBQb2ludCAmIE11bHRpUG9pbnQgd2lsbCBhbHdheXMgcmV0dXJuIG51bGwuXG4gKlxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIEFueSBHZW9KU09OIEZlYXR1cmUgb3IgR2VvbWV0cnlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmZlYXR1cmVJbmRleD0wXSBGZWF0dXJlIEluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubXVsdGlGZWF0dXJlSW5kZXg9MF0gTXVsdGktRmVhdHVyZSBJbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmdlb21ldHJ5SW5kZXg9MF0gR2VvbWV0cnkgSW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5zZWdtZW50SW5kZXg9MF0gU2VnbWVudCBJbmRleFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnByb3BlcnRpZXM9e31dIFRyYW5zbGF0ZSBQcm9wZXJ0aWVzIHRvIG91dHB1dCBMaW5lU3RyaW5nXG4gKiBAcGFyYW0ge0JCb3h9IFtvcHRpb25zLmJib3g9e31dIFRyYW5zbGF0ZSBCQm94IHRvIG91dHB1dCBMaW5lU3RyaW5nXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IFtvcHRpb25zLmlkPXt9XSBUcmFuc2xhdGUgSWQgdG8gb3V0cHV0IExpbmVTdHJpbmdcbiAqIEByZXR1cm5zIHtGZWF0dXJlPExpbmVTdHJpbmc+fSAyLXZlcnRleCBHZW9KU09OIEZlYXR1cmUgTGluZVN0cmluZ1xuICogQGV4YW1wbGVcbiAqIHZhciBtdWx0aUxpbmUgPSB0dXJmLm11bHRpTGluZVN0cmluZyhbXG4gKiAgICAgW1sxMCwgMTBdLCBbNTAsIDMwXSwgWzMwLCA0MF1dLFxuICogICAgIFtbLTEwLCAtMTBdLCBbLTUwLCAtMzBdLCBbLTMwLCAtNDBdXVxuICogXSk7XG4gKlxuICogLy8gRmlyc3QgU2VnbWVudCAoZGVmYXVsdHMgYXJlIDApXG4gKiB0dXJmLmZpbmRTZWdtZW50KG11bHRpTGluZSk7XG4gKiAvLyA9PiBGZWF0dXJlPExpbmVTdHJpbmc8W1sxMCwgMTBdLCBbNTAsIDMwXV0+PlxuICpcbiAqIC8vIEZpcnN0IFNlZ21lbnQgb2YgMm5kIE11bHRpIEZlYXR1cmVcbiAqIHR1cmYuZmluZFNlZ21lbnQobXVsdGlMaW5lLCB7bXVsdGlGZWF0dXJlSW5kZXg6IDF9KTtcbiAqIC8vID0+IEZlYXR1cmU8TGluZVN0cmluZzxbWy0xMCwgLTEwXSwgWy01MCwgLTMwXV0+PlxuICpcbiAqIC8vIExhc3QgU2VnbWVudCBvZiBMYXN0IE11bHRpIEZlYXR1cmVcbiAqIHR1cmYuZmluZFNlZ21lbnQobXVsdGlMaW5lLCB7bXVsdGlGZWF0dXJlSW5kZXg6IC0xLCBzZWdtZW50SW5kZXg6IC0xfSk7XG4gKiAvLyA9PiBGZWF0dXJlPExpbmVTdHJpbmc8W1stNTAsIC0zMF0sIFstMzAsIC00MF1dPj5cbiAqL1xuZnVuY3Rpb24gZmluZFNlZ21lbnQoZ2VvanNvbiwgb3B0aW9ucykge1xuICAgIC8vIE9wdGlvbmFsIFBhcmFtZXRlcnNcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIWhlbHBlcnMuaXNPYmplY3Qob3B0aW9ucykpIHRocm93IG5ldyBFcnJvcignb3B0aW9ucyBpcyBpbnZhbGlkJyk7XG4gICAgdmFyIGZlYXR1cmVJbmRleCA9IG9wdGlvbnMuZmVhdHVyZUluZGV4IHx8IDA7XG4gICAgdmFyIG11bHRpRmVhdHVyZUluZGV4ID0gb3B0aW9ucy5tdWx0aUZlYXR1cmVJbmRleCB8fCAwO1xuICAgIHZhciBnZW9tZXRyeUluZGV4ID0gb3B0aW9ucy5nZW9tZXRyeUluZGV4IHx8IDA7XG4gICAgdmFyIHNlZ21lbnRJbmRleCA9IG9wdGlvbnMuc2VnbWVudEluZGV4IHx8IDA7XG5cbiAgICAvLyBGaW5kIEZlYXR1cmVJbmRleFxuICAgIHZhciBwcm9wZXJ0aWVzID0gb3B0aW9ucy5wcm9wZXJ0aWVzO1xuICAgIHZhciBnZW9tZXRyeTtcblxuICAgIHN3aXRjaCAoZ2VvanNvbi50eXBlKSB7XG4gICAgY2FzZSAnRmVhdHVyZUNvbGxlY3Rpb24nOlxuICAgICAgICBpZiAoZmVhdHVyZUluZGV4IDwgMCkgZmVhdHVyZUluZGV4ID0gZ2VvanNvbi5mZWF0dXJlcy5sZW5ndGggKyBmZWF0dXJlSW5kZXg7XG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IGdlb2pzb24uZmVhdHVyZXNbZmVhdHVyZUluZGV4XS5wcm9wZXJ0aWVzO1xuICAgICAgICBnZW9tZXRyeSA9IGdlb2pzb24uZmVhdHVyZXNbZmVhdHVyZUluZGV4XS5nZW9tZXRyeTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRmVhdHVyZSc6XG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IGdlb2pzb24ucHJvcGVydGllcztcbiAgICAgICAgZ2VvbWV0cnkgPSBnZW9qc29uLmdlb21ldHJ5O1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICdQb2ludCc6XG4gICAgY2FzZSAnTXVsdGlQb2ludCc6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGNhc2UgJ0xpbmVTdHJpbmcnOlxuICAgIGNhc2UgJ1BvbHlnb24nOlxuICAgIGNhc2UgJ011bHRpTGluZVN0cmluZyc6XG4gICAgY2FzZSAnTXVsdGlQb2x5Z29uJzpcbiAgICAgICAgZ2VvbWV0cnkgPSBnZW9qc29uO1xuICAgICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dlb2pzb24gaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIC8vIEZpbmQgU2VnbWVudEluZGV4XG4gICAgaWYgKGdlb21ldHJ5ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgY29vcmRzID0gZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XG4gICAgc3dpdGNoIChnZW9tZXRyeS50eXBlKSB7XG4gICAgY2FzZSAnUG9pbnQnOlxuICAgIGNhc2UgJ011bHRpUG9pbnQnOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBjYXNlICdMaW5lU3RyaW5nJzpcbiAgICAgICAgaWYgKHNlZ21lbnRJbmRleCA8IDApIHNlZ21lbnRJbmRleCA9IGNvb3Jkcy5sZW5ndGggKyBzZWdtZW50SW5kZXggLSAxO1xuICAgICAgICByZXR1cm4gaGVscGVycy5saW5lU3RyaW5nKFtjb29yZHNbc2VnbWVudEluZGV4XSwgY29vcmRzW3NlZ21lbnRJbmRleCArIDFdXSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG4gICAgY2FzZSAnUG9seWdvbic6XG4gICAgICAgIGlmIChnZW9tZXRyeUluZGV4IDwgMCkgZ2VvbWV0cnlJbmRleCA9IGNvb3Jkcy5sZW5ndGggKyBnZW9tZXRyeUluZGV4O1xuICAgICAgICBpZiAoc2VnbWVudEluZGV4IDwgMCkgc2VnbWVudEluZGV4ID0gY29vcmRzW2dlb21ldHJ5SW5kZXhdLmxlbmd0aCArIHNlZ21lbnRJbmRleCAtIDE7XG4gICAgICAgIHJldHVybiBoZWxwZXJzLmxpbmVTdHJpbmcoW2Nvb3Jkc1tnZW9tZXRyeUluZGV4XVtzZWdtZW50SW5kZXhdLCBjb29yZHNbZ2VvbWV0cnlJbmRleF1bc2VnbWVudEluZGV4ICsgMV1dLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcbiAgICBjYXNlICdNdWx0aUxpbmVTdHJpbmcnOlxuICAgICAgICBpZiAobXVsdGlGZWF0dXJlSW5kZXggPCAwKSBtdWx0aUZlYXR1cmVJbmRleCA9IGNvb3Jkcy5sZW5ndGggKyBtdWx0aUZlYXR1cmVJbmRleDtcbiAgICAgICAgaWYgKHNlZ21lbnRJbmRleCA8IDApIHNlZ21lbnRJbmRleCA9IGNvb3Jkc1ttdWx0aUZlYXR1cmVJbmRleF0ubGVuZ3RoICsgc2VnbWVudEluZGV4IC0gMTtcbiAgICAgICAgcmV0dXJuIGhlbHBlcnMubGluZVN0cmluZyhbY29vcmRzW211bHRpRmVhdHVyZUluZGV4XVtzZWdtZW50SW5kZXhdLCBjb29yZHNbbXVsdGlGZWF0dXJlSW5kZXhdW3NlZ21lbnRJbmRleCArIDFdXSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG4gICAgY2FzZSAnTXVsdGlQb2x5Z29uJzpcbiAgICAgICAgaWYgKG11bHRpRmVhdHVyZUluZGV4IDwgMCkgbXVsdGlGZWF0dXJlSW5kZXggPSBjb29yZHMubGVuZ3RoICsgbXVsdGlGZWF0dXJlSW5kZXg7XG4gICAgICAgIGlmIChnZW9tZXRyeUluZGV4IDwgMCkgZ2VvbWV0cnlJbmRleCA9IGNvb3Jkc1ttdWx0aUZlYXR1cmVJbmRleF0ubGVuZ3RoICsgZ2VvbWV0cnlJbmRleDtcbiAgICAgICAgaWYgKHNlZ21lbnRJbmRleCA8IDApIHNlZ21lbnRJbmRleCA9IGNvb3Jkc1ttdWx0aUZlYXR1cmVJbmRleF1bZ2VvbWV0cnlJbmRleF0ubGVuZ3RoIC0gc2VnbWVudEluZGV4IC0gMTtcbiAgICAgICAgcmV0dXJuIGhlbHBlcnMubGluZVN0cmluZyhbY29vcmRzW211bHRpRmVhdHVyZUluZGV4XVtnZW9tZXRyeUluZGV4XVtzZWdtZW50SW5kZXhdLCBjb29yZHNbbXVsdGlGZWF0dXJlSW5kZXhdW2dlb21ldHJ5SW5kZXhdW3NlZ21lbnRJbmRleCArIDFdXSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignZ2VvanNvbiBpcyBpbnZhbGlkJyk7XG59XG5cbi8qKlxuICogRmluZHMgYSBwYXJ0aWN1bGFyIFBvaW50IGZyb20gYSBHZW9KU09OIHVzaW5nIGBAdHVyZi9tZXRhYCBpbmRleGVzLlxuICpcbiAqIE5lZ2F0aXZlIGluZGV4ZXMgYXJlIHBlcm1pdHRlZC5cbiAqXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV8R2VvbWV0cnl9IGdlb2pzb24gQW55IEdlb0pTT04gRmVhdHVyZSBvciBHZW9tZXRyeVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuZmVhdHVyZUluZGV4PTBdIEZlYXR1cmUgSW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tdWx0aUZlYXR1cmVJbmRleD0wXSBNdWx0aS1GZWF0dXJlIEluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuZ2VvbWV0cnlJbmRleD0wXSBHZW9tZXRyeSBJbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmNvb3JkSW5kZXg9MF0gQ29vcmQgSW5kZXhcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wcm9wZXJ0aWVzPXt9XSBUcmFuc2xhdGUgUHJvcGVydGllcyB0byBvdXRwdXQgUG9pbnRcbiAqIEBwYXJhbSB7QkJveH0gW29wdGlvbnMuYmJveD17fV0gVHJhbnNsYXRlIEJCb3ggdG8gb3V0cHV0IFBvaW50XG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IFtvcHRpb25zLmlkPXt9XSBUcmFuc2xhdGUgSWQgdG8gb3V0cHV0IFBvaW50XG4gKiBAcmV0dXJucyB7RmVhdHVyZTxQb2ludD59IDItdmVydGV4IEdlb0pTT04gRmVhdHVyZSBQb2ludFxuICogQGV4YW1wbGVcbiAqIHZhciBtdWx0aUxpbmUgPSB0dXJmLm11bHRpTGluZVN0cmluZyhbXG4gKiAgICAgW1sxMCwgMTBdLCBbNTAsIDMwXSwgWzMwLCA0MF1dLFxuICogICAgIFtbLTEwLCAtMTBdLCBbLTUwLCAtMzBdLCBbLTMwLCAtNDBdXVxuICogXSk7XG4gKlxuICogLy8gRmlyc3QgU2VnbWVudCAoZGVmYXVsdHMgYXJlIDApXG4gKiB0dXJmLmZpbmRQb2ludChtdWx0aUxpbmUpO1xuICogLy8gPT4gRmVhdHVyZTxQb2ludDxbMTAsIDEwXT4+XG4gKlxuICogLy8gRmlyc3QgU2VnbWVudCBvZiB0aGUgMm5kIE11bHRpLUZlYXR1cmVcbiAqIHR1cmYuZmluZFBvaW50KG11bHRpTGluZSwge211bHRpRmVhdHVyZUluZGV4OiAxfSk7XG4gKiAvLyA9PiBGZWF0dXJlPFBvaW50PFstMTAsIC0xMF0+PlxuICpcbiAqIC8vIExhc3QgU2VnbWVudCBvZiBsYXN0IE11bHRpLUZlYXR1cmVcbiAqIHR1cmYuZmluZFBvaW50KG11bHRpTGluZSwge211bHRpRmVhdHVyZUluZGV4OiAtMSwgY29vcmRJbmRleDogLTF9KTtcbiAqIC8vID0+IEZlYXR1cmU8UG9pbnQ8Wy0zMCwgLTQwXT4+XG4gKi9cbmZ1bmN0aW9uIGZpbmRQb2ludChnZW9qc29uLCBvcHRpb25zKSB7XG4gICAgLy8gT3B0aW9uYWwgUGFyYW1ldGVyc1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGlmICghaGVscGVycy5pc09iamVjdChvcHRpb25zKSkgdGhyb3cgbmV3IEVycm9yKCdvcHRpb25zIGlzIGludmFsaWQnKTtcbiAgICB2YXIgZmVhdHVyZUluZGV4ID0gb3B0aW9ucy5mZWF0dXJlSW5kZXggfHwgMDtcbiAgICB2YXIgbXVsdGlGZWF0dXJlSW5kZXggPSBvcHRpb25zLm11bHRpRmVhdHVyZUluZGV4IHx8IDA7XG4gICAgdmFyIGdlb21ldHJ5SW5kZXggPSBvcHRpb25zLmdlb21ldHJ5SW5kZXggfHwgMDtcbiAgICB2YXIgY29vcmRJbmRleCA9IG9wdGlvbnMuY29vcmRJbmRleCB8fCAwO1xuXG4gICAgLy8gRmluZCBGZWF0dXJlSW5kZXhcbiAgICB2YXIgcHJvcGVydGllcyA9IG9wdGlvbnMucHJvcGVydGllcztcbiAgICB2YXIgZ2VvbWV0cnk7XG5cbiAgICBzd2l0Y2ggKGdlb2pzb24udHlwZSkge1xuICAgIGNhc2UgJ0ZlYXR1cmVDb2xsZWN0aW9uJzpcbiAgICAgICAgaWYgKGZlYXR1cmVJbmRleCA8IDApIGZlYXR1cmVJbmRleCA9IGdlb2pzb24uZmVhdHVyZXMubGVuZ3RoICsgZmVhdHVyZUluZGV4O1xuICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCBnZW9qc29uLmZlYXR1cmVzW2ZlYXR1cmVJbmRleF0ucHJvcGVydGllcztcbiAgICAgICAgZ2VvbWV0cnkgPSBnZW9qc29uLmZlYXR1cmVzW2ZlYXR1cmVJbmRleF0uZ2VvbWV0cnk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0ZlYXR1cmUnOlxuICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCBnZW9qc29uLnByb3BlcnRpZXM7XG4gICAgICAgIGdlb21ldHJ5ID0gZ2VvanNvbi5nZW9tZXRyeTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUG9pbnQnOlxuICAgIGNhc2UgJ011bHRpUG9pbnQnOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBjYXNlICdMaW5lU3RyaW5nJzpcbiAgICBjYXNlICdQb2x5Z29uJzpcbiAgICBjYXNlICdNdWx0aUxpbmVTdHJpbmcnOlxuICAgIGNhc2UgJ011bHRpUG9seWdvbic6XG4gICAgICAgIGdlb21ldHJ5ID0gZ2VvanNvbjtcbiAgICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZW9qc29uIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICAvLyBGaW5kIENvb3JkIEluZGV4XG4gICAgaWYgKGdlb21ldHJ5ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgY29vcmRzID0gZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XG4gICAgc3dpdGNoIChnZW9tZXRyeS50eXBlKSB7XG4gICAgY2FzZSAnUG9pbnQnOlxuICAgICAgICByZXR1cm4gaGVscGVycy5wb2ludChjb29yZHMsIHByb3BlcnRpZXMsIG9wdGlvbnMpO1xuICAgIGNhc2UgJ011bHRpUG9pbnQnOlxuICAgICAgICBpZiAobXVsdGlGZWF0dXJlSW5kZXggPCAwKSBtdWx0aUZlYXR1cmVJbmRleCA9IGNvb3Jkcy5sZW5ndGggKyBtdWx0aUZlYXR1cmVJbmRleDtcbiAgICAgICAgcmV0dXJuIGhlbHBlcnMucG9pbnQoY29vcmRzW211bHRpRmVhdHVyZUluZGV4XSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG4gICAgY2FzZSAnTGluZVN0cmluZyc6XG4gICAgICAgIGlmIChjb29yZEluZGV4IDwgMCkgY29vcmRJbmRleCA9IGNvb3Jkcy5sZW5ndGggKyBjb29yZEluZGV4O1xuICAgICAgICByZXR1cm4gaGVscGVycy5wb2ludChjb29yZHNbY29vcmRJbmRleF0sIHByb3BlcnRpZXMsIG9wdGlvbnMpO1xuICAgIGNhc2UgJ1BvbHlnb24nOlxuICAgICAgICBpZiAoZ2VvbWV0cnlJbmRleCA8IDApIGdlb21ldHJ5SW5kZXggPSBjb29yZHMubGVuZ3RoICsgZ2VvbWV0cnlJbmRleDtcbiAgICAgICAgaWYgKGNvb3JkSW5kZXggPCAwKSBjb29yZEluZGV4ID0gY29vcmRzW2dlb21ldHJ5SW5kZXhdLmxlbmd0aCArIGNvb3JkSW5kZXg7XG4gICAgICAgIHJldHVybiBoZWxwZXJzLnBvaW50KGNvb3Jkc1tnZW9tZXRyeUluZGV4XVtjb29yZEluZGV4XSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG4gICAgY2FzZSAnTXVsdGlMaW5lU3RyaW5nJzpcbiAgICAgICAgaWYgKG11bHRpRmVhdHVyZUluZGV4IDwgMCkgbXVsdGlGZWF0dXJlSW5kZXggPSBjb29yZHMubGVuZ3RoICsgbXVsdGlGZWF0dXJlSW5kZXg7XG4gICAgICAgIGlmIChjb29yZEluZGV4IDwgMCkgY29vcmRJbmRleCA9IGNvb3Jkc1ttdWx0aUZlYXR1cmVJbmRleF0ubGVuZ3RoICsgY29vcmRJbmRleDtcbiAgICAgICAgcmV0dXJuIGhlbHBlcnMucG9pbnQoY29vcmRzW211bHRpRmVhdHVyZUluZGV4XVtjb29yZEluZGV4XSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG4gICAgY2FzZSAnTXVsdGlQb2x5Z29uJzpcbiAgICAgICAgaWYgKG11bHRpRmVhdHVyZUluZGV4IDwgMCkgbXVsdGlGZWF0dXJlSW5kZXggPSBjb29yZHMubGVuZ3RoICsgbXVsdGlGZWF0dXJlSW5kZXg7XG4gICAgICAgIGlmIChnZW9tZXRyeUluZGV4IDwgMCkgZ2VvbWV0cnlJbmRleCA9IGNvb3Jkc1ttdWx0aUZlYXR1cmVJbmRleF0ubGVuZ3RoICsgZ2VvbWV0cnlJbmRleDtcbiAgICAgICAgaWYgKGNvb3JkSW5kZXggPCAwKSBjb29yZEluZGV4ID0gY29vcmRzW211bHRpRmVhdHVyZUluZGV4XVtnZW9tZXRyeUluZGV4XS5sZW5ndGggLSBjb29yZEluZGV4O1xuICAgICAgICByZXR1cm4gaGVscGVycy5wb2ludChjb29yZHNbbXVsdGlGZWF0dXJlSW5kZXhdW2dlb21ldHJ5SW5kZXhdW2Nvb3JkSW5kZXhdLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnZW9qc29uIGlzIGludmFsaWQnKTtcbn1cblxuZXhwb3J0cy5jb29yZEVhY2ggPSBjb29yZEVhY2g7XG5leHBvcnRzLmNvb3JkUmVkdWNlID0gY29vcmRSZWR1Y2U7XG5leHBvcnRzLnByb3BFYWNoID0gcHJvcEVhY2g7XG5leHBvcnRzLnByb3BSZWR1Y2UgPSBwcm9wUmVkdWNlO1xuZXhwb3J0cy5mZWF0dXJlRWFjaCA9IGZlYXR1cmVFYWNoO1xuZXhwb3J0cy5mZWF0dXJlUmVkdWNlID0gZmVhdHVyZVJlZHVjZTtcbmV4cG9ydHMuY29vcmRBbGwgPSBjb29yZEFsbDtcbmV4cG9ydHMuZ2VvbUVhY2ggPSBnZW9tRWFjaDtcbmV4cG9ydHMuZ2VvbVJlZHVjZSA9IGdlb21SZWR1Y2U7XG5leHBvcnRzLmZsYXR0ZW5FYWNoID0gZmxhdHRlbkVhY2g7XG5leHBvcnRzLmZsYXR0ZW5SZWR1Y2UgPSBmbGF0dGVuUmVkdWNlO1xuZXhwb3J0cy5zZWdtZW50RWFjaCA9IHNlZ21lbnRFYWNoO1xuZXhwb3J0cy5zZWdtZW50UmVkdWNlID0gc2VnbWVudFJlZHVjZTtcbmV4cG9ydHMubGluZUVhY2ggPSBsaW5lRWFjaDtcbmV4cG9ydHMubGluZVJlZHVjZSA9IGxpbmVSZWR1Y2U7XG5leHBvcnRzLmZpbmRTZWdtZW50ID0gZmluZFNlZ21lbnQ7XG5leHBvcnRzLmZpbmRQb2ludCA9IGZpbmRQb2ludDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCJAdHVyZi9oZWxwZXJzXCIpO1xuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIHBvc2l0aW9uIHdpdGhpbiBhIHtAbGluayBib3VuZGluZyBib3h9LlxuICpcbiAqIEBuYW1lIHJhbmRvbVBvc2l0aW9uXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtiYm94PVstMTgwLCAtOTAsIDE4MCwgOTBdXSBhIGJvdW5kaW5nIGJveCBpbnNpZGUgb2Ygd2hpY2ggcG9zaXRpb25zIGFyZSBwbGFjZWQuXG4gKiBAcmV0dXJucyB7QXJyYXk8bnVtYmVyPn0gUG9zaXRpb24gW2xvbmdpdHVkZSwgbGF0aXR1ZGVdXG4gKiBAZXhhbXBsZVxuICogdmFyIHBvc2l0aW9uID0gdHVyZi5yYW5kb21Qb3NpdGlvbihbLTE4MCwgLTkwLCAxODAsIDkwXSlcbiAqIC8vID0+IHBvc2l0aW9uXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbVBvc2l0aW9uKGJib3gpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShiYm94KSkge1xuICAgICAgICByZXR1cm4gY29vcmRJbkJCb3goYmJveCk7XG4gICAgfVxuICAgIGlmIChiYm94ICYmIGJib3guYmJveCkge1xuICAgICAgICByZXR1cm4gY29vcmRJbkJCb3goYmJveC5iYm94KTtcbiAgICB9XG4gICAgcmV0dXJuIFtsb24oKSwgbGF0KCldO1xufVxuZXhwb3J0cy5yYW5kb21Qb3NpdGlvbiA9IHJhbmRvbVBvc2l0aW9uO1xuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIHtAbGluayBwb2ludH0uXG4gKlxuICogQG5hbWUgcmFuZG9tUG9pbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBbY291bnQ9MV0gaG93IG1hbnkgZ2VvbWV0cmllcyB3aWxsIGJlIGdlbmVyYXRlZFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3g9Wy0xODAsIC05MCwgMTgwLCA5MF1dIGEgYm91bmRpbmcgYm94IGluc2lkZSBvZiB3aGljaCBnZW9tZXRyaWVzIGFyZSBwbGFjZWQuXG4gKiBAcmV0dXJucyB7RmVhdHVyZUNvbGxlY3Rpb248UG9pbnQ+fSBHZW9KU09OIEZlYXR1cmVDb2xsZWN0aW9uIG9mIHBvaW50c1xuICogQGV4YW1wbGVcbiAqIHZhciBwb2ludHMgPSB0dXJmLnJhbmRvbVBvaW50KDI1LCB7YmJveDogWy0xODAsIC05MCwgMTgwLCA5MF19KVxuICogLy8gPT4gcG9pbnRzXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbVBvaW50KGNvdW50LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBpZiAoY291bnQgPT09IHVuZGVmaW5lZCB8fCBjb3VudCA9PT0gbnVsbCkge1xuICAgICAgICBjb3VudCA9IDE7XG4gICAgfVxuICAgIHZhciBmZWF0dXJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBmZWF0dXJlcy5wdXNoKGhlbHBlcnNfMS5wb2ludChyYW5kb21Qb3NpdGlvbihvcHRpb25zLmJib3gpKSk7XG4gICAgfVxuICAgIHJldHVybiBoZWxwZXJzXzEuZmVhdHVyZUNvbGxlY3Rpb24oZmVhdHVyZXMpO1xufVxuZXhwb3J0cy5yYW5kb21Qb2ludCA9IHJhbmRvbVBvaW50O1xuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIHtAbGluayBwb2x5Z29ufS5cbiAqXG4gKiBAbmFtZSByYW5kb21Qb2x5Z29uXG4gKiBAcGFyYW0ge251bWJlcn0gW2NvdW50PTFdIGhvdyBtYW55IGdlb21ldHJpZXMgd2lsbCBiZSBnZW5lcmF0ZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3B0aW9ucy5iYm94PVstMTgwLCAtOTAsIDE4MCwgOTBdXSBhIGJvdW5kaW5nIGJveCBpbnNpZGUgb2Ygd2hpY2ggZ2VvbWV0cmllcyBhcmUgcGxhY2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm51bV92ZXJ0aWNlcz0xMF0gaXMgaG93IG1hbnkgY29vcmRpbmF0ZXMgZWFjaCBMaW5lU3RyaW5nIHdpbGwgY29udGFpbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhfcmFkaWFsX2xlbmd0aD0xMF0gaXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGRlY2ltYWwgZGVncmVlcyBsYXRpdHVkZSBvciBsb25naXR1ZGUgdGhhdCBhXG4gKiB2ZXJ0ZXggY2FuIHJlYWNoIG91dCBvZiB0aGUgY2VudGVyIG9mIHRoZSBQb2x5Z29uLlxuICogQHJldHVybnMge0ZlYXR1cmVDb2xsZWN0aW9uPFBvbHlnb24+fSBHZW9KU09OIEZlYXR1cmVDb2xsZWN0aW9uIG9mIHBvbHlnb25zXG4gKiBAZXhhbXBsZVxuICogdmFyIHBvbHlnb25zID0gdHVyZi5yYW5kb21Qb2x5Z29uKDI1LCB7YmJveDogWy0xODAsIC05MCwgMTgwLCA5MF19KVxuICogLy8gPT4gcG9seWdvbnNcbiAqL1xuZnVuY3Rpb24gcmFuZG9tUG9seWdvbihjb3VudCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgLy8gRGVmYXVsdCBwYXJhbVxuICAgIGlmIChjb3VudCA9PT0gdW5kZWZpbmVkIHx8IGNvdW50ID09PSBudWxsKSB7XG4gICAgICAgIGNvdW50ID0gMTtcbiAgICB9XG4gICAgaWYgKCFoZWxwZXJzXzEuaXNOdW1iZXIob3B0aW9ucy5udW1fdmVydGljZXMpIHx8IG9wdGlvbnMubnVtX3ZlcnRpY2VzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3B0aW9ucy5udW1fdmVydGljZXMgPSAxMDtcbiAgICB9XG4gICAgaWYgKCFoZWxwZXJzXzEuaXNOdW1iZXIob3B0aW9ucy5tYXhfcmFkaWFsX2xlbmd0aCkgfHwgb3B0aW9ucy5tYXhfcmFkaWFsX2xlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wdGlvbnMubWF4X3JhZGlhbF9sZW5ndGggPSAxMDtcbiAgICB9XG4gICAgdmFyIGZlYXR1cmVzID0gW107XG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICB2YXIgdmVydGljZXMgPSBbXTtcbiAgICAgICAgdmFyIGNpcmNsZU9mZnNldHMgPSBBcnJheS5hcHBseShudWxsLCBuZXcgQXJyYXkob3B0aW9ucy5udW1fdmVydGljZXMgKyAxKSkubWFwKE1hdGgucmFuZG9tKTtcbiAgICAgICAgLy8gU3VtIE9mZnNldHNcbiAgICAgICAgY2lyY2xlT2Zmc2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChjdXIsIGluZGV4LCBhcnIpIHtcbiAgICAgICAgICAgIGFycltpbmRleF0gPSAoaW5kZXggPiAwKSA/IGN1ciArIGFycltpbmRleCAtIDFdIDogY3VyO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gc2NhbGVPZmZzZXRzXG4gICAgICAgIGNpcmNsZU9mZnNldHMuZm9yRWFjaChmdW5jdGlvbiAoY3VyKSB7XG4gICAgICAgICAgICBjdXIgPSBjdXIgKiAyICogTWF0aC5QSSAvIGNpcmNsZU9mZnNldHNbY2lyY2xlT2Zmc2V0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciByYWRpYWxTY2FsZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdmVydGljZXMucHVzaChbXG4gICAgICAgICAgICAgICAgcmFkaWFsU2NhbGVyICogKG9wdGlvbnMubWF4X3JhZGlhbF9sZW5ndGggfHwgMTApICogTWF0aC5zaW4oY3VyKSxcbiAgICAgICAgICAgICAgICByYWRpYWxTY2FsZXIgKiAob3B0aW9ucy5tYXhfcmFkaWFsX2xlbmd0aCB8fCAxMCkgKiBNYXRoLmNvcyhjdXIpLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2ZXJ0aWNlc1t2ZXJ0aWNlcy5sZW5ndGggLSAxXSA9IHZlcnRpY2VzWzBdOyAvLyBjbG9zZSB0aGUgcmluZ1xuICAgICAgICAvLyBjZW50ZXIgdGhlIHBvbHlnb24gYXJvdW5kIHNvbWV0aGluZ1xuICAgICAgICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLm1hcCh2ZXJ0ZXhUb0Nvb3JkaW5hdGUocmFuZG9tUG9zaXRpb24ob3B0aW9ucy5iYm94KSkpO1xuICAgICAgICBmZWF0dXJlcy5wdXNoKGhlbHBlcnNfMS5wb2x5Z29uKFt2ZXJ0aWNlc10pKTtcbiAgICB9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBfbG9vcF8xKGkpO1xuICAgIH1cbiAgICByZXR1cm4gaGVscGVyc18xLmZlYXR1cmVDb2xsZWN0aW9uKGZlYXR1cmVzKTtcbn1cbmV4cG9ydHMucmFuZG9tUG9seWdvbiA9IHJhbmRvbVBvbHlnb247XG4vKipcbiAqIFJldHVybnMgYSByYW5kb20ge0BsaW5rIGxpbmVzdHJpbmd9LlxuICpcbiAqIEBuYW1lIHJhbmRvbUxpbmVTdHJpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSBbY291bnQ9MV0gaG93IG1hbnkgZ2VvbWV0cmllcyB3aWxsIGJlIGdlbmVyYXRlZFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3g9Wy0xODAsIC05MCwgMTgwLCA5MF1dIGEgYm91bmRpbmcgYm94IGluc2lkZSBvZiB3aGljaCBnZW9tZXRyaWVzIGFyZSBwbGFjZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubnVtX3ZlcnRpY2VzPTEwXSBpcyBob3cgbWFueSBjb29yZGluYXRlcyBlYWNoIExpbmVTdHJpbmcgd2lsbCBjb250YWluLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heF9sZW5ndGg9MC4wMDAxXSBpcyB0aGUgbWF4aW11bSBudW1iZXIgb2YgZGVjaW1hbCBkZWdyZWVzIHRoYXQgYVxuICogdmVydGV4IGNhbiBiZSBmcm9tIGl0cyBwcmVkZWNlc3NvclxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heF9yb3RhdGlvbj1NYXRoLlBJIC8gOF0gaXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIHJhZGlhbnMgdGhhdCBhXG4gKiBsaW5lIHNlZ21lbnQgY2FuIHR1cm4gZnJvbSB0aGUgcHJldmlvdXMgc2VnbWVudC5cbiAqIEByZXR1cm5zIHtGZWF0dXJlQ29sbGVjdGlvbjxMaW5lU3RyaW5nPn0gR2VvSlNPTiBGZWF0dXJlQ29sbGVjdGlvbiBvZiBsaW5lc3RyaW5nc1xuICogQGV4YW1wbGVcbiAqIHZhciBsaW5lU3RyaW5ncyA9IHR1cmYucmFuZG9tTGluZVN0cmluZygyNSwge2Jib3g6IFstMTgwLCAtOTAsIDE4MCwgOTBdfSlcbiAqIC8vID0+IGxpbmVTdHJpbmdzXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUxpbmVTdHJpbmcoY291bnQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIWhlbHBlcnNfMS5pc09iamVjdChvcHRpb25zKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJvcHRpb25zIGlzIGludmFsaWRcIik7XG4gICAgfVxuICAgIHZhciBiYm94ID0gb3B0aW9ucy5iYm94O1xuICAgIHZhciBudW1fdmVydGljZXMgPSBvcHRpb25zLm51bV92ZXJ0aWNlcztcbiAgICB2YXIgbWF4X2xlbmd0aCA9IG9wdGlvbnMubWF4X2xlbmd0aDtcbiAgICB2YXIgbWF4X3JvdGF0aW9uID0gb3B0aW9ucy5tYXhfcm90YXRpb247XG4gICAgaWYgKGNvdW50ID09PSB1bmRlZmluZWQgfHwgY291bnQgPT09IG51bGwpIHtcbiAgICAgICAgY291bnQgPSAxO1xuICAgIH1cbiAgICAvLyBEZWZhdWx0IHBhcmFtZXRlcnNcbiAgICBpZiAoIWhlbHBlcnNfMS5pc051bWJlcihudW1fdmVydGljZXMpIHx8IG51bV92ZXJ0aWNlcyA9PT0gdW5kZWZpbmVkIHx8IG51bV92ZXJ0aWNlcyA8IDIpIHtcbiAgICAgICAgbnVtX3ZlcnRpY2VzID0gMTA7XG4gICAgfVxuICAgIGlmICghaGVscGVyc18xLmlzTnVtYmVyKG1heF9sZW5ndGgpIHx8IG1heF9sZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtYXhfbGVuZ3RoID0gMC4wMDAxO1xuICAgIH1cbiAgICBpZiAoIWhlbHBlcnNfMS5pc051bWJlcihtYXhfcm90YXRpb24pIHx8IG1heF9yb3RhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1heF9yb3RhdGlvbiA9IE1hdGguUEkgLyA4O1xuICAgIH1cbiAgICB2YXIgZmVhdHVyZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgdmFyIHN0YXJ0aW5nUG9pbnQgPSByYW5kb21Qb3NpdGlvbihiYm94KTtcbiAgICAgICAgdmFyIHZlcnRpY2VzID0gW3N0YXJ0aW5nUG9pbnRdO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG51bV92ZXJ0aWNlcyAtIDE7IGorKykge1xuICAgICAgICAgICAgdmFyIHByaW9yQW5nbGUgPSAoaiA9PT0gMCkgP1xuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyICogTWF0aC5QSSA6XG4gICAgICAgICAgICAgICAgTWF0aC50YW4oKHZlcnRpY2VzW2pdWzFdIC0gdmVydGljZXNbaiAtIDFdWzFdKSAvXG4gICAgICAgICAgICAgICAgICAgICh2ZXJ0aWNlc1tqXVswXSAtIHZlcnRpY2VzW2ogLSAxXVswXSkpO1xuICAgICAgICAgICAgdmFyIGFuZ2xlID0gcHJpb3JBbmdsZSArIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIG1heF9yb3RhdGlvbiAqIDI7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnJhbmRvbSgpICogbWF4X2xlbmd0aDtcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2goW1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzW2pdWzBdICsgZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgICAgICAgdmVydGljZXNbal1bMV0gKyBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgICAgIGZlYXR1cmVzLnB1c2goaGVscGVyc18xLmxpbmVTdHJpbmcodmVydGljZXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIGhlbHBlcnNfMS5mZWF0dXJlQ29sbGVjdGlvbihmZWF0dXJlcyk7XG59XG5leHBvcnRzLnJhbmRvbUxpbmVTdHJpbmcgPSByYW5kb21MaW5lU3RyaW5nO1xuZnVuY3Rpb24gdmVydGV4VG9Db29yZGluYXRlKGh1Yikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoY3VyKSB7XG4gICAgICAgIHJldHVybiBbY3VyWzBdICsgaHViWzBdLCBjdXJbMV0gKyBodWJbMV1dO1xuICAgIH07XG59XG5mdW5jdGlvbiBybmQoKSB7IHJldHVybiBNYXRoLnJhbmRvbSgpIC0gMC41OyB9XG5mdW5jdGlvbiBsb24oKSB7IHJldHVybiBybmQoKSAqIDM2MDsgfVxuZnVuY3Rpb24gbGF0KCkgeyByZXR1cm4gcm5kKCkgKiAxODA7IH1cbmZ1bmN0aW9uIGNvb3JkSW5CQm94KGJib3gpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAoTWF0aC5yYW5kb20oKSAqIChiYm94WzJdIC0gYmJveFswXSkpICsgYmJveFswXSxcbiAgICAgICAgKE1hdGgucmFuZG9tKCkgKiAoYmJveFszXSAtIGJib3hbMV0pKSArIGJib3hbMV1cbiAgICBdO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBjb21wYXJlIGFuZCBpc0J1ZmZlciB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2Jsb2IvNjgwZTllNWU0ODhmMjJhYWMyNzU5OWE1N2RjODQ0YTYzMTU5MjhkZC9pbmRleC5qc1xuLy8gb3JpZ2luYWwgbm90aWNlOlxuXG4vKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHZhciB4ID0gYS5sZW5ndGg7XG4gIHZhciB5ID0gYi5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV07XG4gICAgICB5ID0gYltpXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoeSA8IHgpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cbmZ1bmN0aW9uIGlzQnVmZmVyKGIpIHtcbiAgaWYgKGdsb2JhbC5CdWZmZXIgJiYgdHlwZW9mIGdsb2JhbC5CdWZmZXIuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZ2xvYmFsLkJ1ZmZlci5pc0J1ZmZlcihiKTtcbiAgfVxuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKTtcbn1cblxuLy8gYmFzZWQgb24gbm9kZSBhc3NlcnQsIG9yaWdpbmFsIG5vdGljZTpcbi8vIE5COiBUaGUgVVJMIHRvIHRoZSBDb21tb25KUyBzcGVjIGlzIGtlcHQganVzdCBmb3IgdHJhZGl0aW9uLlxuLy8gICAgIG5vZGUtYXNzZXJ0IGhhcyBldm9sdmVkIGEgbG90IHNpbmNlIHRoZW4sIGJvdGggaW4gQVBJIGFuZCBiZWhhdmlvci5cblxuLy8gaHR0cDovL3dpa2kuY29tbW9uanMub3JnL3dpa2kvVW5pdF9UZXN0aW5nLzEuMFxuLy9cbi8vIFRISVMgSVMgTk9UIFRFU1RFRCBOT1IgTElLRUxZIFRPIFdPUksgT1VUU0lERSBWOCFcbi8vXG4vLyBPcmlnaW5hbGx5IGZyb20gbmFyd2hhbC5qcyAoaHR0cDovL25hcndoYWxqcy5vcmcpXG4vLyBDb3B5cmlnaHQgKGMpIDIwMDkgVGhvbWFzIFJvYmluc29uIDwyODBub3J0aC5jb20+XG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgJ1NvZnR3YXJlJyksIHRvXG4vLyBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuLy8gcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4vLyBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuLy8gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuLy8gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbC8nKTtcbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHBTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBmdW5jdGlvbnNIYXZlTmFtZXMgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZm9vKCkge30ubmFtZSA9PT0gJ2Zvbyc7XG59KCkpO1xuZnVuY3Rpb24gcFRvU3RyaW5nIChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xufVxuZnVuY3Rpb24gaXNWaWV3KGFycmJ1Zikge1xuICBpZiAoaXNCdWZmZXIoYXJyYnVmKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIGdsb2JhbC5BcnJheUJ1ZmZlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcoYXJyYnVmKTtcbiAgfVxuICBpZiAoIWFycmJ1Zikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoYXJyYnVmIGluc3RhbmNlb2YgRGF0YVZpZXcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoYXJyYnVmLmJ1ZmZlciAmJiBhcnJidWYuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4vLyAxLiBUaGUgYXNzZXJ0IG1vZHVsZSBwcm92aWRlcyBmdW5jdGlvbnMgdGhhdCB0aHJvd1xuLy8gQXNzZXJ0aW9uRXJyb3IncyB3aGVuIHBhcnRpY3VsYXIgY29uZGl0aW9ucyBhcmUgbm90IG1ldC4gVGhlXG4vLyBhc3NlcnQgbW9kdWxlIG11c3QgY29uZm9ybSB0byB0aGUgZm9sbG93aW5nIGludGVyZmFjZS5cblxudmFyIGFzc2VydCA9IG1vZHVsZS5leHBvcnRzID0gb2s7XG5cbi8vIDIuIFRoZSBBc3NlcnRpb25FcnJvciBpcyBkZWZpbmVkIGluIGFzc2VydC5cbi8vIG5ldyBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IoeyBtZXNzYWdlOiBtZXNzYWdlLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogYWN0dWFsLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCB9KVxuXG52YXIgcmVnZXggPSAvXFxzKmZ1bmN0aW9uXFxzKyhbXlxcKFxcc10qKVxccyovO1xuLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9mdW5jdGlvbi5wcm90b3R5cGUubmFtZS9ibG9iL2FkZWVlZWM4YmZjYzYwNjhiMTg3ZDdkOWZiM2Q1YmIxZDNhMzA4OTkvaW1wbGVtZW50YXRpb24uanNcbmZ1bmN0aW9uIGdldE5hbWUoZnVuYykge1xuICBpZiAoIXV0aWwuaXNGdW5jdGlvbihmdW5jKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZnVuY3Rpb25zSGF2ZU5hbWVzKSB7XG4gICAgcmV0dXJuIGZ1bmMubmFtZTtcbiAgfVxuICB2YXIgc3RyID0gZnVuYy50b1N0cmluZygpO1xuICB2YXIgbWF0Y2ggPSBzdHIubWF0Y2gocmVnZXgpO1xuICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV07XG59XG5hc3NlcnQuQXNzZXJ0aW9uRXJyb3IgPSBmdW5jdGlvbiBBc3NlcnRpb25FcnJvcihvcHRpb25zKSB7XG4gIHRoaXMubmFtZSA9ICdBc3NlcnRpb25FcnJvcic7XG4gIHRoaXMuYWN0dWFsID0gb3B0aW9ucy5hY3R1YWw7XG4gIHRoaXMuZXhwZWN0ZWQgPSBvcHRpb25zLmV4cGVjdGVkO1xuICB0aGlzLm9wZXJhdG9yID0gb3B0aW9ucy5vcGVyYXRvcjtcbiAgaWYgKG9wdGlvbnMubWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG9wdGlvbnMubWVzc2FnZTtcbiAgICB0aGlzLmdlbmVyYXRlZE1lc3NhZ2UgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBnZXRNZXNzYWdlKHRoaXMpO1xuICAgIHRoaXMuZ2VuZXJhdGVkTWVzc2FnZSA9IHRydWU7XG4gIH1cbiAgdmFyIHN0YWNrU3RhcnRGdW5jdGlvbiA9IG9wdGlvbnMuc3RhY2tTdGFydEZ1bmN0aW9uIHx8IGZhaWw7XG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHN0YWNrU3RhcnRGdW5jdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgLy8gbm9uIHY4IGJyb3dzZXJzIHNvIHdlIGNhbiBoYXZlIGEgc3RhY2t0cmFjZVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoKTtcbiAgICBpZiAoZXJyLnN0YWNrKSB7XG4gICAgICB2YXIgb3V0ID0gZXJyLnN0YWNrO1xuXG4gICAgICAvLyB0cnkgdG8gc3RyaXAgdXNlbGVzcyBmcmFtZXNcbiAgICAgIHZhciBmbl9uYW1lID0gZ2V0TmFtZShzdGFja1N0YXJ0RnVuY3Rpb24pO1xuICAgICAgdmFyIGlkeCA9IG91dC5pbmRleE9mKCdcXG4nICsgZm5fbmFtZSk7XG4gICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgLy8gb25jZSB3ZSBoYXZlIGxvY2F0ZWQgdGhlIGZ1bmN0aW9uIGZyYW1lXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gc3RyaXAgb3V0IGV2ZXJ5dGhpbmcgYmVmb3JlIGl0IChhbmQgaXRzIGxpbmUpXG4gICAgICAgIHZhciBuZXh0X2xpbmUgPSBvdXQuaW5kZXhPZignXFxuJywgaWR4ICsgMSk7XG4gICAgICAgIG91dCA9IG91dC5zdWJzdHJpbmcobmV4dF9saW5lICsgMSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhY2sgPSBvdXQ7XG4gICAgfVxuICB9XG59O1xuXG4vLyBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IgaW5zdGFuY2VvZiBFcnJvclxudXRpbC5pbmhlcml0cyhhc3NlcnQuQXNzZXJ0aW9uRXJyb3IsIEVycm9yKTtcblxuZnVuY3Rpb24gdHJ1bmNhdGUocywgbikge1xuICBpZiAodHlwZW9mIHMgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHMubGVuZ3RoIDwgbiA/IHMgOiBzLnNsaWNlKDAsIG4pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzO1xuICB9XG59XG5mdW5jdGlvbiBpbnNwZWN0KHNvbWV0aGluZykge1xuICBpZiAoZnVuY3Rpb25zSGF2ZU5hbWVzIHx8ICF1dGlsLmlzRnVuY3Rpb24oc29tZXRoaW5nKSkge1xuICAgIHJldHVybiB1dGlsLmluc3BlY3Qoc29tZXRoaW5nKTtcbiAgfVxuICB2YXIgcmF3bmFtZSA9IGdldE5hbWUoc29tZXRoaW5nKTtcbiAgdmFyIG5hbWUgPSByYXduYW1lID8gJzogJyArIHJhd25hbWUgOiAnJztcbiAgcmV0dXJuICdbRnVuY3Rpb24nICsgIG5hbWUgKyAnXSc7XG59XG5mdW5jdGlvbiBnZXRNZXNzYWdlKHNlbGYpIHtcbiAgcmV0dXJuIHRydW5jYXRlKGluc3BlY3Qoc2VsZi5hY3R1YWwpLCAxMjgpICsgJyAnICtcbiAgICAgICAgIHNlbGYub3BlcmF0b3IgKyAnICcgK1xuICAgICAgICAgdHJ1bmNhdGUoaW5zcGVjdChzZWxmLmV4cGVjdGVkKSwgMTI4KTtcbn1cblxuLy8gQXQgcHJlc2VudCBvbmx5IHRoZSB0aHJlZSBrZXlzIG1lbnRpb25lZCBhYm92ZSBhcmUgdXNlZCBhbmRcbi8vIHVuZGVyc3Rvb2QgYnkgdGhlIHNwZWMuIEltcGxlbWVudGF0aW9ucyBvciBzdWIgbW9kdWxlcyBjYW4gcGFzc1xuLy8gb3RoZXIga2V5cyB0byB0aGUgQXNzZXJ0aW9uRXJyb3IncyBjb25zdHJ1Y3RvciAtIHRoZXkgd2lsbCBiZVxuLy8gaWdub3JlZC5cblxuLy8gMy4gQWxsIG9mIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zIG11c3QgdGhyb3cgYW4gQXNzZXJ0aW9uRXJyb3Jcbi8vIHdoZW4gYSBjb3JyZXNwb25kaW5nIGNvbmRpdGlvbiBpcyBub3QgbWV0LCB3aXRoIGEgbWVzc2FnZSB0aGF0XG4vLyBtYXkgYmUgdW5kZWZpbmVkIGlmIG5vdCBwcm92aWRlZC4gIEFsbCBhc3NlcnRpb24gbWV0aG9kcyBwcm92aWRlXG4vLyBib3RoIHRoZSBhY3R1YWwgYW5kIGV4cGVjdGVkIHZhbHVlcyB0byB0aGUgYXNzZXJ0aW9uIGVycm9yIGZvclxuLy8gZGlzcGxheSBwdXJwb3Nlcy5cblxuZnVuY3Rpb24gZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCBvcGVyYXRvciwgc3RhY2tTdGFydEZ1bmN0aW9uKSB7XG4gIHRocm93IG5ldyBhc3NlcnQuQXNzZXJ0aW9uRXJyb3Ioe1xuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgIG9wZXJhdG9yOiBvcGVyYXRvcixcbiAgICBzdGFja1N0YXJ0RnVuY3Rpb246IHN0YWNrU3RhcnRGdW5jdGlvblxuICB9KTtcbn1cblxuLy8gRVhURU5TSU9OISBhbGxvd3MgZm9yIHdlbGwgYmVoYXZlZCBlcnJvcnMgZGVmaW5lZCBlbHNld2hlcmUuXG5hc3NlcnQuZmFpbCA9IGZhaWw7XG5cbi8vIDQuIFB1cmUgYXNzZXJ0aW9uIHRlc3RzIHdoZXRoZXIgYSB2YWx1ZSBpcyB0cnV0aHksIGFzIGRldGVybWluZWRcbi8vIGJ5ICEhZ3VhcmQuXG4vLyBhc3NlcnQub2soZ3VhcmQsIG1lc3NhZ2Vfb3B0KTtcbi8vIFRoaXMgc3RhdGVtZW50IGlzIGVxdWl2YWxlbnQgdG8gYXNzZXJ0LmVxdWFsKHRydWUsICEhZ3VhcmQsXG4vLyBtZXNzYWdlX29wdCk7LiBUbyB0ZXN0IHN0cmljdGx5IGZvciB0aGUgdmFsdWUgdHJ1ZSwgdXNlXG4vLyBhc3NlcnQuc3RyaWN0RXF1YWwodHJ1ZSwgZ3VhcmQsIG1lc3NhZ2Vfb3B0KTsuXG5cbmZ1bmN0aW9uIG9rKHZhbHVlLCBtZXNzYWdlKSB7XG4gIGlmICghdmFsdWUpIGZhaWwodmFsdWUsIHRydWUsIG1lc3NhZ2UsICc9PScsIGFzc2VydC5vayk7XG59XG5hc3NlcnQub2sgPSBvaztcblxuLy8gNS4gVGhlIGVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBzaGFsbG93LCBjb2VyY2l2ZSBlcXVhbGl0eSB3aXRoXG4vLyA9PS5cbi8vIGFzc2VydC5lcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5lcXVhbCA9IGZ1bmN0aW9uIGVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCAhPSBleHBlY3RlZCkgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnPT0nLCBhc3NlcnQuZXF1YWwpO1xufTtcblxuLy8gNi4gVGhlIG5vbi1lcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgZm9yIHdoZXRoZXIgdHdvIG9iamVjdHMgYXJlIG5vdCBlcXVhbFxuLy8gd2l0aCAhPSBhc3NlcnQubm90RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQubm90RXF1YWwgPSBmdW5jdGlvbiBub3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgPT0gZXhwZWN0ZWQpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICchPScsIGFzc2VydC5ub3RFcXVhbCk7XG4gIH1cbn07XG5cbi8vIDcuIFRoZSBlcXVpdmFsZW5jZSBhc3NlcnRpb24gdGVzdHMgYSBkZWVwIGVxdWFsaXR5IHJlbGF0aW9uLlxuLy8gYXNzZXJ0LmRlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5kZWVwRXF1YWwgPSBmdW5jdGlvbiBkZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoIV9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgZmFsc2UpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnZGVlcEVxdWFsJywgYXNzZXJ0LmRlZXBFcXVhbCk7XG4gIH1cbn07XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBkZWVwU3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoIV9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgdHJ1ZSkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICdkZWVwU3RyaWN0RXF1YWwnLCBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBzdHJpY3QsIG1lbW9zKSB7XG4gIC8vIDcuMS4gQWxsIGlkZW50aWNhbCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGFzIGRldGVybWluZWQgYnkgPT09LlxuICBpZiAoYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQnVmZmVyKGFjdHVhbCkgJiYgaXNCdWZmZXIoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGNvbXBhcmUoYWN0dWFsLCBleHBlY3RlZCkgPT09IDA7XG5cbiAgLy8gNy4yLiBJZiB0aGUgZXhwZWN0ZWQgdmFsdWUgaXMgYSBEYXRlIG9iamVjdCwgdGhlIGFjdHVhbCB2YWx1ZSBpc1xuICAvLyBlcXVpdmFsZW50IGlmIGl0IGlzIGFsc28gYSBEYXRlIG9iamVjdCB0aGF0IHJlZmVycyB0byB0aGUgc2FtZSB0aW1lLlxuICB9IGVsc2UgaWYgKHV0aWwuaXNEYXRlKGFjdHVhbCkgJiYgdXRpbC5pc0RhdGUoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGFjdHVhbC5nZXRUaW1lKCkgPT09IGV4cGVjdGVkLmdldFRpbWUoKTtcblxuICAvLyA3LjMgSWYgdGhlIGV4cGVjdGVkIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdCwgdGhlIGFjdHVhbCB2YWx1ZSBpc1xuICAvLyBlcXVpdmFsZW50IGlmIGl0IGlzIGFsc28gYSBSZWdFeHAgb2JqZWN0IHdpdGggdGhlIHNhbWUgc291cmNlIGFuZFxuICAvLyBwcm9wZXJ0aWVzIChgZ2xvYmFsYCwgYG11bHRpbGluZWAsIGBsYXN0SW5kZXhgLCBgaWdub3JlQ2FzZWApLlxuICB9IGVsc2UgaWYgKHV0aWwuaXNSZWdFeHAoYWN0dWFsKSAmJiB1dGlsLmlzUmVnRXhwKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBhY3R1YWwuc291cmNlID09PSBleHBlY3RlZC5zb3VyY2UgJiZcbiAgICAgICAgICAgYWN0dWFsLmdsb2JhbCA9PT0gZXhwZWN0ZWQuZ2xvYmFsICYmXG4gICAgICAgICAgIGFjdHVhbC5tdWx0aWxpbmUgPT09IGV4cGVjdGVkLm11bHRpbGluZSAmJlxuICAgICAgICAgICBhY3R1YWwubGFzdEluZGV4ID09PSBleHBlY3RlZC5sYXN0SW5kZXggJiZcbiAgICAgICAgICAgYWN0dWFsLmlnbm9yZUNhc2UgPT09IGV4cGVjdGVkLmlnbm9yZUNhc2U7XG5cbiAgLy8gNy40LiBPdGhlciBwYWlycyB0aGF0IGRvIG5vdCBib3RoIHBhc3MgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnLFxuICAvLyBlcXVpdmFsZW5jZSBpcyBkZXRlcm1pbmVkIGJ5ID09LlxuICB9IGVsc2UgaWYgKChhY3R1YWwgPT09IG51bGwgfHwgdHlwZW9mIGFjdHVhbCAhPT0gJ29iamVjdCcpICYmXG4gICAgICAgICAgICAgKGV4cGVjdGVkID09PSBudWxsIHx8IHR5cGVvZiBleHBlY3RlZCAhPT0gJ29iamVjdCcpKSB7XG4gICAgcmV0dXJuIHN0cmljdCA/IGFjdHVhbCA9PT0gZXhwZWN0ZWQgOiBhY3R1YWwgPT0gZXhwZWN0ZWQ7XG5cbiAgLy8gSWYgYm90aCB2YWx1ZXMgYXJlIGluc3RhbmNlcyBvZiB0eXBlZCBhcnJheXMsIHdyYXAgdGhlaXIgdW5kZXJseWluZ1xuICAvLyBBcnJheUJ1ZmZlcnMgaW4gYSBCdWZmZXIgZWFjaCB0byBpbmNyZWFzZSBwZXJmb3JtYW5jZVxuICAvLyBUaGlzIG9wdGltaXphdGlvbiByZXF1aXJlcyB0aGUgYXJyYXlzIHRvIGhhdmUgdGhlIHNhbWUgdHlwZSBhcyBjaGVja2VkIGJ5XG4gIC8vIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgKGFrYSBwVG9TdHJpbmcpLiBOZXZlciBwZXJmb3JtIGJpbmFyeVxuICAvLyBjb21wYXJpc29ucyBmb3IgRmxvYXQqQXJyYXlzLCB0aG91Z2gsIHNpbmNlIGUuZy4gKzAgPT09IC0wIGJ1dCB0aGVpclxuICAvLyBiaXQgcGF0dGVybnMgYXJlIG5vdCBpZGVudGljYWwuXG4gIH0gZWxzZSBpZiAoaXNWaWV3KGFjdHVhbCkgJiYgaXNWaWV3KGV4cGVjdGVkKSAmJlxuICAgICAgICAgICAgIHBUb1N0cmluZyhhY3R1YWwpID09PSBwVG9TdHJpbmcoZXhwZWN0ZWQpICYmXG4gICAgICAgICAgICAgIShhY3R1YWwgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkgfHxcbiAgICAgICAgICAgICAgIGFjdHVhbCBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheSkpIHtcbiAgICByZXR1cm4gY29tcGFyZShuZXcgVWludDhBcnJheShhY3R1YWwuYnVmZmVyKSxcbiAgICAgICAgICAgICAgICAgICBuZXcgVWludDhBcnJheShleHBlY3RlZC5idWZmZXIpKSA9PT0gMDtcblxuICAvLyA3LjUgRm9yIGFsbCBvdGhlciBPYmplY3QgcGFpcnMsIGluY2x1ZGluZyBBcnJheSBvYmplY3RzLCBlcXVpdmFsZW5jZSBpc1xuICAvLyBkZXRlcm1pbmVkIGJ5IGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoYXMgdmVyaWZpZWRcbiAgLy8gd2l0aCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwpLCB0aGUgc2FtZSBzZXQgb2Yga2V5c1xuICAvLyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSwgZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5XG4gIC8vIGNvcnJlc3BvbmRpbmcga2V5LCBhbmQgYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LiBOb3RlOiB0aGlzXG4gIC8vIGFjY291bnRzIGZvciBib3RoIG5hbWVkIGFuZCBpbmRleGVkIHByb3BlcnRpZXMgb24gQXJyYXlzLlxuICB9IGVsc2UgaWYgKGlzQnVmZmVyKGFjdHVhbCkgIT09IGlzQnVmZmVyKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBtZW1vcyA9IG1lbW9zIHx8IHthY3R1YWw6IFtdLCBleHBlY3RlZDogW119O1xuXG4gICAgdmFyIGFjdHVhbEluZGV4ID0gbWVtb3MuYWN0dWFsLmluZGV4T2YoYWN0dWFsKTtcbiAgICBpZiAoYWN0dWFsSW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAoYWN0dWFsSW5kZXggPT09IG1lbW9zLmV4cGVjdGVkLmluZGV4T2YoZXhwZWN0ZWQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9zLmFjdHVhbC5wdXNoKGFjdHVhbCk7XG4gICAgbWVtb3MuZXhwZWN0ZWQucHVzaChleHBlY3RlZCk7XG5cbiAgICByZXR1cm4gb2JqRXF1aXYoYWN0dWFsLCBleHBlY3RlZCwgc3RyaWN0LCBtZW1vcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNBcmd1bWVudHMob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn1cblxuZnVuY3Rpb24gb2JqRXF1aXYoYSwgYiwgc3RyaWN0LCBhY3R1YWxWaXNpdGVkT2JqZWN0cykge1xuICBpZiAoYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQgfHwgYiA9PT0gbnVsbCB8fCBiID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvLyBpZiBvbmUgaXMgYSBwcmltaXRpdmUsIHRoZSBvdGhlciBtdXN0IGJlIHNhbWVcbiAgaWYgKHV0aWwuaXNQcmltaXRpdmUoYSkgfHwgdXRpbC5pc1ByaW1pdGl2ZShiKSlcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgaWYgKHN0cmljdCAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYSkgIT09IE9iamVjdC5nZXRQcm90b3R5cGVPZihiKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIHZhciBhSXNBcmdzID0gaXNBcmd1bWVudHMoYSk7XG4gIHZhciBiSXNBcmdzID0gaXNBcmd1bWVudHMoYik7XG4gIGlmICgoYUlzQXJncyAmJiAhYklzQXJncykgfHwgKCFhSXNBcmdzICYmIGJJc0FyZ3MpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgaWYgKGFJc0FyZ3MpIHtcbiAgICBhID0gcFNsaWNlLmNhbGwoYSk7XG4gICAgYiA9IHBTbGljZS5jYWxsKGIpO1xuICAgIHJldHVybiBfZGVlcEVxdWFsKGEsIGIsIHN0cmljdCk7XG4gIH1cbiAgdmFyIGthID0gb2JqZWN0S2V5cyhhKTtcbiAgdmFyIGtiID0gb2JqZWN0S2V5cyhiKTtcbiAgdmFyIGtleSwgaTtcbiAgLy8gaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChrZXlzIGluY29ycG9yYXRlc1xuICAvLyBoYXNPd25Qcm9wZXJ0eSlcbiAgaWYgKGthLmxlbmd0aCAhPT0ga2IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy90aGUgc2FtZSBzZXQgb2Yga2V5cyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSxcbiAga2Euc29ydCgpO1xuICBrYi5zb3J0KCk7XG4gIC8vfn5+Y2hlYXAga2V5IHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoa2FbaV0gIT09IGtiW2ldKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5IGNvcnJlc3BvbmRpbmcga2V5LCBhbmRcbiAgLy9+fn5wb3NzaWJseSBleHBlbnNpdmUgZGVlcCB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAga2V5ID0ga2FbaV07XG4gICAgaWYgKCFfZGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBzdHJpY3QsIGFjdHVhbFZpc2l0ZWRPYmplY3RzKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gOC4gVGhlIG5vbi1lcXVpdmFsZW5jZSBhc3NlcnRpb24gdGVzdHMgZm9yIGFueSBkZWVwIGluZXF1YWxpdHkuXG4vLyBhc3NlcnQubm90RGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0Lm5vdERlZXBFcXVhbCA9IGZ1bmN0aW9uIG5vdERlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIGZhbHNlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ25vdERlZXBFcXVhbCcsIGFzc2VydC5ub3REZWVwRXF1YWwpO1xuICB9XG59O1xuXG5hc3NlcnQubm90RGVlcFN0cmljdEVxdWFsID0gbm90RGVlcFN0cmljdEVxdWFsO1xuZnVuY3Rpb24gbm90RGVlcFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKF9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgdHJ1ZSkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICdub3REZWVwU3RyaWN0RXF1YWwnLCBub3REZWVwU3RyaWN0RXF1YWwpO1xuICB9XG59XG5cblxuLy8gOS4gVGhlIHN0cmljdCBlcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgc3RyaWN0IGVxdWFsaXR5LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbi8vIGFzc2VydC5zdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIHN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCAhPT0gZXhwZWN0ZWQpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICc9PT0nLCBhc3NlcnQuc3RyaWN0RXF1YWwpO1xuICB9XG59O1xuXG4vLyAxMC4gVGhlIHN0cmljdCBub24tZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIGZvciBzdHJpY3QgaW5lcXVhbGl0eSwgYXNcbi8vIGRldGVybWluZWQgYnkgIT09LiAgYXNzZXJ0Lm5vdFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0Lm5vdFN0cmljdEVxdWFsID0gZnVuY3Rpb24gbm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJyE9PScsIGFzc2VydC5ub3RTdHJpY3RFcXVhbCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQpIHtcbiAgaWYgKCFhY3R1YWwgfHwgIWV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChleHBlY3RlZCkgPT0gJ1tvYmplY3QgUmVnRXhwXScpIHtcbiAgICByZXR1cm4gZXhwZWN0ZWQudGVzdChhY3R1YWwpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAoYWN0dWFsIGluc3RhbmNlb2YgZXhwZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElnbm9yZS4gIFRoZSBpbnN0YW5jZW9mIGNoZWNrIGRvZXNuJ3Qgd29yayBmb3IgYXJyb3cgZnVuY3Rpb25zLlxuICB9XG5cbiAgaWYgKEVycm9yLmlzUHJvdG90eXBlT2YoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGV4cGVjdGVkLmNhbGwoe30sIGFjdHVhbCkgPT09IHRydWU7XG59XG5cbmZ1bmN0aW9uIF90cnlCbG9jayhibG9jaykge1xuICB2YXIgZXJyb3I7XG4gIHRyeSB7XG4gICAgYmxvY2soKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGVycm9yID0gZTtcbiAgfVxuICByZXR1cm4gZXJyb3I7XG59XG5cbmZ1bmN0aW9uIF90aHJvd3Moc2hvdWxkVGhyb3csIGJsb2NrLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICB2YXIgYWN0dWFsO1xuXG4gIGlmICh0eXBlb2YgYmxvY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJsb2NrXCIgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIGV4cGVjdGVkID09PSAnc3RyaW5nJykge1xuICAgIG1lc3NhZ2UgPSBleHBlY3RlZDtcbiAgICBleHBlY3RlZCA9IG51bGw7XG4gIH1cblxuICBhY3R1YWwgPSBfdHJ5QmxvY2soYmxvY2spO1xuXG4gIG1lc3NhZ2UgPSAoZXhwZWN0ZWQgJiYgZXhwZWN0ZWQubmFtZSA/ICcgKCcgKyBleHBlY3RlZC5uYW1lICsgJykuJyA6ICcuJykgK1xuICAgICAgICAgICAgKG1lc3NhZ2UgPyAnICcgKyBtZXNzYWdlIDogJy4nKTtcblxuICBpZiAoc2hvdWxkVGhyb3cgJiYgIWFjdHVhbCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgJ01pc3NpbmcgZXhwZWN0ZWQgZXhjZXB0aW9uJyArIG1lc3NhZ2UpO1xuICB9XG5cbiAgdmFyIHVzZXJQcm92aWRlZE1lc3NhZ2UgPSB0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZyc7XG4gIHZhciBpc1Vud2FudGVkRXhjZXB0aW9uID0gIXNob3VsZFRocm93ICYmIHV0aWwuaXNFcnJvcihhY3R1YWwpO1xuICB2YXIgaXNVbmV4cGVjdGVkRXhjZXB0aW9uID0gIXNob3VsZFRocm93ICYmIGFjdHVhbCAmJiAhZXhwZWN0ZWQ7XG5cbiAgaWYgKChpc1Vud2FudGVkRXhjZXB0aW9uICYmXG4gICAgICB1c2VyUHJvdmlkZWRNZXNzYWdlICYmXG4gICAgICBleHBlY3RlZEV4Y2VwdGlvbihhY3R1YWwsIGV4cGVjdGVkKSkgfHxcbiAgICAgIGlzVW5leHBlY3RlZEV4Y2VwdGlvbikge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgJ0dvdCB1bndhbnRlZCBleGNlcHRpb24nICsgbWVzc2FnZSk7XG4gIH1cblxuICBpZiAoKHNob3VsZFRocm93ICYmIGFjdHVhbCAmJiBleHBlY3RlZCAmJlxuICAgICAgIWV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQpKSB8fCAoIXNob3VsZFRocm93ICYmIGFjdHVhbCkpIHtcbiAgICB0aHJvdyBhY3R1YWw7XG4gIH1cbn1cblxuLy8gMTEuIEV4cGVjdGVkIHRvIHRocm93IGFuIGVycm9yOlxuLy8gYXNzZXJ0LnRocm93cyhibG9jaywgRXJyb3Jfb3B0LCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC50aHJvd3MgPSBmdW5jdGlvbihibG9jaywgLypvcHRpb25hbCovZXJyb3IsIC8qb3B0aW9uYWwqL21lc3NhZ2UpIHtcbiAgX3Rocm93cyh0cnVlLCBibG9jaywgZXJyb3IsIG1lc3NhZ2UpO1xufTtcblxuLy8gRVhURU5TSU9OISBUaGlzIGlzIGFubm95aW5nIHRvIHdyaXRlIG91dHNpZGUgdGhpcyBtb2R1bGUuXG5hc3NlcnQuZG9lc05vdFRocm93ID0gZnVuY3Rpb24oYmxvY2ssIC8qb3B0aW9uYWwqL2Vycm9yLCAvKm9wdGlvbmFsKi9tZXNzYWdlKSB7XG4gIF90aHJvd3MoZmFsc2UsIGJsb2NrLCBlcnJvciwgbWVzc2FnZSk7XG59O1xuXG5hc3NlcnQuaWZFcnJvciA9IGZ1bmN0aW9uKGVycikgeyBpZiAoZXJyKSB0aHJvdyBlcnI7IH07XG5cbi8vIEV4cG9zZSBhIHN0cmljdCBvbmx5IHZhcmlhbnQgb2YgYXNzZXJ0XG5mdW5jdGlvbiBzdHJpY3QodmFsdWUsIG1lc3NhZ2UpIHtcbiAgaWYgKCF2YWx1ZSkgZmFpbCh2YWx1ZSwgdHJ1ZSwgbWVzc2FnZSwgJz09Jywgc3RyaWN0KTtcbn1cbmFzc2VydC5zdHJpY3QgPSBvYmplY3RBc3NpZ24oc3RyaWN0LCBhc3NlcnQsIHtcbiAgZXF1YWw6IGFzc2VydC5zdHJpY3RFcXVhbCxcbiAgZGVlcEVxdWFsOiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsLFxuICBub3RFcXVhbDogYXNzZXJ0Lm5vdFN0cmljdEVxdWFsLFxuICBub3REZWVwRXF1YWw6IGFzc2VydC5ub3REZWVwU3RyaWN0RXF1YWxcbn0pO1xuYXNzZXJ0LnN0cmljdC5zdHJpY3QgPSBhc3NlcnQuc3RyaWN0O1xuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChoYXNPd24uY2FsbChvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHx8XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVzY3JpcHRvcnNba2V5c1tpXV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9ycztcbiAgfTtcblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG52YXIga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2woJ3V0aWwucHJvbWlzaWZ5LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuXG5leHBvcnRzLnByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCAmJiBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdKSB7XG4gICAgdmFyIGZuID0gb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ1dGlsLnByb21pc2lmeS5jdXN0b21cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZm4oKSB7XG4gICAgdmFyIHByb21pc2VSZXNvbHZlLCBwcm9taXNlUmVqZWN0O1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgcHJvbWlzZVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBhcmdzLnB1c2goZnVuY3Rpb24gKGVyciwgdmFsdWUpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGZuLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgZm4sXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbClcbiAgKTtcbn1cblxuZXhwb3J0cy5wcm9taXNpZnkuY3VzdG9tID0ga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5T25SZWplY3RlZChyZWFzb24sIGNiKSB7XG4gIC8vIGAhcmVhc29uYCBndWFyZCBpbnNwaXJlZCBieSBibHVlYmlyZCAoUmVmOiBodHRwczovL2dvby5nbC90NUlTNk0pLlxuICAvLyBCZWNhdXNlIGBudWxsYCBpcyBhIHNwZWNpYWwgZXJyb3IgdmFsdWUgaW4gY2FsbGJhY2tzIHdoaWNoIG1lYW5zIFwibm8gZXJyb3JcbiAgLy8gb2NjdXJyZWRcIiwgd2UgZXJyb3Itd3JhcCBzbyB0aGUgY2FsbGJhY2sgY29uc3VtZXIgY2FuIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAgLy8gXCJ0aGUgcHJvbWlzZSByZWplY3RlZCB3aXRoIG51bGxcIiBvciBcInRoZSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIHVuZGVmaW5lZFwiLlxuICBpZiAoIXJlYXNvbikge1xuICAgIHZhciBuZXdSZWFzb24gPSBuZXcgRXJyb3IoJ1Byb21pc2Ugd2FzIHJlamVjdGVkIHdpdGggYSBmYWxzeSB2YWx1ZScpO1xuICAgIG5ld1JlYXNvbi5yZWFzb24gPSByZWFzb247XG4gICAgcmVhc29uID0gbmV3UmVhc29uO1xuICB9XG4gIHJldHVybiBjYihyZWFzb24pO1xufVxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgfVxuXG4gIC8vIFdlIERPIE5PVCByZXR1cm4gdGhlIHByb21pc2UgYXMgaXQgZ2l2ZXMgdGhlIHVzZXIgYSBmYWxzZSBzZW5zZSB0aGF0XG4gIC8vIHRoZSBwcm9taXNlIGlzIGFjdHVhbGx5IHNvbWVob3cgcmVsYXRlZCB0byB0aGUgY2FsbGJhY2sncyBleGVjdXRpb25cbiAgLy8gYW5kIHRoYXQgdGhlIGNhbGxiYWNrIHRocm93aW5nIHdpbGwgcmVqZWN0IHRoZSBwcm9taXNlLlxuICBmdW5jdGlvbiBjYWxsYmFja2lmaWVkKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBtYXliZUNiID0gYXJncy5wb3AoKTtcbiAgICBpZiAodHlwZW9mIG1heWJlQ2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsYXN0IGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbWF5YmVDYi5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgLy8gSW4gdHJ1ZSBub2RlIHN0eWxlIHdlIHByb2Nlc3MgdGhlIGNhbGxiYWNrIG9uIGBuZXh0VGlja2Agd2l0aCBhbGwgdGhlXG4gICAgLy8gaW1wbGljYXRpb25zIChzdGFjaywgYHVuY2F1Z2h0RXhjZXB0aW9uYCwgYGFzeW5jX2hvb2tzYClcbiAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmV0KSB7IHByb2Nlc3MubmV4dFRpY2soY2IsIG51bGwsIHJldCkgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlaikgeyBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNraWZ5T25SZWplY3RlZCwgcmVqLCBjYikgfSk7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2FsbGJhY2tpZmllZCwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNhbGxiYWNraWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpKTtcbiAgcmV0dXJuIGNhbGxiYWNraWZpZWQ7XG59XG5leHBvcnRzLmNhbGxiYWNraWZ5ID0gY2FsbGJhY2tpZnk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgeyBzcHJpdGVzaGVldCB9IGZyb20gJ0BlbGFzdGljL21ha2knO1xuaW1wb3J0IHNwcml0ZXMgZnJvbSAnQGVsYXN0aWMvbWFraS9kaXN0L3Nwcml0ZUAxLnBuZyc7XG5pbXBvcnQgeyBSR0JBSW1hZ2UgfSBmcm9tICcuL3V0aWxzL2ltYWdlJztcbmltcG9ydCB7IHJhbmRvbVBvaW50IH0gZnJvbSAnQHR1cmYvcmFuZG9tJztcbmltcG9ydCB7IHByb3BFYWNoIH0gZnJvbSAnQHR1cmYvbWV0YSc7XG5cbnZhciBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgY29udGFpbmVyOiAnbWFwJyxcbiAgc3R5bGU6ICdodHRwczovL3RpbGVzLm1hcHMuZWxhc3RpYy5jby9zdHlsZXMvZGFyay1tYXR0ZXIvc3R5bGUuanNvbicsXG59KTtcblxuY29uc3Qgc3ByaXRlRGF0YSA9IHNwcml0ZXNoZWV0WycxJ107XG5jb25zdCBpY29ucyA9IE9iamVjdC5rZXlzKHNwcml0ZURhdGEpLmZpbHRlcihzcHJpdGUgPT4ge1xuICByZXR1cm4gc3ByaXRlLmVuZHNXaXRoKCctMTUnKTtcbn0pO1xuY29uc3QgcG9pbnRzID0gcmFuZG9tUG9pbnQoMjAwMCk7XG5wcm9wRWFjaChwb2ludHMsIChjdXIsIGkpID0+IHtcbiAgY3VyLmljb24gPSBpY29uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaWNvbnMubGVuZ3RoLTEpKV07XG4gIGN1ci5jb2xvciA9XG4gICAgJyMnICtcbiAgICBNYXRoLnJhbmRvbSgpXG4gICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAuc3Vic3RyKC02KTtcbiAgY3VyLm9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSAqICgzNjAgLSAwKSArIDA7XG4gIGN1ci5zaXplID0gTWF0aC5yYW5kb20oKSAqICgyLjUgLSAwLjUpICsgMC41O1xufSk7XG5cbm1hcC5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5vbmxvYWQgPSAoZWwpID0+IHtcbiAgICBjb25zdCBpbWFnZURhdGEgPSBnZXRJbWFnZURhdGEoZWwuY3VycmVudFRhcmdldCk7XG4gICAgZm9yIChjb25zdCBpZCBpbiBzcHJpdGVEYXRhKSB7XG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHgsIHksIHNkZiwgcGl4ZWxSYXRpbyB9ID0gc3ByaXRlRGF0YVtpZF07XG4gICAgICBjb25zdCBkYXRhID0gbmV3IFJHQkFJbWFnZSh7IHdpZHRoLCBoZWlnaHQgfSk7XG4gICAgICBSR0JBSW1hZ2UuY29weShpbWFnZURhdGEsIGRhdGEsIHsgeCwgeSB9LCB7IHg6IDAsIHk6IDAgfSwgeyB3aWR0aCwgaGVpZ2h0IH0pO1xuICAgICAgLy8gcmVzdWx0W2lkXSA9IHsgZGF0YSwgcGl4ZWxSYXRpbywgc2RmIH07XG4gICAgICBtYXAuYWRkSW1hZ2UoaWQsIGRhdGEsICB7IHBpeGVsUmF0aW8sIHNkZiB9KTtcbiAgICB9XG4gIH07XG4gIGltYWdlLnNyYyA9IHNwcml0ZXM7XG5cbiAgbWFwLmFkZExheWVyKHtcbiAgICBpZDogJ3BvaW50cycsXG4gICAgdHlwZTogJ3N5bWJvbCcsXG4gICAgc291cmNlOiB7XG4gICAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgICBkYXRhOiBwb2ludHMsXG4gICAgfSxcbiAgICBsYXlvdXQ6IHtcbiAgICAgICdpY29uLWltYWdlJzogWydnZXQnLCAnaWNvbiddLFxuICAgICAgJ2ljb24tc2l6ZSc6IFsnZ2V0JywgJ3NpemUnXSxcbiAgICAgICdpY29uLXJvdGF0ZSc6IFsnZ2V0JywgJ29yaWVudGF0aW9uJ10sXG4gICAgICAnaWNvbi1hbGxvdy1vdmVybGFwJzogdHJ1ZVxuICAgIH0sXG4gICAgcGFpbnQ6IHtcbiAgICAgICdpY29uLWNvbG9yJzogWydnZXQnLCAnY29sb3InXSxcbiAgICB9LFxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBnZXRJbWFnZURhdGEoaW1nKSB7XG4gIGNvbnN0IGNhbnZhcyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBjcmVhdGUgY2FudmFzIDJkIGNvbnRleHQnKTtcbiAgfVxuICBjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG4gIHJldHVybiBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQpO1xufVxuIiwiLy8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL21hcGJveC9tYXBib3gtZ2wtanMvYmxvYi9tYXN0ZXIvc3JjL3V0aWwvaW1hZ2UuanNcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2UoaW1hZ2UsIHt3aWR0aCwgaGVpZ2h0fSwgY2hhbm5lbHMsIGRhdGEpIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogY2hhbm5lbHMpO1xuICAgIH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlcik7XG4gICAgfSBlbHNlIGlmIChkYXRhLmxlbmd0aCAhPT0gd2lkdGggKiBoZWlnaHQgKiBjaGFubmVscykge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbWlzbWF0Y2hlZCBpbWFnZSBzaXplJyk7XG4gICAgfVxuICAgIGltYWdlLndpZHRoID0gd2lkdGg7XG4gICAgaW1hZ2UuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGltYWdlLmRhdGEgPSBkYXRhO1xuICAgIHJldHVybiBpbWFnZTtcbn1cblxuZnVuY3Rpb24gcmVzaXplSW1hZ2UoaW1hZ2UsIHt3aWR0aCwgaGVpZ2h0fSwgY2hhbm5lbHMpIHtcbiAgICBpZiAod2lkdGggPT09IGltYWdlLndpZHRoICYmIGhlaWdodCA9PT0gaW1hZ2UuaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdJbWFnZSA9IGNyZWF0ZUltYWdlKHt9LCB7d2lkdGgsIGhlaWdodH0sIGNoYW5uZWxzKTtcblxuICAgIGNvcHlJbWFnZShpbWFnZSwgbmV3SW1hZ2UsIHt4OiAwLCB5OiAwfSwge3g6IDAsIHk6IDB9LCB7XG4gICAgICAgIHdpZHRoOiBNYXRoLm1pbihpbWFnZS53aWR0aCwgd2lkdGgpLFxuICAgICAgICBoZWlnaHQ6IE1hdGgubWluKGltYWdlLmhlaWdodCwgaGVpZ2h0KVxuICAgIH0sIGNoYW5uZWxzKTtcblxuICAgIGltYWdlLndpZHRoID0gd2lkdGg7XG4gICAgaW1hZ2UuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGltYWdlLmRhdGEgPSBuZXdJbWFnZS5kYXRhO1xufVxuXG5mdW5jdGlvbiBjb3B5SW1hZ2Uoc3JjSW1nLCBkc3RJbWcsIHNyY1B0LCBkc3RQdCwgc2l6ZSwgY2hhbm5lbHMpIHtcbiAgICBpZiAoc2l6ZS53aWR0aCA9PT0gMCB8fCBzaXplLmhlaWdodCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZHN0SW1nO1xuICAgIH1cblxuICAgIGlmIChzaXplLndpZHRoID4gc3JjSW1nLndpZHRoIHx8XG4gICAgICAgIHNpemUuaGVpZ2h0ID4gc3JjSW1nLmhlaWdodCB8fFxuICAgICAgICBzcmNQdC54ID4gc3JjSW1nLndpZHRoIC0gc2l6ZS53aWR0aCB8fFxuICAgICAgICBzcmNQdC55ID4gc3JjSW1nLmhlaWdodCAtIHNpemUuaGVpZ2h0KSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2Ugc291cmNlIGNvb3JkaW5hdGVzIGZvciBpbWFnZSBjb3B5Jyk7XG4gICAgfVxuXG4gICAgaWYgKHNpemUud2lkdGggPiBkc3RJbWcud2lkdGggfHxcbiAgICAgICAgc2l6ZS5oZWlnaHQgPiBkc3RJbWcuaGVpZ2h0IHx8XG4gICAgICAgIGRzdFB0LnggPiBkc3RJbWcud2lkdGggLSBzaXplLndpZHRoIHx8XG4gICAgICAgIGRzdFB0LnkgPiBkc3RJbWcuaGVpZ2h0IC0gc2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBkZXN0aW5hdGlvbiBjb29yZGluYXRlcyBmb3IgaW1hZ2UgY29weScpO1xuICAgIH1cblxuICAgIGNvbnN0IHNyY0RhdGEgPSBzcmNJbWcuZGF0YTtcbiAgICBjb25zdCBkc3REYXRhID0gZHN0SW1nLmRhdGE7XG5cbiAgICBhc3NlcnQoc3JjRGF0YSAhPT0gZHN0RGF0YSk7XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemUuaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgY29uc3Qgc3JjT2Zmc2V0ID0gKChzcmNQdC55ICsgeSkgKiBzcmNJbWcud2lkdGggKyBzcmNQdC54KSAqIGNoYW5uZWxzO1xuICAgICAgICBjb25zdCBkc3RPZmZzZXQgPSAoKGRzdFB0LnkgKyB5KSAqIGRzdEltZy53aWR0aCArIGRzdFB0LngpICogY2hhbm5lbHM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZS53aWR0aCAqIGNoYW5uZWxzOyBpKyspIHtcbiAgICAgICAgICAgIGRzdERhdGFbZHN0T2Zmc2V0ICsgaV0gPSBzcmNEYXRhW3NyY09mZnNldCArIGldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRzdEltZztcbn1cblxuZXhwb3J0IGNsYXNzIEFscGhhSW1hZ2Uge1xuXG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgZGF0YSkge1xuICAgICAgICBjcmVhdGVJbWFnZSh0aGlzLCBzaXplLCAxLCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXNpemUoc2l6ZSkge1xuICAgICAgICByZXNpemVJbWFnZSh0aGlzLCBzaXplLCAxKTtcbiAgICB9XG5cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBbHBoYUltYWdlKHt3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmhlaWdodH0sIG5ldyBVaW50OEFycmF5KHRoaXMuZGF0YSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb3B5KHNyY0ltZywgZHN0SW1nLCBzcmNQdCwgZHN0UHQsIHNpemUpIHtcbiAgICAgICAgY29weUltYWdlKHNyY0ltZywgZHN0SW1nLCBzcmNQdCwgZHN0UHQsIHNpemUsIDEpO1xuICAgIH1cbn1cblxuLy8gTm90IHByZW11bHRpcGxpZWQsIGJlY2F1c2UgSW1hZ2VEYXRhIGlzIG5vdCBwcmVtdWx0aXBsaWVkLlxuLy8gVU5QQUNLX1BSRU1VTFRJUExZX0FMUEhBX1dFQkdMIG11c3QgYmUgdXNlZCB3aGVuIHVwbG9hZGluZyB0byBhIHRleHR1cmUuXG5leHBvcnQgY2xhc3MgUkdCQUltYWdlIHtcblxuICAgIC8vIGRhdGEgbXVzdCBiZSBhIFVpbnQ4QXJyYXkgaW5zdGVhZCBvZiBVaW50OENsYW1wZWRBcnJheSBiZWNhdXNlIHRleEltYWdlMkQgZG9lcyBub3RcbiAgICAvLyBzdXBwb3J0IFVpbnQ4Q2xhbXBlZEFycmF5IGluIGFsbCBicm93c2Vyc1xuXG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgZGF0YSkge1xuICAgICAgICBjcmVhdGVJbWFnZSh0aGlzLCBzaXplLCA0LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXNpemUoc2l6ZSkge1xuICAgICAgICByZXNpemVJbWFnZSh0aGlzLCBzaXplLCA0KTtcbiAgICB9XG5cbiAgICByZXBsYWNlKGRhdGEsIGNvcHkpIHtcbiAgICAgICAgaWYgKGNvcHkpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUkdCQUltYWdlKHt3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmhlaWdodH0sIG5ldyBVaW50OEFycmF5KHRoaXMuZGF0YSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb3B5KHNyY0ltZywgZHN0SW1nLCBzcmNQdCwgZHN0UHQsIHNpemUpIHtcbiAgICAgICAgY29weUltYWdlKHNyY0ltZywgZHN0SW1nLCBzcmNQdCwgZHN0UHQsIHNpemUsIDQpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=