angular-spinkit
===============

SpinKit (https://github.com/tobiasahlin/SpinKit) spinners for AngularJS


## Usage
1. Add angular-spinkit.min.js to your main file (index.html)
  ```javascript
  <script src="bower_components/angular-spinkit/build/angular-spinkit.min.js"></script>
  ```

2. Set `angularSpinkit` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['angularSpinkit'])
  ```

3. Add rotating-plane-spinner, double-bounce-spinner, wave-spinner, wandering-cubes-spinner, pulse-spinner, chasing-dots-spinner or circle-spinner directive to the wanted element, example:
  ```html
  <rotating-plane-spinner></rotating-plane-spinner>
<double-bounce-spinner></double-bounce-spinner>
<wave-spinner></wave-spinner>
<wandering-cubes-spinner></wandering-cubes-spinner>
<pulse-spinner></pulse-spinner>
<chasing-dots-spinner></chasing-dots-spinner>
<circle-spinner></circle-spinner>
  ```


## Example
You can check out this live example here: http://jsfiddle.net/638AA/3/
