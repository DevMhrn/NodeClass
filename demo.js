const fs = require('fs');



try{
    var data = fs.readFileSync('file.txt', 'utf8');
    // console.log(data);


}
catch (e){
    console.log('Error:', e.stack); 
}

// fs.appendFileSync('file.txt', 'Hello World!', 'utf8');
// console.log(""+data)

// fs.mkdir('newDir', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Directory created successfully!');
// });

// fs.rmdir('newDir', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('Directory deleted successfully!');
// });


const path = require('path');
const p = 'D:\WebDev\node';
// console.log(path.dirname(p));
// // console.log(path.basename(p));
// console.log(path.extname(p));


const filepath = path.join(__dirname, 'file.txt');
const filepath2 = path.join(__dirname, 'newFile.txt');

const content = fs.copyFile(filepath, filepath2, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('File copied successfully!');
});

// console.log(content);
console.log(fs.readFileSync(filepath2, 'utf8'));
