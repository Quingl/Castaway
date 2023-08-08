// let commentContent = {
//     grade: 0,
//     commentText: "",
//     name:"",
// }




function gradeSelector(grade){
    let img = "";

    for(let i = 0; i < grade; i++){
        img += "<img src=\"img/star.png\">"
    }
    return `<div class=\"comment-back__body__grade\">${img}</div>`
}

async function service() {
    let response = await fetch("https://pavelsmirnov.somee.com/api/Comments");
    let array = await response.json(); 


    let content = [];

    for(let i in array){
        content.push(array[i]);
    }
    console.log(array);



    for (let obj of content){
        let elem = document.getElementById("commentContent");
        elem.innerHTML += "<div class=\"comment-back__body\">" +
            `${gradeSelector(obj.grade)}` +
            `<div class=\"comment-back__body__text\">${obj.comment}</div>` +
            `<div class=\"comment-back__body__name\">${obj.name}</div>` +
    "</div>";
    }
}
service();

