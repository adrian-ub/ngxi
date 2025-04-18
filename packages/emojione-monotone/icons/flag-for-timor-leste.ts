import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForTimorLesteIcon],svg[emojione-monotone-flag-for-timor-leste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M19.217 33.256l-5.247.381l-.934 5.246l-2.337-5.016l-5.249.354l3.799-3.485l-2.311-5.024l4.687 2.862l3.821-3.456l-.902 5.251zM9.909 49.174L27.083 32L9.909 14.826a28.3 28.3 0 0 1 3.75-3.957L41.833 32L13.659 53.131a28.3 28.3 0 0 1-3.75-3.957"></svg:path>`,
})
export class EmojioneMonotoneFlagForTimorLesteIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
