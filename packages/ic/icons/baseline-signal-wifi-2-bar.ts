import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineSignalWifi2BarIcon],svg[ic-baseline-signal-wifi-2-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49l.01.01z"></svg:path><svg:path fill="currentColor" d="m4.79 12.52l7.2 8.98H12l.01-.01l7.2-8.98C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52"></svg:path>`,
})
export class IcBaselineSignalWifi2BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
