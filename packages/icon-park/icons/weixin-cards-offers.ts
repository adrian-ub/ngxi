import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWeixinCardsOffersIcon],svg[icon-park-weixin-cards-offers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M6 12L42 16V40L6 36V12Z"></svg:path><svg:path d="M38 15.5554V8L6.00049 11.9999"></svg:path></svg:g>`,
})
export class IconParkWeixinCardsOffersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
