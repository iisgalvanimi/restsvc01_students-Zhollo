const Somma=require("../model/somma");


exports.getSomme=(req, res, next) => {
        const somme=somma.fetchAll();
        res.json(somme);  //Invio il risultato al Browser
}

exports.getSomma=(req, res, next) => {
        const reqId = req.params.N;
        let jsonResp=somma.fetchById(reqId);
        if ( typeof jsonResp == 'undefined') {
                jsonResp = { "msg": `resource id ${reqId} not found` }
        }
        res.json(jsonResp);  //Invio il risultato al Browser
}

exports.insertSomma=(req, res, next) => {
        let jsonRicevuto = req.body;
        let jsonInviato={};
        console.log(jsonRicevuto);
        let somma= new somma(jsonRicevuto) 
        let id=somma.insert();
        
        //let jsonInviato = { ...jsonRicevuto }
        // oppure equivalentemente
        //let jsonInviato=Object.assign({}, jsonRicevuto );

        jsonInviato.msg = `Json ricevuto dal client correttamente id=${id}`;
        jsonInviato.inserted_Obj = { ...jsonRicevuto }
        res.json(jsonInviato);  //Invio il risultato al Browser
}


exports.deleteSomma=(req, res, next) => {
        let reqId = req.params.N;
        let jsonInviato = { "msg": `id: ${reqId} succesfully deleted ` }
        res.json(jsonInviato);  //Invio il risultato al Browser
}


exports.updateSomma=(req, res, next) => {
        let reqId = req.params.N;
        let jsonRicevuto = req.body;
        let jsonInviato = {}
        jsonInviato.ricevuto = { ...jsonRicevuto }
        jsonInviato.msg = `id: ${reqId} succesfully updated `
        res.json(jsonInviato);  //Invio il risultato al Browser
}