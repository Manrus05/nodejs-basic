const fs = require('fs');

function copyFiles() {
    const sourceDir = 'files';
    const targetDir = 'files_copy';

    fs.copyFile(sourceDir, targetDir, (err) => {
        if (err) {
            console.error('FS operation failed:', err.message);
        } else {
            console.log('Dateien wurden erfolgreich kopiert.');
        }
    });
}

copyFiles();
