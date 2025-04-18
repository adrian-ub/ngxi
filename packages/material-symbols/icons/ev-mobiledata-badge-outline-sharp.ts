import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEvMobiledataBadgeOutlineSharpIcon],svg[material-symbols-ev-mobiledata-badge-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17h6v-2H7v-2h3v-2H7V9h4V7H5zm9.5 0h2L19 7h-2l-1.5 6L14 7h-2zM1 21V3h22v18zm2-2h18V5H3zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsEvMobiledataBadgeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
