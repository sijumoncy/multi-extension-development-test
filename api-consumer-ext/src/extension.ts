// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "api-consumer-ext" is now active! 22222222'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  // const disposable = vscode.commands.registerCommand(
  //   "api-consumer-ext.helloWorld",
  //   () => {
  //     // The code you place here will be executed every time your command is executed
  //     // Display a message box to the user
  //     vscode.window.showInformationMessage(
  //       "Hello World from api-consumer-ext!"
  //     );
  //   }
  // );

  // context.subscriptions.push(disposable);

  context.subscriptions.push(
    vscode.commands.registerCommand("api-consumer-ext.helloWorld", () => {
      console.log("in trigger api command 11111111111111");
      
      // Get the extension A
      const audioExt = vscode.extensions.getExtension(
        "bridgeconn.headless-audio-api"
      );
      console.log("Audio Ext ====> ", audioExt);

      if (audioExt) {
        audioExt.activate().then(async (api) => {
          console.log("activated audio Ext from Consumer *************");
          await api.hello();
          console.log("after call api ............");
        });
      } else {
        vscode.window.showErrorMessage(
          "Extension `headless-audio-api` is not available."
        );
      }
    })
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
