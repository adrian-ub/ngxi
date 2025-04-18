import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsBasketIcon],svg[grommet-icons-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M2 12h20l-2 11H4zm18-4l-6-7M4 8l6-7M1 8h22v4H1zm7 7v5m8-5v5m-4-5v5"></svg:path>`,
})
export class GrommetIconsBasketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
