#!/usr/bin/env node
let inputArr = process.argv.slice(2);//node main.js tree "directoryPath"
//tree "directoryPath" are two inputs
let fs=require("fs");
let chalk = require("chalk");
const { dirname } = require("path");
let path = require("path"); 
let helpObject=require("./prj_cmd/help");
let TreeObject=require("./prj_cmd/tree");
let organiseObj=require("./prj_cmd/organize");

let types = {
    media: ["mp4", "mkv"],
    archives: ["zip", "7z", "rar", "gz", "ar", "iso", "xz"],
    document: ["docx", "pdf", "xlsx", "xls", "txt", "tes", "doc"],
    images: ["jpg", "jpeg", "png"],
    app: ["exe", "dmg", "pkg", "deb"],
    web_projects:["html","css"],
    programming:["py","js","c","cpp"]
}
//console.log(inputArr);
//node main.js tree "directoryPath"
//node main.js organise "directoryPath"
//node main.js help
let command = inputArr[0];
//command is the 1st element of inputArr
switch (command) {
    case "tree":
        TreeObject.treeKey(inputArr[1]);//directory path is passed
        break;
    case "organize":
        organiseObj.OrganizeKey(inputArr[1]);//argument as directory path
        break;
    case "help":
        // helpFn();
        helpObject.helpKey;
        break;
    default:
        console.log("Please Enter a Right Command"); 
}
// function treeFn(dirPath) {
//     //console.log("Tree command implemented for", dirPath, "path");
//     //let destPath;
//     if (dirPath == undefined) {
//         //console.log("Kindly Enter the Path");
//         // process.cwd();
//         treeHelper(process.cwd(),"");
//         return;
//     }
//     else {
//         doesExist = fs.existsSync(dirPath);
//         if (doesExist) {
//             //treeHelper(dirPath,"");
//             treeHelper( dirPath,"");  
//         }
//         else {
//             console.log("Kindly Enter the Correct Path");
//             return;
//         }
// }
// }

// function treeHelper(dirPath,indent)
// {
//     //is file or folder
//    let isFile= fs.lstatSync(dirPath).isFile();
//    if(isFile == true)
//    {
//        let fileName=path.basename(dirPath);
//        console.log(chalk.green(indent + "|--",fileName));
//    }
//    else
//    {
//        let dirName = path.basename(dirPath)
//        console.log(chalk.red(indent + "|---- " + dirName));
//        let childrens = fs.readdirSync(dirPath);
//        for(let i=0;i<childrens.length;i++)
//        {
//           let childPath = path.join(dirPath,childrens[i]);
//           treeHelper(childPath,indent+"\t");
//        }
//     }
// }

// function organizeFn(dirPath) {
//     //console.log("Tree command implemented for", dirPath,"path") ;
//     //1. input-.directory path given
//     let destPath;
//     if (dirPath == undefined) {
//         //console.log("Kindly Enter the Path");
//         destPath=process.cwd(); //for global calls considering current working directory as directoryPath
//         return;
//     }
//     else {
//         doesExist = fs.existsSync(dirPath);
//         if (doesExist) {
//             //2. create->organised files->directory
//             //path created 
//             destPath = path.join(dirPath, "organized_files");
//             //creating directory
//             if (fs.existsSync(destPath) == false) {
//                 fs.mkdirSync(destPath);
//             }
//         }
//         else {
//             console.log("Kindly Enter the Correct Path....Path already existed");
//             return;
//         }

//     }
//     //source path--> dirPath
//     organizeHelper(dirPath, destPath);


// }
// function organizeHelper(src, dest) {
//     //3. identify category(type) of all the files in that are present inside the directory
//     let childNames = fs.readdirSync(src);
//     console.log(childNames);
//     for (let i = 0; i < childNames.length; i++) {
//         let childAddress = path.join(src, childNames[i]);
//         let isfile = fs.lstatSync(childAddress).isFile();
//         if (isfile) {
//             //console.log(childNames[i]);
//             //console.log(childAddress);

//             let category=getcategory(childNames[i]);
//             //console.log(childNames[i]," belongs to ---> this ",category);
            
//             //4.copy/cut files to that organised directory
//             sendfiles(childAddress,dest,category);
//         }
//     }
// }

// function getcategory(name)
// {
//     let ext=path.extname(name);
//     // console.log(ext);
//     ext=ext.slice(1);
//     for(let type in types)
//     {
//         let cTypeArray=types[type];
//         for(let i=0;i<cTypeArray.length;i++)
//         {
//             if(ext==cTypeArray[i])
//             {
//                 return type;
//             }
//         }
        
//     }
//     return "others";
// }

//send files
// function sendfiles(srcFilePath,dest,category)
// {
//     let categoryPath=path.join(dest,category);
//     if(fs.existsSync(categoryPath)==false)
//     {
//         fs.mkdirSync(categoryPath);//sub category directory created
//     }
//     let fileName=path.basename(srcFilePath);
//     let destFilePath=path.join(categoryPath,fileName);
//     fs.copyFileSync(srcFilePath,destFilePath);
//     fs.unlinkSync(srcFilePath);
//     console.log(fileName,"copied to",category);
// }

//helpFn()
// function helpFn(dirPath) {
//     console.log(`
//     List of all commands:
//         node main.js tree "directoryPath"
//         node main.js organise "directoryPath"
//         node main.js help`
//     );
// }