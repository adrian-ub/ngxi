import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCatalogIcon],svg[tdesign-catalog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h18v22H3zm2 2v18h14V3zm3 4h8v2H8zm0 4h8v2H8zm0 4h8v2H8z"></svg:path>`,
})
export class TdesignCatalogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
