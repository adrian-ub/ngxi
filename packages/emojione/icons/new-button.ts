import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneNewButtonIcon],svg[emojione-new-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4fd1d9" d="M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10z"></svg:path><svg:path fill="#fff" d="M11 39V25h2.5l5.2 9.3V25H21v14h-2.6l-5.1-9.1V39zm14 0V25h9.8v2.4h-7.1v3.1h6.6v2.4h-6.6v3.8H35V39zm15.3 0L37 25h2.8l2.1 9.6l2.5-9.6h3.3l2.4 9.8l2.1-9.8H55l-3.3 14h-2.9L46 28.5L43.3 39z"></svg:path>`,
})
export class EmojioneNewButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
