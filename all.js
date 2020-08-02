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

    $("#info").addClass("active");
    $("#info").children("div.lights, div.menu").addClass("active");
    
} else {
    var images = ['bg-01.jpeg'];
    $("div.bg").css({'background-image': 'url(img/bg/' + images[Math.floor(Math.random() * images.length)] + ')'
    });

    /*$("body").mouseover(function () {
        $("section").addClass("visible");
    });
    $("body").mouseleave(function () {
        $("section").removeClass("visible");
    });*/
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
/*document.addEventListener("mousemove", function (event) {
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
})*/


//WINDOWS

//windows activity
$(".flex").children().on("click touch", function () {
    $(".flex").children().removeClass("active");
    $(".flex").children().css("cursor", "default");
    $(this).addClass("active");
    $(this).css("cursor", "auto");
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
    $(".flex").children().css("cursor", "default");
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
    $(".flex").children().css("cursor", "default");
    $(".flex").children().children("div.lights, div.menu").removeClass("active")
    $(".portrait").addClass("hidden");
    $(".lightbox.window, .lights-light").addClass("visible");
});

$("#fernwartung-li").on("click touch", function () {
    $("#fernwartung").addClass("visible");
    $("#impressum, #haftungsausschluss, #datenschutz").removeClass("visible");
});

$("#impressum-li").on("click touch", function () {
    $("#impressum").addClass("visible");
    $("#fernwartung, #haftungsausschluss, #datenschutz").removeClass("visible");
});

$("#haftungsausschluss-li").on("click touch", function () {
    $("#haftungsausschluss").addClass("visible");
    $("#fernwartung, #impressum, #datenschutz").removeClass("visible");
});

$("#datenschutz-li").on("click touch", function () {
    $("#datenschutz").addClass("visible");
    $("#fernwartung, #haftungsausschluss, #impressum").removeClass("visible");
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
        /*setTimeout(function () {
            $("section").removeClass("visible");
        }, 1000);
        setTimeout(function () {
            $("div.bg").addClass("hidden");
        }, 1700);
        setTimeout(function () {
            location.reload();
        }, 2400);*/
        setTimeout(function () {
            $("body").css("cursor", "none");
        }, 500);
        setTimeout(function () {
            $("div.bg").addClass("hidden");
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 1700);
    })
});

$("#alert .button.grey").on("click touch", function () {
    setTimeout(function () {
        $("#alert").removeClass("visible");
    }, 100);
    /*setTimeout(function () {
        $("section").removeClass("visible");
    }, 2000);
    setTimeout(function () {
        $("div.bg").addClass("hidden");
    }, 2700);
    setTimeout(function () {
        location.reload();
    }, 3400);*/
    setTimeout(function () {
        $("body").css("cursor", "none");
    }, 2000);
    setTimeout(function () {
        $("div.bg").addClass("hidden");
    }, 2500);
    setTimeout(function () {
        location.reload();
    }, 3200);
});