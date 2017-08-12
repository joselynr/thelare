var myPicture = vRViewPlayer('#spiderman',{
  image: 'image1.jpg',
  is_yaw_only; true, 
  is_stereo: false
});
window.addEventListener('load', myPicture);
myPicture.on('ready', function(event) {
  myPicture.addHotspot('creating-hotspot-1', {
    pitch: -10,
    yaw: -30,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('creating-hotspot-1', {
    pitch: 89,
    yaw: 100,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('creating-hotspot-1', {
    pitch: 0,
    yaw: -150,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('creating-hotspot-1', {
    pitch: 0,
    yaw: 140,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('creating-hotspot-1', {
    pitch: 0,
    yaw: 90,
    radius: 0.10,
    distance: 1
  });

});
var setOnClickEvents = function(event) {
  if (event.id == 'reading-spot') {
    theLareAlert("This is my reading spot")
  }

  if (event.id == 'self-reflect') {
    theLareAlert('Sometimes I self reflect to improve myself');
  }

  if (event.id == 'better-off-ted') {
    theLareAlert('Better Off Ted keeps me connected to the corporate world');
  }

  if (event.id == 'drawing-aquarium') {
    theLareAlert('Come checkout my imagination!!');
  }

  if (event.id == 'hydrating') {
    theLareAlert('You have to hydrate as an adult!');
  }

  if (event.id == 'half-cleaning') {
    theLareAlert('I like to half clean after I cook');
  }

  if (event.id == 'drawing-aquarium') {
    console.log('adding events for aquarium');

    vrHomePage.setContent({
      image: 'assets/dolphins.jpg',
      preview: 'assets/dolphins.jpg',
      is_stereo: true
    });

    vrHomePage.addHotspot('hotspot-back', {
      pitch: 0,
      yaw: 0,
      radius: 0.10,
      distance: 1
    });
  }

  if(event.id == 'hotspot-back') {
    location.reload();
  }
};

// when the page is ready, do these events
vrHomePage.on('ready', function(event) {
  setReadyEvents(event);
});

// when you click, do these events
vrHomePage.on('click', function(event) {
  setOnClickEvents(event);
});

// when there is an error, do these events
vrHomePage.on('error', function(errorEvent) {
  console.log('there was an error', errorEvent);
});
