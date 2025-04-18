import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FullMoonIcon],svg[emojione-v1-full-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32.12" r="31.875" fill="#f5eb35"></svg:circle><svg:g fill="#e0cf35"><svg:circle cx="29.32" cy="53.02" r="9.226"></svg:circle><svg:path d="M41.904 24.487a3.918 3.918 0 1 1-7.836-.002a3.918 3.918 0 0 1 7.836.002"></svg:path><svg:circle cx="5.967" cy="36.54" r="3.845"></svg:circle><svg:circle cx="6.313" cy="18.917" r="2.195"></svg:circle><svg:path d="M20.967 19.656a3.433 3.433 0 1 1-6.866 0a3.433 3.433 0 0 1 6.866 0"></svg:path><svg:circle cx="42.896" cy="11.07" r="4.835"></svg:circle></svg:g>`,
})
export class EmojioneV1FullMoonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
