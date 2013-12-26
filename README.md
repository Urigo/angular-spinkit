angular-spinkit
===============

SpinKit (https://github.com/tobiasahlin/SpinKit) spinners for AngularJS


## Usage
1. Add angular-spinkit to your bower.json file
  ```javascript
  "angular-spinkit": "v0.0.2.1"
  ```

2. Add angular-spinkit.min.js to your main file (index.html)
  ```javascript
  <script src="bower_components/angular-spinkit/build/angular-spinkit.min.js"></script>
  ```

3. Set `angularSpinkit` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['angularSpinkit'])
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
  ```


## Example
You can check out this live example here: http://jsfiddle.net/Urigo/638AA/5/

5. Add all your requests and ideas in the issues area!
