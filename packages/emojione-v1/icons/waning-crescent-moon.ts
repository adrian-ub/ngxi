import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1WaningCrescentMoonIcon],svg[emojione-v1-waning-crescent-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32.2" cy="32" r="31.688" fill="#405866"></svg:circle><svg:path fill="#f5eb35" d="M18.438 3.442C7.787 8.55.415 19.399.415 32c0 14.418 9.636 26.564 22.813 30.404c-10.903-10.483-18.997-38.935-4.79-58.962"></svg:path><svg:g fill="#4f6977"><svg:circle cx="29.529" cy="52.777" r="9.172"></svg:circle><svg:path d="M42.04 24.407a3.895 3.895 0 0 1-7.791 0a3.897 3.897 0 0 1 7.791 0"></svg:path></svg:g><svg:g fill="#e0cf35"><svg:circle cx="6.316" cy="36.39" r="3.823"></svg:circle><svg:circle cx="6.659" cy="18.871" r="2.182"></svg:circle></svg:g><svg:g fill="#4f6977"><svg:circle cx="17.815" cy="19.604" r="3.413"></svg:circle><svg:path d="M47.835 11.07a4.804 4.804 0 0 1-4.808 4.803a4.807 4.807 0 0 1-4.807-4.803a4.808 4.808 0 0 1 9.615 0"></svg:path></svg:g>`,
})
export class EmojioneV1WaningCrescentMoonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
