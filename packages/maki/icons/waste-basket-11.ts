import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiWasteBasket11Icon],svg[maki-waste-basket-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9 4l-1.17 7H3.17L2 4h7zm.25-1.75A.25.25 0 0 1 9 2.5H2A.25.25 0 1 1 2 2h2V0h3v2h2a.25.25 0 0 1 .25.25zM6.5 2V.5h-2V2h2z" fill="currentColor"></svg:path>`,
})
export class MakiWasteBasket11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
