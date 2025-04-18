import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1WaxingGibbousMoonIcon],svg[emojione-v1-waxing-gibbous-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32.02" cy="32.11" r="31.863" fill="#f5eb35"></svg:circle><svg:path fill="#405866" d="M18.281 3.397C7.571 8.534.161 19.447.161 32.111c0 14.497 9.689 26.71 22.938 30.571c-10.963-10.539-19.1-39.15-4.816-59.29"></svg:path><svg:g fill="#e0cf35"><svg:circle cx="29.339" cy="53" r="9.222"></svg:circle><svg:path d="M41.921 24.477a3.918 3.918 0 0 1-7.833 0a3.917 3.917 0 0 1 7.833 0"></svg:path></svg:g><svg:g fill="#4f6977"><svg:circle cx="5.998" cy="36.526" r="3.844"></svg:circle><svg:circle cx="6.344" cy="18.911" r="2.194"></svg:circle></svg:g><svg:g fill="#e0cf35"><svg:circle cx="17.561" cy="19.647" r="3.431"></svg:circle><svg:path d="M47.745 11.07a4.83 4.83 0 0 1-4.833 4.83a4.832 4.832 0 1 1 4.833-4.83"></svg:path></svg:g>`,
})
export class EmojioneV1WaxingGibbousMoonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
