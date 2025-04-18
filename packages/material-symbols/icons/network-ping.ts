import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNetworkPingIcon],svg[material-symbols-network-ping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18v-2h6.5L2 7.5l1.4-1.4l8.6 8.575l5.2-5.2q-.1-.225-.15-.462T17 8.5q0-1.05.725-1.775T19.5 6t1.775.725T22 8.5t-.725 1.775T19.5 11q-.225 0-.437-.037t-.413-.113L13.5 16H20v2z"></svg:path>`,
})
export class MaterialSymbolsNetworkPingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
