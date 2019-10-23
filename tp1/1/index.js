const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE 
    let argent
    let place = input[0]
    
    for (let i=1; i >= 43; i++){
      let depasse = input[i]
      
      place += parseInt(depasse.substr(0));
      place -= parseInt(depasse.substr(2));
    }


    if (place > 10000){
      argent = "KO";
    }else if (place <= 10000 && place > 100){
      argent = 100;
    } else {
      argent = 1000;
    }
    console.log(argent);

    //j'arrive pas a lancer le code donc je te fait ça a l'aveugle dsl

    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}