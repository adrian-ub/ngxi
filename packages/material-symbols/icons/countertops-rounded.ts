import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCountertopsRoundedIcon],svg[material-symbols-countertops-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8q-.425 0-.712-.288T12 7q0-1.25.875-2.125T15 4t2.125.875T18 7v3h3q.425 0 .713.288T22 11t-.288.713T21 12h-1v6q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18v-6H3q-.425 0-.712-.288T2 11t.288-.712T3 10h3q-.825 0-1.412-.587T4 8V5q0-.425.288-.712T5 4h4q.425 0 .713.288T10 5v3q0 .825-.587 1.413T8 10h8V7q0-.425-.288-.712T15 6t-.712.288T14 7t-.288.713T13 8m-2 10h2v-6h-2z"></svg:path>`,
})
export class MaterialSymbolsCountertopsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
