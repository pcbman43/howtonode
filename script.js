var fs = require('fs');

fs.open('text_file2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
}); 