(function(){
    angular.module('app', []).controller('Ctrl', function($scope) {


        $(document).ready(function(){
            $("header a").on('click', function(event) {
                if (this.hash !== "") {event.preventDefault();var hash = this.hash;$('html, body').animate({
                  scrollTop: $(hash).offset().top - 80
                }, 800, function(){
                    //window.location.hash = hash;
                });
              }
            });

            $('.variable-width').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true
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

        // for(var i = 1; i < this.slidesNumber; i++){
        //     this.slides.push( { image: 'url('+this.baseUrl+ 'cliente_'+i+'.png)'});
        // };

        
      
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
            var txt = 'Cambiamos al mundo un cliente a la vez, a través de nuestro diseño, marketing y estrategias.';
            var speed = 30;


            function typeWriter() {
                if (i < txt.length) {
                    document.getElementById("typing").innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }
            typeWriter();



            jssor_1_slider_init = function() {

                var jssor_1_options = {
                  $AutoPlay: 0,
                  $SlideDuration: 800,
                  $SlideEasing: $Jease$.$OutQuint,
                  $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$
                  },
                  $BulletNavigatorOptions: {
                    $Class: $JssorBulletNavigator$
                  }
                };
    
                var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    
                /*#region responsive code begin*/
    
                var MAX_WIDTH = 1500;
    
                function ScaleSlider() {
                    var containerElement = jssor_1_slider.$Elmt.parentNode;
                    var containerWidth = containerElement.clientWidth;
    
                    if (containerWidth) {
    
                        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
    
                        jssor_1_slider.$ScaleWidth(expectedWidth);
                    }
                    else {
                        window.setTimeout(ScaleSlider, 5);
                    }
                }
    
                ScaleSlider();
    
                $Jssor$.$AddEvent(window, "load", ScaleSlider);
                $Jssor$.$AddEvent(window, "resize", ScaleSlider);
                $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
                /*#endregion responsive code end*/
            };

            setTimeout(function(){
                jssor_1_slider_init();
            },1000);



            $scope.services = [
                {
                    categorias: ['todo','rostro'],
                    title: 'Branding',
                    desc: 'Diseñamos una marca que perdure y se posicione en la mente de las personas',
                    imgs: ['Servicios-1b.png'],
                    backgroundColor: '#339999'
                },
                {
                    categorias: ['todo','rostro'],
                    title: 'Redes Sociales',
                    desc: 'Nos aseguramos de que tu marca tenga presencia en las redes, generando un diálogo con tu audiencia y entregando resultados que ven más de los likes.',
                    imgs: ['Servicios-2b.png'],
                    backgroundColor: '#663399'
                },
                {
                    categorias: ['todo','cuerpo'],
                    title: 'Desarrollo Web',
                    desc: 'Colocamos tu marca en el mundo digital y la acercamos a los 4 billones de usuarios que actualmente compran, investigan y se entretienen a travéz de internet',
                    imgs: ['Servicios-3b.png'],
                    backgroundColor: '#993399'
                }
            ];

            $scope.servicio = {};
            $scope.fullActive = false;
            $scope.full = function(obj){
                console.log("XD");
                $scope.servicio = obj;
                $scope.fullActive = true;
            };
            $scope.min = function(){
                $scope.fullActive = false;
            };


      }).directive('disableAnimation', function($animate){
        return {
            restrict: 'A',
            link: function($scope, $element, $attrs){
                $attrs.$observe('disableAnimation', function(value){
                    $animate.enabled(!value, $element);
                });
            }
        }
    });
})();