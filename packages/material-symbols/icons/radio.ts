import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRadioIcon],svg[material-symbols-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22q-.825 0-1.412-.587T2 20V6.65L15.9 1l.65 1.65L8.3 6H20q.825 0 1.413.588T22 8v12q0 .825-.587 1.413T20 22zm4-3q1.05 0 1.775-.725T10.5 16.5t-.725-1.775T8 14t-1.775.725T5.5 16.5t.725 1.775T8 19m-4-8h12V9h2v2h2V8H4z"></svg:path>`,
})
export class MaterialSymbolsRadioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
