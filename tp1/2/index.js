const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let nbcarton = parseInt(input[0]);

    for (i=0 ; i => nbcarton ; i++){
      let poid = parseInt(input[i+1]);
      let charge
      let alle = 0
      
      if (charge > 100){
        charge - parseInt(input[i+1]);
        alle++
        charge += parseInt(input[i]);
      }else{
        charge += poid;
      }
    }
    console.log(alle);
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