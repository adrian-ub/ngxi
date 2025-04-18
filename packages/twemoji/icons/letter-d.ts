import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLetterDIcon],svg[twemoji-letter-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M9.057 9.312c0-1.427.992-2.388 2.387-2.388h5.147c6.946 0 10.915 4.465 10.915 11.348C27.506 24.783 23.289 29 16.901 29h-5.395c-1.023 0-2.449-.559-2.449-2.325zm4.651 15.409h3.132c4 0 5.829-2.945 5.829-6.666c0-3.969-1.859-6.852-6.139-6.852h-2.822z"></svg:path>`,
})
export class TwemojiLetterDIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
