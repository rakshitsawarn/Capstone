const fs = require('fs');
function readFileWithCallback(filePath, callback) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err); 
        }
        callback(null, data); 
    });
}

readFileWithCallback("C:/Users/hp/Downloads/Sign up - WhatsApp number.txt", (err, data) => { 
    if (err) {
        console.error('Error reading file:', err.message);
    } else {
        console.log('File content:', data);
    }
});
