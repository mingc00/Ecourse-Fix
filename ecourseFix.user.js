// Ecourse Fix
// version 1.0
// 2011-10-28
// Copyright (c) 2011, ciffel
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Ecourse Fix
// @namespace     https://github.com/ciffel
// @description   修正eCourse在Chorme上的各式問題
// @match		http://ecourse.elearning.ccu.edu.tw/php/bar.php
// @match		http://ecourse.webedu.ccu.edu.tw/php/bar.php
// @match		http://ecourse.elearning.ccu.edu.tw/php/textbook/course_menu.php*
// @match		http://ecourse.webedu.ccu.edu.tw/php/textbook/course_menu.php*
// @match		http://ecourse.elearning.ccu.edu.tw/php/login_s.php*
// @match		http://ecourse.webedu.ccu.edu.tw/php/login_s.php
// ==/UserScript==


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