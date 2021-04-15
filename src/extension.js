'use strict';

// Usefull imports.
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const Right = Me.imports.positions.Right;
const Left = Me.imports.positions.Left;


// This function is called once when your extension is loaded, not enabled.
function init() {
    log(`initializing ${Me.metadata.name} version ${Me.metadata.version}`);
}

// This function is called after your extension is enabled, this can be done from GNOME Tweaks, when you log in or when the screen is unlocked.
function enable() {
    log(`enabling ${Me.metadata.name} version ${Me.metadata.version}`);

	// Change Right.right(); to Left.left(); if you want your notification on the left side of the screen.
    Main.messageTray._bannerBin.x = Right.topright();
}

// This function will be called after you uninstall/disable this extension using GNOME Tweaks.
function disable() {
    log(`disabling ${Me.metadata.name} version ${Me.metadata.version}`);
    Main.messageTray._bannerBin.x = 0;
    Main.messageTray._bannerBin.y = 0;
}