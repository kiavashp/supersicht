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

- parse html for `(src|href)="widget:/static/path"`
	- replaces with `$1="http://localhost:[port]/[widget_dir]/static/path"`
	- needs widget dirname
	- can only do when loaded through `supersicht`

