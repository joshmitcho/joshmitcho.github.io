document.write('\
	<section id="contact">\
		<div class="container">\
			<div class="row">\
				<div class="col-lg-12 text-center">\
                    <h2>Contact</h2> <br>\
                </div>\
			</div>\
			<form id="contactform" method="POST" class="text-center">\
				<input type="text" name="name" placeholder="Your name"> <br>\
				<input type="email" name="_replyto" placeholder="Your email"> <br>\
				<input type="hidden" name="_subject" value="Website contact" />\
				<textarea name="message" placeholder="Your message"></textarea>\
				<input type="text" name="_gotcha" style="display:none" />\
				<input type="hidden" name="_next" value="/thanks.html" /> <br>\
				<input type="submit" value="Send">\
			</form>\
        </div>\
    </section>\
');