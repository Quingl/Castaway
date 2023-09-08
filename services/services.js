const url = 'https://pavelsmirnov.somee.com/api/Comments/'

const getComment = async () => { return response = await fetch(url); }// не надо передавать тут юрл 
     // в одну строку 

async function postComment(data) { // изменить назваение data на comment 
    return await fetch( url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" }, // проверить нужны ли хеддеры
      body: data,
    })
  }

  async function removeComment(id){ //delete, а не remove
    return await fetch( url + id, {
      method: 'DELETE',
    })
}

