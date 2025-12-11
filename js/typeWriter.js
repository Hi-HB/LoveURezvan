let i = 0;
let text1 = "Dear Rezvan, every moment we've spent together is a precious memory. 💖";
let text2 = "I know I’ve hurt you sometimes, and I’m really sorry. You mean the world to me...";
let speed = 80; // کاهش مقدار سرعت تایپ

function typeWriter(text, para) {
    if (ok == 2) {
        clearInterval(typeInterval);
    }
    if (i < text.length) {
        document.getElementById(para).innerHTML += text.charAt(i);
        i++;
    } else {
        if (ok == 0) {
            i = 0;
        }
        ok += 1;
    }
}

var typeInterval;

typeInterval = setInterval(function() {
    if (ok == 0) {
        typeWriter(text1, "txt1");
    } else if (ok == 1) {
        typeWriter(text2, "txt2");
    }
}, speed); // استفاده از سرعت ثابت برای تایپ
