let inputStr = require('./input')
let PQ = require('./PQ')
//object where
//FOR PAGE, keywords and their respective order is stored in a hashtable called 'this.keywords' for that sppecific page.
//& FOR QUERY, just an array of the query words is stored in 'this.keywords'.

var hashtable = require('./hashtable')
//the hashtable definition.
//stores the unique keywords and their Page and orders(takes in input PQ object .add(PQObject) )

//literals
const P_Type = 'P'
const Q_Type = 'Q'
let Qs = [] //Queries will be stored here

main()

async function main() {
  var inputstr = await inputStr() // Read Input from file input.js

  //parse input to create hashtable and create Queries
  inputstr.split('\n').forEach(line => {
    if (line.startsWith(P_Type)) {
      hashtable.add(new PQ(P_Type, line)) //Add keywords to hashtable
    } else if (line.startsWith(Q_Type)) {
      Qs.push(new PQ(Q_Type, line))
    }
  })

  //Total number of keywords in pages possible
  var N = hashtable.N

  async function queryAndLog(keywords) {}

  //Run each Query and log result
  Qs.forEach((q, qi) => {
    results = new Map()
    var i = 0
    q.keywords.forEach(keyword => {
      var matchingpages = hashtable.get(keyword)
      if (matchingpages) {
        for (const [k, v] of matchingpages.entries()) {
          var score = results.get(k)
          if (score) {
            score += (N - i) * (N - v)
            results.set(k, score)
          } else results.set(k, (N - i) * (N - v))
        }
      }
      i++
    })

    results = new Map(
      //sort by score descending and take top 5
      [...results.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5)
    )

    console.log(`Q${qi + 1}:${[...results.keys()].join(' ')}`)
    //End of Q loop
  })
}
