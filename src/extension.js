"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = __importStar(require("vscode"));
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "selection-to-snippet" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.selectionToSnippet', selectionToSnippet);
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// Convert the currently selected text into a snippet,
// allowing you to tab through its values.
function selectionToSnippet() {
    var editor = vscode.window.activeTextEditor;
    if (editor !== undefined) {
        var document_1 = editor.document;
        if (document_1 !== undefined) {
            var selection = editor.selection;
            if (selection !== undefined) {
                var text = document_1.getText(selection);
                if (text !== undefined) {
                    var snippet = new vscode.SnippetString(text);
                    editor.insertSnippet(snippet, selection);
                }
            }
        }
    }
}
exports.selectionToSnippet = selectionToSnippet;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
