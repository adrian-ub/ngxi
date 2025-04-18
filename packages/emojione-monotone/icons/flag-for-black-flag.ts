import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForBlackFlagIcon],svg[emojione-monotone-flag-for-black-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 25.902q-4.296-11.613-8.598-23.226c-15.84-4.854-21.363 18.166-37.205 13.312L8 16.776L24.744 62h2.488l-8.437-22.786l.001.002C34.639 44.067 40.161 21.049 56 25.902"></svg:path>`,
})
export class EmojioneMonotoneFlagForBlackFlagIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
