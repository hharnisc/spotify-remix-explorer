// file: package.js
Npm.depends({
    'spotify': '0.2.0'
});

Package.on_use(function(api) {
    api.add_files('spotify.js', 'server');
});