import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FastReverseButtonIcon],svg[emojione-v1-fast-reverse-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1b75bb" d="M63.793 56.913a6.877 6.877 0 0 1-6.878 6.882H6.875A6.88 6.88 0 0 1 0 56.913V6.877A6.877 6.877 0 0 1 6.875 0h50.041a6.876 6.876 0 0 1 6.878 6.877z"></svg:path><svg:g fill="#fff"><svg:path d="M51.938 15.04c2.305.157 4.229 1.164 5.071 2.543v27.51c-.847 1.384-2.774 2.391-5.083 2.546L29.625 31.398z"></svg:path><svg:path d="M29.1 15.04c2.304.157 4.228 1.164 5.07 2.543v27.51c-.845 1.384-2.774 2.391-5.083 2.546L6.786 31.398z"></svg:path></svg:g>`,
})
export class EmojioneV1FastReverseButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
