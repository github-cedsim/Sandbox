function keydownAction(event) {
  // TODO: Complete keydown function
  // added 3 lines
  document.querySelector("#key").textContent = event.key;
  document.querySelector("#code").textContent = event.code;
  document.querySelector("#status").textContent = "KEYDOWN Event";
}
// do not for get to pass in the event
function keyupAction(event) {
  // added 2 lines
  document.querySelector("#key").textContent = event.key;
  document.querySelector("#code").textContent = event.code;
  // original code
  document.querySelector("#status").textContent = "KEYUP Event";


}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
// added 1 line
document.addEventListener("keydown", keydownAction);

//code from mdn
// ${event.key}
// ${event.code}
