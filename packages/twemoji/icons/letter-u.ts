import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLetterUIcon],svg[twemoji-letter-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M8 9.156c0-1.55 1.167-2.418 2.5-2.418s2.5.868 2.5 2.418v10.821c0 2.853 2.055 4.923 5 4.923c2.822 0 5-2.194 5-4.923V9.156c0-1.55 1.168-2.418 2.5-2.418c1.334 0 2.467.868 2.467 2.418v11.069c0 5.209-4.852 9.147-9.967 9.147c-5.178 0-10-3.876-10-9.147z"></svg:path>`,
})
export class TwemojiLetterUIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
