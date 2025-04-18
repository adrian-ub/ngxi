import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiMoonWaningGibbous6Icon],svg[wi-moon-waning-gibbous-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.74 14.46c0 2.04.5 3.92 1.51 5.65s2.37 3.09 4.09 4.09s3.61 1.51 5.65 1.51c1.44-3.08 2.15-6.83 2.15-11.25c0-3.46-.72-7.2-2.15-11.24c-1.52 0-2.98.3-4.37.89S8.03 5.5 7.03 6.5s-1.8 2.2-2.4 3.59s-.89 2.84-.89 4.37"></svg:path>`,
})
export class WiMoonWaningGibbous6Icon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
