import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabGroupSharpIcon],svg[material-symbols-light-tab-group-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 20V6.616h1V19h12.385v1zm3-3V3h14v14zm6.77-9.961h6.23V4h-6.23z"></svg:path>`,
})
export class MaterialSymbolsLightTabGroupSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
