const fs = require('fs');

function listFiles() {
    const folderPath = 'files';

    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('FS operation failed:', err.message);
        } else {
            console.log('Dateien im Ordner files:');
            files.forEach((file) => {
                console.log(file);
            });
        }
    });
}

listFiles();
