import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsLocationShoppingIcon],svg[zondicons-location-shopping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0m-2 0a4 4 0 1 0-8 0v2h8zM4 10v2h2v-2zm10 0v2h2v-2z"></svg:path>`,
})
export class ZondiconsLocationShoppingIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
