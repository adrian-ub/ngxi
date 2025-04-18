import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineStartTimeSortIcon],svg[icon-park-outline-start-time-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 5v25h36V5"></svg:path><svg:path stroke-linejoin="round" d="M30.037 10L25 15.014l5.037 5.098M30 37l-6 6l-6-6m6-7v13"></svg:path><svg:path d="M20 9.002V21"></svg:path></svg:g>`,
})
export class IconParkOutlineStartTimeSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
