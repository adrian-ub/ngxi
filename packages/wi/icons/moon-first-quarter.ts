import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiMoonFirstQuarterIcon],svg[wi-moon-first-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.01 25.71c2.04 0 3.92-.5 5.65-1.51s3.09-2.37 4.09-4.1s1.51-3.61 1.51-5.65s-.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09s-3.61-1.51-5.65-1.51z"></svg:path>`,
})
export class WiMoonFirstQuarterIcon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
