import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGameEmojiIcon],svg[icon-park-twotone-game-emoji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGameEmoji0"><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 30H10a6 6 0 0 0 0 12h28a6 6 0 0 0 0-12m-2-8a8 8 0 1 0 0-16a8 8 0 0 0 0 16M4 14l9-9l9 9l-9 9z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGameEmoji0)"></svg:path>`,
})
export class IconParkTwotoneGameEmojiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
