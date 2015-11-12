# TableToJSON
Table to JSON

Usage
// use table columns form table head
var output = Bild.Common.TableToJSON("#tableId", null);

// with predefined 
var columns = ["id", "name", "email"];
var output = Bild.Common.TableToJSON("#tableId", columns);