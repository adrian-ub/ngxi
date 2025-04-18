import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHandPaintedPlateIcon],svg[icon-park-hand-painted-plate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-width="4" d="M18 10H42C43.1046 10 44 10.8954 44 12V38C44 39.1046 43.1046 40 42 40H18"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M4 12C4 10.8954 4.89543 10 6 10H18V40H6C4.89543 40 4 39.1046 4 38V12Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 17V21"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 16L25 33"></svg:path><svg:rect width="4" height="4" x="9" y="25" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="9" y="31" fill="#fff" rx="2"></svg:rect></svg:g>`,
})
export class IconParkHandPaintedPlateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
