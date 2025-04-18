import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAirplaneTicketSharpIcon],svg[material-symbols-light-airplane-ticket-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-4.192q.883-.327 1.441-1.088Q5 12.96 5 12t-.559-1.72T3 9.192V5h18v14zm5.927-3.58l8.708-2.312q.336-.081.533-.367q.198-.285.117-.603q-.081-.317-.38-.447q-.3-.13-.616-.049l-2.527.689l-4-3.75l-1.054.234l2.4 4.2l-2.746.677l-1.25-.95l-.604.173z"></svg:path>`,
})
export class MaterialSymbolsLightAirplaneTicketSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
