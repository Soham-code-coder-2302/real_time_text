function setup () {
canvas=createCanvas(550,550)
canvas.position(1090,260)

vid=createCapture(VIDEO,)
vid.position(200,260)
vid.size(550,550)

posenet=ml5.poseNet(vid,modelloaded)
}

function draw() {
background("blue")
posenet.on('pose',gotposes)
}

function modelloaded () {
console.log("model is loaded")
}

function gotposes(result) {
if (result.length>0) {
console.log(result)
}
}