import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsBlockOutlineIcon],svg[bitcoin-icons-block-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M20.54 8.676v6.876a.69.69 0 0 1-.355.644l-7.132 4.024a2.1 2.1 0 0 1-2.056.002L3.82 16.197a.69.69 0 0 1-.355-.66V8.694a.69.69 0 0 1 .345-.654l7.156-4.172a2.1 2.1 0 0 1 2.117.002l7.112 4.17a.69.69 0 0 1 .344.636Z"></svg:path><svg:path d="M3.82 9.253a.699.699 0 0 1-.01-1.213l7.156-4.172a2.1 2.1 0 0 1 2.117.002l7.112 4.17a.699.699 0 0 1-.01 1.212l-7.132 4.024a2.1 2.1 0 0 1-2.056.003z"></svg:path></svg:g>`,
})
export class BitcoinIconsBlockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
