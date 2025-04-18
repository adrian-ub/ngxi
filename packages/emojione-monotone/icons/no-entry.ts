import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneNoEntryIcon],svg[emojione-monotone-no-entry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32c-.001 16.568 13.432 30 30 30s30.001-13.432 30-30c.001-16.568-13.432-30-30-30M9 38V26h46v12z"></svg:path>`,
})
export class EmojioneMonotoneNoEntryIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
