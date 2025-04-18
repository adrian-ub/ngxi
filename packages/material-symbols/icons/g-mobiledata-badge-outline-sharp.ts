import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGMobiledataBadgeOutlineSharpIcon],svg[material-symbols-g-mobiledata-badge-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17h8v-6h-4v2h2v2h-4V9h6V7H8zm-5 4V3h18v18zm2-2h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsGMobiledataBadgeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
