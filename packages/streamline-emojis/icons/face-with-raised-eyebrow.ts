import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEmojisFaceWithRaisedEyebrowIcon],svg[streamline-emojis-face-with-raised-eyebrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#45413c" d="M8 45.5a16 1.5 0 1 0 32 0a16 1.5 0 1 0-32 0" opacity=".15"></svg:path><svg:path fill="#ffe500" d="M4 21.5a20 20 0 1 0 40 0a20 20 0 1 0-40 0"></svg:path><svg:path fill="#ebcb00" d="M24 1.5a20 20 0 1 0 20 20a20 20 0 0 0-20-20m0 37a18.25 18.25 0 1 1 18.25-18.25A18.25 18.25 0 0 1 24 38.5"></svg:path><svg:path fill="#fff48c" d="M18 5.5a6 1.5 0 1 0 12 0a6 1.5 0 1 0-12 0"></svg:path><svg:path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M4 21.5a20 20 0 1 0 40 0a20 20 0 1 0-40 0"></svg:path><svg:path fill="#ffaa54" d="M38.5 26.5c0 .83-1.12 1.5-2.5 1.5s-2.5-.67-2.5-1.5S34.62 25 36 25s2.5.67 2.5 1.5m-29 0c0 .83 1.12 1.5 2.5 1.5s2.5-.67 2.5-1.5S13.38 25 12 25s-2.5.67-2.5 1.5"></svg:path><svg:path fill="#45413c" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M14.5 20.5a1 1 0 1 1-1-1a1 1 0 0 1 1 1m19-1c0 .83.45 1.5 1 1.5s1-.67 1-1.5s-.45-1.5-1-1.5s-1 .67-1 1.5"></svg:path><svg:path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M18.5 27.5h11m2.33-13a3.14 3.14 0 0 1 2.67-2a3.14 3.14 0 0 1 2.67 2m-26.6 2.58a6.2 6.2 0 0 0 2.89.92a6.3 6.3 0 0 0 3.05-.07"></svg:path>`,
})
export class StreamlineEmojisFaceWithRaisedEyebrowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
