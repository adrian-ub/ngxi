import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsShoppingBagIcon],svg[pixelarticons-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2h6v2H9zm6 4V4h2v2h4v16H3V6h4V4h2v2zm0 2H9v2H7V8H5v12h14V8h-2v2h-2z"></svg:path>`,
})
export class PixelarticonsShoppingBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
