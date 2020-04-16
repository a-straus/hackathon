function comment() {
    let menu = document.createElement("div");
    menu.innerHTML = (`<div id="comment-menu">
        <input id="comment-field"></input>
        <button>Add comment</button>
        console.log(document)
    </div>`);
    document.body.appendChild(menu);
}
comment();

console.log(document)