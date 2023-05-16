const form = document.getElementById("form");
form.addEventListener("submit", function (someForm) {
  const data = new FormData(this);
  const myData = {};
  for (let i = 0; i < form.elements.length; i++) {
    let myElements = form.elements[i];
    if (myElements.name && myElements.value) {
      myData[myElements.name] = myElements.value;
    }
    console.log(myData);
  }
});
