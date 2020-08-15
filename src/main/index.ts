/* eslint-disable @typescript-eslint/no-var-requires */
import { app, BrowserWindow } from "electron";

async function installExtensions() {
  const installer = require("electron-devtools-installer");
  const extensions = ["REACT_DEVELOPER_TOOLS", "REDUX_DEVTOOLS"];

  return Promise.all(
    extensions.map((name) => installer.default(installer[name]))
  ).catch(console.log);
}

async function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.NODE_ENV === "development") {
    await installExtensions();
    // process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "1";
    win.loadURL("http://localhost:3000/dist/index.html");
    win.webContents.openDevTools();
  } else {
    win.loadFile("./index.html");
  }
}

app.allowRendererProcessReuse = true;

// このメソッドは、Electron が初期化処理と
// browser window の作成準備が完了した時に呼び出されます。
// 一部のAPIはこのイベントが発生した後にのみ利用できます。
app.whenReady().then(createWindow);

// 全てのウィンドウが閉じられた時に終了します。
app.on("window-all-closed", () => {
  // macOSでは、ユーザが Cmd + Q で明示的に終了するまで、
  // アプリケーションとそのメニューバーは有効なままにするのが一般的です。
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // macOSでは、ユーザがドックアイコンをクリックしたとき、
  // そのアプリのウインドウが無かったら再作成するのが一般的です。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
