/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const contactContentDiv = document.createElement('div');
    contactContentDiv.classList.add('contact-content');
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Contact Us'

    const addressHeader = document.createElement('h4');
    addressHeader.textContent = 'Our address:';
    const address = document.createElement('p');
    address.textContent = '55 Albert St. , 12356 Jacksonville, Florida, FL';
    
    const emailHeader = document.createElement('h4');
    emailHeader.textContent = 'Our email:';
    const email = document.createElement('p');
    email.textContent = 'bestnoodles@realemail.yumm';
    
    const phoneHeader = document.createElement('h4');
    phoneHeader.textContent = 'Our phone number:';
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '00111 - 125125125';

    contactContentDiv.appendChild(contactHeader);
    contactContentDiv.appendChild(addressHeader);
    contactContentDiv.appendChild(address);
    contactContentDiv.appendChild(emailHeader);
    contactContentDiv.appendChild(email);
    contactContentDiv.appendChild(phoneHeader);
    contactContentDiv.appendChild(phoneHeader);
    contactContentDiv.appendChild(phoneNumber);

    return contactContentDiv;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQSw2QkFBZSxzQ0FBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250YWN0Q29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RDb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcydcblxuICAgIGNvbnN0IGFkZHJlc3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGFkZHJlc3NIZWFkZXIudGV4dENvbnRlbnQgPSAnT3VyIGFkZHJlc3M6JztcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnNTUgQWxiZXJ0IFN0LiAsIDEyMzU2IEphY2tzb252aWxsZSwgRmxvcmlkYSwgRkwnO1xuICAgIFxuICAgIGNvbnN0IGVtYWlsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBlbWFpbEhlYWRlci50ZXh0Q29udGVudCA9ICdPdXIgZW1haWw6JztcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9ICdiZXN0bm9vZGxlc0ByZWFsZW1haWwueXVtbSc7XG4gICAgXG4gICAgY29uc3QgcGhvbmVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHBob25lSGVhZGVyLnRleHRDb250ZW50ID0gJ091ciBwaG9uZSBudW1iZXI6JztcbiAgICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9ICcwMDExMSAtIDEyNTEyNTEyNSc7XG5cbiAgICBjb250YWN0Q29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcbiAgICBjb250YWN0Q29udGVudERpdi5hcHBlbmRDaGlsZChhZGRyZXNzSGVhZGVyKTtcbiAgICBjb250YWN0Q29udGVudERpdi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBjb250YWN0Q29udGVudERpdi5hcHBlbmRDaGlsZChlbWFpbEhlYWRlcik7XG4gICAgY29udGFjdENvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgIGNvbnRhY3RDb250ZW50RGl2LmFwcGVuZENoaWxkKHBob25lSGVhZGVyKTtcbiAgICBjb250YWN0Q29udGVudERpdi5hcHBlbmRDaGlsZChwaG9uZUhlYWRlcik7XG4gICAgY29udGFjdENvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RDb250ZW50RGl2O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==