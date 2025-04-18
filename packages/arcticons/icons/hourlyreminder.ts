import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHourlyreminderIcon],svg[arcticons-hourlyreminder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.277 32.7V21.49A13.27 13.27 0 0 0 27.08 8.588v-.985a3.102 3.102 0 0 0-6.204 0V8.6a13.27 13.27 0 0 0-10.153 12.89V32.7l-4.206 4.206v1.943h34.966v-1.943Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.326 38.849a4.652 4.652 0 1 0 9.303 0"></svg:path>`,
})
export class ArcticonsHourlyreminderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
