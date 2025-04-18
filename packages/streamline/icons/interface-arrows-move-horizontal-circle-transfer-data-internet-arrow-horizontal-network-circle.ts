import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveHorizontalCircleTransferDataInternetArrowHorizontalNetworkCircleIcon],svg[streamline-interface-arrows-move-horizontal-circle-transfer-data-internet-arrow-horizontal-network-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m6 10.5l-2-2h6m-2-5l2 2H4"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveHorizontalCircleTransferDataInternetArrowHorizontalNetworkCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
