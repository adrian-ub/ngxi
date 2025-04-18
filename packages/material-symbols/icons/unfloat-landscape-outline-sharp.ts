import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUnfloatLandscapeOutlineSharpIcon],svg[material-symbols-unfloat-landscape-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v7h-2V6H4v12h11v2Zm9.075-5.5l1.425-1.425L9.4 10H12V8H6v6h2v-2.575ZM17 20v-7h5v7Zm-5-8Z"></svg:path>`,
})
export class MaterialSymbolsUnfloatLandscapeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
