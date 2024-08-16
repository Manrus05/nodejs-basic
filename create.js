const fs = require('fs');

function createFreshFile() {
    const filePath = 'files/fresh.txt';
    const content = 'I am fresh and young';

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error('FS operation failed:', err.message);
        } else {
            console.log('fresh.txt wurde erfolgreich erstellt.');
        }
    });
}

createFreshFile();
