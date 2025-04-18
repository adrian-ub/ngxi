import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCaretDownIcon],svg[carbon-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 12l-8 10l-8-10z"></svg:path>`,
})
export class CarbonCaretDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
