$(function() {

	$(document).ready(function(){
		var i=1;
		
		
		$('#add').click(function(){
			i++;
			let price = $('#price').val();
			let service = $('#service').val();
			console.log(price);
			$('#dynamic_field').append('<div class="d-flex" style="align-items: center;" id="roww'+i+'"><p>'+service+'</p><p>'+price+'</p><a class="del" id="'+i+'" ><i>+</i></a></div>'
			);
		});
		
		$(document).on('click', '.del', function(){
			
			var button_id = $(this).attr("id"); 
			console.log(button_id);
			$('#roww'+button_id+'').remove();
		});
		
		$('#submit').click(function(){		
			// $.ajax({
			//     url:"name.php",
			//     method:"POST",
			//     data:$('#add_name').serialize(),
			//     success:function(data)
			//     {
			//         alert(data);
			//         $('#add_name')[0].reset();
			//     }
			// });
		});
		
	});

});
