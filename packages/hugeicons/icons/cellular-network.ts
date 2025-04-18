import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCellularNetworkIcon],svg[hugeicons-cellular-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11v9m2-11a2 2 0 1 1-4 0a2 2 0 0 1 4 0m2.959-3C17.619 6.87 18 7.898 18 9s-.381 2.13-1.041 3M7.04 6C6.381 6.87 6 7.898 6 9s.381 2.13 1.041 3m13.275-8C21.38 5.43 22 7.15 22 9s-.62 3.57-1.684 5M3.684 4C2.62 5.43 2 7.15 2 9s.62 3.57 1.684 5" color="currentColor"></svg:path>`,
})
export class HugeiconsCellularNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
