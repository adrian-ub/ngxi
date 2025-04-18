import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageShoppingBagIcon],svg[mage-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.484 6.219v12.14a2.89 2.89 0 0 0 2.891 2.891h9.25a2.89 2.89 0 0 0 2.89-2.89V6.218"></svg:path><svg:path d="m19.516 6.219l-3.134-3.134a1.16 1.16 0 0 0-.82-.335H8.438a1.16 1.16 0 0 0-.821.335L4.484 6.22zM8.531 9.688l.359.705A2.89 2.89 0 0 0 11.48 12h1.04a2.89 2.89 0 0 0 2.59-1.607l.359-.705"></svg:path></svg:g>`,
})
export class MageShoppingBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
