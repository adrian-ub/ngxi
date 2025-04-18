import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLetterPIcon],svg[twemoji-letter-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M10.777 9.342c0-1.458.868-2.418 2.419-2.418h5.488c4.559 0 7.938 2.977 7.938 7.41c0 4.527-3.504 7.349-7.751 7.349H15.43v5.085c0 1.551-.992 2.418-2.326 2.418s-2.326-.867-2.326-2.418zm4.651 8.248h3.162c1.954 0 3.194-1.426 3.194-3.287s-1.24-3.287-3.194-3.287h-3.162z"></svg:path>`,
})
export class TwemojiLetterPIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
