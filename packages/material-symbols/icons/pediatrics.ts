import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPediatricsIcon],svg[material-symbols-pediatrics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7q-.425 0-.712-.288T7 6t.288-.712T8 5h3V3q0-.425.288-.712T12 2t.713.288T13 3v2h3q.425 0 .713.288T17 6t-.288.713T16 7zm1 15q-.825 0-1.412-.587T7 20v-2h4q.425 0 .713-.288T12 17t-.288-.712T11 16H7v-2h4q.425 0 .713-.288T12 13t-.288-.712T11 12H7v-1q0-1.25.875-2.125T10 8h4q1.25 0 2.125.875T17 11v9q0 .825-.587 1.413T15 22z"></svg:path>`,
})
export class MaterialSymbolsPediatricsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
