import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiPotatoIcon],svg[arcticons-emoji-potato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsEmojiPotato0" fill="none" stroke="currentColor" d="M39.84 18.08c0 12.53-5.204 18.639-10.054 21.607c-4.237 2.606-8.215 2.813-8.215 2.813c-7.405 0-13.411-6.006-13.411-13.409c0-4.556 2.558-7.83 5.739-11.01C22.168 9.813 21.272 5.5 28.733 5.5c6.136 0 11.107 4.979 11.107 11.114z"></svg:path></svg:defs><svg:use href="#arcticonsEmojiPotato0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsEmojiPotato0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.612 10.094a.863.863 0 0 0 1.727.001v0a.863.863 0 0 0-1.727-.002zm-2.221 24.274a2.22 2.22 0 0 0 4.441.004v-.004a2.22 2.22 0 0 0-4.44-.004z"></svg:path>`,
})
export class ArcticonsEmojiPotatoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
