darkside_song = "";
hp_song = "";
rightWrist_x=0;
rightWrist_y=0;
leftWrist_x=0;
leftWrist_y=0;
function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video=createCaputure(VIDEO);
    video.hide();
    poseNet = m15.poseNet(video,modelLoaded)
    posenet.on('pose',gotposes);
}

function preload(){
    darkside_song = loadSound("Neoni_Darkside.mp3");
    hp_song = loadSound("Harry_Potter.mp3");
}

function draw(){
    image(video,0,0,600,530)
}

function modelLoaded(){
    console.log("poseNet is Initialized");
}

function gotPoses (results){
    if(reulsts.length >0){
        console.log (results);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y)("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = result[0].pose.rightWrist.y;
        console.log("rightWrist_x ="+rightWrist_x+" rightWrist_y ="+rightWrist_y);
    }
}