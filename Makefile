build:
	./node_modules/.bin/webpack --mode=production
	mkdir -p org.studieren-ohne-grenzen.sog-nav-mattermost
	cp -r dist/main.js org.studieren-ohne-grenzen.sog-nav-mattermost/
	cp plugin.json org.studieren-ohne-grenzen.sog-nav-mattermost/
	tar -czvf sog-nav.tar.gz org.studieren-ohne-grenzen.sog-nav-mattermost