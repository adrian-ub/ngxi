import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiEyeIcon],svg[arcticons-emoji-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsEmojiEye0" fill="none" stroke="currentColor" d="M19.647 23.751c-.002 2.469 2.006 4.47 4.484 4.472c2.478.001 4.487-2 4.488-4.467v-.005c.002-2.468-2.006-4.47-4.484-4.471s-4.487 1.998-4.488 4.467z"></svg:path></svg:defs><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24c0 5.973 8.283 10.816 18.5 10.816S42.5 29.973 42.5 24S34.217 13.184 24 13.184S5.5 18.027 5.5 24"></svg:path><svg:use href="#arcticonsEmojiEye0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsEmojiEye0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.904 23.751c0 4.528 3.684 8.198 8.229 8.198s8.23-3.67 8.23-8.198s-3.683-8.199-8.228-8.2s-8.23 3.669-8.231 8.197z"></svg:path>`,
})
export class ArcticonsEmojiEyeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
