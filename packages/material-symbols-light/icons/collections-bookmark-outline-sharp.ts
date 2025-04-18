import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCollectionsBookmarkOutlineSharpIcon],svg[material-symbols-light-collections-bookmark-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 16h12V4h-2v6.116l-2-1.193l-2 1.193V4h-6zm-1 1V3h14v14zm-3 3V6.616h1V19h12.385v1zm4-16v12zm6 6.116l2-1.193l2 1.193l-2-1.193z"></svg:path>`,
})
export class MaterialSymbolsLightCollectionsBookmarkOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
