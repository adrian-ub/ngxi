import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBookmarksOutlineIcon],svg[material-symbols-bookmarks-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V8q0-.825.588-1.412T6 6h8q.825 0 1.413.588T16 8v14l-6-3zm2-3.025l4-2.15l4 2.15V8H6zM18 18V4H7V2h11q.825 0 1.413.588T20 4v14zM6 8h8z"></svg:path>`,
})
export class MaterialSymbolsBookmarksOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
