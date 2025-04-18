import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsLayerMinusIcon],svg[bx-bxs-layer-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.484 11.125l-9.022-5a1 1 0 0 0-.968-.001l-8.978 4.96a1 1 0 0 0-.003 1.749l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5a1 1 0 0 0-.002-1.749z" fill="currentColor"></svg:path><svg:path d="M20.515 15.126L12 19.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5l-.97-1.748zM16 4h6v2h-6z" fill="currentColor"></svg:path>`,
})
export class BxBxsLayerMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
