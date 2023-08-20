const gradeSelector = (grade) => {
    let img = "";

    for(let i = 0; i < grade; i++)
        img += `<img src="img/star.png">`; 
    return img;
}

const errorMessage = () => `<div class="comment-back__error-message"> Comments not found... </div>`;


const commentItemToHTML = (commentItem) =>
    `<div id = ${commentItem.id} class="comment-back__body">` +
    `<button id = 'commentButton' type = \'button\' class = "comment-back__delete-button">X</button>` +
    `<div class="comment-back__body__grade">${gradeSelector(commentItem.grade)}</div>` +
    `<div class="comment-back__body__text">${commentItem.comment}</div>` +
    `<div class="comment-back__body__name">${commentItem.name}</div>` +
        "</div>";

const fillCommentContainer = async () => {
    let response = await getComment(); 
    let commentContainer = document.getElementById("commentConteiner"); 

    if (response.ok) {
        for (let commentItem of await response.json())
            commentContainer.innerHTML += commentItemToHTML(commentItem); 
     
        commentContainer.addEventListener('click', (event) => 
        (event.target.id == 'commentButton') ? removeComment(event.target.parentElement.id) : false);
    } else
        commentContainer.innerHTML = errorMessage(); 
}

fillCommentContainer();


