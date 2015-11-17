- support `widgets/*/widget.json`
```
{
	name: 'widget_name',
	main: 'path/to/file',
	autoload: true
}
```

- `supersicht.staticFileServer(filepath)`
	- returns host
```
}), {
	command: '...',
	host: supersicht.staticFileServer('file/path'),
	render: function (output) {
		var html = '';
		var host = this.host;
		html += '<script src="' + host + '/js/main"></script>';
		html += '<link rel="stylesheet" href="' + host + '/css/main"/>';
		return html;
	}
}//
```

- auto insert host for static file links in html
	- replace `supersicht-(src|href)="/static/path"` with `$1="[host]/[widget_dir]/static/path"`
		- can be run on DOM after `afterRender()` and `update` methods
	- replace `(src|href)="widget:/static/path"` with `$1="[host]/[widget_dir]/static/path"`
		- implemented in render wrapper with string parsing
	- needs widget dirname
	- can only do when loaded through `supersicht`

