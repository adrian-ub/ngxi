import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLastTrackButtonIcon],svg[emojione-last-track-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M52 46L34.6 32L52 18zm-17.4 0L17.2 32l17.4-14zM12 18h5.2v28H12z"></svg:path>`,
})
export class EmojioneLastTrackButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
