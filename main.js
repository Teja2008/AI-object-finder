function setup(){
    canvas= createCanvas(400,380);
 canvas.center();
 video= createCapture(VIDEO);
 video.size(400,380);
 video.hide();

}
function draw(){
    image(video, 0,0,400,380);
}
