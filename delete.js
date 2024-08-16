const fs = require('fs');

function deleteFile() {
    const filePath = 'files/fileToRemove.txt';

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('FS operation failed:', err.message);
        } else {
            console.log('Datei wurde erfolgreich gelöscht.');
        }
    });
}

deleteFile();
