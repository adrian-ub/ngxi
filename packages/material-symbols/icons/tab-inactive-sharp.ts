import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTabInactiveSharpIcon],svg[material-symbols-tab-inactive-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22v-4H2v-4h2v2h2V6h10V4h-2V2h4v4h4v16zM2 12V8h2v4zm0-6V2h4v2H4v2zm6-2V2h4v2z"></svg:path>`,
})
export class MaterialSymbolsTabInactiveSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
