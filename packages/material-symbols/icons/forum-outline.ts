import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsForumOutlineIcon],svg[material-symbols-forum-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 22l-4-4H8q-.825 0-1.412-.587T6 16v-1h11q.825 0 1.413-.587T19 13V6h1q.825 0 1.413.588T22 8zM4 12.175L5.175 11H15V4H4zM2 17V4q0-.825.588-1.412T4 2h11q.825 0 1.413.588T17 4v7q0 .825-.587 1.413T15 13H6zm2-6V4z"></svg:path>`,
})
export class MaterialSymbolsForumOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
