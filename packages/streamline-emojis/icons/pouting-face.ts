import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEmojisPoutingFaceIcon],svg[streamline-emojis-pouting-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff6242" d="M4 21.5a20 20 0 1 0 40 0a20 20 0 1 0-40 0"></svg:path><svg:path fill="#e04122" d="M24 1.5a20 20 0 1 0 20 20a20 20 0 0 0-20-20m0 37a18.25 18.25 0 1 1 18.25-18.25A18.25 18.25 0 0 1 24 38.5"></svg:path><svg:path fill="#ff866e" d="M18 5.5a6 1.5 0 1 0 12 0a6 1.5 0 1 0-12 0"></svg:path><svg:path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M4 21.5a20 20 0 1 0 40 0a20 20 0 1 0-40 0"></svg:path><svg:path fill="#45413c" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M14.5 22.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M19.33 21s-3-4.5-6.33-3m15.67 3s3-4.5 6.33-3"></svg:path><svg:path fill="#45413c" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M31.5 22.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path fill="none" stroke="#45413c" stroke-linecap="round" d="M19 31.5a9 9 0 0 1 10 0"></svg:path><svg:path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M30.92 8.37a2.51 2.51 0 0 1-2.92 2M34.4 13a3 3 0 0 1-1-4.13m-4.86 3.9A3 3 0 0 1 32.6 14"></svg:path><svg:path fill="#e04122" d="M38.5 27c0 .83-1.12 1.5-2.5 1.5s-2.5-.67-2.5-1.5s1.12-1.5 2.5-1.5s2.5.67 2.5 1.5m-29 0c0 .83 1.12 1.5 2.5 1.5s2.5-.67 2.5-1.5s-1.12-1.5-2.5-1.5s-2.5.67-2.5 1.5"></svg:path><svg:path fill="#45413c" d="M8 45.5a16 1.5 0 1 0 32 0a16 1.5 0 1 0-32 0" opacity=".15"></svg:path>`,
})
export class StreamlineEmojisPoutingFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
