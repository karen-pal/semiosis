const nearley = require("nearley");
const grammar = require("./csscolor.js");

//cli
const readlineSync = require('readline-sync');
const  chalk  = require('chalk');
const Jimp = require('jimp')
const loadImage = async function(path, width, height) {
  let img = await Jimp.read(path)
  img.resize(width, height)

  const p = []

  img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
    p.push(this.bitmap.data[idx + 0])
    p.push(this.bitmap.data[idx + 1])
    p.push(this.bitmap.data[idx + 2])
  })

  return img;//tf.tensor3d(p, [400, 300, 3]).reshape([1, 400, 300, 3])
}

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
//console.log(chalk)
let parser; 

let colorArr = new(Array);
let symbols2 = ["█", "▓","░","▒", "➩","➫","➭","⥳","⍇","⤆","⥣","⟰","⇯"];
let symbols = ["█"];
// Read color from console
const reInterpret = async function() {
let data = await loadImage('escher.jpeg', 100, 300);
while (true) { 
    const color = readlineSync.question('Please write a css color: \n');
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar),{ keepHistory: true });
    try {
        parser.feed(color);
        let res = parser.results[0][0];
        let colorify;
        console.log("type: ", res["type"]);
        console.log("is draw_inst: ",res["type"]==="draw_inst");
        if (res["type"] === "hex") {
            colorify = chalk.hex(res["data"]);
        } else  if (res["type"]==="rgb"){
            console.log("before push :",colorArr);
            colorify = chalk.rgb(res["r"],res["g"],res["b"]);
            colorArr.push([res["r"],res["g"],res["b"]]);
            console.log("after push :",colorArr);
        } else  if (res["type"]==="draw_inst"){
            console.log("total :", colorArr);
            console.log("length :", colorArr.length);
            //colorArr.forEach( function(element){
            //    let r = element[0];
            //    let g = element[1];
            //    let b = element[2];
            //    colorify = chalk.rgb(r,g,b);
            //    let item1 = symbols[Math.floor(Math.random()*symbols.length)].repeat(Math.random() * 5+1);
            //    let item2 = symbols[Math.floor(Math.random()*symbols.length)].repeat(Math.random() *5+2);
            //    let item3 = symbols[Math.floor(Math.random()*symbols.length)].repeat(Math.random()*4+3);
            //    console.log(colorify(item1+item2+item3+"\n"));}
            //);
            
            let k = 0;
            for (let i = 0; i< data.bitmap.width; i++) {
                for (let j=0; j<data.bitmap.height;j++){
                    let pixColor = Jimp.intToRGBA(data.getPixelColor(i,j));
                    let colorify = chalk.rgb(colorArr[k][0],pixColor.g,pixColor.b);//colorArr[k][2]);
                    process.stdout.write(colorify(choose(symbols)));
                    if (j=== data.bitmap.height-1){
                        console.log("\n");
                    }
                    //console.log(colorify("▓▓▓"));
                    //console.log(pixColor);
                }
                k = (k+1) % colorArr.length;
            } 




        } else {
            colorify = chalk.rgb(255,0,0)
        }
        //console.log("entero: ", parser.results);
        if (res["type"]!=="draw_inst"){
            console.log(colorify(res["type"]));
            console.log();
        }
    } catch(parseError) {
        console.log(parseError);
        console.log("{!!!} Error at character " + parseError.offset)
    }
}
}
reInterpret();
