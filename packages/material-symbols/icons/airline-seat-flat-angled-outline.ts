import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirlineSeatFlatAngledOutlineIcon],svg[material-symbols-airline-seat-flat-angled-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.05 12.725l2.4-6.575l8.45 3.075q1.575.575 2.275 2.063t.125 3.062l-1.025 2.825zm3.6-4q-.2.5-.363.938t-.337.937l-.325.925zM1.45 13.15l.675-1.875l18.8 6.85L20.25 20zm4.875-1.6q-1.25 0-2.125-.875T3.325 8.55T4.2 6.425t2.125-.875t2.125.875t.875 2.125t-.875 2.125t-2.125.875m0-2q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m5.3 1.975l8.45 3.1l.35-.95q.275-.8-.062-1.55T19.225 11.1L12.65 8.725zm-5.3-2.95"></svg:path>`,
})
export class MaterialSymbolsAirlineSeatFlatAngledOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
