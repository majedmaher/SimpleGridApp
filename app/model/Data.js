Ext.define('SimpleGridApp.model.Data', {
  extend: 'Ext.data.Model',
  alias: 'model.Data',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'type', type: 'string' },
    { name: 'runtime', type: 'int' },
    { name: 'language', type: 'string' },
    { name: 'status', type: 'string' },
    { name: 'ended', type: 'date' },
  ],
});
