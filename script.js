var fs = require('fs');

fs.writeFile('text_file3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
}); 