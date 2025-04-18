import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFollowUpDateSortIcon],svg[icon-park-follow-up-date-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 5V30.0036H42V5"></svg:path><svg:path stroke-linejoin="round" d="M30 37L24 43L18 37"></svg:path><svg:path stroke-linejoin="round" d="M24 30V43"></svg:path><svg:path stroke-linejoin="round" d="M27.9887 10.9785L33 16L27.9887 21.0902"></svg:path><svg:path d="M15.0009 16.001H33"></svg:path></svg:g>`,
})
export class IconParkFollowUpDateSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
