import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinidoroIcon],svg[arcticons-minidoro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.799 17.882c5.61-6.24 17.88-7.34 19.605 5.71c1.112 8.415-7.527 16.622-19.605 16.78c-9.573.123-19.729-7.756-19.285-17.014c.63-13.135 16.374-11.578 19.285-5.477"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.799 17.882c1.754-3.466 4.324-6.27 9.322-7.108M17.944 7.628c6.974 2.334 6.823 5.854 5.855 10.254c-1.112-3.314-3.575-5.951-9.176-7.02m9.176 9.614v6.902m0 0l6.321 7.02"></svg:path>`,
})
export class ArcticonsMinidoroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
