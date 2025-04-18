import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNetworkCellInfoAndWifiIcon],svg[arcticons-network-cell-info-and-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.797 8.796c-8.396 8.397-8.396 22.01 0 30.407M39.203 8.796a21.5 21.5 0 0 1 0 30.408M33.27 14.73a13.11 13.11 0 0 1 0 18.54M14.73 14.73c-5.12 5.12-5.12 13.42 0 18.54M28.72 24A4.72 4.72 0 0 1 24 28.718h0a4.72 4.72 0 0 1-4.72-4.72h0a4.72 4.72 0 0 1 9.44 0"></svg:path>`,
})
export class ArcticonsNetworkCellInfoAndWifiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
