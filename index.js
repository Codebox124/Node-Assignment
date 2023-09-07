// Modules 
// we have the os module
const os = require('os')
const { log } = require("console")

log(os)
// meathod 1
const math = require('./math')

console.log(math.add(3,5))
console.log(math.sub(3,5))
console.log(math.mul(3,5))


// meathod 2
const { add , sub , mul} = require('./math')

console.log(add(3,5))
console.log(sub(3,5))
console.log(mul(3,5))

// file system 
CRUD = Create, Read, Update, Delete


readfile
const fs = require('fs')
const path = require("path")
fs.readFile('./docs/names.txt', ((err, data)=>{
    if(err){
        throw(err)
    }
    log(data.toString())
}))

writeFile
const path = require('path')
fs.writeFile(path.join(__dirname, "docs", 'names.text'), 'lorem 677' , ((err)=>{
    if(err){
        throw err
    }
    log("file created")
}) )



// Assignment 1

const {add, sub, mul} = require('./myModule')
log(add(4,5));
log(sub(4,5));
log(mul(4,5));

// Assignment 2
const path = require('path')
fs.readFile(path.join(__dirname, "sample.txt"), ((err, data)=>{
    if(err){
        throw err
    } 
    log(data.toString())

}))

// Assignment 3
const readline = require('readline').createInterface({
    input:process.stdin,
    output : process.stdout
})
readline.question("Enter Somthing! : ", (name)=>{
    fs.appendFile(path.join(__dirname, 'log.txt', ), name ,((err)=>{
        if(err){
            throw err
        }
        log("File created")

    }))
   
    readline.close()
})


// Assignment 4

const oldFile = './renamedFile'
const newFileName = './renamedFile.txt'

fs.rename(oldFile, newFileName, ((err)=>{
    if(err){
        throw err
    }
    else{
        log("Renamed Successfully")
    }

}))

// Assignment 5

const convertConfigFile = ()=>{
   try{
    const configData  = fs.readFileSync('./config.json')
    const configObject =JSON.parse(configData.toString()) 
    return configObject
   } catch (err){
    log(err)
   }
    
}
const config = convertConfigFile()
if(config){
    log('Config:', config, typeof(config))
}

// Assignment 6
const sourceFileName = './modules.txt'
fs.readFile(path.join(__dirname, "modules.txt"), ((err, data)=>{
    if (err){
        throw err
    }
    else{
        log(data.toString())
    }
    fs.writeFile(path.join(__dirname, "log.txt"), data, ((err, data)=>{
        if (err){
            throw err
        }
       
       
           
    }));
   
       
}));

// Assignment 7
fs.unlink(path.join(__dirname , 'trash.txt'), ((err)=>{
    if(err){
        throw err
    }
    else{
        log("File Deleted")
    }
}))



