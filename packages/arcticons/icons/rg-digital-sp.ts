import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRgDigitalSpIcon],svg[arcticons-rg-digital-sp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 30.692V17.308h4.382c2.477 0 4.485 2.012 4.485 4.495s-2.008 4.495-4.485 4.495H13.5m4.382 0l4.381 4.391M34.5 21.742a4.433 4.433 0 0 0-4.433-4.434h0a4.433 4.433 0 0 0-4.434 4.434v4.517a4.433 4.433 0 0 0 4.434 4.433h0a4.433 4.433 0 0 0 4.433-4.433h-4.433"></svg:path>`,
})
export class ArcticonsRgDigitalSpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
