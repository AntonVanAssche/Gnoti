'use strict';

// Usefull imports.
const Main = imports.ui.main;
const MessageTray = imports.ui.messageTray;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const Right = Me.imports.positions.Right;
const Left = Me.imports.positions.Left;


// This function is called once when your extension is loaded, not enabled.
function init() {
    log(`initializing ${Me.metadata.name} version ${Me.metadata.version}`);

    let tray = MessageTray.MessageTray.prototype;
    tray.oldUpdateNotificationTimeout = tray._updateNotificationTimeout;

}

// This function is called after your extension is enabled, this can be done from GNOME Tweaks, when you log in or when the screen is unlocked.
function enable() {
    log(`enabling ${Me.metadata.name} version ${Me.metadata.version}`);

    // Shows the notifications as long as you don't take any action on them. It will disappear when you click them or they hide when you hover over them.
    MessageTray.MessageTray.prototype._updateNotificationTimeout = function(timeout) {
        this._notificationTimeoutId = timeout ? 1 : 0;
    }

}

// This function will be called after you uninstall/disable this extension using GNOME Tweaks.
function disable() {
    log(`disabling ${Me.metadata.name} version ${Me.metadata.version}`);
    Main.messageTray._bannerBin.x = 0;
    Main.messageTray._bannerBin.y = 0;

    let tray = MessageTray.MessageTray.prototype;
    tray._updateNotificationTimeout = tray.oldUpdateNotificationTimeout;
}
