let fs=require("fs");
let path = require("path"); 
let chalk = require("chalk");
function organizeFn(dirPath) {
    //console.log("Tree command implemented for", dirPath,"path") ;
    //1. input-.directory path given
    let destPath;
    if (dirPath == undefined) {
        //console.log("Kindly Enter the Path");
        destPath=process.cwd(); //for global calls considering current working directory as directoryPath
        return;
    }
    else {
        doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            //2. create->organised files->directory
            //path created 
            destPath = path.join(dirPath, "organized_files");
            //creating directory
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
            }
        }
        else {
            console.log("Kindly Enter the Correct Path....Path already existed");
            return;
        }

    }
    //source path--> dirPath
    organizeHelper(dirPath, destPath);


}

function organizeHelper(src, dest) {
    //3. identify category(type) of all the files in that are present inside the directory
    let childNames = fs.readdirSync(src);
    console.log(childNames);
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isfile = fs.lstatSync(childAddress).isFile();
        if (isfile) {
            //console.log(childNames[i]);
            //console.log(childAddress);

            let category=getcategory(childNames[i]);
            //console.log(childNames[i]," belongs to ---> this ",category);
            
            //4.copy/cut files to that organised directory
            sendfiles(childAddress,dest,category);
        }
    }
}

function getcategory(name)
{
    let ext=path.extname(name);
    // console.log(ext);
    ext=ext.slice(1);
    for(let type in types)
    {
        let cTypeArray=types[type];
        for(let i=0;i<cTypeArray.length;i++)
        {
            if(ext==cTypeArray[i])
            {
                return type;
            }
        }
        
    }
    return "others";
}

//send files
function sendfiles(srcFilePath,dest,category)
{
    let categoryPath=path.join(dest,category);
    if(fs.existsSync(categoryPath)==false)
    {
        fs.mkdirSync(categoryPath);//sub category directory created
    }
    let fileName=path.basename(srcFilePath);
    let destFilePath=path.join(categoryPath,fileName);
    fs.copyFileSync(srcFilePath,destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName,"copied to",category);
}
module.exports=
{
    OrganizeKey:organizeFn
}