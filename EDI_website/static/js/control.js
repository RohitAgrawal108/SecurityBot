const forwardButton = document.getElementById('forward');
const backwardButton = document.getElementById('backward');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const stopButton = document.getElementById('stop');

const controlvariable = document.getElementById('control_variable');


const forward = () => {
	console.log('forward');
    controlvariable.innerText="F";
    async function fetchText() {
        let response = await fetch('send_forward_command');
    
        console.log(response.status); // 200
        console.log(response.statusText); // OK
    
        if (response.status === 200) {
            let data = await response.text();
            console.log(data);
        }
    }
    
    fetchText();
};

const backward = () => {
	console.log('backward');
    controlvariable.innerText="B";
    async function fetchText() {
        let response = await fetch('send_backward_command');
    
        console.log(response.status); // 200
        console.log(response.statusText); // OK
    
        if (response.status === 200) {
            let data = await response.text();
            console.log(data);
        }
    }
    
    fetchText();
};

const left = () => {
	console.log('left');
    controlvariable.innerText="L";
    async function fetchText() {
        let response = await fetch('send_left_command');
    
        console.log(response.status); // 200
        console.log(response.statusText); // OK
    
        if (response.status === 200) {
            let data = await response.text();
            console.log(data);
        }
    }
    
    fetchText();
};

const right = () => {
	console.log('right');
    controlvariable.innerText="R";
    async function fetchText() {
        let response = await fetch('send_right_command');
    
        console.log(response.status); // 200
        console.log(response.statusText); // OK
    
        if (response.status === 200) {
            let data = await response.text();
            console.log(data);
        }
    }
    
    fetchText();
};

const stop = () => {
	console.log('stop');
    controlvariable.innerText="S";
    async function fetchText() {
        let response = await fetch('send_stop_command');
    
        console.log(response.status); // 200
        console.log(response.statusText); // OK
    
        if (response.status === 200) {
            let data = await response.text();
            console.log(data);
        }
    }
    
    fetchText();
};

forwardButton.addEventListener('click', forward);
backwardButton.addEventListener('click', backward);
leftButton.addEventListener('click', left);
rightButton.addEventListener('click', right);
stopButton.addEventListener('click', stop);

x = navigator.geolocation;

// x.getCurrentPosition(success, failure);

// function success(position){

//     var myLat = position.coords.latitude;
//     var myLong = position.coords.longitude;
//     console.log('latitude: ',myLat);
//     console.log('longitude',myLong);

//     var coords = new google.maps.LatLng(myLat,myLong);
//     var mapOptions = {
//         zoom: 10,
//         center: coords, 
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     }

//     var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//     var marker = new google.maps.Marker({
//         map:map,
//         position:coords
//     });
// }

// function failure(){}
