import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsShippingIcon],svg[gridicons-shipping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10h2a3 3 0 1 0 6 0h4a3 3 0 1 0 6 0h2v-5zM7 18.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 7 18.5M4 14V7h10v7zm13 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 17 18.5"></svg:path>`,
})
export class GridiconsShippingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
