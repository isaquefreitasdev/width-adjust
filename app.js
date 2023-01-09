const sharp = require('sharp');

let path  = process.argv[2];
let width = Number(process.argv[3]);

function resize(path,width){
    sharp(path).resize({width:width}).toFile('./temp/new.jpg',(error)=>{
        if(error){
            console.log(error)
        }else{
            console.log('img tudo certo')
        }
    })
}
resize(path,width)