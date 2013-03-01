$(document).ready(function () {
	console.log('ready');

    var curPos = 0;

	slider = new Swipe($('#slider')[0], {
		callback: function(e, pos) {
                if (pos != curPos) {
                    curPos = pos;
                    $('html body').animate({scrollTop:0},"fast");
                }
			$('#log').append('<span>Current position: ' + pos + '</span><br/>');
		}
	}
	);
});
	/*
	car = $('.carousel');
	car.carousel();

	car.bind('slide', function () {
		var pos = $('.carousel-inner').find('.active').attr('number');
		console.log('slide');
		$('#log').append('<span>slide: ' + pos + '</span><br/>');
	})

	car.bind('slid', function () {
		var pos = $('.carousel-inner').find('.active').attr('number');
		console.log('slid');
		$('#log').append('<span>slid: ' + pos + '</span><br/>');
	})

// Homebrewed touchcontrols:
	var maxTime = 300, // allow movement if < 1000 ms (1 sec)
    maxDistance = 50,  // swipe movement of 50 pixels triggers the swipe
 
    target = $('.carousel'),
    startX = 0,
    startTime = 0,
    touch = "ontouchend" in document,
    startEvent = (touch) ? 'touchstart' : 'mousedown',
    moveEvent = (touch) ? 'touchmove' : 'mousemove',
    endEvent = (touch) ? 'touchend' : 'mouseup';
 
target
    .bind(startEvent, function(e){
        // prevent image drag (Firefox)
        e.preventDefault();
        startTime = e.timeStamp;
        startX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;
    })
    .bind(endEvent, function(e){
        startTime = 0;
        startX = 0;
    })
    .bind(moveEvent, function(e){
        e.preventDefault();
        var currentX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX,
            currentDistance = (startX === 0) ? 0 : Math.abs(currentX - startX),
            // allow if movement < 1 sec
            currentTime = e.timeStamp;
        if (startTime !== 0 && currentTime - startTime < maxTime && currentDistance > maxDistance) {
            if (currentX < startX) {
                // swipe left code here
                target.carousel('next');
            }
            if (currentX > startX) {
                // swipe right code here
                target.carousel('prev');
            }
            startTime = 0;
            startX = 0;
        }
    });


});
*/


// slider
// var slider = new Swipe(document.getElementById('slider'), {
//       callback: function(e, pos) {
        
//         var i = bullets.length;
//         while (i--) {
//           bullets[i].className = ' ';
//         }
//         bullets[pos].className = 'on';

//       }
//     }),