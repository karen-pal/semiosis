const nearley = require("nearley");
const grammar = require("./colNat.js");

//cli
const readlineSync = require('readline-sync');
const  chalk  = require('chalk');

console.log(chalk)
let parser; 
/*
 *
 *
 *

    function([data]) {
            if (data === "rojo") {
            return {
                hue: 0,
                saturation: 100,
                lightness: 50
            };
            } else if ( data === "azul") {

                return {
                    hue: 240,
                    saturation: 100,
                    lightness: 50
                };
            }
            else {

                return {
                    hue: 120,
                    saturation: 100,
                    lightness: 50
                };
            }
        }
 * 
 *
 * */
// Read color from console
while (true) { 
    const color = readlineSync.question('Please write a : \n');
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar),{ keepHistory: true });
        parser.feed(color);
        console.log(">: ", parser.results);
        console.log(parser.results);
}
