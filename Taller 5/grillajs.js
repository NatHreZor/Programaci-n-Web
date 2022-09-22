$(() => {
    const dataGrid = $('#gridContainer').dxDataGrid({
        dataSource: 'https://jsonplaceholder.typicode.com/users',
        keyExpr: 'ID',
        columnsAutoWidth: true,
        showBorders: true,
        filterRow: {
            visible: false,
            applyFilter: 'auto',
        },
        searchPanel: {
            visible: true,
            width: 240,
            placeholder: 'Search...',
        },
        headerFilter: {
            visible: false,
        },
        columns: [{
                dataField: 'name',

                width: 180,
                headerFilter: {
                    groupInterval: 10000,
                },
            },
            {
                dataField: 'username',

                width: 140,
                headerFilter: {
                    groupInterval: 10000,
                },
            },
            {
                dataField: 'email',

                width: 200,
                headerFilter: {
                    groupInterval: 10000,
                },
            },
            {
                dataField: 'address.street',

                width: 140,
                headerFilter: {
                    groupInterval: 10000,
                },
            },
            {
                dataField: 'address.suite',

                width: 140,
                headerFilter: {
                    groupInterval: 10000,
                },
            },
            {
                dataField: 'address.city',

                width: 140,
                headerFilter: {
                    groupInterval: 10000,
                },
            },
            {
                dataField: 'address.zipcode',

                width: 140,
                headerFilter: {
                    groupInterval: 10000,
                },
            },
            {
                dataField: 'address.geo.lat',

                width: 140,
                headerFilter: {
                    groupInterval: 10000,
                },
            },
            {
                dataField: 'address.geo.lng',

                width: 140,
                headerFilter: {
                    groupInterval: 10000,
                },
            }
        ]

    }).dxDataGrid('instance');

    const applyFilterTypes = [{
        key: 'auto',
        name: 'Immediately',
    }, {
        key: 'onClick',
        name: 'On Button Click',
    }];

    const applyFilterModeEditor = $('#useFilterApplyButton').dxSelectBox({
        items: applyFilterTypes,
        value: applyFilterTypes[0].key,
        valueExpr: 'key',
        displayExpr: 'name',
        onValueChanged(data) {
            dataGrid.option('filterRow.applyFilter', data.value);
        },
    }).dxSelectBox('instance');

    $('#filterRow').dxCheckBox({
        text: 'Filter Row',
        value: true,
        onValueChanged(data) {
            dataGrid.clearFilter();
            dataGrid.option('filterRow.visible', data.value);
            applyFilterModeEditor.option('disabled', !data.value);
        },
    });

    $('#headerFilter').dxCheckBox({
        text: 'Header Filter',
        value: true,
        onValueChanged(data) {
            dataGrid.clearFilter();
            dataGrid.option('headerFilter.visible', data.value);
        },
    });

    function getOrderDay(rowData) {
        return (new Date(rowData.OrderDate)).getDay();
    }
});