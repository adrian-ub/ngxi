import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneOButtonIcon],svg[emojione-o-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5a79" d="M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10z"></svg:path><svg:path fill="#fff" d="M32 48c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16m0-26.9c-6 0-10.9 4.9-10.9 10.9S26 42.9 32 42.9S42.9 38 42.9 32S38 21.1 32 21.1"></svg:path>`,
})
export class EmojioneOButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
