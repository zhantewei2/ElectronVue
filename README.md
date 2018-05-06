Electron + Vue 事例展示

---

### Install Electron project

```
yarn install 

```
### Install Vue project

```
cd vue
yarn install 
```

Start运行项目
---
- start electron运行electron

>     `npm start`

- start vue 运行Vue项目   
>      cd vue
>      npm start


说明
---

`electron`内的web连接会指向到vue项目的服务器地址。

主进程中，基于`socket.io`开启一个socket服务器。


web页面通过`webSocket`交互主进程，借此主进程配合web页面完成本地操作。

`system tray`使用新建`browerWindow`,到达自定义contextMenu的目的。
