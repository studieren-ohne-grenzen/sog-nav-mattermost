import React from 'react';

import Icon from './components/icons.jsx';

import {Svgs} from 'resources';

class SOGNavPlugin {
    initialize(registry, store) {
        registry.registerChannelHeaderButtonAction(
            <Icon svg={Svgs.DASHBOARD} />,
            () => {
                alert("Dasboard!");
            },
            "Dashboard",
        );
        registry.registerChannelHeaderButtonAction(
            <Icon svg={Svgs.MAIL} />,
            () => {
                alert("Mail!");
            },
            "Mail",
        );
        registry.registerChannelHeaderButtonAction(
            <Icon svg={Svgs.CRM} />,
            () => {
                alert("CRM!");
            },
            "CRM",
        );
        registry.registerChannelHeaderButtonAction(
            <Icon svg={Svgs.WIKI} />,
            () => {
                alert("Wiki!");
            },
            "Wiki",
        );
    }
}

window.registerPlugin('org.studieren-ohne-grenzen.sog-nav-mattermost', new SOGNavPlugin());