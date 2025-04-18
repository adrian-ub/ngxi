import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVesyncIcon],svg[arcticons-vesync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.065 34.279V22.158m26.772 6.336v7.887a5.405 5.405 0 0 1-5.405 5.405H24M42.5 21.35L24 6.137L5.5 21.35m5.565-9.701V7.87"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.837 25.522c0-1.18-.45-2.361-1.35-3.262c-1.802-1.802-4.952-2.005-6.525 0c-3.28 4.18-7.742 13.994-11.022 18.175c-1.573 2.004-4.722 1.802-6.524 0a4.6 4.6 0 0 1-1.35-3.262"></svg:path>`,
})
export class ArcticonsVesyncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
