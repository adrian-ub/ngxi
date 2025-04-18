import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHonorHealthIcon],svg[arcticons-honor-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.221 16.053c-.64 0-1.254.255-1.707.707l-6.546 6.551l-3.14-3.216a2.413 2.413 0 1 0-3.452 3.374l4.844 4.962a2.413 2.413 0 0 0 3.433.02l8.274-8.277a2.415 2.415 0 0 0-1.705-4.12z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.858 11.853C35.855 6.988 27.412 6.804 24 12.165c-3.412-5.36-11.854-5.176-15.858-.312C-1.953 24.117 19.84 39.826 24 39.826s25.953-15.71 15.858-27.973"></svg:path>`,
})
export class ArcticonsHonorHealthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
