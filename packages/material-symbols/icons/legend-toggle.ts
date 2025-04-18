import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLegendToggleIcon],svg[material-symbols-legend-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19v-2h16v2zm0-4v-2h16v2zm0-4V8.65L10 5l5 3.55L20 5v2.45L15 11L9.925 7.4z"></svg:path>`,
})
export class MaterialSymbolsLegendToggleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
