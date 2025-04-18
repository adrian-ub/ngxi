import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FaceWithoutMouthIcon],svg[emojione-v1-face-without-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbbf67" d="M63.89 31.945c0 17.641-14.301 31.943-31.945 31.943C14.299 63.889 0 49.586 0 31.945C0 14.301 14.299 0 31.945 0C49.589 0 63.89 14.301 63.89 31.945"></svg:path><svg:g fill="#fff"><svg:ellipse cx="20.844" cy="28.449" rx="6.493" ry="9.727"></svg:ellipse><svg:ellipse cx="42.813" cy="28.449" rx="6.494" ry="9.727"></svg:ellipse></svg:g><svg:g fill="#25333a"><svg:ellipse cx="20.844" cy="28.449" rx="4.201" ry="5.094"></svg:ellipse><svg:ellipse cx="42.812" cy="28.449" rx="4.201" ry="5.094"></svg:ellipse></svg:g>`,
})
export class EmojioneV1FaceWithoutMouthIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
