import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonContrastIcon],svg[carbon-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.37 11.84a13.6 13.6 0 0 0-1.06-2.51A14.2 14.2 0 0 0 25.9 6.1a14 14 0 1 0 0 19.8a14.2 14.2 0 0 0 2.41-3.23a13.6 13.6 0 0 0 1.06-2.51a14 14 0 0 0 0-8.32M4 16A12 12 0 0 1 16 4v24A12 12 0 0 1 4 16"></svg:path>`,
})
export class CarbonContrastIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
