import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsClinicalNotesSharpIcon],svg[material-symbols-clinical-notes-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16q-1.25 0-2.125-.875T14 13t.875-2.125T17 10t2.125.875T20 13t-.875 2.125T17 16m-6 7v-4.275q1.05-.6 2.15-1t2.3-.6L17 19l1.55-1.875q1.2.15 2.3.575t2.15 1V23zm-2-2H3V3h18v7q-.775-.975-1.75-1.487T17 8V7H7v2h7q-.5.4-.9.9t-.675 1.1H7v2h5q0 .525.113 1.025t.312.975H7v2h2z"></svg:path>`,
})
export class MaterialSymbolsClinicalNotesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
