import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRecentViewsSortIcon],svg[icon-park-solid-recent-views-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSRecentViewsSort0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 5v25h36V5M30 37l-6 6l-6-6m6-7v13"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24 21q6.075 0 11-6q-4.925-6-11-6t-11 6q4.925 6 11 6Z"></svg:path><svg:path fill="#000" d="M24 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSRecentViewsSort0)"></svg:path>`,
})
export class IconParkSolidRecentViewsSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
