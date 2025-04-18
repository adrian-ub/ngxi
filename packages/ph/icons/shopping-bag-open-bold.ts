import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagOpenBoldIcon],svg[ph-shopping-bag-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 24v16H44V60ZM44 196v-96h168v96Zm136-72a52 52 0 0 1-104 0a12 12 0 0 1 24 0a28 28 0 0 0 56 0a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhShoppingBagOpenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
