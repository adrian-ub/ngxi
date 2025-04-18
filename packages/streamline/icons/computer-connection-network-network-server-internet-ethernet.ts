import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerConnectionNetworkNetworkServerInternetEthernetIcon],svg[streamline-computer-connection-network-network-server-internet-ethernet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 10.5v3m-5 0h10"></svg:path><svg:circle cx="7" cy="5.5" r="5"></svg:circle><svg:path d="M2 5.5h10m-5 5c3-3.42 3-6.76 0-10c-2.94 3.12-3 6.44 0 10Z"></svg:path></svg:g>`,
})
export class StreamlineComputerConnectionNetworkNetworkServerInternetEthernetIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
