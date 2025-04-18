import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAutoAwesomeMosaicSharpIcon],svg[material-symbols-auto-awesome-mosaic-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21H3V3h8zm2-10V3h8v8zm0 10v-8h8v8z"></svg:path>`,
})
export class MaterialSymbolsAutoAwesomeMosaicSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
