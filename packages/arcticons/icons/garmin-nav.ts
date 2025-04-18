import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGarminNavIcon],svg[arcticons-garmin-nav-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 15.176V38.5a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4H15.291"></svg:path><svg:circle cx="9.5" cy="9.433" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.176 8.115a2.68 2.68 0 0 0-2.82-2.678a2.78 2.78 0 0 0-2.532 2.83v2.485a2.68 2.68 0 0 0 2.676 2.68h0a2.68 2.68 0 0 0 2.676-2.68h0H9.5M20.25 35.5v-7.108c0-2.812 1.117-5.509 3.105-7.497L31.75 12.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.837 12.5h7.913v7.913"></svg:path>`,
})
export class ArcticonsGarminNavIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
