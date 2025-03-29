function doPost(req) {
  setSpreadsheet('ID_OF_SPREADSHEET');
  setEmail('staffstafen@gmail.com'); // To receive email notification(optional)
  return action(req); // Mandatory to return action method
}
