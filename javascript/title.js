if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}
function loaded() {
    setInterval(loop, 400);
}
var x = 0;
var titleText = [
       
    "[ _ _ _ _ _ _ _ _ _ _ ]",
    "[ c _ _ _ _ _ _ _ _ _ ]",
    "[ c r _ _ _ _ _ _ _ _ ]",
    "[ c r y _ _ _ _ _ _ _ ]",
    "[ c r y 4 _ _ _ _ _ _ ]",
    "[ c r y 4 m _ _ _ _ _ ]",
    "[ c r y 4 m e _ _ _ _ ]",
    "[ c r y 4 m e . _ _ _ ]",
    "[ c r y 4 m e . w _ _ ]",
    "[ c r y 4 m e . w t _ ]",
    "[ c r y 4 m e . w t f ]",
    "[ c r y 4 m e . w t _ ]",
    "[ c r y 4 m e . w _ _ ]",
    "[ c r y 4 m e . _ _ _ ]",
    "[ c r y 4 m e _ _ _ _ ]",
    "[ c r y 4 m _ _ _ _ _ ]",
    "[ c r y 4 _ _ _ _ _ _ ]",
    "[ c r y _ _ _ _ _ _ _ ]",
    "[ c r _ _ _ _ _ _ _ _ ]",
    "[ c _ _ _ _ _ _ _ _ _ ]",
    "[ _ _ _ _ _ _ _ _ _ _ ]",
];
function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}
