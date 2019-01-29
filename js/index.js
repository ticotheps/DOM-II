
// Using your index.js file, create 10 unique event listeners. using your
// creativity to make the Fun Bus site more interactive. Here are some
// unique events you could try to use:
// -mouseover
// -keydown
// -wheel
// -drag / drop
// -load
// -focus
// -resize
// -scroll
// -select
// -dblclick

// Then, Using the 10 unique events, find ways to update the DOM in
// creative ways. For example you could change colors, animate objects,
// remove objects, etc.
//   -Nest two similar events somewhere in the site and prevent the
//   event propagation properly.
//   -Stop the navigation from items from refreshing the page by
//   using preventDefault()


const signMeUpBtn1 = document.querySelector('div.btn-1');

// Event Listener #1 - 'click'
signMeUpBtn1.addEventListener('click', e => {
  console.log(`User has clicked on the "Sign Me Up!" button <div> element with class '.btn-1', triggering this event: ${e}`);
  signMeUpBtn1.style.color = "yellow";
  signMeUpBtn1.style.backgroundColor = "blue";
  signMeUpBtn1.textContent = "GO BLUE!";
});


const funBusH1 = document.querySelector('.logo-heading');

// Event Listener #2 - 'dblclick'
funBusH1.addEventListener('dblclick', e => {
  console.log(`User has double-clicked on the "Fun Bus" text in the <header> element, triggering this event: ${e}`);
  funBusH1.style.backgroundColor = "aqua";
  funBusH1.style.color = "red";
  TweenMax.to(".logo-heading", 1, {x:300, ease:Bounce.easeOut});
});


const funBusImage = document.querySelector('.fun-bus-image');

// Event Listener #3 - 'mouseover'
funBusImage.addEventListener('mouseover', e => {
  console.log(`User has moved the pointing device on to the image of the toy bus in the sand, triggering this event: ${e}`);
  funBusImage.style.border = "5px solid green";
  TweenMax.to(".fun-bus-image", 3, {x:0, rotationY:360});
});


const adventureImage = document.querySelector('.adventure-image');

// Event Listener #4 - 'mouseenter'
adventureImage.addEventListener('mouseenter', e => {
  console.log(`User has moved the pointing device into the <img> element of the 'map on a table', triggering this event: ${e}`);
  adventureImage.style.borderRadius = "50%";
});


const boatImage = document.querySelector('.boat-image');

// Event Listener #5 - 'contextmenu'
boatImage.addEventListener('contextmenu', e => {
  console.log(`User has right-clicked on the image of the boat traveling through the neighborhood, triggering this event: ${e}`);
  boatImage.style.borderRadius = "0px";
  boatImage.style.border = "5px solid orange";
});


const adventureAwaitsH2 = document.querySelector('div.adventure-awaits h2');

// Event Listener #6 - 'mouseup'
adventureAwaitsH2.addEventListener('mouseup', e => {
  console.log(`User has released the pointing device button over the "Adventure Awaits" <h2> element, triggering this event: ${e}`);
  adventureAwaitsH2.style.fontSize = "65px";
  adventureAwaitsH2.style.textAlign = "center";
});


const letsGoText = document.querySelector('div.lets-go p');

// Event Listener #7 - 'copy'
letsGoText.addEventListener('copy', e => {
  console.log(`User has initiated the 'copy' action on the first <p> element's text of the "Let's Go!" <div>, triggering this event: ${e}`);
  letsGoText.style.color = "purple";
});


const navLink = document.querySelector('.nav-link');

// Event Listener #8a - 'mouseout'
// The placement of the '.stopPropagation()' method on this .navLink
// event listener stops it from bubbling up in the DOM to it's parent
// element's (.navBar) event listener.
navLink.addEventListener('mouseout', e => {
  console.log(`User has moved their pointing device off of an <a> element, triggering this event: ${e}`);
  navLink.style.fontSize = "32px";
  navLink.style.color = "blue";
  e.stopPropagation();
});


// Event Listener #9 - 'scroll'
document.addEventListener('scroll', e => {
    console.log(`User has used the window's scrolling capability, triggering this event: ${e}`);
  });


// Event Listener #10 - 'resize'
window.addEventListener('resize', e => {
    console.log(`User has resized the document view, triggering this event: ${e}`);
  });


const signMeUpBtn2 = document.querySelector('div.btn-2');

// *EXTRA* Event Listener #11 - 'click'
signMeUpBtn2.addEventListener('click', e => {
    console.log(`User has clicked on the "Sign Me Up!" button <div> element with class '.btn-2', triggering this event: ${e}`);
});


const signMeUpBtn3 = document.querySelector('div.btn-3');

// *EXTRA* Event Listener #12 - 'click'
signMeUpBtn3.addEventListener('click', e => {
    console.log(`User has clicked on the "Sign Me Up!" button <div> element with class '.btn-3', triggering this event: ${e}`);
});


const navBar = document.querySelector('.nav');

// Event Listener #8b - 'mouseout' (PARENT ELEMENT to nested .navLink <a> elements)
navBar.addEventListener('mouseout', e => {
  console.log(`User has moved their pointing device off of the <nav> element, triggering this event: ${e}`);
});


// *EXTRA* Event Listener #13 - 'click'

navLink.addEventListener('click', e => {
    console.log(`User has clicked on an <a> element within the <nav> element, triggering this event: ${e}, BUT the default action has been STOPPED!`);
    e.preventDefault();
});

