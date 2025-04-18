import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSignalCellularConnectedNoInternet2BarIcon],svg[ic-twotone-signal-cellular-connected-no-internet-2-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M22 8V2L2 22h16V8z"></svg:path><svg:path fill="currentColor" d="M14 22V10L2 22zm6-12v8h2v-8zm0 12h2v-2h-2z"></svg:path>`,
})
export class IcTwotoneSignalCellularConnectedNoInternet2BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
