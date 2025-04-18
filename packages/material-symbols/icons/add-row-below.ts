import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddRowBelowIcon],svg[material-symbols-add-row-below-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10V2h18v8zm0 10v-8h18v8h-4.1q.05-.25.075-.488T17 19q0-2.075-1.45-3.537T12 14t-3.55 1.463T7 19q0 .275.025.513T7.1 20zm8 2v-2H9v-2h2v-2h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsAddRowBelowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
