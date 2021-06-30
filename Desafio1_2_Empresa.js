const user = {
        user : 'Pedro Maia',
        empresa: {
            Nome: "Pedro Maia Softwares Ltda",
            Cor: "roxo",
            Foco: "Programação",

            Endereço: {
                rua: "Rua Catão",
                numero: 272,
                bairro: "Lapa - Vila Romana"
            
            }
    
        }
}
console.log(`O nome da empresa é ${user . empresa . Nome} e está localizada na ${user. empresa . Endereço .rua} , ${user. empresa .Endereço .numero}`)