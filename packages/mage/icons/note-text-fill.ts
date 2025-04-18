import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageNoteTextFillIcon],svg[mage-note-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.62 7.06a4.9 4.9 0 0 0-1.07-1.58a4.8 4.8 0 0 0-1.6-1.08a5 5 0 0 0-1.14-.32V2.75a.75.75 0 1 0-1.5 0v1.27H8.7V2.75a.75.75 0 1 0-1.5 0v1.33a4.84 4.84 0 0 0-2.73 1.38a4.9 4.9 0 0 0-1.44 3.48v8.1a5 5 0 0 0 .37 1.9a4.8 4.8 0 0 0 1.06 1.6c.454.464.998.832 1.6 1.08c.598.251 1.24.38 1.89.38h8.11a4.93 4.93 0 0 0 4.91-4.92V8.97a4.7 4.7 0 0 0-.35-1.91m-4 9.59H7.45a.75.75 0 1 1 0-1.5h9.1a.75.75 0 1 1 0 1.5zm0-5.07H7.45a.75.75 0 0 1 0-1.5h9.1a.75.75 0 1 1 0 1.5z"></svg:path>`,
})
export class MageNoteTextFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
