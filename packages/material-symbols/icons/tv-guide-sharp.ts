import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTvGuideSharpIcon],svg[material-symbols-tv-guide-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm5-5h2v-6h1.75L14 16h2l3-8h-2.5L15 12.5L13.5 8H5v2h3z"></svg:path>`,
})
export class MaterialSymbolsTvGuideSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
