import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsProductSubscriptionsOutlinedIcon],svg[eos-icons-product-subscriptions-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.841 15.1L12 13l-.841 2.1L9 15.292l1.64 1.489L10.146 19L12 17.821L13.854 19l-.494-2.219L15 15.292zM6 2h12v2H6zM4 6h16v2H4z"></svg:path><svg:path fill="currentColor" d="M20 12v8H4v-8zm0-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2"></svg:path>`,
})
export class EosIconsProductSubscriptionsOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
