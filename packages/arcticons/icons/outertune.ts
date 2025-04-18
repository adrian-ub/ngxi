import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOutertuneIcon],svg[arcticons-outertune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.273 9.511c0-4.897 3.453-4.665 6.923-2.687L38.6 20.732c1.295.738 2.126 1.918 2.126 3.268s-.83 2.53-2.126 3.268L14.196 41.176c-3.47 1.978-6.923 2.21-6.923-2.687zm7.408 10.01v8.958m13.883-9.402v9.846M11.21 22.742v2.516m20.824-2.78v3.044m-13.882-9.223v15.403m3.471-12.711V29.01m3.47-7.032v4.044"></svg:path>`,
})
export class ArcticonsOutertuneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
