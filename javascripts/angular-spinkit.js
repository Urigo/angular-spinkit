/**
 * angular-spinkit module
 * SpinKit (https://github.com/tobiasahlin/SpinKit) spinners for AngularJS
 *
 * Author: Urigo - https://github.com/Urigo
 */
'use strict';

angular.module('angularSpinkit',
  [
    'ngRotatingPlaneSpinner',
    'ngDoubleBounceSpinner',
    'ngWaveSpinner',
    'ngWanderingCubesSpinner',
    'ngPulseSpinner',
    'ngChasingDotsSpinner',
    'ngCircleSpinner'
  ]);

angular.module('ngRotatingPlaneSpinner', []).directive('rotatingPlaneSpinner', function () {
  return {
    restrict: 'E',
    templateUrl: 'src/templates/rotatingPlaneSpinner.html'
  };
});

angular.module('ngDoubleBounceSpinner', []).directive('doubleBounceSpinner', function () {
  return {
    restrict: 'E',
    templateUrl: 'src/templates/doubleBounceSpinner.html'
  };
});

angular.module('ngWaveSpinner', []).directive('waveSpinner', function () {
  return {
    restrict: 'E',
    templateUrl: 'src/templates/waveSpinner.html'
  };
});

angular.module('ngWanderingCubesSpinner', []).directive('wanderingCubesSpinner', function () {
  return {
    restrict: 'E',
    templateUrl: 'src/templates/wanderingCubesSpinner.html'
  };
});

angular.module('ngPulseSpinner', []).directive('pulseSpinner', function () {
  return {
    restrict: 'E',
    templateUrl: 'src/templates/pulseSpinner.html'
  };
});

angular.module('ngChasingDotsSpinner', []).directive('chasingDotsSpinner', function () {
  return {
    restrict: 'E',
    templateUrl: 'src/templates/chasingDotsSpinner.html'
  };
});

angular.module('ngCircleSpinner', []).directive('circleSpinner', function () {
  return {
    restrict: 'E',
    templateUrl: 'src/templates/circleSpinner.html'
  };
});



