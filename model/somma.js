const somme = [{ id: 1, val1: 5, val2: 3 , somma: 8 },
                { id: 2, val1: 8, val2: 5 , somma: 13 }];


                module.exports = class Libro {

  constructor(l) { this.somma=somma }

  insert() {
    let newid=somme.length
    this.somma.id=newid
    somme[newid]=this.somma
     return newid;
  }

  static fetchAll(l) {
    return somme;
  }

  static fetchById(idx) {
    if (somme[idx]) {
      return somme[idx];
    } else {
      return undefined;
    }
  }
  static deleteByID(idx) {
    if (somme[idx] == undefined || somme[idx] == null){
      return 1; // 0 OK
    }else{
      somme[idx]=null;
      return 0; // 1 KO
    }
  }

  static updateByID(idx,somma) {
    if (somme[idx] != undefined && somme[idx]!=null){
      lista[indice]=somma
      console.log(lista[indice]);
      return 0; // 0 OK
    }else{
      return 1; // 1 KO
    }
  }

}