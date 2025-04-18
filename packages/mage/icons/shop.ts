import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageShopIcon],svg[mage-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 9.944a3.08 3.08 0 0 1-2.056 2.899a2.9 2.9 0 0 1-1.027.185a3.08 3.08 0 0 1-2.899-2.056a2.9 2.9 0 0 1-.185-1.028c.003.351-.06.7-.185 1.028A3.08 3.08 0 0 1 12 13.028a3.08 3.08 0 0 1-2.898-2.056a2.9 2.9 0 0 1-.185-1.028c.002.351-.06.7-.185 1.028a3.08 3.08 0 0 1-2.899 2.056c-.35.002-.7-.06-1.027-.185A3.08 3.08 0 0 1 2.75 9.944l.462-1.623l1.11-3.166a2.06 2.06 0 0 1 1.943-1.377h11.47a2.06 2.06 0 0 1 1.942 1.377l1.11 3.166z"></svg:path><svg:path d="M19.194 12.843v5.324a2.056 2.056 0 0 1-2.055 2.055H6.86a2.055 2.055 0 0 1-2.056-2.055v-5.324m4.113 4.296h6.166"></svg:path></svg:g>`,
})
export class MageShopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
