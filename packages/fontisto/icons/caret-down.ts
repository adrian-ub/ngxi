import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoCaretDownIcon],svg[fontisto-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 6.4l12 12l12-12z"></svg:path>`,
})
export class FontistoCaretDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
