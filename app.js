/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
  extend: 'SimpleGridApp.Application',

  name: 'SimpleGridApp',

  requires: [
    // This will automatically load all classes in the SimpleGridApp namespace
    // so that application classes do not need to require each other.
    'SimpleGridApp.*',
  ],

  // The name of the initial view to create.
  mainView: 'SimpleGridApp.view.main.SimpleGrid',
});
