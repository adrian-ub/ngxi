import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHealthProductsIcon],svg[icon-park-outline-health-products-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 12H15l-5 5.843v20.249L15 44h18l5-5.908v-20.25zm-14 8h10m4-8V7a3 3 0 0 0-3-3H18a3 3 0 0 0-3 3v5"></svg:path><svg:circle cx="24" cy="32" r="5"></svg:circle></svg:g>`,
})
export class IconParkOutlineHealthProductsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
