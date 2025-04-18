import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlowerPlayingCardsIcon],svg[openmoji-flower-playing-cards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M17 5.05h38v62H17z"></svg:path><svg:circle cx="30.987" cy="21.354" r="10" fill="#fff"></svg:circle><svg:path fill="#3f3f3f" d="M55 48.142c-19.5-19.5-38 .025-38 .025V67h38Z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 5.05h38v62H17z"></svg:path><svg:circle cx="30.987" cy="21.354" r="10"></svg:circle><svg:path d="M17 48.167s18.5-19.5 38 0"></svg:path></svg:g>`,
})
export class OpenmojiFlowerPlayingCardsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
