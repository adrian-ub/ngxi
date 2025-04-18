import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1NeutralFaceIcon],svg[emojione-v1-neutral-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbbf67" d="M63.957 31.98c0 17.66-14.316 31.979-31.979 31.979C14.314 63.959 0 49.641 0 31.98C0 14.316 14.314 0 31.979 0c17.662 0 31.978 14.316 31.978 31.98"></svg:path><svg:g fill="#fff"><svg:ellipse cx="20.865" cy="28.481" rx="6.5" ry="9.737"></svg:ellipse><svg:ellipse cx="42.858" cy="28.481" rx="6.5" ry="9.737"></svg:ellipse></svg:g><svg:g fill="#25333a"><svg:ellipse cx="20.866" cy="28.481" rx="4.206" ry="5.099"></svg:ellipse><svg:ellipse cx="42.858" cy="28.481" rx="4.206" ry="5.099"></svg:ellipse></svg:g><svg:path fill="#633c17" d="M39.06 52.876a2.02 2.02 0 0 1-2.02 2.02H26.928a2.02 2.02 0 1 1 0-4.04h10.111c1.118 0 2.023.906 2.023 2.02"></svg:path>`,
})
export class EmojioneV1NeutralFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
