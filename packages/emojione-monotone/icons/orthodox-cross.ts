import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneOrthodoxCrossIcon],svg[emojione-monotone-orthodox-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M55 32.001v-7.5H35.68V17h5.521V9.5H35.68V2h-7.36v7.5h-5.519V17h5.519v7.501H9v7.5h19.32v13.437l-7.359-3.125v7.5l7.359 3.125V62h7.36v-5.937l7.361 3.125v-7.5l-7.361-3.125V32.001z"></svg:path>`,
})
export class EmojioneMonotoneOrthodoxCrossIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
