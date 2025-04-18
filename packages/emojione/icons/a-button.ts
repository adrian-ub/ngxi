import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneAButtonIcon],svg[emojione-a-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5a79" d="M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10z"></svg:path><svg:path fill="#fff" d="M41.7 46H47L35 14h-6L17 46h5.3l4.2-11.2h11.1zM28.3 30l3.7-9.9l3.7 9.9z"></svg:path>`,
})
export class EmojioneAButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
