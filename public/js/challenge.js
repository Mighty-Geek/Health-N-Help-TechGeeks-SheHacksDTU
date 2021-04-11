// TODO: count & display no of reps
const repCount = document.querySelector('.count');
let video;
let poseNet;
let pose;
let skeleton;
let correct = false;
let reps = 0;
// var initial = 0;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
    // console.log(poses);
    if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    alert('Model loaded and pose being processed');
}

function draw() {
    image(video, 0, 0);
    if (pose) {
        let eyeR = pose.rightEye;
        let eyeL = pose.leftEye;
        let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);

        fill(0, 0, 255);
        ellipse(pose.leftWrist.x, pose.leftWrist.y, d);
        ellipse(pose.rightWrist.x, pose.rightWrist.y, d);

        for (let i = 0; i < pose.keypoints.length; i++) {
            let x = pose.keypoints[i].position.x;
            let y = pose.keypoints[i].position.y;
            fill(0, 255, 0);
            ellipse(x, y, 16, 16);

            // TODO: Write correct algorithm for exercise

            if (abs(pose.leftEar.x - pose.leftShoulder.x) < 10 || abs(pose.rightEar.x - pose.rightShoulder.x) < 10) {
                correct = true;
                var msg = new SpeechSynthesisUtterance('Keep going');
                msg.rate = 1;
                window.speechSynthesis.speak(msg);
                reps++;
                continue;
            }
        }

        // if (reps != initial) {
        //     console.log("Reps : " + reps);
        //     initial = reps;
        // }
        // console.log(reps);


        repCount.innerHTML = `<h2>${reps}</h2>`;
        for (let i = 0; i < skeleton.length; i++) {
            let a = skeleton[i][0];
            let b = skeleton[i][1];
            strokeWeight(2);
            stroke(255);
            line(a.position.x, a.position.y, b.position.x, b.position.y);
        }
    }
}