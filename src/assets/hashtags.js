(function($) {
	$.fn.hashtags = function() {
		$(this).wrap('<div class="hashtags"><div class="highlighter"></div></div>').unwrap().before('<div class="highlighter"></div>').wrap('<div class="typehead"></div></div>');
		$(this).addClass("theSelector");
		autosize($(this));
		$(this).on("keyup", function() {
      var str = $(this).val();
      const text = str.replace( /\n/g, ' ').split( ' ').filter(item => item.match(/^#/g)).join(' ');
      document.getElementById('text').innerHTML = text;
			$(this).parent().parent().find(".highlighter").css("width",$(this).css("width"));
      str = str.replace(/\n/g, '<br>');
        if(str.match(/#\S+/g)) {
        str = str.replace(/#(([ก-๙_a-zA-Z0-9]+))/g,'<span class="hashtag">#$1</span>');
      }
      $(this).parent().parent().find(".highlighter").html(str);
		});
		$(this).parent().prev().on('click', function() {
			$(this).parent().find(".theSelector").focus();
		});

  	};
})(jQuery);
