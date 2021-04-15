#!/bin/bash

EXTENSION_NAME="Gnoti@AntonVA.dev"
GNOME_EXT_USER_PATH=$HOME"/.local/share/gnome-shell/extensions/"

EXTENSION_PATH=${GNOME_EXT_USER_PATH}${EXTENSION_NAME}

# Abort if error
set -e

# Make sure extension folder exists
mkdir -p ${EXTENSION_PATH}

# Copy updated files to installation location
cp -r ./src/* ${EXTENSION_PATH}/

if [[ -d $EXTENSION_PATH ]]; then
    echo "Files copied to ${EXTENSION_PATH}"
    echo ""
    echo "Restarting Gnome Shell"
    busctl --user call org.gnome.Shell /org/gnome/Shell org.gnome.Shell Eval s 'Meta.restart("Restarting…")' &> /dev/null
    echo ""
fi