const url = 'https://pavelsmirnov.somee.com/api/Comments'

async function getComment(url){
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

