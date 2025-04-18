import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForGuineaBissauIcon],svg[emojione-v1-flag-for-guinea-bissau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00785e" d="M22 54h32c6.627 0 10-4.925 10-11V33H22z"></svg:path><svg:path fill="#f9cb38" d="M54 10H22v23h42V21c0-6.075-3.373-11-10-11"></svg:path><svg:path fill="#ec1c24" d="M22 10H10C3.373 10 0 14.925 0 21v22c0 6.075 3.373 11 10 11h12z"></svg:path><svg:path fill="#25333a" d="m19.06 29.357l-6.303.016l-1.95-6.379l-1.945 6.379l-6.308-.016l5.109 3.883l-1.976 6.334l5.124-3.936l5.132 3.936l-1.982-6.334z"></svg:path>`,
})
export class EmojioneV1FlagForGuineaBissauIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
