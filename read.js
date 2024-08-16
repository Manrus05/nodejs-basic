const fs = require('fs');

function readFileContent() {
    const filePath = 'files/fileToRead.txt';

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('FS operation failed:', err.message);
        } else {
            console.log('Inhalt von fileToRead.txt:');
            console.log(data);
        }
    });
}

readFileContent();
