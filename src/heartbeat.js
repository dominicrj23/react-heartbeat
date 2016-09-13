import React, { Component, PropTypes} from 'react';

import './heartbeat.scss';
const animateClass = function (node, className) {
    node.classList.remove(className);
    node.offsetWidth;
    node.classList.add(className);
    return node;
}
export class HeartBeat extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (
            <div id='heart' className='pulsate' ref={(e)=>{
                setInterval(()=>{
                    animateClass(e, 'pulsate');
                }, 5000);
            }}>
                &hearts;
            </div>
        );
    }
}
HeartBeat.propTypes = {
    io: PropTypes.object
};
