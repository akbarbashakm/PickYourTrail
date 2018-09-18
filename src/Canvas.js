

import React, { Component } from 'react';

class Canvas extends Component {
    constructor() {
        super();
        this.action = 'Forward';
        this.currentValue = 0;
        this.currentStyle = 'left';
        this.requstAnimationFrame = null;
        this.margin = 5;
        this.state = {
            'left': '0%',
            'top': '0%',
            'enable': true
        };
    }

    requstAnimationFrame = func => {
        return setTimeout(func, 5)
    }

    cancelAnimationFrame = (requestId, disable) => {
        this.setState({ 'enable': disable });
        clearTimeout(requestId);
    }

    updateValue = () => {
        if (this.action === 'forward') {
            this.currentValue += 0.5
            if (this.currentValue > 80 - this.margin) {
                this.cancelAnimationFrame(this.requestframeref, true);
                return null;
            }
        }
        else {
            this.currentValue -= 0.5
            if (this.currentValue < 0) {
                this.cancelAnimationFrame(this.requestframeref, true);
                return null;
            }
        }
        this.setStateValue(this.currentValue);
        this.requestframeref = requestAnimationFrame(this.updateValue.bind(this))
    }

    setStateValue = currentValue => {
        if (this.currentStyle === 'left') {
            this.setState({ 'left': currentValue + '%' });
        } else {
            this.setState({ 'top': currentValue + '%' });
        }
    }

    forward = () => {
        this.cancelAnimationFrame(this.requestframeref, false);
        const leftValue = +this.state.left.split('%')[0];
        const topValue = +this.state.top.split('%')[0];
        const maxValue = 80 - this.margin;
        this.action = 'forward';
        if (leftValue === 0 && topValue === 0) {
            this.currentStyle = 'left';
        } else if (leftValue === maxValue && topValue === 0) {
            this.currentStyle = 'top';
        } else if (leftValue === maxValue && topValue === maxValue) {
            this.currentStyle = 'left';
            this.action = 'backward';
        } else {
            this.currentStyle = 'top';
            this.action = 'backward';
        }
        this.currentValue = this.action === 'forward' ? 0 : maxValue;
        requestAnimationFrame(this.updateValue.bind(this));
    }

    backward = () => {
        this.cancelAnimationFrame(this.requestframeref, false);
        const leftValue = +this.state.left.split('%')[0];
        const topValue = +this.state.top.split('%')[0];
        const maxValue = 80 - this.margin;
        this.action = 'forward';
        if (leftValue === 0 && topValue === 0) {
            this.currentStyle = 'top';
        } else if (leftValue === maxValue && topValue === 0) {
            this.currentStyle = 'left';
            this.action = 'backward';
        } else if (leftValue === maxValue && topValue === maxValue) {
            this.currentStyle = 'top';
            this.action = 'backward';
        } else {
            this.currentStyle = 'left';
        }
        this.currentValue = this.action === 'forward' ? 0 : maxValue;
        requestAnimationFrame(this.updateValue.bind(this));
    }

    render() {

        return (
            <div>
                <h2 style={{ align: 'center' }}>Moving Element</h2>
                <div style={{ margin: '5%' }}>
                    <div style={{ padding: '10px', display: 'inline-block' }}>
                        <div id='container'>
                            <div id='canvas' style={{ margin: this.margin + 'px', left: this.state.left, top: this.state.top, width: '20%', height: '20%', background: 'black' }}></div>
                        </div>
                        <div id='button'>
                            <input type="button" className="btn btn-success" value="Forward" onClick={this.forward.bind(this)} disabled={!this.state.enable} style={{ margin: '10px' }} />
                            &nbsp;<br />
                            <input type="button" className="btn btn-danger" value="Backward" onClick={this.backward} disabled={!this.state.enable} style={{ margin: '10px' }} />
                        </div>
                    </div>
                    <p style={{ margin: '5px', visibility: !this.state.enable ? 'visible' : 'hidden' }}>Please wait to complete the animation</p>
                </div>
            </div>
        );
    }
}

export default Canvas;