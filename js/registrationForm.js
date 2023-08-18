const toggleLoader = () => document.getElementById('loader').classList.toggle('hidden'); // в одну строку

 const onError = (error) => alert(error.message);

  function checkValidity(event) {
    const formNode = event.target.form; // убирай это
    const isValid = formNode.checkValidity();
  
    formNode.querySelector('button').disabled = !isValid;
  }

 const onSuccess = (formNode) => {
    alert('Ваша заявка отправлена!');
    formNode.classList.toggle('hidden'); // ПРОЙТИ ПО КАЖДОЙ СТРОЧКЕ КОДА И ПОНЯТЬ ЧТО ОНА ДЕЛАЕТ(ЗАГУГЛИТЬ) УБРАТЬ ВАЛИДЦИЮ
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
      const { status} = await postComment(data); // Возвращается еще и боди и тебе надо понять как его достать и добавить в твою форму динамически
    toggleLoader();

    if (status === 201) {
      onSuccess(event.target);
  } else {
    onError(error);
  }
}

  const applicantForm = document.getElementById('grade-form');
  
  applicantForm.addEventListener('submit', handleFormSubmit);
  // applicantForm.addEventListener('input', checkValidity);
  


 