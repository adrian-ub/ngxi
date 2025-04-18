import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAudioShareIcon],svg[arcticons-audio-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.981 11.74h-8.269c-3.278 0-8.248 3.088-8.212 8.264c.037 5.175 4.71 8.293 8.07 8.293h8.297m4.635-16.557h9.042c5.216 0 7.47 4.549 7.44 8.264m-26.668 0h15.88m4.378 0V36.26m7.926-7.963H27.42"></svg:path>`,
})
export class ArcticonsAudioShareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
