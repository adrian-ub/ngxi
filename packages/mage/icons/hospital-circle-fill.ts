import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHospitalCircleFillIcon],svg[mage-hospital-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m5.51 11.31a1.28 1.28 0 0 1-1.28 1.28h-1.89v1.9a1.3 1.3 0 0 1-1.28 1.28h-2.12a1.27 1.27 0 0 1-.9-.38a1.3 1.3 0 0 1-.38-.9v-1.9H7.77a1.27 1.27 0 0 1-.91-.37a1.3 1.3 0 0 1-.37-.91v-2.11a1.3 1.3 0 0 1 .37-.91a1.27 1.27 0 0 1 .91-.37h1.89v-1.9a1.32 1.32 0 0 1 .37-.9a1.27 1.27 0 0 1 .91-.38H13a1.26 1.26 0 0 1 .9.37c.24.242.377.569.38.91v1.9h1.89c.34 0 .667.132.91.37c.239.243.372.57.37.91z"></svg:path><svg:path fill="currentColor" d="M16 11.165v1.67h-2.42a.75.75 0 0 0-.75.75v2.43h-1.68v-2.43a.76.76 0 0 0-.75-.75H8v-1.67h2.42a.76.76 0 0 0 .75-.75v-2.43h1.68v2.43a.75.75 0 0 0 .75.75z"></svg:path>`,
})
export class MageHospitalCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
