import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForSenegalIcon],svg[emojione-monotone-flag-for-senegal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m40.358 30.142l-6.37-.018L32 24.133l-1.988 5.991l-6.37.018l5.143 3.721l-1.951 6.004L32 36.176l5.166 3.691l-1.953-6.004z"></svg:path><svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-9.833 56.213V5.787C25.229 4.635 28.541 4 32 4s6.771.635 9.833 1.787v52.426C38.771 59.365 35.459 60 32 60s-6.771-.635-9.833-1.787"></svg:path>`,
})
export class EmojioneMonotoneFlagForSenegalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
