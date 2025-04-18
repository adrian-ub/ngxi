import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinIcon],svg[hugeicons-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 4h8.4C16.388 4 18 5.79 18 8s-1.612 4-3.6 4m0 0c1.988 0 3.6 1.79 3.6 4s-1.612 4-3.6 4H6m8.4-8H7.2M7 4v16M9 2v2m5-2v2M9 20v2m5-2v2" color="currentColor"></svg:path>`,
})
export class HugeiconsBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
