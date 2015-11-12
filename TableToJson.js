var Bild = Bild || {};
Bild.Common = Bild.Common || {};
Bild.Common.TableToJSON = function(tableName, columnsArray){
	
	var table = $(tableName);
	if(!_.isUndefined(table) && !_.isNull(table)){

		var rows = [];
		var columns = [];

		// if columns array is not set get column names from table head
		if(_.isUndefined(columnsArray) || _.isNull(columnsArray)){
			var tableHead = table.find("thead");
			var columnElements = tableHead.find("th");
			_.each(columnElements, function(element){
				var cell = $(element).find("span").text() || $(element).text();
				columns.push(cell);
			});
		}

		// get rows from table body
		var tableBody = table.find("tbody");
		var tableRows = tableBody.find("tr");
		if(!_.isUndefined(tableRows) && tableRows.length > 0){

			// prepare json data
			_.each(tableRows, function(element){
				var row = {};
				var elColumns = $(element).find("td");
				if(!_.isUndefined(elColumns) && elColumns.length > 0){

					_.each(elColumns, function(column, j){
						var cell = $(column).find("span").text() || $(column).text();
						row[columns[j]] = cell;
					});
					rows.push(row);
				}
			});
			return JSON.stringify(rows);
		}
	}
	return null;
}