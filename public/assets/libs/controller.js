(function(){
    angular.module('app', ['ui.carousel']).controller('Ctrl', function($scope) {


        $(document).ready(function(){
            $("header a").on('click', function(event) {
                if (this.hash !== "") {event.preventDefault();var hash = this.hash;$('html, body').animate({
                  scrollTop: $(hash).offset().top - 80
                }, 800, function(){
                    //window.location.hash = hash;
                });
              }
            });
          });
          
    
        this.startIndex = 1;
        this.slidesNumber = 12;
        this.baseUrl = document.location.origin + '/assets/img/';
        this.slides = [];
        $scope.colores = ['azul-verde','azul-verde-b','azul-rojo','azul-rojo-b','morado-naranja','morado-naranja_b'];
        $scope.color = $scope.colores[Math.floor((Math.random() * ($scope.colores.length - 1)) + 1)];
        $scope.d = new Date();
        $scope.time = $scope.d.getHours() > 19 || $scope.d.getHours() < 7 ? 'night' : 'day'; 

        for(var i = 1; i < this.slidesNumber; i++){
            this.slides.push( { image: 'url('+this.baseUrl+ 'cliente_'+i+'.jpg)'});
        };
      
        $scope.categorias = [
            {key: 'todo',         name: 'Todo', active: true},
            {key: 'rostro',         name: 'Rostro', active: false},
            {key: 'cuerpo',         name: 'Cuespo', active: false},
            {key: 'piel',           name: 'Piel', active: false },
            {key: 'procedimientos', name: 'Procedimientos', active: false }
        ];

        $scope.changeFilter = function(list, obj){
            for(var i in list){
                list[i].active = false;
            }
            obj.active = true;
        };
        $scope.menuShow = false;
        $scope.showMenu = function(){
            $scope.menuShow = true
        };
        $scope.hideMenu = function(){
            $scope.menuShow = false;
          };

          $('h1').parallaxContent({
            shift: -15,
            duration: 1
          });
          $('#contentInfo').parallaxContent({
            shift: -15,duration: 2
          });

            var i = 0;
            var txt = 'Somos el futuro de las agencias de publicidad. Nuestra especialidad es hacer crecer tu empresa mediante el uso del Neuromarketing, Análisis de Datos y un Diseño Increíble';
            var speed = 30;

            function typeWriter() {
                if (i < txt.length) {
                    document.getElementById("typing").innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }
            typeWriter();

      }).directive('disableAnimation', function($animate){
        return {
            restrict: 'A',
            link: function($scope, $element, $attrs){
                $attrs.$observe('disableAnimation', function(value){
                    $animate.enabled(!value, $element);
                });
            }
        }
    });;
})();