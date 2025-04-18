import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOtherIcon],svg[icon-park-other-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M22.799 4.20101L4.41421 22.5858C3.63317 23.3668 3.63316 24.6332 4.41421 25.4142L22.799 43.799C23.58 44.58 24.8464 44.58 25.6274 43.799L44.0122 25.4142C44.7932 24.6332 44.7932 23.3668 44.0122 22.5858L25.6274 4.20101C24.8464 3.41996 23.58 3.41996 22.799 4.20101Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 24H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 18V30"></svg:path></svg:g>`,
})
export class IconParkOtherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
