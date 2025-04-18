import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChimneyIcon],svg[icon-park-chimney-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M13 14H35"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M16 14H24H32L36 44H12L16 14Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 24H33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 34L35 34"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M32 14L36 44"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M16 14L12 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 8L24.8284 7.17157C25.5786 6.42143 26.596 6 27.6569 6H28.3431C29.404 6 30.4214 5.57857 31.1716 4.82843L32 4"></svg:path></svg:g>`,
})
export class IconParkChimneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
