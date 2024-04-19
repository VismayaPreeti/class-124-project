function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(10,50);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#969A97');
}

function gotPoses(results,error)
{
    if(error){
        console.error(error);
    }

    if(results.length > 0){
        console.log(results);
    }
}
