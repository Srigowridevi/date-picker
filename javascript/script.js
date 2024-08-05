
$(document).ready(function (){
  function cb(start, end) {
      $('#config-demo').val(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
      $('#add_products_start_date').val(start.format('YYYY-MM-DD'));
      $('#add_products_end_date').val(end.format('YYYY-MM-DD'));
  }
  cb(moment(), moment());
  $('#config-demo').daterangepicker({
      startDate: moment(),
      endDate: moment(),
      ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
  }, cb);
  $('.demo i').click(function () {
      $(this).parent().find('input').click();
  });
  function updateConfig() {
      var options = {
          opens: "center",
          ranges: {
              'Today': [moment(), moment()],
              'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
              'Last 7 Days': [moment().subtract(6, 'days'), moment()],
              'Last 30 Days': [moment().subtract(29, 'days'), moment()],
              'This Month': [moment().startOf('month'), moment().endOf('month')],
              'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          }
      };
      $('#config-demo').daterangepicker(options, function (start, end, label) {
          var startDate = start.format('YYYY-MM-DD');
          var endDate   = end.format('YYYY-MM-DD');
          console.log(startDate);
          $('#add_products_start_date').val(startDate);
          $('#add_products_end_date').val(endDate);
      });
  }
  updateConfig();
});

