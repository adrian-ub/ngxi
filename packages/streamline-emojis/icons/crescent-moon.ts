import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEmojisCrescentMoonIcon],svg[streamline-emojis-crescent-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#45413c" d="M11.17 45.5a14.5 1.5 0 1 0 29 0a14.5 1.5 0 1 0-29 0" opacity=".15"></svg:path><svg:path fill="#ffe500" d="M28.3 4.65A15.42 15.42 0 1 1 6.64 26.32a.62.62 0 0 0-1.1.52A18.84 18.84 0 1 0 28.83 3.55a.62.62 0 0 0-.53 1.1"></svg:path><svg:path fill="#ebcb00" d="M41.05 14.43a19.2 19.2 0 0 1 0 5.36a18.84 18.84 0 0 1-35.2 6.35a.58.58 0 0 0-.31.7a18.84 18.84 0 1 0 35.51-12.41"></svg:path><svg:path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M28.3 4.65A15.42 15.42 0 1 1 6.64 26.32a.62.62 0 0 0-1.1.52A18.84 18.84 0 1 0 28.83 3.55a.62.62 0 0 0-.53 1.1"></svg:path>`,
})
export class StreamlineEmojisCrescentMoonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
