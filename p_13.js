const fs = require('fs');

function readFileNormal(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log('File content:', data);
    } catch (error) {
        console.error('Error reading file:', error.message);
    }
}

readFileNormal("C:/Users/hp/Downloads/Sign up - WhatsApp number.txt"); 
