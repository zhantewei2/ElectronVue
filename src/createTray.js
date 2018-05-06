const {Tray,BrowserWindow} =require('electron');
const path=require('path');

const tray=new Tray(path.join(process.cwd(),'public/1.ico'));

const win=new BrowserWindow({
	width:250,
	height:310,
	show:false,
	frame:false,
	fullscreenable:false,
	transparent:true,
	'node-integration':false
});
win.loadURL('http://localhost:8080/#/tray')
win.on('blur',()=>win.hide())
const showWindow=()=>{
	const winBounds=win.getBounds();
	const trayBounds=tray.getBounds();
	
	win.setPosition(
		trayBounds.x+trayBounds.width/2,
		trayBounds.y-winBounds.height+3
	);
	win.show();
	win.focus();
}
tray.setToolTip('myApp');
tray.on('right-click',()=>win.isVisible()?win.hide():showWindow());