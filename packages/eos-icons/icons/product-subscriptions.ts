import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsProductSubscriptionsIcon],svg[eos-icons-product-subscriptions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8H4V6h16Zm-2-6H6v2h12Zm4 10v8a2 2 0 0 1-2 2H4a2.006 2.006 0 0 1-2-2v-8a2.006 2.006 0 0 1 2-2h16a2.006 2.006 0 0 1 2 2m-8.073 5.042l2.323-1.986l-3.059-.256L12 12l-1.191 2.8l-3.059.256l2.323 1.986l-.7 2.958L12 18.428L14.627 20Z"></svg:path>`,
})
export class EosIconsProductSubscriptionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
