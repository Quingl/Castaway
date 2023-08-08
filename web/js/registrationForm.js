function toggleLoader() {
    const loader = document.getElementById('loader')
    loader.classList.toggle('hidden')
  }

  function onError(error) {
    alert(error.message)
  }


  function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()
  
    formNode.querySelector('button').disabled = !isValid
  }




function onSuccess(formNode) {
    alert('Ваша заявка отправлена!')
    formNode.classList.toggle('hidden')
  }

function serializeForm(formNode) {
    const data = new FormData(formNode);
    console.log(Array.from(data.entries()))
    return data;
  }

  async function sendData(data) {
    return await fetch('https://pavelsmirnov.somee.com/api/Comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }


  

async function handleFormSubmit(event) {
    event.preventDefault()
    
    const data = serializeForm(event.target);
    toggleLoader()
    const {status} = await sendData(data);
    toggleLoader()

    console.log(status);

    if (status === 200) {
        onSuccess(event.target);
  } else {
    onError(error);
  }
}

  const applicantForm = document.getElementById('grade-form');
  applicantForm.addEventListener('submit', handleFormSubmit);
  applicantForm.addEventListener('input', checkValidity)
  


 