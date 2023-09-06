// document.getElementById("lefteye").style.backgroundColor = "purple";
// document.getElementById("head").style.transform = "rotate(15deg)";
let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");
let leftArm = document.getElementById("leftarm"); 

rightEye.addEventListener("click",moveUpDown);
leftEye.addEventListener("click",moveUpDown);
leftArm.addEventListener("click",moveRightLeft)
;

function moveUpDown(e) {
    let robotPart = e.target;
    let t = 0;
    let animation = setInterval(frame, 100);

    function frame() {
        robotPart.style.top = t + "%"
        t++;
        if (t === 20) {
            clearInterval(animation);
        }
    }
}

function moveRightLeft(e) {
    let robotPart = e.target;
    let l = 0;
    let animation = setInterval(frame, 10);

    function frame() {
        robotPart.style.left = l + "%"
        l++;
        if (l === 71) {
            clearInterval(animation);
        }
    }
}