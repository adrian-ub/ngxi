import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeixinCardsOffersIcon],svg[icon-park-solid-weixin-cards-offers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="m6 12l36 4v24L6 36z"></svg:path><svg:path d="M38 15.555V8L6 12"></svg:path></svg:g>`,
})
export class IconParkSolidWeixinCardsOffersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
