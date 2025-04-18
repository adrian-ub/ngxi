import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBachelorCapOneIcon],svg[icon-park-outline-bachelor-cap-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M5 16L24 6l19 10l-19 10z"></svg:path><svg:path d="M11 20v14.464c0 1.464 1.055 2.723 2.471 3.095c2.205.58 5.585 1.66 8.885 3.47c1.021.56 2.266.56 3.288 0c3.3-1.81 6.68-2.89 8.885-3.47C35.945 37.187 37 35.93 37 34.464V20"></svg:path><svg:path stroke-linecap="round" d="M43 16v16"></svg:path></svg:g>`,
})
export class IconParkOutlineBachelorCapOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
