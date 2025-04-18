import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1GrinningFaceIcon],svg[emojione-v1-grinning-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbbf67" d="M63.97 31.984c0 17.667-14.317 31.982-31.983 31.982C14.315 63.966 0 49.65 0 31.984S14.315 0 31.986 0C49.652 0 63.97 14.319 63.97 31.984"></svg:path><svg:path fill="#fff" d="M27.488 24.636c0 5.38-2.907 9.739-6.498 9.739s-6.504-4.359-6.504-9.739c0-5.376 2.913-9.735 6.504-9.735s6.498 4.359 6.498 9.735m21.992 0c0 5.38-2.905 9.739-6.495 9.739s-6.504-4.359-6.504-9.739c0-5.376 2.913-9.735 6.504-9.735s6.495 4.359 6.495 9.735"></svg:path><svg:path fill="#25333a" d="M25.2 24.636c0 2.819-1.884 5.101-4.206 5.101c-2.326 0-4.208-2.282-4.208-5.101c0-2.811 1.882-5.099 4.208-5.099c2.322 0 4.206 2.288 4.206 5.099m21.99 0c0 2.819-1.884 5.101-4.207 5.101c-2.326 0-4.206-2.282-4.206-5.101c0-2.811 1.88-5.099 4.206-5.099c2.324 0 4.207 2.288 4.207 5.099"></svg:path><svg:path fill="#633d19" d="M51.996 39.27c0 11.05-8.963 20.01-20.01 20.01c-11.04 0-20.01-8.965-20.01-20.01"></svg:path><svg:path fill="#fff" d="M48.566 41.29c0 4.411-7.578 7.994-16.92 7.994c-9.334 0-16.915-3.583-16.915-7.994"></svg:path>`,
})
export class EmojioneV1GrinningFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
