import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsShoppingCartIcon],svg[rivet-icons-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h2.117l.845 6.755l-.24.358C1.616 10.775 2.807 13 4.803 13H14v-2H4.803a.5.5 0 0 1-.416-.777L4.535 10H14.82l1.16-5.804a1 1 0 0 0-.738-1.166L3.123 0H0zm13.832 2.739L13.18 8H4.883l-.71-5.676zM5 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class RivetIconsShoppingCartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
