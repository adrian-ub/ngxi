import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCashbackBitcoinIcon],svg[hugeicons-cashback-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2C7.9 2 4.375 4.468 2.832 8M2 4.5l.5 4l4-1"></svg:path><svg:path d="M10.5 12h3.75a1.75 1.75 0 1 1 0 3.5H10.5m0-3.5v3.5m0-3.5h3.25a1.75 1.75 0 1 0 0-3.5H10.5m0 3.5V8.5m0 7H9m1.5 0V17m0-8.5H9m1.5 0V7m3 1.5V7m0 8.5V17"></svg:path></svg:g>`,
})
export class HugeiconsCashbackBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
