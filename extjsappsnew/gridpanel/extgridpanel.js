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
           data: [{
                   "ProductRowId": 1,
                   "ProductId": "Prd001",
                   "ProductName": "Laptop 32 GB RAM",
                   "Manufacturer": "IBM",
                   "CategoryName": "Electronics",
                   "Description": "Gaming Laptop",
                   "BasePrice": 340000
               },
               {
                   "ProductRowId": 3,
                   "ProductId": "Prd003",
                   "ProductName": "Desktop PC",
                   "Manufacturer": "Phillipse",
                   "CategoryName": "Electrical",
                   "Description": "Server and server",
                   "BasePrice": 34334
               },
               {
                   "ProductRowId": 6,
                   "ProductId": "Prd001",
                   "ProductName": "Iron",
                   "Manufacturer": "IBM",
                   "CategoryName": "Electrical",
                   "Description": "kask",
                   "BasePrice": 1000
               },
               {
                   "ProductRowId": 7,
                   "ProductId": "Prd002",
                   "ProductName": "Router",
                   "Manufacturer": "HP",
                   "CategoryName": "Electronics",
                   "Description": "100 GBPS",
                   "BasePrice": 1200
               },
               {
                   "ProductRowId": 8,
                   "ProductId": "Prd3001",
                   "ProductName": "Cold Drink",
                   "Manufacturer": "Parle",
                   "CategoryName": "Food",
                   "Description": "Energy Drinks",
                   "BasePrice": 20
               },
               {
                   "ProductRowId": 9,
                   "ProductId": "Prd3002",
                   "ProductName": "Laptop",
                   "Manufacturer": "ASUS",
                   "CategoryName": "Electronics",
                   "Description": "The 32 GB RAM 2 TB SSD Laptop",
                   "BasePrice": 340000
               },
               {
                   "ProductRowId": 10,
                   "ProductId": "Prd3003",
                   "ProductName": "Mixer",
                   "Manufacturer": "Phillpse",
                   "CategoryName": "Electrical",
                   "Description": "House Hold Material",
                   "BasePrice": 3400
               },
               {
                   "ProductRowId": 11,
                   "ProductId": "Prd4005",
                   "ProductName": "Head Phones",
                   "Manufacturer": "HP",
                   "CategoryName": "Electronics",
                   "Description": "High Bass",
                   "BasePrice": 2000
               },
               {
                   "ProductRowId": 12,
                   "ProductId": "Prd4006",
                   "ProductName": "Router",
                   "Manufacturer": "IBM",
                   "CategoryName": "Electronics",
                   "Description": "1000GBPS",
                   "BasePrice": 12000
               }
           ]
       });
       Ext.create('Ext.grid.Panel', {
           id: 'productsDetailsView',
           store: productStore,
           renderTo: 'gridDiv',
           title: 'Products List',
           height: 300,
           width: 800,
           collapsible: true,
           enableColumnMove: true,
           enableColumnResize: true,
           layout: 'fit',
           columns: [
               { text: 'Product Row Id', dataIndex: 'ProductRowId' },
               { text: 'Product Id', dataIndex: 'ProductId' },
               { text: 'Product Name', dataIndex: 'ProductName' },
               { text: 'Category Name', dataIndex: 'CategoryName' },
               { text: 'Manufacturer', dataIndex: 'Manufacturer' },
               { text: 'Description', dataIndex: 'Description' },
               { text: 'Base Price', dataIndex: 'BasePrice' }
           ]
       });
   });