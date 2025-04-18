import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSlideIcon],svg[icon-park-slide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M41 5.5H7V33.5H41V5.5Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 41.5L24 33.5L32 41.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13.9239 24.6628L19.5664 19.155L24.0083 23.4999L33.9669 13.5208"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 5.5H44"></svg:path></svg:g>`,
})
export class IconParkSlideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
