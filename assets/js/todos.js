
 $("ul").on("mouseover","li",function()
 {

	 $(this).css(
	 {
	
		 color:"#000"
	 }
	 );
 });
 
  $("ul").on("mouseout","li",function(event)
 {

	 $(this).css(
	 {
		 color:"#333"
		 
	 }
	 );	
 });
 
 $(".fa-pencil").on("click",function(){
	 $("input[type='text']").fadeToggle(100);
 });
 
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
	//important method which stops bubbling of other event listeners
	event.stopPropagation();
	//to remove parent use $(this).parent() so li is the parent of span
	//also if we want to animate and then remove we have to use anonymous function in fadeout so it first fades out for 1 second and then it removes this.parent(li)
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
});
$("input[type='text']").on("keypress",function(event){
	if(event.which == 13)
	{
		
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-thumbs-down'></i></span>"+todoText+"</li>");
	}
	
});
