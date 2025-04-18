import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEmojisThinkingFaceIcon],svg[streamline-emojis-thinking-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffe500" d="M4 21.5a20 20 0 1 0 40 0a20 20 0 1 0-40 0"></svg:path><svg:path fill="#ebcb00" d="M24 1.5a20 20 0 1 0 20 20a20 20 0 0 0-20-20m0 37a18.25 18.25 0 1 1 18.25-18.25A18.25 18.25 0 0 1 24 38.5"></svg:path><svg:path fill="#fff48c" d="M18 5.5a6 1.5 0 1 0 12 0a6 1.5 0 1 0-12 0"></svg:path><svg:path fill="#45413c" d="M8 45.5a16 1.5 0 1 0 32 0a16 1.5 0 1 0-32 0" opacity=".15"></svg:path><svg:path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M4 21.5a20 20 0 1 0 40 0a20 20 0 1 0-40 0"></svg:path><svg:path fill="#ffaa54" d="M38.5 23.5c0 .83-1.12 1.5-2.5 1.5s-2.5-.67-2.5-1.5S34.62 22 36 22s2.5.67 2.5 1.5m-29 0c0 .83 1.12 1.5 2.5 1.5s2.5-.67 2.5-1.5S13.38 22 12 22s-2.5.67-2.5 1.5"></svg:path><svg:path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M30.35 30c-1.47-1.49-4.21-2.5-7.35-2.5a13.4 13.4 0 0 0-2.5.23"></svg:path><svg:path fill="#45413c" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M17.67 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0m9.33.03a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M21 15.5s-3-4.5-6.33-3m18.83 3a11.77 11.77 0 0 1-6.95.83"></svg:path>`,
})
export class StreamlineEmojisThinkingFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
