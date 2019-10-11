
export default {
  getDrawings() {

    // from:
    //const response = await fetch("http://eurolottodrawing.azurewebsites.net/api/drawings")
    // const backendDrawings = await reponse.json()
    /*
        {
        Datum: "2018-01-05T00:00:00",
        ez1: 10,
        ez2: 7,
        Id: 1,
        z1: 40,
        z2: 2,
        z3: 38,
        z4: 45,
        z5: 7,
        },
    
        
        // add fancy convert method here
        
        to: 
        */
    return [
      {
        date: "2018-01-05",
        extranumbers: [10, 7],
        numbers: [40, 2, 38, 45, 7]
      },
      {
        date: "2018-01-06",
        extranumbers: [10, 7],
        numbers: [40, 2, 38, 45, 7]
      },
      {
        date: "2018-01-07",
        extranumbers: [10, 7],
        numbers: [40, 2, 38, 45, 7]
      },
      {
        date: "2018-01-08",
        extranumbers: [10, 7],
        numbers: [40, 2, 38, 45, 7]
      },
      {
        date: "2018-01-09",
        extranumbers: [10, 7],
        numbers: [40, 2, 38, 45, 7]
      }
    ];
  }
}
