import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForSomaliaIcon],svg[emojione-monotone-flag-for-somalia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m9.724 44.022L32 39.097l-9.724 6.926l3.672-11.259l-9.682-6.976l11.99-.034L32 16.522l3.743 11.231l11.99.034l-9.686 6.976z"></svg:path>`,
})
export class EmojioneMonotoneFlagForSomaliaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
