import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVideogameAssetOffSharpIcon],svg[material-symbols-light-videogame-asset-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17V6.994h3.994L14.5 14.5h-1.427L2.74 4.167l.714-.713l17.092 17.092l-.713.714l-4.26-4.26zM9.812 7H21v9.952h-1.237zm7.69 2.5q-.415 0-.709.291t-.293.707t.291.709t.707.293t.709-.291t.293-.707t-.291-.709t-.707-.293M7.5 14.5h1v-2h2v-1h-2v-2h-1v2h-2v1h2z"></svg:path>`,
})
export class MaterialSymbolsLightVideogameAssetOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
