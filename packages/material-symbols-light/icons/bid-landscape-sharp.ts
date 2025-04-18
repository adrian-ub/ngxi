import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBidLandscapeSharpIcon],svg[material-symbols-light-bid-landscape-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zM19 8.096l-5.78 6.454l-3.99-3.988L5 14.792v1.427l4.23-4.23L13.243 16L19 9.596z"></svg:path>`,
})
export class MaterialSymbolsLightBidLandscapeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
