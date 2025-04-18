import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineSignalCellularConnectedNoInternet1BarIcon],svg[ic-outline-signal-cellular-connected-no-internet-1-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".3" d="M22 8V2L2 22h16V8z"></svg:path><svg:path fill="currentColor" d="M20 10v8h2v-8zm-8 12V12L2 22zm8 0h2v-2h-2z"></svg:path>`,
})
export class IcOutlineSignalCellularConnectedNoInternet1BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
