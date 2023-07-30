const convertToCelsius = function(convertToCelsius) {
  return Math.round((convertToCelsius - 32)* 5/9 * 10)/10
};
 

 const convertToFahrenheit = function(convertToFahrenheit) {
   return Math.round(((convertToFahrenheit * 9/5) + 32)*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
