const Canvas = require('canvas')


const fs = require('fs')
const path = require('path')
const canvas = Canvas.createCanvas(200, 200)
const ctx = canvas.getContext('2d', { pixelFormat: 'A8' })

// Matches the "fillStyle" browser test, made by using alpha fillStyle value
const palette = new Uint8ClampedArray(1025 * 4) //originally 37 (multiples de 6?)
//256 -> 16x16
//37 -> 6x6
//145 -> 12x12
let i, j
let k = 0
// First value is opaque white:
palette[k++] = 255
palette[k++] = 255
palette[k++] = 255
palette[k++] = 255
for (i = 0; i < 32; i++) {
  for (j = 0; j < 32; j++) {
    palette[k++] = Math.floor(255 - 42.5 * i)
    palette[k++] = Math.floor(255 - 42.5 * j)
    palette[k++] = 0
    palette[k++] = 255
  }
}
for (i = 0; i < 32; i++) {
  for (j = 0; j < 32; j++) {
    const index = i * 6 + j + 1.5 // 0.5 to bias rounding
    const fraction = index / 255
    ctx.fillStyle = 'rgba(0,0,0,' + fraction + ')'
    ctx.fillRect(j * 50, i * 50, 50, 50)
  }
}

canvas.createPNGStream({ palette: palette })
  .pipe(fs.createWriteStream(path.join(__dirname, 'indexed2.png')))
