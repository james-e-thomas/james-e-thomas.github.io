var myDynamicManifest = {
  "name": "fplGraphed",
  "short_name": "fplGraphed",
  "start_url": "dashboard.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "description": "Visualise your FPL mini-leagues",
  "theme_color": "#2e3842",
  "icons": [
    {
      "src": "images/icon.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
const stringManifest = JSON.stringify(myDynamicManifest);
const blob = new Blob([stringManifest], {type: 'application/json'});
const manifestURL = URL.createObjectURL(blob);
document.querySelector('#my-manifest-placeholder').setAttribute('href', manifestURL);
