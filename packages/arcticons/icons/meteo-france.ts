import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeteoFranceIcon],svg[arcticons-meteo-france-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.08 16.15A13.72 13.72 0 0 1 32.89 34a13.24 13.24 0 0 1-17.78 0a13.72 13.72 0 0 1-2.19-17.89a13.22 13.22 0 0 1 17.16-4.37m2.5-1l1.56 1.66l1.56 1.67l-2.29.52l-2.18.52l.77-2.19ZM26.44 4.5c-6.13 15.81-3.43 27.56.32 39v-.1"></svg:path>`,
})
export class ArcticonsMeteoFranceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
