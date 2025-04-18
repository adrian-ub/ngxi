import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHearoesIcon],svg[arcticons-hearoes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.043 24.535l-6.81-3.932v7.864z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.033 32.1c-7.997 0-14.793-6.483-14.793-14.48S16.037 3.14 24.033 3.14c11.874 0 21.5 9.626 21.5 21.5s-9.626 21.5-21.5 21.5s-21.5-9.626-21.5-21.5c0-4.819.9-9.808 5.955-14.659c-2.186 5.159-2.695 7.086-2.695 11.4c0 10.073 8.167 18.239 18.24 18.239c8.273 0 14.98-6.707 14.98-14.98S32.306 9.66 24.033 9.66c-4.987 0-5.774 2.14-5.774 3.985s1.179 3.536 5.774 3.536a7.459 7.459 0 1 1 0 14.918"></svg:path>`,
})
export class ArcticonsHearoesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
