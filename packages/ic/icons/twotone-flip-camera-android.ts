import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFlipCameraAndroidIcon],svg[ic-twotone-flip-camera-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="1" fill="currentColor" opacity=".3"></svg:circle><svg:path fill="currentColor" d="M9 12c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3m4 0c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1"></svg:path><svg:path fill="currentColor" d="M8 8H5.09C6.47 5.61 9.05 4 12 4c3.72 0 6.85 2.56 7.74 6h2.06c-.93-4.56-4.96-8-9.8-8c-3.27 0-6.18 1.58-8 4.01V4H2v6h6zm8 6v2h2.91c-1.38 2.39-3.96 4-6.91 4c-3.72 0-6.85-2.56-7.74-6H2.2c.93 4.56 4.96 8 9.8 8c3.27 0 6.18-1.58 8-4.01V20h2v-6z"></svg:path>`,
})
export class IcTwotoneFlipCameraAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
