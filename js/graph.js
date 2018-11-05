$(document).ready(function(){

	$( "#graph_container" ).prepend( $('input[name=graph]:checked', '#graph_form').val() );

	$( "#graph_form" ).click(function() {
		$( "#graph_container " ).empty();
		$( "#graph_container" ).prepend( $('input[name=graph]:checked', '#graph_form').val() );
	});

});