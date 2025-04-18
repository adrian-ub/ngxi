import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEscalatorWarningSharpIcon],svg[material-symbols-escalator-warning-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 6q-.825 0-1.412-.587T4.5 4t.588-1.412T6.5 2t1.413.588T8.5 4t-.587 1.413T6.5 6M17 11q-.625 0-1.062-.437T15.5 9.5t.438-1.062T17 8t1.063.438T18.5 9.5t-.437 1.063T17 11M4.5 22v-7H3V7h6.15l4.15 7.175L14.75 12H20v5h-1v5h-4v-7.1l-.775 1.1h-2.2L9.5 11.6V22z"></svg:path>`,
})
export class MaterialSymbolsEscalatorWarningSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
