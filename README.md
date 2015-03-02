angular-spinkit
===============

SpinKit (https://github.com/tobiasahlin/SpinKit) spinners for AngularJS


## Usage
1. Install with bower:
  ```javascript
  bower install angular-spinkit --save
  ```

2. Add angular-spinkit.min.js and angular-spinkit.min.css to your main file (index.html)
  ```html
  <link rel="stylesheet" href="bower_components/angular-spinkit/build/angular-spinkit.min.css">
  <script src="bower_components/angular-spinkit/build/angular-spinkit.min.js"></script>
  ```

3. Set `angular-spinkit` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['angular-spinkit'])
  ```

4. Add rotating-plane-spinner, double-bounce-spinner, wave-spinner, wandering-cubes-spinner, pulse-spinner, chasing-dots-spinner or circle-spinner directive to the wanted element, example:
  ```html
  <rotating-plane-spinner></rotating-plane-spinner>
<double-bounce-spinner></double-bounce-spinner>
<wave-spinner></wave-spinner>
<wandering-cubes-spinner></wandering-cubes-spinner>
<pulse-spinner></pulse-spinner>
<chasing-dots-spinner></chasing-dots-spinner>
<circle-spinner></circle-spinner>
<three-bounce-spinner></three-bounce-spinner>
<cube-grid-spinner></cube-grid-spinner>
<word-press-spinner></word-press-spinner>
<fading-circle-spinner></fading-circle-spinner>
  ```

5. If you want to show the spinner while an image is loading just use the 'spinkit-image-preloader' directive:
  ```html
  <!-- The directive tries to copy dimensions from inline styles and attributes to the spinner placeholder -->
  <img width='800' height='600' alt='Your description' ng-src='http://example/img.jpg' spinkit-image-preloader='rotating-plane-spinner' />
  <img style='width:800px; height:800px' alt='Your escription' ng-src='http://example/img.jpg' spinkit-image-preloader='rotating-plane-spinner' />

  <!-- Also feel free to set width/height and other properties through CSS just configure your own css-class using the 'spinkit-image-preloader-class' attribute (or use css-class by default "spinner-wrapper") -->
  <img alt='Your description' ng-src='http://example/img.jpg' spinkit-image-preloader='cube-grid-spinner' spinkit-image-preloader-class='rotating-plane-spinner' />
  ```
  You can listen to the image loaded event.
   ```javascript
  // in controller
  $scope.$on('angular-spinkit:imageLoaded');
  ```

6. Add all your requests and ideas in the issues area or send us a pull request!

## Example
You can check out this live example here: http://jsfiddle.net/Urigo/638AA/18/
