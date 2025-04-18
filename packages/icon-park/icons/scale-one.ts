import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkScaleOneIcon],svg[icon-park-scale-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M18 14L5 14L5 9L18 4L30 4L43 9L43 14L30 14"></svg:path><svg:rect width="12" height="40" x="18" y="4" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M18 12H22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 30H23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 18H23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 24H22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 36H22"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M18 10V38"></svg:path></svg:g>`,
})
export class IconParkScaleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
