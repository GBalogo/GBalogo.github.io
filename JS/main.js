var preventScroll = false;  //Used to avoid flooding
var defaultTimeout = 600;   //in ms
/*
function setSmoothScroll(ev){ //Scrolls smoothly to next section
  preventDefault(ev);
  if (!preventScroll) {
    window.scrollBy({
      top: Math.sign(ev.deltaY) * getViewportHeight()*102, // could be negative value
      left: 0,
      behavior: 'smooth'
    });
    //console.log(i);
    preventScroll = true;
    setTimeout(preventQuickScroll, defaultTimeout);
  }
  return;
}

function getViewportHeight(){ //Get size of 1vh in pixels
  var vhHeight = window.innerHeight/100;
  return vhHeight;
}

window.addEventListener('wheel', setSmoothScroll);


function preventDefault(ev) { //Stops event "ev" from completing default action
  ev.preventDefault();
  //console.log('event prevented');
}

function preventQuickScroll(){  //Aux funcion, change it to generic some time
  preventScroll = false;
}
*/


window.addEventListener('wheel', setSmoothScroll);

var listOfSections = document.getElementsByClassName("topLevelSection"),
    nOfSections = listOfSections.length,
    iterator = 0,
    topNavbar = document.getElementById("topNavbar").children[0];
    //opacityControl = topNavbar.getElementsByTagName("div");
console.log(nOfSections);

function preventQuickScroll(){  //Aux funcion, change it to generic some time
  preventScroll = false;
}

function setSmoothScroll(ev){ //Scrolls smoothly to next section
  ev.preventDefault();
  if (!preventScroll) {
    iterator = iterator + Math.sign(ev.deltaY);

    if (iterator >= nOfSections || iterator <= 0){
      iterator = 0;
      topNavbar.classList.remove("navbar-dummy");
    }
    else {
      topNavbar.classList.add("navbar-dummy");
    }

    window.scrollTo({
      top: listOfSections[iterator].offsetTop, // could be negative value
      left: 0,
      behavior: 'smooth'
    });

    //console.log(i);
    preventScroll = true;
    setTimeout(preventQuickScroll, defaultTimeout);
  }


  return;
}
