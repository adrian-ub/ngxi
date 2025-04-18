import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1NoEntryIcon],svg[emojione-v1-no-entry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#be1e2d" d="M62.961 33.825c-.142 16.255-13.434 29.31-29.693 29.17l-3.102-.028C13.907 62.821.856 49.528.996 33.275l.026-3.104C1.167 13.916 14.461.861 30.716 1.001l3.103.029c16.255.143 29.31 13.438 29.18 29.692l-.031 3.104"></svg:path><svg:path fill="#fff" d="M57.677 34.11a6.57 6.57 0 0 1-6.625 6.507l-38.26-.341a6.563 6.563 0 0 1-6.504-6.625l.008-.94a6.565 6.565 0 0 1 6.623-6.507l38.26.34a6.564 6.564 0 0 1 6.505 6.625z"></svg:path>`,
})
export class EmojioneV1NoEntryIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
