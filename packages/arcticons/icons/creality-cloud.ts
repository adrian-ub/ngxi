import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrealityCloudIcon],svg[arcticons-creality-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.833 6.142l9.291 6.538l8.947-6.538l9.429 6.47l-18.376 13.076L5.5 12.612z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.124 25.688v16.17L5.5 29.327V12.61m37 .002v16.715l-18.376 12.53"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.312 35.592V19.15l-9.188-6.47l-9.312 6.47v16.442"></svg:path>`,
})
export class ArcticonsCrealityCloudIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
