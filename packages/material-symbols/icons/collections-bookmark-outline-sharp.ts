import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCollectionsBookmarkOutlineSharpIcon],svg[material-symbols-collections-bookmark-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16h12V4h-2v7l-2.5-1.5L13 11V4H8zm-2 2V2h16v16zm-4 4V6h2v14h14v2zM8 4v12zm5 7l2.5-1.5L18 11l-2.5-1.5z"></svg:path>`,
})
export class MaterialSymbolsCollectionsBookmarkOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
