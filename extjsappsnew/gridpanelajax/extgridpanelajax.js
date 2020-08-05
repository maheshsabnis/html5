   // defining model
   Ext.define('ProductDataModel', {
       extend: 'Ext.data.Model',
       fields: [
           { name: 'ProductRowId', mapping: 'ProductRowId' },
           { name: 'ProductId', mapping: 'ProductId' },
           { name: 'ProductName', mapping: 'ProductName' },
           { name: 'CategoryName', mapping: 'CategoryName' },
           { name: 'Manufacturer', mapping: 'Manufacturer' },
           { name: 'Description', mapping: 'Description' },
           { name: 'BasePrice', mapping: 'BasePrice' }
       ]
   });


   Ext.onReady(function() {
       // define store
       var productStore = Ext.create('Ext.data.Store', {
           model: 'ProductDataModel',
           groupField: 'CategoryName',
           proxy: {
               type: 'ajax',
               url: 'https://apiapptrainingnewapp.azurewebsites.net/api/Products',
               reader: {
                   type: 'json'
               },
           },
           autoLoad: true
       });
       Ext.create('Ext.grid.Panel', {
           id: 'productsDetailsView',
           store: productStore,
           renderTo: 'gridDiv',
           title: 'Products List From Server',
           height: 300,
           width: 800,
           collapsible: true,
           enableColumnMove: true,
           enableColumnResize: true,
           layout: 'fit',
           grouped: true,
           columns: [
               { text: 'Product Row Id', dataIndex: 'ProductRowId' },
               { text: 'Product Id', dataIndex: 'ProductId' },
               { text: 'Product Name', dataIndex: 'ProductName' },
               { text: 'Category Name', dataIndex: 'CategoryName' },
               { text: 'Manufacturer', dataIndex: 'Manufacturer' },
               { text: 'Description', dataIndex: 'Description' },
               { text: 'Base Price', dataIndex: 'BasePrice' }
           ],
           listeners: {
               rowClick: function(grid, record, tr, rowIndex, e, eOptd) {
                   //    alert(`Row Index ${rowIndex}
                   //     Record ${e}`);
                   var record = grid.getStore().getAt(rowIndex);
                   var id = record.get('ProductRowId');
                   alert(id);
                   alert(JSON.stringify(record.data));
               }
           }
       });
   });