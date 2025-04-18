import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNetworkWifi3BarIcon],svg[material-symbols-light-network-wifi-3-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.577L1.423 9q2.15-1.93 4.837-2.966Q8.946 5 12 5q3.06 0 5.746 1.035T22.577 9zM5.8 11.95q1.325-.95 2.9-1.487t3.3-.538t3.3.538t2.9 1.487l2.9-2.9q-1.95-1.475-4.262-2.262T12 6t-4.837.788T2.9 9.05z"></svg:path>`,
})
export class MaterialSymbolsLightNetworkWifi3BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
