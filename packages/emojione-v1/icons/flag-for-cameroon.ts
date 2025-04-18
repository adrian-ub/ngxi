import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForCameroonIcon],svg[emojione-v1-flag-for-cameroon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec1c24" d="M22 10h20v44H22z"></svg:path><svg:path fill="#007a5e" d="M10 10C3.373 10 0 14.925 0 21v22c0 6.075 3.373 11 10 11h12V10z"></svg:path><svg:path fill="#f9cb38" d="M54 10H42v44h12c6.627 0 10-4.925 10-11V21c0-6.075-3.373-11-10-11M40.462 28.689l-6.202.011l-1.92-6.274l-1.914 6.274l-6.206-.011l5.03 3.822l-1.952 6.232l5.05-3.871l5.05 3.871l-1.958-6.232z"></svg:path>`,
})
export class EmojioneV1FlagForCameroonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
