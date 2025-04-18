import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneOrthodoxCrossIcon],svg[emojione-orthodox-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c28fef" d="M55 32v-8H36v-7h6V9h-6V2h-8v7h-6v8h6v7H9v8h19v13l-7-3v8l7 3v9h8v-6l7 3v-8l-7-3V32z"></svg:path>`,
})
export class EmojioneOrthodoxCrossIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
