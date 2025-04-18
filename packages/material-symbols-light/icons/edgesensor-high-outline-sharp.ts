import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEdgesensorHighOutlineSharpIcon],svg[material-symbols-light-edgesensor-high-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.27 16.5v-6h1v6zm2.769-3v-6h1v6zM6.808 21V3h10.384v18zm9.384-2.5H7.808V20h8.384zm-8.384-13h8.384V4H7.808zm11.154 11v-6h1v6zm2.769-3v-6h1v6zm-13.923-8V4zm0 13V20zm0-1h8.384v-11H7.808z"></svg:path>`,
})
export class MaterialSymbolsLightEdgesensorHighOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
