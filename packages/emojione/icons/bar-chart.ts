import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneBarChartIcon],svg[emojione-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#333"><svg:path d="M0 0h4v64H0z"></svg:path><svg:path d="M0 60h64v4H0z"></svg:path></svg:g><svg:path fill="#fb4f00" d="M38.7 60h12V6.7L38.7 20z"></svg:path><svg:path fill="#5c750a" d="M21.3 60h12V20l-12 13.3z"></svg:path><svg:path fill="#106995" d="M4 60h12V33.3L4 46.7z"></svg:path><svg:path fill="#9aca0a" d="M33.3 20h13.3v40H33.3z"></svg:path><svg:path fill="#21adf1" d="M16 33.3h13.3V60H16z"></svg:path><svg:path fill="#fc9100" d="M50.7 6.7H64V60H50.7z"></svg:path>`,
})
export class EmojioneBarChartIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
