import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneHeavyMultiplicationXIcon],svg[emojione-monotone-heavy-multiplication-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62 10.571L53.428 2L32 23.429L10.571 2L2 10.571L23.428 32L2 53.429L10.571 62L32 40.571L53.428 62L62 53.429L40.57 32z"></svg:path>`,
})
export class EmojioneMonotoneHeavyMultiplicationXIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
