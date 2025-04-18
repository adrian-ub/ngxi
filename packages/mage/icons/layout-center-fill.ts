import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLayoutCenterFillIcon],svg[mage-layout-center-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9.92V22H8.75A6.76 6.76 0 0 1 2 15.25V9.92zm11 0v5.33A6.76 6.76 0 0 1 15.25 22H13V9.92zm-.06-2H2.06A6.75 6.75 0 0 1 8.75 2h6.5a6.75 6.75 0 0 1 6.69 5.92"></svg:path>`,
})
export class MageLayoutCenterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
