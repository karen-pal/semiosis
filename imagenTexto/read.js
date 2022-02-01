const tf = require('@tensorflow/tfjs')
const Jimp = require('jimp')
const chalk  = require('chalk');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
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
    let sizes = [{"w":80,"h":10},{"w":300,"h":400}];
    let chars = ["█", "▓","░","▒"];
    let chars2 = ["█"];
    for (let item of sizes) {
        let data = await loadImage('escher.jpeg', item.w, item.h);

        //console.log(data);
        console.log("\n\n");
        for (let i = 0; i< data.bitmap.width; i++) {
            for (let j=0; j<data.bitmap.height;j++){
                let pixColor = Jimp.intToRGBA(data.getPixelColor(i,j));
                let colorify = chalk.rgb(pixColor.r,pixColor.g,pixColor.b);
                process.stdout.write(colorify(choose(chars)));
                if (j=== data.bitmap.height-1){
                    console.log("\n");
                }
                //console.log(colorify("▓▓▓"));
                //console.log(pixColor);
            }
        } 

    }
}

imageResult();
//let img = await loadImage('./escher.jpeg');
//console.log(img);
module.exports = { loadImage }
