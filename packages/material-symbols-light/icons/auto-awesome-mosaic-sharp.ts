import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAutoAwesomeMosaicSharpIcon],svg[material-symbols-light-auto-awesome-mosaic-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20H4V4h7zm2-9V4h7v7zm0 9v-7h7v7z"></svg:path>`,
})
export class MaterialSymbolsLightAutoAwesomeMosaicSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
