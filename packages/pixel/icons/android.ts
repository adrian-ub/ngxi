import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelAndroidIcon],svg[pixel-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10h1v2H5zm13 0h1v2h-1zm4 10v-2h-1v-1h-1v-1h-1v-1h-1v-3h-1v2h-2v-1H9v1H7v-2H6v3H5v1H4v1H3v1H2v2H1v3h22v-3zM8 18v2H6v-2zm8 0h2v2h-2z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
