import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconNoteIcon],svg[codicon-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2h13l.5.5v10l-.5.5h-13l-.5-.5v-10zM2 3v9h12V3zm2 2h8v1H4zm6 2H4v1h6zM4 9h4v1H4z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconNoteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
