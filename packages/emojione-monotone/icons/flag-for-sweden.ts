import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForSwedenIcon],svg[emojione-monotone-flag-for-sweden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m28 30c0 2.375-.3 4.681-.858 6.884H31.017v21.091a27.8 27.8 0 0 1-13.767-4.189V38.884H4.858a28 28 0 0 1 0-13.767H17.25V8.215a27.8 27.8 0 0 1 13.767-4.189v21.092h28.125C59.7 27.32 60 29.626 60 32"></svg:path>`,
})
export class EmojioneMonotoneFlagForSwedenIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
