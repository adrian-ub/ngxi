import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLabPanelOutlineSharpIcon],svg[material-symbols-lab-panel-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21v-9h2V7.725H2V3h9v4.725h-1V12h4V7.725h-1V3h9v4.725h-1V12h2v9zM15 6h5V5h-5zM4 6h5V5H4zm12 6h3V8h-3zM5 12h3V8H5zm-2 7h18v-5H3zM4 6V5zm11 0V5zM3 19v-5z"></svg:path>`,
})
export class MaterialSymbolsLabPanelOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
