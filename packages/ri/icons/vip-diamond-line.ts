import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVipDiamondLineIcon],svg[ri-vip-diamond-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.878 3.003h14.254a1 1 0 0 1 .809.412l3.822 5.256a.5.5 0 0 1-.037.633l-11.354 12.3a.5.5 0 0 1-.706.029L.283 9.304a.5.5 0 0 1-.037-.633l3.823-5.256a1 1 0 0 1 .809-.412m.509 2l-2.8 3.849l9.418 10.202l9.417-10.202l-2.8-3.85z"></svg:path>`,
})
export class RiVipDiamondLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
