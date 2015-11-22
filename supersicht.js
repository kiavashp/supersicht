}),(function widget(exports, compile) {

    var _this = this;
    var DEBUG = true;
    var DIRNAME = '_supersicht';
    var WIDGETS_DIR;
    var DEFAULT_WIDGET;
    var fs;
    var path;
    var widget = {
        command: 'echo',
        refreshFrequency: false,
        style: 'display:none',
        render: function () {
            var _this;
            return _this.error || '';
        },
        afterRender: function (element){
            var parent = element.parentNode;
            parent.parentNode.removeChild(parent);
        }
    };

    try {

        fs = require('fs');
        path = require('path');

        WIDGETS_DIR = path.resolve(path.dirname(filePath), '../');
        DEFAULT_WIDGET = readFile(DIRNAME +'/lib/default-widget');

    } catch (e) {

        if (DEBUG) {
            widget.error = e.stack;
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

    return widget;

}(supersicht=widget=this,function(_){try{return JSON.parse(_)}catch(e){try{return eval('('+_+')')}catch(e){}}}))
//