<?php

/**
 * Archive Hover
 *
 * Adds an archive button to the message list hover quick-action menu.
 * Requires the built-in archive plugin to be active.
 */
class archive_hover extends rcube_plugin
{
    public $task = 'mail';

    #[\Override]
    public function init()
    {
        $rcmail = rcmail::get_instance();

        if (($rcmail->action == '' || $rcmail->action == 'show')
            && $rcmail->config->get('archive_mbox')
        ) {
            $this->include_script('archive_hover.js');
        }
    }
}
