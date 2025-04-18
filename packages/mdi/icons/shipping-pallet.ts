import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShippingPalletIcon],svg[mdi-shipping-pallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20h2v-2h6v2h2v-2h6v2h2v-5h-2v1h-2v-1h-2v1h-2v-1h-2v1H9v-1H7v1H5v-1H3m2-2h14V4H5Z"></svg:path>`,
})
export class MdiShippingPalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
