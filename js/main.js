$(function() {

    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: false,
        nextArrow: false,
    });




});

// about-tabs
function openTabs(evt, tabsName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("about-inner__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("about-inner__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabsName).style.display = "block";
    evt.currentTarget.className += " active";
}

// counters
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('counterNum');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value;
        }

    }

    animate();
});

// плавне прокручувння
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 400,
    framesCount = 20;

anchors.forEach(function(item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function(e) {
        // убираем стандартное поведение
        e.preventDefault();

        // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
        let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

        // запускаем интервал, в котором
        let scroller = setInterval(function() {
            // считаем на сколько скроллить за 1 такт
            let scrollBy = coordY / framesCount;

            // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
            // и дно страницы не достигнуто
            if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                // то скроллим на к-во пикселей, которое соответствует одному такту
                window.scrollBy(0, scrollBy);
            } else {
                // иначе добираемся до элемента и выходим из интервала
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
            // время интервала равняется частному от времени анимации и к-ва кадров
        }, animationTime / framesCount);
    });
});


// button top

var btn = $('#button-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

// mobile menu slide
/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}