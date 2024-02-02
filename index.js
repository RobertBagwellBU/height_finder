function main() {
    addEventListener("deviceorientation", onOrientationChang)

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then((signal) => {
            const video = document.getElementById("myVideo");
            video.srcObject = signal;
            video.play();
        })
        .catch((err) => {
            alert(err);
        })
}

function onOrientationChang(event) {
    let angle = event.beta-90;
    if (angle < 0) {
        angle = 0;
    }
    const distanceToObject = document.getElementById('mySlider').value;
    document.getElementById('sliderValue').innerHTML = `Distance : ${distanceToObject} meters (${inFeet(distanceToObject).toFixed(1)} Feet)`
    const height = Math.tan(angle*Math.PI/180) * distanceToObject
    document.getElementById('heightInfo').innerHTML= `Height ${height.toFixed(1)} meters (${inFeet(height).toFixed(1)} Feet) (${angle.toFixed(1)}&deg)`
}

function inFeet(meters) {
    return meters * 3.280839895;
}