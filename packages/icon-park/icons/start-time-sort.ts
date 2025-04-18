import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkStartTimeSortIcon],svg[icon-park-start-time-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 5V30H42V5"></svg:path><svg:path stroke-linejoin="round" d="M30.0367 10.0001L24.9999 15.0143L30.0367 20.1118"></svg:path><svg:path stroke-linejoin="round" d="M30 37L24 43L18 37"></svg:path><svg:path stroke-linejoin="round" d="M24 30V43"></svg:path><svg:path d="M20 9.00195V21.0001"></svg:path></svg:g>`,
})
export class IconParkStartTimeSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
