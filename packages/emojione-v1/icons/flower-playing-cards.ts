import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlowerPlayingCardsIcon],svg[emojione-v1-flower-playing-cards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" transform="translate(11.735 -.271)"><svg:path fill="#25333a" d="M42.572 60.37a4.03 4.03 0 0 1-4.03 4.03H4.036a4.03 4.03 0 0 1-4.03-4.03V4.03A4.03 4.03 0 0 1 4.036 0h34.506a4.03 4.03 0 0 1 4.03 4.03z"></svg:path><svg:path fill="#31444d" d="M9.627 60.37V4.03A4.03 4.03 0 0 1 13.657 0H4.03A4.03 4.03 0 0 0 0 4.03v56.34a4.03 4.03 0 0 0 4.03 4.03h9.627a4.03 4.03 0 0 1-4.03-4.03"></svg:path><svg:path fill="#be1e2d" d="M40.02 31.23V7.422a3.55 3.55 0 0 0-3.549-3.55H6.109a3.55 3.55 0 0 0-3.548 3.55v33.771c6.174-6.109 30.19-28.2 37.459-9.963"></svg:path><svg:path fill="#a31d2d" d="M13.37 7.418c0-1.96 1.587-3.55 3.548-3.55H6.062a3.55 3.55 0 0 0-3.548 3.55v33.771c2.06-2.04 6.109-5.856 10.857-9.363V7.418"></svg:path><svg:circle cx="14.342" cy="15.697" r="11.829" fill="#fff"></svg:circle></svg:g>`,
})
export class EmojioneV1FlowerPlayingCardsIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
