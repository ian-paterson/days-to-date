$(function() {
  chrome.storage.sync.get('numDays', function(data) {
    $('.num-days').val(data.numDays);
    $('.date').text(moment().add(data.numDays, 'days').format('LL'));
  });

  $(".num-days").bind('keyup mouseup', function () {
    var numDays = $(this).val();
    $('.date').text(moment().add(numDays, 'days').format('LL'));
    chrome.storage.sync.set({'numDays': numDays});
  });
})
