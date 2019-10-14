export default {
  convert(input) {
    return input.map(function (data) {
      return { "date": data.Datum, "numbers": [data.z1, data.z2, data.z3, data.z4, data.z5], "extranumbers": [data.ez1, data.ez2] }
    })
  },
  async getDrawings() {
    const response = await fetch("http://eurolottodrawing.azurewebsites.net/api/drawings")
    const json = await response.json()
    return this.convert(json)
  }
}
