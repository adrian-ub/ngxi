import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonArrowShiftDownIcon],svg[carbon-arrow-shift-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6v10h5a1 1 0 0 1 .707 1.707l-12 12a1 1 0 0 1-1.414 0l-12-12A1 1 0 0 1 4 16h5V6a2 2 0 0 1 2-2h10a2.003 2.003 0 0 1 2 2m-7 21.586L25.586 18H21V6H11v12H6.414Z"></svg:path>`,
})
export class CarbonArrowShiftDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
