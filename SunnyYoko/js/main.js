$(document).ready(function(e) {
    var pass1="02102021";
    
    $('#loginModal').modal('show');
    $('#loginModal').on('hidden.modal', function(e) {
      window.location.href = 'index.html'
    });
  
    //handle the form's "submit" event
    $("#loginForm").submit(function(event) {
      event.preventDefault(); 
      var password = $("#modalpass").val(); 
  
      if (password == pass1)
        $("#loginModal").modal("hide");
        
      else {
        alert('錯誤日期！🙅');
        
      }
    });
  });

  