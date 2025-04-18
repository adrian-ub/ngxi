import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLowDensityIcon],svg[material-symbols-low-density-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V11h2v8h14V5h-8V3h10v18zM3 9V7h2v2zm0-4V3h2v2zm4 8v-2h2v2zm0-8V3h2v2zm4 8v-2h2v2zm0-4V7h2v2z"></svg:path>`,
})
export class MaterialSymbolsLowDensityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
