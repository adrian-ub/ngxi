import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEndTimeSortIcon],svg[icon-park-end-time-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 5V30.0036H42V5"></svg:path><svg:path stroke-linejoin="round" d="M30 37L24 43L18 37"></svg:path><svg:path stroke-linejoin="round" d="M24 30V43"></svg:path><svg:path stroke-linejoin="round" d="M18.9604 10.9786L23.9972 15.9928L18.9604 21.0903"></svg:path><svg:path d="M29 10.002V22.0001"></svg:path></svg:g>`,
})
export class IconParkEndTimeSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
