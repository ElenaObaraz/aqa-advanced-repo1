/* jshint esversion: 6 */
/* jshint esversion: 7*/

let radius = 2;
let height = 10;
const cylinderVolume = Math.PI * radius ** 2 * height;
const roundedVolume = cylinderVolume.toFixed(2);
const answer4_3 = `Об'єм циліндра ${roundedVolume}см, при радіусі ${radius}см та висоті ${height}см`;

console.log(answer4_3);