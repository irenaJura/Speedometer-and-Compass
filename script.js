const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed');

// access user's position
navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.styles.transform = `rotate(${data.coords.heading}deg)`; // heading = number of degrees relative to north
}, (err) => {
    console.err(err);
    alert('Please allow access, thanks!');
});