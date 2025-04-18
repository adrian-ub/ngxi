import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPrintErrorOutlineSharpIcon],svg[material-symbols-light-print-error-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20v-4H3.577V8.616h16.556v1H4.577V15H7v-1.538h9.116v1H8V19h8.116v1zM7 8.615v-4h10v4h-1v-3H8v3zM19 20q-.31 0-.52-.21t-.21-.52t.21-.521q.209-.21.52-.21t.52.21t.21.52t-.21.52Q19.312 20 19 20m-.5-4.23v-4h1v4zM4.577 9.615h15.556z"></svg:path>`,
})
export class MaterialSymbolsLightPrintErrorOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
