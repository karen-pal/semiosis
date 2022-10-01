const Canvas = require('canvas')
const tf = require('@tensorflow/tfjs')
const Jimp = require('jimp')
const chalk  = require('chalk');
const fs = require('fs')
const path = require('path')

const translate3 = require('@vitalets/google-translate-api');





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

function getX (angle) {
  return -Math.sin(angle + Math.PI)
}

function getY (angle) {
  return Math.cos(angle + Math.PI)
}

function stringToSpanishWord(word,reason) {
      translate3(word, {"to": "es"}).then((res) => {
      //translate(word, "auto", "es").then((res) => {
            console.log(reason + ":" + res.text );
        }).catch(console.log);

        }


const clock = async function (ctx, w, h) {
  let x, y, i
  let counts = {"BLACK":0,"WHITE":0, "TOTAL":0};
  let data = await loadImage("mary.jpeg", w, h) //<----
  let word;
  for ( i = 0; i< data.bitmap.width; i++) {
      let pixColor;
      for ( j=0; j<data.bitmap.height;j++){
          pixColor = Jimp.intToRGBA(data.getPixelColor(i,j));
          let colorasd = "rgba("+ pixColor.r.toString()+","+pixColor.g.toString()+","+pixColor.b.toString()+","+".1)";
          //console.log(colorasd);
          ctx.fillStyle = colorasd;
          ctx.fillRect(pixColor.r*i, pixColor.r*j, 20, 200)
          ctx.fillRect(pixColor.g*i, pixColor.g*j, 20, 200)
          ctx.fillRect(pixColor.b*i, pixColor.b*j, 20, 200)
          for (let color of COLORS) {
              //console.log(color);
              //console.log(pixColor);
              //console.log(color.name, pixColor.r === color.r , pixColor.r, color.r);
              //process.stdout.write(vec3ToString(pixColor.r,pixColor.g,pixColor.b));
              if (inRange(pixColor.r, color.r[0],color.r[1]) && inRange(pixColor.g, color.g[0],color.g[1]) && inRange(pixColor.b, color.b[0],color.b[1])){
                  counts[color.name]++;
              }
              counts["TOTAL"]++;
          }
  }
      word = String.fromCharCode(pixColor.r*i) //;+  String.fromCharCode(pixColor.g*i)+String.fromCharCode(pixColor.b*i);
      if ( i%350 === 0 && i!==0) {
          stringToSpanishWord(word, "R");
          word = String.fromCharCode(pixColor.g*i)
          stringToSpanishWord(word, "G");
          word = String.fromCharCode(pixColor.b*i)
          stringToSpanishWord(word, "B");


          word = String.fromCharCode(pixColor.r*i) + String.fromCharCode(pixColor.g*i)+String.fromCharCode(pixColor.b*i);
          stringToSpanishWord(word, "SUMA");

        }
       }
      console.log("...");
      console.log(counts["BLACK"],counts["WHITE"],counts["TOTAL"]);
      console.log(String.fromCharCode(counts["BLACK"]),String.fromCharCode(counts["WHITE"]),String.fromCharCode(counts["TOTAL"]));
      word = String.fromCharCode(counts["BLACK"])
      stringToSpanishWord(word, "BLACK");
      word = String.fromCharCode(counts["WHITE"])
      stringToSpanishWord(word, "WHITE");
      word = String.fromCharCode(counts["TOTAL"])
      stringToSpanishWord(word, "TOTAL");
      //translatte(word, {"to": "es"}).then((res) => {
      //  if (res.text !== word){
      //      console.log("BLACK: ", res.text );
      //  }
      //  }).catch(console.log);

}

module.exports = clock
const render = async function (){

    if (require.main === module) {
        let w = 878;//1080;
        let h = 1024;//720;
      const canvas = Canvas.createCanvas(w, h)
      const ctx = canvas.getContext('2d')

      await clock(ctx,w,h)

      canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'clock9.png')))
    }

}
render();
