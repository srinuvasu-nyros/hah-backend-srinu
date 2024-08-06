const white_listed_params = ['password', 'confirmpassword'];

// Convert string / sentence to Capital Case and remove un necessary spacing between words
const capitalize = (name) => {
  return name.replace(/\b\w/g, function(match) {
    return match.toUpperCase();
  }).replace(/\s+/g, ' ').trim();
}

// Convert string / sentence to lowercase and remove all spaces between words
const toLower = (name) => {
  return name.toLowerCase().replaceAll(/\s/g,'');
}

module.exports = {
  capitalize,
  toLower,
  white_listed_params
}