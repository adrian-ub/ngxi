import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFiveThirtyIcon],svg[emojione-monotone-five-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m2.564 47L34 46.896V58h-4V35.445c-1.19-.693-2-1.969-2-3.445c0-1.133.475-2.15 1.23-2.878l-.83-3.095L32.234 25l.269 1H34v2.554c1.19.692 2 1.968 2 3.446a4 4 0 0 1-1.139 2.789L38.4 47.975z"></svg:path><svg:circle cx="32" cy="32" r="3" fill="currentColor"></svg:circle>`,
})
export class EmojioneMonotoneFiveThirtyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
