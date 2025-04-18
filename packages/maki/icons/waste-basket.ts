import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiWasteBasketIcon],svg[maki-waste-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.41 5.58l-1.34 8a.5.5 0 0 1-.49.41H4.42a.5.5 0 0 1-.49-.41l-1.34-8A.5.5 0 0 1 3.08 5h8.83a.5.5 0 0 1 .5.58M13 3.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1 0-1H5V1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V3h2.5a.5.5 0 0 1 .5.5M9 3V2H6v1z"></svg:path>`,
})
export class MakiWasteBasketIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
