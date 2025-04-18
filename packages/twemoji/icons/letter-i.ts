import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLetterIIcon],svg[twemoji-letter-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M15.675 9.156c0-1.55.992-2.418 2.326-2.418c1.333 0 2.325.868 2.325 2.418v17.611c0 1.551-.992 2.418-2.325 2.418s-2.326-.867-2.326-2.418z"></svg:path>`,
})
export class TwemojiLetterIIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
