import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabPanelSharpIcon],svg[material-symbols-light-lab-panel-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-7h2V8.321H3V5.04h7v3.28H9V13h6V8.321h-1V5.04h7v3.28h-1V13h2v7zm14-7h3V8.385h-3zM5 13h3V8.385H5z"></svg:path>`,
})
export class MaterialSymbolsLightLabPanelSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
