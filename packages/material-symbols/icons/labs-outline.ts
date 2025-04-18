import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLabsOutlineIcon],svg[material-symbols-labs-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.537-1.463T7 17V8q-.825 0-1.412-.587T5 6V4q0-.825.588-1.412T7 2h10q.825 0 1.413.588T19 4v2q0 .825-.587 1.413T17 8v9q0 2.075-1.463 3.538T12 22M7 6h10V4H7zm5 14q1.25 0 2.125-.875T15 17h-3v-2h3v-2h-3v-2h3V8H9v9q0 1.25.875 2.125T12 20M7 6V4z"></svg:path>`,
})
export class MaterialSymbolsLabsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
