}),(function widget(exports, compile) {

    var _this = this;
    var DEBUG = true;
    var DIRNAME = '_supersicht';
    var WIDGETS_DIR;
    var DEFAULT_WIDGET;
    var util;
    var fs;
    var path;
    var supersicht = {
        command: 'echo',
        refreshFrequency: false,
        style: 'display:none',
        render: function render() {
            var _this = this;
            return '<pre>' + (_this.logs || '') +'</pre>';
        },
        afterRender: function afterRender(element){
            var _this = this;
            if (_this.logs) {
                return;
            }
            var parent = element.parentNode;
            parent.parentNode.removeChild(parent);
        },
        log: function log() {
            var _this = this;
            if (!_this.logs) {
                _this.logs = '';
            }
            _this.logs += [].slice.call(arguments).map(function (a) {
                return typeof a === 'string' ? a : util.inspect(a);
            }).join(' ') + '\n';
        }
    };

    try {

        util = require('util');
        fs = require('fs');
        path = require('path');

        WIDGETS_DIR = path.resolve(path.dirname(filePath), '../');
        DEFAULT_WIDGET = readFile(DIRNAME +'/lib/default-widget');

    } catch (e) {

        if (DEBUG) {
            supersicht.log(e.stack);
        }

    }

    function _resolveWidgetPath(filepath) {
        return path.resolve(WIDGETS_DIR, filepath);
    }

    function defaultWidget(){
        return compile(DEFAULT_WIDGET);
    }

    function runInNode (func) {
        return typeof func === 'function' && func();
    }

    function readFile(filepath, options) {
        var realpath = _resolveWidgetPath(filepath);
        return fs.readFileSync(realpath, options);
    }

    function requireFile(filepath) {
        var fileresults = require(_resolveWidgetPath(filepath));
        return fileresults;
    }

    function loadFromConfig(filepath) {
        var widget = readFile(filepath) || DEFAULT_WIDGET;
        widget = compile(widget);
        return widget;
    }

    exports.defaultWidget = defaultWidget;
    exports.runInNode = runInNode;
    exports.readFile = readFile;
    exports.require = requireFile;
    exports.loadFromConfig = loadFromConfig;

    return supersicht;

}(supersicht=widget=this,function(_){try{return JSON.parse(_)}catch(e){try{return eval('('+_+')')}catch(e){}}}))
//