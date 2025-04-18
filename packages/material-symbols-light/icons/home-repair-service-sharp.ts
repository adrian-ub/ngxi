import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHomeRepairServiceSharpIcon],svg[material-symbols-light-home-repair-service-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 8.462h7V6h-7zM3 19v-4.77h3.385v1h1v-1h9.23v1h1v-1H21V19zm0-5.538v-5h4.5V5h9v3.462H21v5h-3.384V12.23h-1v1.23H7.385v-1.23h-1v1.23z"></svg:path>`,
})
export class MaterialSymbolsLightHomeRepairServiceSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
