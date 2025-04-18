import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCommentIcon],svg[icon-park-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 6H4V36H13V41L23 36H44V6Z"></svg:path><svg:path stroke="#fff" d="M14 19.5V22.5"></svg:path><svg:path stroke="#fff" d="M24 19.5V22.5"></svg:path><svg:path stroke="#fff" d="M34 19.5V22.5"></svg:path></svg:g>`,
})
export class IconParkCommentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
