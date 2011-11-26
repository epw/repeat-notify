all:

FILES = countdown.html countdown.js glass.ogg drip.ogg index.html notify.ogg \
	startnotify.js

publish:
	scp $(FILES) "paceworg@hm.pacew.org:public_html/hm/notify/."
	@echo http://hm.pacew.org/notify/
