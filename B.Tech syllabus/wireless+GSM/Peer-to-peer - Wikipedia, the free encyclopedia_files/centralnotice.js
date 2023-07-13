
function toggleNotice() {
	var notice = document.getElementById('centralNotice');
	if (!wgNoticeToggleState) {
		notice.className = notice.className.replace('collapsed', 'expanded');
		toggleNoticeCookie('0');
	} else {
		notice.className = notice.className.replace('expanded', 'collapsed');
		toggleNoticeCookie('1');
	}
	wgNoticeToggleState = !wgNoticeToggleState;
}
function toggleNoticeStyle(elems, display) {
	if(elems)
		for(var i=0;i<elems.length;i++)
			elems[i].style.display = display;
}
function toggleNoticeCookie(state) {
	var e = new Date();
	e.setTime( e.getTime() + (7*24*60*60*1000) ); // one week
	var work='hidesnmessage='+state+'; expires=' + e.toGMTString() + '; path=/';
	document.cookie = work;
}
function pickTemplate(templates, weights) {
	var weightedTemplates = new Array();
	var currentTemplate = 0;
	var totalWeight = 0;

	if (templates.length == 0)
		return '';

	while (currentTemplate < templates.length) {
		totalWeight += weights[currentTemplate];
		for (i=0; i<weights[currentTemplate]; i++) {
			weightedTemplates[weightedTemplates.length] = templates[currentTemplate];
		}
		currentTemplate++;
	}
	
	if (totalWeight == 0)
		return '';

	var randomnumber=Math.floor(Math.random()*totalWeight);
	return weightedTemplates[randomnumber];
}


var wgNoticeToggleState = (document.cookie.indexOf('hidesnmessage=1')==-1);
document.writeln("\x3cstyle type=\"text/css\"\x3e\n#centralNotice .siteNoticeSmall{display:none;}\n#centralNotice .siteNoticeSmallAnon{display:none;}\n#centralNotice .siteNoticeSmallUser{display:none;}\n#centralNotice.collapsed .siteNoticeBig{display:none;}\n#centralNotice.collapsed .siteNoticeSmall{display:block;}\n#centralNotice.collapsed .siteNoticeSmallUser{display:block;}\n#centralNotice.collapsed .siteNoticeSmallAnon{display:block;}\n#centralNotice.anonnotice .siteNoticeSmallUser{display:none !important;}\n#centralNotice.usernotice .siteNoticeSmallAnon{display:none !important;}\n\x3c/style\x3e");

