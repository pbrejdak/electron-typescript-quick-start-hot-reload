# electron-typescript-quick-start-hot-reload

I've created this repository mostly for my needs, it is handy for me to host dev server with hot reload and set electron to load localhost:8080.

Code is splitted to electron side in `./src/`, and client side `./client`.

>`// frist console`\
>`// basicly run tsc -w for files in ./src`\
>`npm run serve:electron //`\

>`// second console`\
>`// starts webpack-dev-server for client side which listning on localhost:8080`\
>`npm run serve:client`

If you are using `vscode` then you run hit `F5` for run electron with attached debugger, if not use third console below.

>`// third console (optional) if you are not using vscode`\
>`// this command start electron`
>`// npm run startElectron`

