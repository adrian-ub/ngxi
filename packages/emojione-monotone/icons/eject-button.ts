import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneEjectButtonIcon],svg[emojione-monotone-eject-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.214 10.787c-11.715-11.716-30.711-11.716-42.426 0c-11.717 11.715-11.717 30.711 0 42.426c11.715 11.716 30.711 11.716 42.426 0s11.715-30.711 0-42.426M48 43.351H16V37.65h32zm-32-9.702l16-19l16 19z"></svg:path>`,
})
export class EmojioneMonotoneEjectButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
