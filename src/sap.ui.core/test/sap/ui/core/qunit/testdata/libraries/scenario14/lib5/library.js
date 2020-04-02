sap.ui.define(['sap/ui/core/Core', 'sap/ui/core/library'], function(Core, coreLib) {
	"use strict";
	sap.ui.getCore().initLibrary({
		name: 'testlibs.scenario14.lib5',
		dependencies: [
			'testlibs.scenario14.lib7'
		],
		noLibraryCSS: true
	});
	return testlibs.scenario14.lib5; // eslint-disable-line no-undef
});