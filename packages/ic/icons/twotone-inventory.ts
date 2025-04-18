import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneInventoryIcon],svg[ic-twotone-inventory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 11.5l1.5 1.5l-6.99 7L11 15.5l1.5-1.5l3.01 3z"></svg:path><svg:path fill="currentColor" d="M17 5v3H7V5H5v14h6.68l-3.51-3.5l4.33-4.33l3.01 3l3.49-3.5V5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 19V5h2v3h10V5h2v5.67l2-2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8.68l-2-2zm7-16c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class IcTwotoneInventoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
