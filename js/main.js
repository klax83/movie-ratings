$('#rating').on('change', addPost);


function addPost() {
	 var movie = $('#movie')[0].value;
	 var rate = $('#rating')[0].options[rating.options.selectedIndex].innerText;

	 if(movie) {
	 	$('#posts').append('<div class="row"><div class="col-6 border border-primary"><h1>' + movie + '</h1></div><div class="col-6 border border-primary"><h1>' + rate + '</h1></div></div>')
	 }
}