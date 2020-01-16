### Geolocation Speedometer And Compass

A simple little app to track the user's speed and position on the compass.

We use Navigator.geolocation that returns a Geolocation object that gives Web content access to the location of the device.

We append the watchPosition() method that is used to register a handler function that will be called automatically each time the position of the device changes. And we also specify an error handling callback function.