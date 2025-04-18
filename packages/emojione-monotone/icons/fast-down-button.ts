import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFastDownButtonIcon],svg[emojione-monotone-fast-down-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.213 10.787c-11.715-11.715-30.711-11.715-42.426 0c-11.716 11.717-11.716 30.711 0 42.426s30.711 11.715 42.426 0s11.716-30.71 0-42.426M50 32.723L32 51.998L14 32.723h11.879L14 20h36L38.121 32.723z"></svg:path>`,
})
export class EmojioneMonotoneFastDownButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
