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
    "  <div class=\"circle1 circle\"></div>\n" +
    "  <div class=\"circle2 circle\"></div>\n" +
    "  <div class=\"circle3 circle\"></div>\n" +
    "  <div class=\"circle4 circle\"></div>\n" +
    "  <div class=\"circle5 circle\"></div>\n" +
    "  <div class=\"circle6 circle\"></div>\n" +
    "  <div class=\"circle7 circle\"></div>\n" +
    "  <div class=\"circle8 circle\"></div>\n" +
    "  <div class=\"circle9 circle\"></div>\n" +
    "  <div class=\"circle10 circle\"></div>\n" +
    "  <div class=\"circle11 circle\"></div>\n" +
    "  <div class=\"circle12 circle\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('src/templates/cubeGridSpinner.html',
    "<div class=\"cube-grid-spinner\">\n" +
    "  <div class=\"cube\"></div>\n" +
    "  <div class=\"cube\"></div>\n" +
    "  <div class=\"cube\"></div>\n" +
    "  <div class=\"cube\"></div>\n" +
    "  <div class=\"cube\"></div>\n" +
    "  <div class=\"cube\"></div>\n" +
    "  <div class=\"cube\"></div>\n" +
    "  <div class=\"cube\"></div>\n" +
    "  <div class=\"cube\"></div>\n" +
    "</div>"
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


  $templateCache.put('src/templates/wordPressSpinner.html',
    "<div class=\"word-press-spinner\">\n" +
    "  <span class=\"inner-circle\"></span>\n" +
    "</div>"
  );

}]);
