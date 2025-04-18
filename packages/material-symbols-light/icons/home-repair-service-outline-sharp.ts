import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHomeRepairServiceOutlineSharpIcon],svg[material-symbols-light-home-repair-service-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V8.462h4.5V5h9v3.462H21V19zm4.385-4.77v1h-1v-1H4V18h16v-3.77h-2.384v1h-1v-1zM4 9.462v3.77h2.385v-1h1v1h9.23v-1h1v1H20V9.46zm4.5-1h7V6h-7z"></svg:path>`,
})
export class MaterialSymbolsLightHomeRepairServiceOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
