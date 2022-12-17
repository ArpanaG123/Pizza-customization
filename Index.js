var img = document.getElementsByTagName("img");
var choice = document.getElementsByClassName("choice");
var dragItem = null;

for (var i of img) {
  i.addEventListener("dragstart", dragStart);
  i.addEventListener("dragend", dragEnd);
}

function dragStart() {
  dragItem = this;
  setTimeout(() => (this.style.display = "none"), 0);
}
function dragEnd() {
  setTimeout(() => (this.style.display = "block"), 0);
  dragItem = null;
}
for (var j of choice) {
  j.addEventListener("dragover", dragOver);
  j.addEventListener("dragenter", dragEnter);
  j.addEventListener("dragleave", dragLeave);
  j.addEventListener("drop", Drop);
}
function Drop() {
  this.append(dragItem);
}
function dragOver(e) {
  e.preventDefault();
  this.style.border = "5px dotted yellow";
}
function dragEnter(e) {
  e.preventDefault();
  this.style.border = "none";
  this.choice.classList.add("bg-blue", "text-white");
}
function dragLeave(e) {
  this.style.border = "none";
}
