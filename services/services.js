const url = 'https://pavelsmirnov.somee.com/api/Comments'

async function getFormContent(){
     let response = await fetch(url);
     return await response.json();
 }

async function sendComment(data) {
    return await fetch( url, {
      method: 'POST',
      headers: {  },
      body: data,
    })
  }

