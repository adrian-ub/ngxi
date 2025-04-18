import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiMoonWaningGibbous4Icon],svg[wi-moon-waning-gibbous-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.74 14.47c0 1.52.3 2.98.89 4.37s1.39 2.58 2.4 3.59s2.2 1.8 3.59 2.4s2.84.89 4.37.89c2.89-2.39 4.34-6.14 4.34-11.24c0-2.34-.41-4.47-1.22-6.36S16.26 4.6 15 3.25c-2.03 0-3.91.5-5.64 1.51S6.25 7.12 5.24 8.84s-1.5 3.6-1.5 5.63"></svg:path>`,
})
export class WiMoonWaningGibbous4Icon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
