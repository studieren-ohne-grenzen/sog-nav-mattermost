import React from 'react';

import {makeStyleFromTheme} from 'mattermost-redux/utils/theme_utils';

export default class Icon extends React.PureComponent {
    render() {
        const style = getStyle();
        return (
            <span
                style={style.iconStyle}
                aria-hidden='true'
                dangerouslySetInnerHTML={{__html: this.props.svg}}
            />
        );
    }
}

const getStyle = makeStyleFromTheme(() => {
    return {
        iconStyle: {
            position: 'relative',
            top: '2px',
            width: '30px',
        },
    };
});