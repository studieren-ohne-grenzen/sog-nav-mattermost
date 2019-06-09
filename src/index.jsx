import "resources/nav/index.js"

// https://stackoverflow.com/questions/1409225/changing-a-css-rule-set-from-javascript
function getCSSRule(ruleName) {
    ruleName = ruleName.toLowerCase();
    var result = null;
    var find = Array.prototype.find;

    find.call(document.styleSheets, styleSheet => {
        result = find.call(styleSheet.cssRules, cssRule => {
            return cssRule instanceof CSSStyleRule 
                && cssRule.selectorText.toLowerCase() == ruleName;
        });
        return result != null;
    });
    return result;
}

class SOGNavPlugin {
    initialize(registry, store) {
        getCSSRule(".SOGNav__MenuItem").style.margin = "8px";
    }
}

window.registerPlugin('org.studieren-ohne-grenzen.sog-nav-mattermost', new SOGNavPlugin());