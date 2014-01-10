#No questions

LT plugin which suppresses most of `Do you want to save..?` dialogs.

Currently does the following:

  * When file was changed - always reload corresponding editor (whether it is dirty or not)
  * When file was deleted - close the corresponding editor.

I personally also removed `:lt.objs.editor.file/dirty-on-change` from all transient editors
in my `user.behaviors`

```
{:- {:editor.transient [:lt.objs.editor.file/dirty-on-change]
```

This allows to close editors not backed by file (e.g. Instarepl, New File) instantly without questions.

##Installation

Available in the central plugin repository.
You might need to run `Refresh plugin list`, `Reload app behaviors`
commands after installation.