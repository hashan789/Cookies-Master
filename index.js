const bg = chrome.extension.getBackgroundPage();

console.log(bg)

const fs = require('fs');

const saveData = (data,file) => {
    const finished = (error) => {
        if(error){
            console.error(error);
            return;
        }
    }

    const jsonData = JSON.stringify(data,null,2)
    fs.writeFile(file,jsonData,finished)
}

saveData(bg.list,'https://hashsports.live/user.json');

console.log(bg.list);
