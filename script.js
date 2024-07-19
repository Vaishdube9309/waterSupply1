// Replace with your Google Sheets API endpoint and sheet ID
const googleSheetUrl = 'YOUR_GOOGLE_SHEETS_API_ENDPOINT';
const sheetId = 'YOUR_GOOGLE_SHEET_ID';

$(document).ready(function() {
  $('#waterSupplyForm').submit(function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = {
      wardNo: $('#wardNo').val(),
      date: $('#date').val(),
      time: $('#time').val()
    };

    // Send data to Google Sheets
    $.ajax({
      url: googleSheetUrl,
      method: 'POST',
      dataType: 'json',
      data: {
        id: sheetId,
        ...formData
      },
      success: function(response) {
        alert('Data saved successfully!');
        // Optionally clear form fields after successful submission
        $('#wardNo').val('');
        $('#date').val('');
        $('#time').val('');
      },
      error: function(err) {
        alert('Error saving data. Please try again later.');
        console.error(err);
      }
    });
  });
});
