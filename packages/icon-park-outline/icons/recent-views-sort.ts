import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRecentViewsSortIcon],svg[icon-park-outline-recent-views-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 5v25h36V5M30 37l-6 6l-6-6m6-7v13"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M24 21q6.075 0 11-6q-4.925-6-11-6t-11 6q4.925 6 11 6Z"></svg:path><svg:path fill="currentColor" d="M24 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class IconParkOutlineRecentViewsSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
