import "resources/nav/index.js"

class SOGNavPlugin {
    initialize(registry, store) {
        let elements = document.getElementsByClassName("SOGNav__MenuItem");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.margin = "8px";
        }
    }
}

window.registerPlugin('org.studieren-ohne-grenzen.sog-nav-mattermost', new SOGNavPlugin());