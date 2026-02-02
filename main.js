const{app,BrowserWindow} = require("electron")

function createWindow(){
    
    
    const mainWindow = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true
            
        }
    })

mainWindow.loadURL("https://www.xbox.com/en-ca/play/user/")

mainWindow.on("closed",function(){
    app.quit() 
})
}



app.whenReady().then(createWindow)

app.on("window-all-closed",function(){
    if(process.platform !=="darwin"){
        app.quit()
    }
})

app.on("activate",function(){
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})