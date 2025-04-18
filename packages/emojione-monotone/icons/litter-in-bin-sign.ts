import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneLitterInBinSignIcon],svg[emojione-monotone-litter-in-bin-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m3 13c0-1 1-2 2-2h4c1 0 2 1 2 2v4c0 1-1 2-2 1.998h-4C36 21 35 20 35 19zM23 34l3 4l-4 2l-2-3zm7 17H16V38h2l1 10h8l1-10h2zm15-15l-1-9l-1 24h-3l-1-13l-1 13h-3l-1-24l-2 5l-6 2l-1-2l5-3l1-4c0-1 1-2 2-2h12c1 0 2 1 2 2l1 11z"></svg:path>`,
})
export class EmojioneMonotoneLitterInBinSignIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
