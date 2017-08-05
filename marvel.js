var myPicture = vRViewPlayer('#spiderman',{
  image: 'spiderman.jpeg',
  is_stereo: false
});
window.addEventListener('load', myPicture);
myPicture.on('read', function(event) {
  myPicture.addHotspot('creating-hotspot-1', {
    pitch: 0,
    yaw: 0,
    radius: 0.10
    distance: 1
  });
});
