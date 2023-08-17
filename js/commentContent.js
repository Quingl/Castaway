function gradeSelector(grade) {
    let img = "";

    for(let i = 0; i < grade; i++) {
        img += "<img src=\"img/star.png\">" // Сделай без экранированиz
    }
    return `<div class=\"comment-back__body__grade\">${img}</div>`// переместить внешний блок, в функцию commentSample
}

function errorMessage() { 
    return elem.innerHTML += "<div class=\"comment-back__error-message\"> Comments not found... </div>";  // плюс не нужен елем не нужен
}

function commentSample(obj, elem){ // переименовать obj и commentSample. не нужно передавать elem
    return elem.innerHTML += `<div id = ${obj.id} class=\"comment-back__body\">` +
                `<button id = \'commentButton\' type = \'button\' class = \"comment-back__delete-button\">X</button>` +
                `${gradeSelector(obj.grade)}` +
                `<div class=\"comment-back__body__text\">${obj.comment}</div>` +
                `<div class=\"comment-back__body__name\">${obj.name}</div>` +
                "</div>"; 
}

async function fillCommentContainer() {   

    let response = await getComment(url); //не нало передавать url
    let elem = document.getElementById("commentContent"); // переименовать Conteiner

    if (response.ok) {

        let array = await response.json(); // переименовать array //ВАЖНО СДЕЛАТЬ ВЕСЬ ЭТОТ КОД В ОТДЕЛЬНОЙ ФУНКЦИИ
        let content = []; // переименовать content на comments

        for(let i in array)
            content.push(array[i]); 
        
        for (let obj of content) //КОНЕЦВАЖНО
            commentSample(obj, elem); // переименовать obj // elem убрать
        
        
        const removeContainer = document.getElementById('commentContent'); // в одну строку
        removeContainer.addEventListener('click', element => {
            if (element.target.id == 'commentButton') { // не element а this и element не передавать, и 
                                                                    //переделеать все в одну строку с помощью тернарного оператора
            removeComment(element.target.parentElement.id);
        }
    });

    } else {
        errorMessage(elem); // убрать фигурные скобки
    }
}

fillCommentContainer();

