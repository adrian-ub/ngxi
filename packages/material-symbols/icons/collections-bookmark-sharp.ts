import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCollectionsBookmarkSharpIcon],svg[material-symbols-collections-bookmark-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18V2h16v16zm-4 4V6h2v14h14v2zM13 4v7l2.5-1.5L18 11V4z"></svg:path>`,
})
export class MaterialSymbolsCollectionsBookmarkSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
