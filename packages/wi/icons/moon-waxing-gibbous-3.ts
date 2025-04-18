import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiMoonWaxingGibbous3Icon],svg[wi-moon-waxing-gibbous-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.8 14.43c0 2.39.24 4.52.71 6.39s1.31 3.5 2.51 4.89c1.52 0 2.98-.3 4.37-.89s2.59-1.4 3.6-2.4s1.81-2.2 2.4-3.6s.89-2.85.89-4.39s-.3-2.99-.89-4.38s-1.4-2.58-2.4-3.59s-2.2-1.81-3.6-2.4s-2.85-.89-4.37-.89C14 4.63 13.21 6.33 12.65 8.3s-.85 4-.85 6.13"></svg:path>`,
})
export class WiMoonWaxingGibbous3Icon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
