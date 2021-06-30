// Criar um programa para realizar operações bancárias na conta de um usuário

const user = {
    name: 'Maia',
    transactions: [],
    balance: 0
};

// Adicionar transactions
function createTransaction(transaction) {
    user.transactions.push(transaction);

    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}