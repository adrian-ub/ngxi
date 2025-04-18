import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketAltDuotoneLineIcon],svg[lets-icons-basket-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsBasketAltDuotoneLine0"><svg:g fill="none" stroke-linecap="round"><svg:path stroke="#fff" d="m8.5 6.5l-2 3m9-3l2 3"></svg:path><svg:path stroke="silver" stroke-opacity=".25" d="m10.5 15.5l-1-3.5m4 3.5l1-3.5"></svg:path><svg:path stroke="#fff" d="M4.5 9.5v0c.584 0 1.09.406 1.217.976l1.087 4.892c.334 1.501.5 2.252 1.049 2.692s1.317.44 2.856.44h2.582c1.539 0 2.308 0 2.856-.44c.549-.44.715-1.19 1.05-2.692l1.086-4.892c.127-.57.633-.976 1.217-.976v0m-16 0h17"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsBasketAltDuotoneLine0)"></svg:path>`,
})
export class LetsIconsBasketAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
