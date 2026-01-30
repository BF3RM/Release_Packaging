[![Auto Build & Release](https://github.com/BF3RM/Release_Packaging/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/BF3RM/Release_Packaging/actions/workflows/deploy.yml)
[![Auto Build & Release](https://github.com/BF3RM/Release_Packaging/actions/workflows/deploy.yml/badge.svg?branch=main&event=workflow_run)](https://github.com/BF3RM/Release_Packaging/actions/workflows/deploy.yml)

BF3 Reality Mod Server Bundler

A Fully automated build and setup process for  all the RM Mods - with the goal to not execut anyhting locally anymore - only copying the files. (script could automate that...). Could be Also distributed to the PPL hosting the Server - which would make this setup easier-

Features

Automated Builds: Automatically compiles the RealityMod WebUI (ui.vuic) and injects required dependencies.

Level Generation: Runs the LevelLoader generation script automatically during the build.

Smart Packaging: Bundles RealityMod, LevelLoader, BlueprintManager, and VEManager into a single ready-to-use zip file.

Config Ready: Generates standard configuration files (Startup.txt, ModList.txt) automatically.

How to Use

Option 1: Download Release
Go to the Releases tab and download:

Reality-Server-Full.zip: Complete server setup with default configs. (for Fresh Start)

Reality-Mods-Only.zip: Just the Mods folder (best for updates).

Option 2: Git Clone
You can clone the latest tag to get the newest build artifacts:

git clone --branch latest [click](https://github.com/BF3RM/Release_Packaging.git)


Manual Installation Reference

If you need to build this manually for debugging, here is the process this repo automates:

1. Install Mods

RealityMod: Clone the repo, navigate to WebUI, run pnpm install && pnpm build.

LevelLoader: Clone RMLevelLoaderGen, execute generate.bat, and move the output to Server\Admin\Mods\rm-levelloader.

Managers: Clone BlueprintManager and VEManager into the Mods folder.

2. Configuration
Ensure these files exist in Server\Admin:

ModList.txt (List: RealityMod, rm-levelloader, BlueprintManager, VEManager)

Startup.txt (RCON, License Key, Admins)

MapList.txt (Map layers)

BanList.txt