let div = document.createElement("div");
div.id = "div";
div.innerHTML = " Вы прочитали важное сообщение.";
document.body.append(div);
div.style.cssText=`color: blue;
    background-color: yellow;
    width: 100px;
    text-align: center;
  `;