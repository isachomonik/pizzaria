// Escrever um função middleware que registre no arquivo acessos.txt o horário
// em que cada requisição é recebida pelo servidor. Formato da hora: AAAA-MM-DD HH:mm:sss
const fs = require('fs');
const path = require('path');


function RegistraHoraDeAcesso (req, res, next){

    let dataHora = new Date();
    let strDataHora = dataHora.toISOString().substring(0,19).replace('T', ' ');
    let url = req.url;
    const acessos = path.resolve(`./logs/${strDataHora.substring(0,10)}-acessos.txt`);
    
    fs.appendFileSync(acessos, `${strDataHora} - ${url} \n`);


    next();

}


module.exports = RegistraHoraDeAcesso;