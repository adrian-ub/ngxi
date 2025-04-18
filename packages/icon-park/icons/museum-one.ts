import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMuseumOneIcon],svg[icon-park-museum-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M8 8.36364L24 4L40 8.36364V14H8V8.36364Z"></svg:path><svg:path stroke-linecap="round" d="M10 14V38"></svg:path><svg:path stroke-linecap="round" d="M17 14V38"></svg:path><svg:path stroke-linecap="round" d="M24 14V38"></svg:path><svg:path stroke-linecap="round" d="M31 14V38"></svg:path><svg:path stroke-linecap="round" d="M38 14V38"></svg:path><svg:rect width="34" height="6" x="7" y="38" stroke-linejoin="round"></svg:rect></svg:g>`,
})
export class IconParkMuseumOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
