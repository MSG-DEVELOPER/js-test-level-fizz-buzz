/**
 * Responsabilidad: gestionar la lógica de FizzBuzz
 * Recuerda que la estructura de las respuestas debe ser estructurada:
 *  {
        status: "", // Código indicando éxito o error
        message: "", // Mensaje
        data: {
            number: 0, // Número evaluado
            result: "" // Resultado esperado
            }
    }
 * */
import { averiguaCaso } from "./dom";
let obj = {
  status: "",
  message: "",
  data: {
    number: 0,
    result: "",
  },
};

function fizzBuzz(n) {
  obj.data.number = n;
  obj.data.result = averiguaCaso(n);
  obj.message=ponMensage(obj.data.result);


}



function ponMensage(res){
if (res == "Fizz"){
    return "Número divisible por 3";
}else if (res=="Buzz"){
    return "Número divisible por 5";

}else if(res=="FizzBuzz"){
    return "Número divisible por 3 y 5";
}else{
    return "Número no divisible por 3 ni 5"
}



}
