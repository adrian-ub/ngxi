import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkExchangeIcon],svg[icon-park-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 16H29V4L44 19L29 34V24H18V13L4 28L18 44V32H23"></svg:path>`,
})
export class IconParkExchangeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
