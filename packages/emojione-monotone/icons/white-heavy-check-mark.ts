import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneWhiteHeavyCheckMarkIcon],svg[emojione-monotone-white-heavy-check-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.431 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-6.975 48l-.02-.02l-.017.02L11 35.6l7.029-7.164l6.977 7.184l21-21.619L53 21.199z"></svg:path>`,
})
export class EmojioneMonotoneWhiteHeavyCheckMarkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
