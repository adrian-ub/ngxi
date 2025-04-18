import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUnfloatLandscapeSharpIcon],svg[material-symbols-unfloat-landscape-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v7h-7v9ZM6 8v6h2v-2.575l3.075 3.075l1.425-1.425L9.4 10H12V8Zm11 12v-7h5v7Z"></svg:path>`,
})
export class MaterialSymbolsUnfloatLandscapeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
