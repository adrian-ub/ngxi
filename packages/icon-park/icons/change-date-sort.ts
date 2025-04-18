import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChangeDateSortIcon],svg[icon-park-change-date-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M6 5V30.0036H42V5"></svg:path><svg:path fill="#2F88FF" d="M15.0001 23H19.0016L32.8514 8.85714L28.9943 5L15 19.143L15.0001 23Z"></svg:path><svg:path stroke-linecap="round" d="M30 37L24 43L18 37"></svg:path><svg:path stroke-linecap="round" d="M24 30V43"></svg:path></svg:g>`,
})
export class IconParkChangeDateSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
