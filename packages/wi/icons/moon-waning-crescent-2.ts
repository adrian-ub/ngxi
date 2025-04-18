import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiMoonWaningCrescent2Icon],svg[wi-moon-waning-crescent-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.74 14.44c0 2.04.5 3.93 1.51 5.65s2.37 3.1 4.1 4.1S12.96 25.7 15 25.7c-2.01-2.74-3.02-6.5-3.02-11.26c0-3.98 1.01-7.73 3.02-11.25c-2.04 0-3.93.5-5.65 1.51s-3.1 2.37-4.1 4.09s-1.51 3.61-1.51 5.65"></svg:path>`,
})
export class WiMoonWaningCrescent2Icon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
