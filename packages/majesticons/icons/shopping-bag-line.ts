import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsShoppingBagLineIcon],svg[majesticons-shopping-bag-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 10a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-9zm3-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H6z"></svg:path><svg:path d="M12 4a3 3 0 0 0-3 3v4a1 1 0 1 1-2 0V7a5 5 0 0 1 10 0v4a1 1 0 1 1-2 0V7a3 3 0 0 0-3-3z"></svg:path></svg:g>`,
})
export class MajesticonsShoppingBagLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
