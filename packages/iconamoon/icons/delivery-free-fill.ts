import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonDeliveryFreeFillIcon],svg[iconamoon-delivery-free-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 4a2 2 0 0 1 2-2a4 4 0 0 1 3 1.354A4 4 0 0 1 10.5 2a2 2 0 0 1 2 2c0 .729-.195 1.412-.535 2H13a1 1 0 0 1 1 1v1h4a5 5 0 0 1 5 5v4a3 3 0 0 1-2.129 2.872a3 3 0 0 1-5.7.128H8.83a3 3 0 0 1-5.7-.128A3 3 0 0 1 1 17V7a1 1 0 0 1 1-1h1.035A4 4 0 0 1 2.5 4m2 0a2 2 0 0 1 2 2a2 2 0 0 1-2-2m4 2a2 2 0 0 0 2-2a2 2 0 0 0-2 2m6.671 12H14v-8h4a3 3 0 0 1 3 3v4a1 1 0 0 1-.293.707a3 3 0 0 0-5.536.293m-9.878.293a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414M17 19a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonDeliveryFreeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
