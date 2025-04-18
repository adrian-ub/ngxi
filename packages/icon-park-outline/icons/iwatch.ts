import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineIwatchIcon],svg[icon-park-outline-iwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M36 12H10v24h26z"></svg:path><svg:path stroke-linejoin="round" d="M27 24a4 4 0 1 0-8 0a4 4 0 0 0 8 0Z"></svg:path><svg:path stroke-linecap="round" d="M15 12q0-.11.025-.217l1.607-7A1.026 1.026 0 0 1 17.641 4h10.743c.484 0 .903.326 1.008.783l1.608 7M15 36q0 .11.025.217l1.607 7c.105.458.524.783 1.009.783h10.743c.484 0 .903-.325 1.008-.783l1.608-7M39 16v4"></svg:path></svg:g>`,
})
export class IconParkOutlineIwatchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
