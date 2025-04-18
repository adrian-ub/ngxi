import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineSignalCellularConnectedNoInternet4BarIcon],svg[ic-baseline-signal-cellular-connected-no-internet-4-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18h2v-8h-2zm0 4h2v-2h-2zM2 22h16V8h4V2z"></svg:path>`,
})
export class IcBaselineSignalCellularConnectedNoInternet4BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
