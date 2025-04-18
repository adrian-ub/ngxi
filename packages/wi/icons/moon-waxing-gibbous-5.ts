import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiMoonWaxingGibbous5Icon],svg[wi-moon-waxing-gibbous-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.65 14.43c0 1.24.08 2.38.25 3.41s.44 2.05.83 3.04s.95 1.89 1.67 2.71s1.6 1.52 2.62 2.12c1.52 0 2.98-.3 4.37-.89s2.59-1.4 3.6-2.4s1.81-2.2 2.4-3.6s.89-2.85.89-4.39s-.3-2.99-.89-4.38s-1.4-2.58-2.4-3.59s-2.2-1.81-3.6-2.4s-2.85-.89-4.37-.89c-1.67 1.14-2.98 2.72-3.94 4.74s-1.43 4.18-1.43 6.52"></svg:path>`,
})
export class WiMoonWaxingGibbous5Icon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
