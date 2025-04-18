import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirShoppingBagArrowUpIcon],svg[iconoir-shopping-bag-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 21h2.169a2 2 0 0 0 1.976-2.304l-1.384-9A2 2 0 0 0 17.284 8H6.716a2 2 0 0 0-1.977 1.696l-1.385 9A2 2 0 0 0 5.331 21H7.5m4.5-2v-7m0 0l3 3m-3-3l-3 3m5-10a2 2 0 1 0-4 0"></svg:path>`,
})
export class IconoirShoppingBagArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
