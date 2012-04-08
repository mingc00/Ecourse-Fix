var link = document.getElementsByTagName('a');
if(document.URL.match('bar.php') != null) {
	for(var i=0;i < link.length;i++) {
		if(link[i].target == 'target')
			link[i].setAttribute('onclick', (link[i].getAttribute('onclick') == null?'':link[i].getAttribute('onclick')) + 'parent.frames[3].location=this.href');
	}
}
else if(document.URL.match('course_menu.php') != null) {
	for(var i=0;i < link.length;i++) {
		if(link[i].target == 'html') {
			link[i].setAttribute('onclick', (link[i].getAttribute('onclick') == null?'':link[i].getAttribute('onclick')) + 'parent.frames[1].location=this.href');
		}
	}
}
if(document.URL.match('login_s.php') != null) {
	document.charset = 'Big5';
	document.title = '學生系統';
}