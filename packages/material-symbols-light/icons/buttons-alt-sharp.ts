import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightButtonsAltSharpIcon],svg[material-symbols-light-buttons-alt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17V7h18v10zm4.558-2.5h.884v-2.058H10.5v-.884H8.442V9.5h-.884v2.058H5.5v.884h2.058z"></svg:path>`,
})
export class MaterialSymbolsLightButtonsAltSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
