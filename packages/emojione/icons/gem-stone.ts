import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneGemStoneIcon],svg[emojione-gem-stone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9450e0" d="M41 4H23L2 20.1L32 60l30-39.9z"></svg:path><svg:path fill="#c28fef" d="m32 60l12.5-39.9H18.8zM9.5 9.5L2 20.1h16.8L23 4zm45 0L41 4l3.5 16.1H62z"></svg:path>`,
})
export class EmojioneGemStoneIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
