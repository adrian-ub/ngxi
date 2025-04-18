import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSubtractAltIcon],svg[carbon-subtract-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16S9.4 4 16 4m0-2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2"></svg:path><svg:path fill="currentColor" d="M8 15h16v2H8z"></svg:path>`,
})
export class CarbonSubtractAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
