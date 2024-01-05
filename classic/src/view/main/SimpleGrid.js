Ext.define('SimpleGridApp.view.main.SimpleGrid', {
  extend: 'Ext.grid.Panel',
  xtype: 'simple-grid',
  title: 'Simple Grid',
  store: { type: 'dataApi' },
  columns: [
    { text: 'Name', dataIndex: 'name', flex: 1 },
    { text: 'Type', dataIndex: 'type', flex: 1 },
    { text: 'Runtime', dataIndex: 'runtime', flex: 1 },
    { text: 'Language', dataIndex: 'language', flex: 1 },
    { text: 'Status', dataIndex: 'status', flex: 1 },
    { text: 'Ended', dataIndex: 'ended', flex: 1 },
  ],
  width: 100,
  height: 800,
});
