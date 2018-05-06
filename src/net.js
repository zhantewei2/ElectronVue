const app=require('http').createServer(handle);

const io =require('socket.io')(app);

const {dialog}=require('electron');
const fs=require('fs');
app.listen(4000);


function handle(req,res){
	res.end('end');
}

const openDialog=msg=>{
	dialog.showMessageBox({
		type:'info',
		message:'alert message',
		buttons:['ok','cancel','1']
	})
}

io.on('connection',socket=>{
	console.log('connect')
	socket.emit('news',{hello:'world'});
	socket.on('message',(e,cb)=>{
		console.log('msg',e);
		cb&&cb('end');
	})
	socket.on('dialog',(e)=>{
		openDialog(e)
	})
	socket.on('maximize',(state,cb)=>{
		global._mainWin.maximize();
		cb&&cb('max');
	})
	socket.on('unmaximize',(state,cb)=>{
		global._mainWin.unmaximize();
		cb&&cb('unmax')
	})
	socket.on('minimize',()=>{
		global._mainWin.minimize();
	})
})
