import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSyncSavedLocallyRoundedIcon],svg[material-symbols-sync-saved-locally-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.925 11.225L9.5 9.8q-.275-.275-.687-.288T8.1 9.8q-.275.275-.275.7t.275.7l2.125 2.15q.3.3.7.3t.7-.3l4.65-4.25q0-.4-.05-.775t-.325-.65q-.3-.3-.713-.3t-.712.3zM1 21v-2h21q.425 0 .713.288T23 20t-.288.713T22 21zm3-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18z"></svg:path>`,
})
export class MaterialSymbolsSyncSavedLocallyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
