import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRetrobreakerIcon],svg[arcticons-retrobreaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.35 39.92h13.63v2.58H17.35zm10.59-17.4h2.92v2.92h-2.92zM11.67 5.5v13.35M5.5 5.5v13.35M17.83 5.5v13.35M24 5.5v13.35M30.17 5.5v13.35M36.33 5.5v13.35M42.5 5.5v13.35M5.5 8.17h37m-37 2.67h37m-37 2.67h37m-37 2.67h37M5.5 5.5h37M11.67 18.85H5.5m12.33 0H42.5"></svg:path>`,
})
export class ArcticonsRetrobreakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
