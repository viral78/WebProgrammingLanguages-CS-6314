$(document).ready(function(){
			$("#bottonAdd").click(function(){

			 	$("#newRow").toggle();
			});


          $("#tblNew").keypress(function(){
           if(event.which == 13)
           {

          	var newtodo = $("#tblNew").val();
				$("#Todob").append("<tr><td><i class='fa fa-trash icon' style='display: none;'></i>"+newtodo+"</td></tr>");
				$("#tblNew").val(" ");

				$( "#Todob tr:last" ).bind( {

					mouseenter: function(e) {
						   $(this).find(".icon").toggle();
						  },
						  mouseleave: function(e) {
						   $(this).find(".icon").toggle();
						  },
						  click:function(e){
						  	$(this).toggleClass("done");
						  }
						  
							
											 
				});
				$( "#Todob tr:last" ).on("click",".icon",function(){
	          $(this).parents('tr').remove();


})
			}
          });

         

          $("td").click(function(){
           $(this).toggleClass("done");
          });

          
          $("td").on("click","td",function(){
           $(this).toggleClass("done");
          });

          $("tr").hover(function() {
    		    $(this).find(".icon").toggle();
			});

           $(".icon").click(function() {
           	 $(this).parents('tr').remove();

           });


		});

         