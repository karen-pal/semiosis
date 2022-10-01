const fs = require('fs')
const path = require('path')
const Canvas = require('canvas')

const canvas = Canvas.createCanvas(1320, 1320)
const ctx = canvas.getContext('2d')

// Create gradients
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
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
  }
}

canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'gradients.png')))
