import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonShoppingCatalogIcon],svg[carbon-shopping-catalog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 24h4v4h-4zm7 0h4v4h-4zm-7-7h4v4h-4zm7 0h4v4h-4z"></svg:path><svg:path fill="currentColor" d="M28 11h-6V7c0-1.7-1.3-3-3-3h-6c-1.7 0-3 1.3-3 3v4H4c-.6 0-1 .4-1 1v.2l1.9 12.1c.1 1 1 1.7 2 1.7H15v-2H6.9L5.2 13H28zM12 7c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v4h-8z"></svg:path>`,
})
export class CarbonShoppingCatalogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
