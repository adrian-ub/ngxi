import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGeometricweatherIcon],svg[arcticons-geometricweather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="16.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.61 42.38L36.85 34l.16-.22l7.49-4.33L40.19 22v-.28l2.24-8.35L34 11.15l-.18-.15l-4.33-7.5L22 7.81l-.28.05l-8.33-2.24L11.15 14l-.16.22l-7.49 4.29L7.81 26c0 .09 0 .19.05.28l-2.24 8.33L14 36.85l.22.16l4.33 7.49L26 40.19h.28Z"></svg:path>`,
})
export class ArcticonsGeometricweatherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
