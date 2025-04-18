import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miCaretDownIcon],svg[mi-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 10l-5 6l-5-6z"></svg:path>`,
})
export class MiCaretDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
