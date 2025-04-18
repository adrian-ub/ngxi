import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxFoodMenuIcon],svg[bx-food-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z"></svg:path><svg:path fill="currentColor" d="M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 18H8V4h11z"></svg:path>`,
})
export class BxFoodMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
