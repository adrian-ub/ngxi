import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatColorHighlightIcon],svg[mdi-format-color-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 17l2.75-2.75l-.03-.02c-.58-.59-.58-1.54 0-2.12l4.74-4.74l4.24 4.24l-4.74 4.74c-.57.58-1.5.58-2.09.02l-.63.63zM15.91 2.91c.59-.58 1.54-.58 2.12 0l2.13 2.12c.58.59.58 1.54 0 2.13l-3.3 3.29l-4.24-4.24z"></svg:path>`,
})
export class MdiFormatColorHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
