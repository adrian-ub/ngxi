import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNequiColombiaIcon],svg[arcticons-nequi-colombia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.43 7.074l19.878 7.938a2.28 2.28 0 0 1 1.345 2.747l-5.79 20.123a3.496 3.496 0 0 1-4.95 2.147L8.035 28.86a4.647 4.647 0 0 1-1.62-6.905L16.91 7.79a2.146 2.146 0 0 1 2.52-.715Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.144 14.445L25.08 6.29a2.68 2.68 0 0 1 3.237.617L42.01 22.478a1.965 1.965 0 0 1-.045 2.645L27.026 40.99a3.23 3.23 0 0 1-4.938-.281L7.56 21.262a4.58 4.58 0 0 1 1.582-6.818Z"></svg:path>`,
})
export class ArcticonsNequiColombiaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
