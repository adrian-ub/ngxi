import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEdgesensorLowOutlineSharpIcon],svg[material-symbols-light-edgesensor-low-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.808 13.5v-6h1v6zm15.384 3v-6h1v6zM6.808 21V3h10.384v18zm9.384-2.5H7.808V20h8.384zm-8.384-13h8.384V4H7.808zm0 0V4zm0 13V20zm0-1h8.384v-11H7.808z"></svg:path>`,
})
export class MaterialSymbolsLightEdgesensorLowOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
