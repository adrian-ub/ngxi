import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundFiberSmartRecordIcon],svg[ic-round-fiber-smart-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="12" r="8" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17 5.55v.18c0 .37.23.69.57.85C19.6 7.54 21 9.61 21 12s-1.4 4.46-3.43 5.42c-.34.16-.57.47-.57.84v.18c0 .68.71 1.11 1.32.82C21.08 18.01 23 15.23 23 12s-1.92-6.01-4.68-7.27c-.61-.28-1.32.14-1.32.82"></svg:path>`,
})
export class IcRoundFiberSmartRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
