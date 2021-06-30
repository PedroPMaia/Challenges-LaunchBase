// Calculando o Índice de Massa Corporal - IMC //

const nome = "Felipe";
const peso = 78;
const altura = 1.78

const imc = (peso / (altura * altura))

if (imc > 40) {
    console.log(`O seu IMC é ${imc}. Você está acima do peso`)
} else {
    console.log(`O seu IMC é ${imc}. Parábens você está no peso ideal.`)
    
}