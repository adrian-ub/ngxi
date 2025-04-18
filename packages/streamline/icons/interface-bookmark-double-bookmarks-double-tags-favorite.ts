import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceBookmarkDoubleBookmarksDoubleTagsFavoriteIcon],svg[streamline-interface-bookmark-double-bookmarks-double-tags-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9 13.5l-3.5-3l-3.5 3v-9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1Z"></svg:path><svg:path d="M5 .5h6a1 1 0 0 1 1 1v9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceBookmarkDoubleBookmarksDoubleTagsFavoriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
