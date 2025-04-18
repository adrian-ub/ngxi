import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBookmarksOutlineSharpIcon],svg[material-symbols-light-bookmarks-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V6.846h10.289V21l-5.145-2.654zm1-1.602l4.154-2.17l4.135 2.17V7.846H6zm12-1.956V4H7.789V3H19v14.442zM6 7.846h8.289z"></svg:path>`,
})
export class MaterialSymbolsLightBookmarksOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
