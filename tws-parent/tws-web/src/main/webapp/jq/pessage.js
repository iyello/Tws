
  $(document).ready(function(){
  		
  	$('#butt').click(function() {
  	var today = new Date();
  	var t = today.toLocaleString();//获取当前时间
  	var mes = $('#message').val(); //要放到函数里，下一语句才能用
  	var card_html = $('#card').html();//获取id=card盒子的html
  	//alert(card_html);
  	$('#card').before(card_html);
  	$('#text1').text(mes);
  	$('#data').text(t);
  })
  })

  
  