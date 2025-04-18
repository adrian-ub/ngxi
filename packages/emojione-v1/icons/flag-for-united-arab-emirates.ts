import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForUnitedArabEmiratesIcon],svg[emojione-v1-flag-for-united-arab-emirates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e6e7e8" d="M14 26h50v13H14z"></svg:path><svg:path fill="#25333a" d="M14 54h40c6.627 0 10-4.925 10-11v-4H14z"></svg:path><svg:path fill="#137a08" d="M54 10H14v16h50v-5c0-6.075-3.373-11-10-11"></svg:path><svg:path fill="#ec1c24" d="M14 39V10h-4C3.373 10 0 14.925 0 21v22c0 6.075 3.373 11 10 11h4z"></svg:path>`,
})
export class EmojioneV1FlagForUnitedArabEmiratesIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
