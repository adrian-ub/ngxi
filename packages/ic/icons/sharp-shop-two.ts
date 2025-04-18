import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpShopTwoIcon],svg[ic-sharp-shop-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9H1v13h18v-2H3zm15-4V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v13h18V5zm-6-2h4v2h-4zm0 12V8l5.5 3z"></svg:path>`,
})
export class IcSharpShopTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
