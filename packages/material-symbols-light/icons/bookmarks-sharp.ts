import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBookmarksSharpIcon],svg[material-symbols-light-bookmarks-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V6.846h10.289V21l-5.145-2.654zm13-3.558V4H7.789V3H19v14.442z"></svg:path>`,
})
export class MaterialSymbolsLightBookmarksSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
