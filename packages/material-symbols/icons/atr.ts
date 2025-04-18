import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAtrIcon],svg[material-symbols-atr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20q-1.25 0-2.125-.875T3 17t.875-2.125T6 14t2.125.875T9 17t-.875 2.125T6 20m12 0q-1.25 0-2.125-.875T15 17t.875-2.125T18 14t2.125.875T21 17t-.875 2.125T18 20m-6-10q-1.25 0-2.125-.875T9 7t.875-2.125T12 4t2.125.875T15 7t-.875 2.125T12 10"></svg:path>`,
})
export class MaterialSymbolsAtrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
