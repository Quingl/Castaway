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
    return `<div class=\"commentBack__Body__Grade\">${img}</div>`
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
        elem.innerHTML += "<div class=\"commentBack__Body\">" +
            `${gradeSelector(obj.grade)}` +
            `<div class=\"commentBack__Body__Text\">${obj.comment}</div>` +
            `<div class=\"commentBack__Body__Name\">${obj.name}</div>` +
    "</div>";
    }
}
service();

