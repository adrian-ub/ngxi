import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSignalCellularConnectedNoInternet0BarIcon],svg[ic-round-signal-cellular-connected-no-internet-0-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1m0 4c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m-3-2v2H2L22 2v6h-2V6.83L6.83 20z"></svg:path>`,
})
export class IcRoundSignalCellularConnectedNoInternet0BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
