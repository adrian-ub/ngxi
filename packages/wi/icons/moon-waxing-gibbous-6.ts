import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiMoonWaxingGibbous6Icon],svg[wi-moon-waxing-gibbous-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.58 14.43c0 1.03.06 1.97.18 2.83s.32 1.73.62 2.59s.69 1.65 1.16 2.34s1.1 1.35 1.85 1.96s1.63 1.12 2.63 1.55c1.53 0 2.99-.3 4.38-.89s2.58-1.4 3.59-2.4s1.81-2.2 2.4-3.6s.89-2.85.89-4.39c0-2.04-.5-3.93-1.51-5.65s-2.37-3.1-4.1-4.1s-3.61-1.51-5.65-1.51c-1.99 1-3.56 2.51-4.72 4.55s-1.72 4.28-1.72 6.72"></svg:path>`,
})
export class WiMoonWaxingGibbous6Icon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
