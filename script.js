var fs = require('fs');

fs.writeFile('text_file3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 