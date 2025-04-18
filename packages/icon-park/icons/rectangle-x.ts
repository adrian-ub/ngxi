import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRectangleXIcon],svg[icon-park-rectangle-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 4L4 24L24 44L44 24L24 4Z"></svg:path><svg:path stroke-linecap="round" d="M44 4L4 44"></svg:path><svg:path stroke-linecap="round" d="M4 4L44 44"></svg:path></svg:g>`,
})
export class IconParkRectangleXIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
