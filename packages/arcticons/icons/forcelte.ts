import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsForcelteIcon],svg[arcticons-forcelte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.927 30.5l-.001-13l-6.976 8.732h8.612m11.488-4.426a4.306 4.306 0 0 0-4.306-4.306h0a4.306 4.306 0 0 0-4.306 4.306v4.388a4.306 4.306 0 0 0 4.306 4.306h0a4.306 4.306 0 0 0 4.306-4.306h-4.306"></svg:path>`,
})
export class ArcticonsForcelteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
