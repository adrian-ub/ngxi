import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGearupBoosterIcon],svg[arcticons-gearup-booster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.908 18.86L37.125 5.5l.033 35.796l-4.511-23.51zm1.659 8.99L36.54 42.5L5.32 24.499l24.312 6.962zm-8.557-3.134l-16.168-1.28L35.824 5.5L17.877 22.98z"></svg:path>`,
})
export class ArcticonsGearupBoosterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
