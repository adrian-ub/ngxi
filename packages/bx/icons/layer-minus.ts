import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxLayerMinusIcon],svg[bx-layer-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.513 12.833l9.022 5.04a1 1 0 0 0 .973.001l8.978-5a1 1 0 0 0-.002-1.749l-9.022-5a1 1 0 0 0-.968-.001l-8.978 4.96a1 1 0 0 0-.003 1.749m9.464-4.69l6.964 3.859l-6.917 3.853l-6.964-3.89z"></svg:path><svg:path fill="currentColor" d="m3.485 15.126l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5l-.971-1.748L12 19.856zM16 4h6v2h-6z"></svg:path>`,
})
export class BxLayerMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
