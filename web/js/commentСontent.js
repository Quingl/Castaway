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
    return `<div class=\"commentGrade\">${img}</div>`
}

async function service() {
    let response = await fetch("https://pavelsmirnov.somee.com/api/Comments");
    let array = await response.json(); 


    let content = [];

    for(let i in array){
        content.push(array[i]);
        console.log(i);
    }
    console.log(array);



    for (let obj of content){
        let elem = document.getElementById("commentContent");
        elem.innerHTML += "<div class=\"comment\">" +
            `${gradeSelector(obj.grade)}` +
            `<div class=\"commentText\">${obj.comment}</div>` +
            `<div class=\"commentName\">${obj.name}</div>` +
    "</div>";
    }
}
service();

