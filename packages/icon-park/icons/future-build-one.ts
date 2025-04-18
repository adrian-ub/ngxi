import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFutureBuildOneIcon],svg[icon-park-future-build-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M13.9994 24C15.2168 15.7039 23.9994 5 23.9994 5C23.9994 5 32.7819 15.7039 33.9994 24C35.09 31.4323 30.9994 44 30.9994 44H16.9994C16.9994 44 12.9087 31.4323 13.9994 24Z"></svg:path><svg:path d="M18 14H30"></svg:path><svg:path d="M15 20H33"></svg:path><svg:path d="M14 26L34 26"></svg:path><svg:path d="M15 32H33"></svg:path><svg:path d="M16 38H32"></svg:path><svg:path stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path d="M24 4V6"></svg:path></svg:g>`,
})
export class IconParkFutureBuildOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
