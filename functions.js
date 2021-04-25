//1
const texto = (texto) => {
  return texto
}
//2
const suma = (sumandoA, sumandoB) => {
  return sumandoA + sumandoB;
}

//3
const resta = (minuendo, sustraendo) => {
  return minuendo - sustraendo;
}
//4
const multiplicacion = (factorA, factorB) => {
  return factorA * factorB;
}
//5
const division = (dividendo, divisor) => {
  if  ( divisor === 0)  {
    return 'No se puede dividir por 0';
  } else  {
    return dividendo / divisor;
  }
}

//7
const potencia = (base, exponente) => {
  return Math.pow(base, exponente)
}

//8
const anidada = (a,b) => {
  function cuadrado(x) {
    return x * x;
  }
  return cuadrado(a) + cuadrado(b);
}


export{
  suma,
  resta,
  multiplicacion,
  division,
  potencia,
  anidada,
  texto,  
}