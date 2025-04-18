import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSandstormIcon],svg[icon-park-sandstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 22H36C40.4183 22 44 18.4183 44 14C44 9.58172 40.4183 6 36 6C31.5817 6 28 9.58172 28 14"></svg:path><svg:path d="M10 29H4"></svg:path><svg:path d="M27 29H21"></svg:path><svg:path d="M44 29H38"></svg:path><svg:path d="M10 35H4"></svg:path><svg:path d="M27 35H21"></svg:path><svg:path d="M44 35H38"></svg:path><svg:path d="M16 42H4"></svg:path><svg:path d="M44 42H32"></svg:path></svg:g>`,
})
export class IconParkSandstormIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
