import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEdgesensorHighSharpIcon],svg[material-symbols-light-edgesensor-high-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.27 16.5v-6h1v6zm2.769-3v-6h1v6zM6.808 21V3h10.384v18zm12.154-4.5v-6h1v6zm2.769-3v-6h1v6zm-13.923 4h8.384v-11H7.808z"></svg:path>`,
})
export class MaterialSymbolsLightEdgesensorHighSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
