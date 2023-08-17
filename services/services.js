const url = 'https://pavelsmirnov.somee.com/api/Comments/'

const getComment = async (url) => {
     let response = await fetch(url);
     return response;
 }

async function postComment(data) {
    return await fetch( url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: data,
    })
  }

  async function removeComment(id){
    console.log(url + id);
    return await fetch( url + id, {
      method: 'DELETE',
    })
  }

