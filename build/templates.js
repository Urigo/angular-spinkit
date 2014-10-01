angular.module('angularSpinkit').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/templates/chasingDotsSpinner.html',
    "<div class=\"chasing-dots-spinner\">\n" +
    "  <div class=\"dot1\"></div>\n" +
    "  <div class=\"dot2\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('src/templates/circleSpinner.html',
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
    "</div>\n"
  );


  $templateCache.put('src/templates/doubleBounceSpinner.html',
    "<div class=\"double-bounce-spinner\">\n" +
    "  <div class=\"double-bounce1\"></div>\n" +
    "  <div class=\"double-bounce2\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('src/templates/pulseSpinner.html',
    "<div class=\"pulse-spinner\"></div>\n"
  );


  $templateCache.put('src/templates/rotatingPlaneSpinner.html',
    "<div class=\"three-dots-row-spinner\"></div>\n"
  );


  $templateCache.put('src/templates/threeBounceSpinner.html',
    "<div class=\"three-bounce-spinner\">\n" +
    "  <div class=\"bounce1\"></div>\n" +
    "  <div class=\"bounce2\"></div>\n" +
    "  <div class=\"bounce3\"></div>\n" +
    "</div>"
  );


  $templateCache.put('src/templates/wanderingCubesSpinner.html',
    "<div class=\"wandering-cubes-spinner\"></div>\n"
  );


  $templateCache.put('src/templates/waveSpinner.html',
    "<div class=\"wave-spinner\">\n" +
    "  <div class=\"rect1\"></div>\n" +
    "  <div class=\"rect2\"></div>\n" +
    "  <div class=\"rect3\"></div>\n" +
    "  <div class=\"rect4\"></div>\n" +
    "  <div class=\"rect5\"></div>\n" +
    "</div>\n"
  );

}]);