wgNotice=pickTemplate(["\x3cstyle type=\"text/css\"\x3e\n/* Styles for Notices */\n.notice-all a {\n text-decoration: none;\n}\n.notice-all a:hover span {\n text-decoration: underline;\n}\ndiv.notice-all div, div.notice-all span {\n margin: 0 !important;\n}\n.notice-pitch {\n display: inline-block;\n background-color: transparent;\n}\n.notice-pitch-text {\n float: left;\n overflow: visible;\n color: black;\n font-family: sans-serif;\n font-weight: bold;\n text-align: center;\n font-size: 2.25em;\n line-height: 1em;\n padding: 0.5em !important;\n cursor: pointer;\n}\n.notice-slogan {\n color: #6E98C2;\n font-weight: bold;\n padding-right: 1em;\n}\n.siteNoticeBig {\n position: relative;\n float: left;\n width: 100%;\n border: solid 1px silver;\n background-color: #f3f3f3;\n margin-bottom: 1em;\n padding-top: 1em;\n padding-bottom: 1em;\n}\n .siteNoticeBig .notice-toggle {\n  position: absolute;\n  top: 0em;\n  right: 0.5em;\n  font-size: 0.75em;\n }\n.siteNoticeSmallAnon {\n position: relative;\n float: left;\n width: 100%;\n border: solid 1px silver;\n background-color: #f3f3f3;\n text-align: center;\n padding: 0.1em 0;\n margin-bottom: 1em;\n}\n .siteNoticeSmallAnon .notice-toggle {\n  float: right;\n  font-size: 0.75em;\n  padding-right: 0.5em;\n }\n .siteNoticeSmallAnon .notice-slogan {\n  padding-left: 0.5em;\n }\n.siteNoticeSmallUser {\n position: relative;\n float: left;\n width: 100%;\n text-align: center;\n margin-bottom: 1em;\n}\n .siteNoticeSmallUser .notice-toggle {\n  float: right;\n  font-size: 0.75em;\n }\n\x3c/style\x3e\n\x3cscript\x3e\n/* @param mode string to be appended to the utm_source paramter like \"utm_source=[notice]_[mode]\" */\nfunction goToDonationPage( mode ) {\n var url = \'http://meta.wikimedia.org/wiki/Special:GeoLite?lang=en\x26\x26utm_medium=sitenotice\x26utm_campaign=fundraiser2009\x26utm_source=2009_Jimmy_Appeal1\';\n if ( mode \x26\x26 mode.length ) { \n  url += \'_\' + mode;\n }\n var targets = String( \'Appeal, Appeal2\' ).split(\',\');\n if ( targets.length ) {\n  url += \'\x26target=\' + targets[Math.floor( Math.random() * targets.length )].replace(/^\\s+|\\s+$/, \'\');\n }\n window.location = url;\n}\n\x3c/script\x3e\n\x3cdiv class=\"notice-all siteNoticeBig\" align=\"center\"\x3e\n \x3ca class=\"notice-pitch\" href=\"javascript:goToDonationPage()\"\x3e\n  \x3cdiv class=\"notice-pitch-text\"\x3e\n   \x3cspan\x3ePlease read:\x3cbr /\x3eA personal appeal from\x3cbr /\x3eWikipedia founder Jimmy Wales\x3c/span\x3e\n  \x3c/div\x3e\n  \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n \x3c/a\x3e\n \x3cdiv class=\"notice-toggle\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice();return false\"\x3e\x3cspan\x3eHide\x3c/span\x3e\x3c/a\x3e]\x3c/div\x3e\n \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv class=\"notice-all siteNoticeSmallAnon\"\x3e\n \x3cdiv class=\"notice-toggle\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice()\"\x3e\x3cspan\x3eShow\x3c/span\x3e\x3c/a\x3e]\x3c/div\x3e\n \x3ca class=\"notice-slogan\" href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n   \x3cspan\x3eWikipedia\x3c/span\x3e\n   \x3cimg src=\"http://upload.wikimedia.org/wikipedia/commons/b/b1/Wikipedia-logo-small_%28Fundraising_2009%29.png\" alt=\"\"\x3e\n   \x3cspan\x3eForever\x3c/span\x3e\n \x3c/a\x3e\n \x3cspan\x3eOur shared knowledge. Our shared treasure.\x3c/span\x3e\n \x3ca href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eHelp us protect it.\x3c/span\x3e\n \x3c/a\x3e\n \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv class=\"notice-all siteNoticeSmallUser\"\x3e\n \x3cdiv class=\"notice-toggle\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice()\"\x3e\x3cspan\x3eShow\x3c/span\x3e\x3c/a\x3e]\x3c/div\x3e\n \x3ca class=\"notice-slogan\" href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eWikipedia\x3c/span\x3e\n  \x3cimg src=\"http://upload.wikimedia.org/wikipedia/commons/b/b1/Wikipedia-logo-small_%28Fundraising_2009%29.png\" alt=\"\"\x3e\n  \x3cspan\x3eForever\x3c/span\x3e\n \x3c/a\x3e\n \x3cspan\x3eOur shared knowledge. Our shared treasure.\x3c/span\x3e\n \x3ca href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eHelp us protect it.\x3c/span\x3e\n \x3c/a\x3e\n \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e", "\x3cstyle type=\"text/css\"\x3e\n/* Styles for Notices */\n.notice-all a {\n text-decoration: none;\n}\n.notice-all a:hover span {\n text-decoration: underline;\n}\ndiv.notice-all div, div.notice-all span {\n margin: 0 !important;\n}\n.notice-pitch {\n display: inline-block;\n background-color: transparent;\n}\n.notice-pitch-text {\n overflow: visible;\n color: navy;\n font-family: sans-serif;\n font-weight: bold;\n text-align: center;\n font-size: 2.25em;\n line-height: 1em;\n padding: 0.5em !important;\n cursor: pointer;\n}\n.notice-slogan {\n color: #6E98C2;\n font-weight: bold;\n padding-right: 1em;\n}\n.siteNoticeBig {\n position: relative;\n float: left;\n width: 100%;\n border: solid 1px silver;\n background-color: #f3f3f3;\n margin-bottom: 1em;\n padding-top: 1em;\n padding-bottom: 1em;\n}\n .siteNoticeBig .notice-toggle {\n  position: absolute;\n  top: 0em;\n  right: 0.5em;\n  font-size: 0.75em;\n }\n.siteNoticeSmallAnon {\n position: relative;\n float: left;\n width: 100%;\n border: solid 1px silver;\n background-color: #f3f3f3;\n text-align: center;\n padding: 0.1em 0;\n margin-bottom: 1em;\n}\n .siteNoticeSmallAnon .notice-toggle {\n  float: right;\n  font-size: 0.75em;\n  padding-right: 0.5em;\n }\n .siteNoticeSmallAnon .notice-slogan {\n  padding-left: 0.5em;\n }\n.siteNoticeSmallUser {\n position: relative;\n float: left;\n width: 100%;\n text-align: center;\n margin-bottom: 1em;\n}\n .siteNoticeSmallUser .notice-toggle {\n  float: right;\n  font-size: 0.75em;\n }\n\x3c/style\x3e\n\x3cscript\x3e\n/* @param mode string to be appended to the utm_source paramter like \"utm_source=[notice]_[mode]\" */\nfunction goToDonationPage( mode ) {\n var url = \'http://meta.wikimedia.org/wiki/Special:GeoLite?lang=en\x26\x26utm_medium=sitenotice\x26utm_campaign=fundraiser2009\x26utm_source=2009_Jimmy_Appeal3\';\n if ( mode \x26\x26 mode.length ) { \n  url += \'_\' + mode;\n }\n var targets = String( \'Appeal, Appeal2\' ).split(\',\');\n if ( targets.length ) {\n  url += \'\x26target=\' + targets[Math.floor( Math.random() * targets.length )].replace(/^\\s+|\\s+$/, \'\');\n }\n window.location = url;\n}\n\x3c/script\x3e\n\x3cdiv class=\"notice-all siteNoticeBig\" align=\"center\"\x3e\n \x3ca class=\"notice-pitch\" href=\"javascript:goToDonationPage()\"\x3e\n  \x3cdiv class=\"notice-pitch-text\"\x3e\n   \x3cspan\x3ePlease read:\x3cbr /\x3eA personal appeal from\x3cbr /\x3eWikipedia founder Jimmy Wales\x3c/span\x3e\n  \x3c/div\x3e\n  \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n \x3c/a\x3e\n \x3cdiv class=\"notice-toggle\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice();return false\"\x3e\x3cspan\x3eHide\x3c/span\x3e\x3c/a\x3e]\x3c/div\x3e\n \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv class=\"notice-all siteNoticeSmallAnon\"\x3e\n \x3cdiv class=\"notice-toggle\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice()\"\x3e\x3cspan\x3eShow\x3c/span\x3e\x3c/a\x3e]\x3c/div\x3e\n \x3ca class=\"notice-slogan\" href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n   \x3cspan\x3eWikipedia\x3c/span\x3e\n   \x3cimg src=\"http://upload.wikimedia.org/wikipedia/commons/b/b1/Wikipedia-logo-small_%28Fundraising_2009%29.png\" alt=\"\"\x3e\n   \x3cspan\x3eForever\x3c/span\x3e\n \x3c/a\x3e\n \x3cspan\x3eOur shared knowledge. Our shared treasure.\x3c/span\x3e\n \x3ca href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eHelp us protect it.\x3c/span\x3e\n \x3c/a\x3e\n \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv class=\"notice-all siteNoticeSmallUser\"\x3e\n \x3cdiv class=\"notice-toggle\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice()\"\x3e\x3cspan\x3eShow\x3c/span\x3e\x3c/a\x3e]\x3c/div\x3e\n \x3ca class=\"notice-slogan\" href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eWikipedia\x3c/span\x3e\n  \x3cimg src=\"http://upload.wikimedia.org/wikipedia/commons/b/b1/Wikipedia-logo-small_%28Fundraising_2009%29.png\" alt=\"\"\x3e\n  \x3cspan\x3eForever\x3c/span\x3e\n \x3c/a\x3e\n \x3cspan\x3eOur shared knowledge. Our shared treasure.\x3c/span\x3e\n \x3ca href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eHelp us protect it.\x3c/span\x3e\n \x3c/a\x3e\n \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e", "\x3cstyle type=\"text/css\"\x3e\n/* Styles for Notices */\n.notice-all a {\n text-decoration: none;\n}\n.notice-all a:hover span {\n text-decoration: underline;\n}\ndiv.notice-all div, div.notice-all span {\n margin: 0 !important;\n}\n.notice-pitch {\n display: inline-block;\n background-color: transparent;\n}\n.notice-pitch-text {\n overflow: visible;\n color: navy;\n font-family: sans-serif;\n font-weight: bold;\n text-align: center;\n font-size: 2.25em;\n line-height: 1em;\n padding: 0.5em !important;\n cursor: pointer;\n}\n.notice-slogan {\n color: #6E98C2;\n font-weight: bold;\n padding-right: 1em;\n}\n.siteNoticeBig {\n position: relative;\n float: left;\n width: 100%;\n border: solid 1px #AACCFF;\n background-color: #F0F9FF;\n margin-bottom: 1em;\n padding-top: 1em;\n padding-bottom: 1em;\n}\n .siteNoticeBig .notice-toggle {\n  position: absolute;\n  top: 0em;\n  right: 0.5em;\n  font-size: 0.75em;\n }\n.siteNoticeSmallAnon {\n position: relative;\n float: left;\n width: 100%;\n border: solid 1px #AACCFF;\n background-color: #F0F9FF;\n text-align: center;\n padding: 0.1em 0;\n margin-bottom: 1em;\n}\n .siteNoticeSmallAnon .notice-toggle {\n  float: right;\n  font-size: 0.75em;\n  padding-right: 0.5em;\n }\n .siteNoticeSmallAnon .notice-slogan {\n  padding-left: 0.5em;\n }\n.siteNoticeSmallUser {\n position: relative;\n float: left;\n width: 100%;\n text-align: center;\n margin-bottom: 1em;\n}\n .siteNoticeSmallUser .notice-toggle {\n  float: right;\n  font-size: 0.75em;\n }\n\x3c/style\x3e\n\x3cscript\x3e\n/* @param mode string to be appended to the utm_source paramter like \"utm_source=[notice]_[mode]\" */\nfunction goToDonationPage( mode ) {\n var url = \'http://meta.wikimedia.org/wiki/Special:GeoLite?lang=en\x26\x26utm_medium=sitenotice\x26utm_campaign=fundraiser2009\x26utm_source=2009_Jimmy_Appeal4\';\n if ( mode \x26\x26 mode.length ) { \n  url += \'_\' + mode;\n }\n var targets = String( \'Appeal, Appeal2\' ).split(\',\');\n if ( targets.length ) {\n  url += \'\x26target=\' + targets[Math.floor( Math.random() * targets.length )].replace(/^\\s+|\\s+$/, \'\');\n }\n window.location = url;\n}\n\x3c/script\x3e\n\x3cdiv class=\"notice-all siteNoticeBig\" align=\"center\"\x3e\n \x3ca class=\"notice-pitch\" href=\"javascript:goToDonationPage()\"\x3e\n  \x3cdiv class=\"notice-pitch-text\"\x3e\n   \x3cspan\x3ePlease read:\x3cbr /\x3eA personal appeal from\x3cbr /\x3eWikipedia founder Jimmy Wales\x3c/span\x3e\n  \x3c/div\x3e\n  \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n \x3c/a\x3e\n \x3cdiv class=\"notice-toggle\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice();return false\"\x3e\x3cspan\x3eHide\x3c/span\x3e\x3c/a\x3e]\x3c/div\x3e\n \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv class=\"notice-all siteNoticeSmallAnon\"\x3e\n \x3cdiv class=\"notice-toggle\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice()\"\x3e\x3cspan\x3eShow\x3c/span\x3e\x3c/a\x3e]\x3c/div\x3e\n \x3ca class=\"notice-slogan\" href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n   \x3cspan\x3eWikipedia\x3c/span\x3e\n   \x3cimg src=\"http://upload.wikimedia.org/wikipedia/commons/b/b1/Wikipedia-logo-small_%28Fundraising_2009%29.png\" alt=\"\"\x3e\n   \x3cspan\x3eForever\x3c/span\x3e\n \x3c/a\x3e\n \x3cspan\x3eOur shared knowledge. Our shared treasure.\x3c/span\x3e\n \x3ca href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eHelp us protect it.\x3c/span\x3e\n \x3c/a\x3e\n \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv class=\"notice-all siteNoticeSmallUser\"\x3e\n \x3cdiv class=\"notice-toggle\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice()\"\x3e\x3cspan\x3eShow\x3c/span\x3e\x3c/a\x3e]\x3c/div\x3e\n \x3ca class=\"notice-slogan\" href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eWikipedia\x3c/span\x3e\n  \x3cimg src=\"http://upload.wikimedia.org/wikipedia/commons/b/b1/Wikipedia-logo-small_%28Fundraising_2009%29.png\" alt=\"\"\x3e\n  \x3cspan\x3eForever\x3c/span\x3e\n \x3c/a\x3e\n \x3cspan\x3eOur shared knowledge. Our shared treasure.\x3c/span\x3e\n \x3ca href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eHelp us protect it.\x3c/span\x3e\n \x3c/a\x3e\n \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e", "\x3cstyle type=\"text/css\"\x3e\n/* Styles for Notices */\n.notice-all a {\n text-decoration: none;\n}\n.notice-all a:hover span {\n text-decoration: underline;\n}\ndiv.notice-all div, div.notice-all span {\n margin: 0 !important;\n}\n.notice-pitch {\n display: inline-block;\n background-color: transparent;\n}\n.notice-pitch-text {\n overflow: visible;\n color: black;\n font-family: sans-serif;\n font-weight: bold;\n text-align: center;\n font-size: 2.25em;\n line-height: 1em;\n padding: 0.5em !important;\n cursor: pointer;\n}\n.notice-slogan {\n color: black;\n font-weight: bold;\n padding-right: 1em;\n}\n.siteNoticeBig {\n position: relative;\n float: left;\n width: 100%;\n border: solid 5px navy;\n background-color: white;\n margin-bottom: 1em;\n padding-top: 1em;\n padding-bottom: 1em;\n}\n .siteNoticeBig .notice-toggle {\n  position: absolute;\n  top: 0em;\n  right: 0.5em;\n  font-size: 0.75em;\n }\n.siteNoticeSmallAnon {\n position: relative;\n float: left;\n width: 100%;\n border: solid 1px navy;\n background-color: white;\n text-align: center;\n padding: 0.1em 0;\n margin-bottom: 1em;\n}\n .siteNoticeSmallAnon .notice-toggle {\n  float: right;\n  font-size: 0.75em;\n  padding-right: 0.5em;\n }\n .siteNoticeSmallAnon .notice-slogan {\n  padding-left: 0.5em;\n }\n.siteNoticeSmallUser {\n position: relative;\n float: left;\n width: 100%;\n text-align: center;\n margin-bottom: 1em;\n}\n .siteNoticeSmallUser .notice-toggle {\n  float: right;\n  font-size: 0.75em;\n }\n\x3c/style\x3e\n\x3cscript\x3e\n/* @param mode string to be appended to the utm_source paramter like \"utm_source=[notice]_[mode]\" */\nfunction goToDonationPage( mode ) {\n var url = \'http://meta.wikimedia.org/wiki/Special:GeoLite?lang=en\x26\x26utm_medium=sitenotice\x26utm_campaign=fundraiser2009\x26utm_source=2009_Jimmy_Appeal9\';\n if ( mode \x26\x26 mode.length ) { \n  url += \'_\' + mode;\n }\n var targets = String( \'Appeal, Appeal2\' ).split(\',\');\n if ( targets.length ) {\n  url += \'\x26target=\' + targets[Math.floor( Math.random() * targets.length )].replace(/^\\s+|\\s+$/, \'\');\n }\n window.location = url;\n}\n\x3c/script\x3e\n\x3cdiv class=\"notice-all siteNoticeBig\" align=\"center\"\x3e\n \x3ca class=\"notice-pitch\" href=\"javascript:goToDonationPage()\"\x3e\n  \x3cdiv class=\"notice-pitch-text\"\x3e\n   \x3cspan\x3ePlease read:\x3cbr /\x3eA personal appeal from Wikipedia founder Jimmy Wales\x3c/span\x3e\n  \x3c/div\x3e\n  \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n \x3c/a\x3e\n \x3cdiv class=\"notice-toggle\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice();return false\"\x3e\x3cspan\x3eHide\x3c/span\x3e\x3c/a\x3e]\x3c/div\x3e\n \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv class=\"notice-all siteNoticeSmallAnon\"\x3e\n \x3cdiv class=\"notice-toggle\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice()\"\x3e\x3cspan\x3eShow\x3c/span\x3e\x3c/a\x3e]\x3c/div\x3e\n \x3ca class=\"notice-slogan\" href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n   \x3cspan\x3eWikipedia\x3c/span\x3e\n   \x3cimg src=\"http://upload.wikimedia.org/wikipedia/commons/b/b1/Wikipedia-logo-small_%28Fundraising_2009%29.png\" alt=\"\"\x3e\n   \x3cspan\x3eForever\x3c/span\x3e\n \x3c/a\x3e\n \x3cspan\x3eOur shared knowledge. Our shared treasure.\x3c/span\x3e\n \x3ca href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eHelp us protect it.\x3c/span\x3e\n \x3c/a\x3e\n \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv class=\"notice-all siteNoticeSmallUser\"\x3e\n \x3cdiv class=\"notice-toggle\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice()\"\x3e\x3cspan\x3eShow\x3c/span\x3e\x3c/a\x3e]\x3c/div\x3e\n \x3ca class=\"notice-slogan\" href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eWikipedia\x3c/span\x3e\n  \x3cimg src=\"http://upload.wikimedia.org/wikipedia/commons/b/b1/Wikipedia-logo-small_%28Fundraising_2009%29.png\" alt=\"\"\x3e\n  \x3cspan\x3eForever\x3c/span\x3e\n \x3c/a\x3e\n \x3cspan\x3eOur shared knowledge. Our shared treasure.\x3c/span\x3e\n \x3ca href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eHelp us protect it.\x3c/span\x3e\n \x3c/a\x3e\n \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e", "\x3cstyle type=\"text/css\"\x3e\n/* Styles for Notices */\n.notice-all a {\n text-decoration: none;\n}\n.notice-all a:hover span {\n text-decoration: underline;\n}\ndiv.notice-all div, div.notice-all span {\n margin: 0 !important;\n}\n.notice-pitch {\n display: inline-block;\n background-color: transparent;\n margin: 1.15em 0em;\n}\n.notice-pitch-text {\n float: left;\n overflow: visible;\n font-family: sans-serif;\n font-size: 1em;\n line-height: 1.5em;\n padding: 0.75em !important;\n cursor: pointer;\n}\n.notice-pitch-text-big {\n font-size: 1.5em;\n}\n.notice-slogan {\n color: #6E98C2;\n font-weight: bold;\n padding-right: 1em;\n}\n.siteNoticeBig {\n position: relative;\n float: left;\n width: 100%;\n border: solid 1px silver;\n background-color: #f3f3f3;\n margin-bottom: 1em;\n}\n .siteNoticeBig .notice-toggle {\n  position: absolute;\n  top: 0em;\n  right: 0.5em;\n  font-size: 0.75em;\n }\n .siteNoticeBig .notice-button {\n  position: absolute;\n  bottom: 0.5em;\n  right: 0.5em;\n  height: 28px;\n  text-align: center;\n  background-color: transparent;\n }\n .siteNoticeBig .notice-button-start {\n  float: left;\n  background-image: url(http://upload.wikimedia.org/centralnotice/images/2009/button.png);\n  background-position: left top;\n  width: 12px;\n  height: 28px;\n }\n .siteNoticeBig .notice-button-end {\n  float: left;\n  background-image: url(http://upload.wikimedia.org/centralnotice/images/2009/button.png);\n  background-position: right bottom;\n  width: 12px;\n  height: 28px;\n }\n .siteNoticeBig .notice-button a {\n  float: left;\n  background-image: url(http://upload.wikimedia.org/centralnotice/images/2009/button.png);\n  background-position: center center;\n  background-repeat: repeat-x;\n  font-family: sans-serif;\n  font-size: 1em;\n  font-weight: bold;\n  color: white;\n  line-height: 28px;\n  height: 28px;\n }\n .siteNoticeBig .notice-thermometer {\n  height: 21px;\n  width: 450px;\n  margin-top: 0.75em !important;\n }\n .siteNoticeBig .notice-thermometer-start {\n  float: left;\n  background-image: url(http://upload.wikimedia.org/centralnotice/images/2009/thermometer.png);\n  background-position: left top;\n  width: 10px;\n  height: 21px;\n }\n .siteNoticeBig .notice-thermometer-fill {\n  float: left;\n  background-image: url(http://upload.wikimedia.org/centralnotice/images/2009/thermometer.png);\n  background-position: left -21px;\n  height: 21px;\n  color: white;\n  font-weight: bold;\n  text-align: right;\n  line-height: 21px;\n  overflow: hidden;\n }\n .siteNoticeBig .notice-thermometer-transition {\n  float: left;\n  background-image: url(http://upload.wikimedia.org/centralnotice/images/2009/thermometer-transition.png);\n  height: 21px;\n  width: 24px;\n }\n .siteNoticeBig .notice-thermometer-base {\n  float: left;\n  background-image: url(http://upload.wikimedia.org/centralnotice/images/2009/thermometer.png);\n  background-position: left 42px;\n  height: 21px;\n  color: #3474b5;\n  font-weight: bold;\n  text-align: right;\n  line-height: 21px;\n  overflow: hidden;\n }\n .siteNoticeBig .notice-thermometer-end {\n  float: left;\n  background-image: url(http://upload.wikimedia.org/centralnotice/images/2009/thermometer.png);\n  background-position: right bottom;\n  width: 10px;\n  height: 21px;\n }\n\n.siteNoticeSmallAnon {\n position: relative;\n float: left;\n width: 100%;\n border: solid 1px silver;\n background-color: #f3f3f3;\n text-align: center;\n padding: 0.1em 0;\n margin-bottom: 1em;\n}\n .siteNoticeSmallAnon .notice-toggle {\n  float: right;\n  font-size: 0.75em;\n  padding-right: 0.5em;\n }\n .siteNoticeSmallAnon .notice-slogan {\n  padding-left: 0.5em;\n }\n.siteNoticeSmallUser {\n position: relative;\n float: left;\n width: 100%;\n text-align: center;\n margin-bottom: 1em;\n}\n .siteNoticeSmallUser .notice-toggle {\n  float: right;\n  font-size: 0.75em;\n }\n\n\x3c/style\x3e\n\x3cscript\x3e\n/* @param mode string to be appended to the utm_source paramter like \"utm_source=[notice]_[mode]\" */\nfunction goToDonationPage( mode ) {\n var url = \'http://meta.wikimedia.org/wiki/Special:GeoLite?lang=en\x26\x26utm_medium=sitenotice\x26utm_campaign=fundraiser2009\x26utm_source=2009_Notice49\';\n if ( mode \x26\x26 mode.length ) { \n  url += \'_\' + mode;\n }\n var targets = String( \'Support_Wikipedia2\' ).split(\',\');\n if ( targets.length ) {\n  url += \'\x26target=\' + targets[Math.floor( Math.random() * targets.length )].replace(/^\\s+|\\s+$/, \'\');\n }\n window.location = url;\n}\n// Set thermometer sizes\nvar maxPixels = 406;\nvar range = parseInt( \'7500000\' );\nvar value = parseInt( \'6900000\' );\nvar fill = parseInt( maxPixels * ( ( 1 / range ) * value ) );\nvar base = maxPixels - fill;\nappendCSS(\'\\\n .siteNoticeBig .notice-thermometer-fill { width: \' + fill + \'px; }\\\n .siteNoticeBig .notice-thermometer-base { width: \' + base + \'px; }\\\n\');\n\x3c/script\x3e\n\x3cdiv class=\"notice-all siteNoticeBig\" align=\"center\"\x3e\n \x3ca class=\"notice-pitch\" href=\"javascript:goToDonationPage()\"\x3e\n  \x3cdiv class=\"notice-pitch-text\"\x3e\n   \x3cspan class=\"notice-pitch-text-big\"\x3eWe\'re almost there. Thank you.\x3c/span\x3e\n   \x3cdiv class=\"notice-thermometer\"\x3e\n    \x3cdiv class=\"notice-thermometer-start\"\x3e\x3c/div\x3e\n    \x3cdiv class=\"notice-thermometer-fill\"\x3e$6.9M\x3c/div\x3e\n    \x3cdiv class=\"notice-thermometer-transition\"\x3e\x3c/div\x3e\n    \x3cdiv class=\"notice-thermometer-base\"\x3e$7.5M USD\x3c/div\x3e\n    \x3cdiv class=\"notice-thermometer-end\"\x3e\x3c/div\x3e\n    \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n   \x3c/div\x3e\n  \x3c/div\x3e\n  \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n \x3c/a\x3e\n \x3cdiv class=\"notice-button\"\x3e\x3cdiv class=\"notice-button-start\"\x3e\x3c/div\x3e\x3ca href=\"javascript:goToDonationPage()\"\x3eDonate Now\x3c/a\x3e\x3cdiv class=\"notice-button-end\"\x3e\x3c/div\x3e\x3c/div\x3e\n \x3cdiv class=\"notice-toggle\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice();return false\"\x3e\x3cspan\x3eHide\x3c/span\x3e\x3c/a\x3e]\x3c/div\x3e\n \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv class=\"notice-all siteNoticeSmallAnon\"\x3e\n \x3cdiv class=\"notice-toggle\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice()\"\x3e\x3cspan\x3eShow\x3c/span\x3e\x3c/a\x3e]\x3c/div\x3e\n \x3ca class=\"notice-slogan\" href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eWikipedia\x3c/span\x3e\n  \x3cimg src=\"http://upload.wikimedia.org/wikipedia/commons/b/b1/Wikipedia-logo-small_%28Fundraising_2009%29.png\" alt=\"\"\x3e\n  \x3cspan\x3eForever\x3c/span\x3e\n \x3c/a\x3e\n \x3cspan\x3eOur shared knowledge. Our shared treasure.\x3c/span\x3e\n \x3ca href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eHelp us protect it.\x3c/span\x3e\n \x3c/a\x3e\n \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv class=\"notice-all siteNoticeSmallUser\"\x3e\n \x3cdiv class=\"notice-toggle\"\x3e[\x3ca href=\"#\" onclick=\"toggleNotice()\"\x3e\x3cspan\x3eShow\x3c/span\x3e\x3c/a\x3e]\x3c/div\x3e\n \x3ca class=\"notice-slogan\" href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eWikipedia\x3c/span\x3e\n  \x3cimg src=\"http://upload.wikimedia.org/wikipedia/commons/b/b1/Wikipedia-logo-small_%28Fundraising_2009%29.png\" alt=\"\"\x3e\n  \x3cspan\x3eForever\x3c/span\x3e\n \x3c/a\x3e\n \x3cspan\x3eOur shared knowledge. Our shared treasure.\x3c/span\x3e\n \x3ca href=\"javascript:goToDonationPage(\'collapsed\')\"\x3e\n  \x3cspan\x3eHelp us protect it.\x3c/span\x3e\n \x3c/a\x3e\n \x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e\n\x3c/div\x3e\n\x3cdiv style=\"clear:both\"\x3e\x3c/div\x3e"],[15, 15, 15, 40, 15]);
if (wgNotice != '')
wgNotice='<div id="centralNotice" class="' + (wgNoticeToggleState ? 'expanded' : 'collapsed') + ' ' + (wgUserName ? 'usernotice' : 'anonnotice' ) + '">' + wgNotice+'</div>';
