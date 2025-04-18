import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNetworkPingRoundedIcon],svg[material-symbols-light-network-ping-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.808 16.923q-.213 0-.356-.144q-.144-.144-.144-.357t.144-.356t.356-.143h5.788l-7.55-7.55q-.14-.14-.153-.349t.152-.36q.139-.139.354-.139t.355.14L12 14.905l5.046-5.045q-.119-.283-.179-.52t-.06-.439q0-.766.53-1.295q.528-.529 1.294-.529q.765 0 1.298.529q.533.528.533 1.294t-.531 1.298t-1.299.533q-.165 0-.377-.047q-.213-.047-.47-.161l-5.381 5.4h5.788q.213 0 .357.144t.143.357t-.143.356t-.357.143z"></svg:path>`,
})
export class MaterialSymbolsLightNetworkPingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
