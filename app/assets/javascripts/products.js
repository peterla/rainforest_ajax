$(document).on('ready page:load', function() {
  // function display_search_results() {
  //   // readyState === 4 means that the asynchronous request completed successfully
  //   if (this.readyState === 4) {
  //     console.log(this);
  //     document.getElementById('products').innerHTML = this.responseText;
  //   }
  // }
  //
  // var form = document.getElementById('search-form');
  // form.addEventListener('submit', function(event) {
  //   event.preventDefault();
  //   var searchValue = document.getElementById('search').value;
  //
  //   var xhr = new XMLHttpRequest();
  //   xhr.onload = display_search_results;
  //   xhr.open('GET', '/products?search=' + searchValue, true);
  //   xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  //   xhr.send();
  // });

  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

    $.ajax({
      url: '/products?search=' + searchValue,
      type: 'GET',
      dataType: 'html'
    }).success(function(response) {
      $('#products').html(response);
    });

    // Using .success instead of .done as .done will execute after success or failure, and will do so no matter if
    // there is a success or failure.
  });
});