import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPriceCheckIcon],svg[ic-sharp-price-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8H6V6h5V4H8.5V3h-2v1H4v6h5v2H4v2h2.5v1h2v-1H11zm8.59 4.52l-5.66 5.65l-2.83-2.83l-1.41 1.42L13.93 21L21 13.93z"></svg:path>`,
})
export class IcSharpPriceCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
