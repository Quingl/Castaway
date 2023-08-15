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

    var objectForm = {};

    data.forEach(function(value, key){ objectForm[key] = value; });
    return JSON.stringify(objectForm);
  }

  
  async function handleFormSubmit(event) {
    event.preventDefault();
    
    let data = serializeForm(event.target);

    toggleLoader();
    const {status} = await postComment(data);
    toggleLoader();

    if (status === 201) {
      onSuccess(event.target);
  } else {
    onError(error);
  }
}

  const applicantForm = document.getElementById('grade-form');
  
  applicantForm.addEventListener('submit', handleFormSubmit);
  applicantForm.addEventListener('input', checkValidity);
  


 