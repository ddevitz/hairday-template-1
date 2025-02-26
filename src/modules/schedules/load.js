import { hoursLoad } from "../form/hours-load";

// Seleciona o input de data
const selectedDate = document.getElementById("date")

export function schedulesDay(){
  // Busca na API os agendamentos para carregar do lado direito da tela.
  // Os horários disponíveios (horário futuro + não agendado) do lado esquerdo (form)

  //Obtém a data do input
  const date = selectedDate.value

  //Renderiza as horas disponíveis.
  hoursLoad({date})

}