function gradeSelector(grade) {
    let img = "";

    for(let i = 0; i < grade; i++) {
        img += "<img src=\"img/star.png\">" // ������ ��� ������������z
    }
    return `<div class=\"comment-back__body__grade\">${img}</div>`// ����������� ������� ����, � ������� commentSample
}

function errorMessage() { 
    return elem.innerHTML += "<div class=\"comment-back__error-message\"> Comments not found... </div>";  // ���� �� ����� ���� �� �����
}

function commentSample(obj, elem){ // ������������� obj � commentSample. �� ����� ���������� elem
    return elem.innerHTML += `<div id = ${obj.id} class=\"comment-back__body\">` +
                `<button id = \'commentButton\' type = \'button\' class = \"comment-back__delete-button\">X</button>` +
                `${gradeSelector(obj.grade)}` +
                `<div class=\"comment-back__body__text\">${obj.comment}</div>` +
                `<div class=\"comment-back__body__name\">${obj.name}</div>` +
                "</div>"; 
}

async function fillCommentContainer() {   

    let response = await getComment(url); //�� ���� ���������� url
    let elem = document.getElementById("commentContent"); // ������������� Conteiner

    if (response.ok) {

        let array = await response.json(); // ������������� array //����� ������� ���� ���� ��� � ��������� �������
        let content = []; // ������������� content �� comments

        for(let i in array)
            content.push(array[i]); 
        
        for (let obj of content) //����������
            commentSample(obj, elem); // ������������� obj // elem ������
        
        
        const removeContainer = document.getElementById('commentContent'); // � ���� ������
        removeContainer.addEventListener('click', element => {
            if (element.target.id == 'commentButton') { // �� element � this � element �� ����������, � 
                                                                    //����������� ��� � ���� ������ � ������� ���������� ���������
            removeComment(element.target.parentElement.id);
        }
    });

    } else {
        errorMessage(elem); // ������ �������� ������
    }
}

fillCommentContainer();

