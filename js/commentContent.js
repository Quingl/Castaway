function gradeSelector(grade){
    let img = "";

    for(let i = 0; i < grade; i++){
        img += "<img src=\"img/star.png\">"
    }
    return `<div class=\"comment-back__body__grade\">${img}</div>`
}
// fillComments Block  
async function fillCommentContainer() {   
    let response = await getComment(url);
    array = await response.json();
    if (response.ok){

    let content = [];

    for(let i in array){
        content.push(array[i]);
    }

    for (let obj of content){
        let elem = document.getElementById("commentContent");
        elem.innerHTML += "<div class=\"comment-back__body\">" +
            `${gradeSelector(obj.grade)}` +
            `<div class=\"comment-back__body__text\">${obj.comment}</div>` +
            `<div class=\"comment-back__body__name\">${obj.name}</div>` +
    "</div>";
    }
} else {
    console.log(`Comments is not added on page, status: ${response.status}`);
}
}
fillCommentContainer();

