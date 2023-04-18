const mongoose = require('mongoose');

const connectToDatabase = async () => {

    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.s3hwkba.mongodb.net/?retryWrites=true&w=majority`, 
        (error) => {
        if(error) {
            return console.log('Ocorreu um erro ao es conectar com o banco de dados: ', error)
        }

        return console.log('Conexao com o banco de dados realizado com sucesso!');
    });

}

module.exports = connectToDatabase;