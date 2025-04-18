import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentNotePadContentNotesBookNotepadNotebookIcon],svg[streamline-interface-content-note-pad-content-notes-book-notepad-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 3.5v-3m3 3v-3m3 3v-3"></svg:path><svg:rect width="13" height="11.5" x=".5" y="2" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceContentNotePadContentNotesBookNotepadNotebookIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
