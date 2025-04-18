import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1UpwardsButtonIcon],svg[emojione-v1-upwards-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1b75bb" d="M63.792 56.913a6.877 6.877 0 0 1-6.878 6.882H6.874A6.88 6.88 0 0 1 0 56.913V6.877A6.876 6.876 0 0 1 6.874 0h50.041a6.876 6.876 0 0 1 6.878 6.877z"></svg:path><svg:path fill="#fff" d="M12.938 42.533c.194 2.843 1.437 5.216 3.137 6.257H50.01c1.704-1.045 2.95-3.426 3.139-6.272l-20.03-27.51l-20.18 27.525"></svg:path>`,
})
export class EmojioneV1UpwardsButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
