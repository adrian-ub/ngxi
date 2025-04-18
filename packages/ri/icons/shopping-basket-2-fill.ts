import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShoppingBasket2FillIcon],svg[ri-shopping-basket-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.37 3.44l3.212 5.562h3.423v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.925a1 1 0 0 1-.997-.917l-.757-9.083H2.005v-2h3.422L8.639 3.44l1.732 1l-2.634 4.562h8.535L13.639 4.44zm-2.365 9.562h-2v4h2zm-4 0h-2v4h2zm8 0h-2v4h2z"></svg:path>`,
})
export class RiShoppingBasket2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
