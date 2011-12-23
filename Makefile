USERNAME = 
HOSTNAME =
HTML_DIR =

all:

FILES = countdown.html countdown.js glass.ogg drip.ogg index.html notify.ogg \
	startnotify.js

publish:
	scp $(FILES) "$(USERNAME)@$(HOSTNAME):$(HTML_DIR)/notify/."
	@echo http://$(HOSTNAME)/notify/
