import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWifiRouterIcon],svg[streamline-wifi-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.5v-2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1m2.5 1v1m0-3h.5m2 0H6M1 3l1.5 5.5M13 3l-1.5 5.5M3.55 2c1.9-1.9 5-1.9 6.9 0M5.355 3.533c.859-.859 2.33-.859 3.19 0M11 12.5v1M6.95 5.872a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path>`,
})
export class StreamlineWifiRouterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
