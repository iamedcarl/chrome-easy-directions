# Quick Directions

A simple Chrome extension that will provide directions from your current location to your destination.

This tool was made for me to develop an understanding of how to make a Chrome extension, play with Google Maps, and use geolocation.

### How it works
![screen](/screenshots/quick_directions.gif)

In the `manifest.json`, I have declared permissions for `geolocation` which allows the extension to use the HTML5 geolocation API without prompting the user for permission. There is much more to know about the manifest file which I will continue to learn on more projects.

```
{
  "manifest_version": 2,

  "name": "Quick Directions",
  "description": "This extension allows user to get directions from origin to destination.",
  "version": "1.0",

  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html",
    "default_title": "Where to?"
  },
  "permissions": [
    "geolocation"
  ]
}
```

Once the extension popup is opened, a call to `navigator.geolocation.getCurrentPosition()` is invoked. Upon success, the `parsePosition()` callback sets the value of the origin input field to the latitude and longitude of the user's location.

NB: Users are able to change their origin location if they don't want directions from their current location. Just change the input field. 😃

```javascript
// assets/js/popup.js

const parsePosition = position => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  originField.placeholder = `${lat},${lon}`;
  originField.value = `${lat},${lon}`;
};

document.addEventListener("DOMContentLoaded",() => {
  navigator.geolocation.getCurrentPosition(parsePosition, (positionError) => {
    console.error(positionError);
  });

  //...
});
```

The user then enters the desired destination in the input field to get directions on Google Maps. A static map is displayed with directions. Clicking on the `More options` link in the map will open up a new browser tab/window and redirect to Google Maps.

Pretty simple... right? 😎

### Installing

1. Open your Chrome browser and enter `chrome://extensions` to the url bar.
2. Make sure `Developer Mode` is checked on the upper right corner.
3. Clone repo: `git clone https://github.com/iamedcarl/chrome-quick-directions.git`
4. Now click on `Load unpacked extension...` which is located at the top left.
5. Navigate to where you cloned the repo and select the folder `chrome-quick-directions`.

If everything works out, you should be seeing your extension loaded like below.

![extensions](/screenshots/extensions.png)

Click on the extension on the upper right side of your browser to try it out!

#### References
- [Google Maps API](https://developers.google.com/maps/)
- [Google Chrome Extensions Docs](https://developer.chrome.com/extensions)
