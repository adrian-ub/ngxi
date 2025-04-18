import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTvOffOutlineRoundedIcon],svg[material-symbols-tv-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5v11.5q0 .5-.312.75T21 17.5t-.687-.262t-.313-.763V5H8q-.5 0-.75-.312T7 4t.25-.687T8 3h12q.825 0 1.413.588T22 5M3.175 3.175L5 5H4v12h10.15L1.4 4.2q-.275-.275-.287-.688T1.4 2.8q.275-.275.7-.275t.7.275l18.4 18.4q.275.275.275.7t-.275.7t-.7.275t-.7-.275L16.2 19H16v1q0 .425-.288.713T15 21H9q-.425 0-.712-.288T8 20v-1H4q-.825 0-1.412-.587T2 17V5q0-.925.588-1.375zm10.8 7.95"></svg:path>`,
})
export class MaterialSymbolsTvOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
