function doGet() 
{
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function getData()
{
  var spreadSheetId = "1S8W-Z_eVmeH4TFhCw3oPXqEPjU9_BGrLtshY9vezw58";
  var dataRange     = "Data!A3:B";
 
  var range   = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values  = range.values;
 
  return values;
}