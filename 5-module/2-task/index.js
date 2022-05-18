function toggleText() {
  let toggleText = function(event){
    let elemText = document.querySelector("#text");
    elemText.hidden = !elemText.hidden;
  }
  let button = document.querySelector(".toggle-text-button");
  button.addEventListener("click", toggleText);
}
