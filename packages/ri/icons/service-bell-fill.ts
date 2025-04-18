import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riServiceBellFillIcon],svg[ri-service-bell-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v2h-2v1.05c5.053.501 9 4.765 9 9.95H2c0-5.185 3.947-9.449 9-9.95V5H9V3zm8 17v-2H1v2z"></svg:path>`,
})
export class RiServiceBellFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
