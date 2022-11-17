// enchanced object literals

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    uId
  }
}

console.log(newUser('Promo', 26, 'CO', 1));
