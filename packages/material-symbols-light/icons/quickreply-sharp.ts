import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightQuickreplySharpIcon],svg[material-symbols-light-quickreply-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.923 20.77V17h-1.23v-4.615h2.788l-1.123 3.23h1.757zM3 20.076V3h18v6.616h-6.077V17H6.077z"></svg:path>`,
})
export class MaterialSymbolsLightQuickreplySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
