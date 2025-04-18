import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForMauritiusIcon],svg[emojione-v1-flag-for-mauritius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec1c24" d="M0 21h64c0-6.075-3.373-11-10-11H10C3.373 10 0 14.925 0 21"></svg:path><svg:path fill="#2b3990" d="M0 21h64v11H0z"></svg:path><svg:path fill="#f9cb38" d="M0 32h64v11H0z"></svg:path><svg:path fill="#137a08" d="M64 43H0c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11"></svg:path>`,
})
export class EmojioneV1FlagForMauritiusIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
