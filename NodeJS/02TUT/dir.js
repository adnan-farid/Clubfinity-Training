const fs = require('fs');

if(!fs.existsSync('./new')) {
  fs.mkdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory created')
  })
}
//will not remove/create directory due to asynchronous nature
if(fs.existsSync('./new')) {
  fs.rmdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory removed')
  })
}