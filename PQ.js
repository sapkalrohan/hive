class PQ {
  constructor(type, keywords) {
    this._type = type
    var c = 0
    this._keywords = {}
    keywords = keywords
      .replace(/(\r\n|\n|\r)/gm, '')
      .split(type)[1]
      .split(' ')
      .slice(1)
    if (type == 'P')
      keywords.forEach(x => {
        this._keywords[x.toLowerCase()] = c++
      })
    else this._keywords = keywords
  }
  set type(x) {
    this._type = x
  }
  get keywords() {
    return this._keywords
  }
}

module.exports = PQ
