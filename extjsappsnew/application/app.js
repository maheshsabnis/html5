Ext.define("MSIT.view.Headers", {
    extend: 'Ext.panel.Panel',
    title: 'MSIT',
    height: 200,
    renderTo: 'content',
    config: {
        logo: 'logo.png'
    },
    layout: {
        type: 'hbox',
        align: 'middle'
    }
});