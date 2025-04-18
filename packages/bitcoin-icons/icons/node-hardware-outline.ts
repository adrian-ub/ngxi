import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsNodeHardwareOutlineIcon],svg[bitcoin-icons-node-hardware-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M20.54 9.984v4.123a.69.69 0 0 1-.356.644l-7.13 4.024a2.1 2.1 0 0 1-2.057.003L3.82 14.752a.69.69 0 0 1-.355-.659V9.998a.69.69 0 0 1 .345-.653l7.156-4.172a2.1 2.1 0 0 1 2.117.003l7.112 4.17a.69.69 0 0 1 .344.638Z"></svg:path><svg:path d="M3.82 10.558a.699.699 0 0 1-.01-1.213l7.157-4.172a2.1 2.1 0 0 1 2.116.003l7.112 4.17a.699.699 0 0 1-.01 1.212l-7.132 4.023a2.1 2.1 0 0 1-2.056.003z"></svg:path></svg:g>`,
})
export class BitcoinIconsNodeHardwareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
