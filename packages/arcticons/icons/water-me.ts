import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWaterMeIcon],svg[arcticons-water-me-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 7.619L4.5 24.964h5.85V40.38h27.3V24.964h5.85Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.901 28.818a3.9 3.9 0 0 1-7.8 0c0-2.12 3.9-7.71 3.9-7.71s3.9 5.59 3.9 7.71"></svg:path>`,
})
export class ArcticonsWaterMeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
