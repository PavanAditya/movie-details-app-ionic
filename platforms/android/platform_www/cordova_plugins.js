cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-fabric-plugin.FabricPlugin",
    "file": "plugins/cordova-fabric-plugin/www/FabricPlugin.js",
    "pluginId": "cordova-fabric-plugin",
    "clobbers": [
      "window.fabric.core"
    ]
  },
  {
    "id": "cordova-fabric-plugin.FabricAnswersPlugin",
    "file": "plugins/cordova-fabric-plugin/www/FabricPlugin.Answers.js",
    "pluginId": "cordova-fabric-plugin",
    "clobbers": [
      "window.fabric.Answers"
    ]
  },
  {
    "id": "cordova-fabric-plugin.FabricCrashlyticsPlugin",
    "file": "plugins/cordova-fabric-plugin/www/FabricPlugin.Crashlytics.js",
    "pluginId": "cordova-fabric-plugin",
    "clobbers": [
      "window.fabric.Crashlytics"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-fabric-plugin": "1.1.14-dev",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-ionic-keyboard": "2.1.2",
  "cordova-plugin-ionic-webview": "1.2.0",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-statusbar": "2.4.2"
};
// BOTTOM OF METADATA
});