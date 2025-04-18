import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1LastQuarterMoonIcon],svg[emojione-v1-last-quarter-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#405866" d="M32.07 64c17.604 0 31.875-14.27 31.875-31.875C63.945 14.521 49.674.25 32.07.25"></svg:path><svg:path fill="#f5eb35" d="M32 64C14.396 64 .125 49.73.125 32.125S14.396.249 32 .249"></svg:path><svg:circle cx="44.736" cy="49.03" r="9.226" fill="#4f6977"></svg:circle><svg:path fill="#e0cf35" d="M22.16 24.488a3.919 3.919 0 0 0 7.836 0a3.917 3.917 0 0 0-3.915-3.916a3.92 3.92 0 0 0-3.921 3.916M13.384 48.37a3.84 3.84 0 0 0 7.678 0a3.836 3.836 0 0 0-3.834-3.833a3.84 3.84 0 0 0-3.844 3.833"></svg:path><svg:g fill="#4f6977"><svg:path d="M54.26 36.542a3.847 3.847 0 0 0 7.692 0a3.846 3.846 0 1 0-7.692 0"></svg:path><svg:circle cx="57.757" cy="18.918" r="2.195"></svg:circle></svg:g><svg:circle cx="7.839" cy="32.896" r="2.195" fill="#e0cf35"></svg:circle><svg:path fill="#4f6977" d="M43.1 19.656a3.434 3.434 0 1 0 6.867 0a3.434 3.434 0 0 0-6.867 0"></svg:path><svg:path fill="#e0cf35" d="M16.339 11.08a4.835 4.835 0 1 0 9.669-.005a4.835 4.835 0 0 0-9.669.005"></svg:path>`,
})
export class EmojioneV1LastQuarterMoonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
