var fs = require('fs');

fs.unlink('text_file2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
}); 