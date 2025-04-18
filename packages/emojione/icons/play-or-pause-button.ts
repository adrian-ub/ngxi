import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojionePlayOrPauseButtonIcon],svg[emojione-play-or-pause-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="m13 16l19 16l-19 16zm22.8 0h5.7v32h-5.7zm9.5 0H51v32h-5.7z"></svg:path>`,
})
export class EmojionePlayOrPauseButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
