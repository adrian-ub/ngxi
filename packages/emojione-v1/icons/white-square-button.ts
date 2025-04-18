import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1WhiteSquareButtonIcon],svg[emojione-v1-white-square-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d2d3" d="M63.94 57.047a6.89 6.89 0 0 1-6.892 6.898H6.89A6.895 6.895 0 0 1 0 57.047V6.894A6.89 6.89 0 0 1 6.89 0h50.159a6.89 6.89 0 0 1 6.892 6.894v50.153z"></svg:path><svg:path fill="#25333a" d="M46.49 13.459H17.45a3.99 3.99 0 0 0-3.991 3.991v29.039a3.995 3.995 0 0 0 3.991 3.997h29.04a3.995 3.995 0 0 0 3.993-3.997v-29.04a3.99 3.99 0 0 0-3.993-3.991"></svg:path>`,
})
export class EmojioneV1WhiteSquareButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
