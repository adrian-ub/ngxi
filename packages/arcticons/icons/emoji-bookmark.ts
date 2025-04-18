import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiBookmarkIcon],svg[arcticons-emoji-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsEmojiBookmark0" fill="none" stroke="currentColor" d="M32.277 42.5L24 33.34l-8.277 9.16v-37h16.554z"></svg:path></svg:defs><svg:use href="#arcticonsEmojiBookmark0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsEmojiBookmark0" stroke-linecap="round" stroke-linejoin="round"></svg:use>`,
})
export class ArcticonsEmojiBookmarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
