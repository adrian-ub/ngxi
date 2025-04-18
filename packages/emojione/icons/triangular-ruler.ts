import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneTriangularRulerIcon],svg[emojione-triangular-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffce31" d="M.7 61.8C-.5 63-.1 64 1.6 64h59.3c1.7 0 3.1-1.4 3.1-3.1V1.6c0-1.7-1-2.1-2.2-.9zm49.1-15c0 1.7-1.4 3.1-3.1 3.1h-11c-1.7 0-2.1-1-.9-2.2l12.8-12.8c1.2-1.2 2.2-.8 2.2.9z"></svg:path><svg:path fill="#89664c" d="M2.4 61.3h1V64h-1zm2.9 0h1V64h-1zm3 0h1V64h-1zm3-2.3h1v5h-1zm3.1 2.3h1V64h-1zm3 0h1V64h-1zm3 0h1V64h-1zm3-2.3h1v5h-1zm3.1 2.3h1V64h-1zm3 0h1V64h-1zm3 0h1V64h-1zm2.9-2.3h1v5h-1zm3.2 2.3h1V64h-1zm2.9 0h1V64h-1zm3 0h1V64h-1zm3-2.3h1v5h-1zm3.1 2.3h1V64h-1zm3 0h1V64h-1zm3 0h1V64h-1zm3-2.3h1v5h-1z"></svg:path>`,
})
export class EmojioneTriangularRulerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
