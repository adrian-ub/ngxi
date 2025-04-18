import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1WaningGibbousMoonIcon],svg[emojione-v1-waning-gibbous-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32.12" cy="32.372" r="31.63" fill="#f5eb35"></svg:circle><svg:path fill="#405866" d="M45.761 3.868c10.635 5.099 17.991 15.928 17.991 28.504c0 14.391-9.618 26.515-22.771 30.347c10.882-10.463 18.963-38.862 4.78-58.851"></svg:path><svg:g fill="#e0cf35"><svg:circle cx="29.46" cy="53.11" r="9.155"></svg:circle><svg:path d="M41.95 24.793a3.89 3.89 0 0 1-7.777 0a3.89 3.89 0 0 1 7.777 0"></svg:path><svg:circle cx="6.289" cy="36.753" r="3.816"></svg:circle><svg:circle cx="6.633" cy="19.266" r="2.177"></svg:circle><svg:path d="M21.17 20a3.406 3.406 0 1 1-6.811 0a3.406 3.406 0 0 1 6.811 0"></svg:path><svg:circle cx="42.934" cy="11.484" r="4.797"></svg:circle></svg:g>`,
})
export class EmojioneV1WaningGibbousMoonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
