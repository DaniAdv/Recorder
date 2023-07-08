/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
module.exports = {
	appId: 'com.dani.recorder',
	productName: 'Recorder',
	asar: true,
	copyright: 'Copyright © 2022 ${author}',
	directories: { buildResources: 'build', output: 'release/${version}' },
	files: ['dist'],
	win: { target: [{ arch: ['x64'], target: 'nsis' }] },
	nsis: {
		allowToChangeInstallationDirectory: true,
		artifactName: '${productName}-Setup.${ext}',
		createDesktopShortcut: true,
		createStartMenuShortcut: true,
		deleteAppDataOnUninstall: false,
		oneClick: false,
		perMachine: false,
		runAfterFinish: true,
		uninstallDisplayName: '${productName}',
	},
	mac: {
		category: 'public.app-category.utilities',
		electronLanguages: ['en'],
		extendInfo: {
			'Bundle name': '${productName}',
			'com.apple.application-identifier': 'qdani.github.io',
			'com.apple.developer.team-identifier': 'qdani',
			ElectronTeamID: 'qdani',
			LSHasLocalizedDisplayName: true,
		},
		identity: 'Dani Individual Co.',
		target: ['dmg'],
	},
	dmg: {
		artifactName: '${productName}-Installer.${ext}',
		sign: false,
		title: '${productName} ${version}',
	},
	linux: { category: 'Utility', target: ['AppImage'] },
	appImage: { artifactName: '${productName}-Installer.${ext}' },
}
