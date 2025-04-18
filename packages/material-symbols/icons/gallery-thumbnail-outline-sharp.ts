import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGalleryThumbnailOutlineSharpIcon],svg[material-symbols-gallery-thumbnail-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19V5h14v14zm16-8V5h6v6zm2-2h2V7h-2zM3 17h10V7H3zm1-2h8l-2.625-3.5L7.5 14l-1.375-1.825zm13 4v-6h6v6zm2-2h2v-2h-2zM3 17V7zm16-8V7zm0 8v-2z"></svg:path>`,
})
export class MaterialSymbolsGalleryThumbnailOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
