/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $document, $window, $anchorScroll, $location, anchorSmoothScroll) {

      $scope.menuShow = false;
      $scope.showMenu = function(){
        $scope.menuShow = true
      };
      $scope.hideMenu = function(){
        $scope.menuShow = false;
      };
      $scope.scrollTo = function(id) {
        $location.hash(id);
        // $anchorScroll();
        anchorSmoothScroll.scrollTo(id);
     }

      if($window.outerWidth > 1000){
            // Particles.init({
            //   selector: '.background',
            //   color: '#000000',
            //   maxParticles: 80,
            //   connectParticles: true
            // });


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// requestAnimationFrame();
var el = document.getElementById('particles-js');
el.style.position = "fixed";


          $scope.pixelsScrolled = 0;
          $scope.scrollDown = false;

          // $document.on('scroll', function() {
          //     $scope.$apply(function() {
          //       $scope.pixelsScrolled < $window.scrollY ?  $scope.scrollToDown() : $scope.scrollToUp();
          //       $scope.pixelsScrolled = $window.scrollY;
          //     })
          // });
          // $scope.scrollToUp = function(){
          //   $scope.scrollDown = false;
          // };
          // $scope.scrollToDown = function(){
          //   $scope.scrollDown = true;
          // };

        }
            
    };
    controller.$inject = ['$scope','$rootScope', '$document', '$window', '$anchorScroll', '$location', 'anchorSmoothScroll'];
    angular.module('app').controller('HomeController', controller).service('anchorSmoothScroll', function(){
    
      this.scrollTo = function(eID) {
  
          // This scrolling function 
          // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
          
          var startY = currentYPosition();
          var stopY = elmYPosition(eID);
          var distance = stopY > startY ? stopY - startY : startY - stopY;
          if (distance < 100) {
              scrollTo(0, stopY); return;
          }
          var speed = Math.round(distance / 100);
          if (speed >= 20) speed = 20;
          var step = Math.round(distance / 25);
          var leapY = stopY > startY ? startY + step : startY - step;
          var timer = 0;
          if (stopY > startY) {
              for ( var i=startY; i<stopY; i+=step ) {
                  setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                  leapY += step; if (leapY > stopY) leapY = stopY; timer++;
              } return;
          }
          for ( var i=startY; i>stopY; i-=step ) {
              setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
              leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
          }
          
          function currentYPosition() {
              // Firefox, Chrome, Opera, Safari
              if (self.pageYOffset) return self.pageYOffset;
              // Internet Explorer 6 - standards mode
              if (document.documentElement && document.documentElement.scrollTop)
                  return document.documentElement.scrollTop;
              // Internet Explorer 6, 7 and 8
              if (document.body.scrollTop) return document.body.scrollTop;
              return 0;
          }
          
          function elmYPosition(eID) {
              var elm = document.getElementById(eID);
              var y = elm.offsetTop;
              var node = elm;
              while (node.offsetParent && node.offsetParent != document.body) {
                  node = node.offsetParent;
                  y += node.offsetTop;
              } return y;
          }
  
      };
      
  });;

})();