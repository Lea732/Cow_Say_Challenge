
const infoImport = require('./information.js');
const cowsay = require("cowsay");


console.log(cowsay.say({ text: `Hi, my name is ${infoImport.name} and i'm from ${infoImport.campus} in remote` }));
