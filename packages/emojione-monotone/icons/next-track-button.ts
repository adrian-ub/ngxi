import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneNextTrackButtonIcon],svg[emojione-monotone-next-track-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.213 10.788c-11.715-11.717-30.711-11.717-42.426 0c-11.716 11.715-11.716 30.711 0 42.426s30.711 11.715 42.426 0s11.716-30.711 0-42.426M52 46h-5.219V32l-17.39 14V32L12 46V18l17.392 14V18l17.39 14V18H52z"></svg:path>`,
})
export class EmojioneMonotoneNextTrackButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
