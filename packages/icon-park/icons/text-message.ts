import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTextMessageIcon],svg[icon-park-text-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M44 7H4V37H19L24 42L29 37H44V7Z"></svg:path><svg:path stroke="#fff" d="M14 16H20"></svg:path><svg:path stroke="#fff" d="M14 24H16"></svg:path><svg:path stroke="#fff" d="M29 14L36 28"></svg:path><svg:path stroke="#fff" d="M28.9998 13.9998L21.9998 27.9998"></svg:path><svg:path stroke="#fff" d="M24 24H34"></svg:path></svg:g>`,
})
export class IconParkTextMessageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
