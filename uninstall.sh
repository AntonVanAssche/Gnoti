#!/bin/bash

EXTENSION_NAME="Gnoti@AntonVA.dev"
GNOME_EXT_USER_PATH=$HOME"/.local/share/gnome-shell/extensions/"

EXTENSION_PATH=${GNOME_EXT_USER_PATH}${EXTENSION_NAME}

# Abort if error
set -e

# Remove extension from installed location
rm -rf ${EXTENSION_PATH}/

echo "Removed files from this location ${EXTENSION_PATH}"
echo ""
echo "Restarting Gnome Shell"
busctl --user call org.gnome.Shell /org/gnome/Shell org.gnome.Shell Eval s 'Meta.restart("Restarting…")' &> /dev/null
echo ""
