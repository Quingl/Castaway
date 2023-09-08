const toggleLoader = () => document.getElementById('loader').classList.toggle('hidden'); // в одну строку

 const onError = () => alert("Error");

 const checkValidity = (event) => {
    const formNode = event.target.form; // убирай это
    const isValid = formNode.checkValidity();
  
    formNode.querySelector('.grade-form_button').disabled = !isValid;
  }

 const onSuccess = () => alert('Ваша заявка отправлена!'); // ПРОЙТИ ПО КАЖДОЙ СТРОЧКЕ КОДА И ПОНЯТЬ ЧТО ОНА ДЕЛАЕТ(ЗАГУГЛИТЬ) УБРАТЬ ВАЛИДЦИЮ
  

const serializeForm = (formNode) => {
    let objectForm = {};

    new FormData(formNode).forEach(function(value, key){ objectForm[key] = value; });
    return JSON.stringify(objectForm);
  }

  
  const handleFormSubmit = async (event) => {
    event.preventDefault();

      toggleLoader();
      const response = await postComment(serializeForm(event.target)); // Возвращается еще и боди и тебе надо понять как его достать и добавить в твою форму динамически
    toggleLoader();

    if (response.status === 201) {
      onSuccess();
      document.getElementById("commentConteiner").innerHTML += commentItemToHTML(await response.json());
  } else {
    onError();
  }
}

  const applicantForm = document.getElementById('grade-form');
  
  applicantForm.addEventListener('submit', handleFormSubmit);
  applicantForm.addEventListener('input', checkValidity);
  


 