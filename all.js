//TOUCH

//touch
function is_touch_device() {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function (query) {
        return window.matchMedia(query).matches;
    }

    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}

//portrait visibility, card visibility
if (is_touch_device()) {
    document.querySelector(".portrait").classList.add("hidden-touch");

    $(window).scroll(function() {
        var top_of_element = $("div.flex").children().offset().top;
        var bottom_of_element = $("div.flex").children().offset().top + $("div.flex").children().outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();
    
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            $(".flex").children().addClass("active");
            $(".flex").children().children("div.lights, div.menu").addClass("active");
        } else {

        }
    });

} else {
    var images = ['bg-01.jpeg', 'bg-02.jpg', 'bg-03.jpg', 'bg-04.jpg', 'bg-05.jpg', 'bg-06.jpg', 'bg-07.jpg', 'bg-08.jpg', 'bg-09.jpg', 'bg-10.jpg', 'bg-11.jpg', 'bg-12.jpg'];
    $("div.bg").css({'background-image': 'url(img/bg/' + images[Math.floor(Math.random() * images.length)] + ')'
    });

    $("body").mouseover(function () {
        $("section").addClass("visible");
    });
    $("body").mouseleave(function () {
        $("section").removeClass("visible");
    });
}

//LOADER

//no-js remove
$(".overlay").removeClass("no-js")
$("#no-js").addClass("hidden")

// after 5 seconds
setTimeout(function () {
    document.querySelector("div.loader").classList.add("hidden")
}, 5000)

setTimeout(function () {
    document.querySelector("div.main").classList.remove("hidden")
}, 5500)

setTimeout(function () {
    document.querySelector("#info").classList.add("visible")
}, 6000)

setTimeout(function () {
    document.querySelector("#contact").classList.add("visible")
}, 7000)

setTimeout(function () {
    document.querySelector("#costs").classList.add("visible")
}, 8000)

setTimeout(function () {
    document.querySelector("#footer").classList.add("visible")
}, 9000)


//CARD

//card move with mouse
document.addEventListener("mousemove", function (event) {
    const x = event.pageX
    const y = event.pageY

    const midX = x - window.innerWidth / 2
    const midY = -y - window.innerHeight / 2

    const box = document.querySelector("section")

    box.style.left = x + 220 + "px"
    box.style.top = y + 151 + "px"

    box.style.webkitTransform = "rotateX(" + (midY * 0.5) + "deg) rotateY(" + (midX * 0.5) + "deg)"
    box.style.mozTransform = "rotateX(" + (midY * 0.5) + "deg) rotateY(" + (midX * 0.5) + "deg)"
    box.style.msTransform = "rotateX(" + (midY * 0.5) + "deg) rotateY(" + (midX * 0.5) + "deg)"
    box.style.oTransform = "rotateX(" + (midY * 0.5) + "deg) rotateY(" + (midX * 0.5) + "deg)"
    box.style.transform = "rotateX(" + (midY * 0.5) + "deg) rotateY(" + (midX * 0.5) + "deg)"
})


//WINDOWS

//windows activity
$(".flex").children().on("click touch", function () {
    $(".flex").children().removeClass("active");
    $(this).addClass("active");
}).children(".black").on("click touch", function (e) {
    e.stopPropagation();
});

$(".lightbox").on("click touch", function () {
    $(".flex").children().removeClass("active");
    $(".flex").children().children("div.lights, div.menu").removeClass("active");
});

$(".main").on("click touch", function () {
    $(".flex").children().removeClass("active");
    $(".flex").children().children("div.lights, div.menu").removeClass("active");
    $(".lightbox").removeClass("visible");
    $(".lightbox").children().removeClass("visible");
    $(".portrait").removeClass("hidden");
}).children().children().on("click touch", function (e) {
    e.stopPropagation();
});

$("div.lights").hover(function () {
    $(this).addClass("hover");
}, function () {
    $(this).removeClass("hover");
});

$(".flex").children().on("click touch", function () {
    $(".flex").children().children("div.lights, div.menu").removeClass("active");
    $(this).children("div.lights, div.menu").addClass("active");
});

//lightbox activity

$("p.black a").on("click touch", function () {
    $(".lightbox").addClass("visible");
    $(".flex").children().removeClass("active");
    $(".flex").children().children("div.lights, div.menu").removeClass("active")
    $(".portrait").addClass("hidden");
    $(".lightbox.window, .lights-light").addClass("visible");
});

$("#impressum-li").on("click touch", function () {
    $("#impressum").addClass("visible");
    $("#haftungsausschluss, #datenschutz").removeClass("visible");
});

$("#haftungsausschluss-li").on("click touch", function () {
    $("#haftungsausschluss").addClass("visible");
    $("#impressum, #datenschutz").removeClass("visible");
});

$("#datenschutz-li").on("click touch", function () {
    $("#datenschutz").addClass("visible");
    $("#haftungsausschluss, #impressum").removeClass("visible");
});

$(".lights-light, #contact div.lights, #info, #costs, #footer").on("click touch", function () {
    $(".lightbox").removeClass("visible");
    $(".lightbox").children().removeClass("visible");
    $(".portrait").removeClass("hidden");
});


//ALERT

//after 4 clicks open warning
var count = 1;
$(".lights").on("click touch", function () {
    $(this).parent().css("transition-duration", "0s");
    $(this).parent().removeClass("visible");
    count += 1;
    if (count == 5) {
        $(".main").addClass("hidden");
        setTimeout(function () {
            $("#alert").addClass("visible");
        }, 500);
    }
});


//warning buttons
$("#alert .button.blue").on("click touch", function () {
    setTimeout(function () {
        $("#alert").removeClass("visible");
    }, 100);
    $("body").on("mouseleave touchstart", function () {
        setTimeout(function () {
            $("section").removeClass("visible");
        }, 1000);
        setTimeout(function () {
            $("div.bg").addClass("hidden");
        }, 1700);
        setTimeout(function () {
            location.reload();
        }, 2400);
    })
});

$("#alert .button.grey").on("click touch", function () {
    setTimeout(function () {
        $("#alert").removeClass("visible");
    }, 100);
    setTimeout(function () {
        $("section").removeClass("visible");
    }, 2000);
    setTimeout(function () {
        $("div.bg").addClass("hidden");
    }, 2700);
    setTimeout(function () {
        location.reload();
    }, 3400);
});