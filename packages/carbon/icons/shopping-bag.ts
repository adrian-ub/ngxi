import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonShoppingBagIcon],svg[carbon-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.76 11.35A1 1 0 0 0 28 11h-6V7a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v4H4a1 1 0 0 0-1 1.15L4.88 24.3a2 2 0 0 0 2 1.7h18.26a2 2 0 0 0 2-1.7L29 12.15a1 1 0 0 0-.24-.8M12 7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4h-8Zm13.14 17H6.86L5.17 13h21.66Z"></svg:path>`,
})
export class CarbonShoppingBagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
