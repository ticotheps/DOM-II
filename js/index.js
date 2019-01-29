
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


const signMeUpBtn1 = document.querySelector('.btn-1');

// Event Listener #1 - 'click'
signMeUpBtn1.addEventListener('click', e => {
  console.log(`User has clicked on the "Sign Me Up!" button under the "Fun In The Sun" <div>, triggering this event: ${e}`);
});


const funBusH1 = document.querySelector('.logo-heading');

// Event Listener #2 - 'dblclick'
funBusH1.addEventListener('dblclick', e => {
  console.log(`User has double-clicked on the "Fun Bus" text in the <header>, triggering this event: ${e}`);
});

