$(function() {
 
  $("form[name='user-search']").validate({
    rules: {
      cityname: "required",    
    },
    messages: {
      cityname: "Please enter your city",
    },
    submitHandler: function(form) {
      form.submit();
      console.log(user-search)
    }
  });
});
var userinput = $("#city-name").val().trim()
$(".search.button").on("click", function (){
  console.log(user);
  alert("You are" + userinput);
});