# Archive Hover for Roundcube

Adds an archive button to the message list hover quick-action menu in Roundcube's Elastic skin.

![Hover menu with archive button](screenshot.png)

When you hover over a message, an archive icon appears alongside the existing flag and delete buttons. Clicking it archives the message using Roundcube's built-in archive plugin — including subfolder sorting, read-on-archive, and all other archive settings.

The button is automatically hidden when viewing the Archive folder.

## Keyboard shortcut

Pressing **`A`** archives the selected message(s), like in Thunderbird. It works in the message list, in the preview pane and in the full message view, and archives every selected message at once.

Both the hover button and the archive plugin's own toolbar button name the key in their tooltip, so the shortcut is discoverable from the interface.

Nothing happens while a text field has focus (so typing into the search box is unaffected), when no message is selected, or when you are already in the Archive folder or one of its subfolders. `Ctrl`/`Cmd`+`A` still selects all messages.

## Requirements

- Roundcube 1.6+ with the Elastic skin
- The built-in `archive` plugin must be enabled

## Installation

The plugin directory **must** be named `archive_hover` — Roundcube loads `plugins/<name>/<name>.php`, so a directory named after this repository fails with "Failed to load plugin file". Clone it with an explicit target:

```sh
git clone https://github.com/vim4vim/roundcube-archive-hover.git plugins/archive_hover
```

Then add it to your `config/config.inc.php`:

```php
$config['plugins'] = [
    // ...
    'archive',
    'archive_hover',
];
```

Make sure `archive_hover` is listed **after** `archive`.

## License

GPL-3.0-or-later
