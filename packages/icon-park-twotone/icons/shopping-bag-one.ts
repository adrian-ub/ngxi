import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneShoppingBagOneIcon],svg[icon-park-twotone-shopping-bag-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTShoppingBagOne0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="30" x="10" y="12" fill="#555" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M30 18v-8a6 6 0 0 0-6-6v0a6 6 0 0 0-6 6v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTShoppingBagOne0)"></svg:path>`,
})
export class IconParkTwotoneShoppingBagOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
