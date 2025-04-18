import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSignalWifi1BarIcon],svg[ic-twotone-signal-wifi-1-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49l.01.01z"></svg:path><svg:path fill="currentColor" d="M6.67 14.86L12 21.49v.01l.01-.01l5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86"></svg:path>`,
})
export class IcTwotoneSignalWifi1BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
