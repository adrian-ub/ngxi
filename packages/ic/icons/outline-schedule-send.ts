import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineScheduleSendIcon],svg[ic-outline-schedule-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85z"></svg:path><svg:path fill="currentColor" d="m11 12l-6-1.5V7.01l8.87 3.74c.94-.47 2-.75 3.13-.75c.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5z"></svg:path>`,
})
export class IcOutlineScheduleSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
