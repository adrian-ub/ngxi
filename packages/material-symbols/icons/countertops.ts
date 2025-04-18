import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCountertopsIcon],svg[material-symbols-countertops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-8H2v-2h4q-.825 0-1.412-.587T4 8V4h6v4q0 .825-.587 1.413T8 10h8V7q0-.425-.288-.712T15 6t-.712.288T14 7h-2q0-1.25.875-2.125T15 4t2.125.875T18 7v3h4v2h-2v8zm7-2h2v-6h-2z"></svg:path>`,
})
export class MaterialSymbolsCountertopsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
