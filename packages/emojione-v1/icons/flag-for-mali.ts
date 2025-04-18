import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForMaliIcon],svg[emojione-v1-flag-for-mali-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9cb38" d="M22 10h20v44H22z"></svg:path><svg:path fill="#137a08" d="M10 10C3.373 10 0 14.925 0 21v22c0 6.075 3.373 11 10 11h12V10z"></svg:path><svg:path fill="#ec1c24" d="M54 10H42v44h12c6.627 0 10-4.925 10-11V21c0-6.075-3.373-11-10-11"></svg:path>`,
})
export class EmojioneV1FlagForMaliIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
