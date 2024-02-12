const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt')) //unlink deletes file
    await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
    await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you.');
    await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
    const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8')
    console.log(newData);

  } catch (err) {
    console.error(err);
  }
}

fileOps();

/*
console.log('Hello...')

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'nice to meet you adnan', (err) => {
  if (err) throw err;
  console.log('Write complete');

  fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'test', (err) => {
    if (err) throw err;
    console.log('Append complete');
    fs.rename(path.join(__dirname, 'files', 'test.txt'),path.join(__dirname, 'files', 'renamed.txt'), (err) => {
      if (err) throw err;
      console.log('File renaming complete');
    })
  })
})



//exit on uncaught errors
process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
})
*/