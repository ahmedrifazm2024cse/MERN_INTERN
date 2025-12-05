var statusText = document.getElementById("statusText");
var changeTextBtn = document.getElementById("changeTextBtn");
var changeColorBtn = document.getElementById("changeColorBtn");
var box = document.getElementById("box");
var hideBoxBtn = document.getElementById("hideBoxBtn");
var showBoxBtn = document.getElementById("showBoxBtn");
var itemInput = document.getElementById("itemInput");
var addItemBtn = document.getElementById("addItemBtn");
var itemList = document.getElementById("itemList");
var isBlue = false;

changeTextBtn.onclick = function () {
  statusText.textContent = "Text has been changed!";
};

changeColorBtn.onclick = function () {
  if (isBlue) {
    box.style.backgroundColor = "white";
    isBlue = false;
  } else {
    box.style.backgroundColor = "lightblue";
    isBlue = true;
  }
};

hideBoxBtn.onclick = function () {
  box.style.display = "none";
};

showBoxBtn.onclick = function () {
  box.style.display = "flex";
};

addItemBtn.onclick = function () {
  var value = itemInput.value.trim();
  if (value !== "") {
    var li = document.createElement("li");
    li.textContent = value;
    itemList.appendChild(li);
    itemInput.value = "";
  }
};
