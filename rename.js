const fs = require('fs');

function renameFile() {
    const oldPath = 'files/wrongFilename.txt';
    const newPath = 'files/properFilename.md';

    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.error('FS operation failed:', err.message);
        } else {
            console.log('Datei wurde erfolgreich umbenannt.');
        }
    });
}

renameFile();
