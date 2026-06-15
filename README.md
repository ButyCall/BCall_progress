# Buty Progress Bar

A lightweight and customizable NUI progress bar for FiveM.

## Features

* Modern NUI progress display
* Simple event-based usage
* Export support
* Lightweight and easy to integrate
* Compatible with modern FiveM builds
* Supports custom text and duration
* Escrow-friendly configuration

## Installation

1. Download or clone the resource.
2. Place the resource in your server's `resources` folder.
3. Add the resource to your `server.cfg`.

```cfg
ensure Buty-Progress
```

## Usage

### Event

```lua
TriggerEvent('BCall_progress:ShowProgress', 5000, 'Loading...')
```

### Export

```lua
exports['Buty-Progress']:ShowProgress(
    5000,
    'Loading...'
)
```

### Legacy Export

```lua
exports['Buty-Progress']:muestra(
    5000,
    'Loading...'
)
```

## Parameters

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| time      | number   | Duration in milliseconds                 |
| text      | string   | Text displayed on the progress bar       |
| cb        | function | Optional callback executed when finished |
| options   | table    | Optional future customization options    |

Example:

```lua
exports['Buty-Progress']:ShowProgress(
    3000,
    'Repairing Vehicle',
    function()
        print('Finished!')
    end
)
```

## Recent Updates

### Modernization Update

This resource has been updated for compatibility with current FiveM builds.

Changes include:

* Updated to Cerulean FXVersion
* Added Lua 5.4 support
* Improved code structure
* Modernized event registration
* Added export support
* Added documentation
* General cleanup and optimization

## Files

```text
Buty-Progress/
├── client.lua
├── fxmanifest.lua
└── html/
    ├── index.html
    ├── style.css
    └── main.js
```

## Credits

Original Author:

* ButyCall#8291

Community Updates:

* Modernization
* Code cleanup
* Documentation improvements

## Support

If you have issues, questions, or suggestions, you can contact the original author on Discord:

https://discord.com/invite/GQWhrhUpPd

Please note that community modifications may not be officially supported by the original author.
