import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiMoonWaningCrescent3Icon],svg[wi-moon-waning-crescent-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.74 14.44c0 2.04.5 3.93 1.51 5.65s2.37 3.1 4.09 4.1s3.61 1.51 5.65 1.51c-2.99-2.33-4.48-6.09-4.48-11.26c0-2.32.42-4.46 1.25-6.4s1.91-3.56 3.23-4.85c-2.04 0-3.92.5-5.65 1.51S6.26 7.07 5.25 8.8s-1.51 3.6-1.51 5.64"></svg:path>`,
})
export class WiMoonWaningCrescent3Icon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
