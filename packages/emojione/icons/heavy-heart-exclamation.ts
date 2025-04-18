import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneHeavyHeartExclamationIcon],svg[emojione-heavy-heart-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#ff5a79"><svg:circle cx="32" cy="52" r="10"></svg:circle><svg:path d="M57.4 11.8C52.9-2.7 34.3 1.2 32 8.9C29.7 1.2 11.1-2.7 6.6 11.8C4.6 18.1 7.7 24 13 27.7c7.1 5 15.5 5 19 14.3c3.5-9.3 11.8-9.3 19-14.3c5.3-3.7 8.4-9.6 6.4-15.9"></svg:path></svg:g>`,
})
export class EmojioneHeavyHeartExclamationIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
