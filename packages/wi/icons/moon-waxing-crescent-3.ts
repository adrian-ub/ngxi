import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiMoonWaxingCrescent3Icon],svg[wi-moon-waxing-crescent-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.01 25.71c2.04 0 3.92-.5 5.65-1.51s3.09-2.37 4.09-4.1s1.51-3.61 1.51-5.65s-.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09s-3.61-1.51-5.65-1.51c1.71 1.26 2.97 2.9 3.78 4.91S20 12.24 20 14.44c0 .9-.03 1.73-.1 2.5s-.21 1.59-.43 2.47s-.51 1.68-.86 2.4s-.83 1.42-1.45 2.12s-1.33 1.28-2.15 1.78"></svg:path>`,
})
export class WiMoonWaxingCrescent3Icon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
