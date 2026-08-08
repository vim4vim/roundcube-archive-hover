if (window.rcmail) {
    rcmail.addEventListener('init', function () {
        var hover_record = null;

        rcmail.addEventListener('skin-message-list-hover-menu-init', function (p) {
            var btn = $('<a class="button archive" title="'
                + rcmail.gettext('archive.buttontitle') + ' (A)"></a>');

            btn.click(function (e) {
                if (hover_record) {
                    rcmail.message_list.select(hover_record.uid);
                    rcmail.command('plugin.archive');
                }
            });

            p.menu.find('a.delete').before(btn);
        });

        // name the shortcut in the archive plugin's toolbar button too
        $.each(rcmail.buttons['plugin.archive'] || [], function (i, button) {
            var el = $('#' + button.id),
                title = el.attr('title');

            if (title && title.indexOf('(A)') < 0) {
                el.attr('title', title + ' (A)');
            }
        });

        function archive_keydown(e) {
            if (rcube_event.get_keycode(e) != 65
                || e.ctrlKey || e.altKey || e.metaKey || e.shiftKey
                || $(e.target).is('input,textarea,select,[contenteditable]')
            ) {
                return;
            }

            rcmail.command('plugin.archive');
            e.preventDefault();
        }

        $(document).on('keydown', archive_keydown);

        // the preview pane is a separate document, re-bind on every message load
        var contentframe = rcmail.get_frame_element(rcmail.env.contentframe);
        if (contentframe) {
            $(contentframe).on('load', function () {
                $(this.contentDocument).on('keydown', archive_keydown);
            });
        }

        rcmail.addEventListener('skin-message-list-hover-menu', function (p) {
            hover_record = p.record;

            var in_archive = rcmail.env.mailbox == rcmail.env.archive_folder
                || rcmail.env.mailbox.startsWith(rcmail.env.archive_folder + rcmail.env.delimiter);

            p.menu.find('a.archive')[in_archive ? 'addClass' : 'removeClass']('d-none');
        });
    });
}
