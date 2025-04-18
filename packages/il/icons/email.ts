import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilEmailIcon],svg[il-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M695 1q20 0 33 13t13 33v464q0 19-13 32t-33 14H46q-19 0-32-14T0 511V47q0-19 14-33T46 1zm-53 97q2-1 2-3t-3-1H101q-2 0-3 1t1 3l259 172q13 10 25 0z"></svg:path>`,
})
export class IlEmailIcon {
  readonly viewBox = input("0 0 750 750")
  readonly width = input("1em")
  readonly height = input("1em")
}
