import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEdgesensorLowSharpIcon],svg[material-symbols-light-edgesensor-low-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.808 13.5v-6h1v6zm15.384 3v-6h1v6zM6.808 21V3h10.384v18zm1-3.5h8.384v-11H7.808z"></svg:path>`,
})
export class MaterialSymbolsLightEdgesensorLowSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
