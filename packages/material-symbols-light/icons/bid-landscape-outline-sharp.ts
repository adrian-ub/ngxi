import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBidLandscapeOutlineSharpIcon],svg[material-symbols-light-bid-landscape-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm1-3.78V19h14V9.596L13.242 16l-4.011-4.011zm0-1.428l4.23-4.23l3.99 3.988L19 8.096V5H5zm0-5.196v-1.5v6.454v-3.988v5.657v-4.23V16zm0 5.196V5v9.55v-3.988zm0 1.427v-4.23V16V9.596V19z"></svg:path>`,
})
export class MaterialSymbolsLightBidLandscapeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
