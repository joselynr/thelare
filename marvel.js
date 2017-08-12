var myPicture = vRViewPlayer('#spiderman',{
  image: 'image1.jpg',
  is_yaw_only: true, 
  is_stereo: false
});
window.addEventListener('load', myPicture);
myPicture.on('ready', function(event) {
  myPicture.addHotspot('The Walk To The Kitchen', {
    pitch: -10,
    yaw: -30,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('Seating', {
    pitch: 89,
    yaw: 100,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('Room Office', {
    pitch: 0,
    yaw: -150,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('office', {
    pitch: 0,
    yaw: 140,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('window view', {
    pitch: 0,
    yaw: 90,
    radius: 0.10,
    distance: 1
  });

});
myPicture.on ('click', function(event) {
  if (event.id == 'The Walk To The Kitchen') {
    alert("This is where you go into the kitchen to go back to work or to have a drink.")
  }

  if (event.id == 'Seating') {
    alert('At the end we sit there and reflect how was the day and write it on the board ');
  }

  if (event.id == 'Room Office') {
    alert('some office room I never stepped into or caught my attention to check it out');
  }

  if (event.id == 'office') {
    alert('Ton of computers and desk arranged');
  }

  if (event.id == 'window view') {
    alert('Such a nice view! The bridge is right there!!!');
  }
});
