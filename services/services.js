const url = 'https://pavelsmirnov.somee.com/api/Comments/'

const getComment = async (url) => { // не надо передавать тут юрл 
     let response = await fetch(url);// в одну строку 
     return response;
 }

async function postComment(data) { // изменить назваение data на comment 
    return await fetch( url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" }, // проверить нужны ли хеддеры
      body: data,
    })
  }

  async function removeComment(id){ //delete, а не remove
    console.log(url + id); // опять консоль лог
    return await fetch( url + id, {
      method: 'DELETE',
    })
}

