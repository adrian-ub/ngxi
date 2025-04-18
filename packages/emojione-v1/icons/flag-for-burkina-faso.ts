import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForBurkinaFasoIcon],svg[emojione-v1-flag-for-burkina-faso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#128807" d="M54 54H10C3.373 54 0 49.075 0 43V32h64v11c0 6.075-3.373 11-10 11"></svg:path><svg:path fill="#ec1c24" d="M0 21c0-6.075 3.373-11 10-11h44c6.627 0 10 4.925 10 11v11H0z"></svg:path><svg:path fill="#f9cb38" d="m41.621 29.07l-7.421.01l-2.3-7.506l-2.285 7.506l-7.425-.01l6.01 4.57l-2.327 7.46l6.04-4.637l6.04 4.637l-2.338-7.46z"></svg:path>`,
})
export class EmojioneV1FlagForBurkinaFasoIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
