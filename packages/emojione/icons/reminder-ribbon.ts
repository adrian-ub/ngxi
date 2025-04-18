import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneReminderRibbonIcon],svg[emojione-reminder-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c94747" d="M32.1 2S19.4 2 17.4 6.9c-.8 1.9-.1 7.6.1 9.4c1.7-3.2 7.5-5.6 14.3-5.6c7.2 0 13.2 2.6 14.5 6.1h.3V7.1c0-2.4-6.3-5.1-14.5-5.1"></svg:path><svg:path fill="#ff5760" d="M34.1 2.1S52 1.2 52 18.8S20.8 62 20.8 62l-4.9-11.1c0-.1 54.1-44.5 18.2-48.8"></svg:path><svg:path fill="#ff717f" d="M29.8 2.1S12 1.2 12 18.8S43.2 62 43.2 62l4.9-11.1S-6.2 6.4 29.8 2.1"></svg:path>`,
})
export class EmojioneReminderRibbonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
