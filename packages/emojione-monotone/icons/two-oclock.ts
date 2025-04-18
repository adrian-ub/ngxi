import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneTwoOclockIcon],svg[emojione-monotone-two-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m2 33.445V38h-4v-2.278L27.934 37L26 33.418l2.017-1.248c-.002-.058-.017-.111-.017-.17c0-1.477.81-2.752 2-3.445V6h4v22.469L46.07 21L48 24.586l-12.001 7.425A3.98 3.98 0 0 1 34 35.445"></svg:path><svg:circle cx="32" cy="32" r="3" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneTwoOclockIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
