import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1BlackSquareButtonIcon],svg[emojione-v1-black-square-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#405866" d="M63.932 57.1a6.89 6.89 0 0 1-6.893 6.896H6.889A6.893 6.893 0 0 1 0 57.1V6.96A6.89 6.89 0 0 1 6.889.067h50.15a6.89 6.89 0 0 1 6.893 6.893z"></svg:path><svg:path fill="#fff" d="M46.48 13.524H17.44a3.99 3.99 0 0 0-3.99 3.99v29.04a3.994 3.994 0 0 0 3.99 3.994h29.04a3.993 3.993 0 0 0 3.989-3.994v-29.04a3.99 3.99 0 0 0-3.989-3.99"></svg:path>`,
})
export class EmojioneV1BlackSquareButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
