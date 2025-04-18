import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalCafeSharpIcon],svg[material-symbols-light-local-cafe-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-1h14v1zm0-3.77V4h16v5.5h-3.692v6.73zM17.308 8.5H20V5h-2.692z"></svg:path>`,
})
export class MaterialSymbolsLightLocalCafeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
