import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBookmarksRoundedIcon],svg[material-symbols-bookmarks-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 19l-4.55 2.275q-.5.25-.975-.038T4 20.376V8q0-.825.588-1.412T6 6h8q.825 0 1.413.588T16 8v12.375q0 .575-.475.863t-.975.037zm9-1q-.425 0-.712-.288T18 17V4H8q-.425 0-.712-.288T7 3t.288-.712T8 2h10q.825 0 1.413.588T20 4v13q0 .425-.288.713T19 18"></svg:path>`,
})
export class MaterialSymbolsBookmarksRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
