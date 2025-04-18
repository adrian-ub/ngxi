import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPrintErrorSharpIcon],svg[material-symbols-light-print-error-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20q-.31 0-.52-.21t-.21-.52t.21-.521q.209-.21.52-.21t.52.21t.21.52t-.21.52Q19.312 20 19 20m-.5-4.23v-4h1v4zM7 20v-4H3.577V8.616h16.556v1h-4.017v4.846H8V19h8.116v1zM7 7.846v-3.23h10v3.23z"></svg:path>`,
})
export class MaterialSymbolsLightPrintErrorSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
