import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsPurchaseTagAltIcon],svg[bx-bxs-purchase-tag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11.707 2.293A.996.996 0 0 0 11 2H6a.996.996 0 0 0-.707.293l-3 3A.996.996 0 0 0 2 6v5c0 .266.105.52.293.707l10 10a.997.997 0 0 0 1.414 0l8-8a.999.999 0 0 0 0-1.414l-10-10zM8.353 10a1.647 1.647 0 1 1-.001-3.293A1.647 1.647 0 0 1 8.353 10z" fill="currentColor"></svg:path>`,
})
export class BxBxsPurchaseTagAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
