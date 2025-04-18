import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1EyeInSpeechBubbleIcon],svg[noto-v1-eye-in-speech-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#78a3ad" d="M64 19.39c-29.26 0-52.43 25.97-61.74 38.24a10.366 10.366 0 0 0 0 12.55c9.31 12.27 32.48 38.24 61.74 38.24s52.43-25.97 61.74-38.24c2.82-3.71 2.82-8.83 0-12.55C116.43 45.37 93.26 19.39 64 19.39"></svg:path><svg:circle cx="64" cy="63.91" r="28.3" fill="#fff"></svg:circle><svg:circle cx="64" cy="63.91" r="16.05" fill="#64878e"></svg:circle><svg:path fill="#78a3ad" d="m86.73 102.79l22.12 10.56c2.53 1.21 5.24-1.29 4.24-3.91l-8.4-22.01z"></svg:path>`,
})
export class NotoV1EyeInSpeechBubbleIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
