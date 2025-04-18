import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBookmarksIcon],svg[tabler-bookmarks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 10v11l-5-3l-5 3V10a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3"></svg:path><svg:path d="M11 3h5a3 3 0 0 1 3 3v11"></svg:path></svg:g>`,
})
export class TablerBookmarksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
