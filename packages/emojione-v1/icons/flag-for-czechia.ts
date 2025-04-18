import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForCzechiaIcon],svg[emojione-v1-flag-for-czechia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec1c24" d="M32.454 32.03L4.11 52.25c1.538 1.106 3.499 1.754 5.89 1.754h44c6.627 0 10-4.925 10-11v-11H32.416z"></svg:path><svg:path fill="#e6e7e8" d="M54 10H10c-2.201 0-4.04.553-5.514 1.5L32.416 32H64V21c0-6.075-3.373-11-10-11"></svg:path><svg:path fill="#1b75bb" d="M32.416 32L4.486 11.5C1.513 13.407 0 16.942 0 21v22c0 3.883 1.385 7.289 4.11 9.246l28.344-20.219z"></svg:path>`,
})
export class EmojioneV1FlagForCzechiaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
