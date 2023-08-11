const url = 'https://pavelsmirnov.somee.com/api/Comments'

async function getFormContent(url){
     let response = await fetch(url);
     console.log(response);
     return response;
 }

async function sendComment(data) {
    return await fetch( url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: data,
    })
  }

