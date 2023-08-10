  function toggleLoader() {
    const loader = document.getElementById('loader');
    loader.classList.toggle('hidden');
  }

  function onError(error) {
    alert(error.message);
  }

  function checkValidity(event) {
    const formNode = event.target.form;
    const isValid = formNode.checkValidity();
  
    formNode.querySelector('button').disabled = !isValid;
  }

  function onSuccess(formNode) {
    alert('Ваша заявка отправлена!');
    formNode.classList.toggle('hidden');
  }



  function serializeForm(formNode) {
    let data = new FormData(formNode);

    console.log(Array.from(data.entries()));

    var object = {};

    data.forEach(function(value, key){ object[key] = value; });
    console.log(JSON.stringify(object));
    data = JSON.stringify(object);

    return data;
  }

  async function sendData(data) {
    return await fetch('https://pavelsmirnov.somee.com/api/Comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
      body: data,
    })
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    
    let data = serializeForm(event.target);

    toggleLoader();
    const {status} = await sendData(data);
    toggleLoader();



    if (status === 200) {
      onSuccess(event.target);
  } else {
    onError(error);
  }
}
  const applicantForm = document.getElementById('grade-form');
  
  applicantForm.addEventListener('submit', handleFormSubmit);
  applicantForm.addEventListener('input', checkValidity);
  


 