import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols4gMobiledataBadgeOutlineSharpIcon],svg[material-symbols-4g-mobiledata-badge-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17h7v-6h-3.5v2H18v2h-3V9h5V7h-7zm-5 0h2v-3h2v-2h-2V7H8v5H6V7H4v7h4zm-7 4V3h22v18zm2-2h18V5H3zm0 0V5z"></svg:path>`,
})
export class MaterialSymbols4gMobiledataBadgeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
