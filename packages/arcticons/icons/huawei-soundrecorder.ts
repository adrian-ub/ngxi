import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHuaweiSoundrecorderIcon],svg[arcticons-huawei-soundrecorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.421 7.04a11.3 11.3 0 0 1 11.39 0a11.548 11.548 0 0 1 0 19.91M23.58 34.044a11.39 11.39 0 1 1-11.39-19.728M24.421 7.04L12.19 14.317M35.81 26.95l-12.23 7.095m3.66-21.09l-11.506 7.26m13.014 10.841V42.5m-6.422-.001h12.286"></svg:path>`,
})
export class ArcticonsHuaweiSoundrecorderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
