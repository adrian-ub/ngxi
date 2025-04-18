import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonDeliveryFillIcon],svg[iconamoon-delivery-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2a1 1 0 0 0-1 1v14c0 1.354.897 2.498 2.129 2.872a3 3 0 0 0 5.7.128h6.342a3 3 0 0 0 5.7-.128A3 3 0 0 0 23 17v-4a5 5 0 0 0-5-5h-4V3a1 1 0 0 0-1-1zm13.171 16H14v-8h4a3 3 0 0 1 3 3v4a1 1 0 0 1-.293.707a3 3 0 0 0-5.536.293m-9.878.293a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414M17 19a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonDeliveryFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
