// Add rotation to pawprint, fill in circle color, add gradient to bar
function cartClick() {
    TweenMax.to("#icon", 1.5, { left: "29.7%", rotation: 0})
    TweenMax.to(".bar", 5, { background: "linear-gradient(to right,  #ededed 0%,#ededed 43%,#ededed 50%,#ededed 100%)" })
    TweenMax.to(".cart", 1.5, { backgroundColor: "#C8102D", transform: "scale(1.1)"})
    TweenMax.to(".payment", 1.5, { backgroundColor: "#EDEDED" })
    TweenMax.to(".shipping", 1.5, { backgroundColor: "#EDEDED" })
    TweenMax.to(".summary", 1.5, { backgroundColor: "#EDEDED" })
}
function shippingClick() {
    TweenMax.to("#icon", 1.5, { left: "43%", rotation: 360 })
    TweenMax.to(".bar", 1.5, { background: "linear-gradient(to right,  #c8102d 0%,#ededed 43%,#ededed 50%,#ededed 100%)" })
    TweenMax.to(".shipping", 1.5, { backgroundColor: "#C8102D", transform: "scale(1.1)" })
    TweenMax.to(".cart", 1.5, { backgroundColor: "#C8102D", transform: "scale(1)"})
    TweenMax.to(".payment", 1.5, { backgroundColor: "#EDEDED" })
    TweenMax.to(".summary", 1.5, { backgroundColor: "#EDEDED" })
}
function paymentClick() {
    TweenMax.to("#icon", 1.5, { left: "56.4%", rotation: 720 })
    TweenMax.to(".bar", 1.5, { ease: 2, background: "linear-gradient(to right,  #c8102d 0%,#c8102d 56%,#f6f6f6 70%,#f6f6f6 100%)" })
    TweenMax.to(".payment", 1.5, { backgroundColor: "#C8102D", transform: "scale(1.1)"})
    TweenMax.to(".cart", 1.5, { backgroundColor: "#C8102D", transform: "scale(1)" })
    TweenMax.to(".shipping", 1.5, { backgroundColor: "#C8102D", transform: "scale(1)" })
    TweenMax.to(".summary", 1.5, { backgroundColor: "#EDEDED" })
}
function summaryClick() {
    TweenMax.to("#icon", 1.5, { left: "69.7%", rotation: 1080 })
    TweenMax.to(".bar", 1.5, { background: "linear-gradient(to right,  #c8102d 0%,#c8102d 56%,#c8102d 70%,#c8102d 100%)" })
    TweenMax.to(".summary", 1.5, { backgroundColor: "#C8102D", transform: "scale(1.1)" })
    TweenMax.to(".cart", 1.5, { backgroundColor: "#C8102D", transform: "scale(1)" })
    TweenMax.to(".shipping", 1.5, { backgroundColor: "#C8102D", transform: "scale(1)" })
    TweenMax.to(".payment", 1.5, { backgroundColor: "#C8102D", transform: "scale(1)"})
}