import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForJordanIcon],svg[emojione-v1-flag-for-jordan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e6e7e8" d="M1 26h63v14H1z"></svg:path><svg:path fill="#ec1c24" d="M32.416 33L4.486 12.5C1.513 14.407 0 17.942 0 22v22c0 3.883 1.385 7.289 4.11 9.246l28.344-20.219z"></svg:path><svg:path fill="#137a08" d="M22.68 40L4.121 53.238C5.656 54.345 7.609 55 10 55h44c6.627 0 10-4.925 10-11v-4z"></svg:path><svg:path fill="#25333a" d="M54 11H10c-2.201 0-4.03.553-5.514 1.5L22.879 26h41.12v-4c0-6.075-3.373-11-10-11"></svg:path><svg:path fill="#fff" d="m9.87 29.52l1.401-4.28l1.37 4.28l4.164-1.603l-2.461 3.728l3.87 2.287l-4.48.388l.61 4.451l-3.073-3.25l-3.091 3.25l.597-4.451l-4.448-.377l3.839-2.285l-2.474-3.741z"></svg:path>`,
})
export class EmojioneV1FlagForJordanIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
