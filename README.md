#No questions

LT plugin which suppresses most of `Do you want to save..?` dialogs.

Currently does the following:

  * When file was changed - always reload corresponding editor (whether it is dirty or not)
  * When file was deleted - close corresponding editor
  * When closing an editor with no corresponding file (e.g. Instarepl) - just close it.