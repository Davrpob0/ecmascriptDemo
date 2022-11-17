function newUser(name, age, country) {
  var name = name || 'David';
  var age = age || 26;
  var country = country || 'CO';
  console.log(name, age, country);
}
newUser();
newUser('Oscar', 34, 'MX');

// forma renovada de ejecucion 

function newAdmin(name = 'David', age = 26, country = 'CO') {
  console.log(name, age, country)
}

newAdmin();
newAdmin('Oscar', 34, 'MX');