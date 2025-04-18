import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOutputSharpIcon],svg[material-symbols-light-output-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v3h-1V5H5v14h14v-2h1v3zm12.712-3.712l-.689-.688l3.056-3.1H9.385v-1h9.694l-3.056-3.1l.689-.688L21 12z"></svg:path>`,
})
export class MaterialSymbolsLightOutputSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
