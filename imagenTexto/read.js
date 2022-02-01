const tf = require('@tensorflow/tfjs')
const Jimp = require('jimp')
const chalk  = require('chalk');


const COLORS = [
    {"name":"BLACK","r":[0,20],"g":[0,20],"b":[0,20]},
    {"name":"WHITE","r":[240,255],"g":[240,255],"b":[240,255]},
]

const inRange = (value,min,max) => (value<=max && min<=value);
const vec3ToString = (r,g,b) => (String.fromCharCode(r),String.fromCharCode(g),String.fromCharCode(b));

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

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
const imageResult = async function() { 
    let sizes = [{"w":100,"h":300},{"w":300,"h":600},{"w":10,"h":190}];
    let chars = ["█", "▓","░","▒"];
    let chars2 = ["█"];
    for (let item of sizes) {
        let counts = {"BLACK":0,"WHITE":0, "TOTAL":0};
        let data = await loadImage('escher.jpeg', item.w, item.h);
        //let data = await loadImage('hydra.png', item.w, item.h);
        //let data = await loadImage('slave.jpg', item.w, item.h);

        //console.log(data);
        console.log("\n\n");
        for (let i = 0; i< data.bitmap.width; i++) {
            for (let j=0; j<data.bitmap.height;j++){
                let pixColor = Jimp.intToRGBA(data.getPixelColor(i,j));
                for (let color of COLORS) {
                    //console.log(color);
                    //console.log(pixColor);
                    //console.log(color.name, pixColor.r === color.r , pixColor.r, color.r);
                    //process.stdout.write(vec3ToString(pixColor.r,pixColor.g,pixColor.b));
                    if (inRange(pixColor.r, color.r[0],color.r[1]) && inRange(pixColor.g, color.g[0],color.g[1]) && inRange(pixColor.b, color.b[0],color.b[1])){
                        counts[color.name]++;
                    }
                }
                counts["TOTAL"]++;
                //let colorify = chalk.rgb(pixColor.r,pixColor.g,pixColor.b);
                //process.stdout.write(colorify(choose(chars)));
                //if (j=== data.bitmap.height-1){
                //    console.log("\n");
                //}
                //console.log(colorify("▓▓▓"));
                //console.log(pixColor);
            }
        } 
        console.log("\n");
        console.log(item);
        console.log(counts);
        console.log(String.fromCharCode(counts["BLACK"]),String.fromCharCode(counts["WHITE"]),String.fromCharCode(counts["TOTAL"]));
        //console.log(vec3ToString(counts["BLACK"],counts["WHITE"],counts["TOTAL"]))
        console.log("\n");

    }
}

imageResult();
//let img = await loadImage('./escher.jpeg');
//console.log(img);
module.exports = { loadImage }
