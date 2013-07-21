$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  
  $(".section_title").on('click',function(){
  	var title = $(this)
  	title.next().slideToggle(100);
  });

  $(".create_link").on('click',function(){
  	$(".create.note").slideToggle(100);
  });

  $(".update_form").on('submit',function() {
  	event.preventDefault();
  	console.log("In update onclick");
  	var form = $(this);
  	console.log(form.serialize());
  	console.log(form.action);
  	$.ajax({
  		url: this.action,
  		type: this.method,
  		data: form.serialize()
  	}).done(function(update_data) {
  		// debugger
  		// $(".note").hide();
  		// $(".update").show();
  		form.parent().children().hide();
  		form.parent().append(update_data);
  	});
  });

  $(".delete_submit").on('click',function(){
	console.log("In it")
	var parent = $(this).parent();
	$(this).hide();
	parent.find(".delete_confirm").css({"display":"inline-block"});
  });
});