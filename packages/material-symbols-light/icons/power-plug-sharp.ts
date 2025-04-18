import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPowerPlugSharpIcon],svg[material-symbols-light-power-plug-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.27 20v-2.654L7 14.077V8h2.346V4h1v4h3.308V4h1v4H17v6.077l-3.27 3.27V20z"></svg:path>`,
})
export class MaterialSymbolsLightPowerPlugSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
