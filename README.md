angular-spinkit
===============

SpinKit (https://github.com/tobiasahlin/SpinKit) spinners for AngularJS


## Usage
1. Add angular-spinkit to your bower.json file
  ```javascript
  "angular-spinkit": "0.3.2"
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
5. Add all your requests and ideas in the issues area or send us a pull request!

## Example
You can check out this live example here: http://jsfiddle.net/Urigo/638AA/18/
