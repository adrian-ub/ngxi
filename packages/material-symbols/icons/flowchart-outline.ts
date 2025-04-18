import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlowchartOutlineIcon],svg[material-symbols-flowchart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20v-2h-4v-5H9v2H2V9h7v2h2V6h4V4h7v6h-7V8h-2v8h2v-2h7v6zm2-2h3v-2h-3zM4 13h3v-2H4zm13-5h3V6h-3zm0 10v-2zM7 13v-2zm10-5V6z"></svg:path>`,
})
export class MaterialSymbolsFlowchartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
