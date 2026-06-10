if (window.rcmail) {
    rcmail.addEventListener('init', function () {
        var hover_record = null;

        rcmail.addEventListener('skin-message-list-hover-menu-init', function (p) {
            var btn = $('<a class="button archive" title="'
                + rcmail.gettext('archive.buttontitle') + '"></a>');

            btn.click(function (e) {
                if (hover_record) {
                    rcmail.message_list.select(hover_record.uid);
                    rcmail.command('plugin.archive');
                }
            });

            p.menu.find('a.delete').before(btn);
        });

        rcmail.addEventListener('skin-message-list-hover-menu', function (p) {
            hover_record = p.record;

            var in_archive = rcmail.env.mailbox == rcmail.env.archive_folder
                || rcmail.env.mailbox.startsWith(rcmail.env.archive_folder + rcmail.env.delimiter);

            p.menu.find('a.archive')[in_archive ? 'addClass' : 'removeClass']('d-none');
        });
    });
}
