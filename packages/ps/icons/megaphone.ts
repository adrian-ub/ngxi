import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psMegaphoneIcon],svg[ps-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 127V44q0-22-17-34q-15-14-38-7L30 118q-13 5-21.5 16.5T0 159v75q0 14 9 25.5T32 274l32 9v74q0 28 18.5 46t45.5 18h41q32 0 53-27l47-60l149 36q2 0 5.5 1t5.5 1q17 0 25-8q17-14 17-34v-84q19-6 31-22.5t12-36.5q0-21-12.5-37.5T469 127M43 159l42-13v98l-42-10zm145 211q-11 9-19 9h-41q-21 0-21-22v-64l115 30zm239-34l-318-85h19V133l299-87z"></svg:path>`,
})
export class PsMegaphoneIcon {
  readonly viewBox = input("0 0 520 464")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
