import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForGambiaIcon],svg[emojione-monotone-flag-for-gambia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M6.175 43a29 29 0 0 1-.734-2h53.117a29 29 0 0 1-.734 2zm-.734-20c.223-.666.464-1.357.734-2h51.649c.271.643.512 1.334.734 2z"></svg:path>`,
})
export class EmojioneMonotoneFlagForGambiaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
