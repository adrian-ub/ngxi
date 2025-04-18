import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPointOfSaleIcon],svg[ic-sharp-point-of-sale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5v6h14zm-2 4H7V4h10zm5 16H2v-3h20zM18 9H6l-4 9h20zm-8 7H8v-1h2zm0-2H8v-1h2zm0-2H8v-1h2zm3 4h-2v-1h2zm0-2h-2v-1h2zm0-2h-2v-1h2zm3 4h-2v-1h2zm0-2h-2v-1h2zm0-2h-2v-1h2z"></svg:path>`,
})
export class IcSharpPointOfSaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
