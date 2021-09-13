/* 1 hiện hình nền mặc định theo array 0,1,2(dot)
2 pre và next
pre : lùi đi 1  , next tiến lên 1 (+ hoặc trừ giá tri index hiện tai)
khi ấn button pre tại giá trị nhỏ nhất (index = 0) thì set index = giá trị lớn nhất (index.length) - 1 vì arr
khi index = 0 , set index = 3 (-1 , vì arr) , khi index = 3 set index = 0 (vi trí ban đầu)
nếu ấn button tại giá trị lớn nhất (index.length) thì set index = min 
Còn lại khi bấm thì lấy giá trị index tại điểm đó
nút dot : có 3 giá trị index , mỗi giá trị là 1 hình

*** nhớ chạy vòng lặp ẩn 3 div và thẻ dot để khi tại index đó thì active hoặc hiện
*/
var index = 0;
slideShow(index);

function slideShow(value) {
    var slides = document.getElementsByClassName('Slides');
    var i ;
    var dots = document.getElementsByClassName('dot');
    if (value===slides.length)
    {
        index = 0;

    }
    if(value<0)
    {
        index = slides.length -1 ;
    }
    for (i=0;i<slides.length;i++)
    {
        slides[i].style.display = "none";
    }
    for(i=0;i<dots.length;i++)
    {

        dots[i].className = dots[i].className.replace("active","");

    }
   
    slides[index].style.display = "block";
    dots[index].className = dots[index].className + " active";
}

function currentSlide(value) {
    slideShow(index=value);
}

function nextSlide(value) {
    slideShow(index= index+value);
}
