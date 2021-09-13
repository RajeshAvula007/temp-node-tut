//CommonJS, every file in node is module (by default)
//Modules - Encapsulated Code (omly share minimum)

const names = require('./4-names.js');
const sayHi = require('./5-utils.js');
const data = require('./6-alternative-flavor'); 
require('./7-mind-grenade');



sayHi('susan');
sayHi(names.john);
sayHi(names.peter);