var gridCOMP = (function(){
	var grid;
	var gridData;
	var columns = "";
	var filters = "";
	var types = "";
	var aligns = "";
	var sorts = "";
	var widths = "";
	var dbColumns = "";
	var columnList = {};

	events.on("destroyVFMS", destroyVFMS);

	function destroyVFMS(){
		columnList = {}

		grid;
		gridData;
		columns = "";
		filters = "";
		types = "";
		aligns = "";
		sorts = "";
		widths = "";
		dbColumns = "";
	}

	var createGrid = function(cell, data, hasFilters=false, gridName=null, hasSort=true){
		dbColumns = "";

		dhtmlx.message({id: "loadingBox", expire:35000, text: "<img src='/data/gifs/ghosty-success.gif' width='28' height='21'>&nbsp;Loading data. Please wait..."});
		grid = cell.attachGrid();
		grid.setImagePath("/dhtmlx/codebase/imgs/");

		var gridData = data;
		for(var i = 0; i < gridData.length; i++){
			columns += gridData[i].columnName+",";
			filters += gridData[i].filter+",";
			types += gridData[i].type+",";
			aligns += gridData[i].align+",";
			sorts += gridData[i].sort+",";
			widths += gridData[i].width+",";
			dbColumns += gridData[i].dbColumn+",";
		}

		columns = columns.slice(0, -1);
		filters = filters.slice(0, -1);
		types = types.slice(0, -1);
		aligns = aligns.slice(0, -1);
		sorts = sorts.slice(0, -1);
		widths = widths.slice(0, -1);
		dbColumns = dbColumns.slice(0, -1);

		grid.setHeader(columns);
		
		if(hasFilters)
			grid.attachHeader(filters);

		if(gridName != null){
			columnList[gridName] = columnList[gridName] || [];
			columnList[gridName].push(dbColumns);
		}

		grid.setColTypes(types);
		if(hasSort){
			grid.setColSorting(sorts);
		}
		grid.setColAlign(aligns);
		grid.setInitWidths(widths);
		grid.enableSmartRendering(true,50);

		grid.init();

		columns = "";
		filters = "";
		types = "";
		aligns = "";
		sorts = "";
		widths = "";
	};

	var getGrid = function(){
		return grid;
	};

	var getDBColumns = function(gridName=null){
		if(gridName != null){
			return columnList[gridName];
		}

		return dbColumns;
	};

	var serializeGrid = function(gridObj){
		var rowData = [];
		var cellData = [];
		gridObj.forEachRow(function(id){
			gridObj.forEachCell(id, function(cellObj, ind){
				cellData.push(gridObj.cells(id, ind).getValue());
			});
			rowData.push([id, cellData]);
			cellData = [];
		});

		return rowData;
	};

	var setColIDs = function(){
		grid.setColumnIds(dbColumns);
	};

	return{
		createGrid: createGrid,
		getGrid: getGrid,
		getDBColumns: getDBColumns,
		serializeGrid: serializeGrid,
		setColIDs: setColIDs
	}
})();