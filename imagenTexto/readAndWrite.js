const tf = require('@tensorflow/tfjs')
const Jimp = require('jimp')
const chalk  = require('chalk');
const fs = require('fs')
const path = require('path')
const Canvas = require('canvas')


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
const imageResult = async function(ctx) { 
  //ctx.clearRect(0, 0, 320, 320)

  //#ctx.translate(160, 160)
  //#ctx.beginPath()
  //#ctx.lineWidth = 14
  //#ctx.strokeStyle = '#325FA2'
  //#ctx.fillStyle = '#eeeeee'
  //#ctx.arc(0, 0, 142, 0, Math.PI * 2, true)
  //#ctx.stroke()
  //#ctx.fill()

    //let sizes = [{"w":100,"h":300},{"w":300,"h":600},{"w":10,"h":190}];
    let sizes = [{"w":100,"h":300}];
    let chars = ["█", "▓","░","▒"];
    let chars2 = ["█"];
              ctx.beginPath()
    for (let item of sizes) {
        let counts = {"BLACK":0,"WHITE":0, "TOTAL":0};
        let data = await loadImage('escher.jpeg', item.w, item.h);
        //let data = await loadImage('hydra.png', item.w, item.h);
        //let data = await loadImage('slave.jpg', item.w, item.h);

        //console.log(data);
        //console.log("\n\n");
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
                let colorasd = "rgba("+ pixColor.r.toString()+","+pixColor.g.toString()+","+pixColor.b.toString()+","+"1)";
                console.log(colorasd);
                ctx.fillStyle = colorasd;
                ctx.fillRect(10, 10, 1300, 1300)
        const lingrad = ctx.createLinearGradient(i, 0, 0, j+150)
        lingrad.addColorStop(0, '#00ABEB')
        lingrad.addColorStop(0.5, '#fff')
        lingrad.addColorStop(0.5, '#26C000')
        lingrad.addColorStop(1, '#fff')

        const lingrad2 = ctx.createLinearGradient(0, i+50, 0, j+95)
        lingrad2.addColorStop(0.5, '#000')
        lingrad2.addColorStop(1, 'rgba(0,0,0,0)')

        // assign gradients to fill and stroke styles
        ctx.fillStyle = lingrad
        ctx.strokeStyle = lingrad2

        // draw shapes
        ctx.fillRect(i*10, i*10, j*130, j*130)
        ctx.strokeRect(j+50, 50, 50, 50)

                return;
             // ctx.arc(0, 0, 142, 0, Math.PI * 2, true)
             // ctx.stroke()
             // ctx.fill()
             //   ctx.restore()

                //process.stdout.write(colorify(choose(chars)));
                //if (j=== data.bitmap.height-1){
                //    console.log("\n");
                //}
                //console.log(colorify("▓▓▓"));
                //console.log(pixColor);
            }
        } 
        //console.log("\n");
        //console.log(item);
        //console.log(counts);
        //console.log(String.fromCharCode(counts["BLACK"]),String.fromCharCode(counts["WHITE"]),String.fromCharCode(counts["TOTAL"]));
        ////console.log(vec3ToString(counts["BLACK"],counts["WHITE"],counts["TOTAL"]))
        //console.log("\n");

    }

}

//let img = await loadImage('./escher.jpeg');
//console.log(img);
//module.exports = { loadImage }
//if (require.main === module) {
//  const canvas = Canvas.createCanvas(1320, 1320)
//  const ctx = canvas.getContext('2d')
//
//  imageResult(ctx);
//
//  canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'clock.png')))
//    canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'gradients.png')))
//
//}
  const canvas = Canvas.createCanvas(1320, 1320)
  const ctx = canvas.getContext('2d')

  await imageResult(ctx);

  canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'clock.png')))
