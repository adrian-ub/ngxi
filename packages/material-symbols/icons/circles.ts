import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCirclesIcon],svg[material-symbols-circles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1q2.5 0 4.25 1.75T23 7t-1.75 4.25T17 13t-4.25-1.75T11 7t1.75-4.25T17 1m.1 14.025q.725 0 1.413-.15t1.337-.425q-.525 3.275-3.025 5.413T11 22q-1.875 0-3.512-.712t-2.85-1.925t-1.926-2.85T2 13q0-3.325 2.138-5.825T9.55 4.15q-.275.675-.413 1.4T9 7q.05 3.35 2.4 5.688t5.7 2.337"></svg:path>`,
})
export class MaterialSymbolsCirclesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
