import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForGuineaBissauIcon],svg[emojione-monotone-flag-for-guinea-bissau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.434 30.279l4.234 3.352l-1.604 5.253l4.252-3.231l4.251 3.231l-1.602-5.253l4.235-3.352h-5.249l-1.635-5.162l-1.587 5.162z"></svg:path><svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M21.167 57.818C11.091 53.574 4 43.601 4 32s7.091-21.574 17.167-25.818zm2-26.818V5.436A27.9 27.9 0 0 1 32 4c15.104 0 27.445 12.022 27.975 27z"></svg:path>`,
})
export class EmojioneMonotoneFlagForGuineaBissauIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
