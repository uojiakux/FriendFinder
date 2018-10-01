// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
      "name":"Stephanie",
      "photo":"https://i.pinimg.com/736x/a1/0a/07/a10a07cbca4baaa45e4d566687a3c243.jpg",
      "scores":[
          5,
          1,
          4,
          4,
          5,
          1,
          2,
          5,
          4,
          1
        ]
    },
    {
      "name":"Dilan",
      "photo":"https://a.wattpad.com/cover/139413696-352-k183136.jpg",
      "scores":[
          3,
          1,
          4,
          4,
          4,
          5,
          2,
          3,
          4,
          2
        ]
    }        
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  