//your JS code here. If required.
let elem = document.createElement("p");
let browserName = navigator.appName;
let version = navigator.appVersion;
elem.textContent = "You are using " + browserName + " version " + version;

let parent = document.getElementById("browser-info");
parent.appendChild(elem);