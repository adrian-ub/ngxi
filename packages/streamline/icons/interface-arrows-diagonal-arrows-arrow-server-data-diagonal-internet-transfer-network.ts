import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDiagonalArrowsArrowServerDataDiagonalInternetTransferNetworkIcon],svg[streamline-interface-arrows-diagonal-arrows-arrow-server-data-diagonal-internet-transfer-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.5 8.5l8-8m0 3.5V.5h0H6m6.5 5l-8 8m0-3.5v3.5H8"></svg:path>`,
})
export class StreamlineInterfaceArrowsDiagonalArrowsArrowServerDataDiagonalInternetTransferNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
