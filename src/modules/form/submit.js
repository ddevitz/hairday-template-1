import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual
selectedDate.value = inputToday

//Define a data mínima como sendo a data atual
selectedDate.min = inputToday

form.onsubmit = (event) => {
  event.preventDefault()

  try {
    //Recuperando o nome do cliente
    const name = clientName.value.trim()

    if(!name){
      return alert("Informe o nome do cliente!")
    }
    
    //Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected")

    // Verifica o horario selecionado
    if(!hourSelected){
      return alert("Selecione o horário do cliente!")
    }

    //Recupera somente a hora
    const [hour] = hourSelected.innerHTML.split(":")

    //Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    //Gera um ID
    const id = new Date().getTime()

  } catch (error) {
    alert("Não foi possivel realizar o agendamento.")
    console.log(error)
  }
}