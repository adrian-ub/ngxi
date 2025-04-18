import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineSignalWifi3BarIcon],svg[ic-baseline-signal-wifi-3-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49l.01.01z"></svg:path><svg:path fill="currentColor" d="m3.53 10.95l8.46 10.54l.01.01l.01-.01l8.46-10.54C20.04 10.62 16.81 8 12 8s-8.04 2.62-8.47 2.95"></svg:path>`,
})
export class IcBaselineSignalWifi3BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
