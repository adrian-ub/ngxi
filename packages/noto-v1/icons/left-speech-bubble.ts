import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1LeftSpeechBubbleIcon],svg[noto-v1-left-speech-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" stroke="#2f2f2f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="6" d="M6 60.67c0 25.22 25.22 45.66 56.33 45.66c11.52 0 22.24-2.8 31.16-7.62c3.52-1.9 26.29 11.93 29.19 9.46c3.12-2.66-13.68-21.67-11.42-24.87c4.7-6.67 7.39-14.4 7.39-22.64C118.66 35.45 93.44 15 62.33 15S6 35.45 6 60.67"></svg:path>`,
})
export class NotoV1LeftSpeechBubbleIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
