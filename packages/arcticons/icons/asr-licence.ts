import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAsrLicenceIcon],svg[arcticons-asr-licence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.959 43.55a21.484 21.484 0 1 1 10.59-10.586"></svg:path><svg:circle cx="38" cy="38" r="7.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.222 34.811a12.997 12.997 0 1 1 3.577-3.57m2.633 2.902l-1.361 7.714h3.858"></svg:path>`,
})
export class ArcticonsAsrLicenceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
