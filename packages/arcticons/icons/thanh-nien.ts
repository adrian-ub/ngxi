import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThanhNienIcon],svg[arcticons-thanh-nien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 12.694V5.5h37v7.194zm32.889 0L24 22.972L9.611 12.694"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 14.236l.835 1.692l1.867.271l-1.351 1.317l.319 1.86l-1.67-.879l-1.67.878l.32-1.86l-1.351-1.316l1.867-.271zM8.789 34.278h5.447M11.513 42.5v-8.222m5.601 8.222v-8.222L22.56 42.5v-8.222M33.764 42.5v-8.222L39.21 42.5v-8.222m-8.324 0L28.163 42.5l-2.724-8.222"></svg:path>`,
})
export class ArcticonsThanhNienIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
