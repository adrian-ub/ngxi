import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPrintErrorIcon],svg[material-symbols-light-print-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20v-4H3.577v-5.384q0-.85.577-1.425t1.423-.576h12.846q.558 0 1.013.275q.455.274.697.726H17.73q-.667 0-1.141.474t-.475 1.14v3.232H8V19h8.116v1zM7 7.846v-3.23h10v3.23zM19 20q-.31 0-.52-.21t-.21-.52t.21-.521q.209-.21.52-.21t.52.21t.21.52t-.21.52Q19.312 20 19 20m-.5-4.23v-4h1v4z"></svg:path>`,
})
export class MaterialSymbolsLightPrintErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
