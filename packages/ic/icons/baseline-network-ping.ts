import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineNetworkPingIcon],svg[ic-baseline-network-ping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14.67L3.41 6.09L2 7.5l8.5 8.5H4v2h16v-2h-6.5l5.15-5.15A2.5 2.5 0 1 0 19.5 6A2.5 2.5 0 0 0 17 8.5c0 .35.07.67.2.97z"></svg:path>`,
})
export class IcBaselineNetworkPingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
