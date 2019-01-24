// Adds animation and color to progress bar to show where you currently are

document.getElementsByClassName("cart").onclick = function() {
    cartClick();
};
document.getElementsByClassName("shipping").onclick = function() {
    shippingClick();
};
document.getElementsByClassName("payment").onclick = function() {
    paymentClick();
};
document.getElementsByClassName("summary").onclick = function() {
    summaryClick();
};

// Add rotation to pawprint and color the currently selected circle to red
function cartClick() {
    TweenMax.to("#icon", 1.5, { left: "29.7%", rotation: 0 })
    TweenMax.to(".cart", 1.5, { backgroundColor: "#C8102D" })
    TweenMax.to(".payment", 1.5, { backgroundColor: "#EDEDED" })
    TweenMax.to(".shipping", 1.5, { backgroundColor: "#EDEDED" })
    TweenMax.to(".summary", 1.5, { backgroundColor: "#EDEDED" })
}
function shippingClick() {
    TweenMax.to("#icon", 1.5, { left: "43%", rotation: 360 })
    TweenMax.to(".shipping", 1.5, { backgroundColor: "#C8102D" })
    TweenMax.to(".cart", 1.5, { backgroundColor: "#C8102D" })
    TweenMax.to(".payment", 1.5, { backgroundColor: "#EDEDED" })
    TweenMax.to(".summary", 1.5, { backgroundColor: "#EDEDED" })
}
function paymentClick() {
    TweenMax.to("#icon", 1.5, { left: "56.4%", rotation: 720 })
    TweenMax.to(".payment", 1.5, { backgroundColor: "#C8102D" })
    TweenMax.to(".cart", 1.5, { backgroundColor: "#C8102D" })
    TweenMax.to(".shipping", 1.5, { backgroundColor: "#C8102D" })
    TweenMax.to(".summary", 1.5, { backgroundColor: "#EDEDED" })
}
function summaryClick() {
    TweenMax.to("#icon", 1.5, { left: "69.7%", rotation: 1080 })
    TweenMax.to(".summary", 1.5, { backgroundColor: "#C8102D" })
    TweenMax.to(".cart", 1.5, { backgroundColor: "#C8102D" })
    TweenMax.to(".shipping", 1.5, { backgroundColor: "#C8102D" })
    TweenMax.to(".payment", 1.5, { backgroundColor: "#C8102D" })
}