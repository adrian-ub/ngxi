import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDirectionsRailway2OutlineIcon],svg[material-symbols-directions-railway-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 22l2-2h12l2 2zm3-3l1-1h-.5q-1.45 0-2.475-1.025T4 14.5V8q0-3.225 2.313-5.113T12 1t5.688 1.888T20 8v6.5q0 1.45-1.025 2.475T16.5 18H16l1 1zm.5-3h9q.625 0 1.063-.437T18 14.5V11H6v3.5q0 .625.438 1.063T7.5 16m4.5-1q.625 0 1.063-.437T13.5 13.5t-.437-1.062T12 12t-1.062.438T10.5 13.5t.438 1.063T12 15M6 9h12V8q0-.575-.112-1.062T17.575 6H6.425q-.2.45-.312.938T6 8zm2.225-5h7.55q-.775-.5-1.737-.75T12 3t-2.037.25T8.225 4M12 4"></svg:path>`,
})
export class MaterialSymbolsDirectionsRailway2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
