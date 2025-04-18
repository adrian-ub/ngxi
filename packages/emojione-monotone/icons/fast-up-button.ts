import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFastUpButtonIcon],svg[emojione-monotone-fast-up-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.214 10.787c-11.715-11.715-30.711-11.715-42.426 0c-11.717 11.717-11.717 30.711 0 42.426c11.715 11.715 30.711 11.715 42.426 0s11.715-30.71 0-42.426m-3.213 35.211h-36L25.88 33.279H14.001l18-19.28l18 19.28H38.122z"></svg:path>`,
})
export class EmojioneMonotoneFastUpButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
