import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageEmojiIcon],svg[icon-park-message-emoji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 7H4V37H11V42L21 37H44V7Z"></svg:path><svg:path stroke="#fff" d="M31 16V17"></svg:path><svg:path stroke="#fff" d="M17 16V17"></svg:path><svg:path stroke="#fff" d="M31 25C31 25 29 29 24 29C19 29 17 25 17 25"></svg:path></svg:g>`,
})
export class IconParkMessageEmojiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
