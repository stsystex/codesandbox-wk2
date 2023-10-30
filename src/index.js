import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //alert(inputText);

  createImcompleteList(inputText);
};

const deleteFromInCompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

const createImcompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);

  const li = document.createElement("li");
  li.innerText = text;
  // console.log(li);

  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    // alert("完了");
    //deleteFromInCompleteList(completebutton.parrentNode);

    const addTarget = completebutton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const liadd = document.createElement("li");
    liadd.innerText = text;

    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      // alert(1);
      const deleteTargetComp = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTargetComp);

      const backtext = backbutton.parentNode.firstElementChild.innerText;
      createImcompleteList(backtext);
    });

    addTarget.appendChild(liadd);
    addTarget.appendChild(backbutton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    // alert("削除");
    const deleteTarget = deletebutton.parentNode;
    deleteFromInCompleteList(deleteTarget);

    // const deleteTarget = deletebutton.parentNode;
    // document.getElementById("imcomplete-list").removeChild(deleteTarget);
  });

  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);

  //追加
  document.getElementById("imcomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
