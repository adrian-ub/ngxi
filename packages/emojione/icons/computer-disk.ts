import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneComputerDiskIcon],svg[emojione-computer-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3e4347" d="M64 57.6c0 3.5-2.9 6.4-6.4 6.4H6.4C2.9 64 0 61.1 0 57.6V6.4C0 2.9 2.9 0 6.4 0h51.2C61.1 0 64 2.9 64 6.4z"></svg:path><svg:circle cx="32" cy="32" r="32" fill="#42ade2"></svg:circle><svg:path fill="#fff" d="M32 40.4c-4.6 0-8.4-3.8-8.4-8.4s3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4s-3.8 8.4-8.4 8.4"></svg:path><svg:path fill="#3e4347" d="M38.4 24c-3.5 0-6.4 2.9-6.4 6.4v3.2c0 3.5 2.9 6.4 6.4 6.4H64V24z"></svg:path>`,
})
export class EmojioneComputerDiskIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
