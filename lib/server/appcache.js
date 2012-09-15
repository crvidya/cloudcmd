var fs = require('fs');

/* varible contain all watched file names
 * {name: true}
 */
var FileNames           = {},
    NamesList_s         = '';

/* function thet use for crossplatform
 * access to fs.watch or fs.watchFile function
 */
var fs_watch            = null;
var on_fs_watch         = null;
var firstFileRead_b     = true;
var Manifest = '';

setWatachFunctions();

/* function add file or files to manifest */
exports.addFiles = function(pFileNames_a){
    if(pFileNames_a instanceof Array)
        for(var i=0; i < pFileNames_a.length; i++)
            exports.watch(pFileNames_a[i]);
    else
        exports.watch(pFileNames_a);
    
};


exports.createManifest = function(){
    var lAllNames = cloudRequire(process.cwd() + '/hashes');
    if(lAllNames)
        for(var lName in lAllNames){
            if(lName.indexOf('min') > 0)
                lName = './min/' + lName;
            exports.watch(lName);
        }
    processManifest();
};

exports.watch = function(pFileName){
    console.log(pFileName + ' is watched');
    
    if(!FileNames[pFileName] &&
        pFileName !== './cloudcmd.appcache'){
        try{
            fs_watch(pFileName, on_fs_watch(pFileName));
        }catch(pError){}

        NamesList_s += pFileName + '\n';
        FileNames[pFileName] = true;
    }
    else if(firstFileRead_b){
        processManifest();
        firstFileRead_b = false;
    }
};

function setWatachFunctions(){
    if(process.platform === 'win32'){
        /* good on windows  */
        fs_watch    = fs.watch;
        on_fs_watch = onWatch;
    }        
    else{
        /* good on linux    */
        fs_watch    = fs.watchFile;
        on_fs_watch = onWatchFile;
    }

}

function onWatch (pFileName){
    return function(pEvent, pFileName){
        console.log(pEvent);
        console.log('file ' + pFileName + ' is changed');
        processManifest();
    };
}

function onWatchFile(pFileName){
    return function(pCurr, pPrev){
        if(pCurr.mtime !== pPrev.mtime){
            console.log('file ' + pFileName + ' is changed');
            processManifest();
        }
    };
}

function processManifest(){
    Manifest = 'CACHE MANIFEST\n'   +
        '#' + new Date()   + '\n'   +
        'CACHE:\n'                  +
        NamesList_s                 +
        'NETWORK:\n'                +
        '*';
        
    fs.writeFile('cloudcmd.appcache', Manifest, function(){
        console.log('cloudcmd.appcache refreshed');
    });
}

/* function do safe require of needed module */
function cloudRequire(pModule){
  try{
      return require(pModule);
  }
  catch(pError){
      return false;
  }
}