import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDataTransferHorizontalArrowSquareDataInternetTransferNetworkHorizontalIcon],svg[streamline-interface-arrows-data-transfer-horizontal-arrow-square-data-internet-transfer-network-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect><svg:path d="m6 10.5l-2-2h6m-2-5l2 2H4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsDataTransferHorizontalArrowSquareDataInternetTransferNetworkHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
