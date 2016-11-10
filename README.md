# angular2-android-ionic2
Seed project in Ionic 2 using Material Design by default.

# Step by Step

## 1. Clone this repository

`$ git clone https://github.com/cbeldacap/angular2-android-ionic2.git`
## 2. Install packages

`$ cd angular2-android-ionic2`

`$ npm install`

Then, those that need to be in a global scope:

`$ npm install -g ionic`

`$ npm install -g cordova`

`$ npm install -g karma`

`$ npm install -g angular-cli`

`$ npm install -g webpack`

## 3. Run the Application

The file package.json is configured to run the command `$ npm start` as if it was $ ionic serve. So run it to check how the application behaves in a browser.

If you want to run the application on an already created Android Emulator:

`$ ionic emulate`

## 4. Test the Application

After installing all the packages in step (2), running `$ npm test` will give you good information about the result of every unit test created.

## 5. Export the Application to APK file

First you need to tell Cordova which platform you are planning to export to. You can check the options running this:

`$ cordova platform`

So, when you choose the good one (e.g. Android), you add it to the plugin as follows:

`$ cordova platform add android`

Finally, you are able to generate an .apk file running this:

`$ cordova build`

The resultant file(s) will be located in `…​\$myProjectLoc\platforms\android\build\outputs\apk\`. The one we will use to run in our Android device is called `android-debug.apk`.
