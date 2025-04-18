import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBookmarksOutlineSharpIcon],svg[material-symbols-bookmarks-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V6h12v16l-6-3zm2-3.025l4-2.15l4 2.15V8H6zM18 18V4H7V2h13v16zM6 8h8z"></svg:path>`,
})
export class MaterialSymbolsBookmarksOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
