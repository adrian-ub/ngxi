import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDishwasherOutlineSharpIcon],svg[material-symbols-dishwasher-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11v8h14v-8zm0-2h14V5H5zm7 9q-.825 0-1.412-.587T10 16q0-.675.375-1.437T12 12q1.25 1.8 1.625 2.563T14 16q0 .825-.587 1.413T12 18m5-10q.425 0 .713-.288T18 7t-.288-.712T17 6t-.712.288T16 7t.288.713T17 8M3 21V3h18v18zM5 9V5z"></svg:path>`,
})
export class MaterialSymbolsDishwasherOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
