import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsSpellcheckIcon],svg[lineicons-spellcheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.25 4.5a.75.75 0 0 1 .686.445l6 13.5a.75.75 0 1 1-1.371.61l-1.728-3.888H5.663l-1.727 3.887a.75.75 0 0 1-1.371-.609l6-13.5A.75.75 0 0 1 9.25 4.5m0 2.597l-2.92 6.57h5.84zM22.28 5.78a.75.75 0 1 0-1.06-1.06L17.738 8.2l-1.41-1.411a.75.75 0 1 0-1.061 1.06l1.941 1.942a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class LineiconsSpellcheckIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
