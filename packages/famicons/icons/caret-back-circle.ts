import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsCaretBackCircleIcon],svg[famicons-caret-back-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48S48 141.13 48 256m252-74.14v148.28a16 16 0 0 1-26.23 12.29l-89.09-74.13a16 16 0 0 1 0-24.6l89.09-74.13A16 16 0 0 1 300 181.86"></svg:path>`,
})
export class FamiconsCaretBackCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
