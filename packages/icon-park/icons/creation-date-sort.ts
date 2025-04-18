import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCreationDateSortIcon],svg[icon-park-creation-date-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 5V30.0036H42V5"></svg:path><svg:path stroke-linejoin="round" d="M30 37L24 43L18 37"></svg:path><svg:path stroke-linejoin="round" d="M24 30V43"></svg:path><svg:path d="M16.0009 15.001L32.0009 15.001"></svg:path><svg:path d="M24.0005 7V23"></svg:path></svg:g>`,
})
export class IconParkCreationDateSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
