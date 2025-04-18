import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiSpoonIcon],svg[arcticons-emoji-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.486 12.463C28.486 8.618 26.478 5.5 24 5.5s-4.486 3.118-4.486 6.963c0 3.572 1.042 6.514 3.274 6.914h0l-.623 21.602c0 .84.688 1.521 1.538 1.521s1.538-.68 1.538-1.52l-.022-21.607h0c2.229-.407 3.267-3.342 3.267-6.91"></svg:path>`,
})
export class ArcticonsEmojiSpoonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
