class hashTable {
  constructor() {
    this.pagecount = 0
    this.table = new Map()
    this._N = 0
  }
  add(PObject) {
    ++this.pagecount
    Object.keys(PObject.keywords).forEach(keyword => {
      if (!this.table.get(keyword)) {
        this.table.set(key, new Map())
        this._N++
      }
      this.table.get(keyword).set('P' + this.pagecount, PObject.keywords[key])
    })
  }
  get(keyword) {
    return this.table.get(keyword.toLowerCase().trim())
  }
  get N() {
    return this._N
  }
}

module.exports = new hashTable()
