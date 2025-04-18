import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCellularNetworkOfflineIcon],svg[hugeicons-cellular-network-offline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12v8m-.5-12.937q.24-.062.5-.063a2 2 0 0 1 1.937 2.5M2 2l20 20M16.959 6C17.619 6.87 18 7.898 18 9s-.381 2.13-1.041 3M7.04 12C6.381 11.13 6 10.102 6 9c0-.704.156-1.378.44-2m13.876-3C21.38 5.43 22 7.15 22 9s-.62 3.57-1.684 5M3.684 4C2.62 5.43 2 7.15 2 9s.62 3.57 1.684 5" color="currentColor"></svg:path>`,
})
export class HugeiconsCellularNetworkOfflineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
