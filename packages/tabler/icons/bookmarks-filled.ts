import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBookmarksFilledIcon],svg[tabler-bookmarks-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 6a4 4 0 0 1 4 4v11a1 1 0 0 1-1.514.857L10 19.166l-4.486 2.691a1 1 0 0 1-1.508-.743L4 21V10a4 4 0 0 1 4-4z"></svg:path><svg:path d="M16 2a4 4 0 0 1 4 4v11a1 1 0 0 1-2 0V6a2 2 0 0 0-2-2h-5a1 1 0 0 1 0-2z"></svg:path></svg:g>`,
})
export class TablerBookmarksFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
