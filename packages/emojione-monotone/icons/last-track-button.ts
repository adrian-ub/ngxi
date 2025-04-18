import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneLastTrackButtonIcon],svg[emojione-monotone-last-track-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.787 53.213c11.715 11.717 30.711 11.717 42.426 0c11.716-11.715 11.716-30.711 0-42.426s-30.711-11.715-42.426 0s-11.716 30.711 0 42.426M12 18h5.219v14l17.39-14v14L52 18v28L34.608 32v14l-17.39-14v14H12z"></svg:path>`,
})
export class EmojioneMonotoneLastTrackButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
