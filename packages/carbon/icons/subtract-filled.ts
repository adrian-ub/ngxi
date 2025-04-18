import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSubtractFilledIcon],svg[carbon-subtract-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2C8.4 2 2 8.4 2 16s6.4 14 14 14s14-6.4 14-14S23.6 2 16 2m8 15H8v-2h16z"></svg:path><svg:path fill="none" d="M24 17H8v-2h16z"></svg:path>`,
})
export class CarbonSubtractFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
