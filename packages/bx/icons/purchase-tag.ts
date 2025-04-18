import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxPurchaseTagIcon],svg[bx-purchase-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.707 3.293A1 1 0 0 0 13 3H4a1 1 0 0 0-1 1v9c0 .266.105.52.293.707l8 8a.997.997 0 0 0 1.414 0l9-9a1 1 0 0 0 0-1.414zM12 19.586l-7-7V5h7.586l7 7z"></svg:path><svg:circle cx="8.496" cy="8.495" r="1.505" fill="currentColor"></svg:circle>`,
})
export class BxPurchaseTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
