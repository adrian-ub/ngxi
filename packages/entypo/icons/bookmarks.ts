import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoBookmarksIcon],svg[entypo-bookmarks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 0h-4a1 1 0 0 0-1 1l.023.222c1.102 0 2 .897 2 2v11.359L13 13.4l3 3.6V1a1 1 0 0 0-1-1M9.023 3H5a1 1 0 0 0-1 1v16l3-3.6l3 3.6V4c0-.553-.424-1-.977-1"></svg:path>`,
})
export class EntypoBookmarksIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
