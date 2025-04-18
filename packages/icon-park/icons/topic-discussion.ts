import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTopicDiscussionIcon],svg[icon-park-topic-discussion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M44 8H4V38H19L24 43L29 38H44V8Z"></svg:path><svg:path stroke="#fff" d="M21 15L20 32"></svg:path><svg:path stroke="#fff" d="M28 15L27 32"></svg:path><svg:path stroke="#fff" d="M33 20L16 20"></svg:path><svg:path stroke="#fff" d="M32 27L15 27"></svg:path></svg:g>`,
})
export class IconParkTopicDiscussionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
