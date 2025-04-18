import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneNoEntryIcon],svg[emojione-no-entry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ff5a79"></svg:circle><svg:path fill="#fff" d="M9 26h46v12H9z"></svg:path>`,
})
export class EmojioneNoEntryIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
