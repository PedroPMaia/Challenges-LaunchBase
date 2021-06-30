// Criar um programa que armazena um array de usuários e suas tecnologias usadas. 
//Cada user tem um nome e uma tecnologia 

const usuarios = [
    {nome: "Pedro", Tecnologias: ["HTML", "Python", "CSS"]},
    {nome: "Matheus", Tecnologias: ["HTML", "JavaScript", "Node.js"]},
    {nome: "Felipe", Tecnologias: ["HTML", "Cobol", "VB6"]},
    {nome: "Bruna", Tecnologias: ["HTML", "Python", "CSS3"]},
]

for  (usuarios) {
    console.log (`${usuario.nome} trabalha com ${ usuario.tecnologias.join(', ')}`)
}