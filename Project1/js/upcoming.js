"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
	var image4 = $("image4");
	var image5 = $("image5");
	var image6 = $("image6");
	var image7 = $("image7");
	var image8 = $("image8");
	var image9 = $("image9");
	var image10 = $("image10");
	var image11 = $("image11");
	var image12 = $("image12");
    
    // preload images 
    var links = $("image_list").getElementsByTagName("a");
    var i, link, image;
    for ( i = 0; i < links.length; i++ ) {
        link = links[i];
        image = new Image();
        image.src = link.href;
    };

    // attach mouseover and mouseout events for each image
	image4.onmouseover = function() {
        image4.src = "imgs/QP-D.jpg";
    };
    image4.onmouseout = function() {
        image4.src = "imgs/QP.jpg";
    };
	
	image5.onmouseover = function() {
        image5.src = "imgs/AIW-D.jpg";
    };
    image5.onmouseout = function() {
        image5.src = "imgs/AIW.jpg";
    };
	
	image6.onmouseover = function() {
        image6.src = "imgs/DP2-D.jpg";
    };
    image6.onmouseout = function() {
        image6.src = "imgs/DP2.jpg";
    };
	
	image7.onmouseover = function() {
        image7.src = "imgs/SOL-D.jpg";
    };
    image7.onmouseout = function() {
        image7.src = "imgs/SOL.jpg";
    };
	
	image8.onmouseover = function() {
        image8.src = "imgs/TI2-D.jpg";
    };
    image8.onmouseout = function() {
        image8.src = "imgs/TI2.jpg";
    };
	
	image9.onmouseover = function() {
        image9.src = "imgs/JWF-D.jpg";
    };
    image9.onmouseout = function() {
        image9.src = "imgs/JWF.jpg";
    };
	
	image10.onmouseover = function() {
        image10.src = "imgs/AMW-D.jpg";
    };
    image10.onmouseout = function() {
        image10.src = "imgs/AMW.jpg";
    };
	
	image11.onmouseover = function() {
        image11.src = "imgs/TP-D.jpg";
    };
    image11.onmouseout = function() {
        image11.src = "imgs/TP.jpg";
    };
	
	image12.onmouseover = function() {
        image12.src = "imgs/VM-D.jpg";
    };
    image12.onmouseout = function() {
        image12.src = "imgs/VM.jpg";
    };
};
