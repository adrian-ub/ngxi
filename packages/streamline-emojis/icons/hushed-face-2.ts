import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEmojisHushedFace2Icon],svg[streamline-emojis-hushed-face-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffe500" d="M4 21.5a20 20 0 1 0 40 0a20 20 0 1 0-40 0"></svg:path><svg:path fill="#ebcb00" d="M24 1.5a20 20 0 1 0 20 20a20 20 0 0 0-20-20m0 37a18.25 18.25 0 1 1 18.25-18.25A18.25 18.25 0 0 1 24 38.5"></svg:path><svg:path fill="#fff48c" d="M18 5.5a6 1.5 0 1 0 12 0a6 1.5 0 1 0-12 0"></svg:path><svg:path fill="#45413c" d="M8 45.5a16 1.5 0 1 0 32 0a16 1.5 0 1 0-32 0" opacity=".15"></svg:path><svg:path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M4 21.5a20 20 0 1 0 40 0a20 20 0 1 0-40 0"></svg:path><svg:path fill="#fff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M18.5 20a3.5 3.5 0 1 1-3.5-3.5a3.5 3.5 0 0 1 3.5 3.5m18 0a3.5 3.5 0 1 1-3.5-3.5a3.5 3.5 0 0 1 3.5 3.5"></svg:path><svg:path fill="#ffb0ca" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M25.5 32.5A1.5 1.5 0 1 1 24 31a1.5 1.5 0 0 1 1.5 1.5"></svg:path><svg:path fill="#ffaa54" d="M39 26.5c0 .83-1.12 1.5-2.5 1.5s-2.5-.67-2.5-1.5s1.12-1.5 2.5-1.5s2.5.67 2.5 1.5m-29 0c0 .83 1.12 1.5 2.5 1.5s2.5-.67 2.5-1.5s-1.12-1.5-2.5-1.5s-2.5.67-2.5 1.5"></svg:path>`,
})
export class StreamlineEmojisHushedFace2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
