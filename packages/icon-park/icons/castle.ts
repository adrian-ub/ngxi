import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCastleIcon],svg[icon-park-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 11L11 4L18 11H4Z"></svg:path><svg:path d="M30 11L37 4L44 11H30Z"></svg:path><svg:path fill="#2F88FF" d="M44 44V26H40V17H34V26H28V21L24 17L20 21V26H14V17H8V26H4V44H18V40C18 36.6863 20.6863 34 24 34C27.3137 34 30 36.6863 30 40V44H44Z"></svg:path><svg:rect width="8" height="6" x="7" y="11"></svg:rect><svg:rect width="8" height="6" x="33" y="11"></svg:rect></svg:g>`,
})
export class IconParkCastleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
