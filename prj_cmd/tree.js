let fs=require("fs");
let path = require("path"); 
let chalk = require("chalk");
function treeFn(dirPath) {
    //console.log("Tree command implemented for", dirPath, "path");
    //let destPath;
    if (dirPath == undefined) {
        //console.log("Kindly Enter the Path");
        // process.cwd();
        treeHelper(process.cwd(),"");
        return;
    }
    else {
        doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            //treeHelper(dirPath,"");
            treeHelper( dirPath,"");  
        }
        else {
            console.log("Kindly Enter the Correct Path");
            return;
        }
}
}

function treeHelper(dirPath,indent)
{
    //is file or folder
   let isFile= fs.lstatSync(dirPath).isFile();
   if(isFile == true)
   {
       let fileName=path.basename(dirPath);
       console.log(chalk.green(indent + "|--",fileName));
   }
   else
   {
       let dirName = path.basename(dirPath)
       console.log(chalk.red(indent + "|---- " + dirName));
       let childrens = fs.readdirSync(dirPath);
       for(let i=0;i<childrens.length;i++)
       {
          let childPath = path.join(dirPath,childrens[i]);
          treeHelper(childPath,indent+"\t");
       }
    }
}
module.exports=
{
    treeKey:treeFn
}