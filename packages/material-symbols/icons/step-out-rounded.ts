import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepOutRoundedIcon],svg[material-symbols-step-out-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-1.25 0-2.125-.875T9 19t.875-2.125T12 16t2.125.875T15 19t-.875 2.125T12 22M11 5.825L9.1 7.7q-.275.275-.687.287T7.7 7.7q-.275-.275-.275-.7t.275-.7l3.6-3.6q.3-.3.7-.3t.7.3l3.6 3.6q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288L13 5.825V13q0 .425-.288.713T12 14t-.712-.288T11 13z"></svg:path>`,
})
export class MaterialSymbolsStepOutRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
