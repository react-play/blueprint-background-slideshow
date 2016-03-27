

/// <reference path="../../typings/browser.d.ts"/>

import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import * as Slide from "./cbpBGSlideshow";

import "/src/css/component.css!";
import "/src/css/default.css!";

class App extends React.Component<any, any> {

    componentDidMount() {
        console.log("component did mount");
    }

    componentWillMount() {
        console.log("component will mount");
    }
    componentWillReceivedProps() {
        console.log("component will receive props");
    }

    shouldComponentUpdate() {
        console.log("shoud component update");
    }

    componentWillUpdate() {
        console.log("component will update");
    }

    createHeader() {
        return (
            <header className="clearfix">
                <span>Blueprint</span>
                <h1>Background Slideshow</h1>
                <nav>
                    <a href="" className="icon-arrow-left"></a>
                    <a href="" className="icon-drop"></a>
                </nav>
            </header>
        );
    }

    createImageList() {
        return (
            <ul id="cbp-bislideshow" className="cbp-bislideshow">
                <li><img src="./images/1.jpg" alt="image01"/></li>
                <li><img src="./images/2.jpg" alt="image02"/></li>
                <li><img src="./images/3.jpg" alt="image03"/></li>
                <li><img src="./images/4.jpg" alt="image04"/></li>
                <li><img src="./images/5.jpg" alt="image05"/></li>
                <li><img src="./images/6.jpg" alt="image06"/></li>
            </ul>
        );
    }

    createControl() {
        return (
            <div id="cbp-bicontrols" className="cbp-bicontrols">
                <span className="cbp-biprev"></span>
                <span className="cbp-bipause"></span>
                <span className="cbp-binext"></span>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                {this.createHeader()}
                <div className="main">
                    {this.createImageList()}
                    {this.createControl()}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, $("#react")[0]);

console.log(Slide.SlideShow().init({}));
