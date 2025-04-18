import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneRoundPushpinIcon],svg[emojione-round-pushpin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d0d0" d="M42.6 29.4L2 62l32.6-40.6z"></svg:path><svg:circle cx="45" cy="19" r="17" fill="#ed4c5c"></svg:circle>`,
})
export class EmojioneRoundPushpinIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
