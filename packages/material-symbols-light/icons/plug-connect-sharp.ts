import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlugConnectSharpIcon],svg[material-symbols-light-plug-connect-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.77 19v-1.115H4V12.5H2v-1h2V6.116h3.77V5h1v14zm7.46 0v-3.712h-3.75v-1h3.75V9.712h-3.75v-1h3.75V5h1v1.116H20V11.5h2v1h-2v5.385h-3.77V19z"></svg:path>`,
})
export class MaterialSymbolsLightPlugConnectSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
