import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1RadioButtonIcon],svg[emojione-v1-radio-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="32" cy="31.999" fill="#e0e7ec" rx="25.02" ry="25.01"></svg:ellipse><svg:path fill="#405866" d="M32 1C14.91 1 1 14.904 1 32c0 17.09 13.904 30.998 31 30.998c17.1 0 31-13.904 31-30.998C63 14.91 49.096 1 32 1m0 54.48c-12.947 0-23.485-10.534-23.485-23.481S19.05 8.51 32 8.51c12.947 0 23.486 10.54 23.486 23.49c0 12.947-10.534 23.48-23.486 23.48"></svg:path>`,
})
export class EmojioneV1RadioButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
