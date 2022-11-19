song= "music.mp3";
song2= "music2.mp3";
leftWristX= 0;
leftWristY= 0;
rightWristX= 0;
rightWristY= 0;

function preload()
{
    song=loadSound("music.mp3");
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550)

    canvas = createCanvas(550, 550);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");

    songplaying = song.isPlaying();
    
    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX, leftWristY, 20);
    song2.stop();

       if(songplaying = "false")
       {
         song.play();
         document.getElementById("playing").innerHTML = "Song= Song1";
       }
    }
    
}    

function play()
{
    song.play();
    song.setVolume(1);
    set.rate(1);
}


function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        results[0].pose.keypoint[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;    
        console.log("leftWristX= " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("rightWristX= " +rightWristX+ "rightWristY= " + rightWristY);
    }
} 