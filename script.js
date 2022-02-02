var fs = require('fs');

fs.rename('text_file.txt', 'renamed_file.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
}); 