function comment() {
    let menu = document.createElement("div");
    menu.innerHTML = (`<div id="comment-menu">
        <textarea id="comment-field"></textarea>
        <button id="cmt-btn">Add comment</button>
    </div>`);
    document.body.appendChild(menu);
    document.getElementById('cmt-btn').addEventListener('click', function() {
        let comment = this.previousSibling.previousSibling.value;
        console.log(comment);
        document.getElementById('comment-menu').remove();
    });
}
document.body.addEventListener('contextmenu', comment);
// document.addEventListener('mouseup', function() {
//     let highlighted = document.getSelection();
//     console.log(highlighted);
//     highlighted.focusNode.style.backgroundColor = 'yellowgreen';
// });


console.log(document)