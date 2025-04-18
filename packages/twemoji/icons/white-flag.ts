import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiWhiteFlagIcon],svg[twemoji-white-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="twemojiWhiteFlag0" fill="#8899A6" d="M5 36a2 2 0 0 1-2-2V3a2 2 0 0 1 4 0v31a2 2 0 0 1-2 2"></svg:path><svg:path id="twemojiWhiteFlag1" fill="#AAB8C2" d="M5 1a2 2 0 0 0-2 2v31a.5.5 0 0 0 1 0V4.414C4 3.633 4.633 3 5.414 3H7a2 2 0 0 0-2-2"></svg:path></svg:defs><svg:use href="#twemojiWhiteFlag0"></svg:use><svg:use href="#twemojiWhiteFlag1"></svg:use><svg:use href="#twemojiWhiteFlag0"></svg:use><svg:use href="#twemojiWhiteFlag1"></svg:use><svg:path fill="#E1E8ED" d="M32.415 3.09c-1.752-.799-3.615-1.187-5.698-1.187c-2.518 0-5.02.57-7.438 1.122c-2.418.551-4.702 1.072-6.995 1.072c-1.79 0-3.382-.329-4.868-1.006A1 1 0 0 0 6 4v19c0 .392.229.747.585.91c1.752.799 3.616 1.187 5.698 1.187c2.518 0 5.02-.57 7.438-1.122c2.418-.551 4.702-1.071 6.995-1.071c1.79 0 3.383.329 4.868 1.007A1.003 1.003 0 0 0 33 23V4a1 1 0 0 0-.585-.91"></svg:path>`,
})
export class TwemojiWhiteFlagIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
