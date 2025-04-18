import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMopedSharpIcon],svg[material-symbols-moped-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19q-1.25 0-2.125-.875T4 16H2V9h8v5h3.5L17 9.65V7h-3V5h5v5.35L14.5 16H10q0 1.25-.875 2.125T7 19m0-2q.425 0 .713-.288T8 16H6q0 .425.288.713T7 17M5 8V6h5v2zm14 11q-1.25 0-2.125-.875T16 16t.875-2.125T19 13t2.125.875T22 16t-.875 2.125T19 19m0-2q.425 0 .713-.288T20 16t-.288-.712T19 15t-.712.288T18 16t.288.713T19 17"></svg:path>`,
})
export class MaterialSymbolsMopedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
