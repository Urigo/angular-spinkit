/**
 * angular-spinkit module
 * SpinKit (https://github.com/tobiasahlin/SpinKit) spinners for AngularJS
 *
 * Author: Urigo - https://github.com/Urigo
 */
'use strict';

angular.module('angular-spinkit',
  [
    'ngRotatingPlaneSpinner',
    'ngDoubleBounceSpinner',
    'ngWaveSpinner',
    'ngWanderingCubesSpinner',
    'ngPulseSpinner',
    'ngChasingDotsSpinner',
    'ngCircleSpinner',
    'ngThreeBounceSpinner',
    'ngCubeGridSpinner',
    'ngWordPressSpinner',
    'ngFadingCircleSpinner',
    'ngSpinkitImagePreloader'
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

angular.module('ngThreeBounceSpinner', []).directive('threeBounceSpinner', function () {
  return {
    restrict: 'E',
    templateUrl: 'src/templates/threeBounceSpinner.html'
  };
});

angular.module('ngCubeGridSpinner', []).directive('cubeGridSpinner', function () {
  return {
    restrict: 'E',
    templateUrl: 'src/templates/cubeGridSpinner.html'
  };
});

angular.module('ngWordPressSpinner', []).directive('wordPressSpinner', function () {
  return {
    restrict: 'E',
    templateUrl: 'src/templates/wordPressSpinner.html'
  };
});

angular.module('ngFadingCircleSpinner', []).directive('fadingCircleSpinner', function () {
  return {
    restrict: 'E',
    templateUrl: 'src/templates/fadingCircleSpinner.html'
  };
});

angular.module('ngSpinkitImagePreloader', []).directive('spinkitImagePreloader', ['$compile', '$injector', '$rootScope', function ($compile, $injector, $rootScope) {
  return {
    restrict: 'A',
    scope: {
      ngSrc: '@',
      spinkitImagePreloader: '@',
      spinkitImagePreloaderClass: '@'
    },
    link: function(scope, element, attrs) {
      var spinnerWrapper,
          spinnerWrapperClass = scope.spinkitImagePreloaderClass || 'spinner-wrapper',
          spinner;

      // Check for the existence of the spinkit-directive
      if(!$injector.has(attrs.$normalize(scope.spinkitImagePreloader) + 'Directive'))
        return;

      // Create and configure DOM-spinner-elements
      spinnerWrapper = angular.element('<div/>').addClass(spinnerWrapperClass),
      spinner = $compile('<' + scope.spinkitImagePreloader + '/>')(scope);
      spinnerWrapper.append(spinner);
      spinnerWrapper.css('overflow', 'hidden');

      element.after(spinnerWrapper);

      // Copy dimensions (inline and attributes) from the image to the spinner wrapper
      if(element.css('width'))
        spinnerWrapper.css('width', element.css('width'));

      if(attrs.width)
        spinnerWrapper.css('width', attrs.width + 'px');

      if(element.css('height'))
        spinnerWrapper.css('height', element.css('height'));

      if(attrs.height)
        spinnerWrapper.css('height', attrs.height + 'px');

      element.on('load', function () {
        spinnerWrapper.css('display', 'none');
        element.css('display', 'block');
        $rootScope.$broadcast('angular-spinkit:imageLoaded');
      });

      scope.$watch('ngSrc', function () {
        spinnerWrapper.css('display', 'block');
        element.css('display', 'none');
      });
    }
  };
}]);
angular.module('angular-spinkit').run(['$templateCache', function($templateCache) {
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


  $templateCache.put('src/templates/fadingCircleSpinner.html',
    "<div class=\"fading-circle-spinner\">\n" +
    "  <div class=\"fading-circle1 fading-circle\"></div>\n" +
    "  <div class=\"fading-circle2 fading-circle\"></div>\n" +
    "  <div class=\"fading-circle3 fading-circle\"></div>\n" +
    "  <div class=\"fading-circle4 fading-circle\"></div>\n" +
    "  <div class=\"fading-circle5 fading-circle\"></div>\n" +
    "  <div class=\"fading-circle6 fading-circle\"></div>\n" +
    "  <div class=\"fading-circle7 fading-circle\"></div>\n" +
    "  <div class=\"fading-circle8 fading-circle\"></div>\n" +
    "  <div class=\"fading-circle9 fading-circle\"></div>\n" +
    "  <div class=\"fading-circle10 fading-circle\"></div>\n" +
    "  <div class=\"fading-circle11 fading-circle\"></div>\n" +
    "  <div class=\"fading-circle12 fading-circle\"></div>\n" +
    "</div>"
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
