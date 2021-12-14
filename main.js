/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomepage\": () => (/* binding */ createHomepage),\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu),\n/* harmony export */   \"createContact\": () => (/* binding */ createContact)\n/* harmony export */ });\nconst createHomepage = () => {\n    let content = document.querySelector('#content')\n\n    let headerTitle = document.createElement('div')\n    headerTitle.classList.add('header-title')\n    let mainHeader = document.createElement('h1')\n    mainHeader.textContent = 'elRestaurante'\n    headerTitle.appendChild(mainHeader)\n    \n    let mainInfo = document.createElement('div')\n    mainInfo.classList.add('main-info')\n    let mainText = document.createElement('div')\n    mainText.classList.add('main-text')\n    let subHeader = document.createElement('h2')\n    subHeader.textContent = 'The Best Restaurant in Town'\n    mainText.appendChild(subHeader)\n    mainInfo.appendChild(mainText)\n    \n    let img = document.createElement('div')\n    img.classList.add('img-overlay')\n    let darken = document.createElement('div')\n    darken.classList.add('darken')\n    let booking = document.createElement('p')\n    booking.textContent = 'Book Today!'\n    darken.appendChild(booking)\n    img.appendChild(darken)\n    mainInfo.appendChild(img)\n    \n    content.append(headerTitle, mainInfo)\n}\n\nconst createMenu = () => {\n\n    let content = document.querySelector('#content')\n\n\n    let menuHeader = document.createElement('h2')\n    menuHeader.classList.add('menu-title')\n    menuHeader.textContent = 'Menu'\n    let menuPara = document.createElement('para')\n    menuPara.textContent = `Each day, before midday we upload the day's menus, it's always nice to whet your appetite before you even get to us. We also add in more detail about each dish in case you need to check out the ingredients for allergen information.`\n\n    let row1 = document.createElement('div')\n    row1.classList.add('menu-row')\n    let item1 = document.createElement('div')\n    item1.classList.add('menu-item')\n    let text1 = document.createElement('div')\n    text1.classList.add('menu-text')\n    let title1 = document.createElement('h3')\n    title1.textContent = 'Pizza'\n    let para1 = document.createElement('p')\n    para1.textContent = 'pizza is very good'\n    text1.append(title1, para1)\n    let pricediv1 = document.createElement('div')\n    pricediv1.classList.add('menu-price')\n    let price1 = document.createElement('p')\n    price1.textContent = '12.0'\n    pricediv1.appendChild(price1)\n    item1.append(text1, price1)\n\n    let item2 = document.createElement('div')\n    item2.classList.add('menu-item')\n    let text2 = document.createElement('div')\n    text2.classList.add('menu-text')\n    let title2 = document.createElement('h3')\n    title2.textContent = 'Burger'\n    let para2 = document.createElement('p')\n    para2.textContent = 'burger is very good'\n    text2.append(title2, para2)\n    let pricediv2 = document.createElement('div')\n    pricediv2.classList.add('menu-price')\n    let price2 = document.createElement('p')\n    price2.textContent = '14.0'\n    pricediv2.appendChild(price2)\n    item2.append(text2, price2)\n\n    row1.append(item1, item2)\n\n    content.append(menuHeader, menuPara, row1)\n\n\n    let row2 = document.createElement('div')\n    row2.classList.add('menu-row')\n    item1 = document.createElement('div')\n    item1.classList.add('menu-item')\n    text1 = document.createElement('div')\n    text1.classList.add('menu-text')\n    title1 = document.createElement('h3')\n    title1.textContent = 'Steak'\n    para1 = document.createElement('p')\n    para1.textContent = 'steak is very good'\n    text1.append(title1, para1)\n    pricediv1 = document.createElement('div')\n    pricediv1.classList.add('menu-price')\n    price1 = document.createElement('p')\n    price1.textContent = '18.0'\n    pricediv1.appendChild(price1)\n    item1.append(text1, price1)\n\n    item2 = document.createElement('div')\n    item2.classList.add('menu-item')\n    text2 = document.createElement('div')\n    text2.classList.add('menu-text')\n    title2 = document.createElement('h3')\n    title2.textContent = 'Pasta'\n    para2 = document.createElement('p')\n    para2.textContent = 'pasta is very good'\n    text2.append(title2, para2)\n    pricediv2 = document.createElement('div')\n    pricediv2.classList.add('menu-price')\n    price2 = document.createElement('p')\n    price2.textContent = '13.0'\n    pricediv2.appendChild(price2)\n    item2.append(text2, price2)\n\n    row2.append(item1, item2)\n    content.appendChild(row2)\n\n\n\n\n    let row3 = document.createElement('div')\n    row3.classList.add('menu-row')\n    item1 = document.createElement('div')\n    item1.classList.add('menu-item')\n    text1 = document.createElement('div')\n    text1.classList.add('menu-text')\n    title1 = document.createElement('h3')\n    title1.textContent = 'Sea Bass'\n    para1 = document.createElement('p')\n    para1.textContent = 'sea bass is very good'\n    text1.append(title1, para1)\n    pricediv1 = document.createElement('div')\n    pricediv1.classList.add('menu-price')\n    price1 = document.createElement('p')\n    price1.textContent = '16.0'\n    pricediv1.appendChild(price1)\n    item1.append(text1, price1)\n\n    item2 = document.createElement('div')\n    item2.classList.add('menu-item')\n    text2 = document.createElement('div')\n    text2.classList.add('menu-text')\n    title2 = document.createElement('h3')\n    title2.textContent = 'Curry'\n    para2 = document.createElement('p')\n    para2.textContent = 'curry is very good'\n    text2.append(title2, para2)\n    pricediv2 = document.createElement('div')\n    pricediv2.classList.add('menu-price')\n    price2 = document.createElement('p')\n    price2.textContent = '12.0'\n    pricediv2.appendChild(price2)\n    item2.append(text2, price2)\n\n    row3.append(item1, item2)\n    content.appendChild(row3)\n    \n    \n}\n\nconst createContact = () => {\n    \n    let content = document.querySelector('#content')\n    \n    let hoursDiv = document.createElement('div')\n    let openingHours = document.createElement('h2')\n    openingHours.classList.add('menu-title')\n    openingHours.textContent = 'Opening Hours'\n\n    let wedHours = document.createElement('p')\n    wedHours.classList.add('test')\n    wedHours.textContent = 'Wednesday: 12:00 - 22:00'\n    let thurHours = document.createElement('p')\n    thurHours.classList.add('test')\n    thurHours.textContent = 'Thursday: 12:00 - 22:00'\n    let friHours = document.createElement('p')\n    friHours.classList.add('test')\n    friHours.textContent = 'Friday: 12:00 - 24:00'\n    let satHours = document.createElement('p')\n    satHours.classList.add('test')\n    satHours.textContent = 'Saturday: 12:00 - 24:00'\n    let sunHours = document.createElement('p')\n    sunHours.classList.add('test')\n    sunHours.textContent = 'Sunday: 12:00 - 24:00'\n\n    hoursDiv.append(openingHours, wedHours, thurHours, friHours, satHours, sunHours)\n\n\n    let contactHeader = document.createElement('h2')\n    contactHeader.classList.add('menu-title')\n    contactHeader.textContent = 'Contact Us'\n    \n    let contactNo = document.createElement('p')\n    contactNo.classList.add('test')\n    contactNo.textContent = 'Contact Number: +456 859 475 1'\n    let contactEmail = document.createElement('p')\n    contactEmail.classList.add('test')\n    contactEmail.textContent = 'Email: randomEmail@random.com'\n    let contactDiv = document.createElement('div')\n    contactDiv.append(contactHeader, contactNo, contactEmail)\n\n    content.append(hoursDiv, contactDiv)\n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaraunt-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\n\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createContact)();\n\n\n//# sourceURL=webpack://restaraunt-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;