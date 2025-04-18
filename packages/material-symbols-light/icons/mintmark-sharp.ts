import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMintmarkSharpIcon],svg[material-symbols-light-mintmark-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.385 20.5v-1h5.292l-5.292-5.292v-1.416l6 6V13.5h1v7zm-6.77-4v-1h-3v-1h6v-4h-6v-6h3v-1h1v1h3v1h-6v4h6v6h-3v1z"></svg:path>`,
})
export class MaterialSymbolsLightMintmarkSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
