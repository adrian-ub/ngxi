import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpScheduleSendIcon],svg[ic-sharp-schedule-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10c.1 0 .19.01.28.01L3 4v6l8 2l-8 2v6l7-2.95V17c0-3.86 3.14-7 7-7"></svg:path><svg:path fill="currentColor" d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85z"></svg:path>`,
})
export class IcSharpScheduleSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
