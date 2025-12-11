
var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;

var imageIndex = 0;
var txtIndex = 0;
var len = imageArray.length;

function showMessage() {
    // نمایش پیام نهایی بعد از اتمام تصاویر و جملات
    document.getElementById("finalMessage").style.display = "block";
}

function showImage() {
    if (imageIndex < len) {
        // نمایش تصاویر
        myImage.setAttribute("src", imageArray[imageIndex]);
        myTxt.innerHTML = txtArray[txtIndex];
        imageIndex++;
        txtIndex++;
    } else {
        // زمانی که تمام تصاویر نمایش داده شد، پیام نهایی نمایش داده می‌شود
        showFinalMessage();
    }
}



function play() {
    if (t == 0) {
        myImage.setAttribute("src", "");
        myTxt.innerHTML = "";
        imageIndex = 0;
        txtIndex = 0;
        clearInterval(showImageInterval);
    }
    flag = 1 - flag;
    document.getElementById("typeDiv").style.opacity = flag;
    document.getElementById("imgTxt").style.opacity = 1 - flag;
    if (t == 0) {
        setInterval(showImage, 5500); // تنظیم فاصله زمانی برای نمایش تصویر و متن
    }
    t++;
}
function showFinalMessage() {
    // مخفی کردن تصویر و متن مربوطه
    document.getElementById("img").style.display = "none"; 
    document.getElementById("Txt").style.display = "none";  // مخفی کردن متن بالا
    // نمایش پیام نهایی
    document.getElementById("finalMessage").style.display = "block";  
}



function preshowImage(){
	document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.025;
		btn.style.opacity = btnVal;
	}
	else{
		clearInterval(buttonInterval);
		if(ok == 3){
			ok += 1;
		}
	}
}



function event(){

	showImageInterval = setInterval(preshowImage, 100);

	imgInterval = setInterval(function (){
		if(ok == 3){
			setTimeout(function(){buttonInterval = setInterval(buttonFadeIn, 50);}, 1500);
			clearInterval(imgInterval);
		}
	}, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

event();
