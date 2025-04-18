import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinSendIcon],svg[hugeicons-bitcoin-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 4.8h7c1.657 0 3 1.612 3 3.6S10.657 12 9 12m0 0c1.657 0 3 1.612 3 3.6s-1.343 3.6-3 3.6H2M9 12H3m-.167-7.2v14.4M4.5 3v1.8M8.667 3v1.8M4.5 19.2V21m4.167-1.8V21M22 12h-7.5m7.5 0c0 .7-1.994 2.008-2.5 2.5M22 12c0-.7-1.994-2.008-2.5-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsBitcoinSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
