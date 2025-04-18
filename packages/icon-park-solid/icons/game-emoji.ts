import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGameEmojiIcon],svg[icon-park-solid-game-emoji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 30H10a6 6 0 0 0 0 12h28a6 6 0 0 0 0-12m-2-8a8 8 0 1 0 0-16a8 8 0 0 0 0 16M4 14l9-9l9 9l-9 9z"></svg:path>`,
})
export class IconParkSolidGameEmojiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
