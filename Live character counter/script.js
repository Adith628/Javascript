let text = document.getElementById("text");
let counter = document.getElementById("counter");

text.addEventListener("input", function() {
  counter.innerHTML = (text.value).length;
});