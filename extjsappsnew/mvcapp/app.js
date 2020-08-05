// defining the model
Ext.define('MSIT.model.Product', {
    extend: 'Ext.data.Model',
    field: [
        { name: 'ProductRowId', type: 'int' },
        { name: 'ProductId', type: 'string' },
        { name: 'ProductName', type: 'string' },
        { name: 'CategoryName', type: 'string' },
        { name: 'Manufacturer', type: 'string' },
        { name: 'Description', type: 'string' },
        { name: 'BasePrice', type: 'int' }
    ]
});

// defining the store
Ext.define('MSIT.store.products.Products', {
    extend: 'Ext.data.Store',
    model: 'MSIT.model.Product',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'https://apiapptrainingnewapp.azurewebsites.net/api/Products',
        reader: {
            type: 'json'
        }
    }
});

// defining controller
Ext.define('MSIT.view.controller.ProductController', {
    extend: 'Ext.app.ViewController',
    onEdit: function(editor, context) {
        alert(`Button is clicked`);
    }
});


// required object
Ext.require([
    'Ext.grid.*',
    // 'Ext.grid.rowedit.Plugin',
    'MSIT.model.Product',
    'MSIT.store.products.Products'
]);

// defining the Grid Panel

Ext.onReady(function() {
    var productsStore = Ext.create("MSIT.store.products.Products");
    var productController = Ext.create('MSIT.view.controller.ProductController');
    var productsGrid = Ext.create('Ext.grid.Panel', {
        height: 250,
        width: 900,
        title: 'List of Products',
        store: productsStore,
        controller: productController,
        selType: 'rowmodel',
        plugins: {
            ptype: 'rowediting',
            clicksToEdit: 1
        },
        columns: [{
                dataIndex: 'ProductRowId',
                text: 'ProductRowId',
                width: 80
            },
            {
                dataIndex: 'ProductId',
                text: 'ProductId',
                width: 80,
                editor: 'textfield'
            },
            {
                dataIndex: 'ProductName',
                text: 'ProductName',
                width: 140,
                editor: 'textfield'
            },
            {
                dataIndex: 'CategoryName',
                text: 'CategoryName',
                width: 100,
                editor: 'textfield'
            },
            {
                dataIndex: 'Manufacturer',
                text: 'Manufacturer',
                width: 100,
                editor: 'textfield'
            },
            {
                dataIndex: 'Description',
                text: 'Description',
                width: 200,
                editor: 'textfield'
            },
            {
                dataIndex: 'BasePrice',
                text: 'BasePrice',
                width: 100,
                editor: 'textfield'
            },
        ],
        renderTo: Ext.getBody(),
        listeners: {
            // rowClick: function(grid, record, tr, rowIndex, e, eOptd) {
            //     //    alert(`Row Index ${rowIndex}
            //     //     Record ${e}`);
            //     var record = grid.getStore().getAt(rowIndex);
            //     var id = record.get('ProductRowId');
            //     alert(id);
            //     alert(JSON.stringify(record.data));
            // },
            edit: function(editor, e) {
                alert(e);
                e.grid().getStore().each(function(record) {
                    record.set('ProductId', e.value);
                    alert(e.value);
                });
            }
        }
    });
});