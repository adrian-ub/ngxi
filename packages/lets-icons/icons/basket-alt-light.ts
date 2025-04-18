import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketAltLightIcon],svg[lets-icons-basket-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m10.5 15.5l-1-3.5m-1-5.5l-2 3m9-3l2 3m-4 6l1-3.5m-10-2.5v0c.584 0 1.09.406 1.217.976l1.087 4.892c.334 1.501.5 2.252 1.049 2.692s1.317.44 2.856.44h2.582c1.539 0 2.308 0 2.856-.44c.549-.44.715-1.19 1.05-2.692l1.086-4.892c.127-.57.633-.976 1.217-.976v0m-16 0h17"></svg:path>`,
})
export class LetsIconsBasketAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
