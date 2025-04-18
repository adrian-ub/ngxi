import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebStoriesOutlineSharpIcon],svg[material-symbols-web-stories-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20V4h2v16zM2 22V2h13v20zm19-4V6h1.5v12zM4 20h9V4H4zM4 4v16z"></svg:path>`,
})
export class MaterialSymbolsWebStoriesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
