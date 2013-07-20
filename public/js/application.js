$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $(".create_link").on('click',function() {
  	event.preventDefault();
  	$(".note").hide();
  	$(".create").show();
  });

  $(".read_link").on('click',function() {
  	event.preventDefault();
  	$(".note").hide();
  	$(".read").show();
  });

  $(".update_link").on('click',function() {
  	event.preventDefault();
  	console.log("In update onclick")
  	$.ajax({
  		url: this.action,
  		type: this.method,
  		data: $(".update_link").serialize()
  	}).done(function() {
  		console.log("Nailed it.");
  		$(".note").hide();
  		$(".update").show();
  	});
  });
});
