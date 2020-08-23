const fs = require('fs');
var Jimp = require('jimp');

const Json = [];

const files = fs.readdirSync('./input').filter(file => file.endsWith('.png'));
for (const file of files) {
  let name = file;
  // let entry = {};

  name = name.replace(' _Basic_', "");
  name = name.replace(' _Void_', "");
  name = name.replace('.png', '');
  name = name.replace(/ /g, "-");

  Json.push(name.replace(/-/g, " "));

  name = name.toLowerCase();

  name = name + '.png';

  console.log(name);

  Jimp.read('./input/' + file, (err, Image) => {
  if (err) throw err;
  Image
    .write('./output/' + name); // save
});

  fs.writeFile('./output/' + name, file, function (err) {
  if (err) throw err;
});

}

fs.writeFile('output.json', JSON.stringify(Json, null, 2), function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
