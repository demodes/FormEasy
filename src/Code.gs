function doPost(req) {
  setSpreadsheet('ID_OF_SPREADSHEET');
  setEmail('email_where_you_will_receive_messages@gmail.com'); // To receive email notification(optional)
  setFields('name', 'email', 'message', 'orderNumber', 'starRating', 'messageType'); 
  return action(req); // Mandatory to return action method
}
