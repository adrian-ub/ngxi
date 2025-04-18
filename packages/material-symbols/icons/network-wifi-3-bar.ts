import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNetworkWifi3BarIcon],svg[material-symbols-network-wifi-3-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21L0 9q2.4-2.45 5.5-3.725T12 4q3.425 0 6.525 1.275T24 9zm-6.2-9.05q1.325-.95 2.9-1.487t3.3-.538t3.3.538t2.9 1.487l2.9-2.9q-1.95-1.475-4.262-2.262T12 6t-4.837.788T2.9 9.05z"></svg:path>`,
})
export class MaterialSymbolsNetworkWifi3BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
