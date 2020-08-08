//Procurar o botao
document.querySelector("#add-time")
  //Quando clicar no botao
  .addEventListener('click', cloneField)



//Executar uma ação
function cloneField() {
  //Diplicar os campos. que campos??
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  //limpar os campos
  const fields = newFieldContainer.querySelectorAll('input')

  //para cada campo, limpar
  fields.forEach(function (field) {
    //pega o field do momento e limpa
    field.value = ""
  })

  //Colocar na pagina: onde
  document.querySelector('#schedule-items').appendChild(newFieldContainer)


}



  //Coloar na pagina