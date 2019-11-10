//Navigation 
function navFunction() {
    let mobileNav = document.getElementById("fyloTopnav");
    if (mobileNav.className === "topnav") {
        mobileNav.className += " responsive";
    } else {
        mobileNav = "topnav";
    }
}