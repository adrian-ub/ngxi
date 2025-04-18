import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSimCardIcon],svg[material-symbols-sim-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19h2v-2H7zm0-4h2v-4H7zm4 4h2v-4h-2zm0-6h2v-2h-2zm4 6h2v-2h-2zm0-4h2v-4h-2zm-9 7q-.825 0-1.412-.587T4 20V8l6-6h8q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22z"></svg:path>`,
})
export class MaterialSymbolsSimCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
