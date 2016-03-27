System.register(["react", "react-dom", "jquery", "./cbpBGSlideshow", "/src/css/component.css!", "/src/css/default.css!"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var react_1, react_dom_1, jquery_1, Slide;
    var App;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            },
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (Slide_1) {
                Slide = Slide_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            App = (function (_super) {
                __extends(App, _super);
                function App() {
                    _super.apply(this, arguments);
                }
                App.prototype.componentDidMount = function () {
                    console.log("component did mount");
                };
                App.prototype.componentWillMount = function () {
                    console.log("component will mount");
                };
                App.prototype.componentWillReceivedProps = function () {
                    console.log("component will receive props");
                };
                App.prototype.shouldComponentUpdate = function () {
                    console.log("shoud component update");
                };
                App.prototype.componentWillUpdate = function () {
                    console.log("component will update");
                };
                App.prototype.createHeader = function () {
                    return (react_1.default.createElement("header", {className: "clearfix"}, 
                        react_1.default.createElement("span", null, "Blueprint"), 
                        react_1.default.createElement("h1", null, "Background Slideshow"), 
                        react_1.default.createElement("nav", null, 
                            react_1.default.createElement("a", {href: "", className: "icon-arrow-left"}), 
                            react_1.default.createElement("a", {href: "", className: "icon-drop"}))));
                };
                App.prototype.createImageList = function () {
                    return (react_1.default.createElement("ul", {id: "cbp-bislideshow", className: "cbp-bislideshow"}, 
                        react_1.default.createElement("li", null, 
                            react_1.default.createElement("img", {src: "./images/1.jpg", alt: "image01"})
                        ), 
                        react_1.default.createElement("li", null, 
                            react_1.default.createElement("img", {src: "./images/2.jpg", alt: "image02"})
                        ), 
                        react_1.default.createElement("li", null, 
                            react_1.default.createElement("img", {src: "./images/3.jpg", alt: "image03"})
                        ), 
                        react_1.default.createElement("li", null, 
                            react_1.default.createElement("img", {src: "./images/4.jpg", alt: "image04"})
                        ), 
                        react_1.default.createElement("li", null, 
                            react_1.default.createElement("img", {src: "./images/5.jpg", alt: "image05"})
                        ), 
                        react_1.default.createElement("li", null, 
                            react_1.default.createElement("img", {src: "./images/6.jpg", alt: "image06"})
                        )));
                };
                App.prototype.createControl = function () {
                    return (react_1.default.createElement("div", {id: "cbp-bicontrols", className: "cbp-bicontrols"}, 
                        react_1.default.createElement("span", {className: "cbp-biprev"}), 
                        react_1.default.createElement("span", {className: "cbp-bipause"}), 
                        react_1.default.createElement("span", {className: "cbp-binext"})));
                };
                App.prototype.render = function () {
                    return (react_1.default.createElement("div", {className: "container"}, 
                        this.createHeader(), 
                        react_1.default.createElement("div", {className: "main"}, 
                            this.createImageList(), 
                            this.createControl())));
                };
                return App;
            }(react_1.default.Component));
            react_dom_1.default.render(react_1.default.createElement(App, null), jquery_1.default("#react")[0]);
            console.log(Slide.SlideShow().init({}));
        }
    }
});
