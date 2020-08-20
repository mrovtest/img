const fs = require('fs');

const Json = [];

const files = fs.readdirSync('./').filter(file => file.endsWith('.png'));
for (const file of files) {
  let name = file;
  let entry = {};

  name = name.replace(' _Basic_', "");
  name = name.replace(' _Void_', "");
  name = name.replace('.png', '');
  name = name.replace(/ /g, "-");

  entry.name = name.replace(/-/g, " ");
  entry.link = "https://teamcofh.com/docs/1.12/thermal-expansion/" + name.toLowerCase();
  entry.icon = "thermalexpansion/" + name.toLowerCase().replace(/ /g, "-") + ".png"
  Json.push(entry);

  name = name.toLowerCase();

  name = name + '.png';

  console.log(name);

  fs.rename(file, name, function (err) {
  if (err) throw err;
});

}

fs.writeFile('output.json', JSON.stringify(Json, null, 2), function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
