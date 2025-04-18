import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneShoppingMallIcon],svg[icon-park-twotone-shopping-mall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTShoppingMall0"><svg:g fill="none"><svg:path fill="#555" fill-rule="evenodd" d="M8 44V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v38" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 44V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v38m0-29l10 6v23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M4 44h40"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTShoppingMall0)"></svg:path>`,
})
export class IconParkTwotoneShoppingMallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
