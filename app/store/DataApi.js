Ext.define('SimpleGridApp.store.DataApi', {
  extend: 'Ext.data.Store',
  alias: 'store.dataApi',
  model: 'SimpleGridApp.model.Data',
  // requires: ['SimpleGridApp.model.Data'],
  proxy: {
    // type: 'ajax',
    url: 'http://api.tvmaze.com/search/shows?q=golden%20girls',
    type: 'rest',
    useDefaultXhrHeader: false,
    reader: {
      type: 'json',
      headers: { Accept: 'application/json' },
      record: 'show',
    },
  },

  autoLoad: true,
});
