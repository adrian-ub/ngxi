import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBackspaceReverseOutlineIcon],svg[mdi-backspace-reverse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15.59L6.41 17L10 13.41L13.59 17L15 15.59L11.41 12L15 8.41L13.59 7L10 10.59L6.41 7L5 8.41L8.59 12zM2 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h15c.69 0 1.23-.36 1.59-.89L24 12l-5.41-8.12C18.23 3.35 17.69 3 17 3zm0 2h15l4.72 7L17 19H2z"></svg:path>`,
})
export class MdiBackspaceReverseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
