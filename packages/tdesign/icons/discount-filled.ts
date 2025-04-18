import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDiscountFilledIcon],svg[tdesign-discount-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.474 7.524a1.5 1.5 0 1 0-2.122 2.122a1.5 1.5 0 0 0 2.122-2.122"></svg:path><svg:path fill="currentColor" d="m22.003 1.998l.808 10.505l-10.932 10.932L.565 12.121L11.497 1.19zm-8.711 4.466a3 3 0 1 0 4.243 4.242a3 3 0 0 0-4.243-4.242"></svg:path>`,
})
export class TdesignDiscountFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
