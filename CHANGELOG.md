## v0.3.0 (07/18/2017
- Implements timer autosave/load (autosave every 30 seconds, and on close) [GH-19]
- Adds TimerDataStorageService [GH-18]
- Adds LocalStorage service [GH-17]
- Adds functionality for timer save/load [GH-11]

## v0.2.0 (07/11/2017)
- Adds an editable title to timers. [GH-9]
- Adds TimeSource service to improve testability of TimerService. [GH-8]
- Fixes build error related to template variable member visibility. [GH-12]
- Adds close buttons to Timers. [GH-13]
- Cleans up leftover intervals for Timers when they are removed. [GH-16] 
- Stops tracking time changes when Timers are not running. [GH-4]
- Adds onToggle event to Timers. [GH-14]

## v0.1.0 (07/7/2017)
- Changes timer selector to app-timer per NG style guide. [GH-7]
- Beautifies src/app directory. Updates editorconfig and tslint to 4 space indentations. [GH-6]
- Fixes various linting issues.
- Removes errant debug message. [GH-5]
- Sets timers to stopped state by default. [GH-3]
- Adds Add Timer button. [GH-2]
- Initializes with 1 timer. [GH-1] 
