import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTreeOneIcon],svg[icon-park-tree-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:ellipse cx="24" cy="20" fill="#2F88FF" stroke="#000" rx="15" ry="16"></svg:ellipse><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 14L24 36"></svg:path><svg:path stroke="#000" d="M30 34.6689C28.1626 35.5253 26.1333 36.0003 24 36.0003C21.8667 36.0003 19.8374 35.5253 18 34.6689"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 36L24 44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 22L30 16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 29L18 23"></svg:path></svg:g>`,
})
export class IconParkTreeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
