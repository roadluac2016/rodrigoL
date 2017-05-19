
// Array Imagenes


// arrSprite would be an array of images
// each index represents a frame in your sprite
// for the purposes of this test i'll create an array of integers



var arrSprite1 = [0, 4, 8, 12, 15, 18, 20, 23, 24, 25, "28 años" + "<br>" + "Año: 2017"];


// Images for Array:
    var imagesUno = new Image();
    imagesUno.src = '././images/retrato/retra1.png';

    var imagesDos = new Image();
    imagesDos.src = '././images/retrato/retra2.png';

    var imagesTres = new Image();
    imagesTres.src = '././images/retrato/retra3.png';

    var imageCuatro = new Image();
    imageCuatro.src = '././images/retrato/retra4.png';

    var imageCinco = new Image();
    imageCinco.src = '././images/retrato/retra5.png';

    var imageSeis = new Image();
    imageSeis.src = '././images/retrato/retra6.png';

    var imageSiete = new Image();
    imageSiete.src = '././images/retrato/retra7.png';

    var imageOcho = new Image();
    imageOcho.src = '././images/retrato/retra8.png';

    var imageNueve = new Image();
    imageNueve.src = '././images/retrato/retra9.png';

    var imageDiez = new Image();
    imageDiez.src = '././images/retrato/retra10.png';

    var imageOnce = new Image();
    imageOnce.src = '././images/retrato/retra11.png';

    var imageDoce = new Image();
    imageDoce.src = '././images/retrato/retra12.png';

    var imageTrece = new Image();
    imageTrece.src = '././images/retrato/retra13.png';

    var imageCatorce = new Image();
    imageCatorce.src = '././images/retrato/retra14.png';

    var imageQuince = new Image();
    imageQuince.src = '././images/retrato/retra15.png';

    var imageDiezSeis = new Image();
    imageDiezSeis.src = '././images/retrato/retra16.png';
    


// Array of images:
    var arrayOfImages = [];
	    arrayOfImages.push(	   

	    		imagesUno,
		    	imagesDos,
		    	imagesTres,
		    	imageCuatro,
		    	imageCinco,
		    	imageSeis,
		    	imageSiete,
		    	imageOcho,
		    	imageNueve,
		    	imageDiez,
		    	imageOnce,
		    	imageDoce,
		    	imageTrece,
		    	imageCatorce,
		    	imageQuince,
		    	imageDiezSeis
		 );



// $div1 is a container within which we'll place our animation
var $div1 = $('.spriteManoCabezaBox');
var $titleHome = $('.titleHome');

// create a new SpritePlayer() to handle our animation
//var player = new SpritePlayer(counterBoxxx, arrSprite1, 100);
var player2 = new SpritePlayer($div1, arrayOfImages, 100);

// set the hover in/out event handler of our container.
//$titleHome.hover(player.forward, player.reverse);
$titleHome.hover(player2.forward, player2.reverse);

function SpritePlayer($container, arrSprite, speed) {
    var int, cur = 0, min = 0, max = arrSprite.length;

    // give $container the first frame in our sprite (arrSprite)
    $container.html(getFrame(min));

    return {
        forward: function () { playSprite(true); },
        reverse: function () { playSprite(false); }
    };
    
    function getFrame(i) { return arrSprite[i]; }
    
    function playSprite(forward) {
        var limit = forward ? max : min;
        
        clearInterval(int); int = setInterval(function() {
            $container.html(getFrame(forward ? ++cur : --cur));
            cur === limit && clearInterval(int); }, speed);
    }
};

function makeArray(obj) {
    return Array.prototype.slice.call(obj);
}






























// Nave Cuadrada

        $('html').mousemove(function(e){
                var x = e.pageX - this.offsetLeft;
                var y = e.pageY - this.offsetTop;
                $('.nave1').css({'top': x,'left': y}); 
        });





// Alineados
$(document).ready(function () {
    var mouseX = 0,
        mouseY = 0;
    $(window).mousemove(function (e) {
        mouseX = Math.min(e.pageX);
        mouseY = Math.min(e.pageY);
    });

    var followers = $(".stuck");

    followers.each(function () {
        var randomColor = 'rgb('
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 56)) + ','
            + (Math.floor(Math.random() * 156)) + ')';
        var follower = $(this).css({backgroundColor: randomColor}),
            jump = 10 + (Math.random() * 50),
            xp = 0,
            yp = 0;

        var loop = setInterval(function () {
            // higher is slower
            xp += (mouseX - xp) / jump;
            yp += (mouseY - yp) / jump;
            follower.css({
                left: xp,
                top: yp
            });
        }, 30);
    });

});
















//Circulos Random



$(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.ojoCirculo2').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.ojoCirculo2').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