angular.module('angularSpinkit').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/templates/chasingDotsSpinner.html',
    "<style>\n" +
    "  .chasing-dots-spinner {\n" +
    "    margin: 100px auto;\n" +
    "    width: 40px;\n" +
    "    height: 40px;\n" +
    "    position: relative;\n" +
    "    text-align: center;\n" +
    "\n" +
    "    -webkit-animation: rotate 2.0s infinite linear;\n" +
    "    animation: rotate 2.0s infinite linear;\n" +
    "  }\n" +
    "\n" +
    "  .dot1, .dot2 {\n" +
    "    width: 60%;\n" +
    "    height: 60%;\n" +
    "    display: inline-block;\n" +
    "    position: absolute;\n" +
    "    top: 0;\n" +
    "    background-color: #333;\n" +
    "    border-radius: 100%;\n" +
    "\n" +
    "    -webkit-animation: bounce 2.0s infinite ease-in-out;\n" +
    "    animation: bounce 2.0s infinite ease-in-out;\n" +
    "  }\n" +
    "\n" +
    "  .dot2 {\n" +
    "    top: auto;\n" +
    "    bottom: 0px;\n" +
    "    -webkit-animation-delay: -1.0s;\n" +
    "    animation-delay: -1.0s;\n" +
    "  }\n" +
    "\n" +
    "  @-webkit-keyframes rotate { 100% { -webkit-transform: rotate(360deg) }}\n" +
    "  @keyframes rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}\n" +
    "\n" +
    "  @-webkit-keyframes bounce {\n" +
    "    0%, 100% { -webkit-transform: scale(0.0) }\n" +
    "    50% { -webkit-transform: scale(1.0) }\n" +
    "  }\n" +
    "\n" +
    "  @keyframes bounce {\n" +
    "    0%, 100% {\n" +
    "      transform: scale(0.0);\n" +
    "      -webkit-transform: scale(0.0);\n" +
    "    } 50% {\n" +
    "        transform: scale(1.0);\n" +
    "        -webkit-transform: scale(1.0);\n" +
    "      }\n" +
    "  }\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"chasing-dots-spinner\">\n" +
    "  <div class=\"dot1\"></div>\n" +
    "  <div class=\"dot2\"></div>\n" +
    "</div>"
  );


  $templateCache.put('src/templates/circleSpinner.html',
    "<style>\n" +
    "  .spinning-dots-spinner {\n" +
    "    margin: 100px auto;\n" +
    "    width: 20px;\n" +
    "    height: 20px;\n" +
    "    position: relative;\n" +
    "  }\n" +
    "\n" +
    "  .container1 > div, .container2 > div, .container3 > div {\n" +
    "    width: 6px;\n" +
    "    height: 6px;\n" +
    "    background-color: #333;\n" +
    "\n" +
    "    border-radius: 100%;\n" +
    "    position: absolute;\n" +
    "    -webkit-animation: bouncedelay 1.2s infinite ease-in-out;\n" +
    "    animation: bouncedelay 1.2s infinite ease-in-out;\n" +
    "    /* Prevent first frame from flickering when animation starts */\n" +
    "    -webkit-animation-fill-mode: both;\n" +
    "    animation-fill-mode: both;\n" +
    "  }\n" +
    "\n" +
    "  .spinning-dots-spinner .spinner-container {\n" +
    "    position: absolute;\n" +
    "    width: 100%;\n" +
    "    height: 100%;\n" +
    "  }\n" +
    "\n" +
    "  .container2 {\n" +
    "    -webkit-transform: rotateZ(45deg);\n" +
    "    transform: rotateZ(45deg);\n" +
    "  }\n" +
    "\n" +
    "  .container3 {\n" +
    "    -webkit-transform: rotateZ(90deg);\n" +
    "    transform: rotateZ(90deg);\n" +
    "  }\n" +
    "\n" +
    "  .circle1 { top: 0; left: 0; }\n" +
    "  .circle2 { top: 0; right: 0; }\n" +
    "  .circle3 { right: 0; bottom: 0; }\n" +
    "  .circle4 { left: 0; bottom: 0; }\n" +
    "\n" +
    "  .container2 .circle1 {\n" +
    "    -webkit-animation-delay: -1.1s;\n" +
    "    animation-delay: -1.1s;\n" +
    "  }\n" +
    "\n" +
    "  .container3 .circle1 {\n" +
    "    -webkit-animation-delay: -1.0s;\n" +
    "    animation-delay: -1.0s;\n" +
    "  }\n" +
    "\n" +
    "  .container1 .circle2 {\n" +
    "    -webkit-animation-delay: -0.9s;\n" +
    "    animation-delay: -0.9s;\n" +
    "  }\n" +
    "\n" +
    "  .container2 .circle2 {\n" +
    "    -webkit-animation-delay: -0.8s;\n" +
    "    animation-delay: -0.8s;\n" +
    "  }\n" +
    "\n" +
    "  .container3 .circle2 {\n" +
    "    -webkit-animation-delay: -0.7s;\n" +
    "    animation-delay: -0.7s;\n" +
    "  }\n" +
    "\n" +
    "  .container1 .circle3 {\n" +
    "    -webkit-animation-delay: -0.6s;\n" +
    "    animation-delay: -0.6s;\n" +
    "  }\n" +
    "\n" +
    "  .container2 .circle3 {\n" +
    "    -webkit-animation-delay: -0.5s;\n" +
    "    animation-delay: -0.5s;\n" +
    "  }\n" +
    "\n" +
    "  .container3 .circle3 {\n" +
    "    -webkit-animation-delay: -0.4s;\n" +
    "    animation-delay: -0.4s;\n" +
    "  }\n" +
    "\n" +
    "  .container1 .circle4 {\n" +
    "    -webkit-animation-delay: -0.3s;\n" +
    "    animation-delay: -0.3s;\n" +
    "  }\n" +
    "\n" +
    "  .container2 .circle4 {\n" +
    "    -webkit-animation-delay: -0.2s;\n" +
    "    animation-delay: -0.2s;\n" +
    "  }\n" +
    "\n" +
    "  .container3 .circle4 {\n" +
    "    -webkit-animation-delay: -0.1s;\n" +
    "    animation-delay: -0.1s;\n" +
    "  }\n" +
    "\n" +
    "  @-webkit-keyframes bouncedelay {\n" +
    "    0%, 80%, 100% { -webkit-transform: scale(0.0) }\n" +
    "    40% { -webkit-transform: scale(1.0) }\n" +
    "  }\n" +
    "\n" +
    "  @keyframes bouncedelay {\n" +
    "    0%, 80%, 100% {\n" +
    "      transform: scale(0.0);\n" +
    "      -webkit-transform: scale(0.0);\n" +
    "    } 40% {\n" +
    "        transform: scale(1.0);\n" +
    "        -webkit-transform: scale(1.0);\n" +
    "      }\n" +
    "  }\n" +
    "</style>\n" +
    "<div class=\"spinning-dots-spinner\">\n" +
    "  <div class=\"spinner-container container1\">\n" +
    "    <div class=\"circle1\"></div>\n" +
    "    <div class=\"circle2\"></div>\n" +
    "    <div class=\"circle3\"></div>\n" +
    "    <div class=\"circle4\"></div>\n" +
    "  </div>\n" +
    "  <div class=\"spinner-container container2\">\n" +
    "    <div class=\"circle1\"></div>\n" +
    "    <div class=\"circle2\"></div>\n" +
    "    <div class=\"circle3\"></div>\n" +
    "    <div class=\"circle4\"></div>\n" +
    "  </div>\n" +
    "  <div class=\"spinner-container container3\">\n" +
    "    <div class=\"circle1\"></div>\n" +
    "    <div class=\"circle2\"></div>\n" +
    "    <div class=\"circle3\"></div>\n" +
    "    <div class=\"circle4\"></div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('src/templates/doubleBounceSpinner.html',
    "<style>\n" +
    "  .double-bounce-spinner {\n" +
    "    width: 40px;\n" +
    "    height: 40px;\n" +
    "\n" +
    "    position: relative;\n" +
    "    margin: 100px auto;\n" +
    "  }\n" +
    "\n" +
    "  .double-bounce1, .double-bounce2 {\n" +
    "    width: 100%;\n" +
    "    height: 100%;\n" +
    "    border-radius: 50%;\n" +
    "    background-color: #333;\n" +
    "    opacity: 0.6;\n" +
    "    position: absolute;\n" +
    "    top: 0;\n" +
    "    left: 0;\n" +
    "\n" +
    "    -webkit-animation: bounce 2.0s infinite ease-in-out;\n" +
    "    animation: bounce 2.0s infinite ease-in-out;\n" +
    "  }\n" +
    "\n" +
    "  .double-bounce2 {\n" +
    "    -webkit-animation-delay: -1.0s;\n" +
    "    animation-delay: -1.0s;\n" +
    "  }\n" +
    "\n" +
    "  @-webkit-keyframes bounce {\n" +
    "    0%, 100% { -webkit-transform: scale(0.0) }\n" +
    "    50% { -webkit-transform: scale(1.0) }\n" +
    "  }\n" +
    "\n" +
    "  @keyframes bounce {\n" +
    "    0%, 100% {\n" +
    "      transform: scale(0.0);\n" +
    "      -webkit-transform: scale(0.0);\n" +
    "    } 50% {\n" +
    "        transform: scale(1.0);\n" +
    "        -webkit-transform: scale(1.0);\n" +
    "      }\n" +
    "  }\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"double-bounce-spinner\">\n" +
    "  <div class=\"double-bounce1\"></div>\n" +
    "  <div class=\"double-bounce2\"></div>\n" +
    "</div>"
  );


  $templateCache.put('src/templates/pulseSpinner.html',
    "<style>\n" +
    "  .pulse-spinner {\n" +
    "    width: 40px;\n" +
    "    height: 40px;\n" +
    "    margin: 100px auto;\n" +
    "    background-color: #333;\n" +
    "\n" +
    "    border-radius: 100%;\n" +
    "    -webkit-animation: scaleout 1.0s infinite ease-in-out;\n" +
    "    animation: scaleout 1.0s infinite ease-in-out;\n" +
    "  }\n" +
    "\n" +
    "  @-webkit-keyframes scaleout {\n" +
    "    0% { -webkit-transform: scale(0.0) }\n" +
    "    100% {\n" +
    "      -webkit-transform: scale(1.0);\n" +
    "      opacity: 0;\n" +
    "    }\n" +
    "  }\n" +
    "\n" +
    "  @keyframes scaleout {\n" +
    "    0% {\n" +
    "      transform: scale(0.0);\n" +
    "      -webkit-transform: scale(0.0);\n" +
    "    } 100% {\n" +
    "        transform: scale(1.0);\n" +
    "        -webkit-transform: scale(1.0);\n" +
    "        opacity: 0;\n" +
    "      }\n" +
    "  }\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"pulse-spinner\"></div>"
  );


  $templateCache.put('src/templates/rotatingPlaneSpinner.html',
    "<style>\n" +
    "  .three-dots-row-spinner {\n" +
    "    width: 30px;\n" +
    "    height: 30px;\n" +
    "    background-color: #333;\n" +
    "\n" +
    "    margin: 100px auto;\n" +
    "    -webkit-animation: rotateplane 1.2s infinite ease-in-out;\n" +
    "    animation: rotateplane 1.2s infinite ease-in-out;\n" +
    "  }\n" +
    "\n" +
    "  @-webkit-keyframes rotateplane {\n" +
    "    0% { -webkit-transform: perspective(120px) }\n" +
    "    50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n" +
    "    100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n" +
    "  }\n" +
    "\n" +
    "  @keyframes rotateplane {\n" +
    "    0% {\n" +
    "      transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n" +
    "      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n" +
    "    } 50% {\n" +
    "        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n" +
    "        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n" +
    "      } 100% {\n" +
    "          transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n" +
    "          -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n" +
    "        }\n" +
    "  }\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"three-dots-row-spinner\"></div>"
  );


  $templateCache.put('src/templates/wanderingCubesSpinner.html',
    "<style>\n" +
    "  .wandering-cubes-spinner {\n" +
    "    margin: 100px auto;\n" +
    "    width: 32px;\n" +
    "    height: 32px;\n" +
    "    position: relative;\n" +
    "  }\n" +
    "\n" +
    "  .cube1, .cube2 {\n" +
    "    background-color: #333;\n" +
    "    width: 10px;\n" +
    "    height: 10px;\n" +
    "    position: absolute;\n" +
    "    top: 0;\n" +
    "    left: 0;\n" +
    "\n" +
    "    -webkit-animation: cubemove 1.8s infinite ease-in-out;\n" +
    "    animation: cubemove 1.8s infinite ease-in-out;\n" +
    "  }\n" +
    "\n" +
    "  .cube2 {\n" +
    "    -webkit-animation-delay: -0.9s;\n" +
    "    animation-delay: -0.9s;\n" +
    "  }\n" +
    "\n" +
    "  @-webkit-keyframes cubemove {\n" +
    "    25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\n" +
    "    50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\n" +
    "    75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\n" +
    "    100% { -webkit-transform: rotate(-360deg) }\n" +
    "  }\n" +
    "\n" +
    "  @keyframes cubemove {\n" +
    "    25% {\n" +
    "      transform: translateX(42px) rotate(-90deg) scale(0.5);\n" +
    "      -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n" +
    "    } 50% {\n" +
    "        transform: translateX(42px) translateY(42px) rotate(-179deg);\n" +
    "        -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n" +
    "      } 50.1% {\n" +
    "          transform: translateX(42px) translateY(42px) rotate(-180deg);\n" +
    "          -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n" +
    "        } 75% {\n" +
    "            transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n" +
    "            -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n" +
    "          } 100% {\n" +
    "              transform: rotate(-360deg);\n" +
    "              -webkit-transform: rotate(-360deg);\n" +
    "            }\n" +
    "  }\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"wandering-cubes-spinner\">\n" +
    "  <div class=\"cube1\"></div>\n" +
    "  <div class=\"cube2\"></div>\n" +
    "</div>"
  );


  $templateCache.put('src/templates/waveSpinner.html',
    "<style>\n" +
    "  .wave-spinner {\n" +
    "    margin: 100px auto;\n" +
    "    width: 50px;\n" +
    "    height: 30px;\n" +
    "    text-align: center;\n" +
    "    font-size: 10px;\n" +
    "  }\n" +
    "\n" +
    "  .wave-spinner > div {\n" +
    "    background-color: #333;\n" +
    "    height: 100%;\n" +
    "    width: 6px;\n" +
    "    display: inline-block;\n" +
    "\n" +
    "    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;\n" +
    "    animation: stretchdelay 1.2s infinite ease-in-out;\n" +
    "  }\n" +
    "\n" +
    "  .wave-spinner .rect2 {\n" +
    "    -webkit-animation-delay: -1.1s;\n" +
    "    animation-delay: -1.1s;\n" +
    "  }\n" +
    "\n" +
    "  .wave-spinner .rect3 {\n" +
    "    -webkit-animation-delay: -1.0s;\n" +
    "    animation-delay: -1.0s;\n" +
    "  }\n" +
    "\n" +
    "  .wave-spinner .rect4 {\n" +
    "    -webkit-animation-delay: -0.9s;\n" +
    "    animation-delay: -0.9s;\n" +
    "  }\n" +
    "\n" +
    "  .wave-spinner .rect5 {\n" +
    "    -webkit-animation-delay: -0.8s;\n" +
    "    animation-delay: -0.8s;\n" +
    "  }\n" +
    "\n" +
    "  @-webkit-keyframes stretchdelay {\n" +
    "    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n" +
    "    20% { -webkit-transform: scaleY(1.0) }\n" +
    "  }\n" +
    "\n" +
    "  @keyframes stretchdelay {\n" +
    "    0%, 40%, 100% {\n" +
    "      transform: scaleY(0.4);\n" +
    "      -webkit-transform: scaleY(0.4);\n" +
    "    }  20% {\n" +
    "         transform: scaleY(1.0);\n" +
    "         -webkit-transform: scaleY(1.0);\n" +
    "       }\n" +
    "  }\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"wave-spinner\">\n" +
    "  <div class=\"rect1\"></div>\n" +
    "  <div class=\"rect2\"></div>\n" +
    "  <div class=\"rect3\"></div>\n" +
    "  <div class=\"rect4\"></div>\n" +
    "  <div class=\"rect5\"></div>\n" +
    "</div>"
  );

}]);
