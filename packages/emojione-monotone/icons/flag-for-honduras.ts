import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForHondurasIcon],svg[emojione-monotone-flag-for-honduras-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.178 34.95L32 33.565l1.824 1.385l-.689-2.251l1.815-1.395l-2.248-.008L32 29.05l-.701 2.246l-2.249.008l1.815 1.395zm-9.834-4.917l1.823-1.384l1.823 1.384l-.688-2.251l1.815-1.395l-2.248-.008l-.702-2.246l-.701 2.246l-2.249.008l1.816 1.395zm19.667 0l1.823-1.384l1.822 1.384l-.687-2.251l1.814-1.395l-2.248-.008l-.701-2.246l-.701 2.246l-2.25.008l1.816 1.395zm-17.142 6.179l-.702-2.245l-.701 2.245l-2.249.008l1.816 1.395l-.689 2.252l1.823-1.385l1.823 1.385l-.688-2.252l1.815-1.395zm17.142 3.655l1.823-1.385l1.822 1.385l-.687-2.252l1.814-1.395l-2.248-.008l-.701-2.245l-.701 2.245l-2.25.008l1.816 1.395z"></svg:path><svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M5.787 22.167h52.426A27.9 27.9 0 0 1 60 32c0 3.459-.635 6.771-1.787 9.834H5.787A27.9 27.9 0 0 1 4 32c0-3.459.635-6.772 1.787-9.833"></svg:path>`,
})
export class EmojioneMonotoneFlagForHondurasIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
