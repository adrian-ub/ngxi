import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBookmarksOffIcon],svg[tabler-bookmarks-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 7h2a2 2 0 0 1 2 2v2m0 4v6l-5-3l-5 3V9a2 2 0 0 1 2-2"></svg:path><svg:path d="M9.265 4A2 2 0 0 1 11 3h6a2 2 0 0 1 2 2v10M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerBookmarksOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
