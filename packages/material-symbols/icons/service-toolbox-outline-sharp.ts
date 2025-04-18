import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsServiceToolboxOutlineSharpIcon],svg[material-symbols-service-toolbox-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6V3h10v3h1.975L22 12.95V20H2v-7.05L5.025 6zm2 0h6V5H9zm-2 6v-1h2v1h6v-1h2v1h2.4l-1.7-4H6.3l-1.7 4zm0 2H4v4h16v-4h-3v1h-2v-1H9v1H7zm5 0"></svg:path>`,
})
export class MaterialSymbolsServiceToolboxOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
