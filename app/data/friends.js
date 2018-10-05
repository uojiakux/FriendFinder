// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
      "name":"Stephanie",
      "photo":"https://media.licdn.com/dms/image/C4E03AQGpDpkOG2PY-Q/profile-displayphoto-shrink_200_200/0?e=1540425600&v=beta&t=8IYWGUe5emQc9qQVh3O6nuCxG8iKuW_0tY8DAUf4EYA",
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
      "name":"Rose",
      "photo":"https://i.pinimg.com/custom_covers/216x146/175218310441359271_1413952826.jpg",
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
  