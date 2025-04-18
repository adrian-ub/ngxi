import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUntrackerIcon],svg[arcticons-untracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.359 26.433v2.638a5.24 5.24 0 0 1-5.235 5.245h-.229a5.24 5.24 0 0 1-5.254-5.226v-2.657m0-4.651v-2.638a5.24 5.24 0 0 1 5.235-5.245h.229c2.91 0 5.254 2.34 5.254 5.245v2.638M24 19.103v9.872M8.146 11.763C7.68 24.281 6.674 36.923 24 43.5c17.327-6.576 16.32-19.219 15.854-31.736L24 4.5z"></svg:path>`,
})
export class ArcticonsUntrackerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
