import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laStickyNoteIcon],svg[la-sticky-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h15.406l.313-.281l6-6l.281-.313V5zm2 2h18v12h-6v6H7zm14 14h2.563L21 23.563z"></svg:path>`,
})
export class LaStickyNoteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
