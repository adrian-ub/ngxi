import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPivotTableIcon],svg[icon-park-pivot-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42.0004 4H6.00005C4.89546 4 4.00002 4.89546 4.00005 6.00005L4.00104 42.0001C4.00107 43.1046 4.8965 44 6.00104 44H42.0004C43.105 44 44.0004 43.1046 44.0004 42V6C44.0004 4.89543 43.105 4 42.0004 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20.0088 34.0083H33.5005V20.0083"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24.5 38.5L23 37L20 34L23 31L24.5 29.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M29 24.5L30.5 23L33.5 20L36.5 23L38 24.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14 4L14 44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 14.0378L44 14"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M8 4H28"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M8 44H28"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 8V18"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 8L4 18"></svg:path></svg:g>`,
})
export class IconParkPivotTableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
