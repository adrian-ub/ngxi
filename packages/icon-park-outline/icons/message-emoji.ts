import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMessageEmojiIcon],svg[icon-park-outline-message-emoji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 7H4v30h7v5l10-5h23zm-13 9v1m-14-1v1"></svg:path><svg:path d="M31 25s-2 4-7 4s-7-4-7-4"></svg:path></svg:g>`,
})
export class IconParkOutlineMessageEmojiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
