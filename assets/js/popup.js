let originField = document.getElementById('input-org');

let iframe = document.createElement('iframe');
iframe.width = "580px";
iframe.height = "300px";
iframe.frameborder = "0";
iframe.setAttribute("style", "border:0");
iframe.setAttribute('allowFullScreen', '');

const parsePosition = position => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`${lat},${lon}`);
  originField.placeholder = `${lat},${lon}`;
  originField.value = `${lat},${lon}`;
};

document.addEventListener("DOMContentLoaded",() => {
  navigator.geolocation.getCurrentPosition(parsePosition, (positionError) => {
    console.error(positionError);
  });

  document.getElementById('directions-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let origin = originField.value;
    let destination = document.getElementById('input-dest').value;
    let googleMaps = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyC4c-rDo69YbyfuhOChRpKJAVk6ZLU_XIE&origin=${origin}&destination=${destination}`;
    iframe.setAttribute("src", googleMaps);
    document.getElementById('map').appendChild(iframe);
  });
});
