/*
 * Модуль, загружающий все классы событий - Events.
 */
module.exports = {
    AppEvents: require('./app.js'),
    CreditsEvents: require('./credits'),
    ImageUploaderEvents: require('./image-uploader.js'),
    PostEvents: require('./post.js'),
    SiteEvents: require('./site.js'),
    TagEvents: require('./tag.js'),
    TagsEvents: require('./tags.js'),
    DeployEvents: require('./deploy.js'),
    SyncEvents: require('./sync.js'),
    MenuEvents: require('./menu.js'),
    PreviewEvents: require('./preview.js'),
    NotificationsEvents: require('./notifications.js'),
    ThemeUpdatesEvents: require('./theme-updates.js'),
    BackupEvents: require('./backup.js'),
    AuthorEvents: require('./author.js'),
    AuthorsEvents: require('./authors.js'),
    ImportEvents: require('./import.js'),
    FileManagerEvents: require('./file-manager.js')
};
