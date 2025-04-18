import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForUnitedArabEmiratesIcon],svg[emojione-monotone-flag-for-united-arab-emirates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-9 40v16.564a28 28 0 0 1-2-.746V6.182c.653-.275 1.322-.52 2-.746V22h35.213C59.365 25.062 60 28.541 60 32s-.635 6.938-1.787 10z"></svg:path>`,
})
export class EmojioneMonotoneFlagForUnitedArabEmiratesIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
