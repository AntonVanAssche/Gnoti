const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const PADDING = 50;
const monitorWidth = Main.layoutManager.monitors[0].width;
const monitorHeight = Main.layoutManager.monitors[0].height;
const messageListWidth = Main.panel.statusArea.dateMenu._messageList.actor.width;
const messageListHeight = Main.panel.statusArea.dateMenu._messageList.actor.height;


function topright()
{
    return monitorWidth - messageListWidth - PADDING;
}

function bottomright()
{
    return - monitorHeight - messageListHeight + monitorWidth - messageListWidth - PADDING;
}
